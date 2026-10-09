# Script to generate comprehensive data.js for the AI Academy platform
import os
import json

TARGET_FILE = r"c:\Users\nicol\OneDrive\Mundo Salud Médica\PROYECTO MSM\Curso IA_MSM\plataforma_ia_academy\data.js"

tracks = {
    "salud": {
        "id": "salud",
        "name": "Mundo Salud Médica (Salud & Operaciones)",
        "org": "Mundo Salud Médica",
        "badge": "Sector Salud & Facturación",
        "description": "Programa Ejecutivo enfocado en el ciclo de facturación en salud, auditoría médica, prevalidación de RIPS, reducción de glosas y agendamiento clínico.",
        "icon": "Stethoscope",
        "primaryColor": "#002885",
        "accentColor": "#1665C0",
        "maturityDimensions": [
            {"id": "facturacion", "name": "Facturación y Radicación", "desc": "Automatización y oportunidad en la generación y envío de cuentas médicas."},
            {"id": "auditoria", "name": "Auditoría Médica y Glosas", "desc": "Capacidad de predecir, prevenir y sustentar objeciones y glosas."},
            {"id": "admisiones", "name": "Admisiones y Citas", "desc": "Digitalización del pre-registro, asignación de citas y control de no-shows."},
            {"id": "autorizaciones", "name": "Autorizaciones con EPS", "desc": "Conectividad vía APIs o automatización con plataformas de aseguradoras."},
            {"id": "calidad_datos", "name": "Calidad de Datos y RIPS", "desc": "Estandarización de diagnósticos CIE-10, procedimientos CUPS y consistencia."},
            {"id": "interoperabilidad", "name": "Interoperabilidad y Sistemas", "desc": "Integración entre HIS, ERP hospitalario, facturación electrónica y cloud."}
        ]
    },
    "finanzas": {
        "id": "finanzas",
        "name": "Finanzas, Banca & Fintech",
        "org": "Sector Financiero & Corporativo",
        "badge": "Finanzas & Riesgo",
        "description": "Programa Ejecutivo para optimizar el análisis de balances, conciliación bancaria inteligente, prevención de fraude y modelos de riesgo crediticio.",
        "icon": "Landmark",
        "primaryColor": "#0F5132",
        "accentColor": "#198754",
        "maturityDimensions": [
            {"id": "conciliacion", "name": "Conciliación Contable y Bancaria", "desc": "Cruce automatizado de extractos, pagos y partidas pendientes."},
            {"id": "fraude", "name": "Detección de Fraude y Anomalías", "desc": "Monitoreo en tiempo real de transacciones sospechosas y patrones de fuga."},
            {"id": "scoring", "name": "Evaluación Crediticia y Scoring", "desc": "Modelos predictivos para originación de crédito y análisis de solvencia."},
            {"id": "reportes", "name": "Reportes Financieros y Cierre", "desc": "Automatización de estados financieros, consolidación y minutas de junta."},
            {"id": "gobernanza_datos", "name": "Gobernanza y Calidad del Dato", "desc": "Unificación de silos entre core bancario, ERP contable y pasarelas."},
            {"id": "cumplimiento", "name": "Compliance y SARLAFT / AML", "desc": "Diligencia debida y filtrado contra listas restrictivas con IA."}
        ]
    },
    "logistica": {
        "id": "logistica",
        "name": "Cadena de Suministro & Operaciones",
        "org": "Supply Chain & Manufactura",
        "badge": "Logística & Operaciones",
        "description": "Optimización integral de inventarios, pronóstico de demanda, ruteo inteligente, gestión de almacenes (WMS) y compras automatizadas.",
        "icon": "Truck",
        "primaryColor": "#D97706",
        "accentColor": "#F59E0B",
        "maturityDimensions": [
            {"id": "demanda", "name": "Pronóstico de Demanda", "desc": "Modelos de series temporales para prever quiebres y estacionalidad."},
            {"id": "inventario", "name": "Gestión Inteligente de Stock", "desc": "Optimización de niveles mínimos/máximos y rotación en bodegas."},
            {"id": "ruteo", "name": "Logística de Despacho y Ruteo", "desc": "Algoritmos para optimizar flotas, tiempos de entrega y combustible."},
            {"id": "compras", "name": "Compras y Homologación de Proveedores", "desc": "Automatización de órdenes de compra y comparativa de cotizaciones."},
            {"id": "visibilidad", "name": "Trazabilidad End-to-End", "desc": "Integración de ERP, TMS, WMS y sensores IoT en una sola vista."},
            {"id": "mantenimiento", "name": "Mantenimiento Predictivo", "desc": "Monitoreo de maquinaria y alertas tempranas antes de fallas críticas."}
        ]
    },
    "legal": {
        "id": "legal",
        "name": "Legal, Contratos & Compliance",
        "org": "Dirección Jurídica & Cumplimiento",
        "badge": "Legaltech & Cumplimiento",
        "description": "Gestión del ciclo de vida contractual (CLM), auditoría de cumplimiento normativo, extracción masiva de cláusulas y asistencia en litigios.",
        "icon": "Scale",
        "primaryColor": "#4C1D95",
        "accentColor": "#7C3AED",
        "maturityDimensions": [
            {"id": "clm", "name": "Ciclo Contractual (CLM)", "desc": "Redacción, negociación y seguimiento de hitos de contratos con IA."},
            {"id": "extraccion", "name": "Extracción y Análisis de Cláusulas", "desc": "Identificación de penalidades, vigencias y riesgos ocultos en documentos."},
            {"id": "normativa", "name": "Monitoreo Regulatorio", "desc": "Síntesis continua de leyes, decretos y resoluciones aplicables."},
            {"id": "litigios", "name": "Gestión de Procesos Judiciales", "desc": "Análisis de antecedentes, jurisprudencia y predicción de probabilidades."},
            {"id": "repositorio", "name": "Memoria Documental e Indexación", "desc": "Digitalización y búsqueda semántica en el histórico jurídico institucional."},
            {"id": "privacidad", "name": "Habeas Data y Políticas de IA", "desc": "Marcos de custodia de información y prevención de filtraciones."}
        ]
    }
}

# Base Modules Definition (7 Modules, 14 Sessions)
modules_base = [
    {
        "number": 1,
        "title": "Fundamentos de IA y Diagnóstico de Madurez",
        "level": "Básico",
        "icon": "Brain",
        "description": "Desmitifique qué es la Inteligencia Artificial, distinga entre ML, Deep Learning y GenAI, y evalúe la preparación digital de sus procesos.",
        "sessions": [1, 2]
    },
    {
        "number": 2,
        "title": "IA Generativa y Productividad Aumentada",
        "level": "Básico-Práctico",
        "icon": "Wrench",
        "description": "Domine técnicas de Prompt Engineering y análisis de datos sin programar para multiplicar la velocidad en redacción, análisis y síntesis.",
        "sessions": [3, 4]
    },
    {
        "number": 3,
        "title": "IA Aplicada a Procesos Críticos de Negocio",
        "level": "Intermedio",
        "icon": "Building2",
        "description": "Rediseñe el flujo de valor identificando puntos de intervención con modelos predictivos y clasificadores automáticos.",
        "sessions": [5, 6]
    },
    {
        "number": 4,
        "title": "Ética, Privacidad, Normativa y Ciberseguridad",
        "level": "Intermedio",
        "icon": "ShieldCheck",
        "description": "Cumpla con la protección de datos sensibles, mitigue el sesgo algorítmico, aplique Human-in-the-Loop y asegure su infraestructura.",
        "sessions": [7, 8]
    },
    {
        "number": 5,
        "title": "Estrategia de Portafolio, Decisión Buy/Build y ROI",
        "level": "Intermedio-Estratégico",
        "icon": "BarChart3",
        "description": "Priorice iniciativas con la matriz Impacto vs. Esfuerzo, calcule el retorno de inversión (ROI) y formule un Business Case ejecutivo.",
        "sessions": [9, 10]
    },
    {
        "number": 6,
        "title": "Agentes Autónomos y Sistemas Multi-Agente",
        "level": "Avanzado",
        "icon": "Bot",
        "description": "Evolucione hacia sistemas que razonan, usan herramientas (Tool Use/MCP) y colaboran entre sí para ejecutar procesos complejos de punta a punta.",
        "sessions": [11, 12]
    },
    {
        "number": 7,
        "title": "Arquitecturas RAG Empresariales, Soberanía y LLMOps",
        "level": "Avanzado",
        "icon": "Cpu",
        "description": "Conecte LLMs a su base de conocimiento privado con cero alucinación, evalúe modelos locales vs. APIs y gobierne el ciclo de vida de la IA.",
        "sessions": [13, 14]
    }
]

# Write out the JS content
js_content = f"""// PLATAFORMA IA ACADEMY - DATA ENGINE MULTI-TRACK
// Estructura completa de 4 especialidades, 7 módulos y 14 sesiones con arquitectura de 4 pilares.

const TRACKS_CONFIG = {json.dumps(tracks, indent=2, ensure_ascii=False)};

const MODULES_TEMPLATE = {json.dumps(modules_base, indent=2, ensure_ascii=False)};

const DOWNLOADABLE_RESOURCES_CATALOG = [
  {{
    id: "canvas-agentes",
    title: "Canvas de Arquitectura de Agentes de IA",
    category: "Agentes & Automatización (Módulo 6)",
    format: "PowerPoint Editable (PPTX)",
    file: "descargas/canvas-agentes-ia.pptx",
    badge: "Avanzado",
    desc: "Lienzo de 9 bloques para planificar misión, triggers, tool use, memoria, guardrails y umbrales de escalamiento humano en sistemas agénticos."
  }},
  {{
    id: "orquestacion-multiagente",
    title: "Plantilla de Orquestación Multi-Agente y HITL",
    category: "Agentes & Automatización (Módulo 6)",
    format: "Documento Word (DOCX)",
    file: "descargas/plantilla-orquestacion-multiagente.docx",
    badge: "Avanzado",
    desc: "Guía de diseño para células colaborativas (Supervisor-Workers / Maker-Checker), matriz de escalamiento humano y prevención de bucles infinitos."
  }},
  {{
    id: "manual-rag",
    title: "Manual de RAG Empresarial con Cero Alucinación",
    category: "Arquitectura RAG & LLMOps (Módulo 7)",
    format: "Documento Word (DOCX)",
    file: "descargas/manual-rag-empresarial-cero-alucinacion.docx",
    badge: "Avanzado",
    desc: "Arquitectura de chunking semántico, búsqueda híbrida (BM25 + Dense Vectors), prompts de grounding estricto y métricas Ragas."
  }},
  {{
    id: "tco-calculator",
    title: "Calculadora de TCO y Evaluación de Modelos de IA",
    category: "Estrategia & Finanzas (Módulo 7)",
    format: "Hoja de Cálculo Excel (XLSX)",
    file: "descargas/plantilla-tco-evaluacion-modelos-ia.xlsx",
    badge: "Avanzado",
    desc: "Comparativa financiera de Costo Total de Propiedad: In-Context vs. RAG vs. Fine-Tuning vs. SLM Local con simulador de ROI a 36 meses."
  }},
  {{
    id: "guia-prompt",
    title: "Guía de Prompt Engineering para Directivos",
    category: "Productividad (Módulo 2)",
    format: "Documento PDF",
    file: "descargas/guia-prompt-engineering-openai.pdf",
    badge: "Básico-Práctico",
    desc: "Estructura de prompts efectivos, técnicas Few-Shot, Chain-of-Thought, Role Prompting y catálogo de prompts listos para usar."
  }},
  {{
    id: "guia-analisis-datos",
    title: "Guía: Cómo Analizar Datos con ChatGPT sin Programar",
    category: "Productividad (Módulo 2)",
    format: "Documento PDF",
    file: "descargas/guia-analizar-datos-con-chatgpt.pdf",
    badge: "Básico-Práctico",
    desc: "Paso a paso para cargar hojas de cálculo, detectar anomalías, proyectar tendencias y generar gráficos ejecutivos automáticamente."
  }},
  {{
    id: "diagrama-flujo",
    title: "Plantilla Editable: Diagrama de Flujo de Procesos",
    category: "Operaciones (Módulo 3)",
    format: "PowerPoint Editable (PPTX)",
    file: "descargas/plantilla-diagrama-flujo-procesos.pptx",
    badge: "Intermedio",
    desc: "Lienzo con simbología estándar y ejemplo para mapear el proceso As-Is (actual) vs. el proceso To-Be optimizado con IA."
  }},
  {{
    id: "matriz-impacto",
    title: "Plantilla: Matriz Impacto vs. Esfuerzo",
    category: "Estrategia & Portafolio (Módulo 5)",
    format: "PowerPoint Editable (PPTX)",
    file: "descargas/plantilla-matriz-impacto-esfuerzo.pptx",
    badge: "Intermedio",
    desc: "Matriz 2x2 para clasificar iniciativas en Quick Wins, Proyectos Estratégicos, Mejoras Tácticas o Descartar, con tarjetas arrastrables."
  }},
  {{
    id: "business-case",
    title: "Plantilla Completa de Business Case de IA",
    category: "Estrategia & ROI (Módulo 5)",
    format: "Documento Word (DOCX)",
    file: "descargas/plantilla-business-case-ia.docx",
    badge: "Intermedio-Estratégico",
    desc: "Documento ejecutivo estructurado en 7 secciones: problema con datos, solución Buy/Build, análisis financiero, riesgos y cronograma."
  }},
  {{
    id: "presentar-direccion",
    title: "Guía: Cómo Presentar Proyectos a la Alta Dirección",
    category: "Estrategia (Módulo 5)",
    format: "Documento PDF",
    file: "descargas/guia-presentar-proyecto-alta-direccion.pdf",
    badge: "Estratégico",
    desc: "Metodología narrativa de 6 pasos para traducir tecnicismos a valor de negocio, manejo de objeciones financieras y checklist de pitch."
  }}
];

const GLOSSARY_TERMS = [
  {{ term: "Agente de IA", cat: "Agentes & Automatización", def: "Sistema de software impulsado por un modelo de lenguaje con capacidad de percibir un objetivo, planificar acciones (ReAct), ejecutar herramientas externas (APIs, bases de datos) y aprender de las observaciones." }},
  {{ term: "RAG (Retrieval-Augmented Generation)", cat: "Arquitectura RAG & Datos", def: "Arquitectura que conecta un LLM a un repositorio documental privado. Antes de responder, el sistema busca los fragmentos relevantes y se los entrega al modelo como contexto estricto, eliminando alucinaciones." }},
  {{ term: "Tool Use / Function Calling", cat: "Agentes & Automatización", def: "Capacidad de un modelo de detectar cuándo necesita ejecutar una función externa (consultar un saldo, consultar una API, actualizar un ERP) y emitir los parámetros estructurados (JSON) necesarios." }},
  {{ term: "Model Context Protocol (MCP)", cat: "Agentes & Automatización", def: "Estándar abierto de la industria creado para conectar de forma segura asistentes de IA y agentes con repositorios de datos locales, herramientas y APIs corporativas." }},
  {{ term: "Human-in-the-Loop (HITL)", cat: "Gobernanza & Ética", def: "Principio de diseño donde la IA propone o pre-audita, pero las decisiones de alto riesgo o que superan umbrales financieros/legales requieren aprobación humana explícita." }},
  {{ term: "Straight-Through Processing (STP)", cat: "Agentes & Automatización", def: "Porcentaje de transacciones o casos de un proceso que se resuelven de principio a fin de manera 100% automatizada sin ninguna intervención manual." }},
  {{ term: "Alucinación", cat: "LLMs & GenAI", def: "Fenómeno en el cual un modelo de lenguaje genera información fácticamente incorrecta o inventada, pero presentada con un tono de total convicción y coherencia sintáctica." }},
  {{ term: "Embeddings y Base Vectorial", cat: "Arquitectura RAG & Datos", def: "Representación matemática de textos en listas de números (vectores) donde fragmentos con significados similares quedan ubicados cerca en el espacio multidimensional." }},
  {{ term: "Fine-Tuning", cat: "Arquitectura RAG & Datos", def: "Proceso de ajustar los pesos internos de un modelo preentrenado utilizando un conjunto de datos especializado para que adopte un tono, vocabulario o formato específico." }},
  {{ term: "LLMOps", cat: "Gobernanza & Ética", def: "Conjunto de prácticas, herramientas y gobernanza operativa para desplegar, monitorear costos, evaluar latencia y auditar la calidad de modelos de lenguaje en producción." }},
  {{ term: "Chain-of-Thought (CoT)", cat: "LLMs & GenAI", def: "Técnica de prompt engineering que instruye al modelo a desglosar su razonamiento paso a paso antes de dar la respuesta final, incrementando drásticamente su precisión lógica." }},
  {{ term: "Few-Shot Prompting", cat: "LLMs & GenAI", def: "Estrategia que incluye 2 o 3 ejemplos claros de entrada y salida esperada dentro de las instrucciones para guiar el formato exacto de respuesta del modelo." }},
  {{ term: "Matriz Impacto vs. Esfuerzo", cat: "Estrategia & Negocio", def: "Herramienta de priorización 2x2 que clasifica proyectos en Quick Wins (Alto impacto / Bajo esfuerzo), Estratégicos, Mejoras Tácticas o Descartables." }},
  {{ term: "Decisión Buy/Partner/Build", cat: "Estrategia & Negocio", def: "Marco estratégico para evaluar si conviene contratar una solución SaaS existente (Buy), aliarse con un integrador especializado (Partner) o desarrollar internamente (Build)." }},
  {{ term: "Costo Total de Propiedad (TCO)", cat: "Estrategia & Negocio", def: "Cálculo financiero integral que incluye no solo la licencia o API del modelo, sino costos de integración, mantenimiento, seguridad, observabilidad y capacitación." }}
];
"""

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"data.js base generated at {TARGET_FILE}")
