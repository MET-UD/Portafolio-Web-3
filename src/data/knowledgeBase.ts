import { DidacticType, ComparisonRow, AttributeCategory, PracticalCase } from '../types';

import heroImg from '../assets/images/hero_virtual_didactics_1790900818093.jpg';
import teacherImg from '../assets/images/teacher_learning_architect_1790900828184.jpg';
import case1Img from '../assets/images/case_adaptive_learning_1790900837924.jpg';
import case2Img from '../assets/images/case_immersive_vr_1790900847268.jpg';
import case3Img from '../assets/images/case_conversational_llm_1790900857082.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  teacher: teacherImg,
  case1: case1Img,
  case2: case2Img,
  case3: case3Img,
};

export const SITE_METADATA = {
  title: 'Didácticas en entornos virtuales',
  institutionCategory: 'Portal Académico de Innovación Pedagógica',
  publicationYear: '2026',
  editorialTagline: 'Arquitectura pedagógica, mediación tecnológica y convergencia andragógica contemporánea',
};

// SECTION 1: "Tipos de didácticas en entornos virtuales"
export const SECTION_1_DATA = {
  title: 'Tipos de didácticas en entornos virtuales',
  introduction:
    'La transformación de los entornos virtuales de aprendizaje exige trascender la mera digitalización de contenidos analógicos. En la contemporaneidad educativa, la mediación tecnológica se fundamenta en arquitecturas pedagógicas rigurosas donde convergen la inteligencia artificial multimodal, los entornos inmersivos tridimensionales, la dialéctica socrática de los modelos de lenguaje a gran escala (LLMs) y los principios de accesibilidad universal. Esta taxonomía clasifica las cuatro grandes vertientes didácticas que redefinen la interacción entre el aprendiz, el conocimiento y el mediador pedagógico.',
  modules: [
    {
      id: 'didactica-adaptativa',
      number: '01',
      name: 'Didáctica adaptativa y personalizada mediante Inteligencia Artificial Multimodal',
      subtitle: 'Sistemas tutores inteligentes y personalización basada en datos',
      description:
        'Modelo pedagógico centrado en la calibración dinámica del proceso instructivo en tiempo real. Mediante la captación y análisis computacional de variables biométricas, atencionales, patrones de navegación y desempeño cognoscitivo, el sistema reconfigura el grado de dificultad, el formato de representación y el ritmo formativo en función de la zona de desarrollo próximo del estudiante.',
      technologies: [
        'Algoritmos de aprendizaje profundo (Deep Learning)',
        'Modelos de grafo de conocimiento ontológico',
        'Analítica de aprendizaje predictiva y multimodal',
        'Motores de recomendación curricular dinámica',
      ],
      pedagogicalPurpose:
        'Maximizar la eficiencia del aprendizaje, mitigar la fatiga cognitiva y erradicar la frustración formativa adaptando la ruta instruccional a los ritmos y estilos neurocognitivos individuales.',
      iconName: 'Cpu',
      colorGradient: 'from-blue-600 to-cyan-500',
    },
    {
      id: 'didactica-inmersiva',
      number: '02',
      name: 'Didáctica inmersiva y gamificada',
      subtitle: 'Realidad extendida, simulación de alto realismo y dinámicas lúdicas',
      description:
        'Enfoque formativo que sitúa al estudiante en entornos tridimensionales interactivos o escenarios aumentados donde el error constituye un insumo pedagógico de riesgo cero. Articula mecánicas de ludificación intrínseca (narrativa, resolución de retos, retroalimentación inmediata y progresión por competencias) para propiciar la vivencia práctica y el aprendizaje situado en contextos de alta fidelidad.',
      technologies: [
        'Realidad Virtual (VR) y Realidad Aumentada (AR)',
        'Motores espaciales 3D y telepresencia háptica',
        'Mecánicas de gamificación intrínseca y telemetría de juego',
        'Simuladores de gemelos digitales y escenarios de riesgo cero',
      ],
      pedagogicalPurpose:
        'Desarrollar competencias procedimentales complejas, toma de decisiones en entornos críticos y transferencia experiencial sin riesgos físicos o materiales.',
      iconName: 'Boxes',
      colorGradient: 'from-sky-700 to-indigo-600',
    },
    {
      id: 'didactica-conversacional',
      number: '03',
      name: 'Didáctica conversacional y metacognitiva orientada a LLMs y Chatbots',
      subtitle: 'Diálogo socrático automatizado y andamiaje dialéctico continuo',
      description:
        'Vertiente basada en la mediación dialógica personalizada impulsada por modelos de lenguaje generativo pre-entrenados y configurados bajo pedagogía interrogativa. En lugar de ofrecer resoluciones directas, el agente conversacional formula contrapreguntas, desafía premisas, proporciona pistas escalonadas y estimula la toma de consciencia sobre los propios procesos de razonamiento.',
      technologies: [
        'Modelos fundacionales de lenguaje (LLMs) ajustados por instrucción pedagógica',
        'Sistemas RAG (Retrieval-Augmented Generation) sobre corpus académicos auditados',
        'Interfaces dialógicas multimodales (texto, voz, diagramas)',
        'Prompts de andamiaje socrático estructurado',
      ],
      pedagogicalPurpose:
        'Estimular el pensamiento crítico, la autorreflexión epistémica, la metacognición y la capacidad dialéctica del aprendiz mediante interrogación sistemática.',
      iconName: 'MessageSquareCode',
      colorGradient: 'from-cyan-600 to-teal-600',
    },
    {
      id: 'didactica-inclusiva-dua',
      number: '04',
      name: 'Didáctica inclusiva asíncrona basada en el Diseño Universal para el Aprendizaje (DUA/UDL)',
      subtitle: 'Flexibilidad curricular, equidad cognitiva y multiformato accesible',
      description:
        'Enfoque fundamentado en la neurociencia del aprendizaje que asume la variabilidad humana como la norma educativa y no como una anomalía. Estructura el currículo virtual proporcionando múltiples formas de representación (percepción y decodificación), múltiples formas de acción y expresión (evidencias de desempeño) y múltiples formas de implicación afectiva (motivación y perseverancia).',
      technologies: [
        'Contenidos multimodales enriquecidos (texto estructurado, audio sintético, infografías, subtítulos automáticos)',
        'Sistemas LMS accesibles bajo estándares WCAG 2.2 AAA',
        'Tecnologías de apoyo integradas y lectores de pantalla',
        'Formatos modulares de microaprendizaje asíncrono',
      ],
      pedagogicalPurpose:
        'Garantizar la equidad de acceso epistemológico, derribar barreras contextuales y empoderar a estudiantes con perfiles neurodiversos y limitaciones espaciotemporales.',
      iconName: 'Layers',
      colorGradient: 'from-slate-700 to-blue-800',
    },
  ] as DidacticType[],
  comparisonTable: [
    {
      didacticType: 'Didáctica adaptativa por IA Multimodal',
      techCore: 'Redes neuronales profundas, análisis de latencias e interacciones, grafos ontológicos y recomendación algorítmica.',
      pedagogicalPurpose: 'Ajuste en tiempo real de dificultad, formato y ritmo cognitivo según la zona de desarrollo próximo del estudiante.',
      targetFocus: 'Personalización neurocognitiva y optimización de carga mental.',
    },
    {
      didacticType: 'Didáctica inmersiva y gamificada',
      techCore: 'Realidad Virtual (VR), Realidad Mixta (XR), simuladores de física avanzada y motores de narrativa interactiva.',
      pedagogicalPurpose: 'Aprendizaje experiencial situado, desarrollo de destrezas críticas y experimentación segura mediante el ensayo-error.',
      targetFocus: 'Transferencia procedimental y motivación intrínseca.',
    },
    {
      didacticType: 'Didáctica conversacional y metacognitiva',
      techCore: 'LLMs contextualizados mediante RAG pedagógico, agentes socráticos autónomos y reconocimiento del habla en lenguaje natural.',
      pedagogicalPurpose: 'Cuestionamiento reflexivo continuo, desmantelamiento de sesgos cognitivos y estimulación de la metacognición.',
      targetFocus: 'Pensamiento crítico y autorregulación epistémica.',
    },
    {
      didacticType: 'Didáctica inclusiva asíncrona (DUA)',
      techCore: 'Plataformas compatibles con WCAG AAA, transcripción automática multimodal, microcápsulas de aprendizaje e interfaces asistivas.',
      pedagogicalPurpose: 'Supresión de barreras de acceso sensorial y cognitivo, respetando la autonomía temporal y la neurodiversidad.',
      targetFocus: 'Equidad educativa, accesibilidad universal y autorregulación del tiempo.',
    },
  ] as ComparisonRow[],
};

// SECTION 2: "Características de los tipos de didácticas"
export const SECTION_2_DATA = {
  title: 'Características de los tipos de didácticas',
  introduction:
    'Cada vertiente pedagógica en el entorno virtual posee un conjunto específico de atributos funcionales y principios de diseño instruccional. Comprender estas características permite articular arquitecturas formativas rigurosas, donde la tecnología sirve a la cognición y no al revés.',
  categories: [
    {
      id: 'atributos-adaptativa',
      code: '2.1',
      title: 'Atributos de la Didáctica Adaptativa por IA',
      description:
        'Sistemas caracterizados por el sensado continuo de interacción, modelado cognitivo y orquestación algorítmica de itinerarios formativos.',
      attributes: [
        {
          id: 'attr-1',
          title: 'Estimación atencional multimodal',
          description:
            'Captación correlacionada de microinteracciones del usuario: velocidad de desplazamiento, tiempos de fijación en conceptos clave, pausas en recursos audiovisuales y latencia en respuestas analíticas.',
          iconName: 'Eye',
          academicKey: 'Bio-interacción',
        },
        {
          id: 'attr-2',
          title: 'Monitoreo atencional y emocional en tiempo real',
          description:
            'Detección probabilística de estados de sobrecarga cognitiva, fatiga o frustración mediante análisis conductual no invasivo para recalibrar la cadencia instruccional.',
          iconName: 'Activity',
          academicKey: 'Carga Cognitiva',
        },
        {
          id: 'attr-3',
          title: 'Recomendación automatizada de actividades',
          description:
            'Bifurcación dinámica de rutas de aprendizaje: si el aprendiz demuestra dominio prematuro se activan desafíos de profundización; si detecta lagunas conceptuales, introduce andamiajes de refuerzo inmediato.',
          iconName: 'GitBranch',
          academicKey: 'Grafo Curricular',
        },
        {
          id: 'attr-4',
          title: 'Privacidad de datos y soberanía del estudiante',
          description:
            'Principio irrenunciable de gobernanza: anonimización de telemetría de interacción, explicabilidad algorítmica para el docente y resguardo estricto del perfil cognoscitivo del aprendiz.',
          iconName: 'ShieldCheck',
          academicKey: 'Ética de Datos',
        },
      ],
    },
    {
      id: 'atributos-inmersiva',
      code: '2.2',
      title: 'Atributos de la Didáctica Inmersiva y Gamificada',
      description:
        'Entornos que sustituyen la pasividad observacional por la acción corporeizada, la interactividad sensorial y el compromiso lúdico.',
      attributes: [
        {
          id: 'attr-5',
          title: 'Espacios tridimensionales y realidad extendida',
          description:
            'Recreación de contextos de alta fidelidad ecológica (quirófanos, plantas químicas, yacimientos arqueológicos, laboratorios de física cuántica) accesibles sin restricciones geográficas.',
          iconName: 'Maximize2',
          academicKey: 'Presencia Espacial',
        },
        {
          id: 'attr-6',
          title: 'Mecánicas lúdicas intrínsecas',
          description:
            'Integración de narrativas inmersivas, retos escalonados con resolución heurística y retroalimentación inmediata, superando la gamificación superficial basada en simples insignias.',
          iconName: 'Gamepad2',
          academicKey: 'Flujo de Desafío',
        },
        {
          id: 'attr-7',
          title: 'Simulación de riesgo cero y validación empírica',
          description:
            'Permite la manipulación de variables complejas o peligrosas donde el fallo opera como catalizador de aprendizaje reflexivo, sin consecuencias físicas o económicas reales.',
          iconName: 'AlertTriangle',
          academicKey: 'Pedagogía del Error',
        },
        {
          id: 'attr-8',
          title: 'Corporeización digital y co-presencia',
          description:
            'Uso de representaciones avatáricas que facilitan la interacción social sincrónica, la proxémica virtual y la colaboración distribuida en equipos interdisciplinarios.',
          iconName: 'Users',
          academicKey: 'Presencia Social',
        },
      ],
    },
    {
      id: 'atributos-conversacional',
      code: '2.3',
      title: 'Atributos de la Didáctica Conversacional-Metacognitiva',
      description:
        'Práctica mediada por agentes artificiales configurados para cuestionar, provocar la introspección y sostener el rigor epistémico del diálogo.',
      attributes: [
        {
          id: 'attr-9',
          title: 'Diálogo socrático automatizado',
          description:
            'Interrogación guiada que induce al estudiante a explicitar sus modelos mentales, identificar contradicciones lógicas y construir justificaciones epistemológicamente sólidas.',
          iconName: 'MessageCircle',
          academicKey: 'Método Eléctico',
        },
        {
          id: 'attr-10',
          title: 'Estimulación metacognitiva continua',
          description:
            'Incentivo deliberado para que el aprendiz reflexione sobre su propio proceso: "¿Cómo llegaste a esa conclusión?", "¿Qué otra alternativa descartaste y por qué razón?".',
          iconName: 'BrainCircuit',
          academicKey: 'Autorreflexión',
        },
        {
          id: 'attr-11',
          title: 'Andamiaje dialéctico sin atajos cognitivos',
          description:
            'Configuración restrictiva del modelo de lenguaje que prohíbe entregar respuestas unívocas resueltas; el agente desglosa la complejidad en microdesafíos sucesivos.',
          iconName: 'Workflow',
          academicKey: 'Andamiaje Restringido',
        },
        {
          id: 'attr-12',
          title: 'Retroalimentación formativa inmediata y matizada',
          description:
            'Evaluación cualitativa al instante del texto o discurso del estudiante, detectando falacias argumentativas, vacíos conceptuales o hipótesis prometedoras.',
          iconName: 'Sparkles',
          academicKey: 'Feedback Cualitativo',
        },
      ],
    },
    {
      id: 'atributos-asincrona-dua',
      code: '2.4',
      title: 'Atributos de la Didáctica Asíncrona basada en DUA',
      description:
        'Garantía de flexibilidad radical para derribar barreras cognitivas, lingüísticas, físicas y contextuales en el aprendizaje no sincrónico.',
      attributes: [
        {
          id: 'attr-13',
          title: 'Múltiples formas de representación',
          description:
            'El contenido curricular se ofrece simultáneamente en texto jerarquizado, audio narrado profesionalmente, esquemas conceptuales interactivos y transcripciones indexadas.',
          iconName: 'FileText',
          academicKey: 'Red de Reconocimiento',
        },
        {
          id: 'attr-14',
          title: 'Múltiples formas de acción y expresión',
          description:
            'El estudiante demuestra la adquisición de competencias a través de diversos artefactos: ensayos escritos, podcasts explicativos, mapas conceptuales o proyectos aplicados.',
          iconName: 'PencilRuler',
          academicKey: 'Red Estratégica',
        },
        {
          id: 'attr-15',
          title: 'Múltiples formas de implicación afectiva',
          description:
            'Oferta de opciones de aprendizaje situadas en contextos de interés profesional directo, con márgenes amplios de autonomía y autorregulación del ritmo temporal.',
          iconName: 'HeartHandshake',
          academicKey: 'Red Afectiva',
        },
        {
          id: 'attr-16',
          title: 'Microaprendizaje modular y diseño asíncrono',
          description:
            'Descomposición de las unidades curriculares en cápsulas autocontenidas de 8 a 15 minutos, facilitando la asimilación cognitiva en horarios heterogéneos.',
          iconName: 'Clock',
          academicKey: 'Modularidad',
        },
      ],
    },
  ] as AttributeCategory[],

  // SPECIAL FEATURE BLOCK
  teacherRole: {
    badge: 'Transformación del Rol Docente',
    title: 'El docente como arquitecto de experiencias de aprendizaje',
    lead: 'En los ecosistemas digitales mediados por IA y entornos virtuales, el docente transita de ser un mero emisor y transmisor unidireccional de contenidos a desempeñarse como un diseñador estratégico del aprendizaje.',
    pillars: [
      {
        role: 'Arquitecto de experiencias de aprendizaje',
        description:
          'Diseña la ecología formativa, selecciona las matrices tecnológicas, articula los itinerarios pedagógicos y orquesta los momentos sincrónicos y asíncronos para garantizar un compromiso epistémico genuino.',
        iconName: 'Compass',
      },
      {
        role: 'Tutor metacognitivo',
        description:
          'Acompaña al estudiante en la reflexión sobre sus estrategias de aprendizaje, la gestión de la frustración, la regulación del tiempo y el desarrollo del juicio crítico que ningún algoritmo puede conferir.',
        iconName: 'Lightbulb',
      },
      {
        role: 'Auditor algorítmico y ético',
        description:
          'Supervisa la pertinencia de las respuestas generadas por los LLMs, audita posibles sesgos en los sistemas adaptativos y custodia la privacidad de los datos y la dignidad de sus alumnos.',
        iconName: 'ShieldAlert',
      },
    ],
  },
};

// SECTION 3: "Ejemplos prácticos de los tipos de didácticas aplicados a jóvenes adultos"
export const SECTION_3_DATA = {
  title: 'Ejemplos prácticos de los tipos de didácticas aplicados a jóvenes adultos',
  andragogyIntro: {
    title: 'Fundamentos de la Andragogía Digital para Jóvenes Adultos',
    description:
      'El diseño didáctico para jóvenes adultos (estudiantes universitarios, posgraduados y profesionales en formación continua) responde a premisas psicológicas y pedagógicas sustancialmente distintas a la pedagogía escolar infantil. En la andragogía digital, el estudiante requiere autodirección, relevancia contextual inmediata y la integración activa de su experiencia previa en la resolución de problemas reales.',
    principles: [
      {
        label: 'Autodirección y autonomía',
        detail: 'Capacidad y necesidad de gestionar los tiempos, rutas y profundidades formativas sin dependencia tutelar coercitiva.',
      },
      {
        label: 'Aplicabilidad inmediata',
        detail: 'Foco en la transferencia de aprendizajes a desafíos profesionales, comunitarios y laborales auténticos.',
      },
      {
        label: 'Experiencia previa como recurso',
        detail: 'El bagaje vivencial y técnico del adulto constituye el anclaje fundamental para la asimilación de nuevos constructos.',
      },
      {
        label: 'Autorregulación y juicio crítico',
        detail: 'Habilidad para interrogar la información, evaluar fuentes algorítmicas y mantener la disciplina metacognitiva.',
      },
    ],
  },
  cases: [
    {
      id: 'caso-1',
      caseNumber: 'CASO 1',
      title: 'Didáctica Adaptativa (Educación Superior)',
      subtitle: 'Simulación de Diagnóstico Clínico en Medicina y Bioestadística',
      imageSrc: case1Img,
      theme: 'ai-data',
      targetAudience: {
        title: 'Público Objetivo y Contexto Virtual',
        description:
          'Estudiantes de 4.° año de Medicina matriculados en la asignatura troncal de Farmacología Clínica y Bioestadística Médica, cursada en modalidad híbrida con campus virtual asistido por IA.',
        context:
          'Entorno virtual de aprendizaje con plataforma adaptativa integrada que evalúa decisiones de prescripción farmacológica y cálculo de dosificación en pacientes con comorbilidades.',
      },
      didacticSequence: {
        title: 'Secuencia Didáctica y Herramientas Utilizadas',
        description:
          'El itinerario combina evaluación diagnóstica algorítmica, resolución de historiales clínicos sintéticos y andamiaje adaptativo en tiempo real:',
        tools: [
          'Plataforma LMS adaptativa con grafo de conocimiento ontológico (Knowledge Tracing)',
          'Algoritmo de estimación de latencia de respuesta e incertidumbre diagnóstica',
          'Motor de recomendación de micro-módulos farmacocinéticos',
          'Dashboard de telemetría de toma de decisiones clínicas',
        ],
        steps: [
          {
            step: 1,
            phase: 'Fase Diagnóstica',
            action: 'Presentación de un caso de insuficiencia renal aguda; el sistema mide el tiempo de respuesta y la precisión en la lectura de biomarcadores.',
          },
          {
            step: 2,
            phase: 'Bifurcación Adaptativa',
            action: 'Si el estudiante yerra en el aclaramiento de creatinina, la plataforma desacelera la dificultad e inyecta un módulo interactivo de farmacocinética renal antes de continuar.',
          },
          {
            step: 3,
            phase: 'Nivelación y Reto',
            action: 'Si el estudiante demuestra maestría, el sistema introduce complicaciones hemodinámicas imprevistas para poner a prueba el razonamiento de segundo orden.',
          },
        ],
      },
      expectedImpact: {
        title: 'Impacto Esperado en el Aprendizaje del Joven Adulto',
        description:
          'Optimización demostrable de la competencia clínica diagnóstica sin saturación cognitiva. El estudiante experimenta un ritmo formativo proporcional a su dominio real, erradicando el desánimo por repetición superflua y consolidando la seguridad epistémica en la toma de decisiones terapéuticas.',
        indicators: [
          'Reducción de un 38% en la tasa de error de cálculo farmacológico',
          'Disminución del abandono de la unidad técnica en un 42%',
          'Percepción de alta relevancia andragógica y respeto a su ritmo de estudio',
        ],
      },
    },
    {
      id: 'caso-2',
      caseNumber: 'CASO 2',
      title: 'Didáctica Inmersiva / Gamificada',
      subtitle: 'Entrenamiento de Seguridad y Gestión de Crisis en Ingeniería Industrial',
      imageSrc: case2Img,
      theme: 'vr-immersive',
      targetAudience: {
        title: 'Público Objetivo y Contexto Virtual',
        description:
          'Jóvenes adultos cursando último semestre de Ingeniería Industrial y programas de especialización en Higiene, Seguridad Ocupacional y Manejo de Catástrofes Industriales.',
        context:
          'Laboratorio inmersivo virtual en el que los estudiantes se conectan mediante visores VR o clientes WebGL 3D desde sus terminales para intervenir una planta petroquímica virtualizada en contingencia.',
      },
      didacticSequence: {
        title: 'Secuencia Didáctica y Herramientas Utilizadas',
        description:
          'Misión gamificada por escuadras distribuidas con bucle de acción, consecuencias fisiomecánicas y retroalimentación analítica:',
        tools: [
          'Motor espacial 3D inmersivo con física de fluidos y gases en tiempo real',
          'Dispositivos VR / Interfaces espaciales WebGL con audio espacializado',
          'Mecánicas gamificadas de misiones con cuenta regresiva y recursos críticos finitos',
          'Sistema de grabación y reproducción retrospectiva ("Black Box debriefing")',
        ],
        steps: [
          {
            step: 1,
            phase: 'Inmersión y Misión',
            action: 'Los aprendices asumen roles de jefe de planta, técnico de válvulas e ingeniero de comunicaciones ante una fuga de gas inflamable simulada.',
          },
          {
            step: 2,
            phase: 'Gestión Bajo Presión',
            action: 'Manipulan instrumental crítico respetando protocolos de seguridad; cada mala decisión incrementa la presión en el gemelo digital en tiempo real.',
          },
          {
            step: 3,
            phase: 'Debriefing Retrospectivo',
            action: 'Sesión guiada por el docente donde el equipo reproduce la secuencia temporal en 3D para auditar la cadena de decisiones y la efectividad comunicacional.',
          },
        ],
      },
      expectedImpact: {
        title: 'Impacto Esperado en el Aprendizaje del Joven Adulto',
        description:
          'Adquisición de reflejos procedimentales y templanza emocional en contextos de crisis sin comprometer la integridad humana ni activos industriales. Estimula el liderazgo distribuido, la comunicación asertiva bajo estrés y la interiorización no memorística de la normativa internacional de seguridad.',
        indicators: [
          'Incremento del 92% en retención procedimental frente a manuales convencionales',
          'Cero incidentes de riesgo y reducción drástica de tiempos de evacuación técnica',
          'Consolidación de destrezas de trabajo colaborativo en entornos virtuales distribuidos',
        ],
      },
    },
    {
      id: 'caso-3',
      caseNumber: 'CASO 3',
      title: 'Didáctica Conversacional / Metacognitiva',
      subtitle: 'Seminario Jurídico de Argumentación y Litigación Internacional',
      imageSrc: case3Img,
      theme: 'llm-dialogue',
      targetAudience: {
        title: 'Público Objetivo y Contexto Virtual',
        description:
          'Estudiantes de Derecho y Posgrado en Relaciones Internacionales en curso virtual sobre Derecho Internacional de los Derechos Humanos y Litigación Constitucional.',
        context:
          'Taller virtual de debate dialéctico en el que cada estudiante dispone de un tutor LLM especializado en técnica socrática, calibrado con un repositorio cerrado de jurisprudencia internacional.',
      },
      didacticSequence: {
        title: 'Secuencia Didáctica y Herramientas Utilizadas',
        description:
          'Estructura de interpelación dialéctica progresiva que desafía el sesgo de confirmación y promueve la construcción argumentativa robusta:',
        tools: [
          'Agente conversacional LLM parametrizado con role-play de magistrado crítico',
          'Base vectorial RAG con sentencias de la Corte Interamericana y Tribunal Europeo',
          'Módulo de análisis semántico de falacias lógicas formales e informales',
          'Bitácora metacognitiva de evolución del pensamiento argumental',
        ],
        steps: [
          {
            step: 1,
            phase: 'Tesis Inicial',
            action: 'El estudiante redacta y somete una postura jurídica sobre los límites de la libertad de expresión frente al discurso de odio en redes digitales.',
          },
          {
            step: 2,
            phase: 'Interpelación Socrática',
            action: 'El agente LLM no juzga la postura como correcta o errónea, sino que formula una hipótesis extrema y un contraejemplo jurisprudencial que pone en jaque la coherencia del argumento.',
          },
          {
            step: 3,
            phase: 'Reconstrucción Metacognitiva',
            action: 'El estudiante debe rearticular su teoría jurídica justificando premisas y reconociendo excepciones; al cierre, completa una reflexión sobre qué supuestos debió modificar.',
          },
        ],
      },
      expectedImpact: {
        title: 'Impacto Esperado en el Aprendizaje del Joven Adulto',
        description:
          'Elevación sustantiva del pensamiento analítico, desapego emocional frente a dogmas preconcebidos y perfeccionamiento de la oratoria y dialéctica jurídica. El joven adulto cultiva la autorregulación epistémica, aprendiendo a identificar debilidades en su propio razonamiento antes de emitir alegatos públicos.',
        indicators: [
          'Aumento del 47% en la detección autónoma de falacias argumentativas',
          'Ensayos jurídicos con un 65% mayor profundidad en el contraste de fuentes',
          'Autoevaluación continua de la solidez argumental como hábito profesional permanente',
        ],
      },
    },
    {
      id: 'caso-4',
      caseNumber: 'CASO 4',
      title: 'Didáctica DUA / Andragogía Asíncrona',
      subtitle: 'Programa Virtual de Finanzas Corporativas y Gestión Empresarial',
      imageSrc: '', // Represented with interactive accessible multimodal matrix
      theme: 'dua-accessible',
      targetAudience: {
        title: 'Público Objetivo y Contexto Virtual',
        description:
          'Jóvenes adultos trabajadores, emprendedores y estudiantes de posgrado con horarios heterogéneos, responsabilidades laborales y perfiles neurodiversos (incluyendo TDAH y dislexia).',
        context:
          'Aula virtual asíncrona estructurada estrictamente bajo las pautas DUA 3.0, con diseño responsivo, sincronización multidispositivo y opciones de consumo de contenido en modalidades diversificadas.',
      },
      didacticSequence: {
        title: 'Secuencia Didáctica y Herramientas Utilizadas',
        description:
          'Arquitectura pedagógica multiruta que concede pleno control sobre la representación del contenido, la ejecución práctica y el ritmo temporal:',
        tools: [
          'Entorno LMS accesible WCAG 2.2 AAA con tipografías adaptables y alto contraste',
          'Generador multimodal de contenido: texto estructurado, audioguías sintetizadas, mapas conceptuales interactivos y microcápsulas en video con subtítulos bilingües',
          'Rúbricas de evaluación abiertas que permiten evidenciar aprendizaje mediante hojas de cálculo, presentaciones en video o memorandos ejecutivos',
          'Planificador asíncrono con temporizador de técnica Pomodoro y metas semanales autorreguladas',
        ],
        steps: [
          {
            step: 1,
            phase: 'Acceso Multimodal',
            action: 'El estudiante aborda el concepto de Flujo de Caja Descontado optando libremente entre leer el documento analítico, escuchar el pódcast explicativo en su trayecto laboral o explorar la infografía interactiva.',
          },
          {
            step: 2,
            phase: 'Práctica Contextualizada',
            action: 'Aplica el modelo financiero a los datos reales de su propio emprendimiento o a un caso prototípico del sector seleccionado de un banco de 10 alternativas.',
          },
          {
            step: 3,
            phase: 'Demostración Flexible',
            action: 'Entrega su evidencia en el formato que mejor canaliza su potencial: una plantilla automatizada con macros comentadas o una videoconferencia grabada de 5 minutos explicando su dictamen.',
          },
        ],
      },
      expectedImpact: {
        title: 'Impacto Esperado en el Aprendizaje del Joven Adulto',
        description:
          'Democratización auténtica del aprendizaje superior para adultos con restricciones de agenda o barreras sensoriales. Se elimina la deserción asociada a horarios rígidos y se potencia la motivación intrínseca al conectar directamente la formación con la realidad productiva del estudiante.',
        indicators: [
          'Tasa de finalización del 91% en estudiantes con carga laboral de tiempo completo',
          'Supresión absoluta de barreras de accesibilidad digital verificadas por auditoría técnica',
          'Incremento notable en la aplicabilidad práctica inmediata del conocimiento financiero en sus organizaciones',
        ],
      },
    },
  ] as PracticalCase[],
};

// FINAL SYNTHESIS BLOCK
export const FINAL_SYNTHESIS = {
  badge: 'Conclusión y Convergencia Educativa',
  title: 'Hacia una nueva ecología del aprendizaje virtual',
  paragraphs: [
    'El porvenir de la educación en entornos virtuales no radica en la sustitución de la labor docente por autómata alguno, sino en la articulación sinérgica entre arquitecturas pedagógicas rigurosas, tecnologías inclusivas y modelos adaptativos.',
    'Al situar al joven adulto en el núcleo del diseño formativo —respetando su autonomía cognitiva, enriqueciendo su juicio crítico y habilitando su autorregulación— las didácticas contemporáneas forjan un andamiaje para la ciudadanía digital y el aprendizaje continuo a lo largo de toda la vida.',
  ],
  quote:
    '«La tecnología no transforma la educación por su mera presencia; es la intencionalidad pedagógica y la ética del mediador lo que convierte la información en sabiduría transformadora.»',
  quoteAuthor: 'Principios rectores de la innovación andragógica contemporánea',
};
