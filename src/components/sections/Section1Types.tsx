import React, { useState } from 'react';
import { Cpu, Boxes, MessageSquareCode, Layers, CheckCircle, ArrowRight, Table as TableIcon } from 'lucide-react';
import { SECTION_1_DATA } from '../../data/knowledgeBase';
import { DidacticType } from '../../types';

export const Section1Types: React.FC = () => {
  // Helper to map icon string to Lucide component
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Boxes':
        return <Boxes className={className} />;
      case 'MessageSquareCode':
        return <MessageSquareCode className={className} />;
      case 'Layers':
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section id="tipos-didacticas" className="py-24 bg-[#070b16] text-slate-100 relative overflow-hidden border-b border-white/10">
      {/* Background illumination accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-3">
            <span>Sección 1</span>
            <span aria-hidden="true">/</span>
            <span>Taxonomía y Enfoques Didácticos</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            {SECTION_1_DATA.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {SECTION_1_DATA.introduction}
          </p>
        </div>

        {/* The Four Didactic Modules: Luminous Dark Editorial Composition */}
        <div className="space-y-8 mb-20">
          {SECTION_1_DATA.modules.map((mod: DidacticType, index: number) => {
            return (
              <div
                key={mod.id}
                className="relative rounded-2xl border border-white/10 overflow-hidden bg-slate-900/80 backdrop-blur-md shadow-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 group"
              >
                {/* Horizontal Accent Indicator Bar with Luminous Glow */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${mod.colorGradient} shadow-[0_0_15px_rgba(34,211,238,0.5)]`} />

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Number, Icon, Title and Subtitle */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl sm:text-4xl font-extrabold text-cyan-400 tracking-tighter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                          {mod.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:border-cyan-500/50 transition-colors">
                          {renderIcon(mod.iconName, 'w-5 h-5')}
                        </div>
                      </div>

                      <h3
                        className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug"
                        style={{ textWrap: 'balance' }}
                      >
                        {mod.name}
                      </h3>

                      <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                        {mod.subtitle}
                      </p>

                      {/* Pedagogical Purpose highlighted block in dark slate */}
                      <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/30 mt-4 shadow-inner">
                        <span className="text-xs font-semibold text-cyan-300 block mb-1">
                          Propósito Pedagógico Principal:
                        </span>
                        <p className="text-sm text-slate-200 leading-relaxed font-normal">
                          {mod.pedagogicalPurpose}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: In-depth Description and Associated Technologies */}
                    <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                          Fundamento Teórico y Operativo
                        </h4>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                          Tecnologías y Metodologías Asociadas
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {mod.technologies.map((tech, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/50 border border-white/5 text-xs text-slate-300 hover:border-cyan-500/30 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                              <span className="font-medium leading-snug">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 1 Comparative Table in Dark Theme */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-2">
                <TableIcon className="w-4 h-4 text-cyan-400" />
                <span>Matriz Comparativa</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Comparativa de las Vertientes Didácticas
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                Relación funcional entre el núcleo tecnológico, la intencionalidad pedagógica y el foco cognitivo de cada modalidad.
              </p>
            </div>
          </div>

          {/* Desktop Table View - Dark Slate */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900/90 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/80 border-b border-white/10 text-xs font-bold text-slate-200 uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6 w-1/4">
                    Tipo de Didáctica Virtual
                  </th>
                  <th scope="col" className="py-4 px-6 w-5/12">
                    Núcleo Tecnológico / Metodológico
                  </th>
                  <th scope="col" className="py-4 px-6 w-4/12">
                    Propósito Pedagógico Principal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {SECTION_1_DATA.comparisonTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-cyan-950/30 transition-colors"
                  >
                    <td className="py-5 px-6 font-semibold text-white align-top">
                      <div className="flex items-start gap-2">
                        <span className="font-mono text-xs font-bold text-cyan-400 mt-0.5">0{idx + 1}.</span>
                        <span>{row.didacticType}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-300 leading-relaxed align-top">
                      {row.techCore}
                    </td>
                    <td className="py-5 px-6 text-slate-300 leading-relaxed align-top">
                      <p>{row.pedagogicalPurpose}</p>
                      <span className="inline-block mt-2.5 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                        {row.targetFocus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tablet & Mobile Stacked Cards View */}
          <div className="md:hidden space-y-4">
            {SECTION_1_DATA.comparisonTable.map((row, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/10 bg-slate-900 shadow-md space-y-3"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <span className="font-mono text-xs font-bold text-cyan-400">0{idx + 1}</span>
                  <h4 className="font-serif font-bold text-white text-base">
                    {row.didacticType}
                  </h4>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Núcleo Tecnológico / Metodológico:
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {row.techCore}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Propósito Pedagógico Principal:
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {row.pedagogicalPurpose}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 p-2 rounded border border-cyan-500/30">
                  Foco: {row.targetFocus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
