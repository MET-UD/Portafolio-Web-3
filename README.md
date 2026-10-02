# Didácticas en Entornos Virtuales

Portal web educativo institucional sobre innovación pedagógica, inteligencia artificial multimodal y didácticas contemporáneas en entornos virtuales.

---

## 🏛️ Descripción del Proyecto

Este portal web educativo de nivel superior e institucional ha sido concebido para presentar de manera rigurosa, contemporánea y visualmente sofisticada la taxonomía, las características operativas y los casos prácticos de las **Didácticas en entornos virtuales**.

El diseño reinterpreta las pautas de diagramación editorial tecnológica y jerarquía visual de alta fidelidad, manteniendo una estética limpia, académica y sobria (sin elementos de ciencia ficción excesiva ni estéticas "gamer"), con una paleta dominada por blanco, grises claros, azul marino profundo y acentos cian tecnológicos.

---

## 📐 Estructura del Portal
El portal conserva con fidelidad literal los tres títulos principales y su contenido académico de base, complementado con recursos interactivos y multimedia:

1. **HERO Principal y Cápsula Audiovisual**
   - Presentación conceptual de gran impacto con iluminación volumétrica.
   - **Cápsula Audiovisual Integrada**: Reproductor incrustado de YouTube Short (`https://youtube.com/shorts/TpIvHf6DKck`) optimizado para formato vertical 9:16, con fundamentación en los principios de microaprendizaje y el Diseño Universal para el Aprendizaje (DUA).

2. **Tipos de didácticas en entornos virtuales**
   - Introducción editorial sobre la mediación tecnológica y arquitecturas pedagógicas.
   - 4 vertientes didácticas desarrolladas:
     - `01.` Didáctica adaptativa y personalizada mediante Inteligencia Artificial Multimodal
     - `02.` Didáctica inmersiva y gamificada
     - `03.` Didáctica conversacional y metacognitiva orientada a LLMs y Chatbots
     - `04.` Didáctica inclusiva asíncrona basada en el Diseño Universal para el Aprendizaje (DUA/UDL)
   - Matriz comparativa responsive: *Tipo de Didáctica Virtual*, *Núcleo Tecnológico / Metodológico* y *Propósito Pedagógico Principal*.

2. **Características de los tipos de didácticas**
   - Bloques temáticos:
     - `2.1.` Atributos de la Didáctica Adaptativa por IA
     - `2.2.` Atributos de la Didáctica Inmersiva y Gamificada
     - `2.3.` Atributos de la Didáctica Conversacional-Metacognitiva
     - `2.4.` Atributos de la Didáctica Asíncrona basada en DUA
   - Unidades visuales de atributos (sensado atencional, biointeracción, telemetría háptica, andamiaje socrático, redes DUA, soberanía de datos).
   - **Bloque Especial Destacado**: *«El docente como arquitecto de experiencias de aprendizaje»* (transición a arquitecto, tutor metacognitivo y auditor ético).

3. **Ejemplos prácticos de los tipos de didácticas aplicados a jóvenes adultos**
   - Introducción sobre andragogía digital, autodirección, experiencia previa y autorregulación.
   - Los 4 casos prácticos con sus 3 componentes requeridos (*Público Objetivo y Contexto Virtual*, *Secuencia Didáctica y Herramientas Utilizadas* con navegador interactivo de pasos, e *Impacto Esperado en el Aprendizaje del Joven Adulto*):
     - `CASO 1:` Didáctica Adaptativa (Educación Superior)
     - `CASO 2:` Didáctica Inmersiva / Gamificada
     - `CASO 3:` Didáctica Conversacional / Metacognitiva
     - `CASO 4:` Didáctica DUA / Andragogía Asíncrona (con simulador de matriz multimodal interactiva)

4. **Laboratorio Interactivo de Flashcards y Juego de Memoria (60 Preguntas)**
   - Integra las 60 preguntas y respuestas de la base de conocimiento (MEEBAI, Werbach & Hunter, Kostoudis, Sánchez-Ronco, Roig-Vila, Poyatos Dorado, Pekrun, etc.).
   - **Modo Flashcards 3D**: Giro interactivo con tecla espacio o clic, clasificación "¡Lo Domino!" vs "Necesito Repasar", barajado y atajos de teclado.
   - **Modo Desafío de Memoria (Quiz)**: Selección de opciones aleatorizadas, retroalimentación instantánea, contador de aciertos y explicaciones académicas.
   - **Modo Explorador / Glosario**: Buscador en tiempo real por término, autor o concepto clave, con filtros por las 4 vertientes didácticas.
   - **Métricas de Progreso**: Porcentaje de dominio global, tarjetas dominadas y cola de repaso activa.

---

## 🚀 Despliegue en Vercel y Ejecución Local

### Requisitos previos
- Node.js 18+ o 20+
- npm o pnpm o bun

### Instalación local
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación de producción
npm run preview
```

### Despliegue en Vercel
1. Conecta el repositorio en [Vercel](https://vercel.com).
2. Configuración predeterminada detectada automáticamente:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Version**: 20.x o superior
3. Haz clic en **Deploy**.

---

## ♿ Accesibilidad (WCAG 2.2 AAA y DUA)
- Tipografía jerárquica con escala optimizada (`Plus Jakarta Sans` y `Fraunces`).
- Modal interactivo de accesibilidad: selector de tamaño de texto (100%, 115%, 125%), modo alto contraste y compatibilidad con `prefers-reduced-motion`.
- Navegación por teclado completa con anillos de foco visibles (`focus-visible`).
- Etiquetas semánticas y atributos ARIA en todos los controles interactivos.
