import React from 'react';
import { ArrowDown, Sparkles, BookOpen, Layers, Brain, Play } from 'lucide-react';
import { ASSET_IMAGES, SITE_METADATA } from '../../data/knowledgeBase';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#060911] tech-grid-pattern-dark border-b border-white/10"
    >
      {/* Volumetric illumination effects: ambient cyan and indigo glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Top radiant light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6">
        {/* Editorial unboxed metadata line with optical compensation */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400 mb-6 font-medium tracking-wide">
          <span className="text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
            {SITE_METADATA.institutionCategory}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">Pedagogía Digital Avanzada</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">Edición {SITE_METADATA.publicationYear}</span>
        </div>

        {/* Central Display Title with luminous text rendering */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]"
            style={{ textWrap: 'balance' }}
          >
            Didácticas en entornos virtuales
          </h1>
          <p
            className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Arquitectura pedagógica, mediación tecnológica y convergencia andragógica contemporánea:
            inteligencia artificial multimodal, simulación inmersiva y diseño universal en la educación superior.
          </p>
        </div>

        {/* Hero Visual Block with Luminous Border and Soft Glow */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-slate-900 group">
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden">
            <img
              src={ASSET_IMAGES.hero}
              alt="Docente universitario y jóvenes estudiantes interactuando con interfaces analíticas de inteligencia artificial y tecnología educativa en un laboratorio contemporáneo"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/40 to-transparent" />

            {/* In-image caption overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-1 block drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">
                  Mediación Epistémica y Tecnológica
                </span>
                <p className="text-sm sm:text-base font-medium text-slate-100 leading-snug">
                  La articulación entre el criterio pedagógico del docente y la adaptabilidad de la IA crea entornos donde el error es formativo y el aprendizaje es situado.
                </p>
              </div>

              {/* Quiet metric markers */}
              <div className="flex items-center gap-4 text-xs font-mono text-cyan-200 border-t sm:border-t-0 sm:border-l border-white/20 pt-2 sm:pt-0 sm:pl-4 bg-slate-950/40 p-2 sm:p-0 rounded-lg sm:rounded-none backdrop-blur-xs">
                <div>
                  <span className="block text-slate-400">Cobertura</span>
                  <span className="text-sm font-semibold text-white">4 Vertientes</span>
                </div>
                <div>
                  <span className="block text-slate-400">Enfoque</span>
                  <span className="text-sm font-semibold text-white">Andragogía</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls & Navigation Prompts with Luminous Accents */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => scrollTo('tipos-didacticas')}
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.35)] group"
          >
            <Layers className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Explorar tipos de didácticas</span>
            <ArrowDown className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => scrollTo('video-capsula')}
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white text-sm font-medium rounded-xl border border-cyan-500/40 hover:border-cyan-400 transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <span>Ver cápsula en video</span>
          </button>

          <button
            onClick={() => scrollTo('flashcards')}
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white text-sm font-medium rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Brain className="w-4 h-4 text-cyan-400" />
            <span>Flashcards (60)</span>
          </button>
        </div>

        {/* Quick Anchor Strip with Luminous Hover */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
          <button
            onClick={() => scrollTo('tipos-didacticas')}
            className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/40 transition-all text-left group"
          >
            <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">01 / ESTRUCTURA</span>
            <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors block">
              Tipos de didácticas
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              4 vertientes pedagógicas y matriz comparativa
            </span>
          </button>

          <button
            onClick={() => scrollTo('caracteristicas')}
            className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/40 transition-all text-left group"
          >
            <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">02 / OPERACIÓN</span>
            <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors block">
              Características y atributos
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              Sensado atencional, DUA y el rol docente
            </span>
          </button>

          <button
            onClick={() => scrollTo('ejemplos-practicos')}
            className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/40 transition-all text-left group"
          >
            <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">03 / APLICACIÓN</span>
            <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors block">
              Ejemplos prácticos
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              Casos andragógicos aplicados a jóvenes adultos
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
