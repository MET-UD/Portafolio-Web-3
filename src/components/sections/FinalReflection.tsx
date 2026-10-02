import React from 'react';
import { FINAL_SYNTHESIS } from '../../data/knowledgeBase';
import { ArrowUp, Sparkles, BookCheck, Shield, BrainCircuit, GraduationCap } from 'lucide-react';

export const FinalReflection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const convergencePillars = [
    { title: 'Arquitecturas Pedagógicas Rigurosas', icon: GraduationCap, desc: 'Diseño instruccional con base empírica y coherencia epistemológica.' },
    { title: 'Tecnologías Inclusivas y DUA', icon: Shield, desc: 'Erradicación de barreras cognitivas y accesibilidad universal como derecho.' },
    { title: 'Modelos Adaptativos por IA', icon: BrainCircuit, desc: 'Calibración atencional respetando la soberanía y la privacidad del aprendiz.' },
    { title: 'Autonomía y Ciudadanía Digital', icon: BookCheck, desc: 'Juicio crítico, autorregulación y aprendizaje continuo a lo largo de la vida.' },
  ];

  return (
    <section className="relative py-28 bg-[#04060f] text-white overflow-hidden border-b border-white/10">
      {/* Volumetric illumination effects: ambient cyan and indigo glowing orbs */}
      <div className="absolute inset-0 tech-grid-pattern-dark opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-cyan-500/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top luminous hairline divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Unboxed category label */}
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-cyan-300 mb-4 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{FINAL_SYNTHESIS.badge}</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          style={{ textWrap: 'balance' }}
        >
          {FINAL_SYNTHESIS.title}
        </h2>

        {/* Narrative Paragraphs */}
        <div className="mt-8 space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {FINAL_SYNTHESIS.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Convergence 4-Pillars Matrix in Dark Glass */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {convergencePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-3 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlighted Quote Block with Radiant Glow */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 max-w-3xl mx-auto shadow-[0_0_40px_rgba(6,182,212,0.15)]">
          <blockquote className="text-base sm:text-lg italic font-serif text-slate-200 leading-relaxed">
            {FINAL_SYNTHESIS.quote}
          </blockquote>
          <cite className="mt-5 block text-xs font-mono text-cyan-300 tracking-wider not-italic uppercase font-semibold">
            — {FINAL_SYNTHESIS.quoteAuthor}
          </cite>
        </div>

        {/* Return to top trigger */}
        <div className="mt-14">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400" />
            <span>Volver al inicio del portal</span>
          </button>
        </div>
      </div>
    </section>
  );
};
