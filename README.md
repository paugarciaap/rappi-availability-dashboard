# Rappi Web

Frontend de disponibilidad con asistente local conectado a Ollama.

## Requisitos

- Python 3.10 o superior
- Ollama instalado localmente
- Modelo `qwen2.5:3b`

## Instalación

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Ejecutar Ollama

Si aún no tienes el modelo:

```bash
ollama pull qwen2.5:3b
```

Luego inicia Ollama con:

```bash
ollama run qwen2.5:3b
```

## Ejecutar el backend

En otra terminal:

```bash
source .venv/bin/activate
python3 server.py
```

El backend quedará disponible en `http://127.0.0.1:8000`.

## Abrir la app

La forma recomendada es abrir:

```text
http://127.0.0.1:8000
```

También puedes abrir `index.html` directamente, pero el chat seguirá necesitando que `server.py` esté corriendo en `http://127.0.0.1:8000`.

## Estructura

```text
rappi-web/
  index.html
  css/
    styles.css
  js/
    app.js
    navigation.js
    chatbot.js
  assets/
  server.py
  requirements.txt
  README.md
```
