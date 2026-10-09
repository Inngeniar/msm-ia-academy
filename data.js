// AUTO-GENERATED ENTERPRISE AI ACADEMY DATASET
// Multi-Track Architecture with 7 Modules, 14 Detailed Sessions, 4 Pillars, Simulators and Resources

const ACADEMY_DATA = {
  tracks: {
  "salud": {
    "id": "salud",
    "name": "Mundo Salud Médica (Salud & Operaciones)",
    "org": "Mundo Salud Médica",
    "badge": "Salud, Facturación & RIPS",
    "description": "Programa Ejecutivo enfocado en el ciclo de facturación en salud, auditoría médica, prevalidación de RIPS, reducción de glosas y agendamiento clínico.",
    "icon": "Stethoscope",
    "primaryColor": "#002885",
    "accentColor": "#1665C0",
    "sessions": [
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
        "topicsDetailed": [
          {
            "titulo": "Qué es (y qué no es) la Inteligencia Artificial",
            "intuicion": "La IA no es un robot que piensa como una persona. Es un software que aprende a reconocer patrones en grandes cantidades de datos y, con base en ellos, hace predicciones o genera texto. Piense en el auditor experto que, tras revisar miles de facturas, 'ya sabe' cuáles van a ser glosadas: la IA hace algo parecido, pero a gran escala y en segundos.",
            "puntosClave": [
              "La IA actual es 'estrecha': resuelve muy bien una tarea específica (predecir glosas, clasificar diagnósticos), pero no tiene criterio general ni entiende el contexto como un humano.",
              "No reemplaza el juicio profesional: produce sugerencias y probabilidades, no verdades absolutas. La decisión final sigue siendo del directivo o auditor.",
              "Funciona con datos: sin datos de calidad no hay IA útil. La ventaja competitiva de MSM está en los datos históricos de facturación y glosas que ya posee."
            ],
            "accion": "Liste 3 decisiones repetitivas de su área que hoy toma 'por experiencia'. Esas son las mejores candidatas iniciales para apoyo de IA, porque ya existe un patrón que un modelo puede aprender."
          },
          {
            "titulo": "Machine Learning: cómo aprende una máquina",
            "intuicion": "En lugar de programar reglas una por una ('si el código CUPS no coincide con el diagnóstico, marca error'), al modelo se le muestran miles de ejemplos ya resueltos y él solo deduce las reglas. Es aprender con ejemplos, no con un manual.",
            "puntosClave": [
              "Aprendizaje supervisado: se entrena con ejemplos etiquetados (facturas 'glosadas' vs 'aprobadas') para predecir casos nuevos. Es el más usado en facturación y auditoría.",
              "Aprendizaje no supervisado: el modelo agrupa datos similares sin etiquetas previas; útil para descubrir patrones ocultos (segmentos de EPS con comportamiento parecido).",
              "Aprendizaje por refuerzo: el sistema aprende por ensayo y error con recompensas; menos común en lo administrativo, más en optimización de agendas."
            ],
            "accion": "Identifique en qué proceso de MSM existe un histórico con 'resultado conocido' (glosada/no glosada, pagada/no pagada). Ese histórico es el combustible para un primer modelo supervisado."
          },
          {
            "titulo": "Deep Learning y procesamiento de texto médico",
            "intuicion": "El Deep Learning es un tipo de ML más potente que imita en forma simplificada las conexiones del cerebro. Es lo que permite 'leer' texto libre: una glosa escrita en lenguaje natural, una nota clínica o un contrato con una EPS.",
            "puntosClave": [
              "Destaca en datos no estructurados: texto, imágenes y audio, que son el 80% de la información en salud.",
              "Requiere más datos y más capacidad de cómputo que el ML tradicional; por eso suele consumirse como servicio en la nube, no construirse desde cero.",
              "Es la base de los asistentes como ChatGPT y Claude, que pueden resumir y responder sobre documentos extensos."
            ],
            "accion": "Reúna ejemplos de documentos en texto libre que hoy su equipo lee manualmente (respuestas a glosas, actas, contratos). Son los procesos donde el Deep Learning aporta más ahorro de tiempo."
          },
          {
            "titulo": "IA Generativa y modelos de lenguaje (LLM)",
            "intuicion": "Un LLM es como un asistente que ha leído millones de documentos y puede redactar, resumir o explicar bajo demanda. Usted le da una instrucción en español y le devuelve un borrador en segundos.",
            "puntosClave": [
              "Genera contenido nuevo: borradores de respuestas a glosas, resúmenes de resoluciones, actas de reunión, informes ejecutivos.",
              "No consulta una base de datos oficial por defecto: responde a partir de lo aprendido, por eso puede equivocarse y siempre hay que verificar.",
              "Su gran valor para directivos es la productividad: convierte horas de redacción y lectura en minutos de revisión."
            ],
            "accion": "Elija una tarea de escritura recurrente (por ejemplo, el acta semanal del comité de glosas) y propóngala como primer caso piloto de IA generativa en su equipo."
          },
          {
            "titulo": "Vocabulario clave para hablar con proveedores de tecnología",
            "intuicion": "No necesita programar, pero sí entender diez palabras para no depender de que un proveedor le 'traduzca' todo. Así negocia mejor y detecta promesas infladas.",
            "puntosClave": [
              "Modelo / entrenamiento / inferencia: el modelo se 'entrena' una vez con datos y luego 'infiere' (predice) sobre casos nuevos.",
              "Prompt, token y API: el prompt es la instrucción, el token es la unidad de cobro, y la API es el 'enchufe' que conecta la IA con los sistemas de MSM.",
              "Alucinación, fine-tuning y RAG: la alucinación es un dato inventado; fine-tuning y RAG son formas de hacer que el modelo use el conocimiento propio de MSM."
            ],
            "accion": "Antes de la próxima reunión con un proveedor, prepare 3 preguntas usando estos términos (p. ej. '¿su solución usa RAG con nuestros contratos o responde de forma genérica?')."
          },
          {
            "titulo": "Panorama de la IA en salud en Colombia y la región",
            "intuicion": "La IA ya no es futurista en el sector: facturación electrónica, validación de RIPS y auditoría asistida son realidades en operación. El reto no es técnico, es de adopción y gobierno.",
            "puntosClave": [
              "Casos consolidados: validación automática de RIPS, detección temprana de glosas, optimización de urgencias y agendamiento.",
              "Las instituciones que lideran no son las que más tecnología compran, sino las que mejor ordenan sus datos y procesos.",
              "El soporte administrativo (el negocio de MSM) es uno de los terrenos de mayor retorno, por su alto volumen y reglas claras."
            ],
            "accion": "Seleccione una institución referente comparable y documente un caso de uso que ya tenga en operación; servirá de 'norte' para el roadmap de MSM."
          },
          {
            "titulo": "Mitos y realidades de la IA en la gestión en salud",
            "intuicion": "El mayor riesgo no es que la IA se equivoque, sino usarla sin supervisión o no usarla por miedo. Ni magia infalible ni amenaza: es una herramienta con límites claros.",
            "puntosClave": [
              "Mito: 'la IA reemplazará a los auditores'. Realidad: los vuelve más productivos al filtrar lo rutinario y dejarles los casos complejos.",
              "Mito: 'si lo dice la IA, es correcto'. Realidad: puede alucinar; toda salida crítica se valida contra la norma y los soportes.",
              "Mito: 'necesitamos un gran equipo técnico'. Realidad: muchas soluciones se consumen como servicio y se gobiernan con criterio de negocio."
            ],
            "accion": "Recoja los temores reales de su equipo frente a la IA y conviértalos en una lista de 'reglas de uso responsable'; reducir el miedo es el primer paso de adopción."
          }
        ]
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
        "hasMaturityTool": true,
        "topicsDetailed": [
          {
            "titulo": "Los tres tipos de datos de una organización de salud",
            "intuicion": "Antes de automatizar, hay que saber qué información se tiene. En salud conviven tres mundos: lo administrativo (facturas, admisiones), lo clínico (historias, órdenes) y lo operativo (camas, turnos, tiempos).",
            "puntosClave": [
              "Datos administrativos: el corazón del negocio de MSM (facturación, autorizaciones, radicación, cartera).",
              "Datos clínicos: soportan y justifican el cobro; su calidad determina si una factura se aprueba o se glosa.",
              "Datos operativos: miden la eficiencia (ocupación, tiempos de respuesta) y alimentan modelos de predicción."
            ],
            "accion": "Dibuje un inventario de las fuentes de datos de su área: qué sistema las genera, en qué formato y quién es responsable. Es el primer paso de cualquier proyecto de IA."
          },
          {
            "titulo": "Datos estructurados vs. no estructurados",
            "intuicion": "Lo estructurado cabe en una tabla de Excel (columnas de factura, valor, EPS). Lo no estructurado es texto o imagen libre (una glosa redactada, una historia clínica). La IA necesita ambos, pero se procesan distinto.",
            "puntosClave": [
              "Estructurado: fácil de analizar, ideal para predicción y tableros; ejemplo: tablas de RIPS y cartera.",
              "No estructurado: el 80% de la información; requiere IA de lenguaje para extraer datos de glosas, notas y contratos.",
              "El mayor valor aparece al cruzar ambos: predecir una glosa (estructurado) y redactar su respuesta citando el soporte (no estructurado)."
            ],
            "accion": "Marque en su inventario cuáles fuentes son estructuradas y cuáles no. Las no estructuradas suelen ser las de mayor carga manual y mayor oportunidad de automatización."
          },
          {
            "titulo": "RIPS: estructura, errores comunes y automatización",
            "intuicion": "El RIPS es el 'pasaporte' de cada atención ante el sistema de salud. Si viene mal diligenciado, la factura se devuelve o se glosa. La IA puede revisarlo antes de radicar, como un corrector ortográfico para facturación.",
            "puntosClave": [
              "Errores frecuentes: inconsistencia entre diagnóstico (CIE-10) y procedimiento (CUPS), datos de usuario incompletos, valores fuera de contrato.",
              "La prevalidación automática detecta estos errores en segundos, antes del envío, reduciendo devoluciones formales.",
              "Un RIPS limpio acelera la radicación y mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Pida a su equipo las 5 causas más frecuentes de devolución de RIPS del último trimestre. Esa lista es el requerimiento funcional de un futuro validador con IA."
          },
          {
            "titulo": "Calidad de datos: 'basura entra, basura sale'",
            "intuicion": "Un modelo de IA es tan bueno como los datos que recibe. Si la información de facturación tiene errores, duplicados o vacíos, las predicciones también estarán equivocadas.",
            "puntosClave": [
              "Dimensiones de calidad: completitud, consistencia, exactitud y oportunidad.",
              "Los datos faltantes y duplicados son el problema #1 que frena proyectos de analítica en salud.",
              "Invertir en calidad de datos rinde aunque no se implemente IA: mejora reportes, auditoría y decisiones hoy."
            ],
            "accion": "Defina 3 reglas mínimas de calidad para los datos de su proceso (p. ej. 'ninguna factura sin código de EPS') y mídalas mensualmente."
          },
          {
            "titulo": "Marco de madurez digital en 5 niveles",
            "intuicion": "No se pasa de cero a IA de un salto. Hay una escalera: desde procesos manuales y en papel hasta procesos optimizados con datos en tiempo real. Saber en qué escalón está MSM evita comprar tecnología que no se puede sostener.",
            "puntosClave": [
              "Niveles: Inicial, Repetible, Definido, Gestionado y Optimizado.",
              "Cada área puede estar en un nivel distinto: facturación más avanzada, autorizaciones más manual.",
              "La madurez no es solo tecnología: incluye procesos documentados, roles y cultura de datos."
            ],
            "accion": "Ubique cada proceso de su área en uno de los 5 niveles y fije una meta realista: subir un escalón en 6 meses, no saltar al último."
          },
          {
            "titulo": "Infraestructura tecnológica necesaria",
            "intuicion": "Para habilitar IA no hace falta un centro de datos propio. Hoy casi todo se consume en la nube, pero sí se requiere que los sistemas 'conversen' entre sí mediante integraciones.",
            "puntosClave": [
              "Elementos clave: almacenamiento en la nube, APIs de integración e interoperabilidad entre HIS, ERP y facturación electrónica.",
              "La interoperabilidad (que los sistemas compartan datos) suele ser el mayor cuello de botella, no la IA en sí.",
              "Empezar en la nube reduce inversión inicial y permite escalar según resultados."
            ],
            "accion": "Liste los sistemas que su área usa a diario e identifique cuáles NO se comunican entre sí. Esas desconexiones son el primer obstáculo a resolver."
          },
          {
            "titulo": "Gobernanza de datos: roles y responsabilidades",
            "intuicion": "Los datos necesitan dueños, igual que los procesos. Sin alguien responsable de que la información esté correcta y protegida, ningún proyecto de IA se sostiene.",
            "puntosClave": [
              "Roles típicos: Data Owner (responsable del negocio) y Data Steward (responsable operativo de la calidad).",
              "Políticas de acceso: quién puede ver qué, especialmente con datos sensibles de pacientes.",
              "Ciclo de vida del dato: creación, uso, archivo y eliminación segura."
            ],
            "accion": "Asigne, aunque sea de forma informal, un responsable de calidad de datos por cada proceso clave de su área. La gobernanza empieza con nombres y apellidos."
          }
        ]
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
          {
            "title": "Guía de Prompt Engineering para Directivos en Salud",
            "file": "descargas/guia-prompt-engineering-openai.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "ChatGPT, Claude y Copilot: cuál usar y cuándo",
            "intuicion": "Son asistentes parecidos pero con fortalezas distintas. Elegir bien es como elegir la herramienta correcta: no se clava un tornillo con un martillo.",
            "puntosClave": [
              "ChatGPT: muy versátil, analiza archivos y datos; buen punto de partida general.",
              "Claude: destaca con documentos largos (contratos, resoluciones extensas) por su gran capacidad de lectura.",
              "Copilot: integrado en Office (Word, Excel, Teams), ideal si MSM ya trabaja en ese ecosistema."
            ],
            "accion": "Defina una recomendación simple para su equipo: qué herramienta usar para cada tarea (analizar Excel, resumir una norma larga, redactar en Word) y comuníquela."
          },
          {
            "titulo": "Anatomía de un buen prompt",
            "intuicion": "Pedirle algo a la IA es como delegar en un asistente nuevo: entre más claro el encargo, mejor el resultado. Un buen prompt tiene contexto, instrucción, formato y límites.",
            "puntosClave": [
              "Contexto: quién es usted y para qué ('Soy auditor de cuentas de una IPS...').",
              "Instrucción y formato: qué quiere y cómo ('resume en 5 viñetas', 'en tono formal').",
              "Restricciones: qué evitar ('no inventes cifras', 'usa solo el texto que te doy')."
            ],
            "accion": "Cree una plantilla de prompt estándar para su área y guárdela. Reutilizarla garantiza calidad y ahorra tiempo a todo el equipo."
          },
          {
            "titulo": "Técnicas avanzadas: Chain-of-Thought, Few-Shot y Role Prompting",
            "intuicion": "Hay tres trucos que elevan mucho la calidad: pedirle que razone paso a paso, darle ejemplos de lo que espera, y asignarle un rol experto.",
            "puntosClave": [
              "Chain-of-Thought: 'explica tu razonamiento paso a paso' mejora el análisis de casos complejos.",
              "Few-Shot: mostrar 2-3 ejemplos del resultado deseado alinea el estilo y el formato.",
              "Role Prompting: 'actúa como auditor senior de cuentas médicas' enfoca la respuesta."
            ],
            "accion": "Tome un prompt que ya use y mejórelo aplicando las tres técnicas. Compare el antes y el después con su equipo."
          },
          {
            "titulo": "Caso práctico: análisis de reportes operativos",
            "intuicion": "En lugar de leer un informe de facturación de 20 páginas, puede pedirle a la IA que señale tendencias, anomalías y puntos de atención. Usted pasa de leer todo a revisar lo importante.",
            "puntosClave": [
              "Cargue el reporte y pida: tendencias del periodo, 3 anomalías y posibles causas.",
              "Solicite siempre que indique el dato en que se basa, para poder verificarlo.",
              "Úselo como primer filtro, no como conclusión final: el criterio es suyo."
            ],
            "accion": "En la próxima revisión mensual, procese su reporte con IA y lleve a la reunión las anomalías detectadas ya priorizadas."
          },
          {
            "titulo": "Caso práctico: síntesis de normativa en salud",
            "intuicion": "Las resoluciones y circulares son largas y densas. La IA puede resumirlas, extraer lo que cambia y traducir el 'legalés' a acciones concretas para la operación.",
            "puntosClave": [
              "Pida: resumen ejecutivo, qué cambia frente a la norma anterior e impacto en el proceso de facturación.",
              "Con documentos largos, Claude o NotebookLM dan mejores resultados.",
              "Verifique siempre los artículos citados contra el documento oficial (riesgo de alucinación)."
            ],
            "accion": "Cuando salga la próxima circular del Ministerio o la Supersalud, genere un resumen con IA y compártalo en una página con su equipo."
          },
          {
            "titulo": "Caso práctico: minutas, actas y respuestas a glosas",
            "intuicion": "Redactar actas y sustentaciones de glosas consume horas. La IA genera un primer borrador sólido en minutos; el experto solo ajusta y aprueba.",
            "puntosClave": [
              "Actas: a partir de notas sueltas, obtiene un acta con decisiones, responsables y compromisos.",
              "Respuestas a glosas: redacta la sustentación con base en la normativa y los soportes que usted entrega.",
              "Mantenga un tono y formato institucional mediante una plantilla reutilizable."
            ],
            "accion": "Estandarice un prompt para respuestas a glosas por tipo (pertinencia, tarifas, soportes) y mida cuánto tiempo ahorra el equipo al mes."
          },
          {
            "titulo": "Seguridad: qué información NO compartir con IA externa",
            "intuicion": "Las herramientas públicas de IA están fuera de MSM. Compartir datos identificables de pacientes puede violar la ley de protección de datos. La regla de oro: anonimizar antes de pegar.",
            "puntosClave": [
              "Nunca comparta datos que identifiquen al paciente (nombre, documento, diagnóstico asociado a la persona).",
              "Trabaje con datos agregados o anonimizados; reemplace identificadores por códigos.",
              "Defina herramientas aprobadas y configure, cuando exista, la opción de no usar sus datos para entrenamiento."
            ],
            "accion": "Redacte una regla de una página de 'qué sí y qué no' compartir con IA y hágala firmar por el equipo antes de habilitar su uso."
          }
        ]
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
          {
            "title": "Caso de Estudio: Dataset Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Guía del Caso de Estudio: Analítica de Cuentas Médicas",
            "file": "descargas/caso-estudio-analitica-cuentas-medicas.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Analizar Datos con ChatGPT",
            "file": "descargas/guia-analizar-datos-con-chatgpt.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Cargar archivos a la IA para analizarlos sin programar",
            "intuicion": "Herramientas como ChatGPT permiten subir un Excel y hacerle preguntas en español, como si tuviera un analista de datos disponible 24/7. No se escribe una sola línea de código.",
            "puntosClave": [
              "Suba el archivo y describa sus columnas para que el modelo entienda el contexto.",
              "Pida análisis concretos: totales, promedios, comparaciones, casos atípicos.",
              "Revise siempre una muestra de los resultados contra el archivo original."
            ],
            "accion": "Prepare un Excel 'limpio' de un proceso suyo (sin datos identificables) y practique 5 preguntas de negocio sobre él."
          },
          {
            "titulo": "Análisis de datos de facturación",
            "intuicion": "Con los datos de facturación, la IA responde en minutos preguntas que hoy toman horas: ¿qué EPS concentra la cartera? ¿cuántas facturas se aprueban al primer envío?",
            "puntosClave": [
              "Indicadores clave: volumen por EPS, tasa de aprobación al primer envío, facturado vs. recaudado, antigüedad de cartera.",
              "Permite comparar periodos y detectar deterioros antes de que se vuelvan crónicos.",
              "Genera la base para priorizar la gestión de cobro."
            ],
            "accion": "Defina los 5 indicadores de facturación que más le importan y cree un prompt que los calcule siempre igual, mes a mes."
          },
          {
            "titulo": "Análisis de ocupación y demanda",
            "intuicion": "Los datos de ocupación cuentan una historia: cuándo hay saturación, cuánto se quedan los pacientes y cuándo sobra o falta capacidad. La IA ayuda a leer esa historia rápido.",
            "puntosClave": [
              "Métricas: ocupación por servicio, estancia promedio, rotación de camas.",
              "Patrones estacionales que permiten anticipar picos de demanda.",
              "Insumo directo para planear personal y recursos."
            ],
            "accion": "Analice un mes de ocupación con IA e identifique el día/hora de mayor presión. Úselo para una recomendación concreta de programación."
          },
          {
            "titulo": "Análisis de glosas",
            "intuicion": "Las glosas son dinero retenido. La IA agrupa y ordena las glosas para ver con claridad por qué nos glosan, quién y cuánto recuperamos.",
            "puntosClave": [
              "Métricas: tiempo promedio de respuesta, tasa de recuperación, glosas por tipo (pertinencia, tarifas, soportes).",
              "Detección de patrones recurrentes que revelan fallas de proceso aguas arriba.",
              "Prioriza dónde enfocar esfuerzos para recuperar más con menos trabajo."
            ],
            "accion": "Clasifique las glosas del último trimestre por tipo y causa raíz; lleve a comité las 3 causas que más valor retienen."
          },
          {
            "titulo": "Generación de gráficos y tableros con IA",
            "intuicion": "Además de números, la IA crea gráficos listos para una presentación directiva. Describe lo que quiere ver y lo obtiene sin manejar fórmulas complejas.",
            "puntosClave": [
              "Pida gráficos de tendencia, comparación y participación directamente sobre los datos cargados.",
              "Útil para pasar de la hoja de cálculo a una historia visual clara.",
              "Siempre valide que el gráfico refleje fielmente los datos."
            ],
            "accion": "Convierta su próximo reporte en 3 gráficos clave generados con IA y úselos en el comité directivo."
          },
          {
            "titulo": "Resúmenes ejecutivos automáticos",
            "intuicion": "A partir de varias fuentes, la IA puede redactar un informe de gestión de una página con lo esencial para decidir. El directivo lee conclusiones, no planillas.",
            "puntosClave": [
              "Combine datos de facturación, glosas y ocupación en un solo resumen.",
              "Pida estructura fija: logros, alertas, cifras clave y recomendaciones.",
              "Estandarizar el formato facilita el seguimiento mes a mes."
            ],
            "accion": "Diseñe la plantilla de su 'informe de una página' y automatice su primer borrador con IA cada mes."
          },
          {
            "titulo": "Límites y verificación: el juicio del directivo manda",
            "intuicion": "La IA acelera, pero puede equivocarse o malinterpretar. El valor del directivo es saber qué preguntar y detectar cuándo un resultado no tiene sentido.",
            "puntosClave": [
              "Verifique cifras críticas contra la fuente antes de decidir o comunicar.",
              "Desconfíe de resultados 'demasiado redondos' o sin explicación del origen.",
              "Documente los supuestos usados en cada análisis para poder auditarlo."
            ],
            "accion": "Establezca una regla simple: ningún dato generado por IA se presenta a dirección sin una verificación de la cifra principal."
          }
        ]
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
          {
            "title": "Guía Especializada: Análisis Predictivo y Probabilidad de Glosa IA",
            "file": "descargas/modulo-analitica-predictiva-probabilidad-glosa.docx",
            "format": "DOCX"
          },
          {
            "title": "Caso de Estudio: Dataset y Dashboard Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Informe Oficial de Auditoría Emitido por ChatGPT",
            "file": "descargas/Reporte_profesional_glosas_cuentas_medicas.docx",
            "format": "DOCX"
          }
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
          },
          {
            "titulo": "El ciclo de facturación en salud y sus puntos críticos",
            "intuicion": "La facturación en salud es una cadena: admisión → prestación → registro → codificación → facturación → radicación → auditoría → cobro. Un error temprano se arrastra hasta el final y termina en glosa. La IA puede vigilar cada eslabón.",
            "puntosClave": [
              "Los errores más costosos nacen temprano: en admisión (derechos) y codificación (CIE-10/CUPS).",
              "Cada punto de la cadena es una oportunidad de control automático antes de avanzar.",
              "Medir el 'retrabajo' por etapa revela dónde la IA rinde más."
            ],
            "accion": "Dibuje el ciclo de facturación de MSM y marque en rojo las 3 etapas donde hoy se originan más errores. Ahí se priorizan los controles con IA."
          },
          {
            "titulo": "Detección automática de errores de codificación",
            "intuicion": "Un modelo puede aprender qué combinaciones de diagnóstico, procedimiento y tarifa son coherentes y cuáles no, y alertar antes de facturar, como un corrector que marca incoherencias.",
            "puntosClave": [
              "Cruza CIE-10 (diagnóstico), CUPS (procedimiento) y tarifa contractual para detectar inconsistencias.",
              "Reduce glosas por pertinencia y por codificación, de las más frecuentes.",
              "Aprende de los errores históricos de MSM para mejorar con el tiempo."
            ],
            "accion": "Reúna ejemplos reales de inconsistencias diagnóstico–procedimiento detectadas en auditoría; son los casos de entrenamiento de un validador automático."
          },
          {
            "titulo": "Prevalidación inteligente de RIPS",
            "intuicion": "Antes de radicar, la IA revisa el RIPS completo (estructura, coherencia y completitud) y devuelve una lista de correcciones. Es revisar el examen antes de entregarlo.",
            "puntosClave": [
              "Valida estructura, coherencia clínica y completitud en segundos.",
              "Reduce devoluciones por errores formales y acelera la radicación.",
              "Libera al equipo de la revisión manual repetitiva."
            ],
            "accion": "Mida hoy la tasa de devolución de RIPS por errores formales; será la línea base para evaluar el impacto de una prevalidación con IA."
          },
          {
            "titulo": "Alertas de glosas recurrentes",
            "intuicion": "Si ciertas facturas siempre se glosan por el mismo motivo, la IA puede aprender ese patrón y avisar 'ésta tiene alta probabilidad de glosa' antes de enviarla.",
            "puntosClave": [
              "Asigna a cada factura una probabilidad de glosa y su motivo probable.",
              "Permite corregir antes de radicar, no después de ser objetada.",
              "Convierte la gestión de glosas de reactiva a preventiva."
            ],
            "accion": "Identifique los 5 motivos de glosa más repetidos; cada uno es una regla de alerta temprana que puede empezar a aplicarse incluso de forma manual."
          },
          {
            "titulo": "Auditoría inteligente de cuentas médicas",
            "intuicion": "En lugar de revisar al azar o el 100% manualmente, la IA prioriza las cuentas con mayor riesgo o mayor valor, enfocando al auditor donde más importa.",
            "puntosClave": [
              "Cruza soportes, tarifas, contratos y normativa para detectar cobros inconsistentes o subdeclarados.",
              "Prioriza la muestra de auditoría por riesgo y por impacto económico.",
              "Aumenta hallazgos sin aumentar el tamaño del equipo."
            ],
            "accion": "Defina un criterio de priorización por valor y riesgo para la auditoría concurrente; es el primer paso hacia una auditoría asistida por IA."
          },
          {
            "titulo": "Automatización de la conciliación de cartera",
            "intuicion": "Cruzar lo pagado contra lo radicado es tedioso y propenso a error. La IA empareja pagos y facturas, resalta diferencias y prioriza qué cobrar primero.",
            "puntosClave": [
              "Automatiza el cruce pagos–facturas e identifica partidas pendientes.",
              "Prioriza la gestión de cobro por antigüedad y monto.",
              "Mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Estime cuántas horas/mes dedica el equipo a conciliar cartera; ese tiempo es el ahorro potencial directo de automatizarla."
          },
          {
            "titulo": "Casos reales de IA en facturación en la región",
            "intuicion": "Otros ya recorrieron el camino. Aprender de sus resultados (y errores) evita reinventar la rueda y ayuda a fijar metas realistas de mejora.",
            "puntosClave": [
              "Resultados típicos: reducción de glosas, menor tiempo de radicación, mayor recuperación de cartera.",
              "El éxito depende más de datos y procesos ordenados que de la herramienta elegida.",
              "Los pilotos acotados y medibles son la mejor forma de empezar."
            ],
            "accion": "Fije una meta cuantitativa inicial (p. ej. reducir glosas 2 puntos en 6 meses) inspirada en un caso comparable y hágala el objetivo del primer piloto."
          }
        ]
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
          {
            "title": "Plantilla Editable: Diagrama de Flujo de Procesos",
            "file": "descargas/plantilla-diagrama-flujo-procesos.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Predicción de demanda en urgencias",
            "intuicion": "Así como se predice el clima, se puede anticipar cuántos pacientes llegarán a urgencias por hora o día, para tener el personal justo: ni saturado ni ocioso.",
            "puntosClave": [
              "Usa series temporales y variables como día, hora, clima y estacionalidad.",
              "Permite planear turnos y recursos con anticipación.",
              "Mejora la atención y controla el costo de personal."
            ],
            "accion": "Consiga al menos un año de datos de llegadas a urgencias; sin histórico suficiente no hay predicción confiable."
          },
          {
            "titulo": "Predicción de demanda en consulta externa",
            "intuicion": "Conocer la demanda esperada por especialidad evita agendas vacías o sobrecargadas y mejora el uso de la capacidad instalada.",
            "puntosClave": [
              "Detecta patrones estacionales y efecto de campañas de promoción y prevención.",
              "Optimiza la oferta de citas por especialidad.",
              "Reduce tiempos de espera y mejora satisfacción."
            ],
            "accion": "Analice la demanda histórica de 2-3 especialidades críticas e identifique sus picos para ajustar la oferta de agenda."
          },
          {
            "titulo": "Reducción de inasistencias (no-shows)",
            "intuicion": "Cada cita perdida es capacidad desperdiciada e ingreso no generado. La IA identifica quién probablemente faltará y activa recordatorios dirigidos.",
            "puntosClave": [
              "Modelos que estiman la probabilidad de inasistencia por paciente.",
              "Recordatorios personalizados (SMS, WhatsApp, llamada) a los de mayor riesgo.",
              "Permite sobreagendar de forma controlada para compensar."
            ],
            "accion": "Mida su tasa de no-show actual y el ingreso asociado; es el caso de negocio que justifica un sistema de recordatorios inteligente."
          },
          {
            "titulo": "Optimización de agendas médicas",
            "intuicion": "Asignar citas no es solo llenar espacios: es equilibrar duración esperada, prioridad clínica y recursos. Los algoritmos encuentran la mejor combinación.",
            "puntosClave": [
              "Considera duración esperada, perfil del paciente, recursos y prioridad.",
              "Reduce tiempos muertos y mejora el flujo de pacientes.",
              "Equilibra carga entre profesionales."
            ],
            "accion": "Revise las reglas actuales de agendamiento y detecte una regla rígida que genere tiempos muertos; es la primera candidata a optimizar."
          },
          {
            "titulo": "Automatización de admisiones",
            "intuicion": "Buena parte de la admisión es verificar datos y derechos, tareas repetitivas que un flujo automatizado o un chatbot pueden resolver, dejando al personal los casos complejos.",
            "puntosClave": [
              "Pre-registro de pacientes y verificación automática de derechos con aseguradoras.",
              "Menos filas, menos errores de digitación y datos más completos para facturar.",
              "Datos de admisión correctos previenen glosas aguas abajo."
            ],
            "accion": "Cronometre el tiempo promedio de una admisión manual e identifique qué verificaciones podrían hacerse automáticamente."
          },
          {
            "titulo": "Automatización de autorizaciones",
            "intuicion": "Las autorizaciones dependen de ir y venir con las aseguradoras. Integrar sistemas vía API permite verificar coberturas y seguir el estado en tiempo real, sin llamadas ni correos manuales.",
            "puntosClave": [
              "Integración vía API con plataformas de aseguradoras.",
              "Verificación automática de coberturas y seguimiento de estado en tiempo real.",
              "Reduce demoras que retrasan la atención y el cobro."
            ],
            "accion": "Liste las aseguradoras con las que MSM tramita más autorizaciones y verifique cuáles ofrecen integración por API; ahí está el mayor ahorro."
          },
          {
            "titulo": "Del ahorro operativo al impacto financiero",
            "intuicion": "Optimizar operaciones no es solo comodidad: se traduce en pesos. Menos no-shows, mejor ocupación y admisiones más limpias impactan directamente el resultado.",
            "puntosClave": [
              "La eficiencia operativa reduce costos y aumenta ingresos por mejor uso de capacidad.",
              "Admisiones y autorizaciones correctas disminuyen glosas y aceleran el cobro.",
              "El impacto debe medirse con KPIs claros para sostener la inversión."
            ],
            "accion": "Para cada mejora operativa que proponga, exprese el beneficio en una cifra financiera estimada; así gana respaldo de la dirección."
          }
        ]
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
        "topicsDetailed": [
          {
            "titulo": "Ley 1581 de 2012 (Habeas Data) aplicada a la IA",
            "intuicion": "Los datos de los pacientes tienen dueño: el paciente. La ley fija cómo se pueden usar. Antes de alimentar cualquier IA con datos personales, hay que cumplir estas reglas.",
            "puntosClave": [
              "Principios de finalidad, libertad, veracidad y seguridad en el tratamiento de datos.",
              "Los datos de salud son 'sensibles': protección reforzada y usos restringidos.",
              "El consentimiento y la finalidad declarada limitan para qué se pueden usar los datos en IA."
            ],
            "accion": "Verifique que las finalidades declaradas en sus políticas de datos cubran el uso analítico; si no, actualícelas antes de iniciar proyectos de IA."
          },
          {
            "titulo": "Resolución 866 de 2021 y custodia de la historia clínica",
            "intuicion": "La historia clínica debe guardarse, protegerse y poder rastrearse quién la consulta. Cualquier IA que la toque debe respetar esas mismas exigencias.",
            "puntosClave": [
              "Requisitos de gestión, custodia y conservación de la historia clínica digital.",
              "Trazabilidad de accesos y respaldo de la información.",
              "Aplica también a los sistemas de IA que procesen o accedan a esos registros."
            ],
            "accion": "Exija a cualquier proveedor de IA que demuestre trazabilidad de accesos y respaldo conforme a la norma antes de contratarlo."
          },
          {
            "titulo": "Qué son los datos sensibles en salud",
            "intuicion": "No todos los datos pesan igual. Diagnósticos, tratamientos e información genética son especialmente delicados y su filtración puede dañar a la persona y a la institución.",
            "puntosClave": [
              "Incluyen diagnósticos, tratamientos, antecedentes e información genética.",
              "Requieren el mayor nivel de protección y justificación de uso.",
              "Su manejo indebido conlleva sanciones y daño reputacional."
            ],
            "accion": "Clasifique qué campos de sus bases son sensibles y establezca que nunca salgan hacia herramientas externas sin anonimizar."
          },
          {
            "titulo": "Riesgos de usar IA externa con datos de pacientes",
            "intuicion": "Pegar datos en una IA pública es como enviarlos fuera de la empresa. Existen riesgos de filtración, de re-identificación y de transferencia internacional de datos.",
            "puntosClave": [
              "Filtración: la información podría quedar fuera del control de MSM.",
              "Re-identificación: datos 'anónimos' mal tratados pueden volver a identificar a una persona.",
              "Transferencia internacional: muchos servicios almacenan datos en otros países."
            ],
            "accion": "Defina una lista de herramientas aprobadas y prohibidas, y la regla de anonimizar siempre antes de usar IA externa."
          },
          {
            "titulo": "Anonimización y seudonimización",
            "intuicion": "Se puede aprovechar el valor de los datos sin exponer a las personas: quitando o reemplazando lo que identifica. Así se usa IA con menor riesgo legal.",
            "puntosClave": [
              "Anonimizar: eliminar de forma irreversible los identificadores.",
              "Seudonimizar: reemplazar identificadores por códigos reversibles bajo control.",
              "Técnicas como k-anonimato y privacidad diferencial reducen el riesgo de re-identificación."
            ],
            "accion": "Cree un procedimiento estándar de anonimización para los conjuntos de datos que su equipo use en análisis con IA."
          },
          {
            "titulo": "Consentimiento informado para el uso de IA",
            "intuicion": "Cuando los datos de un paciente se procesan con IA, surge la pregunta: ¿hace falta un permiso adicional? La respuesta depende de la finalidad y de cómo se declararon los usos.",
            "puntosClave": [
              "El uso debe estar cubierto por la finalidad autorizada por el titular.",
              "Usos nuevos o distintos pueden requerir consentimiento adicional.",
              "La transparencia con el paciente reduce riesgos legales y reputacionales."
            ],
            "accion": "Revise con el área jurídica si los consentimientos actuales cubren el tratamiento analítico y ajuste los formatos si es necesario."
          },
          {
            "titulo": "Política corporativa de uso de IA",
            "intuicion": "Una política clara evita improvisaciones. Define qué herramientas se pueden usar, con qué datos y quién responde. Es el 'manual de tránsito' de la IA en MSM.",
            "puntosClave": [
              "Herramientas aprobadas y datos prohibidos, por escrito.",
              "Proceso para evaluar y aprobar nuevas herramientas.",
              "Responsables y protocolo ante incidentes de datos."
            ],
            "accion": "Impulse la aprobación de una 'Política de Uso Responsable de IA' en MSM; sin ella, cada área improvisará con riesgos distintos."
          }
        ]
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
        "topicsDetailed": [
          {
            "titulo": "Qué es el sesgo algorítmico en facturación y auditoría",
            "intuicion": "Si la IA aprende de datos históricos injustos, repetirá esa injusticia. Por ejemplo, si cierto servicio siempre fue más glosado, el modelo podría penalizarlo de forma desproporcionada.",
            "puntosClave": [
              "El sesgo nace en los datos de entrenamiento, no en una mala intención del modelo.",
              "Puede llevar a decisiones sistemáticamente erróneas contra un servicio, especialidad o aseguradora.",
              "Detectarlo exige monitorear los resultados por grupos, no solo el promedio."
            ],
            "accion": "Pida a cualquier proveedor de IA que muestre cómo mide y controla el sesgo de su modelo antes de confiar en sus decisiones."
          },
          {
            "titulo": "Tipos de sesgo y cómo detectarlos",
            "intuicion": "El sesgo tiene varias formas. Reconocerlas ayuda a hacer las preguntas correctas y a no aceptar resultados a ciegas.",
            "puntosClave": [
              "Selección: los datos no representan bien la realidad; Medición: se capturó mal la información.",
              "Confirmación: se busca lo que confirma lo que ya se creía; Histórico: se hereda una injusticia pasada.",
              "Se mitigan con datos representativos, revisión humana y auditoría periódica del modelo."
            ],
            "accion": "Antes de adoptar un modelo, pregunte con qué datos se entrenó y si representan la operación real de MSM."
          },
          {
            "titulo": "Human-in-the-Loop: la IA apoya, el humano decide",
            "intuicion": "En procesos críticos, la IA nunca debe decidir sola. Propone y el experto valida. Es como el copiloto: ayuda a volar, pero el comandante manda.",
            "puntosClave": [
              "La IA sugiere y prioriza; la persona confirma, corrige y aprende.",
              "Esencial donde hay dinero, derechos o salud en juego.",
              "El circuito de corrección humana también mejora el modelo con el tiempo."
            ],
            "accion": "Diseñe todo flujo de IA en MSM con un punto obligatorio de validación humana antes de ejecutar decisiones críticas."
          },
          {
            "titulo": "Responsabilidad institucional ante errores de la IA",
            "intuicion": "Si un modelo aprueba una factura incorrecta, la responsabilidad no desaparece: sigue siendo de la institución. Por eso hay que definir desde el inicio quién responde.",
            "puntosClave": [
              "La IA es una herramienta; la responsabilidad legal y contractual es de MSM.",
              "Debe definirse quién supervisa, quién aprueba y quién responde por cada decisión.",
              "La documentación de controles es clave para demostrar diligencia."
            ],
            "accion": "Establezca una matriz de responsabilidades (RACI) para cada proceso con IA: quién supervisa, aprueba y responde."
          },
          {
            "titulo": "Transparencia y explicabilidad",
            "intuicion": "Un modelo que no explica por qué decidió algo es una 'caja negra' peligrosa en salud. Los directivos deben exigir que las decisiones sean comprensibles y auditables.",
            "puntosClave": [
              "Caja negra vs. caja blanca: prefiera modelos que justifiquen sus salidas.",
              "La explicabilidad permite auditar, corregir y defender decisiones ante EPS o entes de control.",
              "Es también un requisito creciente de la regulación."
            ],
            "accion": "Incluya 'explicabilidad' como requisito obligatorio en la evaluación de cualquier solución de IA para MSM."
          },
          {
            "titulo": "Ciberseguridad para entornos de salud",
            "intuicion": "Los hospitales son blanco frecuente de ataques porque manejan datos valiosos. Proteger los sistemas de IA y los datos es parte inseparable del proyecto.",
            "puntosClave": [
              "El ransomware ha paralizado instituciones de salud reales.",
              "Medidas básicas: autenticación multifactor, protección de equipos y segmentación de redes.",
              "La seguridad es responsabilidad compartida entre MSM y sus proveedores."
            ],
            "accion": "Verifique que las medidas básicas (MFA, respaldos, segmentación) estén activas antes de conectar nuevos sistemas de IA."
          },
          {
            "titulo": "Plan de respuesta ante incidentes",
            "intuicion": "No se trata de si ocurrirá un incidente, sino de cuándo. Tener un plan listo reduce el daño y el tiempo de recuperación.",
            "puntosClave": [
              "Protocolo claro ante brechas de datos o ataques: contener, notificar, recuperar.",
              "Roles y responsables definidos antes de la crisis.",
              "Obligaciones de notificación a autoridades y titulares según la norma."
            ],
            "accion": "Asegúrese de que MSM cuente con un protocolo de incidentes escrito y probado, que cubra también los sistemas de IA."
          }
        ]
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
          {
            "title": "Plantilla Editable: Matriz Impacto vs. Esfuerzo",
            "file": "descargas/plantilla-matriz-impacto-esfuerzo.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Marco de priorización: Impacto vs. Esfuerzo",
            "intuicion": "No todo proyecto de IA vale la pena primero. La clave es comparar cuánto valor genera contra cuánto cuesta implementarlo, y empezar por lo más rentable y fácil.",
            "puntosClave": [
              "Impacto: reducción de errores, tiempos y costos, o recuperación de ingresos.",
              "Esfuerzo: datos disponibles, tecnología, integración y cambio organizacional.",
              "Evita el error de empezar por el proyecto más vistoso en lugar del más rentable."
            ],
            "accion": "Puntúe cada idea de IA de su área en impacto y esfuerzo (escala 1-5); tendrá un ranking objetivo para decidir."
          },
          {
            "titulo": "La matriz de priorización en cuatro cuadrantes",
            "intuicion": "Al ubicar los proyectos en una matriz, aparecen cuatro grupos claros. Los 'Quick Wins' (mucho impacto, poco esfuerzo) son por donde se debe empezar para generar confianza.",
            "puntosClave": [
              "Quick Wins: alto impacto, bajo esfuerzo — prioridad inmediata.",
              "Estratégicos: alto impacto, alto esfuerzo — planear a mediano plazo.",
              "Tácticos y 'a evitar': bajo impacto — postergar o descartar."
            ],
            "accion": "Ubique su lista de proyectos en la matriz y comprometa recursos primero con un Quick Win para demostrar valor temprano."
          },
          {
            "titulo": "Decisión Buy / Partner / Build",
            "intuicion": "Ante una necesidad de IA hay tres caminos: comprar una solución lista, aliarse con un proveedor, o construirla internamente. Cada uno conviene en situaciones distintas.",
            "puntosClave": [
              "Buy: rápido y probado, menos personalizable — ideal para problemas estándar.",
              "Partner: equilibra personalización y velocidad — útil para necesidades específicas.",
              "Build: máximo control y costo — solo si es un diferenciador central y hay capacidad."
            ],
            "accion": "Para su proyecto prioritario, evalúe las tres opciones con criterios de costo, tiempo y especificidad, y justifique la elección."
          },
          {
            "titulo": "KPIs de éxito para proyectos de IA en MSM",
            "intuicion": "Lo que no se mide no se puede mejorar ni defender. Antes de iniciar, hay que definir cómo se verá el éxito en números.",
            "puntosClave": [
              "Ejemplos: tasa de glosas, días de respuesta a glosas, % de facturas aprobadas al primer envío, costo por factura, tiempo de radicación.",
              "Cada KPI necesita una línea base (valor actual) y una meta.",
              "Pocos KPIs claros valen más que muchos indicadores difusos."
            ],
            "accion": "Para cada proyecto, defina 3 KPIs con su valor actual y su meta a 12 meses antes de aprobar la inversión."
          },
          {
            "titulo": "Cálculo de ROI de proyectos de IA",
            "intuicion": "El ROI responde la pregunta de la dirección: ¿vale la pena? Se comparan los ahorros y mayores ingresos contra el costo total del proyecto.",
            "puntosClave": [
              "Costos: licencias, implementación, capacitación y mantenimiento.",
              "Beneficios: menos glosas, menos retrabajo, mayor recuperación de cartera.",
              "Incluya el punto de equilibrio: en cuántos meses se recupera la inversión."
            ],
            "accion": "Construya un ROI simple a 3 años para su proyecto prioritario; aunque sea estimado, enfoca la conversación con la dirección."
          },
          {
            "titulo": "Gestión del cambio organizacional",
            "intuicion": "La tecnología falla más por la gente que por la máquina. Si el equipo no entiende ni confía en la IA, el proyecto no se adopta por bueno que sea.",
            "puntosClave": [
              "Comunicar el 'para qué' y cómo beneficia al trabajo diario.",
              "Capacitar a los usuarios finales y acompañar la transición.",
              "Usar Quick Wins para generar confianza y vencer la resistencia."
            ],
            "accion": "Incluya en todo proyecto un plan de comunicación y capacitación; sin adopción, no hay retorno."
          },
          {
            "titulo": "Roadmap de implementación a 12 meses",
            "intuicion": "Un buen proyecto avanza por fases: primero un piloto pequeño, luego se valida y después se escala. Así se controla el riesgo y se aprende en el camino.",
            "puntosClave": [
              "Fases: piloto → validación → escalamiento, con hitos y responsables.",
              "Métricas de seguimiento en cada fase para decidir si continuar.",
              "Un roadmap realista evita sobrepromesas y frustración."
            ],
            "accion": "Dibuje el roadmap de su proyecto prioritario con 3 fases, hitos y responsables para los próximos 12 meses."
          }
        ]
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
          {
            "title": "Plantilla de Business Case de IA",
            "file": "descargas/plantilla-business-case-ia.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Presentar un Proyecto de Tecnología a la Alta Dirección",
            "file": "descargas/guia-presentar-proyecto-alta-direccion.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Estructura de un Business Case de IA",
            "intuicion": "Un Business Case es la historia que convence a la dirección de invertir: qué problema resolvemos, cómo, cuánto cuesta y qué ganamos. Ordenarlo bien es la mitad del éxito.",
            "puntosClave": [
              "Componentes: problema, solución, alcance, beneficios, costos, riesgos, cronograma y equipo.",
              "Debe caber en pocas páginas y hablar el lenguaje de la dirección: valor y riesgo.",
              "Cada afirmación se respalda con datos, no con opiniones."
            ],
            "accion": "Use la plantilla de Business Case del programa como esqueleto y compétela con los datos reales de su proceso."
          },
          {
            "titulo": "Selección del proceso a intervenir",
            "intuicion": "El primer proyecto debe elegirse con cabeza: un proceso con dolor claro, datos disponibles y alto impacto. Facturación, glosas, admisiones o autorizaciones son candidatos naturales en MSM.",
            "puntosClave": [
              "Prefiera procesos con problema medible y datos históricos disponibles.",
              "Equilibre impacto esperado con viabilidad de implementación.",
              "Un alcance acotado aumenta la probabilidad de éxito del piloto."
            ],
            "accion": "Elija un único proceso para su Business Case y resista la tentación de abarcar todo a la vez."
          },
          {
            "titulo": "Definir el problema con datos",
            "intuicion": "'Tenemos muchas glosas' no es un problema accionable. 'La tasa de glosas es del 18% y cuesta X al mes' sí lo es. Los números convierten una queja en un caso de inversión.",
            "puntosClave": [
              "Cuantifique la situación actual: tiempos, errores, costos y volúmenes.",
              "Defina la brecha: dónde estamos vs. dónde queremos llegar.",
              "La línea base permitirá demostrar el impacto después."
            ],
            "accion": "Reúna las 3-4 cifras que describen el problema de su proceso elegido; son el corazón del Business Case."
          },
          {
            "titulo": "Diseño de la solución",
            "intuicion": "Aquí se conecta el problema con la tecnología: qué tipo de IA, qué datos necesita, cómo se integra con lo existente y si se compra, se asocia o se construye.",
            "puntosClave": [
              "Especifique tipo de IA, datos requeridos e integraciones necesarias.",
              "Defina el modelo de implementación (Buy/Partner/Build) y por qué.",
              "Describa el flujo con Human-in-the-Loop donde corresponda."
            ],
            "accion": "Dibuje el flujo 'antes vs. después' de su proceso con la solución propuesta; hace tangible el cambio."
          },
          {
            "titulo": "Análisis financiero del proyecto",
            "intuicion": "La dirección aprueba con números. Hay que mostrar cuánto cuesta el primer año, cuánto se ahorra o recupera y en cuánto tiempo se paga solo.",
            "puntosClave": [
              "Inversión año 1 vs. ahorros proyectados años 1-3.",
              "Punto de equilibrio e indicadores de rentabilidad (ROI).",
              "Sea conservador: mejor prometer menos y cumplir."
            ],
            "accion": "Calcule el ahorro mensual estimado y el mes de equilibrio de su proyecto; son las cifras que más pesan en la decisión."
          },
          {
            "titulo": "Plan de implementación",
            "intuicion": "Una buena idea sin plan de ejecución no se aprueba. Hay que mostrar fases realistas, responsables y de qué depende el éxito.",
            "puntosClave": [
              "Fases con hitos, equipo responsable y dependencias técnicas y organizacionales.",
              "Un piloto inicial medible antes de escalar.",
              "Riesgos identificados con su plan de mitigación."
            ],
            "accion": "Añada a su Business Case un cronograma simple de 3 fases con responsables claros."
          },
          {
            "titulo": "Presentación ejecutiva del proyecto",
            "intuicion": "Diez minutos bien usados valen más que cincuenta diapositivas. La dirección quiere escuchar: problema → solución → impacto → inversión → plan → siguiente paso.",
            "puntosClave": [
              "Cuente una historia clara y respaldada en datos, no una lista de funciones técnicas.",
              "Anticipe las preguntas difíciles (riesgos, datos, costos).",
              "Cierre siempre con una petición concreta (el 'siguiente paso')."
            ],
            "accion": "Prepare su presentación de 10 minutos siguiendo la secuencia problema→solución→impacto→inversión→plan→siguiente paso y ensáyela."
          }
        ]
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
          {
            "title": "Canvas de Arquitectura de Agentes de IA",
            "file": "descargas/canvas-agentes-ia.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
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
          {
            "title": "Plantilla de Orquestación Multi-Agente y Matriz HITL",
            "file": "descargas/plantilla-orquestacion-multiagente.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
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
          {
            "title": "Manual de RAG Empresarial con Cero Alucinación",
            "file": "descargas/manual-rag-empresarial-cero-alucinacion.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
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
          {
            "title": "Calculadora de TCO y Evaluación de Modelos de IA",
            "file": "descargas/plantilla-tco-evaluacion-modelos-ia.xlsx",
            "format": "XLSX"
          }
        ],
        "topicsDetailed": [
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
      }
    ]
  },
  "finanzas": {
    "id": "finanzas",
    "name": "Finanzas, Banca & Fintech",
    "org": "Sector Financiero & Bancario",
    "badge": "Finanzas & Riesgo",
    "description": "Optimización integral de análisis de balances, conciliación bancaria inteligente, prevención de fraude, scoring crediticio y reportes regulatorios.",
    "icon": "Landmark",
    "primaryColor": "#0F5132",
    "accentColor": "#198754",
    "sessions": [
      {
        "number": 1,
        "title": "¿Qué es la IA? Desmitificando Conceptos para Líderes Administrativos",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
          "Comprender qué es la Inteligencia Artificial y por qué es relevante para la gestión en Finanzas",
          "Diferenciar entre Machine Learning, Deep Learning e IA Generativa con ejemplos del sector",
          "Adquirir vocabulario técnico esencial para interactuar con proveedores tecnológicos",
          "Identificar aplicaciones actuales de IA en el sector el sector financiero y bancario"
        ],
        "practicalActivity": "Ejercicio de autoevaluación: Cada participante identifica 3 tareas de su rol actual que podrían beneficiarse de IA y las clasifica según tipo de IA (ML, Deep Learning, IA Generativa). Discusión grupal sobre expectativas y temores frente a la IA en Sector Financiero & Bancario.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Qué es (y qué no es) la Inteligencia Artificial",
            "intuicion": "La IA no es un robot que piensa como una persona. Es un software que aprende a reconocer patrones en grandes cantidades de datos y, con base en ellos, hace predicciones o genera texto. Piense en el analista financiero experto que, tras revisar miles de facturas, 'ya sabe' cuáles van a ser glosadas: la IA hace algo parecido, pero a gran escala y en segundos.",
            "puntosClave": [
              "La IA actual es 'estrecha': resuelve muy bien una tarea específica (predecir discrepancias y fraude, clasificar diagnósticos), pero no tiene criterio general ni entiende el contexto como un humano.",
              "No reemplaza el juicio profesional: produce sugerencias y probabilidades, no verdades absolutas. La decisión final sigue siendo del directivo o analista financiero.",
              "Funciona con datos: sin datos de calidad no hay IA útil. La ventaja competitiva de Sector Financiero & Bancario está en los datos históricos de conciliación bancaria y discrepancias y fraude que ya posee."
            ],
            "accion": "Liste 3 decisiones repetitivas de su área que hoy toma 'por experiencia'. Esas son las mejores candidatas iniciales para apoyo de IA, porque ya existe un patrón que un modelo puede aprender."
          },
          {
            "titulo": "Machine Learning: cómo aprende una máquina",
            "intuicion": "En lugar de programar reglas una por una ('si el código CUPS no coincide con el diagnóstico, marca error'), al modelo se le muestran miles de ejemplos ya resueltos y él solo deduce las reglas. Es aprender con ejemplos, no con un manual.",
            "puntosClave": [
              "Aprendizaje supervisado: se entrena con ejemplos etiquetados (facturas 'glosadas' vs 'aprobadas') para predecir casos nuevos. Es el más usado en conciliación bancaria y analista financieroía.",
              "Aprendizaje no supervisado: el modelo agrupa datos similares sin etiquetas previas; útil para descubrir patrones ocultos (segmentos de EPS con comportamiento parecido).",
              "Aprendizaje por refuerzo: el sistema aprende por ensayo y error con recompensas; menos común en lo administrativo, más en optimización de agendas."
            ],
            "accion": "Identifique en qué proceso de Sector Financiero & Bancario existe un histórico con 'resultado conocido' (glosada/no glosada, pagada/no pagada). Ese histórico es el combustible para un primer modelo supervisado."
          },
          {
            "titulo": "Deep Learning y procesamiento de texto médico",
            "intuicion": "El Deep Learning es un tipo de ML más potente que imita en forma simplificada las conexiones del cerebro. Es lo que permite 'leer' texto libre: una glosa escrita en lenguaje natural, una nota clínica o un contrato con una bancos corresponsales.",
            "puntosClave": [
              "Destaca en datos no estructurados: texto, imágenes y audio, que son el 80% de la información en Finanzas.",
              "Requiere más datos y más capacidad de cómputo que el ML tradicional; por eso suele consumirse como servicio en la nube, no construirse desde cero.",
              "Es la base de los asistentes como ChatGPT y Claude, que pueden resumir y responder sobre documentos extensos."
            ],
            "accion": "Reúna ejemplos de documentos en texto libre que hoy su equipo lee manualmente (respuestas a discrepancias y fraude, actas, contratos). Son los procesos donde el Deep Learning aporta más ahorro de tiempo."
          },
          {
            "titulo": "IA Generativa y modelos de lenguaje (LLM)",
            "intuicion": "Un LLM es como un asistente que ha leído millones de documentos y puede redactar, resumir o explicar bajo demanda. Usted le da una instrucción en español y le devuelve un borrador en segundos.",
            "puntosClave": [
              "Genera contenido nuevo: borradores de respuestas a discrepancias y fraude, resúmenes de resoluciones, actas de reunión, informes ejecutivos.",
              "No consulta una base de datos oficial por defecto: responde a partir de lo aprendido, por eso puede equivocarse y siempre hay que verificar.",
              "Su gran valor para directivos es la productividad: convierte horas de redacción y lectura en minutos de revisión."
            ],
            "accion": "Elija una tarea de escritura recurrente (por ejemplo, el acta semanal del comité de discrepancias y fraude) y propóngala como primer caso piloto de IA generativa en su equipo."
          },
          {
            "titulo": "Vocabulario clave para hablar con proveedores de tecnología",
            "intuicion": "No necesita programar, pero sí entender diez palabras para no depender de que un proveedor le 'traduzca' todo. Así negocia mejor y detecta promesas infladas.",
            "puntosClave": [
              "Modelo / entrenamiento / inferencia: el modelo se 'entrena' una vez con datos y luego 'infiere' (predice) sobre casos nuevos.",
              "Prompt, token y API: el prompt es la instrucción, el token es la unidad de cobro, y la API es el 'enchufe' que conecta la IA con los sistemas de Sector Financiero & Bancario.",
              "Alucinación, fine-tuning y RAG: la alucinación es un dato inventado; fine-tuning y RAG son formas de hacer que el modelo use el conocimiento propio de Sector Financiero & Bancario."
            ],
            "accion": "Antes de la próxima reunión con un proveedor, prepare 3 preguntas usando estos términos (p. ej. '¿su solución usa RAG con nuestros contratos o responde de forma genérica?')."
          },
          {
            "titulo": "Panorama de la IA en Finanzas en Colombia y la región",
            "intuicion": "La IA ya no es futurista en el sector: conciliación bancaria electrónica, validación de RIPS y analista financieroía asistida son realidades en operación. El reto no es técnico, es de adopción y gobierno.",
            "puntosClave": [
              "Casos consolidados: validación automática de RIPS, detección temprana de discrepancias y fraude, optimización de urgencias y agendamiento.",
              "Las instituciones que lideran no son las que más tecnología compran, sino las que mejor ordenan sus datos y procesos.",
              "El soporte administrativo (el negocio de Sector Financiero & Bancario) es uno de los terrenos de mayor retorno, por su alto volumen y reglas claras."
            ],
            "accion": "Seleccione una institución referente comparable y documente un caso de uso que ya tenga en operación; servirá de 'norte' para el roadmap de Sector Financiero & Bancario."
          },
          {
            "titulo": "Mitos y realidades de la IA en la gestión en Finanzas",
            "intuicion": "El mayor riesgo no es que la IA se equivoque, sino usarla sin supervisión o no usarla por miedo. Ni magia infalible ni amenaza: es una herramienta con límites claros.",
            "puntosClave": [
              "Mito: 'la IA reemplazará a los analista financieroes'. Realidad: los vuelve más productivos al filtrar lo rutinario y dejarles los casos complejos.",
              "Mito: 'si lo dice la IA, es correcto'. Realidad: puede alucinar; toda salida crítica se valida contra la norma y los soportes.",
              "Mito: 'necesitamos un gran equipo técnico'. Realidad: muchas soluciones se consumen como servicio y se gobiernan con criterio de negocio."
            ],
            "accion": "Recoja los temores reales de su equipo frente a la IA y conviértalos en una lista de 'reglas de uso responsable'; reducir el miedo es el primer paso de adopción."
          }
        ]
      },
      {
        "number": 2,
        "title": "El Ecosistema de Datos en Finanzas y Diagnóstico de Madurez Digital",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
          "Comprender los tipos de datos que maneja una organización de Finanzas y su valor para la IA",
          "Diferenciar entre datos estructurados (tablas, RIPS) y no estructurados (discrepancias y fraude, notas clínicas)",
          "Evaluar el nivel de madurez digital de Sector Financiero & Bancario utilizando el marco de diagnóstico interactivo",
          "Identificar brechas de datos y oportunidades de mejora para habilitar proyectos de IA"
        ],
        "practicalActivity": "Taller interactivo de autodiagnóstico: Cada equipo completa la herramienta de Diagnóstico de Madurez Digital en la plataforma (6 dimensiones) y analiza sus brechas inmediatas.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Los tres tipos de datos de una organización de salud",
            "intuicion": "Antes de automatizar, hay que saber qué información se tiene. En salud conviven tres mundos: lo administrativo (facturas, admisiones), lo clínico (historias, órdenes) y lo operativo (camas, turnos, tiempos).",
            "puntosClave": [
              "Datos administrativos: el corazón del negocio de Sector Financiero & Bancario (conciliación bancaria, autorizaciones, radicación, cartera).",
              "Datos clínicos: soportan y justifican el cobro; su calidad determina si una factura se aprueba o se glosa.",
              "Datos operativos: miden la eficiencia (ocupación, tiempos de respuesta) y alimentan modelos de predicción."
            ],
            "accion": "Dibuje un inventario de las fuentes de datos de su área: qué sistema las genera, en qué formato y quién es responsable. Es el primer paso de cualquier proyecto de IA."
          },
          {
            "titulo": "Datos estructurados vs. no estructurados",
            "intuicion": "Lo estructurado cabe en una tabla de Excel (columnas de factura, valor, bancos corresponsales). Lo no estructurado es texto o imagen libre (una glosa redactada, una historia clínica). La IA necesita ambos, pero se procesan distinto.",
            "puntosClave": [
              "Estructurado: fácil de analizar, ideal para predicción y tableros; ejemplo: tablas de RIPS y cartera.",
              "No estructurado: el 80% de la información; requiere IA de lenguaje para extraer datos de discrepancias y fraude, notas y contratos.",
              "El mayor valor aparece al cruzar ambos: predecir una glosa (estructurado) y redactar su respuesta citando el soporte (no estructurado)."
            ],
            "accion": "Marque en su inventario cuáles fuentes son estructuradas y cuáles no. Las no estructuradas suelen ser las de mayor carga manual y mayor oportunidad de automatización."
          },
          {
            "titulo": "RIPS: estructura, errores comunes y automatización",
            "intuicion": "El RIPS es el 'pasaporte' de cada atención ante el sistema de salud. Si viene mal diligenciado, la factura se devuelve o se glosa. La IA puede revisarlo antes de radicar, como un corrector ortográfico para conciliación bancaria.",
            "puntosClave": [
              "Errores frecuentes: inconsistencia entre diagnóstico (CIE-10) y procedimiento (CUPS), datos de usuario incompletos, valores fuera de contrato.",
              "La prevalidación automática detecta estos errores en segundos, antes del envío, reduciendo devoluciones formales.",
              "Un RIPS limpio acelera la radicación y mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Pida a su equipo las 5 causas más frecuentes de devolución de RIPS del último trimestre. Esa lista es el requerimiento funcional de un futuro validador con IA."
          },
          {
            "titulo": "Calidad de datos: 'basura entra, basura sale'",
            "intuicion": "Un modelo de IA es tan bueno como los datos que recibe. Si la información de conciliación bancaria tiene errores, duplicados o vacíos, las predicciones también estarán equivocadas.",
            "puntosClave": [
              "Dimensiones de calidad: completitud, consistencia, exactitud y oportunidad.",
              "Los datos faltantes y duplicados son el problema #1 que frena proyectos de analítica en Finanzas.",
              "Invertir en calidad de datos rinde aunque no se implemente IA: mejora reportes, analista financieroía y decisiones hoy."
            ],
            "accion": "Defina 3 reglas mínimas de calidad para los datos de su proceso (p. ej. 'ninguna factura sin código de bancos corresponsales') y mídalas mensualmente."
          },
          {
            "titulo": "Marco de madurez digital en 5 niveles",
            "intuicion": "No se pasa de cero a IA de un salto. Hay una escalera: desde procesos manuales y en papel hasta procesos optimizados con datos en tiempo real. Saber en qué escalón está Sector Financiero & Bancario evita comprar tecnología que no se puede sostener.",
            "puntosClave": [
              "Niveles: Inicial, Repetible, Definido, Gestionado y Optimizado.",
              "Cada área puede estar en un nivel distinto: conciliación bancaria más avanzada, autorizaciones más manual.",
              "La madurez no es solo tecnología: incluye procesos documentados, roles y cultura de datos."
            ],
            "accion": "Ubique cada proceso de su área en uno de los 5 niveles y fije una meta realista: subir un escalón en 6 meses, no saltar al último."
          },
          {
            "titulo": "Infraestructura tecnológica necesaria",
            "intuicion": "Para habilitar IA no hace falta un centro de datos propio. Hoy casi todo se consume en la nube, pero sí se requiere que los sistemas 'conversen' entre sí mediante integraciones.",
            "puntosClave": [
              "Elementos clave: almacenamiento en la nube, APIs de integración e interoperabilidad entre HIS, ERP y conciliación bancaria electrónica.",
              "La interoperabilidad (que los sistemas compartan datos) suele ser el mayor cuello de botella, no la IA en sí.",
              "Empezar en la nube reduce inversión inicial y permite escalar según resultados."
            ],
            "accion": "Liste los sistemas que su área usa a diario e identifique cuáles NO se comunican entre sí. Esas desconexiones son el primer obstáculo a resolver."
          },
          {
            "titulo": "Gobernanza de datos: roles y responsabilidades",
            "intuicion": "Los datos necesitan dueños, igual que los procesos. Sin alguien responsable de que la información esté correcta y protegida, ningún proyecto de IA se sostiene.",
            "puntosClave": [
              "Roles típicos: Data Owner (responsable del negocio) y Data Steward (responsable operativo de la calidad).",
              "Políticas de acceso: quién puede ver qué, especialmente con datos sensibles de pacientes.",
              "Ciclo de vida del dato: creación, uso, archivo y eliminación segura."
            ],
            "accion": "Asigne, aunque sea de forma informal, un responsable de calidad de datos por cada proceso clave de su área. La gobernanza empieza con nombres y apellidos."
          }
        ]
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
        "practicalActivity": "Laboratorio en vivo en el Prompt Studio: Cada participante practica técnicas de prompting con casos reales de redacción de respuestas a discrepancias y fraude y síntesis de resoluciones del Ministerio.",
        "downloads": [
          {
            "title": "Guía de Prompt Engineering para Directivos en Salud",
            "file": "descargas/guia-prompt-engineering-openai.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "ChatGPT, Claude y Copilot: cuál usar y cuándo",
            "intuicion": "Son asistentes parecidos pero con fortalezas distintas. Elegir bien es como elegir la herramienta correcta: no se clava un tornillo con un martillo.",
            "puntosClave": [
              "ChatGPT: muy versátil, analiza archivos y datos; buen punto de partida general.",
              "Claude: destaca con documentos largos (contratos, resoluciones extensas) por su gran capacidad de lectura.",
              "Copilot: integrado en Office (Word, Excel, Teams), ideal si Sector Financiero & Bancario ya trabaja en ese ecosistema."
            ],
            "accion": "Defina una recomendación simple para su equipo: qué herramienta usar para cada tarea (analizar Excel, resumir una norma larga, redactar en Word) y comuníquela."
          },
          {
            "titulo": "Anatomía de un buen prompt",
            "intuicion": "Pedirle algo a la IA es como delegar en un asistente nuevo: entre más claro el encargo, mejor el resultado. Un buen prompt tiene contexto, instrucción, formato y límites.",
            "puntosClave": [
              "Contexto: quién es usted y para qué ('Soy analista financiero de cuentas de una IPS...').",
              "Instrucción y formato: qué quiere y cómo ('resume en 5 viñetas', 'en tono formal').",
              "Restricciones: qué evitar ('no inventes cifras', 'usa solo el texto que te doy')."
            ],
            "accion": "Cree una plantilla de prompt estándar para su área y guárdela. Reutilizarla garantiza calidad y ahorra tiempo a todo el equipo."
          },
          {
            "titulo": "Técnicas avanzadas: Chain-of-Thought, Few-Shot y Role Prompting",
            "intuicion": "Hay tres trucos que elevan mucho la calidad: pedirle que razone paso a paso, darle ejemplos de lo que espera, y asignarle un rol experto.",
            "puntosClave": [
              "Chain-of-Thought: 'explica tu razonamiento paso a paso' mejora el análisis de casos complejos.",
              "Few-Shot: mostrar 2-3 ejemplos del resultado deseado alinea el estilo y el formato.",
              "Role Prompting: 'actúa como analista financiero senior de cuentas médicas' enfoca la respuesta."
            ],
            "accion": "Tome un prompt que ya use y mejórelo aplicando las tres técnicas. Compare el antes y el después con su equipo."
          },
          {
            "titulo": "Caso práctico: análisis de reportes operativos",
            "intuicion": "En lugar de leer un informe de conciliación bancaria de 20 páginas, puede pedirle a la IA que señale tendencias, anomalías y puntos de atención. Usted pasa de leer todo a revisar lo importante.",
            "puntosClave": [
              "Cargue el reporte y pida: tendencias del periodo, 3 anomalías y posibles causas.",
              "Solicite siempre que indique el dato en que se basa, para poder verificarlo.",
              "Úselo como primer filtro, no como conclusión final: el criterio es suyo."
            ],
            "accion": "En la próxima revisión mensual, procese su reporte con IA y lleve a la reunión las anomalías detectadas ya priorizadas."
          },
          {
            "titulo": "Caso práctico: síntesis de normativa en Finanzas",
            "intuicion": "Las resoluciones y circulares son largas y densas. La IA puede resumirlas, extraer lo que cambia y traducir el 'legalés' a acciones concretas para la operación.",
            "puntosClave": [
              "Pida: resumen ejecutivo, qué cambia frente a la norma anterior e impacto en el proceso de conciliación bancaria.",
              "Con documentos largos, Claude o NotebookLM dan mejores resultados.",
              "Verifique siempre los artículos citados contra el documento oficial (riesgo de alucinación)."
            ],
            "accion": "Cuando salga la próxima circular del Ministerio o la Supersalud, genere un resumen con IA y compártalo en una página con su equipo."
          },
          {
            "titulo": "Caso práctico: minutas, actas y respuestas a discrepancias y fraude",
            "intuicion": "Redactar actas y sustentaciones de discrepancias y fraude consume horas. La IA genera un primer borrador sólido en minutos; el experto solo ajusta y aprueba.",
            "puntosClave": [
              "Actas: a partir de notas sueltas, obtiene un acta con decisiones, responsables y compromisos.",
              "Respuestas a discrepancias y fraude: redacta la sustentación con base en la normativa y los soportes que usted entrega.",
              "Mantenga un tono y formato institucional mediante una plantilla reutilizable."
            ],
            "accion": "Estandarice un prompt para respuestas a discrepancias y fraude por tipo (pertinencia, tarifas, soportes) y mida cuánto tiempo ahorra el equipo al mes."
          },
          {
            "titulo": "Seguridad: qué información NO compartir con IA externa",
            "intuicion": "Las herramientas públicas de IA están fuera de Sector Financiero & Bancario. Compartir datos identificables de pacientes puede violar la ley de protección de datos. La regla de oro: anonimizar antes de pegar.",
            "puntosClave": [
              "Nunca comparta datos que identifiquen al paciente (nombre, documento, diagnóstico asociado a la persona).",
              "Trabaje con datos agregados o anonimizados; reemplace identificadores por códigos.",
              "Defina herramientas aprobadas y configure, cuando exista, la opción de no usar sus datos para entrenamiento."
            ],
            "accion": "Redacte una regla de una página de 'qué sí y qué no' compartir con IA y hágala firmar por el equipo antes de habilitar su uso."
          }
        ]
      },
      {
        "number": 4,
        "title": "Taller Práctico: Análisis de Datos Operativos y Financieros sin Programar",
        "moduleId": 2,
        "duration": "2 horas",
        "level": "Básico-Práctico",
        "objectives": [
          "Cargar y analizar archivos Excel/CSV con herramientas de IA sin escribir código",
          "Extraer insights de datos de conciliación bancaria, ocupación de camas y tiempos de respuesta a discrepancias y fraude",
          "Generar visualizaciones y resúmenes ejecutivos automáticos a partir de datos reales",
          "Identificar patrones y anomalías en datos operativos usando IA como asistente analítico"
        ],
        "practicalActivity": "Taller hands-on: Carga de dataset simulado de conciliación bancaria de un banco o entidad financiera, identificación de 3 anomalías críticas y generación de un reporte ejecutivo de 1 página.",
        "downloads": [
          {
            "title": "Caso de Estudio: Dataset Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Guía del Caso de Estudio: Analítica de Cuentas Médicas",
            "file": "descargas/caso-estudio-analitica-cuentas-medicas.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Analizar Datos con ChatGPT",
            "file": "descargas/guia-analizar-datos-con-chatgpt.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Cargar archivos a la IA para analizarlos sin programar",
            "intuicion": "Herramientas como ChatGPT permiten subir un Excel y hacerle preguntas en español, como si tuviera un analista de datos disponible 24/7. No se escribe una sola línea de código.",
            "puntosClave": [
              "Suba el archivo y describa sus columnas para que el modelo entienda el contexto.",
              "Pida análisis concretos: totales, promedios, comparaciones, casos atípicos.",
              "Revise siempre una muestra de los resultados contra el archivo original."
            ],
            "accion": "Prepare un Excel 'limpio' de un proceso suyo (sin datos identificables) y practique 5 preguntas de negocio sobre él."
          },
          {
            "titulo": "Análisis de datos de conciliación bancaria",
            "intuicion": "Con los datos de conciliación bancaria, la IA responde en minutos preguntas que hoy toman horas: ¿qué bancos corresponsales concentra la cartera? ¿cuántas facturas se aprueban al primer envío?",
            "puntosClave": [
              "Indicadores clave: volumen por EPS, tasa de aprobación al primer envío, facturado vs. recaudado, antigüedad de cartera.",
              "Permite comparar periodos y detectar deterioros antes de que se vuelvan crónicos.",
              "Genera la base para priorizar la gestión de cobro."
            ],
            "accion": "Defina los 5 indicadores de conciliación bancaria que más le importan y cree un prompt que los calcule siempre igual, mes a mes."
          },
          {
            "titulo": "Análisis de ocupación y demanda",
            "intuicion": "Los datos de ocupación cuentan una historia: cuándo hay saturación, cuánto se quedan los pacientes y cuándo sobra o falta capacidad. La IA ayuda a leer esa historia rápido.",
            "puntosClave": [
              "Métricas: ocupación por servicio, estancia promedio, rotación de camas.",
              "Patrones estacionales que permiten anticipar picos de demanda.",
              "Insumo directo para planear personal y recursos."
            ],
            "accion": "Analice un mes de ocupación con IA e identifique el día/hora de mayor presión. Úselo para una recomendación concreta de programación."
          },
          {
            "titulo": "Análisis de discrepancias y fraude",
            "intuicion": "Las discrepancias y fraude son dinero retenido. La IA agrupa y ordena las discrepancias y fraude para ver con claridad por qué nos glosan, quién y cuánto recuperamos.",
            "puntosClave": [
              "Métricas: tiempo promedio de respuesta, tasa de recuperación, discrepancias y fraude por tipo (pertinencia, tarifas, soportes).",
              "Detección de patrones recurrentes que revelan fallas de proceso aguas arriba.",
              "Prioriza dónde enfocar esfuerzos para recuperar más con menos trabajo."
            ],
            "accion": "Clasifique las discrepancias y fraude del último trimestre por tipo y causa raíz; lleve a comité las 3 causas que más valor retienen."
          },
          {
            "titulo": "Generación de gráficos y tableros con IA",
            "intuicion": "Además de números, la IA crea gráficos listos para una presentación directiva. Describe lo que quiere ver y lo obtiene sin manejar fórmulas complejas.",
            "puntosClave": [
              "Pida gráficos de tendencia, comparación y participación directamente sobre los datos cargados.",
              "Útil para pasar de la hoja de cálculo a una historia visual clara.",
              "Siempre valide que el gráfico refleje fielmente los datos."
            ],
            "accion": "Convierta su próximo reporte en 3 gráficos clave generados con IA y úselos en el comité directivo."
          },
          {
            "titulo": "Resúmenes ejecutivos automáticos",
            "intuicion": "A partir de varias fuentes, la IA puede redactar un informe de gestión de una página con lo esencial para decidir. El directivo lee conclusiones, no planillas.",
            "puntosClave": [
              "Combine datos de conciliación bancaria, discrepancias y fraude y ocupación en un solo resumen.",
              "Pida estructura fija: logros, alertas, cifras clave y recomendaciones.",
              "Estandarizar el formato facilita el seguimiento mes a mes."
            ],
            "accion": "Diseñe la plantilla de su 'informe de una página' y automatice su primer borrador con IA cada mes."
          },
          {
            "titulo": "Límites y verificación: el juicio del directivo manda",
            "intuicion": "La IA acelera, pero puede equivocarse o malinterpretar. El valor del directivo es saber qué preguntar y detectar cuándo un resultado no tiene sentido.",
            "puntosClave": [
              "Verifique cifras críticas contra la fuente antes de decidir o comunicar.",
              "Desconfíe de resultados 'demasiado redondos' o sin explicación del origen.",
              "Documente los supuestos usados en cada análisis para poder auditarlo."
            ],
            "accion": "Establezca una regla simple: ningún dato generado por IA se presenta a dirección sin una verificación de la cifra principal."
          }
        ]
      },
      {
        "number": 5,
        "title": "Automatización del Ciclo de conciliación bancaria y Modelos de Probabilidad de Glosa IA",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender cómo la IA automatiza las etapas del ciclo de conciliación bancaria y pre-radicación en Finanzas",
          "Diferenciar rigurosamente entre Facturación Expuesta y Pérdida Esperada (Expected Loss) calibrada con IA",
          "Interpretar modelos predictivos supervisados (XGBoost/LightGBM) y métricas de desempeño (ROC-AUC, Precisión, Recall)",
          "Utilizar la explicabilidad de factores SHAP para identificar la causa raíz de una objeción antes de radicar",
          "Implementar matrices de decisión con semáforo STP (Straight-Through Processing) vs. Retención preventiva"
        ],
        "practicalActivity": "Laboratorio con el Simulador de Probabilidad de Glosa IA: Evaluación en vivo de los casos FAC-002, FAC-003 y FAC-006 del dataset, análisis del impacto de factores SHAP y formulación del plan de subsanación médica y tarifaria.",
        "downloads": [
          {
            "title": "Guía Especializada: Análisis Predictivo y Probabilidad de Glosa IA",
            "file": "descargas/modulo-analitica-predictiva-probabilidad-glosa.docx",
            "format": "DOCX"
          },
          {
            "title": "Caso de Estudio: Dataset y Dashboard Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Informe Oficial de Auditoría Emitido por ChatGPT",
            "file": "descargas/Reporte_profesional_glosas_cuentas_medicas.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Modelos Predictivos y Probabilidad de Glosa IA (Machine Learning Supervisado y SHAP)",
            "intuicion": "A diferencia de un LLM que redacta texto, un modelo predictivo calcula una probabilidad matemática exacta entre 0% y 100% de que una factura sea objetada, analizando patrones no lineales entre códigos de diagnóstico, procedimientos, manuales tarifarios y la bancos corresponsales pagadora antes de enviar la cuenta.",
            "puntosClave": [
              "Resolviendo la limitante de datos: Confundir conciliación bancaria expuesta ($79.6M en Nueva EPS) con glosa efectiva sobreestima el riesgo; el modelo calcula la Pérdida Esperada real: Monto Glosado × Probabilidad IA.",
              "Algoritmos supervisados (XGBoost, Random Forest) calibrados con Platt Scaling para asegurar que un 80% signifique que 8 de cada 10 facturas similares sufrieron glosa.",
              "Explicabilidad SHAP: Convierte la IA en 'caja de cristal', indicando al analista financiero exactamente qué variable corregir (ej. +28% por autorización vencida, -15% por escala Glasgow).",
              "Semáforo operativo pre-radicación: Verde (<25%) Pase directo STP; Amarillo (25-60%) Auditoría concurrente focalizada; Rojo (>60%) Retener y subsanar en origen."
            ],
            "accion": "Configure en el simulador los parámetros de corte de su institución para que al menos el 50% de las cuentas de bajo riesgo pasen en Straight-Through Processing sin demora."
          },
          {
            "titulo": "El ciclo de conciliación bancaria en Finanzas y sus puntos críticos",
            "intuicion": "La conciliación bancaria en salud es una cadena: admisión → prestación → registro → codificación → conciliación bancaria → radicación → analista financieroía → cobro. Un error temprano se arrastra hasta el final y termina en glosa. La IA puede vigilar cada eslabón.",
            "puntosClave": [
              "Los errores más costosos nacen temprano: en admisión (derechos) y codificación (CIE-10/CUPS).",
              "Cada punto de la cadena es una oportunidad de control automático antes de avanzar.",
              "Medir el 'retrabajo' por etapa revela dónde la IA rinde más."
            ],
            "accion": "Dibuje el ciclo de conciliación bancaria de Sector Financiero & Bancario y marque en rojo las 3 etapas donde hoy se originan más errores. Ahí se priorizan los controles con IA."
          },
          {
            "titulo": "Detección automática de errores de codificación",
            "intuicion": "Un modelo puede aprender qué combinaciones de diagnóstico, procedimiento y tarifa son coherentes y cuáles no, y alertar antes de facturar, como un corrector que marca incoherencias.",
            "puntosClave": [
              "Cruza CIE-10 (diagnóstico), CUPS (procedimiento) y tarifa contractual para detectar inconsistencias.",
              "Reduce discrepancias y fraude por pertinencia y por codificación, de las más frecuentes.",
              "Aprende de los errores históricos de Sector Financiero & Bancario para mejorar con el tiempo."
            ],
            "accion": "Reúna ejemplos reales de inconsistencias diagnóstico–procedimiento detectadas en auditoría; son los casos de entrenamiento de un validador automático."
          },
          {
            "titulo": "Prevalidación inteligente de RIPS",
            "intuicion": "Antes de radicar, la IA revisa el RIPS completo (estructura, coherencia y completitud) y devuelve una lista de correcciones. Es revisar el examen antes de entregarlo.",
            "puntosClave": [
              "Valida estructura, coherencia clínica y completitud en segundos.",
              "Reduce devoluciones por errores formales y acelera la radicación.",
              "Libera al equipo de la revisión manual repetitiva."
            ],
            "accion": "Mida hoy la tasa de devolución de RIPS por errores formales; será la línea base para evaluar el impacto de una prevalidación con IA."
          },
          {
            "titulo": "Alertas de discrepancias y fraude recurrentes",
            "intuicion": "Si ciertas facturas siempre se glosan por el mismo motivo, la IA puede aprender ese patrón y avisar 'ésta tiene alta probabilidad de glosa' antes de enviarla.",
            "puntosClave": [
              "Asigna a cada factura una probabilidad de glosa y su motivo probable.",
              "Permite corregir antes de radicar, no después de ser objetada.",
              "Convierte la gestión de discrepancias y fraude de reactiva a preventiva."
            ],
            "accion": "Identifique los 5 motivos de glosa más repetidos; cada uno es una regla de alerta temprana que puede empezar a aplicarse incluso de forma manual."
          },
          {
            "titulo": "Auditoría inteligente de cuentas médicas",
            "intuicion": "En lugar de revisar al azar o el 100% manualmente, la IA prioriza las cuentas con mayor riesgo o mayor valor, enfocando al analista financiero donde más importa.",
            "puntosClave": [
              "Cruza soportes, tarifas, contratos y normativa para detectar cobros inconsistentes o subdeclarados.",
              "Prioriza la muestra de analista financieroía por riesgo y por impacto económico.",
              "Aumenta hallazgos sin aumentar el tamaño del equipo."
            ],
            "accion": "Defina un criterio de priorización por valor y riesgo para la auditoría concurrente; es el primer paso hacia una auditoría asistida por IA."
          },
          {
            "titulo": "Automatización de la conciliación de cartera",
            "intuicion": "Cruzar lo pagado contra lo radicado es tedioso y propenso a error. La IA empareja pagos y facturas, resalta diferencias y prioriza qué cobrar primero.",
            "puntosClave": [
              "Automatiza el cruce pagos–facturas e identifica partidas pendientes.",
              "Prioriza la gestión de cobro por antigüedad y monto.",
              "Mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Estime cuántas horas/mes dedica el equipo a conciliar cartera; ese tiempo es el ahorro potencial directo de automatizarla."
          },
          {
            "titulo": "Casos reales de IA en conciliación bancaria en la región",
            "intuicion": "Otros ya recorrieron el camino. Aprender de sus resultados (y errores) evita reinventar la rueda y ayuda a fijar metas realistas de mejora.",
            "puntosClave": [
              "Resultados típicos: reducción de discrepancias y fraude, menor tiempo de radicación, mayor recuperación de cartera.",
              "El éxito depende más de datos y procesos ordenados que de la herramienta elegida.",
              "Los pilotos acotados y medibles son la mejor forma de empezar."
            ],
            "accion": "Fije una meta cuantitativa inicial (p. ej. reducir discrepancias y fraude 2 puntos en 6 meses) inspirada en un caso comparable y hágala el objetivo del primer piloto."
          }
        ]
      },
      {
        "number": 6,
        "title": "Optimización Operativa: Predicción de Demanda y Automatización de Admisiones",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender modelos de predicción de demanda aplicados a urgencias y consulta externa",
          "Conocer estrategias de IA para reducir no-shows y optimizar agendas operaciones financieras",
          "Explorar la automatización de procesos de admisiones y autorizaciones con aseguradoras",
          "Evaluar la viabilidad de implementar estas soluciones en el contexto de Sector Financiero & Bancario"
        ],
        "practicalActivity": "Diagramación del Flujo As-Is vs. To-Be: Los líderes descargan la plantilla editable de PowerPoint y rediseñan el proceso de admisiones optimizado con IA.",
        "downloads": [
          {
            "title": "Plantilla Editable: Diagrama de Flujo de Procesos",
            "file": "descargas/plantilla-diagrama-flujo-procesos.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Predicción de demanda en urgencias",
            "intuicion": "Así como se predice el clima, se puede anticipar cuántos pacientes llegarán a urgencias por hora o día, para tener el personal justo: ni saturado ni ocioso.",
            "puntosClave": [
              "Usa series temporales y variables como día, hora, clima y estacionalidad.",
              "Permite planear turnos y recursos con anticipación.",
              "Mejora la atención y controla el costo de personal."
            ],
            "accion": "Consiga al menos un año de datos de llegadas a urgencias; sin histórico suficiente no hay predicción confiable."
          },
          {
            "titulo": "Predicción de demanda en consulta externa",
            "intuicion": "Conocer la demanda esperada por especialidad evita agendas vacías o sobrecargadas y mejora el uso de la capacidad instalada.",
            "puntosClave": [
              "Detecta patrones estacionales y efecto de campañas de promoción y prevención.",
              "Optimiza la oferta de citas por especialidad.",
              "Reduce tiempos de espera y mejora satisfacción."
            ],
            "accion": "Analice la demanda histórica de 2-3 especialidades críticas e identifique sus picos para ajustar la oferta de agenda."
          },
          {
            "titulo": "Reducción de inasistencias (no-shows)",
            "intuicion": "Cada cita perdida es capacidad desperdiciada e ingreso no generado. La IA identifica quién probablemente faltará y activa recordatorios dirigidos.",
            "puntosClave": [
              "Modelos que estiman la probabilidad de inasistencia por paciente.",
              "Recordatorios personalizados (SMS, WhatsApp, llamada) a los de mayor riesgo.",
              "Permite sobreagendar de forma controlada para compensar."
            ],
            "accion": "Mida su tasa de no-show actual y el ingreso asociado; es el caso de negocio que justifica un sistema de recordatorios inteligente."
          },
          {
            "titulo": "Optimización de agendas médicas",
            "intuicion": "Asignar citas no es solo llenar espacios: es equilibrar duración esperada, prioridad clínica y recursos. Los algoritmos encuentran la mejor combinación.",
            "puntosClave": [
              "Considera duración esperada, perfil del paciente, recursos y prioridad.",
              "Reduce tiempos muertos y mejora el flujo de pacientes.",
              "Equilibra carga entre profesionales."
            ],
            "accion": "Revise las reglas actuales de agendamiento y detecte una regla rígida que genere tiempos muertos; es la primera candidata a optimizar."
          },
          {
            "titulo": "Automatización de admisiones",
            "intuicion": "Buena parte de la admisión es verificar datos y derechos, tareas repetitivas que un flujo automatizado o un chatbot pueden resolver, dejando al personal los casos complejos.",
            "puntosClave": [
              "Pre-registro de pacientes y verificación automática de derechos con aseguradoras.",
              "Menos filas, menos errores de digitación y datos más completos para facturar.",
              "Datos de admisión correctos previenen discrepancias y fraude aguas abajo."
            ],
            "accion": "Cronometre el tiempo promedio de una admisión manual e identifique qué verificaciones podrían hacerse automáticamente."
          },
          {
            "titulo": "Automatización de autorizaciones",
            "intuicion": "Las autorizaciones dependen de ir y venir con las aseguradoras. Integrar sistemas vía API permite verificar coberturas y seguir el estado en tiempo real, sin llamadas ni correos manuales.",
            "puntosClave": [
              "Integración vía API con plataformas de aseguradoras.",
              "Verificación automática de coberturas y seguimiento de estado en tiempo real.",
              "Reduce demoras que retrasan la atención y el cobro."
            ],
            "accion": "Liste las aseguradoras con las que Sector Financiero & Bancario tramita más autorizaciones y verifique cuáles ofrecen integración por API; ahí está el mayor ahorro."
          },
          {
            "titulo": "Del ahorro operativo al impacto financiero",
            "intuicion": "Optimizar operaciones no es solo comodidad: se traduce en pesos. Menos no-shows, mejor ocupación y admisiones más limpias impactan directamente el resultado.",
            "puntosClave": [
              "La eficiencia operativa reduce costos y aumenta ingresos por mejor uso de capacidad.",
              "Admisiones y autorizaciones correctas disminuyen discrepancias y fraude y aceleran el cobro.",
              "El impacto debe medirse con KPIs claros para sostener la inversión."
            ],
            "accion": "Para cada mejora operativa que proponga, exprese el beneficio en una cifra financiera estimada; así gana respaldo de la dirección."
          }
        ]
      },
      {
        "number": 7,
        "title": "Protección de Datos Sensibles en Finanzas y Cumplimiento Normativo",
        "moduleId": 4,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender el marco legal colombiano (Ley 1581 de 2012) para datos de Finanzas",
          "Identificar riesgos de uso de IA con historias clínicas digitales (Resolución 866 de 2021)",
          "Conocer técnicas de anonimización y seudonimización aplicables",
          "Diseñar políticas institucionales de uso de IA seguras y auditables"
        ],
        "practicalActivity": "Taller de políticas corporativas: Redacción de la Política de Uso Responsable de IA de Sector Financiero & Bancario con herramientas aprobadas y protocolos de contingencia.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Ley 1581 de 2012 (Habeas Data) aplicada a la IA",
            "intuicion": "Los datos de los pacientes tienen dueño: el paciente. La ley fija cómo se pueden usar. Antes de alimentar cualquier IA con datos personales, hay que cumplir estas reglas.",
            "puntosClave": [
              "Principios de finalidad, libertad, veracidad y seguridad en el tratamiento de datos.",
              "Los datos de Finanzas son 'sensibles': protección reforzada y usos restringidos.",
              "El consentimiento y la finalidad declarada limitan para qué se pueden usar los datos en IA."
            ],
            "accion": "Verifique que las finalidades declaradas en sus políticas de datos cubran el uso analítico; si no, actualícelas antes de iniciar proyectos de IA."
          },
          {
            "titulo": "Resolución 866 de 2021 y custodia de la historia clínica",
            "intuicion": "La historia clínica debe guardarse, protegerse y poder rastrearse quién la consulta. Cualquier IA que la toque debe respetar esas mismas exigencias.",
            "puntosClave": [
              "Requisitos de gestión, custodia y conservación de la historia clínica digital.",
              "Trazabilidad de accesos y respaldo de la información.",
              "Aplica también a los sistemas de IA que procesen o accedan a esos registros."
            ],
            "accion": "Exija a cualquier proveedor de IA que demuestre trazabilidad de accesos y respaldo conforme a la norma antes de contratarlo."
          },
          {
            "titulo": "Qué son los datos sensibles en Finanzas",
            "intuicion": "No todos los datos pesan igual. Diagnósticos, tratamientos e información genética son especialmente delicados y su filtración puede dañar a la persona y a la institución.",
            "puntosClave": [
              "Incluyen diagnósticos, tratamientos, antecedentes e información genética.",
              "Requieren el mayor nivel de protección y justificación de uso.",
              "Su manejo indebido conlleva sanciones y daño reputacional."
            ],
            "accion": "Clasifique qué campos de sus bases son sensibles y establezca que nunca salgan hacia herramientas externas sin anonimizar."
          },
          {
            "titulo": "Riesgos de usar IA externa con datos de pacientes",
            "intuicion": "Pegar datos en una IA pública es como enviarlos fuera de la empresa. Existen riesgos de filtración, de re-identificación y de transferencia internacional de datos.",
            "puntosClave": [
              "Filtración: la información podría quedar fuera del control de Sector Financiero & Bancario.",
              "Re-identificación: datos 'anónimos' mal tratados pueden volver a identificar a una persona.",
              "Transferencia internacional: muchos servicios almacenan datos en otros países."
            ],
            "accion": "Defina una lista de herramientas aprobadas y prohibidas, y la regla de anonimizar siempre antes de usar IA externa."
          },
          {
            "titulo": "Anonimización y seudonimización",
            "intuicion": "Se puede aprovechar el valor de los datos sin exponer a las personas: quitando o reemplazando lo que identifica. Así se usa IA con menor riesgo legal.",
            "puntosClave": [
              "Anonimizar: eliminar de forma irreversible los identificadores.",
              "Seudonimizar: reemplazar identificadores por códigos reversibles bajo control.",
              "Técnicas como k-anonimato y privacidad diferencial reducen el riesgo de re-identificación."
            ],
            "accion": "Cree un procedimiento estándar de anonimización para los conjuntos de datos que su equipo use en análisis con IA."
          },
          {
            "titulo": "Consentimiento informado para el uso de IA",
            "intuicion": "Cuando los datos de un paciente se procesan con IA, surge la pregunta: ¿hace falta un permiso adicional? La respuesta depende de la finalidad y de cómo se declararon los usos.",
            "puntosClave": [
              "El uso debe estar cubierto por la finalidad autorizada por el titular.",
              "Usos nuevos o distintos pueden requerir consentimiento adicional.",
              "La transparencia con el paciente reduce riesgos legales y reputacionales."
            ],
            "accion": "Revise con el área jurídica si los consentimientos actuales cubren el tratamiento analítico y ajuste los formatos si es necesario."
          },
          {
            "titulo": "Política corporativa de uso de IA",
            "intuicion": "Una política clara evita improvisaciones. Define qué herramientas se pueden usar, con qué datos y quién responde. Es el 'manual de tránsito' de la IA en Sector Financiero & Bancario.",
            "puntosClave": [
              "Herramientas aprobadas y datos prohibidos, por escrito.",
              "Proceso para evaluar y aprobar nuevas herramientas.",
              "Responsables y protocolo ante incidentes de datos."
            ],
            "accion": "Impulse la aprobación de una 'Política de Uso Responsable de IA' en Sector Financiero & Bancario; sin ella, cada área improvisará con riesgos distintos."
          }
        ]
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
          "Conocer fundamentos de ciberseguridad para proteger plataformas de Finanzas"
        ],
        "practicalActivity": "Debate y protocolo de mitigación: Análisis de un modelo de auditoría con sesgo histórico de objeción y establecimiento del protocolo de revisión humana.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Qué es el sesgo algorítmico en conciliación bancaria y auditoría",
            "intuicion": "Si la IA aprende de datos históricos injustos, repetirá esa injusticia. Por ejemplo, si cierto servicio siempre fue más glosado, el modelo podría penalizarlo de forma desproporcionada.",
            "puntosClave": [
              "El sesgo nace en los datos de entrenamiento, no en una mala intención del modelo.",
              "Puede llevar a decisiones sistemáticamente erróneas contra un servicio, especialidad o aseguradora.",
              "Detectarlo exige monitorear los resultados por grupos, no solo el promedio."
            ],
            "accion": "Pida a cualquier proveedor de IA que muestre cómo mide y controla el sesgo de su modelo antes de confiar en sus decisiones."
          },
          {
            "titulo": "Tipos de sesgo y cómo detectarlos",
            "intuicion": "El sesgo tiene varias formas. Reconocerlas ayuda a hacer las preguntas correctas y a no aceptar resultados a ciegas.",
            "puntosClave": [
              "Selección: los datos no representan bien la realidad; Medición: se capturó mal la información.",
              "Confirmación: se busca lo que confirma lo que ya se creía; Histórico: se hereda una injusticia pasada.",
              "Se mitigan con datos representativos, revisión humana y analista financieroía periódica del modelo."
            ],
            "accion": "Antes de adoptar un modelo, pregunte con qué datos se entrenó y si representan la operación real de Sector Financiero & Bancario."
          },
          {
            "titulo": "Human-in-the-Loop: la IA apoya, el humano decide",
            "intuicion": "En procesos críticos, la IA nunca debe decidir sola. Propone y el experto valida. Es como el copiloto: ayuda a volar, pero el comandante manda.",
            "puntosClave": [
              "La IA sugiere y prioriza; la persona confirma, corrige y aprende.",
              "Esencial donde hay dinero, derechos o Finanzas en juego.",
              "El circuito de corrección humana también mejora el modelo con el tiempo."
            ],
            "accion": "Diseñe todo flujo de IA en Sector Financiero & Bancario con un punto obligatorio de validación humana antes de ejecutar decisiones críticas."
          },
          {
            "titulo": "Responsabilidad institucional ante errores de la IA",
            "intuicion": "Si un modelo aprueba una factura incorrecta, la responsabilidad no desaparece: sigue siendo de la institución. Por eso hay que definir desde el inicio quién responde.",
            "puntosClave": [
              "La IA es una herramienta; la responsabilidad legal y contractual es de Sector Financiero & Bancario.",
              "Debe definirse quién supervisa, quién aprueba y quién responde por cada decisión.",
              "La documentación de controles es clave para demostrar diligencia."
            ],
            "accion": "Establezca una matriz de responsabilidades (RACI) para cada proceso con IA: quién supervisa, aprueba y responde."
          },
          {
            "titulo": "Transparencia y explicabilidad",
            "intuicion": "Un modelo que no explica por qué decidió algo es una 'caja negra' peligrosa en salud. Los directivos deben exigir que las decisiones sean comprensibles y auditables.",
            "puntosClave": [
              "Caja negra vs. caja blanca: prefiera modelos que justifiquen sus salidas.",
              "La explicabilidad permite auditar, corregir y defender decisiones ante EPS o entes de control.",
              "Es también un requisito creciente de la regulación."
            ],
            "accion": "Incluya 'explicabilidad' como requisito obligatorio en la evaluación de cualquier solución de IA para Sector Financiero & Bancario."
          },
          {
            "titulo": "Ciberseguridad para entornos de salud",
            "intuicion": "Los banco o entidad financieraes son blanco frecuente de ataques porque manejan datos valiosos. Proteger los sistemas de IA y los datos es parte inseparable del proyecto.",
            "puntosClave": [
              "El ransomware ha paralizado instituciones de Finanzas reales.",
              "Medidas básicas: autenticación multifactor, protección de equipos y segmentación de redes.",
              "La seguridad es responsabilidad compartida entre Sector Financiero & Bancario y sus proveedores."
            ],
            "accion": "Verifique que las medidas básicas (MFA, respaldos, segmentación) estén activas antes de conectar nuevos sistemas de IA."
          },
          {
            "titulo": "Plan de respuesta ante incidentes",
            "intuicion": "No se trata de si ocurrirá un incidente, sino de cuándo. Tener un plan listo reduce el daño y el tiempo de recuperación.",
            "puntosClave": [
              "Protocolo claro ante brechas de datos o ataques: contener, notificar, recuperar.",
              "Roles y responsables definidos antes de la crisis.",
              "Obligaciones de notificación a autoridades y titulares según la norma."
            ],
            "accion": "Asegúrese de que Sector Financiero & Bancario cuente con un protocolo de incidentes escrito y probado, que cubra también los sistemas de IA."
          }
        ]
      },
      {
        "number": 9,
        "title": "Marco de Priorización de Proyectos de IA y Decisión Buy/Partner/Build",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
          "Aplicar la matriz Impacto vs. Esfuerzo para priorizar iniciativas de IA en Finanzas",
          "Evaluar la decisión estratégica Buy/Partner/Build para cada proyecto de Sector Financiero & Bancario",
          "Definir KPIs de éxito operativo y financiero (tasa de discrepancias y fraude, días cartera, costo por factura)",
          "Construir un roadmap de implementación a 12 meses alineado con la estrategia"
        ],
        "practicalActivity": "Taller de priorización en PowerPoint: Clasificación de 8 proyectos reales de Sector Financiero & Bancario en los cuadrantes de Quick Wins, Estratégicos o Tácticos.",
        "downloads": [
          {
            "title": "Plantilla Editable: Matriz Impacto vs. Esfuerzo",
            "file": "descargas/plantilla-matriz-impacto-esfuerzo.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Marco de priorización: Impacto vs. Esfuerzo",
            "intuicion": "No todo proyecto de IA vale la pena primero. La clave es comparar cuánto valor genera contra cuánto cuesta implementarlo, y empezar por lo más rentable y fácil.",
            "puntosClave": [
              "Impacto: reducción de errores, tiempos y costos, o recuperación de ingresos.",
              "Esfuerzo: datos disponibles, tecnología, integración y cambio organizacional.",
              "Evita el error de empezar por el proyecto más vistoso en lugar del más rentable."
            ],
            "accion": "Puntúe cada idea de IA de su área en impacto y esfuerzo (escala 1-5); tendrá un ranking objetivo para decidir."
          },
          {
            "titulo": "La matriz de priorización en cuatro cuadrantes",
            "intuicion": "Al ubicar los proyectos en una matriz, aparecen cuatro grupos claros. Los 'Quick Wins' (mucho impacto, poco esfuerzo) son por donde se debe empezar para generar confianza.",
            "puntosClave": [
              "Quick Wins: alto impacto, bajo esfuerzo — prioridad inmediata.",
              "Estratégicos: alto impacto, alto esfuerzo — planear a mediano plazo.",
              "Tácticos y 'a evitar': bajo impacto — postergar o descartar."
            ],
            "accion": "Ubique su lista de proyectos en la matriz y comprometa recursos primero con un Quick Win para demostrar valor temprano."
          },
          {
            "titulo": "Decisión Buy / Partner / Build",
            "intuicion": "Ante una necesidad de IA hay tres caminos: comprar una solución lista, aliarse con un proveedor, o construirla internamente. Cada uno conviene en situaciones distintas.",
            "puntosClave": [
              "Buy: rápido y probado, menos personalizable — ideal para problemas estándar.",
              "Partner: equilibra personalización y velocidad — útil para necesidades específicas.",
              "Build: máximo control y costo — solo si es un diferenciador central y hay capacidad."
            ],
            "accion": "Para su proyecto prioritario, evalúe las tres opciones con criterios de costo, tiempo y especificidad, y justifique la elección."
          },
          {
            "titulo": "KPIs de éxito para proyectos de IA en Sector Financiero & Bancario",
            "intuicion": "Lo que no se mide no se puede mejorar ni defender. Antes de iniciar, hay que definir cómo se verá el éxito en números.",
            "puntosClave": [
              "Ejemplos: tasa de discrepancias y fraude, días de respuesta a discrepancias y fraude, % de facturas aprobadas al primer envío, costo por factura, tiempo de radicación.",
              "Cada KPI necesita una línea base (valor actual) y una meta.",
              "Pocos KPIs claros valen más que muchos indicadores difusos."
            ],
            "accion": "Para cada proyecto, defina 3 KPIs con su valor actual y su meta a 12 meses antes de aprobar la inversión."
          },
          {
            "titulo": "Cálculo de ROI de proyectos de IA",
            "intuicion": "El ROI responde la pregunta de la dirección: ¿vale la pena? Se comparan los ahorros y mayores ingresos contra el costo total del proyecto.",
            "puntosClave": [
              "Costos: licencias, implementación, capacitación y mantenimiento.",
              "Beneficios: menos discrepancias y fraude, menos retrabajo, mayor recuperación de cartera.",
              "Incluya el punto de equilibrio: en cuántos meses se recupera la inversión."
            ],
            "accion": "Construya un ROI simple a 3 años para su proyecto prioritario; aunque sea estimado, enfoca la conversación con la dirección."
          },
          {
            "titulo": "Gestión del cambio organizacional",
            "intuicion": "La tecnología falla más por la gente que por la máquina. Si el equipo no entiende ni confía en la IA, el proyecto no se adopta por bueno que sea.",
            "puntosClave": [
              "Comunicar el 'para qué' y cómo beneficia al trabajo diario.",
              "Capacitar a los usuarios finales y acompañar la transición.",
              "Usar Quick Wins para generar confianza y vencer la resistencia."
            ],
            "accion": "Incluya en todo proyecto un plan de comunicación y capacitación; sin adopción, no hay retorno."
          },
          {
            "titulo": "Roadmap de implementación a 12 meses",
            "intuicion": "Un buen proyecto avanza por fases: primero un piloto pequeño, luego se valida y después se escala. Así se controla el riesgo y se aprende en el camino.",
            "puntosClave": [
              "Fases: piloto → validación → escalamiento, con hitos y responsables.",
              "Métricas de seguimiento en cada fase para decidir si continuar.",
              "Un roadmap realista evita sobrepromesas y frustración."
            ],
            "accion": "Dibuje el roadmap de su proyecto prioritario con 3 fases, hitos y responsables para los próximos 12 meses."
          }
        ]
      },
      {
        "number": 10,
        "title": "Taller Final — Proyecto Integrador: Business Case de IA para Sector Financiero & Bancario",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
          "Formular un Business Case completo de IA para un proceso real de Sector Financiero & Bancario",
          "Integrar conocimientos de los módulos en una propuesta ejecutiva formal",
          "Presentar y defender el proyecto ante directivos con argumentos técnicos y financieros",
          "Recibir retroalimentación y acordar hoja de ruta de implementación"
        ],
        "practicalActivity": "Comité de Inversión y Defensa de Proyectos: Presentación ejecutiva de 10 minutos por equipo defendiendo su Business Case ante el facilitador y directivos.",
        "downloads": [
          {
            "title": "Plantilla de Business Case de IA",
            "file": "descargas/plantilla-business-case-ia.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Presentar un Proyecto de Tecnología a la Alta Dirección",
            "file": "descargas/guia-presentar-proyecto-alta-direccion.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Estructura de un Business Case de IA",
            "intuicion": "Un Business Case es la historia que convence a la dirección de invertir: qué problema resolvemos, cómo, cuánto cuesta y qué ganamos. Ordenarlo bien es la mitad del éxito.",
            "puntosClave": [
              "Componentes: problema, solución, alcance, beneficios, costos, riesgos, cronograma y equipo.",
              "Debe caber en pocas páginas y hablar el lenguaje de la dirección: valor y riesgo.",
              "Cada afirmación se respalda con datos, no con opiniones."
            ],
            "accion": "Use la plantilla de Business Case del programa como esqueleto y compétela con los datos reales de su proceso."
          },
          {
            "titulo": "Selección del proceso a intervenir",
            "intuicion": "El primer proyecto debe elegirse con cabeza: un proceso con dolor claro, datos disponibles y alto impacto. Facturación, discrepancias y fraude, admisiones o autorizaciones son candidatos naturales en Sector Financiero & Bancario.",
            "puntosClave": [
              "Prefiera procesos con problema medible y datos históricos disponibles.",
              "Equilibre impacto esperado con viabilidad de implementación.",
              "Un alcance acotado aumenta la probabilidad de éxito del piloto."
            ],
            "accion": "Elija un único proceso para su Business Case y resista la tentación de abarcar todo a la vez."
          },
          {
            "titulo": "Definir el problema con datos",
            "intuicion": "'Tenemos muchas discrepancias y fraude' no es un problema accionable. 'La tasa de discrepancias y fraude es del 18% y cuesta X al mes' sí lo es. Los números convierten una queja en un caso de inversión.",
            "puntosClave": [
              "Cuantifique la situación actual: tiempos, errores, costos y volúmenes.",
              "Defina la brecha: dónde estamos vs. dónde queremos llegar.",
              "La línea base permitirá demostrar el impacto después."
            ],
            "accion": "Reúna las 3-4 cifras que describen el problema de su proceso elegido; son el corazón del Business Case."
          },
          {
            "titulo": "Diseño de la solución",
            "intuicion": "Aquí se conecta el problema con la tecnología: qué tipo de IA, qué datos necesita, cómo se integra con lo existente y si se compra, se asocia o se construye.",
            "puntosClave": [
              "Especifique tipo de IA, datos requeridos e integraciones necesarias.",
              "Defina el modelo de implementación (Buy/Partner/Build) y por qué.",
              "Describa el flujo con Human-in-the-Loop donde corresponda."
            ],
            "accion": "Dibuje el flujo 'antes vs. después' de su proceso con la solución propuesta; hace tangible el cambio."
          },
          {
            "titulo": "Análisis financiero del proyecto",
            "intuicion": "La dirección aprueba con números. Hay que mostrar cuánto cuesta el primer año, cuánto se ahorra o recupera y en cuánto tiempo se paga solo.",
            "puntosClave": [
              "Inversión año 1 vs. ahorros proyectados años 1-3.",
              "Punto de equilibrio e indicadores de rentabilidad (ROI).",
              "Sea conservador: mejor prometer menos y cumplir."
            ],
            "accion": "Calcule el ahorro mensual estimado y el mes de equilibrio de su proyecto; son las cifras que más pesan en la decisión."
          },
          {
            "titulo": "Plan de implementación",
            "intuicion": "Una buena idea sin plan de ejecución no se aprueba. Hay que mostrar fases realistas, responsables y de qué depende el éxito.",
            "puntosClave": [
              "Fases con hitos, equipo responsable y dependencias técnicas y organizacionales.",
              "Un piloto inicial medible antes de escalar.",
              "Riesgos identificados con su plan de mitigación."
            ],
            "accion": "Añada a su Business Case un cronograma simple de 3 fases con responsables claros."
          },
          {
            "titulo": "Presentación ejecutiva del proyecto",
            "intuicion": "Diez minutos bien usados valen más que cincuenta diapositivas. La dirección quiere escuchar: problema → solución → impacto → inversión → plan → siguiente paso.",
            "puntosClave": [
              "Cuente una historia clara y respaldada en datos, no una lista de funciones técnicas.",
              "Anticipe las preguntas difíciles (riesgos, datos, costos).",
              "Cierre siempre con una petición concreta (el 'siguiente paso')."
            ],
            "accion": "Prepare su presentación de 10 minutos siguiendo la secuencia problema→solución→impacto→inversión→plan→siguiente paso y ensáyela."
          }
        ]
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
          {
            "title": "Canvas de Arquitectura de Agentes de IA",
            "file": "descargas/canvas-agentes-ia.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Del Asistente Pasivo al Agente Autónomo en Finanzas",
            "intuicion": "Un LLM común te redacta una carta si se lo pides; un Agente Autónomo en salud detecta que llegó una objeción de glosa al buzón institucional, abre el sistema banco o entidad financieraario, descarga los soportes clínicos, valida la pertinencia y deja listo el borrador de respuesta.",
            "puntosClave": [
              "Arquitectura ReAct: Bucle iterativo de 'Razonar -> Actuar -> Observar el resultado -> Siguiente paso'.",
              "Descomposición de objetivos complejos: Dividir 'conciliar cartera mensual' en subtareas autónomas.",
              "Diferencia entre automatización rígida (RPA) e IA Agéntica con comprensión de contexto clínico."
            ],
            "accion": "Mapear un cuello de botella en Sector Financiero & Bancario donde hoy un analista pasa horas copiando datos entre el ERP y el correo para evaluar su viabilidad como agente."
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
            "intuicion": "Permite que el agente recuerde acuerdos contractuales específicos de cada bancos corresponsales y excepciones negociadas sin tener que repetírselas en cada consulta.",
            "puntosClave": [
              "Memoria a corto plazo (Context Window): Historial de la transacción actual en curso.",
              "Memoria a largo plazo (Bases Vectoriales): Políticas de contratación y acuerdos comerciales históricos.",
              "Memoria procedimental: Instrucciones permanentes de estilo institucional y directrices inviolables de Sector Financiero & Bancario."
            ],
            "accion": "Crear el catálogo de 'Reglas Inmutables de Auditoría' que ningún agente de Sector Financiero & Bancario puede violar en sus resoluciones."
          },
          {
            "titulo": "Niveles de Autonomía y Barreras de Seguridad (Guardrails)",
            "intuicion": "Establecer qué decisiones puede tomar el agente por su cuenta y cuáles requieren aprobación obligatoria de un coordinador.",
            "puntosClave": [
              "Escala de autonomía: L1 Asistente, L2 Copiloto con confirmación previa, L3 Autónomo con monitoreo por excepción.",
              "Límites transaccionales: Aprobación autónoma de cuentas de hasta $500,000 COP; montos superiores exigen firma de analista financiero sénior.",
              "Prevención de bucles infinitos: Límite estricto de máximo 6 iteraciones de razonamiento por caso."
            ],
            "accion": "Definir la matriz de umbrales económicos de aprobación autónoma para su departamento."
          }
        ]
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
          {
            "title": "Plantilla de Orquestación Multi-Agente y Matriz HITL",
            "file": "descargas/plantilla-orquestacion-multiagente.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Arquitecturas Multi-Agente: Células Operativas Especializadas",
            "intuicion": "En lugar de sobrecargar a un solo agente con todo el ciclo de cuentas médicas, se crea un equipo de agentes especializados: uno extrae datos, otro audita tarifas y otro redacta el informe.",
            "puntosClave": [
              "Patrón Supervisor-Trabajadores: Un agente orquestador recibe el caso, lo clasifica y asigna subtareas a los agentes especialistas.",
              "Patrón Maker-Checker (Creador y Revisor): Un agente redacta la respuesta a la glosa y un segundo agente (analista financiero legal) revisa que cumpla la Resolución 3047 antes de emitirla.",
              "Reducción de alucinaciones y fatiga de contexto al mantener las instrucciones de cada agente concisas y enfocadas."
            ],
            "accion": "Dibujar el diagrama de roles de una célula de 3 agentes para el proceso de auditoría concurrente en Sector Financiero & Bancario."
          },
          {
            "titulo": "Orquestación y Enrutamiento al Experto Humano (HITL)",
            "intuicion": "El agente no es un reemplazo ciego del analista financiero; es su filtro principal. Cuando un caso tiene inconsistencias clínicas o legales complejas, lo traslada con un resumen ejecutivo.",
            "puntosClave": [
              "Score de Confianza (Confidence Threshold): Si la certeza del modelo en la objeción es menor al 85%, el caso pasa a bandeja humana.",
              "Handoff estructurado: El agente entrega al humano el resumen del problema, los artículos normativos aplicables y la recomendación tentativa.",
              "Aprendizaje continuo: La corrección efectuada por el analista financiero humano se guarda como ejemplo 'Few-Shot' para casos futuros."
            ],
            "accion": "Establecer la lista de las 5 causas de glosa que siempre deben pasar a revisión de un auditor médico humano."
          },
          {
            "titulo": "Medición de Confiabilidad y Tasa de Autonomía (STP)",
            "intuicion": "Medir exactamente qué porcentaje de facturas o analista financieroías se resolvieron sin intervención humana (Straight-Through Processing).",
            "puntosClave": [
              "Métrica STP: (Casos 100% autónomos sin error) / (Total casos procesados) * 100.",
              "Costo por transacción: Comparativa del costo por cuenta médica manual ($5,000 COP) vs. costo agéntico ($350 COP en cómputo/tokens).",
              "Trazabilidad inmutable: Registro de cada pensamiento, consulta de herramienta y respuesta emitida para fines de analista financieroía externa."
            ],
            "accion": "Calcular la meta de STP para el primer trimestre de implementación del escuadrón agéntico en Sector Financiero & Bancario."
          }
        ]
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
          {
            "title": "Manual de RAG Empresarial con Cero Alucinación",
            "file": "descargas/manual-rag-empresarial-cero-alucinacion.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "RAG Empresarial: Conectando IA con la Base de Conocimiento de Sector Financiero & Bancario",
            "intuicion": "Conectar el modelo de lenguaje a los manuales de contratación, resoluciones del Ministerio y acuerdos con bancos corresponsales sin peligro de fuga de datos ni reentrenamientos costosos.",
            "puntosClave": [
              "Separación de conocimiento y razonamiento: El LLM pone la capacidad de redactar y sintetizar; la base de datos documental de Sector Financiero & Bancario pone los hechos verídicos.",
              "Eliminación de alucinaciones: El modelo se condiciona mediante prompts de Grounding estricto a responder únicamente citando el párrafo exacto.",
              "Actualización en tiempo real: Si el Ministerio de Salud emite una nueva circular hoy, basta subir el PDF para que la IA la aplique de inmediato."
            ],
            "accion": "Seleccionar los 5 documentos normativos o tarifarios prioritarios para conformar la primera base RAG de Sector Financiero & Bancario."
          },
          {
            "titulo": "Chunking Semántico y Búsqueda Híbrida en Finanzas",
            "intuicion": "Si cortas un manual tarifario en pedazos al azar, separas el código CUPS de su descripción y tarifa. El troceo inteligente conserva tablas y reglas completas.",
            "puntosClave": [
              "Chunking jerárquico y semántico: Fragmentar respetando capítulos, artículos y tablas tarifarias completas.",
              "Búsqueda híbrida (Dense + BM25): Combina búsqueda por conceptos ('biopsia guiada por ecografía') con búsqueda por códigos exactos ('381101').",
              "Re-ranking: Un segundo modelo reclasifica los 10 mejores fragmentos para garantizar que el más pertinente quede en el contexto superior."
            ],
            "accion": "Diseñar la plantilla de metadata obligatoria (bancos corresponsales, fecha vigencia, régimen subsidiado/contributivo) para cada documento indexado."
          },
          {
            "titulo": "Evaluación Continua de RAG con el Framework Ragas",
            "intuicion": "Auditar científicamente qué tan fiel y exacto es el sistema antes de permitir que responda consultas reales de analista financieroía.",
            "puntosClave": [
              "Fidelidad (Faithfulness): ¿Todo lo que dijo la respuesta está respaldado en los documentos recuperados o inventó algo?",
              "Relevancia de la respuesta: ¿Respondió concretamente lo que preguntó el directivo?",
              "Relevancia del contexto: ¿El motor de búsqueda trajo los fragmentos correctos o trajo ruido irrelevante?"
            ],
            "accion": "Formular un banco de 10 preguntas de prueba con respuesta dorada verificada por un auditor experto para evaluar el RAG."
          }
        ]
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
          {
            "title": "Calculadora de TCO y Evaluación de Modelos de IA",
            "file": "descargas/plantilla-tco-evaluacion-modelos-ia.xlsx",
            "format": "XLSX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Soberanía de Datos: Modelos Locales vs. Nube Privada",
            "intuicion": "Evaluar cuándo usar modelos de proveedores internacionales (OpenAI, Anthropic, Google) con acuerdos de confidencialidad BAA, y cuándo desplegar modelos de código abierto (Llama 3, Mistral) en servidores propios.",
            "puntosClave": [
              "Cumplimiento de Habeas Data (Ley 1581): Datos clínicos sensibles y restricciones de transferencia transfronteriza.",
              "Modelos de Pesos Abiertos (Open Source): Capacidad de correr modelos de 8B o 70B parámetros en infraestructura local sin enviar un solo byte a internet.",
              "Small Language Models (SLMs): Modelos compactos ultra-rápidos y de costo casi nulo para tareas específicas de extracción y clasificación."
            ],
            "accion": "Clasificar los tipos de datos de Sector Financiero & Bancario en Semáforo Verde (públicos/normas), Amarillo (administrativos) y Rojo (datos clínicos con reserva)."
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
              "Latencia y disponibilidad: Tiempos de respuesta para no degradar la experiencia de los analista financieroes y facturadores.",
              "Seguridad y Prompt Injection: Filtros de entrada para evitar que usuarios maliciosos engañen al modelo o extraigan prompts del sistema."
            ],
            "accion": "Definir el límite de presupuesto mensual de API y los indicadores clave del dashboard de monitoreo de IA de Sector Financiero & Bancario."
          }
        ]
      }
    ]
  },
  "logistica": {
    "id": "logistica",
    "name": "Cadena de Suministro & Logística",
    "org": "Supply Chain & Operaciones",
    "badge": "Logística & WMS",
    "description": "Pronóstico avanzado de demanda, optimización de inventarios, gestión inteligente de almacenes (WMS), compras automatizadas y ruteo de flotas.",
    "icon": "Truck",
    "primaryColor": "#B45309",
    "accentColor": "#F59E0B",
    "sessions": [
      {
        "number": 1,
        "title": "¿Qué es la IA? Desmitificando Conceptos para Líderes Administrativos",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
          "Comprender qué es la Inteligencia Artificial y por qué es relevante para la gestión en Cadena de Suministro",
          "Diferenciar entre Machine Learning, Deep Learning e IA Generativa con ejemplos del sector",
          "Adquirir vocabulario técnico esencial para interactuar con proveedores tecnológicos",
          "Identificar aplicaciones actuales de IA en el sector la industria logística y manufactura"
        ],
        "practicalActivity": "Ejercicio de autoevaluación: Cada participante identifica 3 tareas de su rol actual que podrían beneficiarse de IA y las clasifica según tipo de IA (ML, Deep Learning, IA Generativa). Discusión grupal sobre expectativas y temores frente a la IA en Supply Chain & Operaciones.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Qué es (y qué no es) la Inteligencia Artificial",
            "intuicion": "La IA no es un robot que piensa como una persona. Es un software que aprende a reconocer patrones en grandes cantidades de datos y, con base en ellos, hace predicciones o genera texto. Piense en el coordinador logístico experto que, tras revisar miles de facturas, 'ya sabe' cuáles van a ser glosadas: la IA hace algo parecido, pero a gran escala y en segundos.",
            "puntosClave": [
              "La IA actual es 'estrecha': resuelve muy bien una tarea específica (predecir quiebres de stock y demoras, clasificar diagnósticos), pero no tiene criterio general ni entiende el contexto como un humano.",
              "No reemplaza el juicio profesional: produce sugerencias y probabilidades, no verdades absolutas. La decisión final sigue siendo del directivo o coordinador logístico.",
              "Funciona con datos: sin datos de calidad no hay IA útil. La ventaja competitiva de Supply Chain & Operaciones está en los datos históricos de gestión de inventarios y quiebres de stock y demoras que ya posee."
            ],
            "accion": "Liste 3 decisiones repetitivas de su área que hoy toma 'por experiencia'. Esas son las mejores candidatas iniciales para apoyo de IA, porque ya existe un patrón que un modelo puede aprender."
          },
          {
            "titulo": "Machine Learning: cómo aprende una máquina",
            "intuicion": "En lugar de programar reglas una por una ('si el código CUPS no coincide con el diagnóstico, marca error'), al modelo se le muestran miles de ejemplos ya resueltos y él solo deduce las reglas. Es aprender con ejemplos, no con un manual.",
            "puntosClave": [
              "Aprendizaje supervisado: se entrena con ejemplos etiquetados (facturas 'glosadas' vs 'aprobadas') para predecir casos nuevos. Es el más usado en gestión de inventarios y coordinador logísticoía.",
              "Aprendizaje no supervisado: el modelo agrupa datos similares sin etiquetas previas; útil para descubrir patrones ocultos (segmentos de EPS con comportamiento parecido).",
              "Aprendizaje por refuerzo: el sistema aprende por ensayo y error con recompensas; menos común en lo administrativo, más en optimización de agendas."
            ],
            "accion": "Identifique en qué proceso de Supply Chain & Operaciones existe un histórico con 'resultado conocido' (glosada/no glosada, pagada/no pagada). Ese histórico es el combustible para un primer modelo supervisado."
          },
          {
            "titulo": "Deep Learning y procesamiento de texto médico",
            "intuicion": "El Deep Learning es un tipo de ML más potente que imita en forma simplificada las conexiones del cerebro. Es lo que permite 'leer' texto libre: una glosa escrita en lenguaje natural, una nota clínica o un contrato con una proveedores y transportistas.",
            "puntosClave": [
              "Destaca en datos no estructurados: texto, imágenes y audio, que son el 80% de la información en Cadena de Suministro.",
              "Requiere más datos y más capacidad de cómputo que el ML tradicional; por eso suele consumirse como servicio en la nube, no construirse desde cero.",
              "Es la base de los asistentes como ChatGPT y Claude, que pueden resumir y responder sobre documentos extensos."
            ],
            "accion": "Reúna ejemplos de documentos en texto libre que hoy su equipo lee manualmente (respuestas a quiebres de stock y demoras, actas, contratos). Son los procesos donde el Deep Learning aporta más ahorro de tiempo."
          },
          {
            "titulo": "IA Generativa y modelos de lenguaje (LLM)",
            "intuicion": "Un LLM es como un asistente que ha leído millones de documentos y puede redactar, resumir o explicar bajo demanda. Usted le da una instrucción en español y le devuelve un borrador en segundos.",
            "puntosClave": [
              "Genera contenido nuevo: borradores de respuestas a quiebres de stock y demoras, resúmenes de resoluciones, actas de reunión, informes ejecutivos.",
              "No consulta una base de datos oficial por defecto: responde a partir de lo aprendido, por eso puede equivocarse y siempre hay que verificar.",
              "Su gran valor para directivos es la productividad: convierte horas de redacción y lectura en minutos de revisión."
            ],
            "accion": "Elija una tarea de escritura recurrente (por ejemplo, el acta semanal del comité de quiebres de stock y demoras) y propóngala como primer caso piloto de IA generativa en su equipo."
          },
          {
            "titulo": "Vocabulario clave para hablar con proveedores de tecnología",
            "intuicion": "No necesita programar, pero sí entender diez palabras para no depender de que un proveedor le 'traduzca' todo. Así negocia mejor y detecta promesas infladas.",
            "puntosClave": [
              "Modelo / entrenamiento / inferencia: el modelo se 'entrena' una vez con datos y luego 'infiere' (predice) sobre casos nuevos.",
              "Prompt, token y API: el prompt es la instrucción, el token es la unidad de cobro, y la API es el 'enchufe' que conecta la IA con los sistemas de Supply Chain & Operaciones.",
              "Alucinación, fine-tuning y RAG: la alucinación es un dato inventado; fine-tuning y RAG son formas de hacer que el modelo use el conocimiento propio de Supply Chain & Operaciones."
            ],
            "accion": "Antes de la próxima reunión con un proveedor, prepare 3 preguntas usando estos términos (p. ej. '¿su solución usa RAG con nuestros contratos o responde de forma genérica?')."
          },
          {
            "titulo": "Panorama de la IA en Cadena de Suministro en Colombia y la región",
            "intuicion": "La IA ya no es futurista en el sector: gestión de inventarios electrónica, validación de RIPS y coordinador logísticoía asistida son realidades en operación. El reto no es técnico, es de adopción y gobierno.",
            "puntosClave": [
              "Casos consolidados: validación automática de RIPS, detección temprana de quiebres de stock y demoras, optimización de urgencias y agendamiento.",
              "Las instituciones que lideran no son las que más tecnología compran, sino las que mejor ordenan sus datos y procesos.",
              "El soporte administrativo (el negocio de Supply Chain & Operaciones) es uno de los terrenos de mayor retorno, por su alto volumen y reglas claras."
            ],
            "accion": "Seleccione una institución referente comparable y documente un caso de uso que ya tenga en operación; servirá de 'norte' para el roadmap de Supply Chain & Operaciones."
          },
          {
            "titulo": "Mitos y realidades de la IA en la gestión en Cadena de Suministro",
            "intuicion": "El mayor riesgo no es que la IA se equivoque, sino usarla sin supervisión o no usarla por miedo. Ni magia infalible ni amenaza: es una herramienta con límites claros.",
            "puntosClave": [
              "Mito: 'la IA reemplazará a los coordinador logísticoes'. Realidad: los vuelve más productivos al filtrar lo rutinario y dejarles los casos complejos.",
              "Mito: 'si lo dice la IA, es correcto'. Realidad: puede alucinar; toda salida crítica se valida contra la norma y los soportes.",
              "Mito: 'necesitamos un gran equipo técnico'. Realidad: muchas soluciones se consumen como servicio y se gobiernan con criterio de negocio."
            ],
            "accion": "Recoja los temores reales de su equipo frente a la IA y conviértalos en una lista de 'reglas de uso responsable'; reducir el miedo es el primer paso de adopción."
          }
        ]
      },
      {
        "number": 2,
        "title": "El Ecosistema de Datos en Cadena de Suministro y Diagnóstico de Madurez Digital",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
          "Comprender los tipos de datos que maneja una organización de Cadena de Suministro y su valor para la IA",
          "Diferenciar entre datos estructurados (tablas, RIPS) y no estructurados (quiebres de stock y demoras, notas clínicas)",
          "Evaluar el nivel de madurez digital de Supply Chain & Operaciones utilizando el marco de diagnóstico interactivo",
          "Identificar brechas de datos y oportunidades de mejora para habilitar proyectos de IA"
        ],
        "practicalActivity": "Taller interactivo de autodiagnóstico: Cada equipo completa la herramienta de Diagnóstico de Madurez Digital en la plataforma (6 dimensiones) y analiza sus brechas inmediatas.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Los tres tipos de datos de una organización de salud",
            "intuicion": "Antes de automatizar, hay que saber qué información se tiene. En salud conviven tres mundos: lo administrativo (facturas, admisiones), lo clínico (historias, órdenes) y lo operativo (camas, turnos, tiempos).",
            "puntosClave": [
              "Datos administrativos: el corazón del negocio de Supply Chain & Operaciones (gestión de inventarios, autorizaciones, radicación, cartera).",
              "Datos clínicos: soportan y justifican el cobro; su calidad determina si una factura se aprueba o se glosa.",
              "Datos operativos: miden la eficiencia (ocupación, tiempos de respuesta) y alimentan modelos de predicción."
            ],
            "accion": "Dibuje un inventario de las fuentes de datos de su área: qué sistema las genera, en qué formato y quién es responsable. Es el primer paso de cualquier proyecto de IA."
          },
          {
            "titulo": "Datos estructurados vs. no estructurados",
            "intuicion": "Lo estructurado cabe en una tabla de Excel (columnas de factura, valor, proveedores y transportistas). Lo no estructurado es texto o imagen libre (una glosa redactada, una historia clínica). La IA necesita ambos, pero se procesan distinto.",
            "puntosClave": [
              "Estructurado: fácil de analizar, ideal para predicción y tableros; ejemplo: tablas de RIPS y cartera.",
              "No estructurado: el 80% de la información; requiere IA de lenguaje para extraer datos de quiebres de stock y demoras, notas y contratos.",
              "El mayor valor aparece al cruzar ambos: predecir una glosa (estructurado) y redactar su respuesta citando el soporte (no estructurado)."
            ],
            "accion": "Marque en su inventario cuáles fuentes son estructuradas y cuáles no. Las no estructuradas suelen ser las de mayor carga manual y mayor oportunidad de automatización."
          },
          {
            "titulo": "RIPS: estructura, errores comunes y automatización",
            "intuicion": "El RIPS es el 'pasaporte' de cada atención ante el sistema de salud. Si viene mal diligenciado, la factura se devuelve o se glosa. La IA puede revisarlo antes de radicar, como un corrector ortográfico para gestión de inventarios.",
            "puntosClave": [
              "Errores frecuentes: inconsistencia entre diagnóstico (CIE-10) y procedimiento (CUPS), datos de usuario incompletos, valores fuera de contrato.",
              "La prevalidación automática detecta estos errores en segundos, antes del envío, reduciendo devoluciones formales.",
              "Un RIPS limpio acelera la radicación y mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Pida a su equipo las 5 causas más frecuentes de devolución de RIPS del último trimestre. Esa lista es el requerimiento funcional de un futuro validador con IA."
          },
          {
            "titulo": "Calidad de datos: 'basura entra, basura sale'",
            "intuicion": "Un modelo de IA es tan bueno como los datos que recibe. Si la información de gestión de inventarios tiene errores, duplicados o vacíos, las predicciones también estarán equivocadas.",
            "puntosClave": [
              "Dimensiones de calidad: completitud, consistencia, exactitud y oportunidad.",
              "Los datos faltantes y duplicados son el problema #1 que frena proyectos de analítica en Cadena de Suministro.",
              "Invertir en calidad de datos rinde aunque no se implemente IA: mejora reportes, coordinador logísticoía y decisiones hoy."
            ],
            "accion": "Defina 3 reglas mínimas de calidad para los datos de su proceso (p. ej. 'ninguna factura sin código de proveedores y transportistas') y mídalas mensualmente."
          },
          {
            "titulo": "Marco de madurez digital en 5 niveles",
            "intuicion": "No se pasa de cero a IA de un salto. Hay una escalera: desde procesos manuales y en papel hasta procesos optimizados con datos en tiempo real. Saber en qué escalón está Supply Chain & Operaciones evita comprar tecnología que no se puede sostener.",
            "puntosClave": [
              "Niveles: Inicial, Repetible, Definido, Gestionado y Optimizado.",
              "Cada área puede estar en un nivel distinto: gestión de inventarios más avanzada, autorizaciones más manual.",
              "La madurez no es solo tecnología: incluye procesos documentados, roles y cultura de datos."
            ],
            "accion": "Ubique cada proceso de su área en uno de los 5 niveles y fije una meta realista: subir un escalón en 6 meses, no saltar al último."
          },
          {
            "titulo": "Infraestructura tecnológica necesaria",
            "intuicion": "Para habilitar IA no hace falta un centro de datos propio. Hoy casi todo se consume en la nube, pero sí se requiere que los sistemas 'conversen' entre sí mediante integraciones.",
            "puntosClave": [
              "Elementos clave: almacenamiento en la nube, APIs de integración e interoperabilidad entre HIS, ERP y gestión de inventarios electrónica.",
              "La interoperabilidad (que los sistemas compartan datos) suele ser el mayor cuello de botella, no la IA en sí.",
              "Empezar en la nube reduce inversión inicial y permite escalar según resultados."
            ],
            "accion": "Liste los sistemas que su área usa a diario e identifique cuáles NO se comunican entre sí. Esas desconexiones son el primer obstáculo a resolver."
          },
          {
            "titulo": "Gobernanza de datos: roles y responsabilidades",
            "intuicion": "Los datos necesitan dueños, igual que los procesos. Sin alguien responsable de que la información esté correcta y protegida, ningún proyecto de IA se sostiene.",
            "puntosClave": [
              "Roles típicos: Data Owner (responsable del negocio) y Data Steward (responsable operativo de la calidad).",
              "Políticas de acceso: quién puede ver qué, especialmente con datos sensibles de pacientes.",
              "Ciclo de vida del dato: creación, uso, archivo y eliminación segura."
            ],
            "accion": "Asigne, aunque sea de forma informal, un responsable de calidad de datos por cada proceso clave de su área. La gobernanza empieza con nombres y apellidos."
          }
        ]
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
        "practicalActivity": "Laboratorio en vivo en el Prompt Studio: Cada participante practica técnicas de prompting con casos reales de redacción de respuestas a quiebres de stock y demoras y síntesis de resoluciones del Ministerio.",
        "downloads": [
          {
            "title": "Guía de Prompt Engineering para Directivos en Salud",
            "file": "descargas/guia-prompt-engineering-openai.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "ChatGPT, Claude y Copilot: cuál usar y cuándo",
            "intuicion": "Son asistentes parecidos pero con fortalezas distintas. Elegir bien es como elegir la herramienta correcta: no se clava un tornillo con un martillo.",
            "puntosClave": [
              "ChatGPT: muy versátil, analiza archivos y datos; buen punto de partida general.",
              "Claude: destaca con documentos largos (contratos, resoluciones extensas) por su gran capacidad de lectura.",
              "Copilot: integrado en Office (Word, Excel, Teams), ideal si Supply Chain & Operaciones ya trabaja en ese ecosistema."
            ],
            "accion": "Defina una recomendación simple para su equipo: qué herramienta usar para cada tarea (analizar Excel, resumir una norma larga, redactar en Word) y comuníquela."
          },
          {
            "titulo": "Anatomía de un buen prompt",
            "intuicion": "Pedirle algo a la IA es como delegar en un asistente nuevo: entre más claro el encargo, mejor el resultado. Un buen prompt tiene contexto, instrucción, formato y límites.",
            "puntosClave": [
              "Contexto: quién es usted y para qué ('Soy coordinador logístico de cuentas de una IPS...').",
              "Instrucción y formato: qué quiere y cómo ('resume en 5 viñetas', 'en tono formal').",
              "Restricciones: qué evitar ('no inventes cifras', 'usa solo el texto que te doy')."
            ],
            "accion": "Cree una plantilla de prompt estándar para su área y guárdela. Reutilizarla garantiza calidad y ahorra tiempo a todo el equipo."
          },
          {
            "titulo": "Técnicas avanzadas: Chain-of-Thought, Few-Shot y Role Prompting",
            "intuicion": "Hay tres trucos que elevan mucho la calidad: pedirle que razone paso a paso, darle ejemplos de lo que espera, y asignarle un rol experto.",
            "puntosClave": [
              "Chain-of-Thought: 'explica tu razonamiento paso a paso' mejora el análisis de casos complejos.",
              "Few-Shot: mostrar 2-3 ejemplos del resultado deseado alinea el estilo y el formato.",
              "Role Prompting: 'actúa como coordinador logístico senior de cuentas médicas' enfoca la respuesta."
            ],
            "accion": "Tome un prompt que ya use y mejórelo aplicando las tres técnicas. Compare el antes y el después con su equipo."
          },
          {
            "titulo": "Caso práctico: análisis de reportes operativos",
            "intuicion": "En lugar de leer un informe de gestión de inventarios de 20 páginas, puede pedirle a la IA que señale tendencias, anomalías y puntos de atención. Usted pasa de leer todo a revisar lo importante.",
            "puntosClave": [
              "Cargue el reporte y pida: tendencias del periodo, 3 anomalías y posibles causas.",
              "Solicite siempre que indique el dato en que se basa, para poder verificarlo.",
              "Úselo como primer filtro, no como conclusión final: el criterio es suyo."
            ],
            "accion": "En la próxima revisión mensual, procese su reporte con IA y lleve a la reunión las anomalías detectadas ya priorizadas."
          },
          {
            "titulo": "Caso práctico: síntesis de normativa en Cadena de Suministro",
            "intuicion": "Las resoluciones y circulares son largas y densas. La IA puede resumirlas, extraer lo que cambia y traducir el 'legalés' a acciones concretas para la operación.",
            "puntosClave": [
              "Pida: resumen ejecutivo, qué cambia frente a la norma anterior e impacto en el proceso de gestión de inventarios.",
              "Con documentos largos, Claude o NotebookLM dan mejores resultados.",
              "Verifique siempre los artículos citados contra el documento oficial (riesgo de alucinación)."
            ],
            "accion": "Cuando salga la próxima circular del Ministerio o la Supersalud, genere un resumen con IA y compártalo en una página con su equipo."
          },
          {
            "titulo": "Caso práctico: minutas, actas y respuestas a quiebres de stock y demoras",
            "intuicion": "Redactar actas y sustentaciones de quiebres de stock y demoras consume horas. La IA genera un primer borrador sólido en minutos; el experto solo ajusta y aprueba.",
            "puntosClave": [
              "Actas: a partir de notas sueltas, obtiene un acta con decisiones, responsables y compromisos.",
              "Respuestas a quiebres de stock y demoras: redacta la sustentación con base en la normativa y los soportes que usted entrega.",
              "Mantenga un tono y formato institucional mediante una plantilla reutilizable."
            ],
            "accion": "Estandarice un prompt para respuestas a quiebres de stock y demoras por tipo (pertinencia, tarifas, soportes) y mida cuánto tiempo ahorra el equipo al mes."
          },
          {
            "titulo": "Seguridad: qué información NO compartir con IA externa",
            "intuicion": "Las herramientas públicas de IA están fuera de Supply Chain & Operaciones. Compartir datos identificables de pacientes puede violar la ley de protección de datos. La regla de oro: anonimizar antes de pegar.",
            "puntosClave": [
              "Nunca comparta datos que identifiquen al paciente (nombre, documento, diagnóstico asociado a la persona).",
              "Trabaje con datos agregados o anonimizados; reemplace identificadores por códigos.",
              "Defina herramientas aprobadas y configure, cuando exista, la opción de no usar sus datos para entrenamiento."
            ],
            "accion": "Redacte una regla de una página de 'qué sí y qué no' compartir con IA y hágala firmar por el equipo antes de habilitar su uso."
          }
        ]
      },
      {
        "number": 4,
        "title": "Taller Práctico: Análisis de Datos Operativos y Financieros sin Programar",
        "moduleId": 2,
        "duration": "2 horas",
        "level": "Básico-Práctico",
        "objectives": [
          "Cargar y analizar archivos Excel/CSV con herramientas de IA sin escribir código",
          "Extraer insights de datos de gestión de inventarios, ocupación de camas y tiempos de respuesta a quiebres de stock y demoras",
          "Generar visualizaciones y resúmenes ejecutivos automáticos a partir de datos reales",
          "Identificar patrones y anomalías en datos operativos usando IA como asistente analítico"
        ],
        "practicalActivity": "Taller hands-on: Carga de dataset simulado de gestión de inventarios de un centro de distribución o almacén, identificación de 3 anomalías críticas y generación de un reporte ejecutivo de 1 página.",
        "downloads": [
          {
            "title": "Caso de Estudio: Dataset Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Guía del Caso de Estudio: Analítica de Cuentas Médicas",
            "file": "descargas/caso-estudio-analitica-cuentas-medicas.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Analizar Datos con ChatGPT",
            "file": "descargas/guia-analizar-datos-con-chatgpt.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Cargar archivos a la IA para analizarlos sin programar",
            "intuicion": "Herramientas como ChatGPT permiten subir un Excel y hacerle preguntas en español, como si tuviera un analista de datos disponible 24/7. No se escribe una sola línea de código.",
            "puntosClave": [
              "Suba el archivo y describa sus columnas para que el modelo entienda el contexto.",
              "Pida análisis concretos: totales, promedios, comparaciones, casos atípicos.",
              "Revise siempre una muestra de los resultados contra el archivo original."
            ],
            "accion": "Prepare un Excel 'limpio' de un proceso suyo (sin datos identificables) y practique 5 preguntas de negocio sobre él."
          },
          {
            "titulo": "Análisis de datos de gestión de inventarios",
            "intuicion": "Con los datos de gestión de inventarios, la IA responde en minutos preguntas que hoy toman horas: ¿qué proveedores y transportistas concentra la cartera? ¿cuántas facturas se aprueban al primer envío?",
            "puntosClave": [
              "Indicadores clave: volumen por EPS, tasa de aprobación al primer envío, facturado vs. recaudado, antigüedad de cartera.",
              "Permite comparar periodos y detectar deterioros antes de que se vuelvan crónicos.",
              "Genera la base para priorizar la gestión de cobro."
            ],
            "accion": "Defina los 5 indicadores de gestión de inventarios que más le importan y cree un prompt que los calcule siempre igual, mes a mes."
          },
          {
            "titulo": "Análisis de ocupación y demanda",
            "intuicion": "Los datos de ocupación cuentan una historia: cuándo hay saturación, cuánto se quedan los pacientes y cuándo sobra o falta capacidad. La IA ayuda a leer esa historia rápido.",
            "puntosClave": [
              "Métricas: ocupación por servicio, estancia promedio, rotación de camas.",
              "Patrones estacionales que permiten anticipar picos de demanda.",
              "Insumo directo para planear personal y recursos."
            ],
            "accion": "Analice un mes de ocupación con IA e identifique el día/hora de mayor presión. Úselo para una recomendación concreta de programación."
          },
          {
            "titulo": "Análisis de quiebres de stock y demoras",
            "intuicion": "Las quiebres de stock y demoras son dinero retenido. La IA agrupa y ordena las quiebres de stock y demoras para ver con claridad por qué nos glosan, quién y cuánto recuperamos.",
            "puntosClave": [
              "Métricas: tiempo promedio de respuesta, tasa de recuperación, quiebres de stock y demoras por tipo (pertinencia, tarifas, soportes).",
              "Detección de patrones recurrentes que revelan fallas de proceso aguas arriba.",
              "Prioriza dónde enfocar esfuerzos para recuperar más con menos trabajo."
            ],
            "accion": "Clasifique las quiebres de stock y demoras del último trimestre por tipo y causa raíz; lleve a comité las 3 causas que más valor retienen."
          },
          {
            "titulo": "Generación de gráficos y tableros con IA",
            "intuicion": "Además de números, la IA crea gráficos listos para una presentación directiva. Describe lo que quiere ver y lo obtiene sin manejar fórmulas complejas.",
            "puntosClave": [
              "Pida gráficos de tendencia, comparación y participación directamente sobre los datos cargados.",
              "Útil para pasar de la hoja de cálculo a una historia visual clara.",
              "Siempre valide que el gráfico refleje fielmente los datos."
            ],
            "accion": "Convierta su próximo reporte en 3 gráficos clave generados con IA y úselos en el comité directivo."
          },
          {
            "titulo": "Resúmenes ejecutivos automáticos",
            "intuicion": "A partir de varias fuentes, la IA puede redactar un informe de gestión de una página con lo esencial para decidir. El directivo lee conclusiones, no planillas.",
            "puntosClave": [
              "Combine datos de gestión de inventarios, quiebres de stock y demoras y ocupación en un solo resumen.",
              "Pida estructura fija: logros, alertas, cifras clave y recomendaciones.",
              "Estandarizar el formato facilita el seguimiento mes a mes."
            ],
            "accion": "Diseñe la plantilla de su 'informe de una página' y automatice su primer borrador con IA cada mes."
          },
          {
            "titulo": "Límites y verificación: el juicio del directivo manda",
            "intuicion": "La IA acelera, pero puede equivocarse o malinterpretar. El valor del directivo es saber qué preguntar y detectar cuándo un resultado no tiene sentido.",
            "puntosClave": [
              "Verifique cifras críticas contra la fuente antes de decidir o comunicar.",
              "Desconfíe de resultados 'demasiado redondos' o sin explicación del origen.",
              "Documente los supuestos usados en cada análisis para poder auditarlo."
            ],
            "accion": "Establezca una regla simple: ningún dato generado por IA se presenta a dirección sin una verificación de la cifra principal."
          }
        ]
      },
      {
        "number": 5,
        "title": "Automatización del Ciclo de gestión de inventarios y Modelos de Probabilidad de Glosa IA",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender cómo la IA automatiza las etapas del ciclo de gestión de inventarios y pre-radicación en Cadena de Suministro",
          "Diferenciar rigurosamente entre Facturación Expuesta y Pérdida Esperada (Expected Loss) calibrada con IA",
          "Interpretar modelos predictivos supervisados (XGBoost/LightGBM) y métricas de desempeño (ROC-AUC, Precisión, Recall)",
          "Utilizar la explicabilidad de factores SHAP para identificar la causa raíz de una objeción antes de radicar",
          "Implementar matrices de decisión con semáforo STP (Straight-Through Processing) vs. Retención preventiva"
        ],
        "practicalActivity": "Laboratorio con el Simulador de Probabilidad de Glosa IA: Evaluación en vivo de los casos FAC-002, FAC-003 y FAC-006 del dataset, análisis del impacto de factores SHAP y formulación del plan de subsanación médica y tarifaria.",
        "downloads": [
          {
            "title": "Guía Especializada: Análisis Predictivo y Probabilidad de Glosa IA",
            "file": "descargas/modulo-analitica-predictiva-probabilidad-glosa.docx",
            "format": "DOCX"
          },
          {
            "title": "Caso de Estudio: Dataset y Dashboard Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Informe Oficial de Auditoría Emitido por ChatGPT",
            "file": "descargas/Reporte_profesional_glosas_cuentas_medicas.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Modelos Predictivos y Probabilidad de Glosa IA (Machine Learning Supervisado y SHAP)",
            "intuicion": "A diferencia de un LLM que redacta texto, un modelo predictivo calcula una probabilidad matemática exacta entre 0% y 100% de que una factura sea objetada, analizando patrones no lineales entre códigos de diagnóstico, procedimientos, manuales tarifarios y la proveedores y transportistas pagadora antes de enviar la cuenta.",
            "puntosClave": [
              "Resolviendo la limitante de datos: Confundir gestión de inventarios expuesta ($79.6M en Nueva EPS) con glosa efectiva sobreestima el riesgo; el modelo calcula la Pérdida Esperada real: Monto Glosado × Probabilidad IA.",
              "Algoritmos supervisados (XGBoost, Random Forest) calibrados con Platt Scaling para asegurar que un 80% signifique que 8 de cada 10 facturas similares sufrieron glosa.",
              "Explicabilidad SHAP: Convierte la IA en 'caja de cristal', indicando al coordinador logístico exactamente qué variable corregir (ej. +28% por autorización vencida, -15% por escala Glasgow).",
              "Semáforo operativo pre-radicación: Verde (<25%) Pase directo STP; Amarillo (25-60%) Auditoría concurrente focalizada; Rojo (>60%) Retener y subsanar en origen."
            ],
            "accion": "Configure en el simulador los parámetros de corte de su institución para que al menos el 50% de las cuentas de bajo riesgo pasen en Straight-Through Processing sin demora."
          },
          {
            "titulo": "El ciclo de gestión de inventarios en Cadena de Suministro y sus puntos críticos",
            "intuicion": "La gestión de inventarios en salud es una cadena: admisión → prestación → registro → codificación → gestión de inventarios → radicación → coordinador logísticoía → cobro. Un error temprano se arrastra hasta el final y termina en glosa. La IA puede vigilar cada eslabón.",
            "puntosClave": [
              "Los errores más costosos nacen temprano: en admisión (derechos) y codificación (CIE-10/CUPS).",
              "Cada punto de la cadena es una oportunidad de control automático antes de avanzar.",
              "Medir el 'retrabajo' por etapa revela dónde la IA rinde más."
            ],
            "accion": "Dibuje el ciclo de gestión de inventarios de Supply Chain & Operaciones y marque en rojo las 3 etapas donde hoy se originan más errores. Ahí se priorizan los controles con IA."
          },
          {
            "titulo": "Detección automática de errores de codificación",
            "intuicion": "Un modelo puede aprender qué combinaciones de diagnóstico, procedimiento y tarifa son coherentes y cuáles no, y alertar antes de facturar, como un corrector que marca incoherencias.",
            "puntosClave": [
              "Cruza CIE-10 (diagnóstico), CUPS (procedimiento) y tarifa contractual para detectar inconsistencias.",
              "Reduce quiebres de stock y demoras por pertinencia y por codificación, de las más frecuentes.",
              "Aprende de los errores históricos de Supply Chain & Operaciones para mejorar con el tiempo."
            ],
            "accion": "Reúna ejemplos reales de inconsistencias diagnóstico–procedimiento detectadas en auditoría; son los casos de entrenamiento de un validador automático."
          },
          {
            "titulo": "Prevalidación inteligente de RIPS",
            "intuicion": "Antes de radicar, la IA revisa el RIPS completo (estructura, coherencia y completitud) y devuelve una lista de correcciones. Es revisar el examen antes de entregarlo.",
            "puntosClave": [
              "Valida estructura, coherencia clínica y completitud en segundos.",
              "Reduce devoluciones por errores formales y acelera la radicación.",
              "Libera al equipo de la revisión manual repetitiva."
            ],
            "accion": "Mida hoy la tasa de devolución de RIPS por errores formales; será la línea base para evaluar el impacto de una prevalidación con IA."
          },
          {
            "titulo": "Alertas de quiebres de stock y demoras recurrentes",
            "intuicion": "Si ciertas facturas siempre se glosan por el mismo motivo, la IA puede aprender ese patrón y avisar 'ésta tiene alta probabilidad de glosa' antes de enviarla.",
            "puntosClave": [
              "Asigna a cada factura una probabilidad de glosa y su motivo probable.",
              "Permite corregir antes de radicar, no después de ser objetada.",
              "Convierte la gestión de quiebres de stock y demoras de reactiva a preventiva."
            ],
            "accion": "Identifique los 5 motivos de glosa más repetidos; cada uno es una regla de alerta temprana que puede empezar a aplicarse incluso de forma manual."
          },
          {
            "titulo": "Auditoría inteligente de cuentas médicas",
            "intuicion": "En lugar de revisar al azar o el 100% manualmente, la IA prioriza las cuentas con mayor riesgo o mayor valor, enfocando al coordinador logístico donde más importa.",
            "puntosClave": [
              "Cruza soportes, tarifas, contratos y normativa para detectar cobros inconsistentes o subdeclarados.",
              "Prioriza la muestra de coordinador logísticoía por riesgo y por impacto económico.",
              "Aumenta hallazgos sin aumentar el tamaño del equipo."
            ],
            "accion": "Defina un criterio de priorización por valor y riesgo para la auditoría concurrente; es el primer paso hacia una auditoría asistida por IA."
          },
          {
            "titulo": "Automatización de la conciliación de cartera",
            "intuicion": "Cruzar lo pagado contra lo radicado es tedioso y propenso a error. La IA empareja pagos y facturas, resalta diferencias y prioriza qué cobrar primero.",
            "puntosClave": [
              "Automatiza el cruce pagos–facturas e identifica partidas pendientes.",
              "Prioriza la gestión de cobro por antigüedad y monto.",
              "Mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Estime cuántas horas/mes dedica el equipo a conciliar cartera; ese tiempo es el ahorro potencial directo de automatizarla."
          },
          {
            "titulo": "Casos reales de IA en gestión de inventarios en la región",
            "intuicion": "Otros ya recorrieron el camino. Aprender de sus resultados (y errores) evita reinventar la rueda y ayuda a fijar metas realistas de mejora.",
            "puntosClave": [
              "Resultados típicos: reducción de quiebres de stock y demoras, menor tiempo de radicación, mayor recuperación de cartera.",
              "El éxito depende más de datos y procesos ordenados que de la herramienta elegida.",
              "Los pilotos acotados y medibles son la mejor forma de empezar."
            ],
            "accion": "Fije una meta cuantitativa inicial (p. ej. reducir quiebres de stock y demoras 2 puntos en 6 meses) inspirada en un caso comparable y hágala el objetivo del primer piloto."
          }
        ]
      },
      {
        "number": 6,
        "title": "Optimización Operativa: Predicción de Demanda y Automatización de Admisiones",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender modelos de predicción de demanda aplicados a urgencias y consulta externa",
          "Conocer estrategias de IA para reducir no-shows y optimizar agendas despachos logísticos",
          "Explorar la automatización de procesos de admisiones y autorizaciones con aseguradoras",
          "Evaluar la viabilidad de implementar estas soluciones en el contexto de Supply Chain & Operaciones"
        ],
        "practicalActivity": "Diagramación del Flujo As-Is vs. To-Be: Los líderes descargan la plantilla editable de PowerPoint y rediseñan el proceso de admisiones optimizado con IA.",
        "downloads": [
          {
            "title": "Plantilla Editable: Diagrama de Flujo de Procesos",
            "file": "descargas/plantilla-diagrama-flujo-procesos.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Predicción de demanda en urgencias",
            "intuicion": "Así como se predice el clima, se puede anticipar cuántos pacientes llegarán a urgencias por hora o día, para tener el personal justo: ni saturado ni ocioso.",
            "puntosClave": [
              "Usa series temporales y variables como día, hora, clima y estacionalidad.",
              "Permite planear turnos y recursos con anticipación.",
              "Mejora la atención y controla el costo de personal."
            ],
            "accion": "Consiga al menos un año de datos de llegadas a urgencias; sin histórico suficiente no hay predicción confiable."
          },
          {
            "titulo": "Predicción de demanda en consulta externa",
            "intuicion": "Conocer la demanda esperada por especialidad evita agendas vacías o sobrecargadas y mejora el uso de la capacidad instalada.",
            "puntosClave": [
              "Detecta patrones estacionales y efecto de campañas de promoción y prevención.",
              "Optimiza la oferta de citas por especialidad.",
              "Reduce tiempos de espera y mejora satisfacción."
            ],
            "accion": "Analice la demanda histórica de 2-3 especialidades críticas e identifique sus picos para ajustar la oferta de agenda."
          },
          {
            "titulo": "Reducción de inasistencias (no-shows)",
            "intuicion": "Cada cita perdida es capacidad desperdiciada e ingreso no generado. La IA identifica quién probablemente faltará y activa recordatorios dirigidos.",
            "puntosClave": [
              "Modelos que estiman la probabilidad de inasistencia por paciente.",
              "Recordatorios personalizados (SMS, WhatsApp, llamada) a los de mayor riesgo.",
              "Permite sobreagendar de forma controlada para compensar."
            ],
            "accion": "Mida su tasa de no-show actual y el ingreso asociado; es el caso de negocio que justifica un sistema de recordatorios inteligente."
          },
          {
            "titulo": "Optimización de agendas médicas",
            "intuicion": "Asignar citas no es solo llenar espacios: es equilibrar duración esperada, prioridad clínica y recursos. Los algoritmos encuentran la mejor combinación.",
            "puntosClave": [
              "Considera duración esperada, perfil del paciente, recursos y prioridad.",
              "Reduce tiempos muertos y mejora el flujo de pacientes.",
              "Equilibra carga entre profesionales."
            ],
            "accion": "Revise las reglas actuales de agendamiento y detecte una regla rígida que genere tiempos muertos; es la primera candidata a optimizar."
          },
          {
            "titulo": "Automatización de admisiones",
            "intuicion": "Buena parte de la admisión es verificar datos y derechos, tareas repetitivas que un flujo automatizado o un chatbot pueden resolver, dejando al personal los casos complejos.",
            "puntosClave": [
              "Pre-registro de pacientes y verificación automática de derechos con aseguradoras.",
              "Menos filas, menos errores de digitación y datos más completos para facturar.",
              "Datos de admisión correctos previenen quiebres de stock y demoras aguas abajo."
            ],
            "accion": "Cronometre el tiempo promedio de una admisión manual e identifique qué verificaciones podrían hacerse automáticamente."
          },
          {
            "titulo": "Automatización de autorizaciones",
            "intuicion": "Las autorizaciones dependen de ir y venir con las aseguradoras. Integrar sistemas vía API permite verificar coberturas y seguir el estado en tiempo real, sin llamadas ni correos manuales.",
            "puntosClave": [
              "Integración vía API con plataformas de aseguradoras.",
              "Verificación automática de coberturas y seguimiento de estado en tiempo real.",
              "Reduce demoras que retrasan la atención y el cobro."
            ],
            "accion": "Liste las aseguradoras con las que Supply Chain & Operaciones tramita más autorizaciones y verifique cuáles ofrecen integración por API; ahí está el mayor ahorro."
          },
          {
            "titulo": "Del ahorro operativo al impacto financiero",
            "intuicion": "Optimizar operaciones no es solo comodidad: se traduce en pesos. Menos no-shows, mejor ocupación y admisiones más limpias impactan directamente el resultado.",
            "puntosClave": [
              "La eficiencia operativa reduce costos y aumenta ingresos por mejor uso de capacidad.",
              "Admisiones y autorizaciones correctas disminuyen quiebres de stock y demoras y aceleran el cobro.",
              "El impacto debe medirse con KPIs claros para sostener la inversión."
            ],
            "accion": "Para cada mejora operativa que proponga, exprese el beneficio en una cifra financiera estimada; así gana respaldo de la dirección."
          }
        ]
      },
      {
        "number": 7,
        "title": "Protección de Datos Sensibles en Cadena de Suministro y Cumplimiento Normativo",
        "moduleId": 4,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender el marco legal colombiano (Ley 1581 de 2012) para datos de Cadena de Suministro",
          "Identificar riesgos de uso de IA con historias clínicas digitales (Resolución 866 de 2021)",
          "Conocer técnicas de anonimización y seudonimización aplicables",
          "Diseñar políticas institucionales de uso de IA seguras y auditables"
        ],
        "practicalActivity": "Taller de políticas corporativas: Redacción de la Política de Uso Responsable de IA de Supply Chain & Operaciones con herramientas aprobadas y protocolos de contingencia.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Ley 1581 de 2012 (Habeas Data) aplicada a la IA",
            "intuicion": "Los datos de los pacientes tienen dueño: el paciente. La ley fija cómo se pueden usar. Antes de alimentar cualquier IA con datos personales, hay que cumplir estas reglas.",
            "puntosClave": [
              "Principios de finalidad, libertad, veracidad y seguridad en el tratamiento de datos.",
              "Los datos de Cadena de Suministro son 'sensibles': protección reforzada y usos restringidos.",
              "El consentimiento y la finalidad declarada limitan para qué se pueden usar los datos en IA."
            ],
            "accion": "Verifique que las finalidades declaradas en sus políticas de datos cubran el uso analítico; si no, actualícelas antes de iniciar proyectos de IA."
          },
          {
            "titulo": "Resolución 866 de 2021 y custodia de la historia clínica",
            "intuicion": "La historia clínica debe guardarse, protegerse y poder rastrearse quién la consulta. Cualquier IA que la toque debe respetar esas mismas exigencias.",
            "puntosClave": [
              "Requisitos de gestión, custodia y conservación de la historia clínica digital.",
              "Trazabilidad de accesos y respaldo de la información.",
              "Aplica también a los sistemas de IA que procesen o accedan a esos registros."
            ],
            "accion": "Exija a cualquier proveedor de IA que demuestre trazabilidad de accesos y respaldo conforme a la norma antes de contratarlo."
          },
          {
            "titulo": "Qué son los datos sensibles en Cadena de Suministro",
            "intuicion": "No todos los datos pesan igual. Diagnósticos, tratamientos e información genética son especialmente delicados y su filtración puede dañar a la persona y a la institución.",
            "puntosClave": [
              "Incluyen diagnósticos, tratamientos, antecedentes e información genética.",
              "Requieren el mayor nivel de protección y justificación de uso.",
              "Su manejo indebido conlleva sanciones y daño reputacional."
            ],
            "accion": "Clasifique qué campos de sus bases son sensibles y establezca que nunca salgan hacia herramientas externas sin anonimizar."
          },
          {
            "titulo": "Riesgos de usar IA externa con datos de pacientes",
            "intuicion": "Pegar datos en una IA pública es como enviarlos fuera de la empresa. Existen riesgos de filtración, de re-identificación y de transferencia internacional de datos.",
            "puntosClave": [
              "Filtración: la información podría quedar fuera del control de Supply Chain & Operaciones.",
              "Re-identificación: datos 'anónimos' mal tratados pueden volver a identificar a una persona.",
              "Transferencia internacional: muchos servicios almacenan datos en otros países."
            ],
            "accion": "Defina una lista de herramientas aprobadas y prohibidas, y la regla de anonimizar siempre antes de usar IA externa."
          },
          {
            "titulo": "Anonimización y seudonimización",
            "intuicion": "Se puede aprovechar el valor de los datos sin exponer a las personas: quitando o reemplazando lo que identifica. Así se usa IA con menor riesgo legal.",
            "puntosClave": [
              "Anonimizar: eliminar de forma irreversible los identificadores.",
              "Seudonimizar: reemplazar identificadores por códigos reversibles bajo control.",
              "Técnicas como k-anonimato y privacidad diferencial reducen el riesgo de re-identificación."
            ],
            "accion": "Cree un procedimiento estándar de anonimización para los conjuntos de datos que su equipo use en análisis con IA."
          },
          {
            "titulo": "Consentimiento informado para el uso de IA",
            "intuicion": "Cuando los datos de un paciente se procesan con IA, surge la pregunta: ¿hace falta un permiso adicional? La respuesta depende de la finalidad y de cómo se declararon los usos.",
            "puntosClave": [
              "El uso debe estar cubierto por la finalidad autorizada por el titular.",
              "Usos nuevos o distintos pueden requerir consentimiento adicional.",
              "La transparencia con el paciente reduce riesgos legales y reputacionales."
            ],
            "accion": "Revise con el área jurídica si los consentimientos actuales cubren el tratamiento analítico y ajuste los formatos si es necesario."
          },
          {
            "titulo": "Política corporativa de uso de IA",
            "intuicion": "Una política clara evita improvisaciones. Define qué herramientas se pueden usar, con qué datos y quién responde. Es el 'manual de tránsito' de la IA en Supply Chain & Operaciones.",
            "puntosClave": [
              "Herramientas aprobadas y datos prohibidos, por escrito.",
              "Proceso para evaluar y aprobar nuevas herramientas.",
              "Responsables y protocolo ante incidentes de datos."
            ],
            "accion": "Impulse la aprobación de una 'Política de Uso Responsable de IA' en Supply Chain & Operaciones; sin ella, cada área improvisará con riesgos distintos."
          }
        ]
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
          "Conocer fundamentos de ciberseguridad para proteger plataformas de Cadena de Suministro"
        ],
        "practicalActivity": "Debate y protocolo de mitigación: Análisis de un modelo de auditoría con sesgo histórico de objeción y establecimiento del protocolo de revisión humana.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Qué es el sesgo algorítmico en gestión de inventarios y auditoría",
            "intuicion": "Si la IA aprende de datos históricos injustos, repetirá esa injusticia. Por ejemplo, si cierto servicio siempre fue más glosado, el modelo podría penalizarlo de forma desproporcionada.",
            "puntosClave": [
              "El sesgo nace en los datos de entrenamiento, no en una mala intención del modelo.",
              "Puede llevar a decisiones sistemáticamente erróneas contra un servicio, especialidad o aseguradora.",
              "Detectarlo exige monitorear los resultados por grupos, no solo el promedio."
            ],
            "accion": "Pida a cualquier proveedor de IA que muestre cómo mide y controla el sesgo de su modelo antes de confiar en sus decisiones."
          },
          {
            "titulo": "Tipos de sesgo y cómo detectarlos",
            "intuicion": "El sesgo tiene varias formas. Reconocerlas ayuda a hacer las preguntas correctas y a no aceptar resultados a ciegas.",
            "puntosClave": [
              "Selección: los datos no representan bien la realidad; Medición: se capturó mal la información.",
              "Confirmación: se busca lo que confirma lo que ya se creía; Histórico: se hereda una injusticia pasada.",
              "Se mitigan con datos representativos, revisión humana y coordinador logísticoía periódica del modelo."
            ],
            "accion": "Antes de adoptar un modelo, pregunte con qué datos se entrenó y si representan la operación real de Supply Chain & Operaciones."
          },
          {
            "titulo": "Human-in-the-Loop: la IA apoya, el humano decide",
            "intuicion": "En procesos críticos, la IA nunca debe decidir sola. Propone y el experto valida. Es como el copiloto: ayuda a volar, pero el comandante manda.",
            "puntosClave": [
              "La IA sugiere y prioriza; la persona confirma, corrige y aprende.",
              "Esencial donde hay dinero, derechos o Cadena de Suministro en juego.",
              "El circuito de corrección humana también mejora el modelo con el tiempo."
            ],
            "accion": "Diseñe todo flujo de IA en Supply Chain & Operaciones con un punto obligatorio de validación humana antes de ejecutar decisiones críticas."
          },
          {
            "titulo": "Responsabilidad institucional ante errores de la IA",
            "intuicion": "Si un modelo aprueba una factura incorrecta, la responsabilidad no desaparece: sigue siendo de la institución. Por eso hay que definir desde el inicio quién responde.",
            "puntosClave": [
              "La IA es una herramienta; la responsabilidad legal y contractual es de Supply Chain & Operaciones.",
              "Debe definirse quién supervisa, quién aprueba y quién responde por cada decisión.",
              "La documentación de controles es clave para demostrar diligencia."
            ],
            "accion": "Establezca una matriz de responsabilidades (RACI) para cada proceso con IA: quién supervisa, aprueba y responde."
          },
          {
            "titulo": "Transparencia y explicabilidad",
            "intuicion": "Un modelo que no explica por qué decidió algo es una 'caja negra' peligrosa en salud. Los directivos deben exigir que las decisiones sean comprensibles y auditables.",
            "puntosClave": [
              "Caja negra vs. caja blanca: prefiera modelos que justifiquen sus salidas.",
              "La explicabilidad permite auditar, corregir y defender decisiones ante EPS o entes de control.",
              "Es también un requisito creciente de la regulación."
            ],
            "accion": "Incluya 'explicabilidad' como requisito obligatorio en la evaluación de cualquier solución de IA para Supply Chain & Operaciones."
          },
          {
            "titulo": "Ciberseguridad para entornos de salud",
            "intuicion": "Los centro de distribución o almacénes son blanco frecuente de ataques porque manejan datos valiosos. Proteger los sistemas de IA y los datos es parte inseparable del proyecto.",
            "puntosClave": [
              "El ransomware ha paralizado instituciones de Cadena de Suministro reales.",
              "Medidas básicas: autenticación multifactor, protección de equipos y segmentación de redes.",
              "La seguridad es responsabilidad compartida entre Supply Chain & Operaciones y sus proveedores."
            ],
            "accion": "Verifique que las medidas básicas (MFA, respaldos, segmentación) estén activas antes de conectar nuevos sistemas de IA."
          },
          {
            "titulo": "Plan de respuesta ante incidentes",
            "intuicion": "No se trata de si ocurrirá un incidente, sino de cuándo. Tener un plan listo reduce el daño y el tiempo de recuperación.",
            "puntosClave": [
              "Protocolo claro ante brechas de datos o ataques: contener, notificar, recuperar.",
              "Roles y responsables definidos antes de la crisis.",
              "Obligaciones de notificación a autoridades y titulares según la norma."
            ],
            "accion": "Asegúrese de que Supply Chain & Operaciones cuente con un protocolo de incidentes escrito y probado, que cubra también los sistemas de IA."
          }
        ]
      },
      {
        "number": 9,
        "title": "Marco de Priorización de Proyectos de IA y Decisión Buy/Partner/Build",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
          "Aplicar la matriz Impacto vs. Esfuerzo para priorizar iniciativas de IA en Cadena de Suministro",
          "Evaluar la decisión estratégica Buy/Partner/Build para cada proyecto de Supply Chain & Operaciones",
          "Definir KPIs de éxito operativo y financiero (tasa de quiebres de stock y demoras, días cartera, costo por factura)",
          "Construir un roadmap de implementación a 12 meses alineado con la estrategia"
        ],
        "practicalActivity": "Taller de priorización en PowerPoint: Clasificación de 8 proyectos reales de Supply Chain & Operaciones en los cuadrantes de Quick Wins, Estratégicos o Tácticos.",
        "downloads": [
          {
            "title": "Plantilla Editable: Matriz Impacto vs. Esfuerzo",
            "file": "descargas/plantilla-matriz-impacto-esfuerzo.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Marco de priorización: Impacto vs. Esfuerzo",
            "intuicion": "No todo proyecto de IA vale la pena primero. La clave es comparar cuánto valor genera contra cuánto cuesta implementarlo, y empezar por lo más rentable y fácil.",
            "puntosClave": [
              "Impacto: reducción de errores, tiempos y costos, o recuperación de ingresos.",
              "Esfuerzo: datos disponibles, tecnología, integración y cambio organizacional.",
              "Evita el error de empezar por el proyecto más vistoso en lugar del más rentable."
            ],
            "accion": "Puntúe cada idea de IA de su área en impacto y esfuerzo (escala 1-5); tendrá un ranking objetivo para decidir."
          },
          {
            "titulo": "La matriz de priorización en cuatro cuadrantes",
            "intuicion": "Al ubicar los proyectos en una matriz, aparecen cuatro grupos claros. Los 'Quick Wins' (mucho impacto, poco esfuerzo) son por donde se debe empezar para generar confianza.",
            "puntosClave": [
              "Quick Wins: alto impacto, bajo esfuerzo — prioridad inmediata.",
              "Estratégicos: alto impacto, alto esfuerzo — planear a mediano plazo.",
              "Tácticos y 'a evitar': bajo impacto — postergar o descartar."
            ],
            "accion": "Ubique su lista de proyectos en la matriz y comprometa recursos primero con un Quick Win para demostrar valor temprano."
          },
          {
            "titulo": "Decisión Buy / Partner / Build",
            "intuicion": "Ante una necesidad de IA hay tres caminos: comprar una solución lista, aliarse con un proveedor, o construirla internamente. Cada uno conviene en situaciones distintas.",
            "puntosClave": [
              "Buy: rápido y probado, menos personalizable — ideal para problemas estándar.",
              "Partner: equilibra personalización y velocidad — útil para necesidades específicas.",
              "Build: máximo control y costo — solo si es un diferenciador central y hay capacidad."
            ],
            "accion": "Para su proyecto prioritario, evalúe las tres opciones con criterios de costo, tiempo y especificidad, y justifique la elección."
          },
          {
            "titulo": "KPIs de éxito para proyectos de IA en Supply Chain & Operaciones",
            "intuicion": "Lo que no se mide no se puede mejorar ni defender. Antes de iniciar, hay que definir cómo se verá el éxito en números.",
            "puntosClave": [
              "Ejemplos: tasa de quiebres de stock y demoras, días de respuesta a quiebres de stock y demoras, % de facturas aprobadas al primer envío, costo por factura, tiempo de radicación.",
              "Cada KPI necesita una línea base (valor actual) y una meta.",
              "Pocos KPIs claros valen más que muchos indicadores difusos."
            ],
            "accion": "Para cada proyecto, defina 3 KPIs con su valor actual y su meta a 12 meses antes de aprobar la inversión."
          },
          {
            "titulo": "Cálculo de ROI de proyectos de IA",
            "intuicion": "El ROI responde la pregunta de la dirección: ¿vale la pena? Se comparan los ahorros y mayores ingresos contra el costo total del proyecto.",
            "puntosClave": [
              "Costos: licencias, implementación, capacitación y mantenimiento.",
              "Beneficios: menos quiebres de stock y demoras, menos retrabajo, mayor recuperación de cartera.",
              "Incluya el punto de equilibrio: en cuántos meses se recupera la inversión."
            ],
            "accion": "Construya un ROI simple a 3 años para su proyecto prioritario; aunque sea estimado, enfoca la conversación con la dirección."
          },
          {
            "titulo": "Gestión del cambio organizacional",
            "intuicion": "La tecnología falla más por la gente que por la máquina. Si el equipo no entiende ni confía en la IA, el proyecto no se adopta por bueno que sea.",
            "puntosClave": [
              "Comunicar el 'para qué' y cómo beneficia al trabajo diario.",
              "Capacitar a los usuarios finales y acompañar la transición.",
              "Usar Quick Wins para generar confianza y vencer la resistencia."
            ],
            "accion": "Incluya en todo proyecto un plan de comunicación y capacitación; sin adopción, no hay retorno."
          },
          {
            "titulo": "Roadmap de implementación a 12 meses",
            "intuicion": "Un buen proyecto avanza por fases: primero un piloto pequeño, luego se valida y después se escala. Así se controla el riesgo y se aprende en el camino.",
            "puntosClave": [
              "Fases: piloto → validación → escalamiento, con hitos y responsables.",
              "Métricas de seguimiento en cada fase para decidir si continuar.",
              "Un roadmap realista evita sobrepromesas y frustración."
            ],
            "accion": "Dibuje el roadmap de su proyecto prioritario con 3 fases, hitos y responsables para los próximos 12 meses."
          }
        ]
      },
      {
        "number": 10,
        "title": "Taller Final — Proyecto Integrador: Business Case de IA para Supply Chain & Operaciones",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
          "Formular un Business Case completo de IA para un proceso real de Supply Chain & Operaciones",
          "Integrar conocimientos de los módulos en una propuesta ejecutiva formal",
          "Presentar y defender el proyecto ante directivos con argumentos técnicos y financieros",
          "Recibir retroalimentación y acordar hoja de ruta de implementación"
        ],
        "practicalActivity": "Comité de Inversión y Defensa de Proyectos: Presentación ejecutiva de 10 minutos por equipo defendiendo su Business Case ante el facilitador y directivos.",
        "downloads": [
          {
            "title": "Plantilla de Business Case de IA",
            "file": "descargas/plantilla-business-case-ia.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Presentar un Proyecto de Tecnología a la Alta Dirección",
            "file": "descargas/guia-presentar-proyecto-alta-direccion.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Estructura de un Business Case de IA",
            "intuicion": "Un Business Case es la historia que convence a la dirección de invertir: qué problema resolvemos, cómo, cuánto cuesta y qué ganamos. Ordenarlo bien es la mitad del éxito.",
            "puntosClave": [
              "Componentes: problema, solución, alcance, beneficios, costos, riesgos, cronograma y equipo.",
              "Debe caber en pocas páginas y hablar el lenguaje de la dirección: valor y riesgo.",
              "Cada afirmación se respalda con datos, no con opiniones."
            ],
            "accion": "Use la plantilla de Business Case del programa como esqueleto y compétela con los datos reales de su proceso."
          },
          {
            "titulo": "Selección del proceso a intervenir",
            "intuicion": "El primer proyecto debe elegirse con cabeza: un proceso con dolor claro, datos disponibles y alto impacto. Facturación, quiebres de stock y demoras, admisiones o autorizaciones son candidatos naturales en Supply Chain & Operaciones.",
            "puntosClave": [
              "Prefiera procesos con problema medible y datos históricos disponibles.",
              "Equilibre impacto esperado con viabilidad de implementación.",
              "Un alcance acotado aumenta la probabilidad de éxito del piloto."
            ],
            "accion": "Elija un único proceso para su Business Case y resista la tentación de abarcar todo a la vez."
          },
          {
            "titulo": "Definir el problema con datos",
            "intuicion": "'Tenemos muchas quiebres de stock y demoras' no es un problema accionable. 'La tasa de quiebres de stock y demoras es del 18% y cuesta X al mes' sí lo es. Los números convierten una queja en un caso de inversión.",
            "puntosClave": [
              "Cuantifique la situación actual: tiempos, errores, costos y volúmenes.",
              "Defina la brecha: dónde estamos vs. dónde queremos llegar.",
              "La línea base permitirá demostrar el impacto después."
            ],
            "accion": "Reúna las 3-4 cifras que describen el problema de su proceso elegido; son el corazón del Business Case."
          },
          {
            "titulo": "Diseño de la solución",
            "intuicion": "Aquí se conecta el problema con la tecnología: qué tipo de IA, qué datos necesita, cómo se integra con lo existente y si se compra, se asocia o se construye.",
            "puntosClave": [
              "Especifique tipo de IA, datos requeridos e integraciones necesarias.",
              "Defina el modelo de implementación (Buy/Partner/Build) y por qué.",
              "Describa el flujo con Human-in-the-Loop donde corresponda."
            ],
            "accion": "Dibuje el flujo 'antes vs. después' de su proceso con la solución propuesta; hace tangible el cambio."
          },
          {
            "titulo": "Análisis financiero del proyecto",
            "intuicion": "La dirección aprueba con números. Hay que mostrar cuánto cuesta el primer año, cuánto se ahorra o recupera y en cuánto tiempo se paga solo.",
            "puntosClave": [
              "Inversión año 1 vs. ahorros proyectados años 1-3.",
              "Punto de equilibrio e indicadores de rentabilidad (ROI).",
              "Sea conservador: mejor prometer menos y cumplir."
            ],
            "accion": "Calcule el ahorro mensual estimado y el mes de equilibrio de su proyecto; son las cifras que más pesan en la decisión."
          },
          {
            "titulo": "Plan de implementación",
            "intuicion": "Una buena idea sin plan de ejecución no se aprueba. Hay que mostrar fases realistas, responsables y de qué depende el éxito.",
            "puntosClave": [
              "Fases con hitos, equipo responsable y dependencias técnicas y organizacionales.",
              "Un piloto inicial medible antes de escalar.",
              "Riesgos identificados con su plan de mitigación."
            ],
            "accion": "Añada a su Business Case un cronograma simple de 3 fases con responsables claros."
          },
          {
            "titulo": "Presentación ejecutiva del proyecto",
            "intuicion": "Diez minutos bien usados valen más que cincuenta diapositivas. La dirección quiere escuchar: problema → solución → impacto → inversión → plan → siguiente paso.",
            "puntosClave": [
              "Cuente una historia clara y respaldada en datos, no una lista de funciones técnicas.",
              "Anticipe las preguntas difíciles (riesgos, datos, costos).",
              "Cierre siempre con una petición concreta (el 'siguiente paso')."
            ],
            "accion": "Prepare su presentación de 10 minutos siguiendo la secuencia problema→solución→impacto→inversión→plan→siguiente paso y ensáyela."
          }
        ]
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
          {
            "title": "Canvas de Arquitectura de Agentes de IA",
            "file": "descargas/canvas-agentes-ia.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Del Asistente Pasivo al Agente Autónomo en Cadena de Suministro",
            "intuicion": "Un LLM común te redacta una carta si se lo pides; un Agente Autónomo en salud detecta que llegó una objeción de glosa al buzón institucional, abre el sistema centro de distribución o almacénario, descarga los soportes clínicos, valida la pertinencia y deja listo el borrador de respuesta.",
            "puntosClave": [
              "Arquitectura ReAct: Bucle iterativo de 'Razonar -> Actuar -> Observar el resultado -> Siguiente paso'.",
              "Descomposición de objetivos complejos: Dividir 'conciliar cartera mensual' en subtareas autónomas.",
              "Diferencia entre automatización rígida (RPA) e IA Agéntica con comprensión de contexto clínico."
            ],
            "accion": "Mapear un cuello de botella en Supply Chain & Operaciones donde hoy un analista pasa horas copiando datos entre el ERP y el correo para evaluar su viabilidad como agente."
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
            "intuicion": "Permite que el agente recuerde acuerdos contractuales específicos de cada proveedores y transportistas y excepciones negociadas sin tener que repetírselas en cada consulta.",
            "puntosClave": [
              "Memoria a corto plazo (Context Window): Historial de la transacción actual en curso.",
              "Memoria a largo plazo (Bases Vectoriales): Políticas de contratación y acuerdos comerciales históricos.",
              "Memoria procedimental: Instrucciones permanentes de estilo institucional y directrices inviolables de Supply Chain & Operaciones."
            ],
            "accion": "Crear el catálogo de 'Reglas Inmutables de Auditoría' que ningún agente de Supply Chain & Operaciones puede violar en sus resoluciones."
          },
          {
            "titulo": "Niveles de Autonomía y Barreras de Seguridad (Guardrails)",
            "intuicion": "Establecer qué decisiones puede tomar el agente por su cuenta y cuáles requieren aprobación obligatoria de un coordinador.",
            "puntosClave": [
              "Escala de autonomía: L1 Asistente, L2 Copiloto con confirmación previa, L3 Autónomo con monitoreo por excepción.",
              "Límites transaccionales: Aprobación autónoma de cuentas de hasta $500,000 COP; montos superiores exigen firma de coordinador logístico sénior.",
              "Prevención de bucles infinitos: Límite estricto de máximo 6 iteraciones de razonamiento por caso."
            ],
            "accion": "Definir la matriz de umbrales económicos de aprobación autónoma para su departamento."
          }
        ]
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
          {
            "title": "Plantilla de Orquestación Multi-Agente y Matriz HITL",
            "file": "descargas/plantilla-orquestacion-multiagente.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Arquitecturas Multi-Agente: Células Operativas Especializadas",
            "intuicion": "En lugar de sobrecargar a un solo agente con todo el ciclo de cuentas médicas, se crea un equipo de agentes especializados: uno extrae datos, otro audita tarifas y otro redacta el informe.",
            "puntosClave": [
              "Patrón Supervisor-Trabajadores: Un agente orquestador recibe el caso, lo clasifica y asigna subtareas a los agentes especialistas.",
              "Patrón Maker-Checker (Creador y Revisor): Un agente redacta la respuesta a la glosa y un segundo agente (coordinador logístico legal) revisa que cumpla la Resolución 3047 antes de emitirla.",
              "Reducción de alucinaciones y fatiga de contexto al mantener las instrucciones de cada agente concisas y enfocadas."
            ],
            "accion": "Dibujar el diagrama de roles de una célula de 3 agentes para el proceso de auditoría concurrente en Supply Chain & Operaciones."
          },
          {
            "titulo": "Orquestación y Enrutamiento al Experto Humano (HITL)",
            "intuicion": "El agente no es un reemplazo ciego del coordinador logístico; es su filtro principal. Cuando un caso tiene inconsistencias clínicas o legales complejas, lo traslada con un resumen ejecutivo.",
            "puntosClave": [
              "Score de Confianza (Confidence Threshold): Si la certeza del modelo en la objeción es menor al 85%, el caso pasa a bandeja humana.",
              "Handoff estructurado: El agente entrega al humano el resumen del problema, los artículos normativos aplicables y la recomendación tentativa.",
              "Aprendizaje continuo: La corrección efectuada por el coordinador logístico humano se guarda como ejemplo 'Few-Shot' para casos futuros."
            ],
            "accion": "Establecer la lista de las 5 causas de glosa que siempre deben pasar a revisión de un auditor médico humano."
          },
          {
            "titulo": "Medición de Confiabilidad y Tasa de Autonomía (STP)",
            "intuicion": "Medir exactamente qué porcentaje de facturas o coordinador logísticoías se resolvieron sin intervención humana (Straight-Through Processing).",
            "puntosClave": [
              "Métrica STP: (Casos 100% autónomos sin error) / (Total casos procesados) * 100.",
              "Costo por transacción: Comparativa del costo por cuenta médica manual ($5,000 COP) vs. costo agéntico ($350 COP en cómputo/tokens).",
              "Trazabilidad inmutable: Registro de cada pensamiento, consulta de herramienta y respuesta emitida para fines de coordinador logísticoía externa."
            ],
            "accion": "Calcular la meta de STP para el primer trimestre de implementación del escuadrón agéntico en Supply Chain & Operaciones."
          }
        ]
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
          {
            "title": "Manual de RAG Empresarial con Cero Alucinación",
            "file": "descargas/manual-rag-empresarial-cero-alucinacion.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "RAG Empresarial: Conectando IA con la Base de Conocimiento de Supply Chain & Operaciones",
            "intuicion": "Conectar el modelo de lenguaje a los manuales de contratación, resoluciones del Ministerio y acuerdos con proveedores y transportistas sin peligro de fuga de datos ni reentrenamientos costosos.",
            "puntosClave": [
              "Separación de conocimiento y razonamiento: El LLM pone la capacidad de redactar y sintetizar; la base de datos documental de Supply Chain & Operaciones pone los hechos verídicos.",
              "Eliminación de alucinaciones: El modelo se condiciona mediante prompts de Grounding estricto a responder únicamente citando el párrafo exacto.",
              "Actualización en tiempo real: Si el Ministerio de Salud emite una nueva circular hoy, basta subir el PDF para que la IA la aplique de inmediato."
            ],
            "accion": "Seleccionar los 5 documentos normativos o tarifarios prioritarios para conformar la primera base RAG de Supply Chain & Operaciones."
          },
          {
            "titulo": "Chunking Semántico y Búsqueda Híbrida en Cadena de Suministro",
            "intuicion": "Si cortas un manual tarifario en pedazos al azar, separas el código CUPS de su descripción y tarifa. El troceo inteligente conserva tablas y reglas completas.",
            "puntosClave": [
              "Chunking jerárquico y semántico: Fragmentar respetando capítulos, artículos y tablas tarifarias completas.",
              "Búsqueda híbrida (Dense + BM25): Combina búsqueda por conceptos ('biopsia guiada por ecografía') con búsqueda por códigos exactos ('381101').",
              "Re-ranking: Un segundo modelo reclasifica los 10 mejores fragmentos para garantizar que el más pertinente quede en el contexto superior."
            ],
            "accion": "Diseñar la plantilla de metadata obligatoria (proveedores y transportistas, fecha vigencia, régimen subsidiado/contributivo) para cada documento indexado."
          },
          {
            "titulo": "Evaluación Continua de RAG con el Framework Ragas",
            "intuicion": "Auditar científicamente qué tan fiel y exacto es el sistema antes de permitir que responda consultas reales de coordinador logísticoía.",
            "puntosClave": [
              "Fidelidad (Faithfulness): ¿Todo lo que dijo la respuesta está respaldado en los documentos recuperados o inventó algo?",
              "Relevancia de la respuesta: ¿Respondió concretamente lo que preguntó el directivo?",
              "Relevancia del contexto: ¿El motor de búsqueda trajo los fragmentos correctos o trajo ruido irrelevante?"
            ],
            "accion": "Formular un banco de 10 preguntas de prueba con respuesta dorada verificada por un auditor experto para evaluar el RAG."
          }
        ]
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
          {
            "title": "Calculadora de TCO y Evaluación de Modelos de IA",
            "file": "descargas/plantilla-tco-evaluacion-modelos-ia.xlsx",
            "format": "XLSX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Soberanía de Datos: Modelos Locales vs. Nube Privada",
            "intuicion": "Evaluar cuándo usar modelos de proveedores internacionales (OpenAI, Anthropic, Google) con acuerdos de confidencialidad BAA, y cuándo desplegar modelos de código abierto (Llama 3, Mistral) en servidores propios.",
            "puntosClave": [
              "Cumplimiento de Habeas Data (Ley 1581): Datos clínicos sensibles y restricciones de transferencia transfronteriza.",
              "Modelos de Pesos Abiertos (Open Source): Capacidad de correr modelos de 8B o 70B parámetros en infraestructura local sin enviar un solo byte a internet.",
              "Small Language Models (SLMs): Modelos compactos ultra-rápidos y de costo casi nulo para tareas específicas de extracción y clasificación."
            ],
            "accion": "Clasificar los tipos de datos de Supply Chain & Operaciones en Semáforo Verde (públicos/normas), Amarillo (administrativos) y Rojo (datos clínicos con reserva)."
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
              "Latencia y disponibilidad: Tiempos de respuesta para no degradar la experiencia de los coordinador logísticoes y facturadores.",
              "Seguridad y Prompt Injection: Filtros de entrada para evitar que usuarios maliciosos engañen al modelo o extraigan prompts del sistema."
            ],
            "accion": "Definir el límite de presupuesto mensual de API y los indicadores clave del dashboard de monitoreo de IA de Supply Chain & Operaciones."
          }
        ]
      }
    ]
  },
  "legal": {
    "id": "legal",
    "name": "Legal, Contratos & Compliance",
    "org": "Dirección Jurídica & Cumplimiento",
    "badge": "Legaltech & CLM",
    "description": "Gestión integral del ciclo de vida contractual (CLM), extracción masiva de cláusulas de riesgo, síntesis normativa continua y auditoría de cumplimiento.",
    "icon": "Scale",
    "primaryColor": "#5B21B6",
    "accentColor": "#7C3AED",
    "sessions": [
      {
        "number": 1,
        "title": "¿Qué es la IA? Desmitificando Conceptos para Líderes Administrativos",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
          "Comprender qué es la Inteligencia Artificial y por qué es relevante para la gestión en Legal y Cumplimiento",
          "Diferenciar entre Machine Learning, Deep Learning e IA Generativa con ejemplos del sector",
          "Adquirir vocabulario técnico esencial para interactuar con proveedores tecnológicos",
          "Identificar aplicaciones actuales de IA en el sector el ámbito corporativo y judicial"
        ],
        "practicalActivity": "Ejercicio de autoevaluación: Cada participante identifica 3 tareas de su rol actual que podrían beneficiarse de IA y las clasifica según tipo de IA (ML, Deep Learning, IA Generativa). Discusión grupal sobre expectativas y temores frente a la IA en Dirección Jurídica & Cumplimiento.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Qué es (y qué no es) la Inteligencia Artificial",
            "intuicion": "La IA no es un robot que piensa como una persona. Es un software que aprende a reconocer patrones en grandes cantidades de datos y, con base en ellos, hace predicciones o genera texto. Piense en el abogado o auditor legal experto que, tras revisar miles de facturas, 'ya sabe' cuáles van a ser glosadas: la IA hace algo parecido, pero a gran escala y en segundos.",
            "puntosClave": [
              "La IA actual es 'estrecha': resuelve muy bien una tarea específica (predecir riesgos e incumplimientos, clasificar diagnósticos), pero no tiene criterio general ni entiende el contexto como un humano.",
              "No reemplaza el juicio profesional: produce sugerencias y probabilidades, no verdades absolutas. La decisión final sigue siendo del directivo o abogado o auditor legal.",
              "Funciona con datos: sin datos de calidad no hay IA útil. La ventaja competitiva de Dirección Jurídica & Cumplimiento está en los datos históricos de revisión contractual y riesgos e incumplimientos que ya posee."
            ],
            "accion": "Liste 3 decisiones repetitivas de su área que hoy toma 'por experiencia'. Esas son las mejores candidatas iniciales para apoyo de IA, porque ya existe un patrón que un modelo puede aprender."
          },
          {
            "titulo": "Machine Learning: cómo aprende una máquina",
            "intuicion": "En lugar de programar reglas una por una ('si el código CUPS no coincide con el diagnóstico, marca error'), al modelo se le muestran miles de ejemplos ya resueltos y él solo deduce las reglas. Es aprender con ejemplos, no con un manual.",
            "puntosClave": [
              "Aprendizaje supervisado: se entrena con ejemplos etiquetados (facturas 'glosadas' vs 'aprobadas') para predecir casos nuevos. Es el más usado en revisión contractual y abogado o auditor legalía.",
              "Aprendizaje no supervisado: el modelo agrupa datos similares sin etiquetas previas; útil para descubrir patrones ocultos (segmentos de EPS con comportamiento parecido).",
              "Aprendizaje por refuerzo: el sistema aprende por ensayo y error con recompensas; menos común en lo administrativo, más en optimización de agendas."
            ],
            "accion": "Identifique en qué proceso de Dirección Jurídica & Cumplimiento existe un histórico con 'resultado conocido' (glosada/no glosada, pagada/no pagada). Ese histórico es el combustible para un primer modelo supervisado."
          },
          {
            "titulo": "Deep Learning y procesamiento de texto médico",
            "intuicion": "El Deep Learning es un tipo de ML más potente que imita en forma simplificada las conexiones del cerebro. Es lo que permite 'leer' texto libre: una glosa escrita en lenguaje natural, una nota clínica o un contrato con una contrapartes contractuales.",
            "puntosClave": [
              "Destaca en datos no estructurados: texto, imágenes y audio, que son el 80% de la información en Legal y Cumplimiento.",
              "Requiere más datos y más capacidad de cómputo que el ML tradicional; por eso suele consumirse como servicio en la nube, no construirse desde cero.",
              "Es la base de los asistentes como ChatGPT y Claude, que pueden resumir y responder sobre documentos extensos."
            ],
            "accion": "Reúna ejemplos de documentos en texto libre que hoy su equipo lee manualmente (respuestas a riesgos e incumplimientos, actas, contratos). Son los procesos donde el Deep Learning aporta más ahorro de tiempo."
          },
          {
            "titulo": "IA Generativa y modelos de lenguaje (LLM)",
            "intuicion": "Un LLM es como un asistente que ha leído millones de documentos y puede redactar, resumir o explicar bajo demanda. Usted le da una instrucción en español y le devuelve un borrador en segundos.",
            "puntosClave": [
              "Genera contenido nuevo: borradores de respuestas a riesgos e incumplimientos, resúmenes de resoluciones, actas de reunión, informes ejecutivos.",
              "No consulta una base de datos oficial por defecto: responde a partir de lo aprendido, por eso puede equivocarse y siempre hay que verificar.",
              "Su gran valor para directivos es la productividad: convierte horas de redacción y lectura en minutos de revisión."
            ],
            "accion": "Elija una tarea de escritura recurrente (por ejemplo, el acta semanal del comité de riesgos e incumplimientos) y propóngala como primer caso piloto de IA generativa en su equipo."
          },
          {
            "titulo": "Vocabulario clave para hablar con proveedores de tecnología",
            "intuicion": "No necesita programar, pero sí entender diez palabras para no depender de que un proveedor le 'traduzca' todo. Así negocia mejor y detecta promesas infladas.",
            "puntosClave": [
              "Modelo / entrenamiento / inferencia: el modelo se 'entrena' una vez con datos y luego 'infiere' (predice) sobre casos nuevos.",
              "Prompt, token y API: el prompt es la instrucción, el token es la unidad de cobro, y la API es el 'enchufe' que conecta la IA con los sistemas de Dirección Jurídica & Cumplimiento.",
              "Alucinación, fine-tuning y RAG: la alucinación es un dato inventado; fine-tuning y RAG son formas de hacer que el modelo use el conocimiento propio de Dirección Jurídica & Cumplimiento."
            ],
            "accion": "Antes de la próxima reunión con un proveedor, prepare 3 preguntas usando estos términos (p. ej. '¿su solución usa RAG con nuestros contratos o responde de forma genérica?')."
          },
          {
            "titulo": "Panorama de la IA en Legal y Cumplimiento en Colombia y la región",
            "intuicion": "La IA ya no es futurista en el sector: revisión contractual electrónica, validación de RIPS y abogado o auditor legalía asistida son realidades en operación. El reto no es técnico, es de adopción y gobierno.",
            "puntosClave": [
              "Casos consolidados: validación automática de RIPS, detección temprana de riesgos e incumplimientos, optimización de urgencias y agendamiento.",
              "Las instituciones que lideran no son las que más tecnología compran, sino las que mejor ordenan sus datos y procesos.",
              "El soporte administrativo (el negocio de Dirección Jurídica & Cumplimiento) es uno de los terrenos de mayor retorno, por su alto volumen y reglas claras."
            ],
            "accion": "Seleccione una institución referente comparable y documente un caso de uso que ya tenga en operación; servirá de 'norte' para el roadmap de Dirección Jurídica & Cumplimiento."
          },
          {
            "titulo": "Mitos y realidades de la IA en la gestión en Legal y Cumplimiento",
            "intuicion": "El mayor riesgo no es que la IA se equivoque, sino usarla sin supervisión o no usarla por miedo. Ni magia infalible ni amenaza: es una herramienta con límites claros.",
            "puntosClave": [
              "Mito: 'la IA reemplazará a los abogado o auditor legales'. Realidad: los vuelve más productivos al filtrar lo rutinario y dejarles los casos complejos.",
              "Mito: 'si lo dice la IA, es correcto'. Realidad: puede alucinar; toda salida crítica se valida contra la norma y los soportes.",
              "Mito: 'necesitamos un gran equipo técnico'. Realidad: muchas soluciones se consumen como servicio y se gobiernan con criterio de negocio."
            ],
            "accion": "Recoja los temores reales de su equipo frente a la IA y conviértalos en una lista de 'reglas de uso responsable'; reducir el miedo es el primer paso de adopción."
          }
        ]
      },
      {
        "number": 2,
        "title": "El Ecosistema de Datos en Legal y Cumplimiento y Diagnóstico de Madurez Digital",
        "moduleId": 1,
        "duration": "2 horas",
        "level": "Básico",
        "objectives": [
          "Comprender los tipos de datos que maneja una organización de Legal y Cumplimiento y su valor para la IA",
          "Diferenciar entre datos estructurados (tablas, RIPS) y no estructurados (riesgos e incumplimientos, notas clínicas)",
          "Evaluar el nivel de madurez digital de Dirección Jurídica & Cumplimiento utilizando el marco de diagnóstico interactivo",
          "Identificar brechas de datos y oportunidades de mejora para habilitar proyectos de IA"
        ],
        "practicalActivity": "Taller interactivo de autodiagnóstico: Cada equipo completa la herramienta de Diagnóstico de Madurez Digital en la plataforma (6 dimensiones) y analiza sus brechas inmediatas.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Los tres tipos de datos de una organización de salud",
            "intuicion": "Antes de automatizar, hay que saber qué información se tiene. En salud conviven tres mundos: lo administrativo (facturas, admisiones), lo clínico (historias, órdenes) y lo operativo (camas, turnos, tiempos).",
            "puntosClave": [
              "Datos administrativos: el corazón del negocio de Dirección Jurídica & Cumplimiento (revisión contractual, autorizaciones, radicación, cartera).",
              "Datos clínicos: soportan y justifican el cobro; su calidad determina si una factura se aprueba o se glosa.",
              "Datos operativos: miden la eficiencia (ocupación, tiempos de respuesta) y alimentan modelos de predicción."
            ],
            "accion": "Dibuje un inventario de las fuentes de datos de su área: qué sistema las genera, en qué formato y quién es responsable. Es el primer paso de cualquier proyecto de IA."
          },
          {
            "titulo": "Datos estructurados vs. no estructurados",
            "intuicion": "Lo estructurado cabe en una tabla de Excel (columnas de factura, valor, contrapartes contractuales). Lo no estructurado es texto o imagen libre (una glosa redactada, una historia clínica). La IA necesita ambos, pero se procesan distinto.",
            "puntosClave": [
              "Estructurado: fácil de analizar, ideal para predicción y tableros; ejemplo: tablas de RIPS y cartera.",
              "No estructurado: el 80% de la información; requiere IA de lenguaje para extraer datos de riesgos e incumplimientos, notas y contratos.",
              "El mayor valor aparece al cruzar ambos: predecir una glosa (estructurado) y redactar su respuesta citando el soporte (no estructurado)."
            ],
            "accion": "Marque en su inventario cuáles fuentes son estructuradas y cuáles no. Las no estructuradas suelen ser las de mayor carga manual y mayor oportunidad de automatización."
          },
          {
            "titulo": "RIPS: estructura, errores comunes y automatización",
            "intuicion": "El RIPS es el 'pasaporte' de cada atención ante el sistema de salud. Si viene mal diligenciado, la factura se devuelve o se glosa. La IA puede revisarlo antes de radicar, como un corrector ortográfico para revisión contractual.",
            "puntosClave": [
              "Errores frecuentes: inconsistencia entre diagnóstico (CIE-10) y procedimiento (CUPS), datos de usuario incompletos, valores fuera de contrato.",
              "La prevalidación automática detecta estos errores en segundos, antes del envío, reduciendo devoluciones formales.",
              "Un RIPS limpio acelera la radicación y mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Pida a su equipo las 5 causas más frecuentes de devolución de RIPS del último trimestre. Esa lista es el requerimiento funcional de un futuro validador con IA."
          },
          {
            "titulo": "Calidad de datos: 'basura entra, basura sale'",
            "intuicion": "Un modelo de IA es tan bueno como los datos que recibe. Si la información de revisión contractual tiene errores, duplicados o vacíos, las predicciones también estarán equivocadas.",
            "puntosClave": [
              "Dimensiones de calidad: completitud, consistencia, exactitud y oportunidad.",
              "Los datos faltantes y duplicados son el problema #1 que frena proyectos de analítica en Legal y Cumplimiento.",
              "Invertir en calidad de datos rinde aunque no se implemente IA: mejora reportes, abogado o auditor legalía y decisiones hoy."
            ],
            "accion": "Defina 3 reglas mínimas de calidad para los datos de su proceso (p. ej. 'ninguna factura sin código de contrapartes contractuales') y mídalas mensualmente."
          },
          {
            "titulo": "Marco de madurez digital en 5 niveles",
            "intuicion": "No se pasa de cero a IA de un salto. Hay una escalera: desde procesos manuales y en papel hasta procesos optimizados con datos en tiempo real. Saber en qué escalón está Dirección Jurídica & Cumplimiento evita comprar tecnología que no se puede sostener.",
            "puntosClave": [
              "Niveles: Inicial, Repetible, Definido, Gestionado y Optimizado.",
              "Cada área puede estar en un nivel distinto: revisión contractual más avanzada, autorizaciones más manual.",
              "La madurez no es solo tecnología: incluye procesos documentados, roles y cultura de datos."
            ],
            "accion": "Ubique cada proceso de su área en uno de los 5 niveles y fije una meta realista: subir un escalón en 6 meses, no saltar al último."
          },
          {
            "titulo": "Infraestructura tecnológica necesaria",
            "intuicion": "Para habilitar IA no hace falta un centro de datos propio. Hoy casi todo se consume en la nube, pero sí se requiere que los sistemas 'conversen' entre sí mediante integraciones.",
            "puntosClave": [
              "Elementos clave: almacenamiento en la nube, APIs de integración e interoperabilidad entre HIS, ERP y revisión contractual electrónica.",
              "La interoperabilidad (que los sistemas compartan datos) suele ser el mayor cuello de botella, no la IA en sí.",
              "Empezar en la nube reduce inversión inicial y permite escalar según resultados."
            ],
            "accion": "Liste los sistemas que su área usa a diario e identifique cuáles NO se comunican entre sí. Esas desconexiones son el primer obstáculo a resolver."
          },
          {
            "titulo": "Gobernanza de datos: roles y responsabilidades",
            "intuicion": "Los datos necesitan dueños, igual que los procesos. Sin alguien responsable de que la información esté correcta y protegida, ningún proyecto de IA se sostiene.",
            "puntosClave": [
              "Roles típicos: Data Owner (responsable del negocio) y Data Steward (responsable operativo de la calidad).",
              "Políticas de acceso: quién puede ver qué, especialmente con datos sensibles de pacientes.",
              "Ciclo de vida del dato: creación, uso, archivo y eliminación segura."
            ],
            "accion": "Asigne, aunque sea de forma informal, un responsable de calidad de datos por cada proceso clave de su área. La gobernanza empieza con nombres y apellidos."
          }
        ]
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
        "practicalActivity": "Laboratorio en vivo en el Prompt Studio: Cada participante practica técnicas de prompting con casos reales de redacción de respuestas a riesgos e incumplimientos y síntesis de resoluciones del Ministerio.",
        "downloads": [
          {
            "title": "Guía de Prompt Engineering para Directivos en Salud",
            "file": "descargas/guia-prompt-engineering-openai.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "ChatGPT, Claude y Copilot: cuál usar y cuándo",
            "intuicion": "Son asistentes parecidos pero con fortalezas distintas. Elegir bien es como elegir la herramienta correcta: no se clava un tornillo con un martillo.",
            "puntosClave": [
              "ChatGPT: muy versátil, analiza archivos y datos; buen punto de partida general.",
              "Claude: destaca con documentos largos (contratos, resoluciones extensas) por su gran capacidad de lectura.",
              "Copilot: integrado en Office (Word, Excel, Teams), ideal si Dirección Jurídica & Cumplimiento ya trabaja en ese ecosistema."
            ],
            "accion": "Defina una recomendación simple para su equipo: qué herramienta usar para cada tarea (analizar Excel, resumir una norma larga, redactar en Word) y comuníquela."
          },
          {
            "titulo": "Anatomía de un buen prompt",
            "intuicion": "Pedirle algo a la IA es como delegar en un asistente nuevo: entre más claro el encargo, mejor el resultado. Un buen prompt tiene contexto, instrucción, formato y límites.",
            "puntosClave": [
              "Contexto: quién es usted y para qué ('Soy abogado o auditor legal de cuentas de una IPS...').",
              "Instrucción y formato: qué quiere y cómo ('resume en 5 viñetas', 'en tono formal').",
              "Restricciones: qué evitar ('no inventes cifras', 'usa solo el texto que te doy')."
            ],
            "accion": "Cree una plantilla de prompt estándar para su área y guárdela. Reutilizarla garantiza calidad y ahorra tiempo a todo el equipo."
          },
          {
            "titulo": "Técnicas avanzadas: Chain-of-Thought, Few-Shot y Role Prompting",
            "intuicion": "Hay tres trucos que elevan mucho la calidad: pedirle que razone paso a paso, darle ejemplos de lo que espera, y asignarle un rol experto.",
            "puntosClave": [
              "Chain-of-Thought: 'explica tu razonamiento paso a paso' mejora el análisis de casos complejos.",
              "Few-Shot: mostrar 2-3 ejemplos del resultado deseado alinea el estilo y el formato.",
              "Role Prompting: 'actúa como abogado o auditor legal senior de cuentas médicas' enfoca la respuesta."
            ],
            "accion": "Tome un prompt que ya use y mejórelo aplicando las tres técnicas. Compare el antes y el después con su equipo."
          },
          {
            "titulo": "Caso práctico: análisis de reportes operativos",
            "intuicion": "En lugar de leer un informe de revisión contractual de 20 páginas, puede pedirle a la IA que señale tendencias, anomalías y puntos de atención. Usted pasa de leer todo a revisar lo importante.",
            "puntosClave": [
              "Cargue el reporte y pida: tendencias del periodo, 3 anomalías y posibles causas.",
              "Solicite siempre que indique el dato en que se basa, para poder verificarlo.",
              "Úselo como primer filtro, no como conclusión final: el criterio es suyo."
            ],
            "accion": "En la próxima revisión mensual, procese su reporte con IA y lleve a la reunión las anomalías detectadas ya priorizadas."
          },
          {
            "titulo": "Caso práctico: síntesis de normativa en Legal y Cumplimiento",
            "intuicion": "Las resoluciones y circulares son largas y densas. La IA puede resumirlas, extraer lo que cambia y traducir el 'legalés' a acciones concretas para la operación.",
            "puntosClave": [
              "Pida: resumen ejecutivo, qué cambia frente a la norma anterior e impacto en el proceso de revisión contractual.",
              "Con documentos largos, Claude o NotebookLM dan mejores resultados.",
              "Verifique siempre los artículos citados contra el documento oficial (riesgo de alucinación)."
            ],
            "accion": "Cuando salga la próxima circular del Ministerio o la Supersalud, genere un resumen con IA y compártalo en una página con su equipo."
          },
          {
            "titulo": "Caso práctico: minutas, actas y respuestas a riesgos e incumplimientos",
            "intuicion": "Redactar actas y sustentaciones de riesgos e incumplimientos consume horas. La IA genera un primer borrador sólido en minutos; el experto solo ajusta y aprueba.",
            "puntosClave": [
              "Actas: a partir de notas sueltas, obtiene un acta con decisiones, responsables y compromisos.",
              "Respuestas a riesgos e incumplimientos: redacta la sustentación con base en la normativa y los soportes que usted entrega.",
              "Mantenga un tono y formato institucional mediante una plantilla reutilizable."
            ],
            "accion": "Estandarice un prompt para respuestas a riesgos e incumplimientos por tipo (pertinencia, tarifas, soportes) y mida cuánto tiempo ahorra el equipo al mes."
          },
          {
            "titulo": "Seguridad: qué información NO compartir con IA externa",
            "intuicion": "Las herramientas públicas de IA están fuera de Dirección Jurídica & Cumplimiento. Compartir datos identificables de pacientes puede violar la ley de protección de datos. La regla de oro: anonimizar antes de pegar.",
            "puntosClave": [
              "Nunca comparta datos que identifiquen al paciente (nombre, documento, diagnóstico asociado a la persona).",
              "Trabaje con datos agregados o anonimizados; reemplace identificadores por códigos.",
              "Defina herramientas aprobadas y configure, cuando exista, la opción de no usar sus datos para entrenamiento."
            ],
            "accion": "Redacte una regla de una página de 'qué sí y qué no' compartir con IA y hágala firmar por el equipo antes de habilitar su uso."
          }
        ]
      },
      {
        "number": 4,
        "title": "Taller Práctico: Análisis de Datos Operativos y Financieros sin Programar",
        "moduleId": 2,
        "duration": "2 horas",
        "level": "Básico-Práctico",
        "objectives": [
          "Cargar y analizar archivos Excel/CSV con herramientas de IA sin escribir código",
          "Extraer insights de datos de revisión contractual, ocupación de camas y tiempos de respuesta a riesgos e incumplimientos",
          "Generar visualizaciones y resúmenes ejecutivos automáticos a partir de datos reales",
          "Identificar patrones y anomalías en datos operativos usando IA como asistente analítico"
        ],
        "practicalActivity": "Taller hands-on: Carga de dataset simulado de revisión contractual de un departamento jurídico o firma, identificación de 3 anomalías críticas y generación de un reporte ejecutivo de 1 página.",
        "downloads": [
          {
            "title": "Caso de Estudio: Dataset Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Guía del Caso de Estudio: Analítica de Cuentas Médicas",
            "file": "descargas/caso-estudio-analitica-cuentas-medicas.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Analizar Datos con ChatGPT",
            "file": "descargas/guia-analizar-datos-con-chatgpt.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Cargar archivos a la IA para analizarlos sin programar",
            "intuicion": "Herramientas como ChatGPT permiten subir un Excel y hacerle preguntas en español, como si tuviera un analista de datos disponible 24/7. No se escribe una sola línea de código.",
            "puntosClave": [
              "Suba el archivo y describa sus columnas para que el modelo entienda el contexto.",
              "Pida análisis concretos: totales, promedios, comparaciones, casos atípicos.",
              "Revise siempre una muestra de los resultados contra el archivo original."
            ],
            "accion": "Prepare un Excel 'limpio' de un proceso suyo (sin datos identificables) y practique 5 preguntas de negocio sobre él."
          },
          {
            "titulo": "Análisis de datos de revisión contractual",
            "intuicion": "Con los datos de revisión contractual, la IA responde en minutos preguntas que hoy toman horas: ¿qué contrapartes contractuales concentra la cartera? ¿cuántas facturas se aprueban al primer envío?",
            "puntosClave": [
              "Indicadores clave: volumen por EPS, tasa de aprobación al primer envío, facturado vs. recaudado, antigüedad de cartera.",
              "Permite comparar periodos y detectar deterioros antes de que se vuelvan crónicos.",
              "Genera la base para priorizar la gestión de cobro."
            ],
            "accion": "Defina los 5 indicadores de revisión contractual que más le importan y cree un prompt que los calcule siempre igual, mes a mes."
          },
          {
            "titulo": "Análisis de ocupación y demanda",
            "intuicion": "Los datos de ocupación cuentan una historia: cuándo hay saturación, cuánto se quedan los pacientes y cuándo sobra o falta capacidad. La IA ayuda a leer esa historia rápido.",
            "puntosClave": [
              "Métricas: ocupación por servicio, estancia promedio, rotación de camas.",
              "Patrones estacionales que permiten anticipar picos de demanda.",
              "Insumo directo para planear personal y recursos."
            ],
            "accion": "Analice un mes de ocupación con IA e identifique el día/hora de mayor presión. Úselo para una recomendación concreta de programación."
          },
          {
            "titulo": "Análisis de riesgos e incumplimientos",
            "intuicion": "Las riesgos e incumplimientos son dinero retenido. La IA agrupa y ordena las riesgos e incumplimientos para ver con claridad por qué nos glosan, quién y cuánto recuperamos.",
            "puntosClave": [
              "Métricas: tiempo promedio de respuesta, tasa de recuperación, riesgos e incumplimientos por tipo (pertinencia, tarifas, soportes).",
              "Detección de patrones recurrentes que revelan fallas de proceso aguas arriba.",
              "Prioriza dónde enfocar esfuerzos para recuperar más con menos trabajo."
            ],
            "accion": "Clasifique las riesgos e incumplimientos del último trimestre por tipo y causa raíz; lleve a comité las 3 causas que más valor retienen."
          },
          {
            "titulo": "Generación de gráficos y tableros con IA",
            "intuicion": "Además de números, la IA crea gráficos listos para una presentación directiva. Describe lo que quiere ver y lo obtiene sin manejar fórmulas complejas.",
            "puntosClave": [
              "Pida gráficos de tendencia, comparación y participación directamente sobre los datos cargados.",
              "Útil para pasar de la hoja de cálculo a una historia visual clara.",
              "Siempre valide que el gráfico refleje fielmente los datos."
            ],
            "accion": "Convierta su próximo reporte en 3 gráficos clave generados con IA y úselos en el comité directivo."
          },
          {
            "titulo": "Resúmenes ejecutivos automáticos",
            "intuicion": "A partir de varias fuentes, la IA puede redactar un informe de gestión de una página con lo esencial para decidir. El directivo lee conclusiones, no planillas.",
            "puntosClave": [
              "Combine datos de revisión contractual, riesgos e incumplimientos y ocupación en un solo resumen.",
              "Pida estructura fija: logros, alertas, cifras clave y recomendaciones.",
              "Estandarizar el formato facilita el seguimiento mes a mes."
            ],
            "accion": "Diseñe la plantilla de su 'informe de una página' y automatice su primer borrador con IA cada mes."
          },
          {
            "titulo": "Límites y verificación: el juicio del directivo manda",
            "intuicion": "La IA acelera, pero puede equivocarse o malinterpretar. El valor del directivo es saber qué preguntar y detectar cuándo un resultado no tiene sentido.",
            "puntosClave": [
              "Verifique cifras críticas contra la fuente antes de decidir o comunicar.",
              "Desconfíe de resultados 'demasiado redondos' o sin explicación del origen.",
              "Documente los supuestos usados en cada análisis para poder auditarlo."
            ],
            "accion": "Establezca una regla simple: ningún dato generado por IA se presenta a dirección sin una verificación de la cifra principal."
          }
        ]
      },
      {
        "number": 5,
        "title": "Automatización del Ciclo de revisión contractual y Modelos de Probabilidad de Glosa IA",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender cómo la IA automatiza las etapas del ciclo de revisión contractual y pre-radicación en Legal y Cumplimiento",
          "Diferenciar rigurosamente entre Facturación Expuesta y Pérdida Esperada (Expected Loss) calibrada con IA",
          "Interpretar modelos predictivos supervisados (XGBoost/LightGBM) y métricas de desempeño (ROC-AUC, Precisión, Recall)",
          "Utilizar la explicabilidad de factores SHAP para identificar la causa raíz de una objeción antes de radicar",
          "Implementar matrices de decisión con semáforo STP (Straight-Through Processing) vs. Retención preventiva"
        ],
        "practicalActivity": "Laboratorio con el Simulador de Probabilidad de Glosa IA: Evaluación en vivo de los casos FAC-002, FAC-003 y FAC-006 del dataset, análisis del impacto de factores SHAP y formulación del plan de subsanación médica y tarifaria.",
        "downloads": [
          {
            "title": "Guía Especializada: Análisis Predictivo y Probabilidad de Glosa IA",
            "file": "descargas/modulo-analitica-predictiva-probabilidad-glosa.docx",
            "format": "DOCX"
          },
          {
            "title": "Caso de Estudio: Dataset y Dashboard Cuentas Médicas",
            "file": "descargas/caso-estudio-cuentas-medicas.xlsx",
            "format": "XLSX"
          },
          {
            "title": "Informe Oficial de Auditoría Emitido por ChatGPT",
            "file": "descargas/Reporte_profesional_glosas_cuentas_medicas.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Modelos Predictivos y Probabilidad de Glosa IA (Machine Learning Supervisado y SHAP)",
            "intuicion": "A diferencia de un LLM que redacta texto, un modelo predictivo calcula una probabilidad matemática exacta entre 0% y 100% de que una factura sea objetada, analizando patrones no lineales entre códigos de diagnóstico, procedimientos, manuales tarifarios y la contrapartes contractuales pagadora antes de enviar la cuenta.",
            "puntosClave": [
              "Resolviendo la limitante de datos: Confundir revisión contractual expuesta ($79.6M en Nueva EPS) con glosa efectiva sobreestima el riesgo; el modelo calcula la Pérdida Esperada real: Monto Glosado × Probabilidad IA.",
              "Algoritmos supervisados (XGBoost, Random Forest) calibrados con Platt Scaling para asegurar que un 80% signifique que 8 de cada 10 facturas similares sufrieron glosa.",
              "Explicabilidad SHAP: Convierte la IA en 'caja de cristal', indicando al abogado o auditor legal exactamente qué variable corregir (ej. +28% por autorización vencida, -15% por escala Glasgow).",
              "Semáforo operativo pre-radicación: Verde (<25%) Pase directo STP; Amarillo (25-60%) Auditoría concurrente focalizada; Rojo (>60%) Retener y subsanar en origen."
            ],
            "accion": "Configure en el simulador los parámetros de corte de su institución para que al menos el 50% de las cuentas de bajo riesgo pasen en Straight-Through Processing sin demora."
          },
          {
            "titulo": "El ciclo de revisión contractual en Legal y Cumplimiento y sus puntos críticos",
            "intuicion": "La revisión contractual en salud es una cadena: admisión → prestación → registro → codificación → revisión contractual → radicación → abogado o auditor legalía → cobro. Un error temprano se arrastra hasta el final y termina en glosa. La IA puede vigilar cada eslabón.",
            "puntosClave": [
              "Los errores más costosos nacen temprano: en admisión (derechos) y codificación (CIE-10/CUPS).",
              "Cada punto de la cadena es una oportunidad de control automático antes de avanzar.",
              "Medir el 'retrabajo' por etapa revela dónde la IA rinde más."
            ],
            "accion": "Dibuje el ciclo de revisión contractual de Dirección Jurídica & Cumplimiento y marque en rojo las 3 etapas donde hoy se originan más errores. Ahí se priorizan los controles con IA."
          },
          {
            "titulo": "Detección automática de errores de codificación",
            "intuicion": "Un modelo puede aprender qué combinaciones de diagnóstico, procedimiento y tarifa son coherentes y cuáles no, y alertar antes de facturar, como un corrector que marca incoherencias.",
            "puntosClave": [
              "Cruza CIE-10 (diagnóstico), CUPS (procedimiento) y tarifa contractual para detectar inconsistencias.",
              "Reduce riesgos e incumplimientos por pertinencia y por codificación, de las más frecuentes.",
              "Aprende de los errores históricos de Dirección Jurídica & Cumplimiento para mejorar con el tiempo."
            ],
            "accion": "Reúna ejemplos reales de inconsistencias diagnóstico–procedimiento detectadas en auditoría; son los casos de entrenamiento de un validador automático."
          },
          {
            "titulo": "Prevalidación inteligente de RIPS",
            "intuicion": "Antes de radicar, la IA revisa el RIPS completo (estructura, coherencia y completitud) y devuelve una lista de correcciones. Es revisar el examen antes de entregarlo.",
            "puntosClave": [
              "Valida estructura, coherencia clínica y completitud en segundos.",
              "Reduce devoluciones por errores formales y acelera la radicación.",
              "Libera al equipo de la revisión manual repetitiva."
            ],
            "accion": "Mida hoy la tasa de devolución de RIPS por errores formales; será la línea base para evaluar el impacto de una prevalidación con IA."
          },
          {
            "titulo": "Alertas de riesgos e incumplimientos recurrentes",
            "intuicion": "Si ciertas facturas siempre se glosan por el mismo motivo, la IA puede aprender ese patrón y avisar 'ésta tiene alta probabilidad de glosa' antes de enviarla.",
            "puntosClave": [
              "Asigna a cada factura una probabilidad de glosa y su motivo probable.",
              "Permite corregir antes de radicar, no después de ser objetada.",
              "Convierte la gestión de riesgos e incumplimientos de reactiva a preventiva."
            ],
            "accion": "Identifique los 5 motivos de glosa más repetidos; cada uno es una regla de alerta temprana que puede empezar a aplicarse incluso de forma manual."
          },
          {
            "titulo": "Auditoría inteligente de cuentas médicas",
            "intuicion": "En lugar de revisar al azar o el 100% manualmente, la IA prioriza las cuentas con mayor riesgo o mayor valor, enfocando al abogado o auditor legal donde más importa.",
            "puntosClave": [
              "Cruza soportes, tarifas, contratos y normativa para detectar cobros inconsistentes o subdeclarados.",
              "Prioriza la muestra de abogado o auditor legalía por riesgo y por impacto económico.",
              "Aumenta hallazgos sin aumentar el tamaño del equipo."
            ],
            "accion": "Defina un criterio de priorización por valor y riesgo para la auditoría concurrente; es el primer paso hacia una auditoría asistida por IA."
          },
          {
            "titulo": "Automatización de la conciliación de cartera",
            "intuicion": "Cruzar lo pagado contra lo radicado es tedioso y propenso a error. La IA empareja pagos y facturas, resalta diferencias y prioriza qué cobrar primero.",
            "puntosClave": [
              "Automatiza el cruce pagos–facturas e identifica partidas pendientes.",
              "Prioriza la gestión de cobro por antigüedad y monto.",
              "Mejora el flujo de caja de la IPS cliente."
            ],
            "accion": "Estime cuántas horas/mes dedica el equipo a conciliar cartera; ese tiempo es el ahorro potencial directo de automatizarla."
          },
          {
            "titulo": "Casos reales de IA en revisión contractual en la región",
            "intuicion": "Otros ya recorrieron el camino. Aprender de sus resultados (y errores) evita reinventar la rueda y ayuda a fijar metas realistas de mejora.",
            "puntosClave": [
              "Resultados típicos: reducción de riesgos e incumplimientos, menor tiempo de radicación, mayor recuperación de cartera.",
              "El éxito depende más de datos y procesos ordenados que de la herramienta elegida.",
              "Los pilotos acotados y medibles son la mejor forma de empezar."
            ],
            "accion": "Fije una meta cuantitativa inicial (p. ej. reducir riesgos e incumplimientos 2 puntos en 6 meses) inspirada en un caso comparable y hágala el objetivo del primer piloto."
          }
        ]
      },
      {
        "number": 6,
        "title": "Optimización Operativa: Predicción de Demanda y Automatización de Admisiones",
        "moduleId": 3,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender modelos de predicción de demanda aplicados a urgencias y consulta externa",
          "Conocer estrategias de IA para reducir no-shows y optimizar agendas expedientes jurídicos",
          "Explorar la automatización de procesos de admisiones y autorizaciones con aseguradoras",
          "Evaluar la viabilidad de implementar estas soluciones en el contexto de Dirección Jurídica & Cumplimiento"
        ],
        "practicalActivity": "Diagramación del Flujo As-Is vs. To-Be: Los líderes descargan la plantilla editable de PowerPoint y rediseñan el proceso de admisiones optimizado con IA.",
        "downloads": [
          {
            "title": "Plantilla Editable: Diagrama de Flujo de Procesos",
            "file": "descargas/plantilla-diagrama-flujo-procesos.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Predicción de demanda en urgencias",
            "intuicion": "Así como se predice el clima, se puede anticipar cuántos pacientes llegarán a urgencias por hora o día, para tener el personal justo: ni saturado ni ocioso.",
            "puntosClave": [
              "Usa series temporales y variables como día, hora, clima y estacionalidad.",
              "Permite planear turnos y recursos con anticipación.",
              "Mejora la atención y controla el costo de personal."
            ],
            "accion": "Consiga al menos un año de datos de llegadas a urgencias; sin histórico suficiente no hay predicción confiable."
          },
          {
            "titulo": "Predicción de demanda en consulta externa",
            "intuicion": "Conocer la demanda esperada por especialidad evita agendas vacías o sobrecargadas y mejora el uso de la capacidad instalada.",
            "puntosClave": [
              "Detecta patrones estacionales y efecto de campañas de promoción y prevención.",
              "Optimiza la oferta de citas por especialidad.",
              "Reduce tiempos de espera y mejora satisfacción."
            ],
            "accion": "Analice la demanda histórica de 2-3 especialidades críticas e identifique sus picos para ajustar la oferta de agenda."
          },
          {
            "titulo": "Reducción de inasistencias (no-shows)",
            "intuicion": "Cada cita perdida es capacidad desperdiciada e ingreso no generado. La IA identifica quién probablemente faltará y activa recordatorios dirigidos.",
            "puntosClave": [
              "Modelos que estiman la probabilidad de inasistencia por paciente.",
              "Recordatorios personalizados (SMS, WhatsApp, llamada) a los de mayor riesgo.",
              "Permite sobreagendar de forma controlada para compensar."
            ],
            "accion": "Mida su tasa de no-show actual y el ingreso asociado; es el caso de negocio que justifica un sistema de recordatorios inteligente."
          },
          {
            "titulo": "Optimización de agendas médicas",
            "intuicion": "Asignar citas no es solo llenar espacios: es equilibrar duración esperada, prioridad clínica y recursos. Los algoritmos encuentran la mejor combinación.",
            "puntosClave": [
              "Considera duración esperada, perfil del paciente, recursos y prioridad.",
              "Reduce tiempos muertos y mejora el flujo de pacientes.",
              "Equilibra carga entre profesionales."
            ],
            "accion": "Revise las reglas actuales de agendamiento y detecte una regla rígida que genere tiempos muertos; es la primera candidata a optimizar."
          },
          {
            "titulo": "Automatización de admisiones",
            "intuicion": "Buena parte de la admisión es verificar datos y derechos, tareas repetitivas que un flujo automatizado o un chatbot pueden resolver, dejando al personal los casos complejos.",
            "puntosClave": [
              "Pre-registro de pacientes y verificación automática de derechos con aseguradoras.",
              "Menos filas, menos errores de digitación y datos más completos para facturar.",
              "Datos de admisión correctos previenen riesgos e incumplimientos aguas abajo."
            ],
            "accion": "Cronometre el tiempo promedio de una admisión manual e identifique qué verificaciones podrían hacerse automáticamente."
          },
          {
            "titulo": "Automatización de autorizaciones",
            "intuicion": "Las autorizaciones dependen de ir y venir con las aseguradoras. Integrar sistemas vía API permite verificar coberturas y seguir el estado en tiempo real, sin llamadas ni correos manuales.",
            "puntosClave": [
              "Integración vía API con plataformas de aseguradoras.",
              "Verificación automática de coberturas y seguimiento de estado en tiempo real.",
              "Reduce demoras que retrasan la atención y el cobro."
            ],
            "accion": "Liste las aseguradoras con las que Dirección Jurídica & Cumplimiento tramita más autorizaciones y verifique cuáles ofrecen integración por API; ahí está el mayor ahorro."
          },
          {
            "titulo": "Del ahorro operativo al impacto financiero",
            "intuicion": "Optimizar operaciones no es solo comodidad: se traduce en pesos. Menos no-shows, mejor ocupación y admisiones más limpias impactan directamente el resultado.",
            "puntosClave": [
              "La eficiencia operativa reduce costos y aumenta ingresos por mejor uso de capacidad.",
              "Admisiones y autorizaciones correctas disminuyen riesgos e incumplimientos y aceleran el cobro.",
              "El impacto debe medirse con KPIs claros para sostener la inversión."
            ],
            "accion": "Para cada mejora operativa que proponga, exprese el beneficio en una cifra financiera estimada; así gana respaldo de la dirección."
          }
        ]
      },
      {
        "number": 7,
        "title": "Protección de Datos Sensibles en Legal y Cumplimiento y Cumplimiento Normativo",
        "moduleId": 4,
        "duration": "2 horas",
        "level": "Intermedio",
        "objectives": [
          "Comprender el marco legal colombiano (Ley 1581 de 2012) para datos de Legal y Cumplimiento",
          "Identificar riesgos de uso de IA con historias clínicas digitales (Resolución 866 de 2021)",
          "Conocer técnicas de anonimización y seudonimización aplicables",
          "Diseñar políticas institucionales de uso de IA seguras y auditables"
        ],
        "practicalActivity": "Taller de políticas corporativas: Redacción de la Política de Uso Responsable de IA de Dirección Jurídica & Cumplimiento con herramientas aprobadas y protocolos de contingencia.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Ley 1581 de 2012 (Habeas Data) aplicada a la IA",
            "intuicion": "Los datos de los pacientes tienen dueño: el paciente. La ley fija cómo se pueden usar. Antes de alimentar cualquier IA con datos personales, hay que cumplir estas reglas.",
            "puntosClave": [
              "Principios de finalidad, libertad, veracidad y seguridad en el tratamiento de datos.",
              "Los datos de Legal y Cumplimiento son 'sensibles': protección reforzada y usos restringidos.",
              "El consentimiento y la finalidad declarada limitan para qué se pueden usar los datos en IA."
            ],
            "accion": "Verifique que las finalidades declaradas en sus políticas de datos cubran el uso analítico; si no, actualícelas antes de iniciar proyectos de IA."
          },
          {
            "titulo": "Resolución 866 de 2021 y custodia de la historia clínica",
            "intuicion": "La historia clínica debe guardarse, protegerse y poder rastrearse quién la consulta. Cualquier IA que la toque debe respetar esas mismas exigencias.",
            "puntosClave": [
              "Requisitos de gestión, custodia y conservación de la historia clínica digital.",
              "Trazabilidad de accesos y respaldo de la información.",
              "Aplica también a los sistemas de IA que procesen o accedan a esos registros."
            ],
            "accion": "Exija a cualquier proveedor de IA que demuestre trazabilidad de accesos y respaldo conforme a la norma antes de contratarlo."
          },
          {
            "titulo": "Qué son los datos sensibles en Legal y Cumplimiento",
            "intuicion": "No todos los datos pesan igual. Diagnósticos, tratamientos e información genética son especialmente delicados y su filtración puede dañar a la persona y a la institución.",
            "puntosClave": [
              "Incluyen diagnósticos, tratamientos, antecedentes e información genética.",
              "Requieren el mayor nivel de protección y justificación de uso.",
              "Su manejo indebido conlleva sanciones y daño reputacional."
            ],
            "accion": "Clasifique qué campos de sus bases son sensibles y establezca que nunca salgan hacia herramientas externas sin anonimizar."
          },
          {
            "titulo": "Riesgos de usar IA externa con datos de pacientes",
            "intuicion": "Pegar datos en una IA pública es como enviarlos fuera de la empresa. Existen riesgos de filtración, de re-identificación y de transferencia internacional de datos.",
            "puntosClave": [
              "Filtración: la información podría quedar fuera del control de Dirección Jurídica & Cumplimiento.",
              "Re-identificación: datos 'anónimos' mal tratados pueden volver a identificar a una persona.",
              "Transferencia internacional: muchos servicios almacenan datos en otros países."
            ],
            "accion": "Defina una lista de herramientas aprobadas y prohibidas, y la regla de anonimizar siempre antes de usar IA externa."
          },
          {
            "titulo": "Anonimización y seudonimización",
            "intuicion": "Se puede aprovechar el valor de los datos sin exponer a las personas: quitando o reemplazando lo que identifica. Así se usa IA con menor riesgo legal.",
            "puntosClave": [
              "Anonimizar: eliminar de forma irreversible los identificadores.",
              "Seudonimizar: reemplazar identificadores por códigos reversibles bajo control.",
              "Técnicas como k-anonimato y privacidad diferencial reducen el riesgo de re-identificación."
            ],
            "accion": "Cree un procedimiento estándar de anonimización para los conjuntos de datos que su equipo use en análisis con IA."
          },
          {
            "titulo": "Consentimiento informado para el uso de IA",
            "intuicion": "Cuando los datos de un paciente se procesan con IA, surge la pregunta: ¿hace falta un permiso adicional? La respuesta depende de la finalidad y de cómo se declararon los usos.",
            "puntosClave": [
              "El uso debe estar cubierto por la finalidad autorizada por el titular.",
              "Usos nuevos o distintos pueden requerir consentimiento adicional.",
              "La transparencia con el paciente reduce riesgos legales y reputacionales."
            ],
            "accion": "Revise con el área jurídica si los consentimientos actuales cubren el tratamiento analítico y ajuste los formatos si es necesario."
          },
          {
            "titulo": "Política corporativa de uso de IA",
            "intuicion": "Una política clara evita improvisaciones. Define qué herramientas se pueden usar, con qué datos y quién responde. Es el 'manual de tránsito' de la IA en Dirección Jurídica & Cumplimiento.",
            "puntosClave": [
              "Herramientas aprobadas y datos prohibidos, por escrito.",
              "Proceso para evaluar y aprobar nuevas herramientas.",
              "Responsables y protocolo ante incidentes de datos."
            ],
            "accion": "Impulse la aprobación de una 'Política de Uso Responsable de IA' en Dirección Jurídica & Cumplimiento; sin ella, cada área improvisará con riesgos distintos."
          }
        ]
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
          "Conocer fundamentos de ciberseguridad para proteger plataformas de Legal y Cumplimiento"
        ],
        "practicalActivity": "Debate y protocolo de mitigación: Análisis de un modelo de auditoría con sesgo histórico de objeción y establecimiento del protocolo de revisión humana.",
        "downloads": [],
        "topicsDetailed": [
          {
            "titulo": "Qué es el sesgo algorítmico en revisión contractual y auditoría",
            "intuicion": "Si la IA aprende de datos históricos injustos, repetirá esa injusticia. Por ejemplo, si cierto servicio siempre fue más glosado, el modelo podría penalizarlo de forma desproporcionada.",
            "puntosClave": [
              "El sesgo nace en los datos de entrenamiento, no en una mala intención del modelo.",
              "Puede llevar a decisiones sistemáticamente erróneas contra un servicio, especialidad o aseguradora.",
              "Detectarlo exige monitorear los resultados por grupos, no solo el promedio."
            ],
            "accion": "Pida a cualquier proveedor de IA que muestre cómo mide y controla el sesgo de su modelo antes de confiar en sus decisiones."
          },
          {
            "titulo": "Tipos de sesgo y cómo detectarlos",
            "intuicion": "El sesgo tiene varias formas. Reconocerlas ayuda a hacer las preguntas correctas y a no aceptar resultados a ciegas.",
            "puntosClave": [
              "Selección: los datos no representan bien la realidad; Medición: se capturó mal la información.",
              "Confirmación: se busca lo que confirma lo que ya se creía; Histórico: se hereda una injusticia pasada.",
              "Se mitigan con datos representativos, revisión humana y abogado o auditor legalía periódica del modelo."
            ],
            "accion": "Antes de adoptar un modelo, pregunte con qué datos se entrenó y si representan la operación real de Dirección Jurídica & Cumplimiento."
          },
          {
            "titulo": "Human-in-the-Loop: la IA apoya, el humano decide",
            "intuicion": "En procesos críticos, la IA nunca debe decidir sola. Propone y el experto valida. Es como el copiloto: ayuda a volar, pero el comandante manda.",
            "puntosClave": [
              "La IA sugiere y prioriza; la persona confirma, corrige y aprende.",
              "Esencial donde hay dinero, derechos o Legal y Cumplimiento en juego.",
              "El circuito de corrección humana también mejora el modelo con el tiempo."
            ],
            "accion": "Diseñe todo flujo de IA en Dirección Jurídica & Cumplimiento con un punto obligatorio de validación humana antes de ejecutar decisiones críticas."
          },
          {
            "titulo": "Responsabilidad institucional ante errores de la IA",
            "intuicion": "Si un modelo aprueba una factura incorrecta, la responsabilidad no desaparece: sigue siendo de la institución. Por eso hay que definir desde el inicio quién responde.",
            "puntosClave": [
              "La IA es una herramienta; la responsabilidad legal y contractual es de Dirección Jurídica & Cumplimiento.",
              "Debe definirse quién supervisa, quién aprueba y quién responde por cada decisión.",
              "La documentación de controles es clave para demostrar diligencia."
            ],
            "accion": "Establezca una matriz de responsabilidades (RACI) para cada proceso con IA: quién supervisa, aprueba y responde."
          },
          {
            "titulo": "Transparencia y explicabilidad",
            "intuicion": "Un modelo que no explica por qué decidió algo es una 'caja negra' peligrosa en salud. Los directivos deben exigir que las decisiones sean comprensibles y auditables.",
            "puntosClave": [
              "Caja negra vs. caja blanca: prefiera modelos que justifiquen sus salidas.",
              "La explicabilidad permite auditar, corregir y defender decisiones ante EPS o entes de control.",
              "Es también un requisito creciente de la regulación."
            ],
            "accion": "Incluya 'explicabilidad' como requisito obligatorio en la evaluación de cualquier solución de IA para Dirección Jurídica & Cumplimiento."
          },
          {
            "titulo": "Ciberseguridad para entornos de salud",
            "intuicion": "Los departamento jurídico o firmaes son blanco frecuente de ataques porque manejan datos valiosos. Proteger los sistemas de IA y los datos es parte inseparable del proyecto.",
            "puntosClave": [
              "El ransomware ha paralizado instituciones de Legal y Cumplimiento reales.",
              "Medidas básicas: autenticación multifactor, protección de equipos y segmentación de redes.",
              "La seguridad es responsabilidad compartida entre Dirección Jurídica & Cumplimiento y sus proveedores."
            ],
            "accion": "Verifique que las medidas básicas (MFA, respaldos, segmentación) estén activas antes de conectar nuevos sistemas de IA."
          },
          {
            "titulo": "Plan de respuesta ante incidentes",
            "intuicion": "No se trata de si ocurrirá un incidente, sino de cuándo. Tener un plan listo reduce el daño y el tiempo de recuperación.",
            "puntosClave": [
              "Protocolo claro ante brechas de datos o ataques: contener, notificar, recuperar.",
              "Roles y responsables definidos antes de la crisis.",
              "Obligaciones de notificación a autoridades y titulares según la norma."
            ],
            "accion": "Asegúrese de que Dirección Jurídica & Cumplimiento cuente con un protocolo de incidentes escrito y probado, que cubra también los sistemas de IA."
          }
        ]
      },
      {
        "number": 9,
        "title": "Marco de Priorización de Proyectos de IA y Decisión Buy/Partner/Build",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
          "Aplicar la matriz Impacto vs. Esfuerzo para priorizar iniciativas de IA en Legal y Cumplimiento",
          "Evaluar la decisión estratégica Buy/Partner/Build para cada proyecto de Dirección Jurídica & Cumplimiento",
          "Definir KPIs de éxito operativo y financiero (tasa de riesgos e incumplimientos, días cartera, costo por factura)",
          "Construir un roadmap de implementación a 12 meses alineado con la estrategia"
        ],
        "practicalActivity": "Taller de priorización en PowerPoint: Clasificación de 8 proyectos reales de Dirección Jurídica & Cumplimiento en los cuadrantes de Quick Wins, Estratégicos o Tácticos.",
        "downloads": [
          {
            "title": "Plantilla Editable: Matriz Impacto vs. Esfuerzo",
            "file": "descargas/plantilla-matriz-impacto-esfuerzo.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Marco de priorización: Impacto vs. Esfuerzo",
            "intuicion": "No todo proyecto de IA vale la pena primero. La clave es comparar cuánto valor genera contra cuánto cuesta implementarlo, y empezar por lo más rentable y fácil.",
            "puntosClave": [
              "Impacto: reducción de errores, tiempos y costos, o recuperación de ingresos.",
              "Esfuerzo: datos disponibles, tecnología, integración y cambio organizacional.",
              "Evita el error de empezar por el proyecto más vistoso en lugar del más rentable."
            ],
            "accion": "Puntúe cada idea de IA de su área en impacto y esfuerzo (escala 1-5); tendrá un ranking objetivo para decidir."
          },
          {
            "titulo": "La matriz de priorización en cuatro cuadrantes",
            "intuicion": "Al ubicar los proyectos en una matriz, aparecen cuatro grupos claros. Los 'Quick Wins' (mucho impacto, poco esfuerzo) son por donde se debe empezar para generar confianza.",
            "puntosClave": [
              "Quick Wins: alto impacto, bajo esfuerzo — prioridad inmediata.",
              "Estratégicos: alto impacto, alto esfuerzo — planear a mediano plazo.",
              "Tácticos y 'a evitar': bajo impacto — postergar o descartar."
            ],
            "accion": "Ubique su lista de proyectos en la matriz y comprometa recursos primero con un Quick Win para demostrar valor temprano."
          },
          {
            "titulo": "Decisión Buy / Partner / Build",
            "intuicion": "Ante una necesidad de IA hay tres caminos: comprar una solución lista, aliarse con un proveedor, o construirla internamente. Cada uno conviene en situaciones distintas.",
            "puntosClave": [
              "Buy: rápido y probado, menos personalizable — ideal para problemas estándar.",
              "Partner: equilibra personalización y velocidad — útil para necesidades específicas.",
              "Build: máximo control y costo — solo si es un diferenciador central y hay capacidad."
            ],
            "accion": "Para su proyecto prioritario, evalúe las tres opciones con criterios de costo, tiempo y especificidad, y justifique la elección."
          },
          {
            "titulo": "KPIs de éxito para proyectos de IA en Dirección Jurídica & Cumplimiento",
            "intuicion": "Lo que no se mide no se puede mejorar ni defender. Antes de iniciar, hay que definir cómo se verá el éxito en números.",
            "puntosClave": [
              "Ejemplos: tasa de riesgos e incumplimientos, días de respuesta a riesgos e incumplimientos, % de facturas aprobadas al primer envío, costo por factura, tiempo de radicación.",
              "Cada KPI necesita una línea base (valor actual) y una meta.",
              "Pocos KPIs claros valen más que muchos indicadores difusos."
            ],
            "accion": "Para cada proyecto, defina 3 KPIs con su valor actual y su meta a 12 meses antes de aprobar la inversión."
          },
          {
            "titulo": "Cálculo de ROI de proyectos de IA",
            "intuicion": "El ROI responde la pregunta de la dirección: ¿vale la pena? Se comparan los ahorros y mayores ingresos contra el costo total del proyecto.",
            "puntosClave": [
              "Costos: licencias, implementación, capacitación y mantenimiento.",
              "Beneficios: menos riesgos e incumplimientos, menos retrabajo, mayor recuperación de cartera.",
              "Incluya el punto de equilibrio: en cuántos meses se recupera la inversión."
            ],
            "accion": "Construya un ROI simple a 3 años para su proyecto prioritario; aunque sea estimado, enfoca la conversación con la dirección."
          },
          {
            "titulo": "Gestión del cambio organizacional",
            "intuicion": "La tecnología falla más por la gente que por la máquina. Si el equipo no entiende ni confía en la IA, el proyecto no se adopta por bueno que sea.",
            "puntosClave": [
              "Comunicar el 'para qué' y cómo beneficia al trabajo diario.",
              "Capacitar a los usuarios finales y acompañar la transición.",
              "Usar Quick Wins para generar confianza y vencer la resistencia."
            ],
            "accion": "Incluya en todo proyecto un plan de comunicación y capacitación; sin adopción, no hay retorno."
          },
          {
            "titulo": "Roadmap de implementación a 12 meses",
            "intuicion": "Un buen proyecto avanza por fases: primero un piloto pequeño, luego se valida y después se escala. Así se controla el riesgo y se aprende en el camino.",
            "puntosClave": [
              "Fases: piloto → validación → escalamiento, con hitos y responsables.",
              "Métricas de seguimiento en cada fase para decidir si continuar.",
              "Un roadmap realista evita sobrepromesas y frustración."
            ],
            "accion": "Dibuje el roadmap de su proyecto prioritario con 3 fases, hitos y responsables para los próximos 12 meses."
          }
        ]
      },
      {
        "number": 10,
        "title": "Taller Final — Proyecto Integrador: Business Case de IA para Dirección Jurídica & Cumplimiento",
        "moduleId": 5,
        "duration": "2 horas",
        "level": "Intermedio-Estratégico",
        "objectives": [
          "Formular un Business Case completo de IA para un proceso real de Dirección Jurídica & Cumplimiento",
          "Integrar conocimientos de los módulos en una propuesta ejecutiva formal",
          "Presentar y defender el proyecto ante directivos con argumentos técnicos y financieros",
          "Recibir retroalimentación y acordar hoja de ruta de implementación"
        ],
        "practicalActivity": "Comité de Inversión y Defensa de Proyectos: Presentación ejecutiva de 10 minutos por equipo defendiendo su Business Case ante el facilitador y directivos.",
        "downloads": [
          {
            "title": "Plantilla de Business Case de IA",
            "file": "descargas/plantilla-business-case-ia.docx",
            "format": "DOCX"
          },
          {
            "title": "Guía: Cómo Presentar un Proyecto de Tecnología a la Alta Dirección",
            "file": "descargas/guia-presentar-proyecto-alta-direccion.pdf",
            "format": "PDF"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Estructura de un Business Case de IA",
            "intuicion": "Un Business Case es la historia que convence a la dirección de invertir: qué problema resolvemos, cómo, cuánto cuesta y qué ganamos. Ordenarlo bien es la mitad del éxito.",
            "puntosClave": [
              "Componentes: problema, solución, alcance, beneficios, costos, riesgos, cronograma y equipo.",
              "Debe caber en pocas páginas y hablar el lenguaje de la dirección: valor y riesgo.",
              "Cada afirmación se respalda con datos, no con opiniones."
            ],
            "accion": "Use la plantilla de Business Case del programa como esqueleto y compétela con los datos reales de su proceso."
          },
          {
            "titulo": "Selección del proceso a intervenir",
            "intuicion": "El primer proyecto debe elegirse con cabeza: un proceso con dolor claro, datos disponibles y alto impacto. Facturación, riesgos e incumplimientos, admisiones o autorizaciones son candidatos naturales en Dirección Jurídica & Cumplimiento.",
            "puntosClave": [
              "Prefiera procesos con problema medible y datos históricos disponibles.",
              "Equilibre impacto esperado con viabilidad de implementación.",
              "Un alcance acotado aumenta la probabilidad de éxito del piloto."
            ],
            "accion": "Elija un único proceso para su Business Case y resista la tentación de abarcar todo a la vez."
          },
          {
            "titulo": "Definir el problema con datos",
            "intuicion": "'Tenemos muchas riesgos e incumplimientos' no es un problema accionable. 'La tasa de riesgos e incumplimientos es del 18% y cuesta X al mes' sí lo es. Los números convierten una queja en un caso de inversión.",
            "puntosClave": [
              "Cuantifique la situación actual: tiempos, errores, costos y volúmenes.",
              "Defina la brecha: dónde estamos vs. dónde queremos llegar.",
              "La línea base permitirá demostrar el impacto después."
            ],
            "accion": "Reúna las 3-4 cifras que describen el problema de su proceso elegido; son el corazón del Business Case."
          },
          {
            "titulo": "Diseño de la solución",
            "intuicion": "Aquí se conecta el problema con la tecnología: qué tipo de IA, qué datos necesita, cómo se integra con lo existente y si se compra, se asocia o se construye.",
            "puntosClave": [
              "Especifique tipo de IA, datos requeridos e integraciones necesarias.",
              "Defina el modelo de implementación (Buy/Partner/Build) y por qué.",
              "Describa el flujo con Human-in-the-Loop donde corresponda."
            ],
            "accion": "Dibuje el flujo 'antes vs. después' de su proceso con la solución propuesta; hace tangible el cambio."
          },
          {
            "titulo": "Análisis financiero del proyecto",
            "intuicion": "La dirección aprueba con números. Hay que mostrar cuánto cuesta el primer año, cuánto se ahorra o recupera y en cuánto tiempo se paga solo.",
            "puntosClave": [
              "Inversión año 1 vs. ahorros proyectados años 1-3.",
              "Punto de equilibrio e indicadores de rentabilidad (ROI).",
              "Sea conservador: mejor prometer menos y cumplir."
            ],
            "accion": "Calcule el ahorro mensual estimado y el mes de equilibrio de su proyecto; son las cifras que más pesan en la decisión."
          },
          {
            "titulo": "Plan de implementación",
            "intuicion": "Una buena idea sin plan de ejecución no se aprueba. Hay que mostrar fases realistas, responsables y de qué depende el éxito.",
            "puntosClave": [
              "Fases con hitos, equipo responsable y dependencias técnicas y organizacionales.",
              "Un piloto inicial medible antes de escalar.",
              "Riesgos identificados con su plan de mitigación."
            ],
            "accion": "Añada a su Business Case un cronograma simple de 3 fases con responsables claros."
          },
          {
            "titulo": "Presentación ejecutiva del proyecto",
            "intuicion": "Diez minutos bien usados valen más que cincuenta diapositivas. La dirección quiere escuchar: problema → solución → impacto → inversión → plan → siguiente paso.",
            "puntosClave": [
              "Cuente una historia clara y respaldada en datos, no una lista de funciones técnicas.",
              "Anticipe las preguntas difíciles (riesgos, datos, costos).",
              "Cierre siempre con una petición concreta (el 'siguiente paso')."
            ],
            "accion": "Prepare su presentación de 10 minutos siguiendo la secuencia problema→solución→impacto→inversión→plan→siguiente paso y ensáyela."
          }
        ]
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
          {
            "title": "Canvas de Arquitectura de Agentes de IA",
            "file": "descargas/canvas-agentes-ia.pptx",
            "format": "PPTX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Del Asistente Pasivo al Agente Autónomo en Legal y Cumplimiento",
            "intuicion": "Un LLM común te redacta una carta si se lo pides; un Agente Autónomo en salud detecta que llegó una objeción de glosa al buzón institucional, abre el sistema departamento jurídico o firmaario, descarga los soportes clínicos, valida la pertinencia y deja listo el borrador de respuesta.",
            "puntosClave": [
              "Arquitectura ReAct: Bucle iterativo de 'Razonar -> Actuar -> Observar el resultado -> Siguiente paso'.",
              "Descomposición de objetivos complejos: Dividir 'conciliar cartera mensual' en subtareas autónomas.",
              "Diferencia entre automatización rígida (RPA) e IA Agéntica con comprensión de contexto clínico."
            ],
            "accion": "Mapear un cuello de botella en Dirección Jurídica & Cumplimiento donde hoy un analista pasa horas copiando datos entre el ERP y el correo para evaluar su viabilidad como agente."
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
            "intuicion": "Permite que el agente recuerde acuerdos contractuales específicos de cada contrapartes contractuales y excepciones negociadas sin tener que repetírselas en cada consulta.",
            "puntosClave": [
              "Memoria a corto plazo (Context Window): Historial de la transacción actual en curso.",
              "Memoria a largo plazo (Bases Vectoriales): Políticas de contratación y acuerdos comerciales históricos.",
              "Memoria procedimental: Instrucciones permanentes de estilo institucional y directrices inviolables de Dirección Jurídica & Cumplimiento."
            ],
            "accion": "Crear el catálogo de 'Reglas Inmutables de Auditoría' que ningún agente de Dirección Jurídica & Cumplimiento puede violar en sus resoluciones."
          },
          {
            "titulo": "Niveles de Autonomía y Barreras de Seguridad (Guardrails)",
            "intuicion": "Establecer qué decisiones puede tomar el agente por su cuenta y cuáles requieren aprobación obligatoria de un coordinador.",
            "puntosClave": [
              "Escala de autonomía: L1 Asistente, L2 Copiloto con confirmación previa, L3 Autónomo con monitoreo por excepción.",
              "Límites transaccionales: Aprobación autónoma de cuentas de hasta $500,000 COP; montos superiores exigen firma de abogado o auditor legal sénior.",
              "Prevención de bucles infinitos: Límite estricto de máximo 6 iteraciones de razonamiento por caso."
            ],
            "accion": "Definir la matriz de umbrales económicos de aprobación autónoma para su departamento."
          }
        ]
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
          {
            "title": "Plantilla de Orquestación Multi-Agente y Matriz HITL",
            "file": "descargas/plantilla-orquestacion-multiagente.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Arquitecturas Multi-Agente: Células Operativas Especializadas",
            "intuicion": "En lugar de sobrecargar a un solo agente con todo el ciclo de cuentas médicas, se crea un equipo de agentes especializados: uno extrae datos, otro audita tarifas y otro redacta el informe.",
            "puntosClave": [
              "Patrón Supervisor-Trabajadores: Un agente orquestador recibe el caso, lo clasifica y asigna subtareas a los agentes especialistas.",
              "Patrón Maker-Checker (Creador y Revisor): Un agente redacta la respuesta a la glosa y un segundo agente (abogado o auditor legal legal) revisa que cumpla la Resolución 3047 antes de emitirla.",
              "Reducción de alucinaciones y fatiga de contexto al mantener las instrucciones de cada agente concisas y enfocadas."
            ],
            "accion": "Dibujar el diagrama de roles de una célula de 3 agentes para el proceso de auditoría concurrente en Dirección Jurídica & Cumplimiento."
          },
          {
            "titulo": "Orquestación y Enrutamiento al Experto Humano (HITL)",
            "intuicion": "El agente no es un reemplazo ciego del abogado o auditor legal; es su filtro principal. Cuando un caso tiene inconsistencias clínicas o legales complejas, lo traslada con un resumen ejecutivo.",
            "puntosClave": [
              "Score de Confianza (Confidence Threshold): Si la certeza del modelo en la objeción es menor al 85%, el caso pasa a bandeja humana.",
              "Handoff estructurado: El agente entrega al humano el resumen del problema, los artículos normativos aplicables y la recomendación tentativa.",
              "Aprendizaje continuo: La corrección efectuada por el abogado o auditor legal humano se guarda como ejemplo 'Few-Shot' para casos futuros."
            ],
            "accion": "Establecer la lista de las 5 causas de glosa que siempre deben pasar a revisión de un auditor médico humano."
          },
          {
            "titulo": "Medición de Confiabilidad y Tasa de Autonomía (STP)",
            "intuicion": "Medir exactamente qué porcentaje de facturas o abogado o auditor legalías se resolvieron sin intervención humana (Straight-Through Processing).",
            "puntosClave": [
              "Métrica STP: (Casos 100% autónomos sin error) / (Total casos procesados) * 100.",
              "Costo por transacción: Comparativa del costo por cuenta médica manual ($5,000 COP) vs. costo agéntico ($350 COP en cómputo/tokens).",
              "Trazabilidad inmutable: Registro de cada pensamiento, consulta de herramienta y respuesta emitida para fines de abogado o auditor legalía externa."
            ],
            "accion": "Calcular la meta de STP para el primer trimestre de implementación del escuadrón agéntico en Dirección Jurídica & Cumplimiento."
          }
        ]
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
          {
            "title": "Manual de RAG Empresarial con Cero Alucinación",
            "file": "descargas/manual-rag-empresarial-cero-alucinacion.docx",
            "format": "DOCX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "RAG Empresarial: Conectando IA con la Base de Conocimiento de Dirección Jurídica & Cumplimiento",
            "intuicion": "Conectar el modelo de lenguaje a los manuales de contratación, resoluciones del Ministerio y acuerdos con contrapartes contractuales sin peligro de fuga de datos ni reentrenamientos costosos.",
            "puntosClave": [
              "Separación de conocimiento y razonamiento: El LLM pone la capacidad de redactar y sintetizar; la base de datos documental de Dirección Jurídica & Cumplimiento pone los hechos verídicos.",
              "Eliminación de alucinaciones: El modelo se condiciona mediante prompts de Grounding estricto a responder únicamente citando el párrafo exacto.",
              "Actualización en tiempo real: Si el Ministerio de Salud emite una nueva circular hoy, basta subir el PDF para que la IA la aplique de inmediato."
            ],
            "accion": "Seleccionar los 5 documentos normativos o tarifarios prioritarios para conformar la primera base RAG de Dirección Jurídica & Cumplimiento."
          },
          {
            "titulo": "Chunking Semántico y Búsqueda Híbrida en Legal y Cumplimiento",
            "intuicion": "Si cortas un manual tarifario en pedazos al azar, separas el código CUPS de su descripción y tarifa. El troceo inteligente conserva tablas y reglas completas.",
            "puntosClave": [
              "Chunking jerárquico y semántico: Fragmentar respetando capítulos, artículos y tablas tarifarias completas.",
              "Búsqueda híbrida (Dense + BM25): Combina búsqueda por conceptos ('biopsia guiada por ecografía') con búsqueda por códigos exactos ('381101').",
              "Re-ranking: Un segundo modelo reclasifica los 10 mejores fragmentos para garantizar que el más pertinente quede en el contexto superior."
            ],
            "accion": "Diseñar la plantilla de metadata obligatoria (contrapartes contractuales, fecha vigencia, régimen subsidiado/contributivo) para cada documento indexado."
          },
          {
            "titulo": "Evaluación Continua de RAG con el Framework Ragas",
            "intuicion": "Auditar científicamente qué tan fiel y exacto es el sistema antes de permitir que responda consultas reales de abogado o auditor legalía.",
            "puntosClave": [
              "Fidelidad (Faithfulness): ¿Todo lo que dijo la respuesta está respaldado en los documentos recuperados o inventó algo?",
              "Relevancia de la respuesta: ¿Respondió concretamente lo que preguntó el directivo?",
              "Relevancia del contexto: ¿El motor de búsqueda trajo los fragmentos correctos o trajo ruido irrelevante?"
            ],
            "accion": "Formular un banco de 10 preguntas de prueba con respuesta dorada verificada por un auditor experto para evaluar el RAG."
          }
        ]
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
          {
            "title": "Calculadora de TCO y Evaluación de Modelos de IA",
            "file": "descargas/plantilla-tco-evaluacion-modelos-ia.xlsx",
            "format": "XLSX"
          }
        ],
        "topicsDetailed": [
          {
            "titulo": "Soberanía de Datos: Modelos Locales vs. Nube Privada",
            "intuicion": "Evaluar cuándo usar modelos de proveedores internacionales (OpenAI, Anthropic, Google) con acuerdos de confidencialidad BAA, y cuándo desplegar modelos de código abierto (Llama 3, Mistral) en servidores propios.",
            "puntosClave": [
              "Cumplimiento de Habeas Data (Ley 1581): Datos clínicos sensibles y restricciones de transferencia transfronteriza.",
              "Modelos de Pesos Abiertos (Open Source): Capacidad de correr modelos de 8B o 70B parámetros en infraestructura local sin enviar un solo byte a internet.",
              "Small Language Models (SLMs): Modelos compactos ultra-rápidos y de costo casi nulo para tareas específicas de extracción y clasificación."
            ],
            "accion": "Clasificar los tipos de datos de Dirección Jurídica & Cumplimiento en Semáforo Verde (públicos/normas), Amarillo (administrativos) y Rojo (datos clínicos con reserva)."
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
              "Latencia y disponibilidad: Tiempos de respuesta para no degradar la experiencia de los abogado o auditor legales y facturadores.",
              "Seguridad y Prompt Injection: Filtros de entrada para evitar que usuarios maliciosos engañen al modelo o extraigan prompts del sistema."
            ],
            "accion": "Definir el límite de presupuesto mensual de API y los indicadores clave del dashboard de monitoreo de IA de Dirección Jurídica & Cumplimiento."
          }
        ]
      }
    ]
  }
},
  modules: [
  {
    "id": 1,
    "title": "Fundamentos de IA y Diagnóstico de Madurez",
    "level": "Básico",
    "sessions": [
      1,
      2
    ],
    "icon": "Brain",
    "description": "Comprenda qué es la IA, distinga ML, Deep Learning y GenAI, y diagnostique el nivel de madurez digital de sus procesos."
  },
  {
    "id": 2,
    "title": "IA Generativa y Productividad Aumentada",
    "level": "Básico-Práctico",
    "sessions": [
      3,
      4
    ],
    "icon": "Wrench",
    "description": "Domine técnicas de Prompt Engineering y análisis de datos sin programar para acelerar redacción y toma de decisiones."
  },
  {
    "id": 3,
    "title": "IA Aplicada a Procesos Críticos de Negocio",
    "level": "Intermedio",
    "sessions": [
      5,
      6
    ],
    "icon": "Building2",
    "description": "Rediseñe el flujo operativo identificando puntos de intervención con modelos predictivos y validación automática."
  },
  {
    "id": 4,
    "title": "Ética, Privacidad, Normativa y Ciberseguridad",
    "level": "Intermedio",
    "sessions": [
      7,
      8
    ],
    "icon": "ShieldCheck",
    "description": "Garantice la protección de datos sensibles, mitigue el sesgo algorítmico, aplique Human-in-the-Loop y blinde la seguridad."
  },
  {
    "id": 5,
    "title": "Estrategia de Portafolio, Decisión Buy/Build y ROI",
    "level": "Intermedio-Estratégico",
    "sessions": [
      9,
      10
    ],
    "icon": "BarChart3",
    "description": "Priorice iniciativas con la matriz Impacto vs. Esfuerzo, calcule el retorno de inversión y formule un Business Case ejecutivo."
  },
  {
    "id": 6,
    "title": "Agentes Autónomos y Sistemas Multi-Agente",
    "level": "Avanzado",
    "sessions": [
      11,
      12
    ],
    "icon": "Bot",
    "description": "Evolucione hacia sistemas que razonan, usan herramientas (Tool Use/MCP) y colaboran entre sí para ejecutar procesos complejos."
  },
  {
    "id": 7,
    "title": "Arquitecturas RAG Empresariales, Soberanía y LLMOps",
    "level": "Avanzado",
    "sessions": [
      13,
      14
    ],
    "icon": "Cpu",
    "description": "Conecte LLMs a bases de conocimiento privadas sin alucinación, evalúe modelos locales vs. APIs y gobierne el ciclo de vida de la IA."
  }
],
  maturity: {
  "salud": {
    "title": "Diagnóstico de Madurez Digital en Salud",
    "subtitle": "Evaluación en 6 dimensiones críticas para empresas de soporte y gestión en salud",
    "dimensions": [
      {
        "id": "facturacion",
        "name": "Facturación y Radicación",
        "desc": "Automatización y oportunidad en la generación y envío de cuentas médicas."
      },
      {
        "id": "auditoria",
        "name": "Auditoría Médica y Glosas",
        "desc": "Capacidad de predecir, prevenir y sustentar objeciones y glosas."
      },
      {
        "id": "admisiones",
        "name": "Admisiones y Agendamiento",
        "desc": "Digitalización del pre-registro, asignación de citas y control de no-shows."
      },
      {
        "id": "autorizaciones",
        "name": "Autorizaciones con Aseguradoras",
        "desc": "Conectividad vía APIs o automatización con plataformas de EPS."
      },
      {
        "id": "calidad_datos",
        "name": "Calidad de Datos y RIPS",
        "desc": "Estandarización de diagnósticos CIE-10, procedimientos CUPS y consistencia."
      },
      {
        "id": "interoperabilidad",
        "name": "Interoperabilidad y Sistemas",
        "desc": "Integración entre HIS, ERP hospitalario, facturación electrónica y cloud."
      }
    ]
  },
  "finanzas": {
    "title": "Diagnóstico de Madurez Digital Financiera",
    "subtitle": "Evaluación en 6 dimensiones para entidades financieras, bancarias y corporativas",
    "dimensions": [
      {
        "id": "conciliacion",
        "name": "Conciliación Contable y Bancaria",
        "desc": "Cruce automatizado de extractos, pagos y partidas pendientes."
      },
      {
        "id": "fraude",
        "name": "Detección de Fraude y Anomalías",
        "desc": "Monitoreo en tiempo real de transacciones sospechosas y patrones de fuga."
      },
      {
        "id": "scoring",
        "name": "Evaluación Crediticia y Scoring",
        "desc": "Modelos predictivos para originación de crédito y análisis de solvencia."
      },
      {
        "id": "reportes",
        "name": "Reportes Financieros y Cierre",
        "desc": "Automatización de estados financieros, consolidación y minutas de junta."
      },
      {
        "id": "gobernanza_datos",
        "name": "Gobernanza y Calidad del Dato",
        "desc": "Unificación de silos entre core bancario, ERP contable y pasarelas."
      },
      {
        "id": "cumplimiento",
        "name": "Compliance y SARLAFT / AML",
        "desc": "Diligencia debida y filtrado contra listas restrictivas con IA."
      }
    ]
  },
  "logistica": {
    "title": "Diagnóstico de Madurez Digital en Operaciones & Logística",
    "subtitle": "Evaluación en 6 dimensiones para cadenas de suministro y distribución",
    "dimensions": [
      {
        "id": "demanda",
        "name": "Pronóstico de Demanda",
        "desc": "Modelos de series temporales para prever quiebres y estacionalidad."
      },
      {
        "id": "inventario",
        "name": "Gestión Inteligente de Stock",
        "desc": "Optimización de niveles mínimos/máximos y rotación en bodegas."
      },
      {
        "id": "ruteo",
        "name": "Logística de Despacho y Ruteo",
        "desc": "Algoritmos para optimizar flotas, tiempos de entrega y combustible."
      },
      {
        "id": "compras",
        "name": "Compras y Proveedores",
        "desc": "Automatización de órdenes de compra y comparativa de cotizaciones."
      },
      {
        "id": "visibilidad",
        "name": "Trazabilidad End-to-End",
        "desc": "Integración de ERP, TMS, WMS y sensores IoT en una sola vista."
      },
      {
        "id": "mantenimiento",
        "name": "Mantenimiento Predictivo",
        "desc": "Monitoreo de maquinaria y alertas tempranas antes de fallas críticas."
      }
    ]
  },
  "legal": {
    "title": "Diagnóstico de Madurez Digital Jurídica & Compliance",
    "subtitle": "Evaluación en 6 dimensiones para departamentos legales y corporativos",
    "dimensions": [
      {
        "id": "clm",
        "name": "Ciclo Contractual (CLM)",
        "desc": "Redacción, negociación y seguimiento de hitos de contratos con IA."
      },
      {
        "id": "extraccion",
        "name": "Extracción y Análisis de Cláusulas",
        "desc": "Identificación de penalidades, vigencias y riesgos ocultos en documentos."
      },
      {
        "id": "normativa",
        "name": "Monitoreo Regulatorio",
        "desc": "Síntesis continua de leyes, decretos y resoluciones aplicables."
      },
      {
        "id": "litigios",
        "name": "Gestión de Procesos Judiciales",
        "desc": "Análisis de antecedentes, jurisprudencia y predicción de probabilidades."
      },
      {
        "id": "repositorio",
        "name": "Memoria Documental e Indexación",
        "desc": "Digitalización y búsqueda semántica en el histórico jurídico institucional."
      },
      {
        "id": "privacidad",
        "name": "Habeas Data y Políticas de IA",
        "desc": "Marcos de custodia de información y prevención de filtraciones."
      }
    ]
  }
},
  downloads: [
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
],
  glossary: [
  {
    "term": "Agente de IA (AI Agent)",
    "cat": "Agentes & Automatización",
    "def": "Sistema de software impulsado por un modelo de lenguaje que percibe un objetivo de negocio, planifica pasos lógicos de ejecución (patrón ReAct), invoca herramientas externas (APIs, bases de datos) y ajusta su comportamiento a partir de la retroalimentación sin requerir comandos humanos intermedios."
  },
  {
    "term": "RAG (Retrieval-Augmented Generation)",
    "cat": "Arquitectura RAG & Datos",
    "def": "Arquitectura que conecta un LLM a un repositorio documental privado. Antes de responder, el sistema busca los fragmentos relevantes y se los entrega al modelo como contexto estricto, eliminando alucinaciones y evitando reentrenamientos."
  },
  {
    "term": "Tool Use / Function Calling",
    "cat": "Agentes & Automatización",
    "def": "Capacidad de un modelo de lenguaje de detectar cuándo una tarea requiere interactuar con el mundo exterior (consultar un saldo, ejecutar una API, actualizar un ERP) y emitir los parámetros estructurados (JSON) necesarios para que el sistema ejecute la acción de forma determinista."
  },
  {
    "term": "Model Context Protocol (MCP)",
    "cat": "Agentes & Automatización",
    "def": "Estándar abierto promovido por la industria para conectar de manera segura y uniforme asistentes y agentes de IA con herramientas locales, bases de datos y servicios en la nube empresariales."
  },
  {
    "term": "Human-in-the-Loop (HITL)",
    "cat": "Gobernanza & Ética",
    "def": "Principio rector de diseño y gobernanza donde la inteligencia artificial opera como apoyo analítico o pre-auditor, pero las acciones irreversibles, críticas o que superan umbrales predefinidos de riesgo requieren autorización humana obligatoria."
  },
  {
    "term": "Straight-Through Processing (STP)",
    "cat": "Agentes & Automatización",
    "def": "Porcentaje de casos, transacciones o expedientes que un flujo agéntico procesa de principio a fin de manera 100% autónoma y sin ninguna intervención manual, manteniendo una tasa de error cercana a cero."
  },
  {
    "term": "Alucinación (Hallucination)",
    "cat": "LLMs & GenAI",
    "def": "Generación por parte de un modelo generativo de información fácticamente incorrecta o inexistente, expresada con apariencia de certeza lógica absoluta. Se mitiga mediante RAG, técnicas de Grounding y prompts con restricciones estrictas."
  },
  {
    "term": "Embeddings y Base Vectorial",
    "cat": "Arquitectura RAG & Datos",
    "def": "Representación de fragmentos de texto en vectores numéricos dentro de un espacio matemático multidimensional, permitiendo encontrar documentos por similitud de significado semántico y no únicamente por coincidencia exacta de palabras."
  },
  {
    "term": "Fine-Tuning",
    "cat": "Arquitectura RAG & Datos",
    "def": "Ajuste fino de los parámetros y pesos de una red neuronal preentrenada utilizando un conjunto de datos especializado para adaptar su dialecto, formato de salida o estilo a un caso de uso sumamente particular."
  },
  {
    "term": "LLMOps",
    "cat": "Gobernanza & Ética",
    "def": "Conjunto de prácticas operativas, herramientas de observabilidad, pruebas de seguridad y monitoreo de costos para gestionar el ciclo de vida de modelos de lenguaje en producción empresarial."
  },
  {
    "term": "Chain-of-Thought (CoT)",
    "cat": "LLMs & GenAI",
    "def": "Técnica de ingeniería de prompts donde se instruye al modelo a desglosar su razonamiento paso a paso antes de emitir la conclusión final, mejorando radicalmente la exactitud en análisis lógicos y matemáticos."
  },
  {
    "term": "Few-Shot Prompting",
    "cat": "LLMs & GenAI",
    "def": "Técnica que suministra al modelo 2 o 3 ejemplos completos de entrada y respuesta esperada dentro del prompt, asegurando consistencia en el formato, tono y estructura del resultado."
  },
  {
    "term": "Role Prompting",
    "cat": "LLMs & GenAI",
    "def": "Técnica que asigna una identidad, nivel de experiencia y marco de referencia específico al modelo ('Actúa como auditor médico con 15 años de experiencia'), calibrando el vocabulario y criterio de la respuesta."
  },
  {
    "term": "Matriz Impacto vs. Esfuerzo",
    "cat": "Estrategia & Negocio",
    "def": "Herramienta metodológica 2x2 para evaluar iniciativas de IA cruzando el valor aportado al negocio contra la complejidad técnica y organizacional, clasificándolas en Quick Wins, Proyectos Estratégicos, Mejoras Tácticas o Evitar."
  },
  {
    "term": "Decisión Buy/Partner/Build",
    "cat": "Estrategia & Negocio",
    "def": "Marco de evaluación estratégica para decidir si una solución de IA debe comprarse como SaaS empaquetado (Buy), contratarse mediante alianza con un integrador especializado (Partner) o desarrollarse internamente (Build)."
  },
  {
    "term": "Costo Total de Propiedad (TCO)",
    "cat": "Estrategia & Negocio",
    "def": "Cálculo financiero que cuantifica todos los costos directos e indirectos de una solución de IA: licencias, tokens de API, cómputo GPU, integración con sistemas legados, observabilidad, mantenimiento y capacitación del personal."
  },
  {
    "term": "Sesgo Algorítmico",
    "cat": "Gobernanza & Ética",
    "def": "Distorsión sistemática en las predicciones o decisiones de un modelo de IA debida a datos históricos incompletos o sesgados, que puede generar discriminación en aprobaciones o asignación de recursos."
  },
  {
    "term": "Chunking Semántico",
    "cat": "Arquitectura RAG & Datos",
    "def": "Estrategia de fragmentación documental que divide textos respetando párrafos, tablas y unidades lógicas de sentido, en lugar de cortar por número arbitrario de caracteres."
  },
  {
    "term": "Búsqueda Híbrida (Hybrid Search)",
    "cat": "Arquitectura RAG & Datos",
    "def": "Combinación en un motor RAG de búsqueda léxica exacta (BM25) con búsqueda semántica vectorial (Dense Embeddings), logrando alta precisión tanto en conceptos generales como en códigos y referencias numéricas específicas."
  },
  {
    "term": "Re-Ranking",
    "cat": "Arquitectura RAG & Datos",
    "def": "Etapa secundaria en un pipeline RAG donde un modelo especializado reclasifica y ordena los fragmentos de texto recuperados para colocar los más pertinentes en el contexto superior del prompt."
  },
  {
    "term": "Framework RAGAS",
    "cat": "Arquitectura RAG & Datos",
    "def": "Metodología estándar para evaluar sistemas RAG mediante métricas automatizadas de fidelidad (Faithfulness), relevancia de respuesta (Answer Relevance) y relevancia del contexto (Context Precision)."
  },
  {
    "term": "Small Language Models (SLMs)",
    "cat": "Arquitectura RAG & Datos",
    "def": "Modelos compactos de lenguaje (de 1B a 8B de parámetros, como Llama 3 8B, Phi-3 o Mistral) diseñados para ejecutarse en hardware local con bajísima latencia y costos mínimos en tareas delimitadas."
  },
  {
    "term": "Prompt Injection",
    "cat": "Gobernanza & Ética",
    "def": "Técnica de ataque de seguridad donde un usuario o documento malicioso intenta alterar las directivas internas del modelo para obligarlo a ignorar sus políticas o filtrar información confidencial."
  },
  {
    "term": "Análisis Predictivo en Salud",
    "cat": "Analítica Predictiva",
    "def": "Aplicación de modelos de Machine Learning supervisado (XGBoost, Random Forest) sobre datos históricos de pacientes, RIPS y facturas para estimar la probabilidad matemática exacta de desenlaces futuros (reingresos, objeciones de glosa o no-shows) antes de que ocurran."
  },
  {
    "term": "Valores SHAP (SHapley Additive exPlanations)",
    "cat": "Analítica Predictiva",
    "def": "Método basado en teoría de juegos cooperativos que descompone la predicción de cualquier modelo de IA en la contribución marginal de cada variable, permitiendo auditar con exactitud por qué se generó una alerta y eliminando el efecto 'caja negra'."
  },
  {
    "term": "Pérdida Esperada (Expected Loss - E[L])",
    "cat": "Analítica Predictiva",
    "def": "Métrica financiera actuarial calculada como: Monto Glosado × Probabilidad de Glosa IA. Permite calcular la provisión contable científicamente calibrada para deterioro de cartera hospitalaria, superando la distorsión de la facturación bruta expuesta."
  },
  {
    "term": "Calibración de Probabilidades (Platt Scaling)",
    "cat": "Analítica Predictiva",
    "def": "Técnica estadística que ajusta las puntuaciones brutas de un clasificador binario para que coincidan con la probabilidad real observada en la práctica, garantizando que un score de 70% represente que 7 de cada 10 casos son efectivamente objetados."
  },
  {
    "term": "Curva ROC y AUC (Area Under Curve)",
    "cat": "Analítica Predictiva",
    "def": "Métrica de evaluación estándar que mide la capacidad de un modelo predictivo para discriminar entre casos positivos (glosados) y negativos (aprobados) a través de todos los umbrales de decisión posibles; un AUC superior a 0.85 indica excelente poder discriminatorio."
  }
]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ACADEMY_DATA;
}
