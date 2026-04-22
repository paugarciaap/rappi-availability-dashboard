## 🚀 Cómo ejecutar el proyecto

Para correr la aplicación correctamente, sigue estos pasos:

---

## 1. Requisitos

Asegúrate de tener instalado:

- Python 3  
- pip  
- Ollama  

Puedes verificar Python con:

python3 --version  

---

## 2. Clonar el repositorio

git clone TU_REPO  
cd TU_REPO  

---

## 3. Instalar dependencias

python3 -m pip install -r requirements.txt  

---

## 4. Ejecutar el modelo de IA (Ollama)

En una terminal aparte, ejecuta:

ollama run qwen2.5:3b  

⚠️ Este paso es obligatorio para que funcione el chatbot.

---

## 5. Levantar el backend

En otra terminal:

python3 server.py  

Deberías ver algo como:

Running on http://127.0.0.1:8000  

---

## 6. Abrir la aplicación

Abre tu navegador y entra a:

http://127.0.0.1:8000  

---

## 7. Verificar funcionamiento

Una vez dentro de la app puedes:

- navegar entre Dashboard, Comparación e Insights  
- interactuar con las gráficas  
- usar filtros de fechas  
- probar el chatbot con preguntas operativas  

---

## Posibles problemas

### El chatbot no responde

Asegúrate de que Ollama esté corriendo:

ollama run qwen2.5:3b  

---

### La app no carga

Verifica que el backend esté activo:

python3 server.py  

---

### No se ven gráficos

- revisa la consola del navegador  
- revisa errores en la terminal del backend  

---

# Avail Intelligence  
### Dashboard con IA para entender la disponibilidad y la salud del marketplace

Avail Intelligence es una aplicación web interactiva diseñada para analizar la disponibilidad de tiendas y traducir datos operativos en insights claros y accionables.

La solución combina:
- un dashboard visual para análisis operativo,
- un asistente con IA local para exploración en lenguaje natural,
- y una experiencia de producto pensada más allá de un proyecto académico tradicional.

---

## 1. Problema

En un marketplace como Rappi, la disponibilidad no es solo un dato técnico.  
Es un indicador directo de la salud del sistema.

Cuando la disponibilidad cae:
- los usuarios ven menos opciones,
- los comercios pierden visibilidad e ingresos,
- y la operación se desbalancea.

El problema real no es tener datos, sino **interpretarlos correctamente y rápido**.

---

## 2. Contexto del marketplace

Rappi funciona como un sistema de tres actores:

- **Oferta:** tiendas / comercios  
- **Demanda:** usuarios  
- **Ejecución:** repartidores  

La disponibilidad conecta todo el sistema.

👉 Este proyecto no trata solo de gráficas,  
trata de entender el equilibrio del marketplace.

---

## 3. Objetivo del proyecto

Construir una herramienta que:

- convierta datos en señales operativas claras,
- permita identificar patrones y riesgos,
- facilite la exploración mediante visualización,
- e incorpore IA para reducir la fricción en el análisis.

---

## 4. Funcionalidades principales

### Dashboard
- KPIs de disponibilidad
- Serie temporal completa
- Distribución por hora
- Rendimiento por día de la semana
- Detección de caídas críticas

### Comparación
- Comparación entre días específicos
- Misma escala visual para análisis real
- Permite detectar diferencias rápidamente

### Insights
- Resumen de patrones relevantes
- Enfoque en interpretación, no solo datos

### Asistente con IA
- Modelo local con Ollama
- Preguntas en lenguaje natural
- Respuestas basadas en el análisis
- Diseñado para apoyar decisiones, no solo responder

### Extras de producto
- Modo claro / oscuro
- Español / Inglés
- Descarga de informe
- UI inspirada en producto real

---

## 5. Tecnologías utilizadas

### Frontend
- HTML  
- CSS  
- JavaScript  

### Backend
- Python  
- Flask  

### Visualización
- Plotly  

### Inteligencia Artificial
- Ollama  
- Modelo local `qwen2.5:3b`

---

## 6. Arquitectura

Arquitectura ligera separando responsabilidades:

```text
Usuario
  ↓
Frontend (HTML / CSS / JS)
  ↓
Backend (Flask)
  ↓
Procesamiento de datos + contexto
  ↓
Modelo local (Ollama)

## 7. Flujo del sistema

### Dashboard

Datos de disponibilidad  
↓  
Procesamiento en backend  
↓  
Agregación  
↓  
Visualización en frontend  

### Asistente

Pregunta del usuario  
↓  
Backend recibe input  
↓  
Se inyecta contexto del análisis  
↓  
Ollama genera respuesta  
↓  
Se muestra en el frontend  

👉 El asistente no responde en vacío, responde con contexto.

---

## 8. Uso de IA

La IA se utilizó en dos niveles:

### 1. Durante el desarrollo

- Aceleración de implementación  
- Exploración de UI  
- Refactorización  

Pero las decisiones de arquitectura y producto fueron intencionales.

### 2. Dentro del producto

El asistente permite:

- interpretar datos  
- responder preguntas operativas  
- facilitar el análisis sin necesidad técnica  

### ¿Por qué IA local?

Se eligió un modelo local porque:

- no depende de APIs pagas  
- es reproducible  
- funciona en entorno local  
- es ideal para una demo técnica  

---

## 9. Decisiones técnicas clave

### Separación frontend/backend

Permite:

- mayor claridad  
- mejor mantenimiento  
- arquitectura más realista  

### App web en lugar de herramienta rígida

Se priorizó:

- experiencia de usuario  
- control visual  
- sensación de producto real  

### IA con contexto

El asistente está conectado al análisis.  

👉 Sin contexto, la IA no aporta valor real.

### Enfoque en interpretación

No se buscó hacer queries complejas, sino entender el comportamiento del sistema.

---

## 10. Estructura del proyecto

project/  
├── index.html  
├── server.py  
├── requirements.txt  
├── README.md  
├── assets/  
├── css/  
│   └── styles.css  
└── js/  
    ├── app.js  
    ├── navigation.js  
    └── chatbot.js  

---

## 11. Instalación

### Requisitos

- Python 3  
- pip  
- Ollama  

### Paso 1: clonar repositorio

git clone TU_REPO  
cd TU_REPO  

### Paso 2: instalar dependencias

python3 -m pip install -r requirements.txt  

### Paso 3: correr modelo de IA

ollama run qwen2.5:3b  

### Paso 4: levantar backend

python3 server.py  

### Paso 5: abrir la aplicación

http://127.0.0.1:8000  

---

## 12. Variables de entorno

OLLAMA_MODEL=qwen2.5:3b  
FLASK_PORT=8000  

---

## 13. Cómo usar la aplicación

### Dashboard

- visualizar comportamiento general  
- identificar picos de disponibilidad  
- detectar horas débiles  

### Comparación

- comparar comportamiento entre días  
- detectar diferencias operativas  
- analizar patrones  

### Asistente

Ejemplos de preguntas:

- ¿Cuál es la hora más fuerte?  
- ¿Cuál es la más débil?  
- ¿Dónde hay riesgo operativo?  

---

## 14. Diseño

Se buscó que la aplicación:

- se sintiera como un producto real  
- tuviera jerarquía visual clara  
- fuera fácil de entender  

👉 No se priorizó la cantidad de gráficos, sino la claridad.

---

## 15. Diferenciales del proyecto

Este proyecto va más allá de lo básico porque:

- no solo visualiza datos  
- interpreta comportamiento  
- permite exploración dinámica  
- integra IA útil  
- tiene enfoque de producto  

---

## 16. Limitaciones

- la IA no es un motor analítico completo  
- no hay datos en tiempo real  
- no está desplegado en producción  

---

## 17. Mejoras futuras

- integración con datos en tiempo real  
- sistema de alertas automáticas  
- mejor integración del asistente con el dataset  
- análisis más granular  

---

## 18. Troubleshooting

### La IA no responde

Ejecuta:  
ollama run qwen2.5:3b  

### El backend no funciona

Ejecuta:  
python3 server.py  

### No cargan gráficos

- revisar consola del navegador  
- revisar logs de Flask  

---

## 19. Conclusión

Este proyecto no busca solo mostrar datos.

Busca responder una pregunta clave:

¿Qué tan saludable es la operación del marketplace?

Y la respuesta está en la disponibilidad.
