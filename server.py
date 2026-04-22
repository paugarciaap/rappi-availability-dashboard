from __future__ import annotations

import csv
from collections import defaultdict
from datetime import date, datetime
from pathlib import Path
from typing import Any

import requests
from flask import Flask, jsonify, request, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
OLLAMA_URL = "http://127.0.0.1:11434/api/chat"
OLLAMA_MODEL = "qwen2.5:3b"
OLLAMA_TIMEOUT = 120
MAX_HISTORY_MESSAGES = 10
DATA_FILE_NAME = "availability_long_clean.csv"
DAY_NAMES = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
DAY_NAMES_ES = {
    "Monday": "Lunes",
    "Tuesday": "Martes",
    "Wednesday": "Miércoles",
    "Thursday": "Jueves",
    "Friday": "Viernes",
    "Saturday": "Sábado",
    "Sunday": "Domingo",
}
TIMESERIES_BUCKET_MINUTES = 10
MAX_DROP_EVENTS = 6

app = Flask(__name__)


def find_dataset_path() -> Path:
    direct_candidates = [
        BASE_DIR / DATA_FILE_NAME,
        BASE_DIR / "data" / DATA_FILE_NAME,
        BASE_DIR.parent / DATA_FILE_NAME,
        BASE_DIR.parent / "data" / DATA_FILE_NAME,
        BASE_DIR.parent / "Rappi" / "data" / DATA_FILE_NAME,
    ]

    for candidate in direct_candidates:
        if candidate.exists():
            return candidate

    search_roots = [BASE_DIR, BASE_DIR.parent, BASE_DIR.parent.parent]

    for root in search_roots:
        if not root.exists():
            continue

        match = next(root.rglob(DATA_FILE_NAME), None)
        if match is not None:
            return match

    raise FileNotFoundError(f"Could not find {DATA_FILE_NAME}.")


def format_hour(hour: int) -> str:
    return f"{hour:02d}:00"


def format_number(value: float) -> str:
    return f"{value:,.2f}"


def iso_date(value: date) -> str:
    return value.isoformat()


def parse_date(value: str | None) -> date | None:
    if not value:
        return None

    try:
        return date.fromisoformat(value)
    except ValueError:
        return None


def load_dataset_rows() -> tuple[list[dict[str, Any]], Path]:
    dataset_path = find_dataset_path()
    rows: list[dict[str, Any]] = []

    with dataset_path.open(newline="", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        fieldnames = reader.fieldnames or []

        if "timestamp" not in fieldnames or "value" not in fieldnames:
            raise ValueError("Dataset must include 'timestamp' and 'value' columns.")

        for raw_row in reader:
            timestamp_raw = str(raw_row.get("timestamp", "")).strip()
            value_raw = str(raw_row.get("value", "")).strip()

            if not timestamp_raw or not value_raw:
                continue

            timestamp = datetime.fromisoformat(timestamp_raw)
            value = float(value_raw)

            row = dict(raw_row)
            row["timestamp"] = timestamp
            row["value"] = value
            row["date"] = timestamp.date()
            row["hour"] = timestamp.hour
            row["day_of_week"] = DAY_NAMES[timestamp.weekday()]
            rows.append(row)

    if not rows:
        raise ValueError("Dataset is empty after parsing.")

    rows.sort(key=lambda row: row["timestamp"])
    return rows, dataset_path


def compute_dataset_summary(rows: list[dict[str, Any]]) -> dict[str, Any]:
    hourly_totals: dict[int, list[float]] = defaultdict(lambda: [0.0, 0.0])
    day_totals: dict[str, list[float]] = defaultdict(lambda: [0.0, 0.0])
    total_value = 0.0

    for row in rows:
        value = float(row["value"])
        hour = int(row["hour"])
        day = str(row["day_of_week"])

        hourly_totals[hour][0] += value
        hourly_totals[hour][1] += 1
        day_totals[day][0] += value
        day_totals[day][1] += 1
        total_value += value

    hourly_averages = {
        hour: totals[0] / totals[1]
        for hour, totals in hourly_totals.items()
        if totals[1]
    }
    day_averages = {
        day: totals[0] / totals[1]
        for day, totals in day_totals.items()
        if totals[1]
    }

    weakest_hour = min(hourly_averages, key=hourly_averages.get)
    strongest_hour = max(hourly_averages, key=hourly_averages.get)
    weakest_day = min(day_averages, key=day_averages.get)
    strongest_day = max(day_averages, key=day_averages.get)
    overall_average = total_value / len(rows)

    return {
        "weakest_hour": weakest_hour,
        "strongest_hour": strongest_hour,
        "overall_average": overall_average,
        "weakest_day": weakest_day,
        "strongest_day": strongest_day,
        "observations": len(rows),
    }


def build_system_prompt(summary: dict[str, Any]) -> str:
    return (
        "Eres un analista de operaciones en Rappi. Responde SOLO usando estos datos:\n\n"
        f"- Hora más débil: {format_hour(summary['weakest_hour'])}\n"
        f"- Hora más fuerte: {format_hour(summary['strongest_hour'])}\n"
        f"- Promedio general: {format_number(summary['overall_average'])}\n"
        f"- Día más débil: {DAY_NAMES_ES.get(summary['weakest_day'], summary['weakest_day'])}\n"
        f"- Día más fuerte: {DAY_NAMES_ES.get(summary['strongest_day'], summary['strongest_day'])}\n\n"
        "Si no puedes responder con estos datos, dilo claramente. No inventes información.\n"
        "Responde en el idioma del usuario.\n"
        "Sé claro, corto y accionable."
    )


def sanitize_history(raw_history: Any) -> list[dict[str, str]]:
    cleaned: list[dict[str, str]] = []

    if not isinstance(raw_history, list):
        return cleaned

    for entry in raw_history[-MAX_HISTORY_MESSAGES:]:
        if not isinstance(entry, dict):
            continue

        role = entry.get("role")
        content = str(entry.get("content", "")).strip()

        if role not in {"user", "assistant"} or not content:
            continue

        cleaned.append({"role": role, "content": content})

    return cleaned


def build_messages(summary: dict[str, Any], history: list[dict[str, str]], user_message: str) -> list[dict[str, str]]:
    system_prompt = build_system_prompt(summary)
    user_prompt = f"Pregunta del usuario:\n{user_message}"

    return [
        {"role": "system", "content": system_prompt},
        *history,
        {"role": "user", "content": user_prompt},
    ]


def parse_ollama_error(payload: Any) -> str:
    if isinstance(payload, dict):
        error = payload.get("error")
        if isinstance(error, str) and error.strip():
            return error.strip()

    return "Ollama returned an unexpected error."


def build_quick_filters(available_dates: list[date]) -> list[dict[str, str]]:
    if not available_dates:
        return []

    quick_filters = [{
        "id": "full_period",
        "start": iso_date(available_dates[0]),
        "end": iso_date(available_dates[-1]),
    }]

    if len(available_dates) >= 3:
        quick_filters.append({
            "id": "first_3_days",
            "start": iso_date(available_dates[0]),
            "end": iso_date(available_dates[2]),
        })
        quick_filters.append({
            "id": "last_3_days",
            "start": iso_date(available_dates[-3]),
            "end": iso_date(available_dates[-1]),
        })

    quick_filters.append({
        "id": "single_day",
        "start": iso_date(available_dates[-1]),
        "end": iso_date(available_dates[-1]),
    })

    if len(available_dates) > 7:
        quick_filters.append({
            "id": "week_1",
            "start": iso_date(available_dates[0]),
            "end": iso_date(available_dates[min(6, len(available_dates) - 1)]),
        })
        quick_filters.append({
            "id": "week_2",
            "start": iso_date(available_dates[7]),
            "end": iso_date(available_dates[-1]),
        })

    return quick_filters


def bucket_timestamp(value: datetime, bucket_minutes: int = TIMESERIES_BUCKET_MINUTES) -> datetime:
    minute = (value.minute // bucket_minutes) * bucket_minutes
    return value.replace(minute=minute, second=0, microsecond=0)


def filter_rows_by_date(rows: list[dict[str, Any]], start: date, end: date) -> list[dict[str, Any]]:
    return [row for row in rows if start <= row["date"] <= end]


def compute_hourly_averages(rows: list[dict[str, Any]]) -> dict[int, float]:
    hourly_totals: dict[int, list[float]] = defaultdict(lambda: [0.0, 0.0])

    for row in rows:
        hourly_totals[int(row["hour"])][0] += float(row["value"])
        hourly_totals[int(row["hour"])][1] += 1

    return {
        hour: totals[0] / totals[1]
        for hour, totals in hourly_totals.items()
        if totals[1]
    }


def compute_weekday_averages(rows: list[dict[str, Any]]) -> dict[str, float]:
    day_totals: dict[str, list[float]] = defaultdict(lambda: [0.0, 0.0])

    for row in rows:
        day = str(row["day_of_week"])
        day_totals[day][0] += float(row["value"])
        day_totals[day][1] += 1

    return {
        day: totals[0] / totals[1]
        for day, totals in day_totals.items()
        if totals[1]
    }


def build_timeseries(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    buckets: dict[datetime, list[float]] = defaultdict(lambda: [0.0, 0.0])

    for row in rows:
        bucket = bucket_timestamp(row["timestamp"])
        buckets[bucket][0] += float(row["value"])
        buckets[bucket][1] += 1

    timeseries: list[dict[str, Any]] = []

    for bucket in sorted(buckets):
        total, count = buckets[bucket]
        timeseries.append({
            "ts": bucket.isoformat(),
            "value": round(total / count, 2),
        })

    return timeseries


def build_hourly_payload(hourly_averages: dict[int, float]) -> list[dict[str, Any]]:
    return [{
        "hour": hour,
        "value": round(hourly_averages.get(hour, 0.0), 2),
    } for hour in range(24)]


def build_weekday_payload(day_averages: dict[str, float]) -> list[dict[str, Any]]:
    return [{
        "day": day,
        "value": round(day_averages[day], 2),
    } for day in DAY_NAMES if day in day_averages]


def severity_for_drop(drop_pct: float) -> str:
    if drop_pct <= -50:
        return "critical"
    if drop_pct <= -35:
        return "high"
    return "medium"


def build_drop_events(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    events: list[dict[str, Any]] = []

    for previous, current in zip(rows, rows[1:]):
        previous_value = float(previous["value"])
        current_value = float(current["value"])
        delta_minutes = (current["timestamp"] - previous["timestamp"]).total_seconds() / 60

        if previous_value <= 0 or delta_minutes <= 0 or delta_minutes > 10:
            continue

        drop_pct = ((current_value - previous_value) / previous_value) * 100

        if drop_pct > -25:
            continue

        events.append({
            "timestamp": current["timestamp"].isoformat(),
            "drop_pct": round(drop_pct, 1),
            "from_value": round(previous_value, 2),
            "to_value": round(current_value, 2),
            "duration_minutes": round(delta_minutes, 2),
            "severity": severity_for_drop(drop_pct),
            "_sort_ts": current["timestamp"].timestamp(),
        })

    events.sort(key=lambda event: (event["drop_pct"], -event["_sort_ts"]))

    serialized: list[dict[str, Any]] = []
    for event in events[:MAX_DROP_EVENTS]:
        serialized.append({
            key: value
            for key, value in event.items()
            if not key.startswith("_")
        })

    return serialized


def choose_comparison_days(day_averages: dict[str, float], day_a: str | None, day_b: str | None) -> tuple[list[str], str, str]:
    available_days = [day for day in DAY_NAMES if day in day_averages]

    if not available_days:
        return [], "", ""

    strongest_day = max(available_days, key=lambda day: day_averages[day])
    weakest_day = min(available_days, key=lambda day: day_averages[day])
    selected_a = day_a if day_a in available_days else weakest_day

    if day_b in available_days and day_b != selected_a:
        selected_b = day_b
    elif strongest_day != selected_a:
        selected_b = strongest_day
    else:
        selected_b = next((day for day in available_days if day != selected_a), selected_a)

    return available_days, selected_a, selected_b


def build_profile(rows: list[dict[str, Any]], target_day: str) -> list[dict[str, Any]]:
    hourly_totals: dict[int, list[float]] = defaultdict(lambda: [0.0, 0.0])

    for row in rows:
        if row["day_of_week"] != target_day:
            continue

        hour = int(row["hour"])
        hourly_totals[hour][0] += float(row["value"])
        hourly_totals[hour][1] += 1

    return [{
        "hour": hour,
        "label": format_hour(hour),
        "value": round((hourly_totals[hour][0] / hourly_totals[hour][1]) if hourly_totals[hour][1] else 0.0, 2),
    } for hour in range(24)]


def build_comparison_payload(rows: list[dict[str, Any]], day_averages: dict[str, float], day_a: str | None, day_b: str | None) -> dict[str, Any]:
    available_days, selected_a, selected_b = choose_comparison_days(day_averages, day_a, day_b)
    labels = [format_hour(hour) for hour in range(24)]

    if not available_days:
        return {
            "available_days": [],
            "day_a": "",
            "day_b": "",
            "labels": labels,
            "day_a_profile": [{"hour": hour, "label": format_hour(hour), "value": 0.0} for hour in range(24)],
            "day_b_profile": [{"hour": hour, "label": format_hour(hour), "value": 0.0} for hour in range(24)],
            "day_a_average": 0.0,
            "day_b_average": 0.0,
            "stronger_day": "",
            "weaker_day": "",
            "gap_pct": 0.0,
            "largest_gap_hour": format_hour(0),
        }

    profile_a = build_profile(rows, selected_a)
    profile_b = build_profile(rows, selected_b)
    average_a = float(day_averages[selected_a])
    average_b = float(day_averages[selected_b])
    stronger_day = selected_a if average_a >= average_b else selected_b
    weaker_day = selected_b if stronger_day == selected_a else selected_a
    gap_pct = (((average_b - average_a) / average_a) * 100) if average_a else 0.0
    largest_gap_hour = max(
        range(24),
        key=lambda hour: abs(profile_b[hour]["value"] - profile_a[hour]["value"]),
    )

    return {
        "available_days": available_days,
        "day_a": selected_a,
        "day_b": selected_b,
        "labels": labels,
        "day_a_profile": profile_a,
        "day_b_profile": profile_b,
        "day_a_average": round(average_a, 2),
        "day_b_average": round(average_b, 2),
        "stronger_day": stronger_day,
        "weaker_day": weaker_day,
        "gap_pct": round(gap_pct, 1),
        "largest_gap_hour": format_hour(largest_gap_hour),
    }


def resolve_date_range(start_raw: str | None, end_raw: str | None) -> tuple[date, date]:
    start = parse_date(start_raw) or AVAILABLE_DATES[0]
    end = parse_date(end_raw) or AVAILABLE_DATES[-1]
    start = max(min(start, AVAILABLE_DATES[-1]), AVAILABLE_DATES[0])
    end = max(min(end, AVAILABLE_DATES[-1]), AVAILABLE_DATES[0])

    if start > end:
        start, end = end, start

    return start, end


def build_dashboard_payload(start_raw: str | None = None, end_raw: str | None = None, day_a: str | None = None, day_b: str | None = None) -> dict[str, Any]:
    start, end = resolve_date_range(start_raw, end_raw)
    filtered_rows = filter_rows_by_date(DATASET_ROWS, start, end)

    if not filtered_rows:
        filtered_rows = filter_rows_by_date(DATASET_ROWS, AVAILABLE_DATES[0], AVAILABLE_DATES[-1])
        start = AVAILABLE_DATES[0]
        end = AVAILABLE_DATES[-1]

    day_averages = compute_weekday_averages(filtered_rows)
    hourly_averages = compute_hourly_averages(filtered_rows)
    total_value = sum(float(row["value"]) for row in filtered_rows)
    strongest_day = max(day_averages, key=day_averages.get)
    weakest_day = min(day_averages, key=day_averages.get)
    strongest_hour = max(hourly_averages, key=hourly_averages.get)
    weakest_hour = min(hourly_averages, key=hourly_averages.get)
    peak_row = max(filtered_rows, key=lambda row: float(row["value"]))
    comparison = build_comparison_payload(filtered_rows, day_averages, day_a, day_b)
    drops = build_drop_events(filtered_rows)
    range_dates = sorted({row["date"] for row in filtered_rows})
    largest_drop_pct = min((event["drop_pct"] for event in drops), default=0.0)

    return {
        "meta": {
            "available_dates": [iso_date(value) for value in AVAILABLE_DATES],
            "min_date": iso_date(AVAILABLE_DATES[0]),
            "max_date": iso_date(AVAILABLE_DATES[-1]),
            "selected_start": iso_date(start),
            "selected_end": iso_date(end),
            "days_in_range": len(range_dates),
            "available_weekdays": comparison["available_days"],
            "quick_filters": build_quick_filters(AVAILABLE_DATES),
        },
        "summary": {
            "observations": len(filtered_rows),
            "overall_average": round(total_value / len(filtered_rows), 2),
            "peak_value": round(float(peak_row["value"]), 2),
            "peak_timestamp": peak_row["timestamp"].isoformat(),
            "strongest_hour": format_hour(int(strongest_hour)),
            "weakest_hour": format_hour(int(weakest_hour)),
            "strongest_day": strongest_day,
            "weakest_day": weakest_day,
            "strongest_day_average": round(float(day_averages[strongest_day]), 2),
            "weakest_day_average": round(float(day_averages[weakest_day]), 2),
            "largest_drop_pct": round(largest_drop_pct, 1),
            "timeseries_resolution_minutes": TIMESERIES_BUCKET_MINUTES,
            "range_start": iso_date(start),
            "range_end": iso_date(end),
            "days_in_range": len(range_dates),
        },
        "timeseries": build_timeseries(filtered_rows),
        "hourly": build_hourly_payload(hourly_averages),
        "weekday": build_weekday_payload(day_averages),
        "drops": drops,
        "comparison": comparison,
    }


try:
    DATASET_ROWS, DATASET_PATH = load_dataset_rows()
    DATASET_SUMMARY = compute_dataset_summary(DATASET_ROWS)
    AVAILABLE_DATES = sorted({row["date"] for row in DATASET_ROWS})
    DASHBOARD_DEFAULT_PAYLOAD = build_dashboard_payload()
    DATASET_LOAD_ERROR = None
except Exception as exc:  # pragma: no cover - defensive boot-time fallback
    DATASET_ROWS = []
    DATASET_PATH = None
    DATASET_SUMMARY = None
    AVAILABLE_DATES = []
    DASHBOARD_DEFAULT_PAYLOAD = None
    DATASET_LOAD_ERROR = str(exc)


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return response


@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return ("", 204)

    if DATASET_SUMMARY is None:
        return jsonify({
            "error": "dataset_unavailable",
            "message": f"Dataset could not be loaded: {DATASET_LOAD_ERROR}",
        }), 500

    payload = request.get_json(silent=True) or {}
    user_message = str(payload.get("message", "")).strip()

    if not user_message:
        return jsonify({"error": "invalid_request", "message": "A question is required."}), 400

    history = sanitize_history(payload.get("history", []))

    try:
        ollama_response = requests.post(
            OLLAMA_URL,
            json={
                "model": OLLAMA_MODEL,
                "stream": False,
                "messages": build_messages(DATASET_SUMMARY, history, user_message),
                "options": {
                    "temperature": 0.2,
                },
            },
            timeout=OLLAMA_TIMEOUT,
        )
    except requests.exceptions.ConnectionError:
        return jsonify({
            "error": "ollama_unavailable",
            "message": "Ollama is not running. Start it with: ollama run qwen2.5:3b",
        }), 503
    except requests.exceptions.Timeout:
        return jsonify({
            "error": "ollama_timeout",
            "message": "Ollama took too long to respond. Please try again.",
        }), 504
    except requests.RequestException:
        return jsonify({
            "error": "ollama_request_failed",
            "message": "The local assistant could not reach Ollama.",
        }), 502

    try:
        response_payload = ollama_response.json()
    except ValueError:
        return jsonify({
            "error": "invalid_ollama_response",
            "message": "Ollama returned a response that could not be read.",
        }), 502

    if not ollama_response.ok:
        error_message = parse_ollama_error(response_payload)
        lowered = error_message.lower()

        if "not found" in lowered and OLLAMA_MODEL in lowered:
            return jsonify({
                "error": "model_unavailable",
                "message": "Model qwen2.5:3b is not available. Run: ollama pull qwen2.5:3b",
            }), 503

        return jsonify({
            "error": "ollama_error",
            "message": error_message,
        }), 502

    reply = str(response_payload.get("message", {}).get("content", "")).strip()

    if not reply:
        return jsonify({
            "error": "empty_reply",
            "message": "Ollama returned an empty response.",
        }), 502

    return jsonify({"reply": reply})


@app.get("/api/dashboard-data")
def dashboard_data():
    if DASHBOARD_DEFAULT_PAYLOAD is None:
        return jsonify({
            "error": "dataset_unavailable",
            "message": f"Dataset could not be loaded: {DATASET_LOAD_ERROR}",
        }), 500

    payload = build_dashboard_payload(
        start_raw=request.args.get("start"),
        end_raw=request.args.get("end"),
        day_a=request.args.get("day_a"),
        day_b=request.args.get("day_b"),
    )
    return jsonify(payload)


@app.get("/api/analysis-summary")
def analysis_summary():
    if DASHBOARD_DEFAULT_PAYLOAD is None:
        return jsonify({
            "error": "dataset_unavailable",
            "message": f"Dataset could not be loaded: {DATASET_LOAD_ERROR}",
        }), 500

    payload = build_dashboard_payload(
        start_raw=request.args.get("start"),
        end_raw=request.args.get("end"),
        day_a=request.args.get("day_a"),
        day_b=request.args.get("day_b"),
    )
    return jsonify({
        "summary": payload["summary"],
        "comparison": payload["comparison"],
    })


@app.get("/")
def serve_index():
    return send_from_directory(str(BASE_DIR), "index.html")


@app.get("/css/<path:filename>")
def serve_css(filename: str):
    return send_from_directory(str(BASE_DIR / "css"), filename)


@app.get("/js/<path:filename>")
def serve_js(filename: str):
    return send_from_directory(str(BASE_DIR / "js"), filename)


@app.get("/assets/<path:filename>")
def serve_assets(filename: str):
    return send_from_directory(str(BASE_DIR / "assets"), filename)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=False)
