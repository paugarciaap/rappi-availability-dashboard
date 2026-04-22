const HOURLY = [{"h":0,"v":656208},{"h":6,"v":13241},{"h":7,"v":37815},{"h":8,"v":371483},{"h":9,"v":1234260},{"h":10,"v":2154596},{"h":11,"v":2883113},{"h":12,"v":3726390},{"h":13,"v":4510963},{"h":14,"v":5158840},{"h":15,"v":5199630},{"h":16,"v":5146310},{"h":17,"v":5247763},{"h":18,"v":4983317},{"h":19,"v":4915166},{"h":20,"v":4482142},{"h":21,"v":3757024},{"h":22,"v":2849578},{"h":23,"v":1626171}];
const DOW = [{"d":"Monday","v":2844577},{"d":"Tuesday","v":3294185},{"d":"Wednesday","v":3171794},{"d":"Thursday","v":3663628},{"d":"Friday","v":3722633},{"d":"Saturday","v":3480623},{"d":"Sunday","v":2885579}];
const DROPS = [
  {ts:"Feb 10, 00:06",drop:-100,from:"27,591",to:"0",dur:"5 min",sev:"critical"},
  {ts:"Feb 6, 00:06",drop:-100,from:"21,004",to:"0",dur:"5 min",sev:"critical"},
  {ts:"Feb 5, 06:11",drop:-100,from:"8,201",to:"0",dur:"5 min",sev:"critical"},
  {ts:"Feb 4, 06:11",drop:-100,from:"6,419",to:"0",dur:"5 min",sev:"critical"},
  {ts:"Feb 3, 06:11",drop:-100,from:"4,981",to:"0",dur:"5 min",sev:"critical"},
  {ts:"Feb 2, 06:11",drop:-100,from:"3,244",to:"0",dur:"5 min",sev:"critical"},
];
const TIMESERIES_SAMPLE = [{"ts":"2026-02-01T06:10:00","v":4778},{"ts":"2026-02-01T06:20:00","v":12289},{"ts":"2026-02-01T06:30:00","v":15605},{"ts":"2026-02-01T06:40:00","v":24067},{"ts":"2026-02-01T06:50:00","v":27890},{"ts":"2026-02-01T07:00:00","v":31250},{"ts":"2026-02-01T07:10:00","v":39880},{"ts":"2026-02-01T07:20:00","v":52340},{"ts":"2026-02-01T07:30:00","v":68900},{"ts":"2026-02-01T07:40:00","v":89200},{"ts":"2026-02-01T07:50:00","v":120300},{"ts":"2026-02-01T08:00:00","v":198400},{"ts":"2026-02-01T08:30:00","v":389000},{"ts":"2026-02-01T09:00:00","v":821000},{"ts":"2026-02-01T09:30:00","v":1290000},{"ts":"2026-02-01T10:00:00","v":1890000},{"ts":"2026-02-01T10:30:00","v":2340000},{"ts":"2026-02-01T11:00:00","v":2780000},{"ts":"2026-02-01T11:30:00","v":3120000},{"ts":"2026-02-01T12:00:00","v":3560000},{"ts":"2026-02-01T12:30:00","v":3920000},{"ts":"2026-02-01T13:00:00","v":4280000},{"ts":"2026-02-01T13:30:00","v":4610000},{"ts":"2026-02-01T14:00:00","v":4890000},{"ts":"2026-02-01T14:30:00","v":5050000},{"ts":"2026-02-01T15:00:00","v":5180000},{"ts":"2026-02-01T15:30:00","v":5220000},{"ts":"2026-02-01T16:00:00","v":5280107},{"ts":"2026-02-01T16:30:00","v":5180000},{"ts":"2026-02-01T17:00:00","v":5090000},{"ts":"2026-02-01T17:30:00","v":4980000},{"ts":"2026-02-01T18:00:00","v":4820000},{"ts":"2026-02-01T18:30:00","v":4650000},{"ts":"2026-02-01T19:00:00","v":4390000},{"ts":"2026-02-01T19:30:00","v":4210000},{"ts":"2026-02-01T20:00:00","v":3890000},{"ts":"2026-02-01T20:30:00","v":3540000},{"ts":"2026-02-01T21:00:00","v":3120000},{"ts":"2026-02-01T21:30:00","v":2780000},{"ts":"2026-02-01T22:00:00","v":2340000},{"ts":"2026-02-01T22:30:00","v":1890000},{"ts":"2026-02-01T23:00:00","v":1450000},{"ts":"2026-02-01T23:30:00","v":890000},{"ts":"2026-02-02T00:00:00","v":470000},{"ts":"2026-02-02T06:10:00","v":28},{"ts":"2026-02-02T06:30:00","v":18900},{"ts":"2026-02-02T07:00:00","v":35200},{"ts":"2026-02-02T08:00:00","v":210000},{"ts":"2026-02-02T09:00:00","v":890000},{"ts":"2026-02-02T10:00:00","v":1780000},{"ts":"2026-02-02T11:00:00","v":2450000},{"ts":"2026-02-02T12:00:00","v":3120000},{"ts":"2026-02-02T13:00:00","v":3680000},{"ts":"2026-02-02T14:00:00","v":4120000},{"ts":"2026-02-02T15:00:00","v":4390000},{"ts":"2026-02-02T16:00:00","v":4554582},{"ts":"2026-02-02T17:00:00","v":4380000},{"ts":"2026-02-02T18:00:00","v":4120000},{"ts":"2026-02-02T19:00:00","v":3780000},{"ts":"2026-02-02T20:00:00","v":3290000},{"ts":"2026-02-02T21:00:00","v":2780000},{"ts":"2026-02-02T22:00:00","v":2100000},{"ts":"2026-02-02T23:00:00","v":1230000},{"ts":"2026-02-03T00:00:00","v":890000},{"ts":"2026-02-03T00:06:30","v":0},{"ts":"2026-02-03T06:11:20","v":0},{"ts":"2026-02-03T06:30:00","v":21000},{"ts":"2026-02-03T08:00:00","v":340000},{"ts":"2026-02-03T10:00:00","v":1980000},{"ts":"2026-02-03T12:00:00","v":3450000},{"ts":"2026-02-03T14:00:00","v":4780000},{"ts":"2026-02-03T16:00:00","v":5708166},{"ts":"2026-02-03T18:00:00","v":4890000},{"ts":"2026-02-03T20:00:00","v":3980000},{"ts":"2026-02-03T22:00:00","v":2340000},{"ts":"2026-02-04T00:00:00","v":1100000},{"ts":"2026-02-04T06:11:20","v":0},{"ts":"2026-02-04T07:00:00","v":28000},{"ts":"2026-02-04T09:00:00","v":1120000},{"ts":"2026-02-04T11:00:00","v":2980000},{"ts":"2026-02-04T13:00:00","v":4320000},{"ts":"2026-02-04T15:00:00","v":5200000},{"ts":"2026-02-04T16:00:00","v":5917626},{"ts":"2026-02-04T18:00:00","v":5120000},{"ts":"2026-02-04T20:00:00","v":4120000},{"ts":"2026-02-04T22:00:00","v":2780000},{"ts":"2026-02-05T00:00:00","v":1230000},{"ts":"2026-02-05T06:11:20","v":0},{"ts":"2026-02-05T07:00:00","v":31000},{"ts":"2026-02-05T09:00:00","v":1340000},{"ts":"2026-02-05T11:00:00","v":3120000},{"ts":"2026-02-05T13:00:00","v":4560000},{"ts":"2026-02-05T15:00:00","v":5480000},{"ts":"2026-02-05T16:00:00","v":6107574},{"ts":"2026-02-05T18:00:00","v":5320000},{"ts":"2026-02-05T20:00:00","v":4230000},{"ts":"2026-02-05T22:00:00","v":2980000},{"ts":"2026-02-06T00:00:00","v":21004},{"ts":"2026-02-06T00:06:30","v":0},{"ts":"2026-02-06T07:00:00","v":34000},{"ts":"2026-02-06T09:00:00","v":1450000},{"ts":"2026-02-06T11:00:00","v":3280000},{"ts":"2026-02-06T13:00:00","v":4790000},{"ts":"2026-02-06T15:00:00","v":5620000},{"ts":"2026-02-06T16:00:00","v":6198472},{"ts":"2026-02-06T18:00:00","v":5450000},{"ts":"2026-02-06T20:00:00","v":4380000},{"ts":"2026-02-06T22:00:00","v":3120000},{"ts":"2026-02-07T00:00:00","v":1560000},{"ts":"2026-02-07T08:00:00","v":290000},{"ts":"2026-02-07T10:00:00","v":2100000},{"ts":"2026-02-07T12:00:00","v":3450000},{"ts":"2026-02-07T14:00:00","v":4620000},{"ts":"2026-02-07T16:00:00","v":5738300},{"ts":"2026-02-07T18:00:00","v":5020000},{"ts":"2026-02-07T20:00:00","v":4120000},{"ts":"2026-02-07T22:00:00","v":2780000},{"ts":"2026-02-08T00:00:00","v":1120000},{"ts":"2026-02-08T08:00:00","v":180000},{"ts":"2026-02-08T10:00:00","v":1780000},{"ts":"2026-02-08T12:00:00","v":2980000},{"ts":"2026-02-08T14:00:00","v":4120000},{"ts":"2026-02-08T16:00:00","v":4969210},{"ts":"2026-02-08T18:00:00","v":4230000},{"ts":"2026-02-08T20:00:00","v":3450000},{"ts":"2026-02-08T22:00:00","v":2340000},{"ts":"2026-02-09T00:00:00","v":980000},{"ts":"2026-02-09T06:11:20","v":22},{"ts":"2026-02-09T07:00:00","v":29000},{"ts":"2026-02-09T09:00:00","v":1120000},{"ts":"2026-02-09T11:00:00","v":2780000},{"ts":"2026-02-09T13:00:00","v":4120000},{"ts":"2026-02-09T15:00:00","v":4980000},{"ts":"2026-02-09T16:00:00","v":5122526},{"ts":"2026-02-09T18:00:00","v":4560000},{"ts":"2026-02-09T20:00:00","v":3780000},{"ts":"2026-02-09T22:00:00","v":2540000},{"ts":"2026-02-10T00:00:00","v":54814},{"ts":"2026-02-10T00:06:30","v":0},{"ts":"2026-02-10T07:00:00","v":31000},{"ts":"2026-02-10T09:00:00","v":1240000},{"ts":"2026-02-10T11:00:00","v":2890000},{"ts":"2026-02-10T13:00:00","v":4230000},{"ts":"2026-02-10T15:00:00","v":5120000},{"ts":"2026-02-10T16:00:00","v":5767000},{"ts":"2026-02-10T18:00:00","v":4980000},{"ts":"2026-02-10T20:00:00","v":4120000},{"ts":"2026-02-10T22:00:00","v":2780000},{"ts":"2026-02-11T00:00:00","v":1340000},{"ts":"2026-02-11T08:00:00","v":290000},{"ts":"2026-02-11T10:00:00","v":1980000},{"ts":"2026-02-11T12:00:00","v":3560000},{"ts":"2026-02-11T14:00:00","v":4890000},{"ts":"2026-02-11T15:00:00","v":5630566}];

const LANG = {
  es: {
    "nav-overview": "Resumen",
    "nav-dashboard": "Dashboard",
    "nav-comparison": "Comparación",
    "nav-insights": "Insights",
    "nav-chat": "Asistente",
    "report-btn-label": "Descargar informe",
    "lang-label": "EN",
    "hero-eyebrow-text": "Herramienta interna · Rappi",
    "hero-title": "Entiende la operación en segundos.<br>Prioriza <span class=\"hero-title-accent\">decisiones.</span>",
    "hero-sub": "Detecta riesgo antes de impactar al usuario, compara patrones reales y alinea operación, CX y negocio en una sola vista.",
    "hero-cta1": "Ver dashboard",
    "hero-cta2": "Preguntar al asistente",
    "stat-obs": "Observaciones",
    "stat-period": "Período analizado",
    "stat-metric": "Métrica clave",
    "scroll-hint-text": "Desplázate",
    "dash-label": "Centro de control",
    "dash-title": "Disponibilidad con contexto para decidir",
    "dash-desc": "Sigue la señal operativa, encuentra ventanas críticas y aterriza prioridades sin recorrer tablas manualmente.",
    "kpi1-label": "Pico máximo disponible",
    "kpi1-sub": "Mejor ventana observada en la muestra",
    "kpi1-badge": "Semana 2 > Semana 1 (+17.4%)",
    "kpi2-label": "Promedio global",
    "kpi2-sub": "Base útil para comparar presión operativa",
    "kpi2-val": "3.21M",
    "kpi3-label": "Hora más fuerte",
    "kpi3-sub": "Momento más confiable para escalar",
    "kpi4-label": "Día referente",
    "kpi4-sub": "El benchmark operativo de la semana",
    "kpi4-val": "Viernes",
    "chart1-title": "Visibilidad operativa día a día",
    "chart1-sub": "Lectura rápida de tendencia, ramp-up y pérdida de tracción",
    "chart1-badge": "Lectura ejecutiva",
    "chart2-title": "Momento del día",
    "chart2-sub": "Cuándo acelerar, monitorear o reforzar cobertura",
    "chart3-title": "Peso por día de semana",
    "chart3-sub": "Qué días sostienen la operación y cuáles requieren contención",
    "drops-title": "Riesgo detectado",
    "drops-sub": "Eventos que ameritan seguimiento y mitigación",
    "drops-badge": "Alertas críticas",
    "drops-th": ["Fecha/Hora", "Caída", "Desde", "Hasta", "Duración", "Severidad"],
    "severity-critical": "Crítico",
    "severity-high": "Alto",
    "severity-medium": "Medio",
    "compare-label": "Comparación de comportamiento",
    "compare-title": "Cómo se comporta el mejor día frente al más frágil",
    "compare-desc": "Mira la brecha operativa en la misma escala para detectar dónde se pierde tracción y qué decisiones conviene priorizar primero.",
    "compare-badge": "Misma escala · Lectura comparable",
    "compare-weak-title": "Día más débil",
    "compare-weak-sub": "Promedio horario",
    "compare-strong-title": "Día más fuerte",
    "compare-strong-sub": "Promedio horario",
    "compare-default-summary": "Compara la curva del día más débil contra la del referente más sólido para ubicar la brecha donde realmente importa.",
    "compare-default-caption": "Usa esta vista para entender dónde el día más débil empieza a ceder y cuánto margen te da el referente más sólido.",
    "compare-footnote": "La comparación usa la misma escala y estilo visual para que la diferencia sea clara, no decorativa.",
    "insights-label": "Decisiones prioritarias",
    "insights-title": "Qué mover primero",
    "insights-desc": "Hallazgos que ayudan a priorizar acciones antes de afectar experiencia o revenue.",
    "chat-label": "Asistente local",
    "chat-title": "Pregunta con contexto de negocio",
    "chat-sub": "Consulta patrones, riesgo e implicaciones operativas con un asistente local conectado a datos.",
    "suggested-label": "Prompts sugeridos",
    "chat-header-title": "Avail Intelligence",
    "chat-header-sub": "Local · Ollama qwen2.5:3b",
    "chat-placeholder": "Pregunta por riesgo, ventanas fuertes o decisiones recomendadas...",
    "chat-note": "Responde en tu idioma · Modelo local qwen2.5:3b",
    "chat-send-label": "Enviar mensaje",
    "footer-text": "Avail - Herramienta interna para lectura operativa en <span>Rappi</span> · Datos: Feb 1-11, 2026",
    "report-building": "Generando informe...",
    "report-ready": "Informe listo",
    "report-title": "Informe operativo de disponibilidad",
    "report-subtitle": "Resumen ejecutivo listo para compartir internamente",
    "report-kpis-title": "KPIs principales",
    "report-main-chart-title": "Gráfica principal",
    "report-comparison-title": "Comparación entre día fuerte y día débil",
    "report-insights-title": "Insights automáticos",
    "report-download-name": "informe-avail-rappi.html",
    "suggested-qs": [
      "¿Dónde está el mayor riesgo antes de impactar al usuario?",
      "¿Qué ventana deberíamos proteger primero?",
      "¿Cuál es la diferencia entre un día fuerte y uno débil?",
      "¿Dónde conviene enfocar monitoreo operativo?",
      "¿Qué decisión priorizarías esta semana?"
    ],
    "insights-data": [
      { icon: "▲", type: "good", title: "Ventana para capturar demanda", body: "La operación entra en su mejor momento entre las 14:00 y las 17:00. Es la franja donde más conviene proteger capacidad, pricing y campañas." },
      { icon: "▼", type: "warn", title: "Riesgo antes del amanecer", body: "Las primeras horas del día concentran la menor disponibilidad. Si quieres reducir fricción temprana, el monitoreo debe activarse antes de que la señal caiga." },
      { icon: "↑", type: "good", title: "Tendencia favorable", body: "La operación escala con fuerza hacia la tarde y sostiene niveles altos durante varias horas. Ese comportamiento da espacio para decisiones más agresivas en demanda." },
      { icon: "◆", type: "default", title: "Semana con jerarquía clara", body: "Jueves y viernes funcionan como benchmark operativo, mientras domingo y lunes muestran menor resiliencia. Esa brecha sirve para calendarizar refuerzos." },
      { icon: "!", type: "warn", title: "Caídas que merecen respuesta", body: "Los drops críticos no son ruido visual. Son señales que deberían activar investigación, runbooks y seguimiento preventivo antes de afectar experiencia." },
      { icon: "→", type: "default", title: "Ramp-up útil para planificación", body: "El crecimiento matutino no solo muestra recuperación; también marca el momento en que operaciones puede empezar a mover inventario, staffing y monitoreo más fino." }
    ],
    "welcome-msg": "Hola, soy el asistente local de Avail. Ya tengo contexto operativo y puedo ayudarte a leer riesgo, ventanas fuertes y decisiones prioritarias."
  },
  en: {
    "nav-overview": "Overview",
    "nav-dashboard": "Dashboard",
    "nav-comparison": "Comparison",
    "nav-insights": "Insights",
    "nav-chat": "Assistant",
    "report-btn-label": "Download report",
    "lang-label": "ES",
    "hero-eyebrow-text": "Internal tool · Rappi",
    "hero-title": "Understand the operation in seconds.<br>Prioritize <span class=\"hero-title-accent\">decisions.</span>",
    "hero-sub": "Detect risk before it impacts users, compare real patterns, and align operations, CX, and business in a single view.",
    "hero-cta1": "View dashboard",
    "hero-cta2": "Ask the assistant",
    "stat-obs": "Observations",
    "stat-period": "Period analyzed",
    "stat-metric": "Key metric",
    "scroll-hint-text": "Scroll",
    "dash-label": "Control center",
    "dash-title": "Availability with decision context",
    "dash-desc": "Track the operating signal, locate critical windows, and land priorities without digging through raw tables.",
    "kpi1-label": "Peak availability",
    "kpi1-sub": "Best window observed in the sample",
    "kpi1-badge": "Week 2 > Week 1 (+17.4%)",
    "kpi2-label": "Global average",
    "kpi2-sub": "Baseline to benchmark operational pressure",
    "kpi2-val": "3.21M",
    "kpi3-label": "Strongest hour",
    "kpi3-sub": "Most reliable moment to scale",
    "kpi4-label": "Reference day",
    "kpi4-sub": "The weekly operating benchmark",
    "kpi4-val": "Friday",
    "chart1-title": "Operational visibility over time",
    "chart1-sub": "Fast read on trend, morning ramp, and loss of momentum",
    "chart1-badge": "Executive readout",
    "chart2-title": "Moment of day",
    "chart2-sub": "When to push demand, monitor risk, or reinforce coverage",
    "chart3-title": "Weight by weekday",
    "chart3-sub": "Which days sustain the operation and which need containment",
    "drops-title": "Detected risk",
    "drops-sub": "Events that deserve follow-up and mitigation",
    "drops-badge": "Critical alerts",
    "drops-th": ["Date/Time", "Drop", "From", "To", "Duration", "Severity"],
    "severity-critical": "Critical",
    "severity-high": "High",
    "severity-medium": "Medium",
    "compare-label": "Behavior comparison",
    "compare-title": "How the strongest day behaves versus the weakest",
    "compare-desc": "Read the operating gap on the same scale so you can see where performance breaks down and what to prioritize first.",
    "compare-badge": "Same scale · Comparable read",
    "compare-weak-title": "Weakest day",
    "compare-weak-sub": "Hourly average",
    "compare-strong-title": "Strongest day",
    "compare-strong-sub": "Hourly average",
    "compare-default-summary": "Compare the weakest-day curve against the strongest benchmark to see the gap where it actually matters.",
    "compare-default-caption": "Use this view to understand when the weakest day starts to lose traction and how much room the strongest benchmark gives you.",
    "compare-footnote": "Both charts use the same scale and visual language so the difference stays analytical, not decorative.",
    "insights-label": "Priority decisions",
    "insights-title": "What to move first",
    "insights-desc": "Signals that help you act before experience or revenue gets hit.",
    "chat-label": "Local Assistant",
    "chat-title": "Ask with business context",
    "chat-sub": "Query patterns, risk, and operational implications through a local assistant connected to data.",
    "suggested-label": "Suggested prompts",
    "chat-header-title": "Avail Intelligence",
    "chat-header-sub": "Local · Ollama qwen2.5:3b",
    "chat-placeholder": "Ask about risk, strongest windows, or recommended actions...",
    "chat-note": "Replies in your language · Local qwen2.5:3b model",
    "chat-send-label": "Send message",
    "footer-text": "Avail - Internal operational readout for <span>Rappi</span> · Data: Feb 1-11, 2026",
    "report-building": "Generating report...",
    "report-ready": "Report ready",
    "report-title": "Availability operations report",
    "report-subtitle": "Executive summary ready to share internally",
    "report-kpis-title": "Main KPIs",
    "report-main-chart-title": "Main chart",
    "report-comparison-title": "Strongest vs weakest day",
    "report-insights-title": "Automatic insights",
    "report-download-name": "avail-rappi-report.html",
    "suggested-qs": [
      "Where is the biggest risk before users feel it?",
      "Which window should we protect first?",
      "What is the gap between a strong and weak day?",
      "Where should operations focus monitoring?",
      "What would you prioritize this week?"
    ],
    "insights-data": [
      { icon: "▲", type: "good", title: "Window to capture demand", body: "The operation reaches its best shape between 14:00 and 17:00. That is where capacity, pricing, and campaign quality should be protected first." },
      { icon: "▼", type: "warn", title: "Risk before the day starts", body: "The earliest hours remain the most fragile. If you want to reduce early friction, monitoring needs to activate before the signal weakens." },
      { icon: "↑", type: "good", title: "Healthy afternoon scale", body: "Availability ramps hard into the afternoon and sustains strong levels for several hours. That gives the business room for more assertive demand moves." },
      { icon: "◆", type: "default", title: "Week with a clear hierarchy", body: "Thursday and Friday behave as the operational benchmark, while Sunday and Monday show less resilience. That gap helps sequence staffing and inventory decisions." },
      { icon: "!", type: "warn", title: "Drops that deserve response", body: "Critical drops are not just visual anomalies. They are response triggers that should connect to runbooks, owner follow-up, and prevention." },
      { icon: "→", type: "default", title: "Ramp-up is planning input", body: "Morning growth is not just recovery. It tells operations when to intensify monitoring, release inventory, and tighten execution." }
    ],
    "welcome-msg": "Hi, I'm the local Avail assistant. I already have the operating context and can help you read risk, strong windows, and priority decisions."
  }
};

let currentLang = "es";
const charts = {};
let chatbot = null;
let revealObserver = null;
let countObserver = null;

const appState = {
  analysis: null,
  comparison: null,
};

const DAY_LABELS = {
  es: {
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miércoles",
    Thursday: "Jueves",
    Friday: "Viernes",
    Saturday: "Sábado",
    Sunday: "Domingo",
  },
  en: {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
  },
};

function t(key) {
  return LANG[currentLang][key] || key;
}

function fmt(value) {
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`;
  }

  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(0)}K`;
  }

  return value.toString();
}

function localizeDay(dayName) {
  return DAY_LABELS[currentLang]?.[dayName] || dayName;
}

function formatLocaleNumber(value, maximumFractionDigits = 0) {
  const locale = currentLang === "es" ? "es-CO" : "en-US";

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
    minimumFractionDigits: maximumFractionDigits ? 1 : 0,
  }).format(value);
}

function formatCountValue(value, format, suffix = "") {
  if (format === "time") {
    return `${Math.round(value).toString().padStart(2, "0")}:00`;
  }

  if (format === "suffix") {
    return `${Math.round(value)}<span>${suffix}</span>`;
  }

  if (format === "compact-split") {
    if (value >= 1e6) {
      return `${(value / 1e6).toFixed(1)}<span>M</span>`;
    }

    if (value >= 1e3) {
      return `${Math.round(value / 1e3)}<span>K</span>`;
    }

    return `${Math.round(value)}`;
  }

  if (format === "compact") {
    return fmt(value);
  }

  return Math.round(value).toString();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function serializeProfilePoints(points) {
  return points.map((point) => ({
    hour: point.hour,
    label: point.label,
    value: Number(point.value),
  }));
}

function buildFallbackAnalysis() {
  const dayTotals = new Map();
  const strongestDay = DOW.reduce((best, item) => (item.v > best.v ? item : best)).d;
  const weakestDay = DOW.reduce((worst, item) => (item.v < worst.v ? item : worst)).d;

  TIMESERIES_SAMPLE.forEach((point) => {
    const date = new Date(point.ts);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const hour = date.getHours();

    if (!dayTotals.has(dayName)) {
      dayTotals.set(dayName, new Map());
    }

    const hourBucket = dayTotals.get(dayName);
    const current = hourBucket.get(hour) || { sum: 0, count: 0 };
    current.sum += point.v;
    current.count += 1;
    hourBucket.set(hour, current);
  });

  function buildProfile(dayName) {
    const hourMap = dayTotals.get(dayName) || new Map();

    return Array.from({ length: 24 }, (_, hour) => {
      const bucket = hourMap.get(hour);
      return {
        hour,
        label: `${hour.toString().padStart(2, "0")}:00`,
        value: bucket ? Number((bucket.sum / bucket.count).toFixed(2)) : 0,
      };
    });
  }

  const strongestDayProfile = buildProfile(strongestDay);
  const weakestDayProfile = buildProfile(weakestDay);
  const strongestDayAverage = DOW.find((item) => item.d === strongestDay)?.v || 0;
  const weakestDayAverage = DOW.find((item) => item.d === weakestDay)?.v || 0;
  const dayGapPct = weakestDayAverage
    ? Number((((strongestDayAverage - weakestDayAverage) / weakestDayAverage) * 100).toFixed(1))
    : 0;

  const gaps = strongestDayProfile.map((point, index) => ({
    hour: point.hour,
    gap: point.value - weakestDayProfile[index].value,
  }));
  const largestGap = gaps.reduce((best, point) => (point.gap > best.gap ? point : best), gaps[0]);

  return {
    summary: {
      observations: 67141,
      weakest_hour: "06:00",
      strongest_hour: "17:00",
      overall_average: 3208766.74,
      weakest_day: weakestDay,
      strongest_day: strongestDay,
      weakest_day_average: weakestDayAverage,
      strongest_day_average: strongestDayAverage,
      day_gap_pct: dayGapPct,
      largest_gap_hour: `${largestGap.hour.toString().padStart(2, "0")}:00`,
      peak_value: 6198472,
      peak_timestamp: "2026-02-06T16:00:00",
    },
    comparison: {
      labels: Array.from({ length: 24 }, (_, hour) => `${hour.toString().padStart(2, "0")}:00`),
      weakest_day_profile: weakestDayProfile,
      strongest_day_profile: strongestDayProfile,
    },
  };
}

async function fetchAnalysisSummary() {
  const endpoint = window.location.protocol === "file:"
    ? "http://127.0.0.1:8000/api/analysis-summary"
    : `${window.location.origin}/api/analysis-summary`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("analysis_unavailable");
    }

    return await response.json();
  } catch (error) {
    return buildFallbackAnalysis();
  }
}

function buildComparisonNarrative(analysis) {
  const summary = analysis?.summary;

  if (!summary) {
    return {
      summary: t("compare-default-summary"),
      caption: t("compare-default-caption"),
      footnote: t("compare-footnote"),
    };
  }

  const strongestDay = localizeDay(summary.strongest_day);
  const weakestDay = localizeDay(summary.weakest_day);
  const gap = formatLocaleNumber(summary.day_gap_pct || 0, 1);
  const gapHour = summary.largest_gap_hour;

  if (currentLang === "es") {
    return {
      summary: `${strongestDay} supera a ${weakestDay} por ${gap}% en promedio, y la mayor brecha aparece alrededor de las ${gapHour}.`,
      caption: `${weakestDay} pierde velocidad antes y recupera menos profundidad durante la tarde, mientras ${strongestDay} sostiene una meseta operativa más amplia.`,
      footnote: t("compare-footnote"),
    };
  }

  return {
    summary: `${strongestDay} outperforms ${weakestDay} by ${gap}% on average, with the widest gap showing up around ${gapHour}.`,
    caption: `${weakestDay} loses momentum earlier and rebuilds less depth in the afternoon, while ${strongestDay} sustains a broader operating plateau.`,
    footnote: t("compare-footnote"),
  };
}

function renderComparisonFallbackCopy() {
  const summaryElement = document.getElementById("comparison-summary");
  const captionElement = document.getElementById("comparison-caption");

  if (summaryElement) {
    summaryElement.textContent = t("compare-default-summary");
  }

  if (captionElement) {
    captionElement.textContent = t("compare-default-caption");
  }
}

function getComparisonPlotConfig(dayName, points, colors, type) {
  const lineColor = type === "strong" ? colors.line : colors.warning;
  const fillColor = type === "strong" ? "rgba(255,68,31,0.12)" : "rgba(245,158,11,0.12)";
  const labels = points.map((point) => point.label);
  const values = points.map((point) => point.value);

  return {
    data: [{
      x: labels,
      y: values,
      type: "scatter",
      mode: "lines",
      line: {
        color: lineColor,
        width: 3,
        shape: "spline",
        smoothing: 1.1,
      },
      fill: "tozeroy",
      fillcolor: fillColor,
      hovertemplate: `%{x}<br>%{y:,.0f}<extra>${escapeHtml(dayName)}</extra>`,
    }],
    values,
  };
}

function renderComparisonSection(analysis) {
  if (typeof Plotly === "undefined") {
    return;
  }

  appState.analysis = analysis;
  appState.comparison = analysis?.comparison || null;

  const weakestContainer = document.getElementById("comparisonWeakPlot");
  const strongestContainer = document.getElementById("comparisonStrongPlot");

  if (!weakestContainer || !strongestContainer || !analysis?.comparison) {
    return;
  }

  const colors = getThemeColors();
  const weakestDay = localizeDay(analysis.summary.weakest_day);
  const strongestDay = localizeDay(analysis.summary.strongest_day);
  const narrative = buildComparisonNarrative(analysis);

  document.getElementById("comparison-summary").textContent = narrative.summary;
  document.getElementById("comparison-caption").textContent = narrative.caption;
  document.getElementById("compare-footnote").textContent = narrative.footnote;
  document.getElementById("compare-weak-title").textContent = `${t("compare-weak-title")} · ${weakestDay}`;
  document.getElementById("compare-strong-title").textContent = `${t("compare-strong-title")} · ${strongestDay}`;
  document.getElementById("compare-weak-sub").textContent = t("compare-weak-sub");
  document.getElementById("compare-strong-sub").textContent = t("compare-strong-sub");

  const weakPlot = getComparisonPlotConfig(
    weakestDay,
    serializeProfilePoints(analysis.comparison.weakest_day_profile),
    colors,
    "weak"
  );
  const strongPlot = getComparisonPlotConfig(
    strongestDay,
    serializeProfilePoints(analysis.comparison.strongest_day_profile),
    colors,
    "strong"
  );
  const yMax = Math.max(...weakPlot.values, ...strongPlot.values) * 1.08;
  const baseLayout = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    margin: { t: 8, r: 8, b: 42, l: 54 },
    xaxis: {
      tickfont: { family: "DM Sans", size: 11, color: colors.label },
      tickvals: analysis.comparison.labels.filter((_, index) => index % 3 === 0),
      tickmode: "array",
      gridcolor: colors.grid,
      linecolor: colors.grid,
      fixedrange: true,
    },
    yaxis: {
      tickfont: { family: "DM Sans", size: 11, color: colors.label },
      gridcolor: colors.grid,
      linecolor: colors.grid,
      tickformat: "~s",
      range: [0, yMax || 1],
      fixedrange: true,
    },
    font: {
      family: "DM Sans, sans-serif",
      color: colors.text,
    },
    showlegend: false,
  };

  Plotly.react(weakestContainer, weakPlot.data, baseLayout, {
    displayModeBar: false,
    responsive: true,
    staticPlot: false,
  });
  Plotly.react(strongestContainer, strongPlot.data, baseLayout, {
    displayModeBar: false,
    responsive: true,
    staticPlot: false,
  });

  observeRevealElements();
}


Object.assign(appState, {
  dashboard: null,
  metadata: null,
  filters: {
    start: null,
    end: null,
    dayA: null,
    dayB: null,
  },
  requestToken: 0,
  isPending: false,
});

Object.assign(LANG.es, {
  "filters-label": "Filtro global",
  "filters-title": "Explora el rango que quieras",
  "filters-desc": "Ajusta fechas y la app recalcula KPIs, tendencias, caídas y comparación sin salir de la vista.",
  "date-start-label": "Fecha de inicio",
  "date-end-label": "Fecha de fin",
  "quick-filters-label": "Atajos de tiempo",
  "quick-full-period": "Todo el período",
  "quick-first-3-days": "Primeros 3 días",
  "quick-last-3-days": "Últimos 3 días",
  "quick-single-day": "Un solo día",
  "quick-week-1": "Semana 1",
  "quick-week-2": "Semana 2",
  "filters-loading": "Cargando rango...",
  "filters-error": "No pudimos cargar el dashboard filtrado.",
  "filters-no-data": "No hay datos para ese rango.",
  "drops-empty": "No se detectaron caídas críticas dentro del rango seleccionado.",
  "compare-title": "Comparación de comportamiento",
  "compare-desc": "Elige dos días y compara dónde se acelera, dónde se erosiona la señal y qué patrón conviene tomar como referencia.",
  "compare-select-a-label": "Día A",
  "compare-select-b-label": "Día B",
  "compare-day-a-title": "Día A",
  "compare-day-b-title": "Día B",
  "compare-day-sub": "Promedio horario en el rango",
  "compare-default-summary": "Selecciona dos días para entender en qué momento la operación abre brecha y dónde conviene priorizar intervención.",
  "compare-default-caption": "La comparación usa el mismo rango, la misma escala y el mismo lenguaje visual para que la lectura sea útil en segundos.",
  "compare-footnote": "La comparación se recalcula con el rango activo y mantiene la misma escala para que la diferencia sea realmente comparable.",
  "report-subtitle": "Resumen ejecutivo filtrado listo para compartir internamente",
  "report-comparison-title": "Comparación libre entre Día A y Día B",
});

Object.assign(LANG.en, {
  "filters-label": "Global filter",
  "filters-title": "Explore any time range",
  "filters-desc": "Adjust dates and the app recalculates KPIs, trends, drops, and comparison without leaving the view.",
  "date-start-label": "Start date",
  "date-end-label": "End date",
  "quick-filters-label": "Quick filters",
  "quick-full-period": "Full period",
  "quick-first-3-days": "First 3 days",
  "quick-last-3-days": "Last 3 days",
  "quick-single-day": "Single day",
  "quick-week-1": "Week 1",
  "quick-week-2": "Week 2",
  "filters-loading": "Loading range...",
  "filters-error": "We could not load the filtered dashboard.",
  "filters-no-data": "No data is available for that range.",
  "drops-empty": "No critical drops were detected inside the selected range.",
  "compare-title": "Behavior comparison",
  "compare-desc": "Choose any two weekdays and compare where the signal accelerates, where it erodes, and which pattern is worth using as reference.",
  "compare-select-a-label": "Day A",
  "compare-select-b-label": "Day B",
  "compare-day-a-title": "Day A",
  "compare-day-b-title": "Day B",
  "compare-day-sub": "Hourly average in range",
  "compare-default-summary": "Pick two weekdays to understand when the operation opens a gap and where intervention matters most.",
  "compare-default-caption": "The comparison uses the same range, the same scale, and the same visual language so the readout stays useful in seconds.",
  "compare-footnote": "The comparison is recalculated with the active range and keeps the same scale so the difference stays truly comparable.",
  "report-subtitle": "Filtered executive summary ready to share internally",
  "report-comparison-title": "Free comparison between Day A and Day B",
});

const DAY_SHORT_LABELS = {
  es: {
    Monday: "Lun",
    Tuesday: "Mar",
    Wednesday: "Mié",
    Thursday: "Jue",
    Friday: "Vie",
    Saturday: "Sáb",
    Sunday: "Dom",
  },
  en: {
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  },
};

function getLocale() {
  return currentLang === "es" ? "es-CO" : "en-US";
}

function resolveApiBase() {
  return window.location.protocol === "file:" ? "http://127.0.0.1:8000" : window.location.origin;
}

function formatDateForRange(dateString, options) {
  if (!dateString) {
    return "";
  }

  return new Date(`${dateString}T12:00:00`).toLocaleDateString(getLocale(), options);
}

function formatDateShort(dateString) {
  return formatDateForRange(dateString, {
    month: "short",
    day: "numeric",
  });
}

function formatDateLong(dateString) {
  return formatDateForRange(dateString, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateRangeLabel(start, end) {
  if (!start || !end) {
    return "";
  }

  if (start === end) {
    return formatDateLong(start);
  }

  return `${formatDateShort(start)} - ${formatDateLong(end)}`;
}

function buildRangeSummary(meta) {
  if (!meta) {
    return t("filters-loading");
  }

  const unit = currentLang === "es"
    ? meta.days_in_range === 1 ? "día con datos" : "días con datos"
    : meta.days_in_range === 1 ? "day with data" : "days with data";

  return `${formatDateRangeLabel(meta.selected_start, meta.selected_end)} · ${meta.days_in_range} ${unit}`;
}

function formatTimestampLabel(timestamp) {
  if (!timestamp) {
    return "";
  }

  return new Date(timestamp).toLocaleString(getLocale(), {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDurationLabel(minutes) {
  const totalSeconds = Math.max(1, Math.round(Number(minutes || 0) * 60));

  if (totalSeconds < 60) {
    return currentLang === "es" ? `${totalSeconds} s` : `${totalSeconds} sec`;
  }

  const totalMinutes = totalSeconds / 60;
  const roundedMinutes = Number.isInteger(totalMinutes) ? totalMinutes.toFixed(0) : totalMinutes.toFixed(1);

  if (totalMinutes < 60) {
    return `${roundedMinutes} min`;
  }

  const totalHours = totalMinutes / 60;
  const roundedHours = Number.isInteger(totalHours) ? totalHours.toFixed(0) : totalHours.toFixed(1);
  return currentLang === "es" ? `${roundedHours} h` : `${roundedHours} hr`;
}

function localizeDayShort(dayName) {
  return DAY_SHORT_LABELS[currentLang]?.[dayName] || dayName;
}

function formatDropPct(value) {
  const numeric = Number(value || 0);
  return Number.isInteger(numeric) ? numeric.toFixed(0) : numeric.toFixed(1);
}

function formatPlainNumber(value) {
  return formatLocaleNumber(Number(value || 0), 0);
}

function getQuickFilterLabel(filterId) {
  const labels = {
    full_period: t("quick-full-period"),
    first_3_days: t("quick-first-3-days"),
    last_3_days: t("quick-last-3-days"),
    single_day: t("quick-single-day"),
    week_1: t("quick-week-1"),
    week_2: t("quick-week-2"),
  };

  return labels[filterId] || filterId;
}

function buildQuickFilterRangeLabel(filter) {
  if (!filter?.start || !filter?.end) {
    return "";
  }

  if (filter.start === filter.end) {
    return formatDateShort(filter.start);
  }

  return `${formatDateShort(filter.start)} - ${formatDateShort(filter.end)}`;
}

function isSameRange(startA, endA, startB, endB) {
  return startA === startB && endA === endB;
}

async function fetchDashboardData({ start, end, dayA, dayB } = {}) {
  const url = new URL("/api/dashboard-data", resolveApiBase());

  if (start) {
    url.searchParams.set("start", start);
  }

  if (end) {
    url.searchParams.set("end", end);
  }

  if (dayA) {
    url.searchParams.set("day_a", dayA);
  }

  if (dayB) {
    url.searchParams.set("day_b", dayB);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("dashboard_unavailable");
  }

  return response.json();
}

function setDashboardPending(pending) {
  appState.isPending = pending;

  const filtersShell = document.getElementById("filters-shell");

  if (filtersShell) {
    filtersShell.classList.toggle("is-loading", pending);
  }

  ["date-start-input", "date-end-input", "compare-day-a", "compare-day-b"].forEach((id) => {
    const element = document.getElementById(id);

    if (element) {
      element.disabled = pending;
    }
  });

  document.querySelectorAll(".quick-filter-chip").forEach((button) => {
    button.disabled = pending;
  });
}

function buildBarColors(values, emphasis = "brand") {
  const maxValue = Math.max(...values, 1);
  const strong = emphasis === "warning" ? "#F59E0B" : "#FF441F";
  const medium = emphasis === "warning" ? "rgba(245,158,11,0.55)" : "rgba(255,68,31,0.62)";
  const light = emphasis === "warning" ? "rgba(245,158,11,0.22)" : "rgba(255,68,31,0.28)";

  return values.map((value) => {
    const ratio = value / maxValue;

    if (ratio >= 0.82) {
      return strong;
    }

    if (ratio >= 0.52) {
      return medium;
    }

    return light;
  });
}

function setCounterValue(elementId, target, format, suffix = "") {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.dataset.countTo = String(target);
  element.dataset.countFormat = format;

  if (suffix) {
    element.dataset.countSuffix = suffix;
  } else {
    delete element.dataset.countSuffix;
  }

  delete element.dataset.countAnimated;
  delete element.dataset.countObserved;
  animateCounter(element);
}

function renderQuickFilters(meta) {
  const container = document.getElementById("quick-filters");

  if (!container || !meta?.quick_filters) {
    return;
  }

  container.innerHTML = meta.quick_filters.map((filter) => {
    const isActive = isSameRange(meta.selected_start, meta.selected_end, filter.start, filter.end);

    return `
      <button
        type="button"
        class="quick-filter-chip${isActive ? " active" : ""}"
        data-quick-filter="${escapeHtml(filter.id)}"
        data-start="${escapeHtml(filter.start)}"
        data-end="${escapeHtml(filter.end)}"
      >
        <span class="quick-filter-title">${escapeHtml(getQuickFilterLabel(filter.id))}</span>
        <span class="quick-filter-range">${escapeHtml(buildQuickFilterRangeLabel(filter))}</span>
      </button>
    `;
  }).join("");
}

function renderComparisonControls(payload) {
  const selectA = document.getElementById("compare-day-a");
  const selectB = document.getElementById("compare-day-b");
  const comparison = payload?.comparison;
  const availableDays = comparison?.available_days || [];

  if (!selectA || !selectB) {
    return;
  }

  const optionsHtml = availableDays.map((day) => `
    <option value="${escapeHtml(day)}">${escapeHtml(localizeDay(day))}</option>
  `).join("");

  selectA.innerHTML = optionsHtml;
  selectB.innerHTML = optionsHtml;
  selectA.value = comparison?.day_a || availableDays[0] || "";
  selectB.value = comparison?.day_b || availableDays[0] || "";
  selectA.disabled = appState.isPending || availableDays.length === 0;
  selectB.disabled = appState.isPending || availableDays.length === 0;
}

function renderFilterPanel(payload) {
  const meta = payload?.meta;
  const startInput = document.getElementById("date-start-input");
  const endInput = document.getElementById("date-end-input");
  const rangeSummary = document.getElementById("filters-range-summary");

  if (!meta || !startInput || !endInput) {
    return;
  }

  startInput.min = meta.min_date;
  startInput.max = meta.max_date;
  startInput.value = meta.selected_start;
  endInput.min = meta.min_date;
  endInput.max = meta.max_date;
  endInput.value = meta.selected_end;

  if (rangeSummary) {
    rangeSummary.textContent = buildRangeSummary(meta);
  }

  renderQuickFilters(meta);
  renderComparisonControls(payload);
}

function renderDynamicHeaders(payload) {
  const summary = payload?.summary;
  const meta = payload?.meta;
  const drops = payload?.drops || [];

  if (!summary || !meta) {
    return;
  }

  const chart1Sub = document.getElementById("chart1-sub");
  const chart1Badge = document.getElementById("chart1-badge");
  const chart2Sub = document.getElementById("chart2-sub");
  const chart3Sub = document.getElementById("chart3-sub");
  const dropsSub = document.getElementById("drops-sub");
  const dropsBadge = document.getElementById("drops-badge");
  const compareBadge = document.getElementById("compare-badge");

  if (chart1Sub) {
    chart1Sub.textContent = currentLang === "es"
      ? `${formatDateRangeLabel(meta.selected_start, meta.selected_end)} · resolución ${summary.timeseries_resolution_minutes} min`
      : `${formatDateRangeLabel(meta.selected_start, meta.selected_end)} · ${summary.timeseries_resolution_minutes}-min resolution`;
  }

  if (chart1Badge) {
    chart1Badge.textContent = currentLang === "es"
      ? `${meta.days_in_range} ${meta.days_in_range === 1 ? "día activo" : "días activos"}`
      : `${meta.days_in_range} active ${meta.days_in_range === 1 ? "day" : "days"}`;
  }

  if (chart2Sub) {
    chart2Sub.textContent = currentLang === "es"
      ? "Promedio agregado del rango · 24 horas"
      : "Range average · 24 hours";
  }

  if (chart3Sub) {
    chart3Sub.textContent = currentLang === "es"
      ? "Días presentes en el rango seleccionado"
      : "Weekdays present in the selected range";
  }

  if (dropsSub) {
    dropsSub.textContent = currentLang === "es"
      ? "Eventos críticos detectados dentro del rango filtrado"
      : "Critical events detected inside the selected range";
  }

  if (dropsBadge) {
    dropsBadge.textContent = currentLang === "es"
      ? `${drops.length} ${drops.length === 1 ? "evento" : "eventos"}`
      : `${drops.length} ${drops.length === 1 ? "event" : "events"}`;
  }

  if (compareBadge) {
    compareBadge.textContent = currentLang === "es"
      ? `Misma escala · ${meta.days_in_range} días en análisis`
      : `Same scale · ${meta.days_in_range} days in scope`;
  }
}

function renderKpis(summary) {
  if (!summary) {
    return;
  }

  setCounterValue("kpi1-val", summary.peak_value, "compact");
  setCounterValue("kpi2-val", summary.overall_average, "compact");
  setCounterValue("kpi3-val", Number(summary.strongest_hour.split(":")[0]), "time");

  const kpi1Sub = document.getElementById("kpi1-sub");
  const kpi1Badge = document.getElementById("kpi1-badge");
  const kpi2Sub = document.getElementById("kpi2-sub");
  const kpi3Sub = document.getElementById("kpi3-sub");
  const kpi4Val = document.getElementById("kpi4-val");
  const kpi4Sub = document.getElementById("kpi4-sub");

  if (kpi1Sub) {
    kpi1Sub.textContent = currentLang === "es"
      ? `${formatTimestampLabel(summary.peak_timestamp)} · mejor punto del rango`
      : `${formatTimestampLabel(summary.peak_timestamp)} · best point in range`;
  }

  if (kpi1Badge) {
    kpi1Badge.textContent = currentLang === "es"
      ? `${summary.days_in_range} ${summary.days_in_range === 1 ? "día activo" : "días activos"}`
      : `${summary.days_in_range} active ${summary.days_in_range === 1 ? "day" : "days"}`;
  }

  if (kpi2Sub) {
    kpi2Sub.textContent = currentLang === "es"
      ? `${formatPlainNumber(summary.observations)} observaciones dentro del rango`
      : `${formatPlainNumber(summary.observations)} observations inside the range`;
  }

  if (kpi3Sub) {
    kpi3Sub.textContent = currentLang === "es"
      ? `Hora más débil: ${summary.weakest_hour}`
      : `Weakest hour: ${summary.weakest_hour}`;
  }

  if (kpi4Val) {
    kpi4Val.textContent = localizeDay(summary.strongest_day);
  }

  if (kpi4Sub) {
    kpi4Sub.textContent = currentLang === "es"
      ? `${localizeDay(summary.weakest_day)} es el día más frágil en el rango`
      : `${localizeDay(summary.weakest_day)} is the weakest day in range`;
  }
}

function updateChartsWithData(payload) {
  if (!payload || !charts.ts || !charts.hourly || !charts.dow) {
    return;
  }

  const colors = getThemeColors();
  const timeseriesContext = charts.ts.ctx;
  const timeseriesLabels = payload.timeseries.map((point) => point.ts);
  const timeseriesValues = payload.timeseries.map((point) => point.value);
  const hourlyValues = payload.hourly.map((item) => item.value);
  const weekdayValues = payload.weekday.map((item) => item.value);

  charts.ts.data.labels = timeseriesLabels;
  charts.ts.data.datasets[0].data = timeseriesValues;
  charts.ts.data.datasets[0].borderColor = colors.line;
  charts.ts.data.datasets[0].backgroundColor = createTimeseriesGradient(timeseriesContext, colors);

  charts.hourly.data.labels = payload.hourly.map((item) => `${item.hour.toString().padStart(2, "0")}h`);
  charts.hourly.data.datasets[0].data = hourlyValues;
  charts.hourly.data.datasets[0].backgroundColor = buildBarColors(hourlyValues, "brand");

  charts.dow.data.labels = payload.weekday.map((item) => localizeDayShort(item.day));
  charts.dow.data.datasets[0].data = weekdayValues;
  charts.dow.data.datasets[0].backgroundColor = buildBarColors(weekdayValues, "warning");

  Object.values(charts).forEach((chart) => chart?.update());
}

function renderDropsTable(drops = appState.dashboard?.drops || []) {
  const headers = t("drops-th");
  const severityMap = {
    critical: t("severity-critical"),
    high: t("severity-high"),
    medium: t("severity-medium"),
  };
  const table = document.getElementById("drops-table");

  if (!table) {
    return;
  }

  const sourceRows = drops.length ? drops : (!appState.dashboard ? DROPS : []);
  let tableHtml = `<thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>`;

  if (!sourceRows.length) {
    tableHtml += `<tr><td colspan="6">${escapeHtml(t("drops-empty"))}</td></tr>`;
  } else {
    sourceRows.forEach((drop) => {
      if (drop.timestamp) {
        tableHtml += `<tr>
          <td>${escapeHtml(formatTimestampLabel(drop.timestamp))}</td>
          <td><span class="drop-pct">${escapeHtml(`${formatDropPct(drop.drop_pct)}%`)}</span></td>
          <td>${escapeHtml(formatPlainNumber(drop.from_value))}</td>
          <td>${escapeHtml(formatPlainNumber(drop.to_value))}</td>
          <td>${escapeHtml(formatDurationLabel(drop.duration_minutes))}</td>
          <td><span class="drop-severity severity-${escapeHtml(drop.severity)}">${escapeHtml(severityMap[drop.severity] || drop.severity)}</span></td>
        </tr>`;
      } else {
        tableHtml += `<tr>
          <td>${escapeHtml(drop.ts)}</td>
          <td><span class="drop-pct">${escapeHtml(`${drop.drop}%`)}</span></td>
          <td>${escapeHtml(drop.from)}</td>
          <td>${escapeHtml(drop.to)}</td>
          <td>${escapeHtml(drop.dur)}</td>
          <td><span class="drop-severity severity-${escapeHtml(drop.sev)}">${escapeHtml(severityMap[drop.sev] || drop.sev)}</span></td>
        </tr>`;
      }
    });
  }

  tableHtml += "</tbody>";
  table.innerHTML = tableHtml;
}

function renderInsights() {
  const grid = document.getElementById("insights-grid");

  if (!grid) {
    return;
  }

  const insights = LANG[currentLang]["insights-data"];

  grid.innerHTML = insights.map((insight) => `
    <div class="insight-card">
      <div class="insight-icon ${insight.type === "warn" ? "warn" : insight.type === "good" ? "good" : ""}">${insight.icon}</div>
      <div>
        <div class="insight-title">${insight.title}</div>
        <div class="insight-body">${insight.body}</div>
      </div>
    </div>
  `).join("");

  observeRevealElements();
}

function renderSuggested() {
  const container = document.getElementById("suggested-list");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  LANG[currentLang]["suggested-qs"].forEach((question) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "suggested-q";
    button.dataset.suggestedQuestion = question;
    button.textContent = question;
    container.appendChild(button);
  });
}

function buildComparisonNarrative(payload) {
  const comparison = payload?.comparison;

  if (!comparison?.day_a || !comparison?.day_b) {
    return {
      summary: t("compare-default-summary"),
      caption: t("compare-default-caption"),
      footnote: t("compare-footnote"),
    };
  }

  const dayA = localizeDay(comparison.day_a);
  const dayB = localizeDay(comparison.day_b);
  const strongerDay = localizeDay(comparison.stronger_day || comparison.day_b);
  const weakerDay = localizeDay(comparison.weaker_day || comparison.day_a);
  const gap = formatLocaleNumber(Math.abs(comparison.gap_pct || 0), 1);
  const gapHour = comparison.largest_gap_hour;

  if (comparison.day_a === comparison.day_b || Math.abs(comparison.gap_pct || 0) < 0.1) {
    return currentLang === "es"
      ? {
          summary: `Comparando ${dayA} vs ${dayB}. Ambos comportamientos se mantienen prácticamente al mismo nivel dentro del rango actual.`,
          caption: `Usa esta vista para revisar cambios por hora, incluso cuando el promedio total no abre una brecha clara.`,
          footnote: t("compare-footnote"),
        }
      : {
          summary: `Comparing ${dayA} vs ${dayB}. Both behaviors stay almost at the same level inside the active range.`,
          caption: `Use this view to inspect hourly shifts even when the overall average does not open a clear gap.`,
          footnote: t("compare-footnote"),
        };
  }

  if (currentLang === "es") {
    return {
      summary: `Comparando ${dayA} vs ${dayB}. ${strongerDay} muestra ${gap}% más disponibilidad promedio que ${weakerDay}.`,
      caption: `La mayor distancia aparece alrededor de las ${gapHour}, un punto útil para priorizar cobertura, staffing o abastecimiento antes de afectar experiencia.`,
      footnote: t("compare-footnote"),
    };
  }

  return {
    summary: `Comparing ${dayA} vs ${dayB}. ${strongerDay} shows ${gap}% higher average availability than ${weakerDay}.`,
    caption: `The widest gap shows up around ${gapHour}, making it a good checkpoint for coverage, staffing, or supply decisions before experience gets hit.`,
    footnote: t("compare-footnote"),
  };
}

function renderComparisonFallbackCopy() {
  const summaryElement = document.getElementById("comparison-summary");
  const captionElement = document.getElementById("comparison-caption");
  const titleA = document.getElementById("compare-weak-title");
  const titleB = document.getElementById("compare-strong-title");
  const subA = document.getElementById("compare-weak-sub");
  const subB = document.getElementById("compare-strong-sub");

  if (summaryElement) {
    summaryElement.textContent = t("compare-default-summary");
  }

  if (captionElement) {
    captionElement.textContent = t("compare-default-caption");
  }

  if (titleA) {
    titleA.textContent = t("compare-day-a-title");
  }

  if (titleB) {
    titleB.textContent = t("compare-day-b-title");
  }

  if (subA) {
    subA.textContent = t("compare-day-sub");
  }

  if (subB) {
    subB.textContent = t("compare-day-sub");
  }
}

function renderComparisonSection(payload) {
  if (typeof Plotly === "undefined") {
    return;
  }

  const comparison = payload?.comparison;
  const weakestContainer = document.getElementById("comparisonWeakPlot");
  const strongestContainer = document.getElementById("comparisonStrongPlot");

  if (!weakestContainer || !strongestContainer || !comparison?.day_a || !comparison?.day_b) {
    renderComparisonFallbackCopy();
    return;
  }

  const colors = getThemeColors();
  const narrative = buildComparisonNarrative(payload);
  const dayALabel = localizeDay(comparison.day_a);
  const dayBLabel = localizeDay(comparison.day_b);

  appState.comparison = comparison;

  document.getElementById("comparison-summary").textContent = narrative.summary;
  document.getElementById("comparison-caption").textContent = narrative.caption;
  document.getElementById("compare-footnote").textContent = narrative.footnote;
  document.getElementById("compare-weak-title").textContent = `${t("compare-day-a-title")} · ${dayALabel}`;
  document.getElementById("compare-strong-title").textContent = `${t("compare-day-b-title")} · ${dayBLabel}`;
  document.getElementById("compare-weak-sub").textContent = t("compare-day-sub");
  document.getElementById("compare-strong-sub").textContent = t("compare-day-sub");

  const dayAPlot = getComparisonPlotConfig(
    dayALabel,
    serializeProfilePoints(comparison.day_a_profile),
    colors,
    "weak"
  );
  const dayBPlot = getComparisonPlotConfig(
    dayBLabel,
    serializeProfilePoints(comparison.day_b_profile),
    colors,
    "strong"
  );
  const yMax = Math.max(...dayAPlot.values, ...dayBPlot.values, 1) * 1.08;
  const baseLayout = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    margin: { t: 8, r: 8, b: 42, l: 54 },
    xaxis: {
      tickfont: { family: "DM Sans", size: 11, color: colors.label },
      tickvals: comparison.labels.filter((_, index) => index % 3 === 0),
      tickmode: "array",
      gridcolor: colors.grid,
      linecolor: colors.grid,
      fixedrange: true,
    },
    yaxis: {
      tickfont: { family: "DM Sans", size: 11, color: colors.label },
      gridcolor: colors.grid,
      linecolor: colors.grid,
      tickformat: "~s",
      range: [0, yMax],
      fixedrange: true,
    },
    font: {
      family: "DM Sans, sans-serif",
      color: colors.text,
    },
    showlegend: false,
  };

  Plotly.react(weakestContainer, dayAPlot.data, baseLayout, {
    displayModeBar: false,
    responsive: true,
    staticPlot: false,
  });
  Plotly.react(strongestContainer, dayBPlot.data, baseLayout, {
    displayModeBar: false,
    responsive: true,
    staticPlot: false,
  });
}

function buildAutomaticInsights() {
  const summary = appState.dashboard?.summary;
  const comparison = appState.dashboard?.comparison;
  const drops = appState.dashboard?.drops || [];

  if (!summary || !comparison) {
    return [];
  }

  const strongestDay = localizeDay(summary.strongest_day);
  const weakestDay = localizeDay(summary.weakest_day);
  const largestDrop = drops[0];

  if (currentLang === "es") {
    return [
      `${strongestDay} es la referencia más sólida del rango, mientras ${weakestDay} concentra la menor resiliencia operativa.`,
      `La hora más fuerte sigue alrededor de ${summary.strongest_hour}, así que esa franja conviene proteger con capacidad, monitoreo y controles operativos.`,
      largestDrop
        ? `La caída más fuerte del rango llegó a ${formatDropPct(Math.abs(largestDrop.drop_pct))}% en ${formatTimestampLabel(largestDrop.timestamp)}.`
        : "No se detectaron caídas críticas dentro del rango seleccionado.",
    ];
  }

  return [
    `${strongestDay} remains the strongest benchmark in range, while ${weakestDay} concentrates the lowest operational resilience.`,
    `The strongest hour still clusters around ${summary.strongest_hour}, so that is the window worth protecting with capacity, monitoring, and execution guardrails.`,
    largestDrop
      ? `The steepest drop in range reached ${formatDropPct(Math.abs(largestDrop.drop_pct))}% on ${formatTimestampLabel(largestDrop.timestamp)}.`
      : "No critical drops were detected inside the selected range.",
  ];
}

function getKpiSnapshot() {
  const ids = ["kpi1", "kpi2", "kpi3", "kpi4"];

  return ids.map((id) => ({
    label: document.getElementById(`${id}-label`)?.textContent.trim() || "",
    value: document.getElementById(`${id}-val`)?.textContent.trim() || "",
    sub: document.getElementById(`${id}-sub`)?.textContent.trim() || "",
  }));
}

function buildReportHtml({ timestamp, mainChartImage, weakChartImage, strongChartImage, insights, kpis }) {
  const title = t("report-title");
  const rangeSummary = appState.dashboard ? buildRangeSummary(appState.dashboard.meta) : "";
  const subtitle = `${t("report-subtitle")}${rangeSummary ? ` · ${rangeSummary}` : ""}`;
  const comparisonTitle = t("report-comparison-title");
  const reportDate = new Date(timestamp).toLocaleString(getLocale(), {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand: #FF441F;
      --bg: #FAFAF8;
      --card: #FFFFFF;
      --text: #18181B;
      --muted: #52525B;
      --border: rgba(0,0,0,0.08);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "DM Sans", sans-serif;
      color: var(--text);
      background: linear-gradient(180deg, #fff8f4 0%, var(--bg) 28%);
      padding: 48px 24px 64px;
    }
    .report {
      max-width: 1120px;
      margin: 0 auto;
    }
    .hero {
      padding: 40px;
      border-radius: 28px;
      background: linear-gradient(135deg, #ff5a36 0%, #ff441f 100%);
      color: white;
      box-shadow: 0 28px 56px rgba(255,68,31,0.24);
      margin-bottom: 28px;
    }
    .eyebrow {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      opacity: 0.82;
      margin-bottom: 12px;
    }
    h1 {
      margin: 0 0 12px;
      font-family: "Sora", sans-serif;
      font-size: 40px;
      line-height: 1.05;
      letter-spacing: -1.6px;
    }
    .subtitle {
      margin: 0;
      font-size: 16px;
      line-height: 1.7;
      max-width: 760px;
      opacity: 0.92;
    }
    .stamp {
      margin-top: 18px;
      font-size: 12px;
      opacity: 0.76;
    }
    .section {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 28px;
      margin-top: 22px;
      box-shadow: 0 16px 34px rgba(0,0,0,0.05);
    }
    .section h2 {
      font-family: "Sora", sans-serif;
      font-size: 20px;
      margin: 0 0 18px;
      letter-spacing: -0.6px;
    }
    .kpis {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 14px;
    }
    .kpi {
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 18px;
      background: #fffdfc;
    }
    .kpi-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      margin-bottom: 10px;
    }
    .kpi-value {
      font-family: "Sora", sans-serif;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 8px;
    }
    .kpi-sub {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }
    .chart-frame {
      border-radius: 20px;
      overflow: hidden;
      background: #fbfbf9;
      border: 1px solid var(--border);
      padding: 12px;
    }
    .chart-frame img {
      width: 100%;
      display: block;
    }
    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .comparison-card {
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 16px;
      background: #fffefd;
    }
    .comparison-card h3 {
      font-family: "Sora", sans-serif;
      margin: 0 0 12px;
      font-size: 16px;
      letter-spacing: -0.4px;
    }
    ul {
      margin: 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
      color: var(--muted);
      line-height: 1.7;
    }
    @media (max-width: 900px) {
      .kpis, .comparison-grid { grid-template-columns: 1fr; }
      body { padding: 20px 14px 32px; }
      .hero, .section { padding: 22px; }
      h1 { font-size: 30px; }
    }
  </style>
</head>
<body>
  <div class="report">
    <section class="hero">
      <div class="eyebrow">Avail · Rappi</div>
      <h1>${escapeHtml(title)}</h1>
      <p class="subtitle">${escapeHtml(subtitle)}</p>
      <div class="stamp">${escapeHtml(reportDate)}</div>
    </section>

    <section class="section">
      <h2>${escapeHtml(t("report-kpis-title"))}</h2>
      <div class="kpis">
        ${kpis.map((kpi) => `
          <article class="kpi">
            <div class="kpi-label">${escapeHtml(kpi.label)}</div>
            <div class="kpi-value">${escapeHtml(kpi.value)}</div>
            <div class="kpi-sub">${escapeHtml(kpi.sub)}</div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <h2>${escapeHtml(t("report-main-chart-title"))}</h2>
      <div class="chart-frame">
        <img src="${mainChartImage}" alt="${escapeHtml(t("report-main-chart-title"))}">
      </div>
    </section>

    <section class="section">
      <h2>${escapeHtml(comparisonTitle)}</h2>
      <div class="comparison-grid">
        <article class="comparison-card">
          <h3>${escapeHtml(document.getElementById("compare-weak-title")?.textContent.trim() || "")}</h3>
          <div class="chart-frame"><img src="${weakChartImage}" alt="${escapeHtml(document.getElementById("compare-weak-title")?.textContent.trim() || "")}"></div>
        </article>
        <article class="comparison-card">
          <h3>${escapeHtml(document.getElementById("compare-strong-title")?.textContent.trim() || "")}</h3>
          <div class="chart-frame"><img src="${strongChartImage}" alt="${escapeHtml(document.getElementById("compare-strong-title")?.textContent.trim() || "")}"></div>
        </article>
      </div>
    </section>

    <section class="section">
      <h2>${escapeHtml(t("report-insights-title"))}</h2>
      <ul>
        ${insights.map((insight) => `<li>${escapeHtml(insight)}</li>`).join("")}
      </ul>
    </section>
  </div>
</body>
</html>`;
}

async function downloadReport() {
  if (typeof Plotly === "undefined" || !charts.ts) {
    return;
  }

  let weakPlotElement = document.getElementById("comparisonWeakPlot");
  let strongPlotElement = document.getElementById("comparisonStrongPlot");

  if (!weakPlotElement || !strongPlotElement) {
    return;
  }

  if (!appState.dashboard) {
    await refreshDashboard();
  }

  if (!weakPlotElement.classList.contains("js-plotly-plot") || !strongPlotElement.classList.contains("js-plotly-plot")) {
    renderComparisonSection(appState.dashboard);

    await new Promise((resolve) => {
      window.requestAnimationFrame(resolve);
    });

    weakPlotElement = document.getElementById("comparisonWeakPlot");
    strongPlotElement = document.getElementById("comparisonStrongPlot");
  }

  const buttons = Array.from(document.querySelectorAll("[data-download-report]"));
  const originalLabels = buttons.map((button) => button.querySelector("span")?.textContent || button.textContent);

  buttons.forEach((button, index) => {
    button.disabled = true;
    const label = button.querySelector("span");
    if (label) {
      label.textContent = t("report-building");
    } else {
      button.textContent = t("report-building");
    }
    button.dataset.originalLabel = originalLabels[index];
  });

  try {
    const [weakChartImage, strongChartImage] = await Promise.all([
      Plotly.toImage(weakPlotElement, { format: "png", width: 900, height: 520 }),
      Plotly.toImage(strongPlotElement, { format: "png", width: 900, height: 520 }),
    ]);
    const mainChartImage = charts.ts.canvas.toDataURL("image/png", 1.0);
    const html = buildReportHtml({
      timestamp: Date.now(),
      mainChartImage,
      weakChartImage,
      strongChartImage,
      insights: buildAutomaticInsights(),
      kpis: getKpiSnapshot(),
    });
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = t("report-download-name");
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    buttons.forEach((button) => {
      const label = button.querySelector("span");
      if (label) {
        label.textContent = t("report-ready");
      } else {
        button.textContent = t("report-ready");
      }
    });

    await new Promise((resolve) => {
      window.setTimeout(resolve, 850);
    });
  } finally {
    buttons.forEach((button) => {
      button.disabled = false;
      const label = button.querySelector("span");
      const originalLabel = button.dataset.originalLabel || t("report-btn-label");
      if (label) {
        label.textContent = originalLabel;
      } else {
        button.textContent = originalLabel;
      }
      delete button.dataset.originalLabel;
    });
  }
}

function bindReportButtons() {
  document.querySelectorAll("[data-download-report]").forEach((button) => {
    if (button.dataset.boundReport === "true") {
      return;
    }

    button.dataset.boundReport = "true";
    button.addEventListener("click", () => {
      void downloadReport();
    });
  });
}

function observeRevealElements() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-on-scroll").forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
  }

  const groups = [
    "#overview .hero-content",
    "#dashboard .section-header",
    "#dashboard .filters-shell",
    "#dashboard .kpi-card",
    "#dashboard .chart-card",
    "#comparison .section-header",
    "#comparison .comparison-story",
    "#comparison .comparison-controls",
    "#comparison .comparison-card",
    "#insights .section-header",
    "#insights .insight-card",
    "#assistant .chat-wrapper",
  ];

  document.querySelectorAll(groups.join(",")).forEach((element, index) => {
    if (element.classList.contains("reveal-on-scroll")) {
      return;
    }

    element.classList.add("reveal-on-scroll");
    element.style.transitionDelay = `${Math.min(index * 24, 180)}ms`;
    revealObserver.observe(element);
  });
}

function animateCounter(element) {
  if (!element) {
    return;
  }

  const target = Number(element.dataset.countTo);
  const format = element.dataset.countFormat || "compact";
  const suffix = element.dataset.countSuffix || "";
  const startTime = performance.now();
  const duration = 1200;

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    element.innerHTML = formatCountValue(current, format, suffix);

    if (progress < 1) {
      window.requestAnimationFrame(tick);
      return;
    }

    element.innerHTML = formatCountValue(target, format, suffix);
    element.dataset.countAnimated = "true";
  }

  window.requestAnimationFrame(tick);
}

function initCountUpAnimations() {
  const counters = document.querySelectorAll("[data-count-to]");

  if (!("IntersectionObserver" in window)) {
    counters.forEach((counter) => animateCounter(counter));
    return;
  }

  if (!countObserver) {
    countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        animateCounter(entry.target);
        countObserver.unobserve(entry.target);
      });
    }, { threshold: 0.55 });
  }

  counters.forEach((counter) => {
    if (counter.dataset.countObserved === "true" || counter.dataset.countAnimated === "true") {
      return;
    }

    counter.dataset.countObserved = "true";
    countObserver.observe(counter);
  });
}

function getThemeColors() {
  const styles = getComputedStyle(document.documentElement);

  return {
    grid: styles.getPropertyValue("--chart-grid").trim() || "rgba(0, 0, 0, 0.05)",
    label: styles.getPropertyValue("--chart-label").trim() || "#A1A1AA",
    line: styles.getPropertyValue("--chart-line").trim() || "#FF441F",
    fillStart: styles.getPropertyValue("--chart-fill-start").trim() || "rgba(255, 68, 31, 0.18)",
    fillEnd: styles.getPropertyValue("--chart-fill-end").trim() || "rgba(255, 68, 31, 0)",
    bar: styles.getPropertyValue("--chart-bar").trim() || "rgba(255, 68, 31, 0.75)",
    barHover: styles.getPropertyValue("--chart-bar-hover").trim() || "#FF441F",
    text: styles.getPropertyValue("--text-primary").trim() || "#18181B",
    subtle: styles.getPropertyValue("--text-secondary").trim() || "#52525B",
    warning: styles.getPropertyValue("--warning").trim() || "#F59E0B",
  };
}

function createTimeseriesGradient(context, colors) {
  const gradient = context.createLinearGradient(0, 0, 0, 300);

  gradient.addColorStop(0, colors.fillStart);
  gradient.addColorStop(1, colors.fillEnd);

  return gradient;
}

function buildCharts() {
  const colors = getThemeColors();
  const commonScales = () => ({
    x: {
      grid: { color: colors.grid, drawBorder: false },
      ticks: {
        color: colors.label,
        font: { family: "DM Sans", size: 11 },
        maxTicksLimit: 8,
      },
    },
    y: {
      grid: { color: colors.grid, drawBorder: false },
      ticks: {
        color: colors.label,
        font: { family: "DM Sans", size: 11 },
        callback: (tick) => fmt(tick),
      },
    },
  });

  const timeseriesCanvas = document.getElementById("chartTimeseries");
  const hourlyCanvas = document.getElementById("chartHourly");
  const dowCanvas = document.getElementById("chartDow");

  if (!timeseriesCanvas || !hourlyCanvas || !dowCanvas) {
    return;
  }

  const timeseriesContext = timeseriesCanvas.getContext("2d");
  const hourlyContext = hourlyCanvas.getContext("2d");
  const dowContext = dowCanvas.getContext("2d");

  charts.ts = new Chart(timeseriesContext, {
    type: "line",
    data: {
      labels: TIMESERIES_SAMPLE.map((point) => point.ts),
      datasets: [{
        data: TIMESERIES_SAMPLE.map((point) => point.v),
        borderColor: colors.line,
        borderWidth: 1.6,
        pointRadius: 0,
        fill: true,
        backgroundColor: createTimeseriesGradient(timeseriesContext, colors),
        tension: 0.28,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.84)",
          titleFont: { family: "Sora", size: 11 },
          bodyFont: { family: "DM Sans", size: 12 },
          callbacks: {
            title: (items) => {
              const label = items[0]?.chart?.data?.labels?.[items[0].dataIndex];
              return formatTimestampLabel(label);
            },
            label: (item) => {
              const availabilityLabel = currentLang === "es" ? "disponibilidad" : "availability";
              return ` ${fmt(item.parsed.y ?? item.raw)} ${availabilityLabel}`;
            },
          },
        },
      },
      scales: {
        x: {
          type: "time",
          time: { unit: "day", displayFormats: { day: "MMM d" } },
          grid: { color: colors.grid, drawBorder: false },
          ticks: {
            color: colors.label,
            font: { family: "DM Sans", size: 11 },
            maxTicksLimit: 11,
          },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: {
            color: colors.label,
            font: { family: "DM Sans", size: 11 },
            callback: (tick) => fmt(tick),
          },
        },
      },
    },
  });

  charts.hourly = new Chart(hourlyContext, {
    type: "bar",
    data: {
      labels: HOURLY.map((item) => `${item.h.toString().padStart(2, "0")}h`),
      datasets: [{
        data: HOURLY.map((item) => item.v),
        backgroundColor: buildBarColors(HOURLY.map((item) => item.v), "brand"),
        borderRadius: 4,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.84)",
          callbacks: {
            label: (item) => ` ${fmt(item.parsed.y ?? item.raw)}`,
          },
        },
      },
      scales: commonScales(),
    },
  });

  charts.dow = new Chart(dowContext, {
    type: "bar",
    data: {
      labels: DOW.map((item) => localizeDayShort(item.d)),
      datasets: [{
        data: DOW.map((item) => item.v),
        backgroundColor: buildBarColors(DOW.map((item) => item.v), "warning"),
        borderRadius: 4,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.84)",
          callbacks: {
            label: (item) => ` ${fmt(item.parsed.y ?? item.raw)}`,
          },
        },
      },
      scales: commonScales(),
    },
  });
}

function renderDashboard(payload) {
  if (!payload) {
    renderComparisonFallbackCopy();
    return;
  }

  appState.dashboard = payload;
  appState.metadata = payload.meta;
  appState.analysis = payload;
  appState.filters.start = payload.meta.selected_start;
  appState.filters.end = payload.meta.selected_end;
  appState.filters.dayA = payload.comparison.day_a;
  appState.filters.dayB = payload.comparison.day_b;

  renderFilterPanel(payload);
  renderDynamicHeaders(payload);
  renderKpis(payload.summary);
  updateChartsWithData(payload);
  renderDropsTable(payload.drops);
  renderComparisonSection(payload);
  observeRevealElements();
}

function applyLang() {
  const copy = LANG[currentLang];

  document.documentElement.lang = currentLang;

  Object.entries(copy).forEach(([key, value]) => {
    if (typeof value !== "string") {
      return;
    }

    const element = document.getElementById(key);

    if (element) {
      element.innerHTML = value;
    }
  });

  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("chat-send");

  if (chatInput) {
    chatInput.placeholder = copy["chat-placeholder"];
  }

  if (sendButton) {
    sendButton.setAttribute("aria-label", copy["chat-send-label"]);
    sendButton.setAttribute("title", copy["chat-send-label"]);
  }

  renderInsights();
  renderSuggested();

  if (appState.dashboard) {
    renderDashboard(appState.dashboard);
  } else {
    renderDropsTable();
    renderComparisonFallbackCopy();
  }

  bindReportButtons();
  observeRevealElements();
  initCountUpAnimations();
}

function updateChartThemes() {
  const colors = getThemeColors();
  const timeseriesContext = charts.ts?.ctx;

  Object.values(charts).forEach((chart) => {
    if (!chart?.options?.scales) {
      return;
    }

    Object.values(chart.options.scales).forEach((scale) => {
      if (scale.grid) {
        scale.grid.color = colors.grid;
      }

      if (scale.ticks) {
        scale.ticks.color = colors.label;
      }
    });
  });

  if (charts.ts && timeseriesContext) {
    charts.ts.data.datasets[0].borderColor = colors.line;
    charts.ts.data.datasets[0].backgroundColor = createTimeseriesGradient(timeseriesContext, colors);
  }

  Object.values(charts).forEach((chart) => chart?.update());

  if (appState.dashboard) {
    updateChartsWithData(appState.dashboard);
    renderComparisonSection(appState.dashboard);
  }
}

function toggleLang() {
  currentLang = currentLang === "es" ? "en" : "es";
  applyLang();
}

function bindDashboardControls() {
  const startInput = document.getElementById("date-start-input");
  const endInput = document.getElementById("date-end-input");
  const quickFilters = document.getElementById("quick-filters");
  const compareDayA = document.getElementById("compare-day-a");
  const compareDayB = document.getElementById("compare-day-b");

  if (startInput && startInput.dataset.boundDashboard !== "true") {
    startInput.dataset.boundDashboard = "true";
    startInput.addEventListener("change", () => {
      if (!endInput) {
        return;
      }

      if (endInput.value && startInput.value > endInput.value) {
        endInput.value = startInput.value;
      }

      appState.filters.start = startInput.value;
      appState.filters.end = endInput.value;
      void refreshDashboard();
    });
  }

  if (endInput && endInput.dataset.boundDashboard !== "true") {
    endInput.dataset.boundDashboard = "true";
    endInput.addEventListener("change", () => {
      if (!startInput) {
        return;
      }

      if (startInput.value && endInput.value < startInput.value) {
        startInput.value = endInput.value;
      }

      appState.filters.start = startInput.value;
      appState.filters.end = endInput.value;
      void refreshDashboard();
    });
  }

  if (quickFilters && quickFilters.dataset.boundDashboard !== "true") {
    quickFilters.dataset.boundDashboard = "true";
    quickFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-quick-filter]");

      if (!button || !startInput || !endInput) {
        return;
      }

      startInput.value = button.dataset.start || startInput.value;
      endInput.value = button.dataset.end || endInput.value;
      appState.filters.start = startInput.value;
      appState.filters.end = endInput.value;
      void refreshDashboard();
    });
  }

  function bindComparisonSelect(select, which) {
    if (!select || select.dataset.boundDashboard === "true") {
      return;
    }

    select.dataset.boundDashboard = "true";
    select.addEventListener("change", () => {
      const otherSelect = which === "a" ? compareDayB : compareDayA;
      const availableDays = appState.dashboard?.comparison?.available_days || [];

      if (otherSelect && select.value === otherSelect.value && availableDays.length > 1) {
        otherSelect.value = availableDays.find((day) => day !== select.value) || otherSelect.value;
      }

      appState.filters.dayA = compareDayA?.value || appState.filters.dayA;
      appState.filters.dayB = compareDayB?.value || appState.filters.dayB;
      void refreshDashboard();
    });
  }

  bindComparisonSelect(compareDayA, "a");
  bindComparisonSelect(compareDayB, "b");
}

async function refreshDashboard() {
  const token = ++appState.requestToken;
  setDashboardPending(true);

  try {
    const payload = await fetchDashboardData({
      start: appState.filters.start,
      end: appState.filters.end,
      dayA: appState.filters.dayA,
      dayB: appState.filters.dayB,
    });

    if (token !== appState.requestToken) {
      return;
    }

    renderDashboard(payload);
  } catch (error) {
    const rangeSummary = document.getElementById("filters-range-summary");

    if (rangeSummary) {
      rangeSummary.textContent = t("filters-error");
    }
  } finally {
    if (token === appState.requestToken) {
      setDashboardPending(false);
    }
  }
}

function initApp() {
  const initNavigation = window.AvailNavigation?.initNavigation;
  const createChatbot = window.AvailChatbot?.createChatbot;

  if (typeof initNavigation !== "function" || typeof createChatbot !== "function") {
    return;
  }

  const { scrollToSection } = initNavigation({
    sectionIds: ["overview", "dashboard", "comparison", "insights", "assistant"],
    navLinkIds: ["nav-overview", "nav-dashboard", "nav-comparison", "nav-insights", "nav-chat"],
    onLanguageToggle: toggleLang,
    onThemeChange: updateChartThemes,
  });

  chatbot = createChatbot({
    getLanguage: () => currentLang,
    scrollToChatbot: () => scrollToSection("assistant"),
  });

  chatbot.init();
  buildCharts();
  bindDashboardControls();
  applyLang();
  bindReportButtons();
  observeRevealElements();
  initCountUpAnimations();
  void refreshDashboard();

  window.setTimeout(() => {
    chatbot?.addMessage("assistant", LANG[currentLang]["welcome-msg"]);
  }, 400);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
