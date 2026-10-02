import React, { useState } from 'react';
import {
  Users,
  Briefcase,
  Layers,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Boxes,
  MessageSquareCode,
  Volume2,
  FileText,
  Video,
  Sliders,
} from 'lucide-react';
import { SECTION_3_DATA } from '../../data/knowledgeBase';

export const Section3PracticalExamples: React.FC = () => {
  // Active step state for each case to make didactic sequences interactive
  const [activeSteps, setActiveSteps] = useState<{ [key: string]: number }>({
    'caso-1': 1,
    'caso-2': 1,
    'caso-3': 1,
    'caso-4': 1,
  });

  // State for Case 4 DUA interactive format simulator
  const [duaFormat, setDuaFormat] = useState<'text' | 'audio' | 'visual' | 'mindmap'>('text');

  const setStep = (caseId: string, stepNum: number) => {
    setActiveSteps((prev) => ({ ...prev, [caseId]: stepNum }));
  };

  const cases = SECTION_3_DATA.cases;

  return (
    <section id="ejemplos-practicos" className="py-24 bg-[#070b16] text-slate-100 relative overflow-hidden border-b border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-3">
            <span>Sección 3</span>
            <span aria-hidden="true">/</span>
            <span>Andragogía Digital y Transferencia Práctica</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            {SECTION_3_DATA.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {SECTION_3_DATA.andragogyIntro.description}
          </p>
        </div>

        {/* Andragogy Digital Principles Strip in Dark Glass */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl">
          <h3 className="text-lg font-serif font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            <span>{SECTION_3_DATA.andragogyIntro.title}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTION_3_DATA.andragogyIntro.principles.map((pr, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all"
              >
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1.5">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {pr.label}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pr.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* THE FOUR PRACTICAL CASES (Dark Luminous Compositions)           */}
        {/* ============================================================== */}
        <div className="space-y-24">
          {/* ------------------------------------------------------------ */}
          {/* CASO 1: Didáctica Adaptativa (Educación Superior)            */}
          {/* ------------------------------------------------------------ */}
          {(() => {
            const c = cases[0];
            const activeStep = activeSteps[c.id] || 1;
            return (
              <div
                key={c.id}
                className="rounded-3xl border border-white/10 overflow-hidden bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 lg:p-12 relative shadow-2xl hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                      {c.caseNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Inteligencia Artificial Multimodal
                    </span>
                  </div>
                  <span className="text-xs font-medium text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                    Bioestadística y Farmacología
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Case Narrative & Image */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                        {c.title}
                      </h3>
                      <p className="text-sm font-medium text-cyan-300 mt-1">
                        {c.subtitle}
                      </p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg aspect-[4/3] group">
                      <img
                        src={c.imageSrc}
                        alt="Estudiante universitaria en simulación de prescripción adaptativa y análisis bioestadístico"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-xs text-white p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30">
                        <span className="font-semibold text-cyan-300 block mb-0.5">Analítica en Tiempo Real</span>
                        <span className="text-slate-300">Monitoreo de latencia diagnóstica e índice de incertidumbre farmacológica.</span>
                      </div>
                    </div>

                    {/* Component 1: Público Objetivo y Contexto Virtual */}
                    <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{c.targetAudience.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2 font-medium">
                        {c.targetAudience.description}
                      </p>
                      <p className="text-xs text-slate-400 italic">
                        Contexto: {c.targetAudience.context}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Didactic Sequence & Expected Impact */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Component 2: Secuencia Didáctica y Herramientas */}
                    <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/10 shadow-xs">
                      <h4 className="text-sm uppercase font-bold text-cyan-300 tracking-wider mb-2 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span>{c.didacticSequence.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mb-4">
                        {c.didacticSequence.description}
                      </p>

                      {/* Interactive Step Navigator */}
                      <div className="space-y-3 mb-6">
                        <div className="flex gap-2 border-b border-white/10 pb-2">
                          {c.didacticSequence.steps.map((st) => (
                            <button
                              key={st.step}
                              onClick={() => setStep(c.id, st.step)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                                activeStep === st.step
                                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              Paso 0{st.step}: {st.phase}
                            </button>
                          ))}
                        </div>

                        {c.didacticSequence.steps.map((st) => {
                          if (st.step !== activeStep) return null;
                          return (
                            <div
                              key={st.step}
                              className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 animate-in fade-in duration-200"
                            >
                              <div className="flex items-center justify-between text-xs font-mono text-cyan-300 font-bold mb-1">
                                <span>FASE 0{st.step} — {st.phase.toUpperCase()}</span>
                                <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-cyan-500/30">
                                  Acción del Algoritmo y Aprendiz
                                </span>
                              </div>
                              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                                {st.action}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tools Used */}
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-xs font-semibold text-slate-400 block mb-2">
                          Herramientas Utilizadas en el Entorno Virtual:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {c.didacticSequence.tools.map((tool, ti) => (
                            <div key={ti} className="flex items-start gap-2 bg-slate-900/80 p-2 rounded-lg border border-white/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                              <span>{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Component 3: Impacto Esperado en el Joven Adulto */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/80 text-white border border-cyan-500/30 shadow-lg">
                      <h4 className="text-xs uppercase font-bold text-cyan-300 tracking-wider mb-2 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{c.expectedImpact.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {c.expectedImpact.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-white/10">
                        {c.expectedImpact.indicators.map((ind, ii) => (
                          <div key={ii} className="flex items-center gap-2 text-xs text-cyan-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ------------------------------------------------------------ */}
          {/* CASO 2: Didáctica Inmersiva / Gamificada                     */}
          {/* ------------------------------------------------------------ */}
          {(() => {
            const c = cases[1];
            const activeStep = activeSteps[c.id] || 1;
            return (
              <div
                key={c.id}
                className="rounded-3xl border border-white/10 overflow-hidden bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 lg:p-12 relative shadow-2xl hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-500/40 font-mono text-xs font-bold shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                      {c.caseNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Realidad Extendida y Simulación Háptica
                    </span>
                  </div>
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-500/30">
                    Ingeniería Industrial y Seguridad
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Case Narrative & Image */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                        {c.title}
                      </h3>
                      <p className="text-sm font-medium text-indigo-300 mt-1">
                        {c.subtitle}
                      </p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 shadow-lg aspect-[4/3] group">
                      <img
                        src={c.imageSrc}
                        alt="Estudiante universitario participando en simulación de realidad virtual de alta fidelidad para ingeniería industrial"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-xs text-white p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-indigo-500/30">
                        <span className="font-semibold text-indigo-300 block mb-0.5">Gemelo Digital en Tiempo Real</span>
                        <span className="text-slate-300">Física de fluidos y gases en contingencia con telemetría de decisiones en equipo.</span>
                      </div>
                    </div>

                    {/* Component 1: Público Objetivo y Contexto Virtual */}
                    <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{c.targetAudience.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2 font-medium">
                        {c.targetAudience.description}
                      </p>
                      <p className="text-xs text-slate-400 italic">
                        Contexto: {c.targetAudience.context}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Didactic Sequence & Expected Impact */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Component 2: Secuencia Didáctica y Herramientas */}
                    <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/10 shadow-xs">
                      <h4 className="text-sm uppercase font-bold text-indigo-300 tracking-wider mb-2 flex items-center gap-2">
                        <Boxes className="w-4 h-4 text-indigo-400" />
                        <span>{c.didacticSequence.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mb-4">
                        {c.didacticSequence.description}
                      </p>

                      {/* Interactive Step Navigator */}
                      <div className="space-y-3 mb-6">
                        <div className="flex gap-2 border-b border-white/10 pb-2">
                          {c.didacticSequence.steps.map((st) => (
                            <button
                              key={st.step}
                              onClick={() => setStep(c.id, st.step)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                                activeStep === st.step
                                  ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(99,102,241,0.4)]'
                                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              Paso 0{st.step}: {st.phase}
                            </button>
                          ))}
                        </div>

                        {c.didacticSequence.steps.map((st) => {
                          if (st.step !== activeStep) return null;
                          return (
                            <div
                              key={st.step}
                              className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 animate-in fade-in duration-200"
                            >
                              <div className="flex items-center justify-between text-xs font-mono text-indigo-300 font-bold mb-1">
                                <span>FASE 0{st.step} — {st.phase.toUpperCase()}</span>
                                <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-indigo-500/30">
                                  Intervención en Simulación
                                </span>
                              </div>
                              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                                {st.action}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tools Used */}
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-xs font-semibold text-slate-400 block mb-2">
                          Herramientas Utilizadas en el Entorno Virtual:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {c.didacticSequence.tools.map((tool, ti) => (
                            <div key={ti} className="flex items-start gap-2 bg-slate-900/80 p-2 rounded-lg border border-white/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(99,102,241,0.8)]" />
                              <span>{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Component 3: Impacto Esperado en el Joven Adulto */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/80 text-white border border-indigo-500/30 shadow-lg">
                      <h4 className="text-xs uppercase font-bold text-indigo-300 tracking-wider mb-2 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{c.expectedImpact.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {c.expectedImpact.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-white/10">
                        {c.expectedImpact.indicators.map((ind, ii) => (
                          <div key={ii} className="flex items-center gap-2 text-xs text-indigo-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ------------------------------------------------------------ */}
          {/* CASO 3: Didáctica Conversacional / Metacognitiva            */}
          {/* ------------------------------------------------------------ */}
          {(() => {
            const c = cases[2];
            const activeStep = activeSteps[c.id] || 1;
            return (
              <div
                key={c.id}
                className="rounded-3xl border border-white/10 overflow-hidden bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 lg:p-12 relative shadow-2xl hover:border-teal-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-teal-950 text-teal-300 border border-teal-500/40 font-mono text-xs font-bold shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                      {c.caseNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Modelos Fundacionales y Diálogo Socrático
                    </span>
                  </div>
                  <span className="text-xs font-medium text-teal-300 bg-teal-950/60 px-2.5 py-1 rounded border border-teal-500/30">
                    Derecho y Litigación Constitucional
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Case Narrative & Image */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                        {c.title}
                      </h3>
                      <p className="text-sm font-medium text-teal-300 mt-1">
                        {c.subtitle}
                      </p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-teal-500/30 shadow-lg aspect-[4/3] group">
                      <img
                        src={c.imageSrc}
                        alt="Estudiante universitario interactuando con un tutor conversacional LLM socrático en un seminario jurídico de argumentación"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-xs text-white p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-teal-500/30">
                        <span className="font-semibold text-teal-300 block mb-0.5">Andamiaje Epistémico Restringido</span>
                        <span className="text-slate-300">El agente LLM no responde unívocamente; interpela premisas y señala falacias.</span>
                      </div>
                    </div>

                    {/* Component 1: Público Objetivo y Contexto Virtual */}
                    <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-teal-400" />
                        <span>{c.targetAudience.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2 font-medium">
                        {c.targetAudience.description}
                      </p>
                      <p className="text-xs text-slate-400 italic">
                        Contexto: {c.targetAudience.context}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Didactic Sequence & Expected Impact */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Component 2: Secuencia Didáctica y Herramientas */}
                    <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/10 shadow-xs">
                      <h4 className="text-sm uppercase font-bold text-teal-300 tracking-wider mb-2 flex items-center gap-2">
                        <MessageSquareCode className="w-4 h-4 text-teal-400" />
                        <span>{c.didacticSequence.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mb-4">
                        {c.didacticSequence.description}
                      </p>

                      {/* Interactive Step Navigator */}
                      <div className="space-y-3 mb-6">
                        <div className="flex gap-2 border-b border-white/10 pb-2">
                          {c.didacticSequence.steps.map((st) => (
                            <button
                              key={st.step}
                              onClick={() => setStep(c.id, st.step)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                                activeStep === st.step
                                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(20,184,166,0.4)]'
                                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              Paso 0{st.step}: {st.phase}
                            </button>
                          ))}
                        </div>

                        {c.didacticSequence.steps.map((st) => {
                          if (st.step !== activeStep) return null;
                          return (
                            <div
                              key={st.step}
                              className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 animate-in fade-in duration-200"
                            >
                              <div className="flex items-center justify-between text-xs font-mono text-teal-300 font-bold mb-1">
                                <span>FASE 0{st.step} — {st.phase.toUpperCase()}</span>
                                <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-teal-500/30">
                                  Diálogo Dialéctico
                                </span>
                              </div>
                              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                                {st.action}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tools Used */}
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-xs font-semibold text-slate-400 block mb-2">
                          Herramientas Utilizadas en el Entorno Virtual:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {c.didacticSequence.tools.map((tool, ti) => (
                            <div key={ti} className="flex items-start gap-2 bg-slate-900/80 p-2 rounded-lg border border-white/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(20,184,166,0.8)]" />
                              <span>{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Component 3: Impacto Esperado en el Joven Adulto */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/80 text-white border border-teal-500/30 shadow-lg">
                      <h4 className="text-xs uppercase font-bold text-teal-300 tracking-wider mb-2 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                        <span>{c.expectedImpact.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {c.expectedImpact.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-white/10">
                        {c.expectedImpact.indicators.map((ind, ii) => (
                          <div key={ii} className="flex items-center gap-2 text-xs text-teal-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ------------------------------------------------------------ */}
          {/* CASO 4: Didáctica DUA / Andragogía Asíncrona                 */}
          {/* ------------------------------------------------------------ */}
          {(() => {
            const c = cases[3];
            const activeStep = activeSteps[c.id] || 1;
            return (
              <div
                key={c.id}
                className="rounded-3xl border border-white/10 overflow-hidden bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 lg:p-12 relative shadow-2xl hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-white/10 font-mono text-xs font-bold shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      {c.caseNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Diseño Universal para el Aprendizaje y Andragogía Asíncrona
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded border border-white/10">
                    Finanzas Corporativas y Gestión
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Case Narrative & Interactive DUA Matrix */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                        {c.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-1">
                        {c.subtitle}
                      </p>
                    </div>

                    {/* Multimodal Simulator: Interactive representation matrix in Dark Theme */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Matriz Multimodal DUA (Prueba en Vivo)</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button
                          onClick={() => setDuaFormat('text')}
                          className={`p-2 rounded-xl text-xs font-medium flex flex-col items-center gap-1 border transition-all ${
                            duaFormat === 'text'
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                              : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                          }`}
                        >
                          <FileText className="w-4 h-4" />
                          <span>Texto</span>
                        </button>

                        <button
                          onClick={() => setDuaFormat('audio')}
                          className={`p-2 rounded-xl text-xs font-medium flex flex-col items-center gap-1 border transition-all ${
                            duaFormat === 'audio'
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                              : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                          }`}
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>Audioguía</span>
                        </button>

                        <button
                          onClick={() => setDuaFormat('visual')}
                          className={`p-2 rounded-xl text-xs font-medium flex flex-col items-center gap-1 border transition-all ${
                            duaFormat === 'visual'
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                              : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                          }`}
                        >
                          <Video className="w-4 h-4" />
                          <span>Microcápsula</span>
                        </button>

                        <button
                          onClick={() => setDuaFormat('mindmap')}
                          className={`p-2 rounded-xl text-xs font-medium flex flex-col items-center gap-1 border transition-all ${
                            duaFormat === 'mindmap'
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                              : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                          }`}
                        >
                          <Layers className="w-4 h-4" />
                          <span>Esquema</span>
                        </button>
                      </div>

                      {/* Display of selected format simulation */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-300 space-y-2">
                        {duaFormat === 'text' && (
                          <div>
                            <span className="font-bold text-white block mb-1">Formato: Texto Jerarquizado con Resaltado Sintáctico</span>
                            <p className="leading-relaxed">
                              «El Flujo de Caja Descontado (DCF) estima el valor de una inversión hoy basándose en proyecciones de cuánto dinero generará en el futuro, ajustado por una tasa de descuento.»
                            </p>
                          </div>
                        )}
                        {duaFormat === 'audio' && (
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                              <Volume2 className="w-4 h-4 animate-pulse" />
                            </div>
                            <div>
                              <span className="font-bold text-white block">Pódcast Asíncrono (04:12 min)</span>
                              <span className="text-slate-400">Narración profesional a velocidad regulable (0.75x a 1.5x) con transcripción interactiva sincronizada.</span>
                            </div>
                          </div>
                        )}
                        {duaFormat === 'visual' && (
                          <div>
                            <span className="font-bold text-white block mb-1">Cápsula de Video con Subtítulos WCAG AAA</span>
                            <p className="leading-relaxed">
                              Visualización paso a paso de fórmulas con contraste aumentado, pausas conceptuales y preguntas de verificación intercaladas.
                            </p>
                          </div>
                        )}
                        {duaFormat === 'mindmap' && (
                          <div>
                            <span className="font-bold text-white block mb-1">Mapa Conceptual Semántico</span>
                            <p className="leading-relaxed">
                              Árbol interactivo navegable por teclado: [Inversión Inicial] → [Proyecciones Anuales] → [WACC / Tasa de Descuento] → [VPN / TIR].
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Component 1: Público Objetivo y Contexto Virtual */}
                    <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-300" />
                        <span>{c.targetAudience.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2 font-medium">
                        {c.targetAudience.description}
                      </p>
                      <p className="text-xs text-slate-400 italic">
                        Contexto: {c.targetAudience.context}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Didactic Sequence & Expected Impact */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Component 2: Secuencia Didáctica y Herramientas */}
                    <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/10 shadow-xs">
                      <h4 className="text-sm uppercase font-bold text-slate-200 tracking-wider mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>{c.didacticSequence.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mb-4">
                        {c.didacticSequence.description}
                      </p>

                      {/* Interactive Step Navigator */}
                      <div className="space-y-3 mb-6">
                        <div className="flex gap-2 border-b border-white/10 pb-2">
                          {c.didacticSequence.steps.map((st) => (
                            <button
                              key={st.step}
                              onClick={() => setStep(c.id, st.step)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                                activeStep === st.step
                                  ? 'bg-white text-slate-950 font-bold shadow-md'
                                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              Paso 0{st.step}: {st.phase}
                            </button>
                          ))}
                        </div>

                        {c.didacticSequence.steps.map((st) => {
                          if (st.step !== activeStep) return null;
                          return (
                            <div
                              key={st.step}
                              className="p-4 rounded-xl bg-slate-900 border border-white/10 animate-in fade-in duration-200"
                            >
                              <div className="flex items-center justify-between text-xs font-mono text-white font-bold mb-1">
                                <span>FASE 0{st.step} — {st.phase.toUpperCase()}</span>
                                <span className="text-[11px] bg-slate-950 px-2 py-0.5 rounded border border-white/10">
                                  Flexibilidad Radical
                                </span>
                              </div>
                              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                                {st.action}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tools Used */}
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-xs font-semibold text-slate-400 block mb-2">
                          Herramientas Utilizadas en el Entorno Virtual:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {c.didacticSequence.tools.map((tool, ti) => (
                            <div key={ti} className="flex items-start gap-2 bg-slate-900/80 p-2 rounded-lg border border-white/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                              <span>{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Component 3: Impacto Esperado en el Joven Adulto */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-white/10 shadow-lg">
                      <h4 className="text-xs uppercase font-bold text-slate-200 tracking-wider mb-2 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{c.expectedImpact.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {c.expectedImpact.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-white/10">
                        {c.expectedImpact.indicators.map((ind, ii) => (
                          <div key={ii} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
