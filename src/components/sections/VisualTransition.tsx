import React from 'react';
import { Network, Activity, Cpu, Sparkles } from 'lucide-react';

export const VisualTransition: React.FC = () => {
  return (
    <div className="relative py-16 bg-gradient-to-b from-[#070b16] via-[#050811] to-[#080d1a] text-white overflow-hidden border-b border-white/10">
      {/* Subtle background connection grid & illumination */}
      <div className="absolute inset-0 tech-grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          {/* Subtle connection line and nodes with luminous glow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Network className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>TRANSICIÓN OPERATIVA</span>
            </div>
            <span className="w-16 h-px bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>

          <h3
            className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            De la clasificación taxonómica a las características operativas
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Cómo cada enfoque didáctico se traduce en sensores atencionales, analíticas multimodales, andamiaje dialéctico y soberanía ética en el aula virtual.
          </p>

          {/* Connected mini indicators in dark glass */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                <Activity className="w-3.5 h-3.5" />
                <span>Sensado</span>
              </div>
              <span className="text-xs text-slate-400">Estimación atencional y cognitiva</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>Algoritmo</span>
              </div>
              <span className="text-xs text-slate-400">Bifurcación adaptativa dinámica</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dialéctica</span>
              </div>
              <span className="text-xs text-slate-400">Interpelación socrática continua</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                <Network className="w-3.5 h-3.5" />
                <span>Inclusión</span>
              </div>
              <span className="text-xs text-slate-400">Accesibilidad y diseño universal</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-6 h-9 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
              <span className="w-1.5 h-2 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
