import React from 'react';
import { ArrowUp, BookOpen, Compass, Layers, Sparkles, Brain } from 'lucide-react';
import { SITE_METADATA } from '../../data/knowledgeBase';

export const Footer: React.FC = () => {
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
    <footer className="bg-[#03050c] text-slate-400 py-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle bottom lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Academic Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="font-serif font-bold text-white text-lg sm:text-xl tracking-tight">
                {SITE_METADATA.title}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {SITE_METADATA.editorialTagline}. Documento de referencia sobre innovación pedagógica, inteligencia artificial multimodal y diseño universal para el aprendizaje.
            </p>
            <div className="text-xs font-mono text-cyan-400 pt-1">
              <span>{SITE_METADATA.institutionCategory}</span>
              <span className="mx-2">·</span>
              <span>Edición {SITE_METADATA.publicationYear}</span>
            </div>
          </div>

          {/* Navigation Architecture */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider block">
              Estructura del Portal
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('inicio')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inicio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tipos-didacticas')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tipos de didácticas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('caracteristicas')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Características</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('ejemplos-practicos')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ejemplos prácticos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('flashcards')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Brain className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Juego de Flashcards</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Dimensions */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider block">
              Dimensiones Didácticas
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                <span>IA Multimodal y Adaptabilidad</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)]" />
                <span>Simulación Inmersiva y XR</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_5px_rgba(45,212,191,0.8)]" />
                <span>Diálogo Socrático con LLMs</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_5px_rgba(129,140,248,0.8)]" />
                <span>Diseño Universal para el Aprendizaje</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {SITE_METADATA.publicationYear} {SITE_METADATA.title}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('inicio')}
              className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-xs font-medium"
            >
              <span>Regresar al inicio</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
