import React from 'react';
import {
  Eye,
  Activity,
  GitBranch,
  ShieldCheck,
  Maximize2,
  Gamepad2,
  AlertTriangle,
  Users,
  MessageCircle,
  BrainCircuit,
  Workflow,
  Sparkles,
  FileText,
  PencilRuler,
  HeartHandshake,
  Clock,
  Compass,
  Lightbulb,
  ShieldAlert,
  Check,
} from 'lucide-react';
import { SECTION_2_DATA, ASSET_IMAGES } from '../../data/knowledgeBase';
import { AttributeCategory, AttributeItem } from '../../types';

export const Section2Characteristics: React.FC = () => {
  // Helper for rendering icons accurately
  const getAttributeIcon = (name: string, className: string = 'w-5 h-5') => {
    switch (name) {
      case 'Eye':
        return <Eye className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'GitBranch':
        return <GitBranch className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Maximize2':
        return <Maximize2 className={className} />;
      case 'Gamepad2':
        return <Gamepad2 className={className} />;
      case 'AlertTriangle':
        return <AlertTriangle className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'MessageCircle':
        return <MessageCircle className={className} />;
      case 'BrainCircuit':
        return <BrainCircuit className={className} />;
      case 'Workflow':
        return <Workflow className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      case 'PencilRuler':
        return <PencilRuler className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Clock':
      default:
        return <Clock className={className} />;
    }
  };

  const getTeacherRoleIcon = (name: string, className: string = 'w-5 h-5') => {
    switch (name) {
      case 'Compass':
        return <Compass className={className} />;
      case 'Lightbulb':
        return <Lightbulb className={className} />;
      case 'ShieldAlert':
      default:
        return <ShieldAlert className={className} />;
    }
  };

  return (
    <section id="caracteristicas" className="py-24 bg-[#060a14] text-slate-100 relative overflow-hidden border-b border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-3">
            <span>Sección 2</span>
            <span aria-hidden="true">/</span>
            <span>Atributos Operativos y Mediación Docente</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            {SECTION_2_DATA.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {SECTION_2_DATA.introduction}
          </p>
        </div>

        {/* The Four Blocks with Exact Subtitles (2.1 to 2.4) in Dark Theme */}
        <div className="space-y-16">
          {SECTION_2_DATA.categories.map((cat: AttributeCategory) => (
            <div
              key={cat.id}
              className="bg-slate-900/85 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl"
            >
              <div className="max-w-3xl mb-8">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30 mb-2">
                  <span>BLOQUE {cat.code}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {cat.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Grid of Attribute Visual Units */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.attributes.map((attr: AttributeItem) => (
                  <div
                    key={attr.id}
                    className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-slate-950/60 hover:bg-slate-950/90 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-all">
                          {getAttributeIcon(attr.iconName, 'w-5 h-5')}
                        </div>
                        <span className="text-[11px] font-mono font-medium text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                          {attr.academicKey}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-serif group-hover:text-cyan-300 transition-colors">
                        {attr.title}
                      </h4>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {attr.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Validación pedagógica activa</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* BLOQUE ESPECIAL DESTACADO: DOCENTE EN LA ERA DIGITAL           */}
        {/* "El docente como arquitecto de experiencias de aprendizaje"    */}
        {/* ============================================================== */}
        <div className="mt-20 rounded-3xl bg-slate-950 text-white overflow-hidden border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.2)] relative">
          {/* Subtle tech background lights */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            {/* Left side: Editorial narrative & the 3 roles */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Unboxed category badge */}
                <div className="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  <span>{SECTION_2_DATA.teacherRole.badge}</span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  {SECTION_2_DATA.teacherRole.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {SECTION_2_DATA.teacherRole.lead}
                </p>

                {/* The 3 Fundamental Pillars in illuminated cards */}
                <div className="mt-8 space-y-4">
                  {SECTION_2_DATA.teacherRole.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                          {getTeacherRoleIcon(pillar.iconName, 'w-4 h-4')}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                            {idx + 1}. {pillar.role}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quote / Ethic Statement */}
              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Perspectiva epistemológica y ética docente</span>
                <span className="font-mono text-cyan-300">Inteligencia Artificial con Propósito</span>
              </div>
            </div>

            {/* Right side: High-fidelity realistic image */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10">
              <img
                src={ASSET_IMAGES.teacher}
                alt="Docente universitario profesional actuando como arquitecto de experiencias de aprendizaje frente a pantallas de analítica educativa y diseño pedagógico"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent" />

              {/* Luminous glass card on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 text-xs text-slate-200 shadow-xl">
                <span className="font-bold text-cyan-300 block mb-0.5 drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]">
                  Auditoría Algorítmica y Criterio Pedagógico
                </span>
                <p className="text-slate-300 leading-snug">
                  «Ningún algoritmo puede sustituir la sensibilidad hermenéutica del docente para detectar la chispa del pensamiento autónomo en el aprendiz.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
