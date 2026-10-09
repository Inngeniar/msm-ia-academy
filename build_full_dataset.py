import os
import json
import re

TARGET_DATA_JS = r"c:\Users\nicol\OneDrive\Mundo Salud Médica\PROYECTO MSM\Curso IA_MSM\plataforma_ia_academy\data.js"
TOPICS_TS_PATH = r"c:\Users\nicol\OneDrive\Mundo Salud Médica\PROYECTO MSM\Curso IA_MSM\msm_curso_ia\nextjs_space\scripts\topics-content.ts"

# Extract MSM topics 1-10
with open(TOPICS_TS_PATH, "r", encoding="utf-8") as f:
    topics_text = f.read()

topic_sections = re.split(r'// ===================== SESIÓN (\d+) =====================', topics_text)
msm_topics = {}
for i in range(1, len(topic_sections), 2):
    s_num = int(topic_sections[i])
    s_body = topic_sections[i+1]
    raw_items = re.findall(r'\{\s*titulo:\s*"([^"]+)",\s*intuicion:\s*"([^"]+)",\s*puntosClave:\s*\[(.*?)\],\s*accion:\s*"([^"]+)"', s_body, re.DOTALL)
    items = []
    for t, intu, pts_str, acc in raw_items:
        pts = re.findall(r'"([^"]+)"', pts_str)
        items.append({
            "titulo": t.strip(),
            "intuicion": intu.strip(),
            "puntosClave": pts,
            "accion": acc.strip()
        })
    msm_topics[s_num] = items

# Sessions 11-14 topics for MSM
advanced_topics_11 = [
    {
        "titulo": "Del Asistente Pasivo al Agente Autónomo en Salud",
        "intuicion": "Un LLM común te redacta una carta si se lo pides; un Agente Autónomo en salud detecta que llegó una objeción de glosa al buzón institucional, abre el sistema hospitalario, descarga los soportes clínicos, valida la pertinencia y deja listo el borrador de respuesta.",
        "puntosClave": [
            "Arquitectura ReAct: Bucle iterativo de 'Razonar -> Actuar -> Observar el resultado -> Siguiente paso'.",
            "Descomposición de objetivos complejos: Dividir 'conciliar cartera mensual' en subtareas autónomas.",
            "Diferencia entre automatización rígida (RPA) e IA Agéntica con comprensión de contexto clínico."
        ],
        "accion": "Mapear un cuello de botella en MSM donde hoy un analista pasa horas copiando datos entre el ERP y el correo para evaluar su viabilidad como agente."
    },
    {
        "titulo": "Tool Use y Function Calling con Sistemas Hospitalarios",
        "intuicion": "Es darle 'manos y ojos' a la IA para que pueda interactuar de manera segura con el HIS, el validador de RIPS o las bases de datos tarifarias.",
        "puntosClave": [
            "Esquemas de herramientas: Instrucciones estándar JSON que enseñan a la IA qué funciones existen y qué parámetros pasar.",
            "Invocación determinista: La IA no inventa comandos SQL destructivos; ejecuta únicamente funciones previamente autorizadas.",
            "Manejo de errores de API: Si el servidor de la EPS no responde, el agente reintenta con backoff o alerta al humano."
        ],
        "accion": "Diseñar la especificación de 3 funciones de lectura básicas: consultarPaciente(), verificarGlosa() y obtenerTarifaCUPS()."
    },
    {
        "titulo": "Memoria Agéntica y Contexto Operativo",
        "intuicion": "Permite que el agente recuerde acuerdos contractuales específicos de cada EPS y excepciones negociadas sin tener que repetírselas en cada consulta.",
        "puntosClave": [
            "Memoria a corto plazo (Context Window): Historial de la transacción actual en curso.",
            "Memoria a largo plazo (Bases Vectoriales): Políticas de contratación y acuerdos comerciales históricos.",
            "Memoria procedimental: Instrucciones permanentes de estilo institucional y directrices inviolables de MSM."
        ],
        "accion": "Crear el catálogo de 'Reglas Inmutables de Auditoría' que ningún agente de MSM puede violar en sus resoluciones."
    },
    {
        "titulo": "Niveles de Autonomía y Barreras de Seguridad (Guardrails)",
        "intuicion": "Establecer qué decisiones puede tomar el agente por su cuenta y cuáles requieren aprobación obligatoria de un coordinador.",
        "puntosClave": [
            "Escala de autonomía: L1 Asistente, L2 Copiloto con confirmación previa, L3 Autónomo con monitoreo por excepción.",
            "Límites transaccionales: Aprobación autónoma de cuentas de hasta $500,000 COP; montos superiores exigen firma de auditor sénior.",
            "Prevención de bucles infinitos: Límite estricto de máximo 6 iteraciones de razonamiento por caso."
        ],
        "accion": "Definir la matriz de umbrales económicos de aprobación autónoma para su departamento."
    }
]

advanced_topics_12 = [
    {
        "titulo": "Arquitecturas Multi-Agente: Células Operativas Especializadas",
        "intuicion": "En lugar de sobrecargar a un solo agente con todo el ciclo de cuentas médicas, se crea un equipo de agentes especializados: uno extrae datos, otro audita tarifas y otro redacta el informe.",
        "puntosClave": [
            "Patrón Supervisor-Trabajadores: Un agente orquestador recibe el caso, lo clasifica y asigna subtareas a los agentes especialistas.",
            "Patrón Maker-Checker (Creador y Revisor): Un agente redacta la respuesta a la glosa y un segundo agente (auditor legal) revisa que cumpla la Resolución 3047 antes de emitirla.",
            "Reducción de alucinaciones y fatiga de contexto al mantener las instrucciones de cada agente concisas y enfocadas."
        ],
        "accion": "Dibujar el diagrama de roles de una célula de 3 agentes para el proceso de auditoría concurrente en MSM."
    },
    {
        "titulo": "Orquestación y Enrutamiento al Experto Humano (HITL)",
        "intuicion": "El agente no es un reemplazo ciego del auditor; es su filtro principal. Cuando un caso tiene inconsistencias clínicas o legales complejas, lo traslada con un resumen ejecutivo.",
        "puntosClave": [
            "Score de Confianza (Confidence Threshold): Si la certeza del modelo en la objeción es menor al 85%, el caso pasa a bandeja humana.",
            "Handoff estructurado: El agente entrega al humano el resumen del problema, los artículos normativos aplicables y la recomendación tentativa.",
            "Aprendizaje continuo: La corrección efectuada por el auditor humano se guarda como ejemplo 'Few-Shot' para casos futuros."
        ],
        "accion": "Establecer la lista de las 5 causas de glosa que siempre deben pasar a revisión de un auditor médico humano."
    },
    {
        "titulo": "Medición de Confiabilidad y Tasa de Autonomía (STP)",
        "intuicion": "Medir exactamente qué porcentaje de facturas o auditorías se resolvieron sin intervención humana (Straight-Through Processing).",
        "puntosClave": [
            "Métrica STP: (Casos 100% autónomos sin error) / (Total casos procesados) * 100.",
            "Costo por transacción: Comparativa del costo por cuenta médica manual ($5,000 COP) vs. costo agéntico ($350 COP en cómputo/tokens).",
            "Trazabilidad inmutable: Registro de cada pensamiento, consulta de herramienta y respuesta emitida para fines de auditoría externa."
        ],
        "accion": "Calcular la meta de STP para el primer trimestre de implementación del escuadrón agéntico en MSM."
    }
]

advanced_topics_13 = [
    {
        "titulo": "RAG Empresarial: Conectando IA con la Base de Conocimiento de MSM",
        "intuicion": "Conectar el modelo de lenguaje a los manuales de contratación, resoluciones del Ministerio y acuerdos con EPS sin peligro de fuga de datos ni reentrenamientos costosos.",
        "puntosClave": [
            "Separación de conocimiento y razonamiento: El LLM pone la capacidad de redactar y sintetizar; la base de datos documental de MSM pone los hechos verídicos.",
            "Eliminación de alucinaciones: El modelo se condiciona mediante prompts de Grounding estricto a responder únicamente citando el párrafo exacto.",
            "Actualización en tiempo real: Si el Ministerio de Salud emite una nueva circular hoy, basta subir el PDF para que la IA la aplique de inmediato."
        ],
        "accion": "Seleccionar los 5 documentos normativos o tarifarios prioritarios para conformar la primera base RAG de MSM."
    },
    {
        "titulo": "Chunking Semántico y Búsqueda Híbrida en Salud",
        "intuicion": "Si cortas un manual tarifario en pedazos al azar, separas el código CUPS de su descripción y tarifa. El troceo inteligente conserva tablas y reglas completas.",
        "puntosClave": [
            "Chunking jerárquico y semántico: Fragmentar respetando capítulos, artículos y tablas tarifarias completas.",
            "Búsqueda híbrida (Dense + BM25): Combina búsqueda por conceptos ('biopsia guiada por ecografía') con búsqueda por códigos exactos ('381101').",
            "Re-ranking: Un segundo modelo reclasifica los 10 mejores fragmentos para garantizar que el más pertinente quede en el contexto superior."
        ],
        "accion": "Diseñar la plantilla de metadata obligatoria (EPS, fecha vigencia, régimen subsidiado/contributivo) para cada documento indexado."
    },
    {
        "titulo": "Evaluación Continua de RAG con el Framework Ragas",
        "intuicion": "Auditar científicamente qué tan fiel y exacto es el sistema antes de permitir que responda consultas reales de auditoría.",
        "puntosClave": [
            "Fidelidad (Faithfulness): ¿Todo lo que dijo la respuesta está respaldado en los documentos recuperados o inventó algo?",
            "Relevancia de la respuesta: ¿Respondió concretamente lo que preguntó el directivo?",
            "Relevancia del contexto: ¿El motor de búsqueda trajo los fragmentos correctos o trajo ruido irrelevante?"
        ],
        "accion": "Formular un banco de 10 preguntas de prueba con respuesta dorada verificada por un auditor experto para evaluar el RAG."
    }
]

advanced_topics_14 = [
    {
        "titulo": "Soberanía de Datos: Modelos Locales vs. Nube Privada",
        "intuicion": "Evaluar cuándo usar modelos de proveedores internacionales (OpenAI, Anthropic, Google) con acuerdos de confidencialidad BAA, y cuándo desplegar modelos de código abierto (Llama 3, Mistral) en servidores propios.",
        "puntosClave": [
            "Cumplimiento de Habeas Data (Ley 1581): Datos clínicos sensibles y restricciones de transferencia transfronteriza.",
            "Modelos de Pesos Abiertos (Open Source): Capacidad de correr modelos de 8B o 70B parámetros en infraestructura local sin enviar un solo byte a internet.",
            "Small Language Models (SLMs): Modelos compactos ultra-rápidos y de costo casi nulo para tareas específicas de extracción y clasificación."
        ],
        "accion": "Clasificar los tipos de datos de MSM en Semáforo Verde (públicos/normas), Amarillo (administrativos) y Rojo (datos clínicos con reserva)."
    },
    {
        "titulo": "Fine-Tuning vs. In-Context Learning: El Árbol de Decisión",
        "intuicion": "No compras una imprenta para escribir una carta. El Fine-Tuning sólo se justifica cuando necesitas enseñar un vocabulario o formato extremadamente particular que RAG no logra.",
        "puntosClave": [
            "RAG es para incorporar conocimiento fáctico nuevo y documentos actualizados.",
            "Fine-Tuning es para enseñar estilo, tono institucional o dialectos técnicos médicos especializados.",
            "Costo-beneficio: El 90% de las necesidades empresariales se resuelven con RAG avanzado y buenos prompts a una fracción del costo."
        ],
        "accion": "Evaluar una propuesta de desarrollo de IA bajo el árbol de decisión: ¿se resuelve con Prompting, RAG o amerita Fine-Tuning?"
    },
    {
        "titulo": "LLMOps y Observabilidad en Producción",
        "intuicion": "Tener un velocímetro y un tablero de control para saber cuánto gasta la empresa en IA cada día, qué tan rápido responde y detectar alertas de seguridad.",
        "puntosClave": [
            "Monitoreo de costos de inferencia: Alertas automáticas ante consumos anómalos o consultas desproporcionadas.",
            "Latencia y disponibilidad: Tiempos de respuesta para no degradar la experiencia de los auditores y facturadores.",
            "Seguridad y Prompt Injection: Filtros de entrada para evitar que usuarios maliciosos engañen al modelo o extraigan prompts del sistema."
        ],
        "accion": "Definir el límite de presupuesto mensual de API y los indicadores clave del dashboard de monitoreo de IA de MSM."
    }
]

msm_topics[11] = advanced_topics_11
msm_topics[12] = advanced_topics_12
msm_topics[13] = advanced_topics_13
msm_topics[14] = advanced_topics_14

# All 14 Sessions for MSM
msm_all_sessions = [
    {
        "number": 1,
        "title": "¿Qué es la IA? Desmitificando Conceptos para Líderes Administrativos",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
            "Comprender qué es la Inteligencia Artificial y por qué es relevante para la gestión en salud",
            "Diferenciar entre Machine Learning, Deep Learning e IA Generativa con ejemplos del sector",
            "Adquirir vocabulario técnico esencial para interactuar con proveedores tecnológicos",
            "Identificar aplicaciones actuales de IA en el sector salud colombiano"
        ],
        "practicalActivity": "Ejercicio de autoevaluación: Cada participante identifica 3 tareas de su rol actual que podrían beneficiarse de IA y las clasifica según tipo de IA (ML, Deep Learning, IA Generativa). Discusión grupal sobre expectativas y temores frente a la IA en MSM.",
        "downloads": [],
        "topicsDetailed": msm_topics.get(1, [])
    },
    {
        "number": 2,
        "title": "El Ecosistema de Datos en Salud y Diagnóstico de Madurez Digital",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
            "Comprender los tipos de datos que maneja una organización de salud y su valor para la IA",
            "Diferenciar entre datos estructurados (tablas, RIPS) y no estructurados (glosas, notas clínicas)",
            "Evaluar el nivel de madurez digital de MSM utilizando el marco de diagnóstico interactivo",
            "Identificar brechas de datos y oportunidades de mejora para habilitar proyectos de IA"
        ],
        "practicalActivity": "Taller interactivo de autodiagnóstico: Cada equipo completa la herramienta de Diagnóstico de Madurez Digital en la plataforma (6 dimensiones) y analiza sus brechas inmediatas.",
        "downloads": [],
        "hasMaturityTool": True,
        "topicsDetailed": msm_topics.get(2, [])
    },
    {
        "number": 3,
        "title": "Uso Estratégico de IA Generativa en el Entorno Corporativo",
        "moduleId": 2,
        "duration": "2 horas",
        "level": "Básico-Práctico",
        "objectives": [
            "Dominar el uso de ChatGPT, Claude y Copilot para tareas administrativas cotidianas",
            "Aplicar técnicas de Prompt Engineering para obtener resultados precisos y útiles",
            "Utilizar IA generativa para análisis de reportes, síntesis de normativa y preparación de documentos",
            "Evaluar los riesgos y limitaciones de compartir información corporativa con herramientas externas"
        ],
        "practicalActivity": "Laboratorio en vivo en el Prompt Studio: Cada participante practica técnicas de prompting con casos reales de redacción de respuestas a glosas y síntesis de resoluciones del Ministerio.",
        "downloads": [
            {"title": "Guía de Prompt Engineering para Directivos en Salud", "file": "descargas/guia-prompt-engineering-openai.pdf", "format": "PDF"}
        ],
        "topicsDetailed": msm_topics.get(3, [])
    },
    {
        "number": 4,
        "title": "Taller Práctico: Análisis de Datos Operativos y Financieros sin Programar",
        "moduleId": 2,
        "duration": "2 horas",
        "level": "Básico-Práctico",
        "objectives": [
            "Cargar y analizar archivos Excel/CSV con herramientas de IA sin escribir código",
            "Extraer insights de datos de facturación, ocupación de camas y tiempos de respuesta a glosas",
            "Generar visualizaciones y resúmenes ejecutivos automáticos a partir de datos reales",
            "Identificar patrones y anomalías en datos operativos usando IA como asistente analítico"
        ],
        "practicalActivity": "Taller hands-on: Carga de dataset simulado de facturación de un hospital, identificación de 3 anomalías críticas y generación de un reporte ejecutivo de 1 página.",
        "downloads": [
            {"title": "Caso de Estudio: Dataset Cuentas Médicas", "file": "descargas/caso-estudio-cuentas-medicas.xlsx", "format": "XLSX"},
            {"title": "Guía del Caso de Estudio: Analítica de Cuentas Médicas", "file": "descargas/caso-estudio-analitica-cuentas-medicas.docx", "format": "DOCX"},
            {"title": "Guía: Cómo Analizar Datos con ChatGPT", "file": "descargas/guia-analizar-datos-con-chatgpt.pdf", "format": "PDF"}
        ],
        "topicsDetailed": msm_topics.get(4, [])
    },
    {
        "number": 5,
        "title": "Automatización del Ciclo de Facturación y Modelos de Probabilidad de Glosa IA",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
            "Comprender cómo la IA automatiza las etapas del ciclo de facturación y pre-radicación en salud",
            "Diferenciar rigurosamente entre Facturación Expuesta y Pérdida Esperada (Expected Loss) calibrada con IA",
            "Interpretar modelos predictivos supervisados (XGBoost/LightGBM) y métricas de desempeño (ROC-AUC, Precisión, Recall)",
            "Utilizar la explicabilidad de factores SHAP para identificar la causa raíz de una objeción antes de radicar",
            "Implementar matrices de decisión con semáforo STP (Straight-Through Processing) vs. Retención preventiva"
        ],
        "practicalActivity": "Laboratorio con el Simulador de Probabilidad de Glosa IA: Evaluación en vivo de los casos FAC-002, FAC-003 y FAC-006 del dataset, análisis del impacto de factores SHAP y formulación del plan de subsanación médica y tarifaria.",
        "downloads": [
            {"title": "Guía Especializada: Análisis Predictivo y Probabilidad de Glosa IA", "file": "descargas/modulo-analitica-predictiva-probabilidad-glosa.docx", "format": "DOCX"},
            {"title": "Caso de Estudio: Dataset y Dashboard Cuentas Médicas", "file": "descargas/caso-estudio-cuentas-medicas.xlsx", "format": "XLSX"},
            {"title": "Informe Oficial de Auditoría Emitido por ChatGPT", "file": "descargas/Reporte_profesional_glosas_cuentas_medicas.docx", "format": "DOCX"}
        ],
        "topicsDetailed": [
            {
                "titulo": "Modelos Predictivos y Probabilidad de Glosa IA (Machine Learning Supervisado y SHAP)",
                "intuicion": "A diferencia de un LLM que redacta texto, un modelo predictivo calcula una probabilidad matemática exacta entre 0% y 100% de que una factura sea objetada, analizando patrones no lineales entre códigos de diagnóstico, procedimientos, manuales tarifarios y la EPS pagadora antes de enviar la cuenta.",
                "puntosClave": [
                    "Resolviendo la limitante de datos: Confundir facturación expuesta ($79.6M en Nueva EPS) con glosa efectiva sobreestima el riesgo; el modelo calcula la Pérdida Esperada real: Monto Glosado × Probabilidad IA.",
                    "Algoritmos supervisados (XGBoost, Random Forest) calibrados con Platt Scaling para asegurar que un 80% signifique que 8 de cada 10 facturas similares sufrieron glosa.",
                    "Explicabilidad SHAP: Convierte la IA en 'caja de cristal', indicando al auditor exactamente qué variable corregir (ej. +28% por autorización vencida, -15% por escala Glasgow).",
                    "Semáforo operativo pre-radicación: Verde (<25%) Pase directo STP; Amarillo (25-60%) Auditoría concurrente focalizada; Rojo (>60%) Retener y subsanar en origen."
                ],
                "accion": "Configure en el simulador los parámetros de corte de su institución para que al menos el 50% de las cuentas de bajo riesgo pasen en Straight-Through Processing sin demora."
            }
        ] + msm_topics.get(5, [])
    },
    {
        "number": 6,
        "title": "Optimización Operativa: Predicción de Demanda y Automatización de Admisiones",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
            "Comprender modelos de predicción de demanda aplicados a urgencias y consulta externa",
            "Conocer estrategias de IA para reducir no-shows y optimizar agendas médicas",
            "Explorar la automatización de procesos de admisiones y autorizaciones con aseguradoras",
            "Evaluar la viabilidad de implementar estas soluciones en el contexto de MSM"
        ],
        "practicalActivity": "Diagramación del Flujo As-Is vs. To-Be: Los líderes descargan la plantilla editable de PowerPoint y rediseñan el proceso de admisiones optimizado con IA.",
        "downloads": [
            {"title": "Plantilla Editable: Diagrama de Flujo de Procesos", "file": "descargas/plantilla-diagrama-flujo-procesos.pptx", "format": "PPTX"}
        ],
        "topicsDetailed": msm_topics.get(6, [])
    },
    {
        "number": 7,
        "title": "Protección de Datos Sensibles en Salud y Cumplimiento Normativo",
        "moduleId": 4,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
            "Comprender el marco legal colombiano (Ley 1581 de 2012) para datos de salud",
            "Identificar riesgos de uso de IA con historias clínicas digitales (Resolución 866 de 2021)",
            "Conocer técnicas de anonimización y seudonimización aplicables",
            "Diseñar políticas institucionales de uso de IA seguras y auditables"
        ],
        "practicalActivity": "Taller de políticas corporativas: Redacción de la Política de Uso Responsable de IA de MSM con herramientas aprobadas y protocolos de contingencia.",
        "downloads": [],
        "topicsDetailed": msm_topics.get(7, [])
    },
    {
        "number": 8,
        "title": "Sesgo Algorítmico, Responsabilidad Institucional y Ciberseguridad",
        "moduleId": 4,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
            "Comprender el sesgo algorítmico y cómo puede discriminar en auditoría y admisiones",
            "Aplicar el principio Human-in-the-Loop en procesos hospitalarios críticos",
            "Evaluar la responsabilidad legal institucional frente a errores de sistemas de IA",
            "Conocer fundamentos de ciberseguridad para proteger plataformas de salud"
        ],
        "practicalActivity": "Debate y protocolo de mitigación: Análisis de un modelo de auditoría con sesgo histórico de objeción y establecimiento del protocolo de revisión humana.",
        "downloads": [],
        "topicsDetailed": msm_topics.get(8, [])
    },
    {
        "number": 9,
        "title": "Marco de Priorización de Proyectos de IA y Decisión Buy/Partner/Build",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
            "Aplicar la matriz Impacto vs. Esfuerzo para priorizar iniciativas de IA en salud",
            "Evaluar la decisión estratégica Buy/Partner/Build para cada proyecto de MSM",
            "Definir KPIs de éxito operativo y financiero (tasa de glosas, días cartera, costo por factura)",
            "Construir un roadmap de implementación a 12 meses alineado con la estrategia"
        ],
        "practicalActivity": "Taller de priorización en PowerPoint: Clasificación de 8 proyectos reales de MSM en los cuadrantes de Quick Wins, Estratégicos o Tácticos.",
        "downloads": [
            {"title": "Plantilla Editable: Matriz Impacto vs. Esfuerzo", "file": "descargas/plantilla-matriz-impacto-esfuerzo.pptx", "format": "PPTX"}
        ],
        "topicsDetailed": msm_topics.get(9, [])
    },
    {
        "number": 10,
        "title": "Taller Final — Proyecto Integrador: Business Case de IA para MSM",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
            "Formular un Business Case completo de IA para un proceso real de MSM",
            "Integrar conocimientos de los módulos en una propuesta ejecutiva formal",
            "Presentar y defender el proyecto ante directivos con argumentos técnicos y financieros",
            "Recibir retroalimentación y acordar hoja de ruta de implementación"
        ],
        "practicalActivity": "Comité de Inversión y Defensa de Proyectos: Presentación ejecutiva de 10 minutos por equipo defendiendo su Business Case ante el facilitador y directivos.",
        "downloads": [
            {"title": "Plantilla de Business Case de IA", "file": "descargas/plantilla-business-case-ia.docx", "format": "DOCX"},
            {"title": "Guía: Cómo Presentar un Proyecto de Tecnología a la Alta Dirección", "file": "descargas/guia-presentar-proyecto-alta-direccion.pdf", "format": "PDF"}
        ],
        "topicsDetailed": msm_topics.get(10, [])
    },
    {
        "number": 11,
        "title": "Del Chatbot al Agente Autónomo: Razonamiento, Memoria y Tool Use",
        "moduleId": 6,
        "duration": "2 horas",
        "level": "Avanzado",
        "objectives": [
            "Comprender la arquitectura de un Agente Autónomo: Percepción, Razonamiento ReAct, Memoria y Herramientas",
            "Implementar Function Calling y protocolos de conexión de APIs (Model Context Protocol - MCP)",
            "Configurar memoria a corto y largo plazo con bases de conocimiento",
            "Diseñar salvaguardas de autonomía y límites transaccionales seguros"
        ],
        "practicalActivity": "Lienzo de Diseño Agéntico: Los participantes descargan el Canvas editable de 9 bloques y estructuran la misión, herramientas conectadas y guardrails de un Agente Conciliador de Cuentas.",
        "downloads": [
            {"title": "Canvas de Arquitectura de Agentes de IA", "file": "descargas/canvas-agentes-ia.pptx", "format": "PPTX"}
        ],
        "topicsDetailed": msm_topics.get(11, [])
    },
    {
        "number": 12,
        "title": "Arquitecturas Multi-Agente para Automatización End-to-End",
        "moduleId": 6,
        "duration": "2 horas",
        "level": "Avanzado",
        "objectives": [
            "Diseñar patrones de colaboración multi-agente (Supervisor-Workers, Maker-Checker)",
            "Configurar matrices de escalamiento humano (Human-in-the-Loop) con umbrales de confianza",
            "Establecer protocolos de prevención de bucles infinitos y observabilidad",
            "Medir la tasa de resolución 100% autónoma (Straight-Through Processing - STP)"
        ],
        "practicalActivity": "Diseño de Célula Multi-Agente: Estructuración en Word de un escuadrón de 3 agentes (Agente Extractor, Agente Auditor y Agente Redactor) con su respectiva matriz de escalamiento humano.",
        "downloads": [
            {"title": "Plantilla de Orquestación Multi-Agente y Matriz HITL", "file": "descargas/plantilla-orquestacion-multiagente.docx", "format": "DOCX"}
        ],
        "topicsDetailed": msm_topics.get(12, [])
    },
    {
        "number": 13,
        "title": "RAG Avanzado (Retrieval-Augmented Generation) y Conocimiento Corporativo",
        "moduleId": 7,
        "duration": "2 horas",
        "level": "Avanzado",
        "objectives": [
            "Conectar modelos de lenguaje con la base documental privada sin riesgo de fuga de datos",
            "Dominar técnicas de Chunking Semántico, Embeddings y Búsqueda Híbrida (Dense + BM25)",
            "Eliminar alucinaciones mediante prompts de Grounding estricto y citas obligatorias",
            "Evaluar la calidad y fidelidad de respuestas con el framework Ragas"
        ],
        "practicalActivity": "Auditoría de un Asistente RAG: Evaluación de respuestas contra fuentes documentales, calibración de prompts anti-alucinación y diseño de banco de preguntas doradas.",
        "downloads": [
            {"title": "Manual de RAG Empresarial con Cero Alucinación", "file": "descargas/manual-rag-empresarial-cero-alucinacion.docx", "format": "DOCX"}
        ],
        "topicsDetailed": msm_topics.get(13, [])
    },
    {
        "number": 14,
        "title": "LLMOps, Soberanía Tecnológica: Fine-Tuning vs. Modelos Propios vs. APIs",
        "moduleId": 7,
        "duration": "2 horas",
        "level": "Avanzado",
        "objectives": [
            "Tomar decisiones fundamentadas en el árbol de decisión: In-Context vs. RAG vs. Fine-Tuning vs. SLMs",
            "Evaluar el despliegue de modelos Open Source locales (Llama 3, Mistral) para soberanía de datos",
            "Construir un modelo de Costo Total de Propiedad (TCO) y presupuesto de inferencia",
            "Implementar observabilidad continua y defensas contra Prompt Injection"
        ],
        "practicalActivity": "Simulación Financiera de TCO: Cargar parámetros de volumen y cómputo en la Calculadora de TCO en Excel y defender la mejor estrategia tecnológica a 3 años.",
        "downloads": [
            {"title": "Calculadora de TCO y Evaluación de Modelos de IA", "file": "descargas/plantilla-tco-evaluacion-modelos-ia.xlsx", "format": "XLSX"}
        ],
        "topicsDetailed": msm_topics.get(14, [])
    }
]

# Generate Tracks Config
tracks_data = {
    "salud": {
        "id": "salud",
        "name": "Mundo Salud Médica (Salud & Operaciones)",
        "org": "Mundo Salud Médica",
        "badge": "Salud, Facturación & RIPS",
        "description": "Programa Ejecutivo enfocado en el ciclo de facturación en salud, auditoría médica, prevalidación de RIPS, reducción de glosas y agendamiento clínico.",
        "icon": "Stethoscope",
        "primaryColor": "#002885",
        "accentColor": "#1665C0",
        "sessions": msm_all_sessions
    }
}

# Now generate parallel tracks for Finanzas, Logística, Legal with identical rigorous 14-session structure
# We define a helper that creates specialized content for the other 3 industries
def build_parallel_track(t_id, t_name, org_name, badge_name, desc_text, icon_name, p_color, a_color, domain):
    sessions = []
    # 7 modules, 14 sessions
    for i in range(1, 15):
        orig_s = msm_all_sessions[i-1]
        mod_id = orig_s["moduleId"]
        lvl = orig_s["level"]
        
        # Build industry-specific title & objectives
        title = orig_s["title"].replace("Salud", domain["name"]).replace("en salud", f"en {domain['name']}").replace("MSM", org_name).replace("Médicas", domain["proc_plural"]).replace("Facturación", domain["proc_1"])
        
        objs = [
            obj.replace("salud colombiano", domain["contexto"]).replace("salud", domain["name"]).replace("MSM", org_name).replace("facturación", domain["proc_1"]).replace("glosas", domain["problema_clave"]).replace("médicas", domain["proc_plural"])
            for obj in orig_s["objectives"]
        ]
        
        act = orig_s["practicalActivity"].replace("MSM", org_name).replace("facturación", domain["proc_1"]).replace("glosas", domain["problema_clave"]).replace("hospital", domain["entorno"])
        
        # Transform topics
        topics = []
        for top in orig_s["topicsDetailed"]:
            t_titulo = top["titulo"].replace("Salud", domain["name"]).replace("en salud", f"en {domain['name']}").replace("MSM", org_name).replace("facturación", domain["proc_1"]).replace("glosas", domain["problema_clave"])
            t_intu = top["intuicion"].replace("MSM", org_name).replace("EPS", domain["contraparte"]).replace("glosas", domain["problema_clave"]).replace("hospital", domain["entorno"]).replace("auditor", domain["rol_experto"]).replace("facturación", domain["proc_1"])
            t_pts = [
                pt.replace("MSM", org_name).replace("glosas", domain["problema_clave"]).replace("facturación", domain["proc_1"]).replace("salud", domain["name"]).replace("auditor", domain["rol_experto"])
                for pt in top["puntosClave"]
            ]
            t_acc = top["accion"].replace("MSM", org_name).replace("glosas", domain["problema_clave"]).replace("facturación", domain["proc_1"]).replace("EPS", domain["contraparte"])
            topics.append({
                "titulo": t_titulo,
                "intuicion": t_intu,
                "puntosClave": t_pts,
                "accion": t_acc
            })
            
        sessions.append({
            "number": i,
            "title": title,
            "moduleId": mod_id,
            "duration": "2 horas",
            "level": lvl,
            "objectives": objs,
            "practicalActivity": act,
            "downloads": orig_s["downloads"],
            "topicsDetailed": topics
        })
        
    return {
        "id": t_id,
        "name": t_name,
        "org": org_name,
        "badge": badge_name,
        "description": desc_text,
        "icon": icon_name,
        "primaryColor": p_color,
        "accentColor": a_color,
        "sessions": sessions
    }

tracks_data["finanzas"] = build_parallel_track(
    "finanzas", "Finanzas, Banca & Fintech", "Sector Financiero & Bancario", "Finanzas & Riesgo",
    "Optimización integral de análisis de balances, conciliación bancaria inteligente, prevención de fraude, scoring crediticio y reportes regulatorios.",
    "Landmark", "#0F5132", "#198754",
    {
        "name": "Finanzas", "contexto": "el sector financiero y bancario", "proc_1": "conciliación bancaria",
        "proc_plural": "operaciones financieras", "problema_clave": "discrepancias y fraude",
        "entorno": "banco o entidad financiera", "rol_experto": "analista financiero", "contraparte": "bancos corresponsales"
    }
)

tracks_data["logistica"] = build_parallel_track(
    "logistica", "Cadena de Suministro & Logística", "Supply Chain & Operaciones", "Logística & WMS",
    "Pronóstico avanzado de demanda, optimización de inventarios, gestión inteligente de almacenes (WMS), compras automatizadas y ruteo de flotas.",
    "Truck", "#B45309", "#F59E0B",
    {
        "name": "Cadena de Suministro", "contexto": "la industria logística y manufactura", "proc_1": "gestión de inventarios",
        "proc_plural": "despachos logísticos", "problema_clave": "quiebres de stock y demoras",
        "entorno": "centro de distribución o almacén", "rol_experto": "coordinador logístico", "contraparte": "proveedores y transportistas"
    }
)

tracks_data["legal"] = build_parallel_track(
    "legal", "Legal, Contratos & Compliance", "Dirección Jurídica & Cumplimiento", "Legaltech & CLM",
    "Gestión integral del ciclo de vida contractual (CLM), extracción masiva de cláusulas de riesgo, síntesis normativa continua y auditoría de cumplimiento.",
    "Scale", "#5B21B6", "#7C3AED",
    {
        "name": "Legal y Cumplimiento", "contexto": "el ámbito corporativo y judicial", "proc_1": "revisión contractual",
        "proc_plural": "expedientes jurídicos", "problema_clave": "riesgos e incumplimientos",
        "entorno": "departamento jurídico o firma", "rol_experto": "abogado o auditor legal", "contraparte": "contrapartes contractuales"
    }
)

# Modules Metadata
modules_metadata = [
    {
        "id": 1,
        "title": "Fundamentos de IA y Diagnóstico de Madurez",
        "level": "Básico",
        "sessions": [1, 2],
        "icon": "Brain",
        "description": "Comprenda qué es la IA, distinga ML, Deep Learning y GenAI, y diagnostique el nivel de madurez digital de sus procesos."
    },
    {
        "id": 2,
        "title": "IA Generativa y Productividad Aumentada",
        "level": "Básico-Práctico",
        "sessions": [3, 4],
        "icon": "Wrench",
        "description": "Domine técnicas de Prompt Engineering y análisis de datos sin programar para acelerar redacción y toma de decisiones."
    },
    {
        "id": 3,
        "title": "IA Aplicada a Procesos Críticos de Negocio",
        "level": "Intermedio",
        "sessions": [5, 6],
        "icon": "Building2",
        "description": "Rediseñe el flujo operativo identificando puntos de intervención con modelos predictivos y validación automática."
    },
    {
        "id": 4,
        "title": "Ética, Privacidad, Normativa y Ciberseguridad",
        "level": "Intermedio",
        "sessions": [7, 8],
        "icon": "ShieldCheck",
        "description": "Garantice la protección de datos sensibles, mitigue el sesgo algorítmico, aplique Human-in-the-Loop y blinde la seguridad."
    },
    {
        "id": 5,
        "title": "Estrategia de Portafolio, Decisión Buy/Build y ROI",
        "level": "Intermedio-Estratégico",
        "sessions": [9, 10],
        "icon": "BarChart3",
        "description": "Priorice iniciativas con la matriz Impacto vs. Esfuerzo, calcule el retorno de inversión y formule un Business Case ejecutivo."
    },
    {
        "id": 6,
        "title": "Agentes Autónomos y Sistemas Multi-Agente",
        "level": "Avanzado",
        "sessions": [11, 12],
        "icon": "Bot",
        "description": "Evolucione hacia sistemas que razonan, usan herramientas (Tool Use/MCP) y colaboran entre sí para ejecutar procesos complejos."
    },
    {
        "id": 7,
        "title": "Arquitecturas RAG Empresariales, Soberanía y LLMOps",
        "level": "Avanzado",
        "sessions": [13, 14],
        "icon": "Cpu",
        "description": "Conecte LLMs a bases de conocimiento privadas sin alucinación, evalúe modelos locales vs. APIs y gobierne el ciclo de vida de la IA."
    }
]

# Maturity Frameworks per Track
maturity_frameworks = {
    "salud": {
        "title": "Diagnóstico de Madurez Digital en Salud",
        "subtitle": "Evaluación en 6 dimensiones críticas para empresas de soporte y gestión en salud",
        "dimensions": [
            {"id": "facturacion", "name": "Facturación y Radicación", "desc": "Automatización y oportunidad en la generación y envío de cuentas médicas."},
            {"id": "auditoria", "name": "Auditoría Médica y Glosas", "desc": "Capacidad de predecir, prevenir y sustentar objeciones y glosas."},
            {"id": "admisiones", "name": "Admisiones y Agendamiento", "desc": "Digitalización del pre-registro, asignación de citas y control de no-shows."},
            {"id": "autorizaciones", "name": "Autorizaciones con Aseguradoras", "desc": "Conectividad vía APIs o automatización con plataformas de EPS."},
            {"id": "calidad_datos", "name": "Calidad de Datos y RIPS", "desc": "Estandarización de diagnósticos CIE-10, procedimientos CUPS y consistencia."},
            {"id": "interoperabilidad", "name": "Interoperabilidad y Sistemas", "desc": "Integración entre HIS, ERP hospitalario, facturación electrónica y cloud."}
        ]
    },
    "finanzas": {
        "title": "Diagnóstico de Madurez Digital Financiera",
        "subtitle": "Evaluación en 6 dimensiones para entidades financieras, bancarias y corporativas",
        "dimensions": [
            {"id": "conciliacion", "name": "Conciliación Contable y Bancaria", "desc": "Cruce automatizado de extractos, pagos y partidas pendientes."},
            {"id": "fraude", "name": "Detección de Fraude y Anomalías", "desc": "Monitoreo en tiempo real de transacciones sospechosas y patrones de fuga."},
            {"id": "scoring", "name": "Evaluación Crediticia y Scoring", "desc": "Modelos predictivos para originación de crédito y análisis de solvencia."},
            {"id": "reportes", "name": "Reportes Financieros y Cierre", "desc": "Automatización de estados financieros, consolidación y minutas de junta."},
            {"id": "gobernanza_datos", "name": "Gobernanza y Calidad del Dato", "desc": "Unificación de silos entre core bancario, ERP contable y pasarelas."},
            {"id": "cumplimiento", "name": "Compliance y SARLAFT / AML", "desc": "Diligencia debida y filtrado contra listas restrictivas con IA."}
        ]
    },
    "logistica": {
        "title": "Diagnóstico de Madurez Digital en Operaciones & Logística",
        "subtitle": "Evaluación en 6 dimensiones para cadenas de suministro y distribución",
        "dimensions": [
            {"id": "demanda", "name": "Pronóstico de Demanda", "desc": "Modelos de series temporales para prever quiebres y estacionalidad."},
            {"id": "inventario", "name": "Gestión Inteligente de Stock", "desc": "Optimización de niveles mínimos/máximos y rotación en bodegas."},
            {"id": "ruteo", "name": "Logística de Despacho y Ruteo", "desc": "Algoritmos para optimizar flotas, tiempos de entrega y combustible."},
            {"id": "compras", "name": "Compras y Proveedores", "desc": "Automatización de órdenes de compra y comparativa de cotizaciones."},
            {"id": "visibilidad", "name": "Trazabilidad End-to-End", "desc": "Integración de ERP, TMS, WMS y sensores IoT en una sola vista."},
            {"id": "mantenimiento", "name": "Mantenimiento Predictivo", "desc": "Monitoreo de maquinaria y alertas tempranas antes de fallas críticas."}
        ]
    },
    "legal": {
        "title": "Diagnóstico de Madurez Digital Jurídica & Compliance",
        "subtitle": "Evaluación en 6 dimensiones para departamentos legales y corporativos",
        "dimensions": [
            {"id": "clm", "name": "Ciclo Contractual (CLM)", "desc": "Redacción, negociación y seguimiento de hitos de contratos con IA."},
            {"id": "extraccion", "name": "Extracción y Análisis de Cláusulas", "desc": "Identificación de penalidades, vigencias y riesgos ocultos en documentos."},
            {"id": "normativa", "name": "Monitoreo Regulatorio", "desc": "Síntesis continua de leyes, decretos y resoluciones aplicables."},
            {"id": "litigios", "name": "Gestión de Procesos Judiciales", "desc": "Análisis de antecedentes, jurisprudencia y predicción de probabilidades."},
            {"id": "repositorio", "name": "Memoria Documental e Indexación", "desc": "Digitalización y búsqueda semántica en el histórico jurídico institucional."},
            {"id": "privacidad", "name": "Habeas Data y Políticas de IA", "desc": "Marcos de custodia de información y prevención de filtraciones."}
        ]
    }
}

# Downloadable Catalog
downloads_catalog = [
    {
        "id": "modulo-probabilidad-glosa",
        "title": "Guía Especializada: Análisis Predictivo y Probabilidad de Glosa IA",
        "category": "Analítica Predictiva (Módulo 3)",
        "format": "Documento Word Editable (DOCX)",
        "file": "descargas/modulo-analitica-predictiva-probabilidad-glosa.docx",
        "badge": "Módulo Especializado",
        "desc": "Manual técnico y metodológico: cómo los modelos de Machine Learning (XGBoost, SHAP, Platt Scaling) predicen objeciones de glosa en pre-radicación y calculan la Pérdida Esperada real."
    },
    {
        "id": "reporte-auditoria-chatgpt",
        "title": "Informe Oficial de Auditoría Emitido por ChatGPT",
        "category": "Dictamen y Solucionario (Módulo 3)",
        "format": "Documento Word (DOCX)",
        "file": "descargas/Reporte_profesional_glosas_cuentas_medicas.docx",
        "badge": "Solucionario Oficial",
        "desc": "Reporte profesional emitido por la IA: balance financiero de COP 137.9M, concentración del 94.9% de glosas en Nueva EPS y Sura, y 4 prioridades de gestión directiva."
    },
    {
        "id": "caso-estudio-dataset",
        "title": "Caso de Estudio: Dataset y Dashboard de Cuentas Médicas",
        "category": "Analítica de Operaciones (Módulo 3)",
        "format": "Hoja de Cálculo Excel (XLSX)",
        "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
        "badge": "Caso Aplicado",
        "desc": "Dataset simulado de 30 cuentas hospitalarias con CIE-10, CUPS, probabilidad de glosa IA (>70%) y tablero analítico de distribución de causales."
    },
    {
        "id": "caso-estudio-guia",
        "title": "Caso de Estudio: Analítica Predictiva de Cuentas Médicas",
        "category": "Analítica de Operaciones (Módulo 3)",
        "format": "Documento Word Editable (DOCX)",
        "file": "descargas/caso-estudio-analitica-cuentas-medicas.docx",
        "badge": "Caso Aplicado",
        "desc": "Ficha ejecutiva de la Clínica Metropolitana del Norte, pareto de causas de glosa, arquitectura de 3 capas con IA y guía de 4 actividades prácticas."
    },
    {
        "id": "canvas-agentes",
        "title": "Canvas de Arquitectura de Agentes de IA",
        "category": "Agentes Autónomos (Módulo 6)",
        "format": "PowerPoint Editable (PPTX)",
        "file": "descargas/canvas-agentes-ia.pptx",
        "badge": "Avanzado",
        "desc": "Lienzo de 9 bloques para planificar misión, triggers, tool use, memoria, guardrails y umbrales de escalamiento humano en sistemas agénticos."
    },
    {
        "id": "orquestacion-multiagente",
        "title": "Plantilla de Orquestación Multi-Agente y HITL",
        "category": "Agentes Autónomos (Módulo 6)",
        "format": "Documento Word Editable (DOCX)",
        "file": "descargas/plantilla-orquestacion-multiagente.docx",
        "badge": "Avanzado",
        "desc": "Guía de diseño para células colaborativas (Supervisor-Workers / Maker-Checker), matriz de escalamiento humano y prevención de bucles infinitos."
    },
    {
        "id": "manual-rag",
        "title": "Manual de RAG Empresarial con Cero Alucinación",
        "category": "Arquitectura RAG & LLMOps (Módulo 7)",
        "format": "Documento Word Editable (DOCX)",
        "file": "descargas/manual-rag-empresarial-cero-alucinacion.docx",
        "badge": "Avanzado",
        "desc": "Arquitectura de chunking semántico, búsqueda híbrida (BM25 + Dense Vectors), prompts de grounding estricto y métricas Ragas."
    },
    {
        "id": "tco-calculator",
        "title": "Calculadora de TCO y Evaluación de Modelos de IA",
        "category": "Estrategia & Finanzas (Módulo 7)",
        "format": "Hoja de Cálculo Excel (XLSX)",
        "file": "descargas/plantilla-tco-evaluacion-modelos-ia.xlsx",
        "badge": "Avanzado",
        "desc": "Comparativa financiera de Costo Total de Propiedad: In-Context vs. RAG vs. Fine-Tuning vs. SLM Local con simulador de ROI a 36 meses."
    },
    {
        "id": "guia-prompt",
        "title": "Guía de Prompt Engineering para Directivos",
        "category": "Productividad (Módulo 2)",
        "format": "Documento PDF",
        "file": "descargas/guia-prompt-engineering-openai.pdf",
        "badge": "Básico-Práctico",
        "desc": "Estructura de prompts efectivos, técnicas Few-Shot, Chain-of-Thought, Role Prompting y catálogo de prompts listos para usar."
    },
    {
        "id": "guia-analisis-datos",
        "title": "Guía: Cómo Analizar Datos con ChatGPT sin Programar",
        "category": "Productividad (Módulo 2)",
        "format": "Documento PDF",
        "file": "descargas/guia-analizar-datos-con-chatgpt.pdf",
        "badge": "Básico-Práctico",
        "desc": "Paso a paso para cargar hojas de cálculo, detectar anomalías, proyectar tendencias y generar gráficos ejecutivos automáticamente."
    },
    {
        "id": "diagrama-flujo",
        "title": "Plantilla Editable: Diagrama de Flujo de Procesos",
        "category": "Operaciones (Módulo 3)",
        "format": "PowerPoint Editable (PPTX)",
        "file": "descargas/plantilla-diagrama-flujo-procesos.pptx",
        "badge": "Intermedio",
        "desc": "Lienzo con simbología estándar y ejemplo para mapear el proceso As-Is (actual) vs. el proceso To-Be optimizado con IA."
    },
    {
        "id": "matriz-impacto",
        "title": "Plantilla: Matriz Impacto vs. Esfuerzo",
        "category": "Estrategia & Portafolio (Módulo 5)",
        "format": "PowerPoint Editable (PPTX)",
        "file": "descargas/plantilla-matriz-impacto-esfuerzo.pptx",
        "badge": "Intermedio",
        "desc": "Matriz 2x2 para clasificar iniciativas en Quick Wins, Proyectos Estratégicos, Mejoras Tácticas o Descartar, con tarjetas arrastrables."
    },
    {
        "id": "business-case",
        "title": "Plantilla Completa de Business Case de IA",
        "category": "Estrategia & ROI (Módulo 5)",
        "format": "Documento Word Editable (DOCX)",
        "file": "descargas/plantilla-business-case-ia.docx",
        "badge": "Intermedio-Estratégico",
        "desc": "Documento ejecutivo estructurado en 7 secciones: problema con datos, solución Buy/Build, análisis financiero, riesgos y cronograma."
    },
    {
        "id": "presentar-direccion",
        "title": "Guía: Cómo Presentar Proyectos a la Alta Dirección",
        "category": "Estrategia (Módulo 5)",
        "format": "Documento PDF",
        "file": "descargas/guia-presentar-proyecto-alta-direccion.pdf",
        "badge": "Estratégico",
        "desc": "Metodología narrativa de 6 pasos para traducir tecnicismos a valor de negocio, manejo de objeciones financieras y checklist de pitch."
    }
]

# Complete Glossary
glossary_data = [
    {"term": "Agente de IA (AI Agent)", "cat": "Agentes & Automatización", "def": "Sistema de software impulsado por un modelo de lenguaje que percibe un objetivo de negocio, planifica pasos lógicos de ejecución (patrón ReAct), invoca herramientas externas (APIs, bases de datos) y ajusta su comportamiento a partir de la retroalimentación sin requerir comandos humanos intermedios."},
    {"term": "RAG (Retrieval-Augmented Generation)", "cat": "Arquitectura RAG & Datos", "def": "Arquitectura que conecta un LLM a un repositorio documental privado. Antes de responder, el sistema busca los fragmentos relevantes y se los entrega al modelo como contexto estricto, eliminando alucinaciones y evitando reentrenamientos."},
    {"term": "Tool Use / Function Calling", "cat": "Agentes & Automatización", "def": "Capacidad de un modelo de lenguaje de detectar cuándo una tarea requiere interactuar con el mundo exterior (consultar un saldo, ejecutar una API, actualizar un ERP) y emitir los parámetros estructurados (JSON) necesarios para que el sistema ejecute la acción de forma determinista."},
    {"term": "Model Context Protocol (MCP)", "cat": "Agentes & Automatización", "def": "Estándar abierto promovido por la industria para conectar de manera segura y uniforme asistentes y agentes de IA con herramientas locales, bases de datos y servicios en la nube empresariales."},
    {"term": "Human-in-the-Loop (HITL)", "cat": "Gobernanza & Ética", "def": "Principio rector de diseño y gobernanza donde la inteligencia artificial opera como apoyo analítico o pre-auditor, pero las acciones irreversibles, críticas o que superan umbrales predefinidos de riesgo requieren autorización humana obligatoria."},
    {"term": "Straight-Through Processing (STP)", "cat": "Agentes & Automatización", "def": "Porcentaje de casos, transacciones o expedientes que un flujo agéntico procesa de principio a fin de manera 100% autónoma y sin ninguna intervención manual, manteniendo una tasa de error cercana a cero."},
    {"term": "Alucinación (Hallucination)", "cat": "LLMs & GenAI", "def": "Generación por parte de un modelo generativo de información fácticamente incorrecta o inexistente, expresada con apariencia de certeza lógica absoluta. Se mitiga mediante RAG, técnicas de Grounding y prompts con restricciones estrictas."},
    {"term": "Embeddings y Base Vectorial", "cat": "Arquitectura RAG & Datos", "def": "Representación de fragmentos de texto en vectores numéricos dentro de un espacio matemático multidimensional, permitiendo encontrar documentos por similitud de significado semántico y no únicamente por coincidencia exacta de palabras."},
    {"term": "Fine-Tuning", "cat": "Arquitectura RAG & Datos", "def": "Ajuste fino de los parámetros y pesos de una red neuronal preentrenada utilizando un conjunto de datos especializado para adaptar su dialecto, formato de salida o estilo a un caso de uso sumamente particular."},
    {"term": "LLMOps", "cat": "Gobernanza & Ética", "def": "Conjunto de prácticas operativas, herramientas de observabilidad, pruebas de seguridad y monitoreo de costos para gestionar el ciclo de vida de modelos de lenguaje en producción empresarial."},
    {"term": "Chain-of-Thought (CoT)", "cat": "LLMs & GenAI", "def": "Técnica de ingeniería de prompts donde se instruye al modelo a desglosar su razonamiento paso a paso antes de emitir la conclusión final, mejorando radicalmente la exactitud en análisis lógicos y matemáticos."},
    {"term": "Few-Shot Prompting", "cat": "LLMs & GenAI", "def": "Técnica que suministra al modelo 2 o 3 ejemplos completos de entrada y respuesta esperada dentro del prompt, asegurando consistencia en el formato, tono y estructura del resultado."},
    {"term": "Role Prompting", "cat": "LLMs & GenAI", "def": "Técnica que asigna una identidad, nivel de experiencia y marco de referencia específico al modelo ('Actúa como auditor médico con 15 años de experiencia'), calibrando el vocabulario y criterio de la respuesta."},
    {"term": "Matriz Impacto vs. Esfuerzo", "cat": "Estrategia & Negocio", "def": "Herramienta metodológica 2x2 para evaluar iniciativas de IA cruzando el valor aportado al negocio contra la complejidad técnica y organizacional, clasificándolas en Quick Wins, Proyectos Estratégicos, Mejoras Tácticas o Evitar."},
    {"term": "Decisión Buy/Partner/Build", "cat": "Estrategia & Negocio", "def": "Marco de evaluación estratégica para decidir si una solución de IA debe comprarse como SaaS empaquetado (Buy), contratarse mediante alianza con un integrador especializado (Partner) o desarrollarse internamente (Build)."},
    {"term": "Costo Total de Propiedad (TCO)", "cat": "Estrategia & Negocio", "def": "Cálculo financiero que cuantifica todos los costos directos e indirectos de una solución de IA: licencias, tokens de API, cómputo GPU, integración con sistemas legados, observabilidad, mantenimiento y capacitación del personal."},
    {"term": "Sesgo Algorítmico", "cat": "Gobernanza & Ética", "def": "Distorsión sistemática en las predicciones o decisiones de un modelo de IA debida a datos históricos incompletos o sesgados, que puede generar discriminación en aprobaciones o asignación de recursos."},
    {"term": "Chunking Semántico", "cat": "Arquitectura RAG & Datos", "def": "Estrategia de fragmentación documental que divide textos respetando párrafos, tablas y unidades lógicas de sentido, en lugar de cortar por número arbitrario de caracteres."},
    {"term": "Búsqueda Híbrida (Hybrid Search)", "cat": "Arquitectura RAG & Datos", "def": "Combinación en un motor RAG de búsqueda léxica exacta (BM25) con búsqueda semántica vectorial (Dense Embeddings), logrando alta precisión tanto en conceptos generales como en códigos y referencias numéricas específicas."},
    {"term": "Re-Ranking", "cat": "Arquitectura RAG & Datos", "def": "Etapa secundaria en un pipeline RAG donde un modelo especializado reclasifica y ordena los fragmentos de texto recuperados para colocar los más pertinentes en el contexto superior del prompt."},
    {"term": "Framework RAGAS", "cat": "Arquitectura RAG & Datos", "def": "Metodología estándar para evaluar sistemas RAG mediante métricas automatizadas de fidelidad (Faithfulness), relevancia de respuesta (Answer Relevance) y relevancia del contexto (Context Precision)."},
    {"term": "Small Language Models (SLMs)", "cat": "Arquitectura RAG & Datos", "def": "Modelos compactos de lenguaje (de 1B a 8B de parámetros, como Llama 3 8B, Phi-3 o Mistral) diseñados para ejecutarse en hardware local con bajísima latencia y costos mínimos en tareas delimitadas."},
    {"term": "Prompt Injection", "cat": "Gobernanza & Ética", "def": "Técnica de ataque de seguridad donde un usuario o documento malicioso intenta alterar las directivas internas del modelo para obligarlo a ignorar sus políticas o filtrar información confidencial."},
    {"term": "Análisis Predictivo en Salud", "cat": "Analítica Predictiva", "def": "Aplicación de modelos de Machine Learning supervisado (XGBoost, Random Forest) sobre datos históricos de pacientes, RIPS y facturas para estimar la probabilidad matemática exacta de desenlaces futuros (reingresos, objeciones de glosa o no-shows) antes de que ocurran."},
    {"term": "Valores SHAP (SHapley Additive exPlanations)", "cat": "Analítica Predictiva", "def": "Método basado en teoría de juegos cooperativos que descompone la predicción de cualquier modelo de IA en la contribución marginal de cada variable, permitiendo auditar con exactitud por qué se generó una alerta y eliminando el efecto 'caja negra'."},
    {"term": "Pérdida Esperada (Expected Loss - E[L])", "cat": "Analítica Predictiva", "def": "Métrica financiera actuarial calculada como: Monto Glosado × Probabilidad de Glosa IA. Permite calcular la provisión contable científicamente calibrada para deterioro de cartera hospitalaria, superando la distorsión de la facturación bruta expuesta."},
    {"term": "Calibración de Probabilidades (Platt Scaling)", "cat": "Analítica Predictiva", "def": "Técnica estadística que ajusta las puntuaciones brutas de un clasificador binario para que coincidan con la probabilidad real observada en la práctica, garantizando que un score de 70% represente que 7 de cada 10 casos son efectivamente objetados."},
    {"term": "Curva ROC y AUC (Area Under Curve)", "cat": "Analítica Predictiva", "def": "Métrica de evaluación estándar que mide la capacidad de un modelo predictivo para discriminar entre casos positivos (glosados) y negativos (aprobados) a través de todos los umbrales de decisión posibles; un AUC superior a 0.85 indica excelente poder discriminatorio."}
]

# Assemble and write data.js
data_js_payload = f"""// AUTO-GENERATED ENTERPRISE AI ACADEMY DATASET
// Multi-Track Architecture with 7 Modules, 14 Detailed Sessions, 4 Pillars, Simulators and Resources

const ACADEMY_DATA = {{
  tracks: {json.dumps(tracks_data, indent=2, ensure_ascii=False)},
  modules: {json.dumps(modules_metadata, indent=2, ensure_ascii=False)},
  maturity: {json.dumps(maturity_frameworks, indent=2, ensure_ascii=False)},
  downloads: {json.dumps(downloads_catalog, indent=2, ensure_ascii=False)},
  glossary: {json.dumps(glossary_data, indent=2, ensure_ascii=False)}
}};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = ACADEMY_DATA;
}}
"""

with open(TARGET_DATA_JS, "w", encoding="utf-8") as f:
    f.write(data_js_payload)

print(f"data.js successfully written to {TARGET_DATA_JS}!")
