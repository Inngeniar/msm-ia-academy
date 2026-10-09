// PLATAFORMA IA ACADEMY - MAIN APPLICATION CONTROLLER
// Handles state, dynamic curriculum rendering, multi-track switching, and 3 interactive simulators.

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    track: localStorage.getItem('ai_academy_track') || 'salud',
    currentSession: 1,
    activeTab: 'modulos',
    completedSessions: JSON.parse(localStorage.getItem('ai_academy_completed') || '[]'),
    theme: localStorage.getItem('ai_academy_theme') || 'light',
    maturityAnswers: JSON.parse(localStorage.getItem(`ai_academy_maturity_${localStorage.getItem('ai_academy_track') || 'salud'}`) || '{}')
  };

  // Elements
  const trackSelect = document.getElementById('trackSelect');
  const themeToggle = document.getElementById('themeToggle');
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  const tabViews = document.querySelectorAll('.tab-view');
  const progressPercentText = document.getElementById('progressPercentText');
  const progressFillMini = document.getElementById('progressFillMini');

  // Hero Elements
  const heroBadge = document.getElementById('heroBadge');
  const heroTitle = document.getElementById('heroTitle');
  const heroDesc = document.getElementById('heroDesc');

  // 1. Initialize Theme
  applyTheme(state.theme);
  themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ai_academy_theme', state.theme);
    applyTheme(state.theme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }

  // 2. Initialize Track Selection
  if (trackSelect) {
    trackSelect.value = state.track;
    trackSelect.addEventListener('change', (e) => {
      state.track = e.target.value;
      localStorage.setItem('ai_academy_track', state.track);
      state.maturityAnswers = JSON.parse(localStorage.getItem(`ai_academy_maturity_${state.track}`) || '{}');
      updateTrackVisuals();
      renderCurriculumSidebar();
      renderSessionDetail(state.currentSession);
      renderMaturityTool();
      updatePromptStudioPresets();
      updateRoiPresets();
    });
  }

  // 3. Tab Navigation
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      switchTab(targetTab);
    });
  });

  function switchTab(tabId) {
    state.activeTab = tabId;
    navTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    tabViews.forEach(v => v.classList.toggle('active', v.id === `view-${tabId}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. Update Hero Banner
  function updateTrackVisuals() {
    const trackInfo = ACADEMY_DATA.tracks[state.track];
    if (!trackInfo) return;

    if (heroBadge) heroBadge.textContent = `Programa Ejecutivo · ${trackInfo.badge}`;
    if (heroTitle) heroTitle.innerHTML = `Inteligencia Artificial en ${trackInfo.name}:<br><span style="color: #93C5FD;">De la Estrategia a la Automatización</span>`;
    if (heroDesc) heroDesc.textContent = trackInfo.description;

    document.documentElement.style.setProperty('--primary', trackInfo.primaryColor);
    document.documentElement.style.setProperty('--primary-light', trackInfo.accentColor);
  }

  // 5. Progress Tracking
  function updateGlobalProgress() {
    const totalSessions = 14;
    const completedCount = state.completedSessions.length;
    const pct = Math.round((completedCount / totalSessions) * 100);

    if (progressPercentText) progressPercentText.textContent = `${pct}%`;
    if (progressFillMini) progressFillMini.style.width = `${pct}%`;
  }

  function toggleSessionComplete(num) {
    const idx = state.completedSessions.indexOf(num);
    if (idx >= 0) {
      state.completedSessions.splice(idx, 1);
    } else {
      state.completedSessions.push(num);
    }
    localStorage.setItem('ai_academy_completed', JSON.stringify(state.completedSessions));
    updateGlobalProgress();
    renderCurriculumSidebar();
    renderSessionDetail(num);
  }

  // 6. Curriculum Rendering
  function renderCurriculumSidebar() {
    const sidebarContainer = document.getElementById('modulesSidebarContainer');
    if (!sidebarContainer) return;

    const track = ACADEMY_DATA.tracks[state.track];
    if (!track) return;

    let html = '';
    ACADEMY_DATA.modules.forEach(mod => {
      html += `
        <div class="module-nav-group">
          <div class="module-nav-header">
            <span>Módulo ${mod.id}: ${mod.title}</span>
            <span class="session-header-badge badge-${mod.level === 'Básico' ? 'basic' : mod.level === 'Avanzado' ? 'advanced' : 'intermediate'}">${mod.level}</span>
          </div>
          <div class="session-nav-list">
      `;

      mod.sessions.forEach(sNum => {
        const session = track.sessions.find(s => s.number === sNum);
        if (session) {
          const isDone = state.completedSessions.includes(sNum);
          const isActive = state.currentSession === sNum;
          html += `
            <div class="session-nav-item ${isActive ? 'active' : ''}" onclick="window.academyApp.selectSession(${sNum})">
              <span style="display:flex; align-items:center; gap:0.4rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                <strong>S${sNum}</strong> ${session.title}
              </span>
              <span class="check-indicator ${isDone ? 'completed' : ''}"></span>
            </div>
          `;
        }
      });

      html += `</div></div>`;
    });

    sidebarContainer.innerHTML = html;
  }

  function renderSessionDetail(sessionNum) {
    state.currentSession = sessionNum;
    const track = ACADEMY_DATA.tracks[state.track];
    const session = track?.sessions.find(s => s.number === sessionNum);
    const container = document.getElementById('sessionDetailContainer');
    if (!container || !session) return;

    const mod = ACADEMY_DATA.modules.find(m => m.id === session.moduleId);
    const isCompleted = state.completedSessions.includes(sessionNum);

    let html = `
      <div class="session-content-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <span class="session-header-badge badge-${session.level === 'Básico' ? 'basic' : session.level === 'Avanzado' ? 'advanced' : 'intermediate'}">
            Módulo ${mod?.id}: ${mod?.title} · ${session.level}
          </span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">SESIÓN ${session.number} DE 14</span>
        </div>

        <h1 class="session-title-large">${session.title}</h1>

        <div class="session-meta-strip">
          <div class="session-meta-item">⏱ <strong>Duración:</strong> ${session.duration}</div>
          <div class="session-meta-item">🎯 <strong>Nivel:</strong> ${session.level}</div>
          <div class="session-meta-item">🏢 <strong>Enfoque:</strong> ${track.name}</div>
        </div>

        ${session.number === 5 ? `
          <div style="background: linear-gradient(135deg, #011C4E, #002885); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; color: #FFFFFF; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-md);">
            <div>
              <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #93C5FD; margin-bottom: 0.25rem;">
                🔮 HERRAMIENTA PRÁCTICA DEL MÓDULO
              </div>
              <div style="font-size: 1.15rem; font-weight: 800;">
                Simulador de Probabilidad de Glosa IA en Vivo
              </div>
              <div style="font-size: 0.85rem; color: #E2E8F0; margin-top: 0.2rem;">
                Experimente la inferencia predictiva en pre-radicación con explicabilidad SHAP, decisión STP vs. Retener y cálculo de pérdida esperada.
              </div>
            </div>
            <button class="btn btn-primary" style="background: #2563EB; border: 1px solid #60A5FA; font-weight: 800; padding: 0.65rem 1.2rem; cursor: pointer;" onclick="window.academyApp.openTab('probabilidad-glosa')">
              Abrir Simulador Predictivo ➔
            </button>
          </div>
        ` : ''}

        <!-- Objetivos -->
        <div class="section-block">
          <h2 class="section-block-title">🎯 Objetivos de Aprendizaje</h2>
          <div class="objectives-grid">
            ${session.objectives.map(obj => `<div class="objective-item">${obj}</div>`).join('')}
          </div>
        </div>

        <!-- 4-Pillar Detailed Topics -->
        <div class="section-block">
          <h2 class="section-block-title">📚 Temas Desarrollados (Estructura de 4 Pilares)</h2>
          ${session.topicsDetailed && session.topicsDetailed.length > 0 ? session.topicsDetailed.map((t, idx) => `
            <div class="topic-card">
              <div class="topic-card-header">
                <span class="topic-card-title">${idx + 1}. ${t.titulo}</span>
              </div>
              <div class="topic-card-body">
                <!-- Pilar 1: Intuición -->
                <div class="pillar-box pillar-intuition">
                  <div class="pillar-label">💡 Intuición y Analogía (En lenguaje simple)</div>
                  <div>${t.intuicion}</div>
                </div>

                <!-- Pilar 2: Puntos Clave -->
                <div>
                  <div style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.4rem; color: var(--text-muted);">
                    🔍 Puntos Profesionales Clave:
                  </div>
                  <ul class="key-points-list">
                    ${t.puntosClave.map(pt => `<li>${pt}</li>`).join('')}
                  </ul>
                </div>

                <!-- Pilar 3: Acción en la Empresa -->
                <div class="pillar-box pillar-action">
                  <div class="pillar-label">🚀 Acción Concreta en su Área</div>
                  <div>${t.accion}</div>
                </div>
              </div>
            </div>
          `).join('') : '<p style="color:var(--text-muted)">Temario detallado en desarrollo.</p>'}
        </div>

        <!-- Dinámica Práctica -->
        <div class="activity-card">
          <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem; color: var(--primary);">
            ⚡ Dinámica Práctica de la Sesión
          </div>
          <div class="activity-desc">${session.practicalActivity}</div>
        </div>

        <!-- Descargas Asociadas -->
        ${session.downloads && session.downloads.length > 0 ? `
          <div class="section-block">
            <h2 class="section-block-title">📥 Recursos y Plantillas para Descargar</h2>
            <div class="download-chip-grid">
              ${session.downloads.map(d => `
                <a href="${d.file}" download class="download-chip">
                  <span>📄</span>
                  <span><strong>${d.title}</strong> (${d.format})</span>
                  <span style="font-size:0.75rem; color:var(--primary-light);">⬇ Descargar</span>
                </a>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Footer Action -->
        <div class="session-actions-footer">
          <button class="btn-complete-session ${isCompleted ? 'is-completed' : ''}" onclick="window.academyApp.toggleComplete(${session.number})">
            ${isCompleted ? '✓ Sesión Completada' : 'Marcar como Completada'}
          </button>
          
          <div style="display:flex; gap:0.5rem;">
            ${session.number > 1 ? `<button class="download-chip" onclick="window.academyApp.selectSession(${session.number - 1})">← Sesión Anterior</button>` : ''}
            ${session.number < 14 ? `<button class="download-chip" onclick="window.academyApp.selectSession(${session.number + 1})">Siguiente Sesión →</button>` : ''}
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    renderCurriculumSidebar();
  }

  // 7. SIMULATOR 1: DIGITAL MATURITY DIAGNOSTIC
  function renderMaturityTool() {
    const container = document.getElementById('maturityToolContainer');
    if (!container) return;

    const framework = ACADEMY_DATA.maturity[state.track] || ACADEMY_DATA.maturity.salud;
    const dimensions = framework.dimensions;

    // Default answers if empty
    dimensions.forEach(d => {
      if (!state.maturityAnswers[d.id]) state.maturityAnswers[d.id] = 2; // Default level 2
    });

    // Compute average
    const vals = Object.values(state.maturityAnswers);
    const avg = vals.reduce((a, b) => a + Number(b), 0) / vals.length;
    const avgRounded = avg.toFixed(1);

    const levelsMap = {
      1: { name: "Inicial / Reactivo", desc: "Procesos manuales aislados, alta dependencia de personas, datos no estructurados.", color: "#EF4444" },
      2: { name: "Repetible / Básico", desc: "Digitalización básica de documentos, reglas conocidas pero sin integración predictiva.", color: "#F59E0B" },
      3: { name: "Definido / Estandarizado", desc: "Procesos mapeados, datos consolidados en bases centrales, automatización RPA inicial.", color: "#3B82F6" },
      4: { name: "Gestionado / Analítico", desc: "Métricas en tiempo real, primeros modelos predictivos y uso formal de GenAI.", color: "#8B5CF6" },
      5: { name: "Optimizado / Agéntico", desc: "Sistemas agénticos autónomos, RAG empresarial, mejora continua automatizada.", color: "#10B981" }
    };

    const currentLvl = Math.round(avg);
    const lvlInfo = levelsMap[currentLvl] || levelsMap[2];

    // Find lowest 2 dimensions
    const sorted = [...dimensions].sort((a, b) => state.maturityAnswers[a.id] - state.maturityAnswers[b.id]);
    const weak1 = sorted[0];
    const weak2 = sorted[1];

    let html = `
      <div class="maturity-card-wrapper">
        <h2 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">
          ${framework.title}
        </h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${framework.subtitle}</p>

        <!-- Score Hero -->
        <div class="maturity-score-hero">
          <div class="score-badge-circle">
            <span class="score-num">${avgRounded}</span>
            <span class="score-level-text">Nivel ${currentLvl} de 5</span>
          </div>
          <div>
            <div style="font-size: 1.25rem; font-weight: 800; color: ${lvlInfo.color}; margin-bottom: 0.25rem;">
              Madurez: ${lvlInfo.name}
            </div>
            <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.5; margin-bottom: 0.75rem;">
              ${lvlInfo.desc}
            </p>
            <div style="background: var(--bg-card); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border-left: 3px solid ${lvlInfo.color}; font-size: 0.85rem;">
              🚨 <strong>Focos Prioritarios de Intervención:</strong> Se detectan mayores brechas en <em>${weak1.name}</em> (Nivel ${state.maturityAnswers[weak1.id]}) y <em>${weak2.name}</em> (Nivel ${state.maturityAnswers[weak2.id]}).
            </div>
          </div>
        </div>

        <!-- 6 Dimensions Selectors -->
        <div class="dimensions-list">
          ${dimensions.map((dim, idx) => {
            const currentVal = state.maturityAnswers[dim.id] || 2;
            return `
              <div class="dimension-row">
                <div class="dimension-header">
                  <span class="dimension-title">${idx + 1}. ${dim.name}</span>
                  <span style="font-weight: 800; font-size: 0.85rem; color: var(--primary);">Nivel ${currentVal} / 5</span>
                </div>
                <div class="dimension-desc">${dim.desc}</div>
                <div class="level-selector-group">
                  ${[1, 2, 3, 4, 5].map(lvl => `
                    <button class="level-radio-btn ${currentVal === lvl ? 'selected' : ''}" onclick="window.academyApp.setMaturity('${dim.id}', ${lvl})">
                      <div>Nivel ${lvl}</div>
                      <div style="font-size: 0.65rem; font-weight: normal; opacity: 0.8;">
                        ${lvl === 1 ? 'Manual' : lvl === 2 ? 'Básico' : lvl === 3 ? 'Estándar' : lvl === 4 ? 'Predictivo' : 'Agéntico'}
                      </div>
                    </button>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
          <button class="download-chip" onclick="window.academyApp.resetMaturity()">↺ Reiniciar Diagnóstico</button>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  function setMaturity(dimId, val) {
    state.maturityAnswers[dimId] = val;
    localStorage.setItem(`ai_academy_maturity_${state.track}`, JSON.stringify(state.maturityAnswers));
    renderMaturityTool();
  }

  function resetMaturity() {
    state.maturityAnswers = {};
    localStorage.removeItem(`ai_academy_maturity_${state.track}`);
    renderMaturityTool();
  }

  // 8. SIMULATOR 2: PROMPT STUDIO (LABORATORIO)
  const promptPresets = {
    salud: [
      {
        title: "Sustentación de Glosa por Pertinencia",
        prompt: `ROL: Actúa como Auditor Médico Especialista en Facturación Hospitalaria en Colombia.
CONTEXTO: La EPS objeta la factura #89201 argumentando 'Falta de justificación clínica para examen de TAC Cerebral'.
TAREA: Redacta un borrador de respuesta y levantamiento de glosa citando el soporte de historia clínica adjunto y la Resolución 3047 de 2008.
FORMATO: Estructura formal en 3 secciones: (1) Hechos y antecedentes, (2) Sustentación médica y normativa, (3) Solicitud expresa de reconocimiento de valor.
RESTRICCIÓN: Cero agresividad, tono estrictamente técnico y cita de artículo legal exacto.`
      },
      {
        title: "Caso de Estudio: Respuesta Agéntica FAC-2026-012",
        prompt: `ROL: Actúa como el Agente Especialista en Auditoría Médica y Respuesta a Glosas de Mundo Salud Médica.
DATOS DEL CASO:
- Factura: FAC-2026-012
- EPS: Famisanar Subsidiado
- Diagnóstico: S060 Conmoción cerebral
- Procedimiento: 879111 TAC simple de cráneo ($680,000 COP)
- Objeción de la EPS: "No pertinencia médica: No se evidencia escala de Glasgow ni signo de focalización neurológica en notas de ingreso."
- Soporte Clínico: "Paciente ingresa tras caída de altura con pérdida transitoria de conciencia de 3 minutos, cefalea intensa y vómito en proyectil (Glasgow 13/15 al ingreso)."
TAREA: Redacta el oficio formal de respuesta y solicitud de levantamiento total de la glosa.
REQUISITOS:
1. Cita textual de la justificación clínica de la nota de ingreso.
2. Sustentación con base en la Resolución 3047 de 2008 y Guías del MinSalud para Trauma Craneoencefálico.
3. Tono estrictamente técnico, respetuoso y concluyente.`
      },
      {
        title: "Síntesis de Resolución del MinSalud",
        prompt: `ROL: Actúa como Asesor Normativo Institucional para la Alta Dirección de Salud.
CONTEXTO: El Ministerio de Salud emitió una nueva circular de actualización del manual tarifario y CUPS.
TAREA: Sintetiza el documento en una minuta ejecutiva de 1 página destacando: (1) Nuevos códigos obligatorios, (2) Plazo máximo de radicación, (3) Impacto financiero estimado.
FORMATO: Puntos ejecutivos con viñetas y tabla comparativa de tarifas.`
      }
    ],
    finanzas: [
      {
        title: "Conciliación de Partidas Pendientes",
        prompt: `ROL: Actúa como Auditor Contable y Financiero Sénior.
CONTEXTO: Se presenta una discrepancia de $14,250 USD entre el extracto bancario de la cuenta operativa y el libro mayor del ERP al cierre de mes.
TAREA: Analiza las transacciones adjuntas, detecta posibles comisiones duplicadas o transferencias no acreditadas y propone el asiento de ajuste.
FORMATO: Informe de discrepancia con código de cuenta y balance cuadrado.`
      }
    ],
    logistica: [
      {
        title: "Resolución de Discrepancia en Despacho Logístico",
        prompt: `ROL: Actúa como Director de Logística y Cadena de Suministro.
CONTEXTO: Un contenedor de materia prima crítica sufrió un retraso aduanero de 5 días hábiles, arriesgando parada de línea en planta.
TAREA: Elabora un plan de contingencia inmediata con 3 escenarios: (1) Ruteo express aéreo de lote mínimo, (2) Negociación de horas extra, (3) Notificación transparente al cliente con nuevo cronograma.
FORMATO: Matriz de decisión con impacto en costo y tiempo.`
      }
    ],
    legal: [
      {
        title: "Auditoría de Cláusula de Indemnidad y Responsabilidad",
        prompt: `ROL: Actúa como Abogado Especialista en Derecho Contractual Corporativo.
CONTEXTO: La contraparte propone una cláusula de responsabilidad ilimitada sin tope por lucro cesante ni daños indirectos.
TAREA: Redacta la contrapropuesta en lenguaje formal con limitación estándar (Cap) equivalente al 100% de los honorarios facturados en los últimos 12 meses.
FORMATO: Cláusula redactada lista para incluir en contrato con nota explicativa del riesgo mitigado.`
      }
    ]
  };

  function setupPromptStudio() {
    const promptInput = document.getElementById('studioPromptInput');
    const presetsContainer = document.getElementById('studioPresetsContainer');
    const analyzeBtn = document.getElementById('btnAnalyzePrompt');
    const copyBtn = document.getElementById('btnCopyPrompt');
    const qualityBar = document.getElementById('promptQualityBar');
    const qualityText = document.getElementById('promptQualityText');
    const tipsContainer = document.getElementById('promptTipsContainer');

    if (!promptInput) return;

    updatePromptStudioPresets();

    promptInput.addEventListener('input', runPromptAnalysis);
    if (analyzeBtn) analyzeBtn.addEventListener('click', runPromptAnalysis);
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(promptInput.value);
        copyBtn.textContent = '✓ Copiado';
        setTimeout(() => copyBtn.textContent = '📋 Copiar Prompt', 2000);
      });
    }

    function runPromptAnalysis() {
      const text = promptInput.value.trim();
      let score = 0;
      let tips = [];

      // Heuristic checks
      if (text.length > 30) score += 15;
      
      // Role check
      if (/rol|actúa como|eres un|asume el papel/i.test(text)) {
        score += 25;
      } else {
        tips.push("Define un ROL claro (ej: 'Actúa como Auditor Médico Sénior') para calibrar el tono.");
      }

      // Context check
      if (/contexto|situación|antecedentes|el caso es/i.test(text)) {
        score += 20;
      } else {
        tips.push("Añade CONTEXTO o antecedentes para delimitar el escenario de negocio.");
      }

      // Format check
      if (/formato|estructura|en viñetas|en tabla|json|secciones/i.test(text)) {
        score += 20;
      } else {
        tips.push("Especifica el FORMATO de salida (ej: 'Tabla comparativa', 'Puntos clave').");
      }

      // Constraints check
      if (/restricción|no inventes|estrictamente|prohibido|límite/i.test(text)) {
        score += 20;
      } else {
        tips.push("Incluye RESTRICCIONES de seguridad (ej: 'Cero alucinación, cita fuentes exactas').");
      }

      if (qualityBar) {
        qualityBar.style.width = `${score}%`;
        qualityBar.style.backgroundColor = score >= 80 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
      }

      if (qualityText) {
        qualityText.textContent = `Calidad del Prompt: ${score}% (${score >= 80 ? 'Excelente' : score >= 50 ? 'Intermedio' : 'Básico'})`;
      }

      if (tipsContainer) {
        tipsContainer.innerHTML = tips.length > 0 ? tips.map(t => `<div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">• ${t}</div>`).join('') : '<div style="font-size:0.75rem; color:#10B981; font-weight:700;">✓ Prompt con estructura profesional completa.</div>';
      }
    }
  }

  function updatePromptStudioPresets() {
    const presetsContainer = document.getElementById('studioPresetsContainer');
    const promptInput = document.getElementById('studioPromptInput');
    if (!presetsContainer) return;

    const list = promptPresets[state.track] || promptPresets.salud;
    presetsContainer.innerHTML = list.map((p, idx) => `
      <button class="preset-chip" onclick="window.academyApp.applyPreset(${idx})">
        ${p.title}
      </button>
    `).join('');

    // Apply first preset by default
    if (list.length > 0 && promptInput) {
      promptInput.value = list[0].prompt;
      const event = new Event('input');
      promptInput.dispatchEvent(event);
    }
  }

  function applyPreset(idx) {
    const list = promptPresets[state.track] || promptPresets.salud;
    const promptInput = document.getElementById('studioPromptInput');
    if (list[idx] && promptInput) {
      promptInput.value = list[idx].prompt;
      promptInput.dispatchEvent(new Event('input'));
    }
  }

  // 9. SIMULATOR 3: ROI CALCULATOR
  function setupRoiCalculator() {
    const casesInput = document.getElementById('roiCasesInput');
    const casesVal = document.getElementById('roiCasesVal');
    const timeInput = document.getElementById('roiTimeInput');
    const timeVal = document.getElementById('roiTimeVal');
    const costInput = document.getElementById('roiCostInput');
    const costVal = document.getElementById('roiCostVal');
    const stpInput = document.getElementById('roiStpInput');
    const stpVal = document.getElementById('roiStpVal');
    const setupCostInput = document.getElementById('roiSetupCostInput');
    const maintCostInput = document.getElementById('roiMaintCostInput');

    const outHours = document.getElementById('roiOutHours');
    const outSavings = document.getElementById('roiOutSavings');
    const outTco = document.getElementById('roiOutTco');
    const outNet = document.getElementById('roiOutNet');
    const outRoiPct = document.getElementById('roiOutPct');
    const outBreakEven = document.getElementById('roiOutBreakEven');

    if (!casesInput) return;

    const allInputs = [casesInput, timeInput, costInput, stpInput, setupCostInput, maintCostInput];
    allInputs.forEach(inp => {
      inp?.addEventListener('input', calculateRoi);
    });

    calculateRoi();

    function calculateRoi() {
      const cases = Number(casesInput.value);
      const mins = Number(timeInput.value);
      const hourly = Number(costInput.value);
      const stp = Number(stpInput.value) / 100;
      const setup = Number(setupCostInput.value);
      const maint = Number(maintCostInput.value);

      if (casesVal) casesVal.textContent = cases.toLocaleString();
      if (timeVal) timeVal.textContent = `${mins} min`;
      if (costVal) costVal.textContent = `$${hourly} USD/h`;
      if (stpVal) stpVal.textContent = `${Math.round(stp * 100)}%`;

      // Calculations
      const annualCases = cases * 12;
      const totalManualHoursYear = (annualCases * mins) / 60;
      const hoursFreedYear = Math.round(totalManualHoursYear * stp);
      const annualSavings = Math.round(hoursFreedYear * hourly);

      const tcoYear1 = setup + maint;
      const netReturnYear1 = annualSavings - tcoYear1;
      const roiPct = tcoYear1 > 0 ? Math.round((netReturnYear1 / tcoYear1) * 100) : 0;
      const monthlySavings = annualSavings / 12;
      const breakEvenMonths = monthlySavings > 0 ? (setup / monthlySavings).toFixed(1) : 'N/A';

      if (outHours) outHours.textContent = hoursFreedYear.toLocaleString() + ' hrs';
      if (outSavings) outSavings.textContent = '$' + annualSavings.toLocaleString() + ' USD';
      if (outTco) outTco.textContent = '$' + tcoYear1.toLocaleString() + ' USD';
      if (outNet) {
        outNet.textContent = '$' + netReturnYear1.toLocaleString() + ' USD';
        outNet.style.color = netReturnYear1 >= 0 ? '#10B981' : '#EF4444';
      }
      if (outRoiPct) outRoiPct.textContent = `${roiPct}%`;
      if (outBreakEven) outBreakEven.textContent = `${breakEvenMonths} meses`;
    }
  }

  function updateRoiPresets() {
    // Re-trigger calculation if needed
    setupRoiCalculator();
  }

  // 10. GLOSSARY RENDERING
  function renderGlossary(filterText = '') {
    const container = document.getElementById('glossaryGridContainer');
    const searchInput = document.getElementById('glossarySearchInput');
    if (!container) return;

    if (searchInput && !searchInput.dataset.initialized) {
      searchInput.dataset.initialized = 'true';
      searchInput.addEventListener('input', (e) => {
        renderGlossary(e.target.value.toLowerCase());
      });
    }

    const filtered = ACADEMY_DATA.glossary.filter(item => {
      return item.term.toLowerCase().includes(filterText) ||
             item.cat.toLowerCase().includes(filterText) ||
             item.def.toLowerCase().includes(filterText);
    });

    container.innerHTML = filtered.map(item => `
      <div class="glossary-card">
        <div class="glossary-card-term">${item.term}</div>
        <div class="glossary-card-cat">${item.cat}</div>
        <div class="glossary-card-def">${item.def}</div>
      </div>
    `).join('');
  }

  // 11. DOWNLOADS CATALOG RENDERING
  function renderDownloads() {
    const container = document.getElementById('downloadsGridContainer');
    if (!container) return;

    container.innerHTML = ACADEMY_DATA.downloads.map(d => `
      <div class="download-card">
        <div>
          <div class="download-card-badge">${d.badge} · ${d.category}</div>
          <h3 class="download-card-title" style="margin-top:0.5rem; margin-bottom:0.5rem;">${d.title}</h3>
          <p class="download-card-desc">${d.desc}</p>
        </div>
        <div>
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.5rem;">
            Formato: ${d.format}
          </div>
          <a href="${d.file}" download class="download-btn" style="width:100%;">
            ⬇ Descargar Archivo
          </a>
        </div>
      </div>
    `).join('');
  }

  // 12. SIMULATOR 4: PROBABILIDAD DE GLOSA IA (PREDICTIVE ENGINE)
  function setupGlosaPredictor() {
    const epsSelect = document.getElementById('predEpsSelect');
    const serviceSelect = document.getElementById('predServiceSelect');
    const valSlider = document.getElementById('predValSlider');
    const valText = document.getElementById('predValText');
    const staySlider = document.getElementById('predStaySlider');
    const stayText = document.getElementById('predStayText');
    const authSelect = document.getElementById('predAuthSelect');
    const clinicalSelect = document.getElementById('predClinicalSelect');
    const tariffSelect = document.getElementById('predTariffSelect');

    const scoreCircle = document.getElementById('predScoreCircle');
    const scoreNum = document.getElementById('predScoreNum');
    const decisionBanner = document.getElementById('predDecisionBanner');
    const decisionText = document.getElementById('predDecisionText');
    const finBilled = document.getElementById('predFinBilled');
    const finObjected = document.getElementById('predFinObjected');
    const finExpected = document.getElementById('predFinExpected');
    const shapList = document.getElementById('predShapList');
    const actionPlanText = document.getElementById('predActionPlanText');

    if (!epsSelect) return;

    [epsSelect, serviceSelect, valSlider, staySlider, authSelect, clinicalSelect, tariffSelect].forEach(el => {
      el?.addEventListener('input', runGlosaPrediction);
    });

    runGlosaPrediction();

    function runGlosaPrediction() {
      const eps = epsSelect.value;
      const service = serviceSelect.value;
      const val = Number(valSlider.value);
      const stay = Number(staySlider.value);
      const auth = authSelect.value;
      const clinical = clinicalSelect.value;
      const tariff = tariffSelect.value;

      if (valText) valText.textContent = '$' + val.toLocaleString() + ' COP';
      if (stayText) stayText.textContent = `${stay} días`;

      // Base weights mimicking a calibrated Gradient Boosted Trees model (XGBoost / LightGBM)
      let score = 0.15;
      let shap = [];

      // 1. EPS Pagadora (Perfil Histórico de Glosa)
      if (eps === 'Nueva EPS') {
        score += 0.20;
        shap.push({ name: 'Historial de alta objeción en Nueva EPS', weight: '+20% Riesgo', type: 'pos', absVal: 0.20 });
      } else if (eps === 'Famisanar') {
        score += 0.16;
        shap.push({ name: 'Frecuente objeción en trauma y paraclínicos (Famisanar)', weight: '+16% Riesgo', type: 'pos', absVal: 0.16 });
      } else if (eps === 'Sura EPS') {
        score += 0.14;
        shap.push({ name: 'Auditoría médica estricta de autorizaciones (Sura EPS)', weight: '+14% Riesgo', type: 'pos', absVal: 0.14 });
      } else if (eps === 'Compensar') {
        score += 0.08;
        shap.push({ name: 'Control riguroso de liquidación de UVR (Compensar)', weight: '+8% Riesgo', type: 'pos', absVal: 0.08 });
      } else if (eps === 'EPS Sanitas' || eps === 'Salud Total') {
        score -= 0.10;
        shap.push({ name: `Historial favorable de radicación limpia (${eps})`, weight: '-10% Protección', type: 'neg', absVal: 0.10 });
      }

      // 2. Estado del Volante de Autorización (Variable Crítica #1)
      if (auth === 'faltante') {
        score += 0.42;
        shap.push({ name: 'Ausencia total de volante de autorización (Causal de devolución)', weight: '+42% Riesgo', type: 'pos', absVal: 0.42 });
      } else if (auth === 'vencida') {
        score += 0.32;
        shap.push({ name: 'Volante de autorización extemporáneo o sin prórroga', weight: '+32% Riesgo', type: 'pos', absVal: 0.32 });
      } else if (auth === 'excedida') {
        score += 0.25;
        shap.push({ name: 'Procedimiento excede cupo mensual de sesiones autorizadas', weight: '+25% Riesgo', type: 'pos', absVal: 0.25 });
      } else {
        score -= 0.14;
        shap.push({ name: 'Volante de autorización vigente y validado contra contrato', weight: '-14% Protección', type: 'neg', absVal: 0.14 });
      }

      // 3. Calidad del Soporte Clínico (Variable Crítica #2)
      if (clinical === 'baja') {
        score += 0.28;
        shap.push({ name: 'Soporte clínico insuficiente (Sin escala Glasgow o evolución diaria)', weight: '+28% Riesgo', type: 'pos', absVal: 0.28 });
      } else if (clinical === 'media') {
        score += 0.12;
        shap.push({ name: 'Soporte clínico parcial con riesgo de objeción de pertinencia', weight: '+12% Riesgo', type: 'pos', absVal: 0.12 });
      } else {
        score -= 0.16;
        shap.push({ name: 'Soporte clínico completo con escalas y justificación médica', weight: '-16% Protección', type: 'neg', absVal: 0.16 });
      }

      // 4. Manual Tarifario (Variable Crítica #3)
      if (tariff === 'discrepancia') {
        score += 0.20;
        shap.push({ name: 'Discrepancia en liquidación tarifaria (Cruce SOAT vs. ISS 2001)', weight: '+20% Riesgo', type: 'pos', absVal: 0.20 });
      } else if (tariff === 'material_tope') {
        score += 0.22;
        shap.push({ name: 'Material o prótesis excede el tope contractual negociado', weight: '+22% Riesgo', type: 'pos', absVal: 0.22 });
      } else {
        score -= 0.08;
        shap.push({ name: 'Manual tarifario pactado verificado al 100%', weight: '-8% Protección', type: 'neg', absVal: 0.08 });
      }

      // 5. Estancia Hospitalaria vs. Servicio (Sensibilidad Dinámica Continua)
      let stayNorm = 1;
      let stayWeight = 0.035;
      if (service.includes('Ambulatorio')) {
        stayNorm = 0;
        stayWeight = 0.10; // En ambulatorio no debe existir estancia
      } else if (service.includes('UCI') || service.includes('Urgencias')) {
        stayNorm = 2; // Benchmark normal: 2 días
        stayWeight = 0.045; // En UCI cada día adicional eleva el riesgo de objeción
      } else if (service.includes('Cirugía')) {
        stayNorm = 2;
        stayWeight = 0.035;
      } else if (service.includes('Ortopedia')) {
        stayNorm = 3;
        stayWeight = 0.03;
      } else if (service.includes('Medicina Interna')) {
        stayNorm = 4;
        stayWeight = 0.025;
      } else if (service.includes('Oncología')) {
        stayNorm = 2;
        stayWeight = 0.03;
      }

      const stayDiff = stay - stayNorm;
      if (stayDiff > 0) {
        const stayImpact = Math.min(0.32, stayDiff * stayWeight);
        score += stayImpact;
        shap.push({
          name: `Estancia de ${stay} días excede el promedio esperado (${stayNorm}d) en ${service.split('/')[0].trim()}`,
          weight: `+${Math.round(stayImpact * 100)}% Riesgo`,
          type: 'pos',
          absVal: stayImpact
        });
      } else if (stayDiff < 0) {
        const stayBenefit = 0.06;
        score -= stayBenefit;
        shap.push({
          name: `Estancia corta optimizada (${stay} días) reduce probabilidad de objeción`,
          weight: '-6% Protección',
          type: 'neg',
          absVal: stayBenefit
        });
      }

      // 6. Monto Facturado (Efecto de Cuantía y Auditoría Especial de EPS)
      if (val > 15000000) {
        const valImpact = Math.min(0.12, 0.04 + ((val - 15000000) / 15000000) * 0.08);
        score += valImpact;
        shap.push({
          name: `Cuenta de alta cuantía ($${Math.round(val / 1000000)}M COP) sujeta a comité especial de la EPS`,
          weight: `+${Math.round(valImpact * 100)}% Riesgo`,
          type: 'pos',
          absVal: valImpact
        });
      } else if (val < 1000000) {
        score -= 0.05;
        shap.push({
          name: 'Baja cuantía (< $1M COP): alta probabilidad de pase directo en filtros EPS',
          weight: '-5% Protección',
          type: 'neg',
          absVal: 0.05
        });
      }

      // Ordenar factores SHAP por relevancia absoluta
      shap.sort((a, b) => (b.absVal || 0) - (a.absVal || 0));

      // Clamping score between 4% and 98%
      score = Math.max(0.04, Math.min(0.98, score));
      const scorePct = Math.round(score * 100);

      // Severity Calculation Dinámica (Importe en Glosa Estimado)
      let severityAmount = 0;
      if (auth === 'faltante') {
        severityAmount = val; // Devolución total del 100%
      } else if (auth === 'vencida') {
        severityAmount = Math.round(val * 0.85);
      } else {
        let baseObjPct = 0.10;
        if (tariff === 'discrepancia' || tariff === 'material_tope') baseObjPct += 0.20;
        if (clinical === 'baja') baseObjPct += 0.15;
        if (stayDiff > 0) {
          const bedDayCost = service.includes('UCI') ? 750000 : 220000;
          const bedExcess = stayDiff * bedDayCost;
          severityAmount = Math.min(val, Math.round(val * baseObjPct + bedExcess));
        } else {
          severityAmount = Math.min(val, Math.round(val * baseObjPct));
        }
      }

      // Si la cuenta tiene riesgo muy bajo, la glosa esperada converge a 0
      if (score < 0.25) {
        severityAmount = Math.round(severityAmount * 0.20);
      }

      const expectedLoss = Math.round(severityAmount * score);

      // Update Gauge & Numbers
      if (scoreNum) scoreNum.textContent = `${scorePct}%`;
      if (finBilled) finBilled.textContent = '$' + val.toLocaleString() + ' COP';
      if (finObjected) finObjected.textContent = '$' + severityAmount.toLocaleString() + ' COP';
      if (finExpected) finExpected.textContent = '$' + expectedLoss.toLocaleString() + ' COP';

      // Update Visuals based on Decision Threshold
      if (score >= 0.70) {
        scoreCircle.style.background = 'linear-gradient(135deg, #EF4444, #B91C1C)';
        decisionBanner.className = 'decision-banner decision-red';
        decisionBanner.innerHTML = '🛑 RETENER CUENTA: Alto Riesgo de Glosa Inmediata';
        decisionText.textContent = `La cuenta supera el umbral crítico (>70%). Si se radica en este estado ante ${eps}, generará una objeción estimada de $${severityAmount.toLocaleString()} COP. Requiere intervención inmediata del auditor antes de radicación.`;
        actionPlanText.innerHTML = `
          1. <strong>Intervención Inmediata:</strong> Corregir el factor principal: ${shap[0]?.name || 'Revisar soportes'}.<br>
          2. <strong>Validación Humana (HITL):</strong> El auditor médico debe ingresar la nota de soporte o tramitar la autorización extemporánea antes de enviar el RIPS a la EPS.
        `;
      } else if (score >= 0.30) {
        scoreCircle.style.background = 'linear-gradient(135deg, #F59E0B, #D97706)';
        decisionBanner.className = 'decision-banner decision-yellow';
        decisionBanner.innerHTML = '⚠️ ALERTA MEDIA: Revisión Preventiva Recomendada';
        decisionText.textContent = `La cuenta se encuentra en zona de riesgo moderado (${scorePct}%). Puede ser radicada si se validan los anexos técnicos para evitar glosas parciales menores.`;
        actionPlanText.innerHTML = `
          1. <strong>Verificación Preventiva:</strong> Cotejar que los derechos de sala y cantidades facturadas concuerden con la hoja quirúrgica.<br>
          2. <strong>Prevalidación:</strong> Pasar la factura por el validador automático de RIPS y radicar si no hay errores formales.
        `;
      } else {
        scoreCircle.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        decisionBanner.className = 'decision-banner decision-green';
        decisionBanner.innerHTML = '✅ APROBADA: Radicación Automática STP (Bajo Riesgo)';
        decisionText.textContent = `La cuenta cuenta con bajo riesgo (${scorePct}%). Cumple con autorizaciones vigentes, coherencia clínica y manuales tarifarios verificados. Candidata a radicación 100% autónoma.`;
        actionPlanText.innerHTML = `
          1. <strong>Radicación Automática:</strong> Enviar directamente al buzón o plataforma de la EPS mediante el conector de integración de MSM.<br>
          2. <strong>Cero intervención manual:</strong> Ahorro estimado de 20 minutos de revisión de auditoría humana.
        `;
      }

      // Update SHAP list
      if (shapList) {
        shapList.innerHTML = shap.slice(0, 4).map(f => `
          <div class="shap-row">
            <span>${f.name}</span>
            <span class="${f.type === 'pos' ? 'shap-chip-positive' : 'shap-chip-negative'}">${f.weight}</span>
          </div>
        `).join('');
      }
    }
  }

  function loadPredictorCase(caseId) {
    const epsSelect = document.getElementById('predEpsSelect');
    const serviceSelect = document.getElementById('predServiceSelect');
    const valSlider = document.getElementById('predValSlider');
    const staySlider = document.getElementById('predStaySlider');
    const authSelect = document.getElementById('predAuthSelect');
    const clinicalSelect = document.getElementById('predClinicalSelect');
    const tariffSelect = document.getElementById('predTariffSelect');

    const cases = {
      'FAC-002': { eps: 'Nueva EPS', service: 'Urgencias / UCI', val: 18500000, stay: 5, auth: 'valida', clinical: 'media', tariff: 'material_tope' },
      'FAC-003': { eps: 'Sura EPS', service: 'Ortopedia / Traumatología', val: 7200000, stay: 3, auth: 'faltante', clinical: 'alta', tariff: 'ok' },
      'FAC-006': { eps: 'Nueva EPS', service: 'Urgencias / UCI', val: 9400000, stay: 7, auth: 'valida', clinical: 'baja', tariff: 'ok' },
      'FAC-001': { eps: 'EPS Sanitas', service: 'Cirugía General', val: 4850000, stay: 2, auth: 'valida', clinical: 'alta', tariff: 'ok' },
      'FAC-012': { eps: 'Famisanar', service: 'Urgencias / UCI', val: 680000, stay: 1, auth: 'valida', clinical: 'baja', tariff: 'ok' }
    };

    const c = cases[caseId];
    if (!c || !epsSelect) return;

    epsSelect.value = c.eps;
    serviceSelect.value = c.service;
    valSlider.value = c.val;
    staySlider.value = c.stay;
    authSelect.value = c.auth;
    clinicalSelect.value = c.clinical;
    tariffSelect.value = c.tariff;

    const event = new Event('input');
    epsSelect.dispatchEvent(event);
  }

  // Expose methods for inline onclick events
  window.academyApp = {
    selectSession: (num) => renderSessionDetail(num),
    toggleComplete: (num) => toggleSessionComplete(num),
    setMaturity: (dim, val) => setMaturity(dim, val),
    resetMaturity: () => resetMaturity(),
    applyPreset: (idx) => applyPreset(idx),
    loadPredictorCase: (caseId) => loadPredictorCase(caseId),
    openTab: (tabId) => switchTab(tabId)
  };

  // Initial Run
  updateTrackVisuals();
  updateGlobalProgress();
  renderCurriculumSidebar();
  renderSessionDetail(state.currentSession);
  renderMaturityTool();
  setupGlosaPredictor();
  setupPromptStudio();
  setupRoiCalculator();
  renderGlossary();
  renderDownloads();
});

