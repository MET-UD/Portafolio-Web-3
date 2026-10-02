import React, { useState } from 'react';
import { Play, Video, Sparkles, ExternalLink, Volume2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'TpIvHf6DKck';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <section id="video-capsula" className="py-20 bg-[#050813] text-slate-100 relative overflow-hidden border-b border-white/10">
      {/* Background illumination effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Contextual Narrative & Educational Foundations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              <Video className="w-4 h-4 text-cyan-400" />
              <span>Recurso Audiovisual Integrado</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Cápsula Audiovisual: Innovación y Mediación Tecnológica
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              La integración de microcápsulas en video responde de manera directa a los principios del <strong className="text-white font-semibold">Diseño Universal para el Aprendizaje (DUA)</strong> y la andragogía digital: proporciona formatos equivalentes de representación que dinamizan la comprensión conceptual y facilitan el aprendizaje asíncrono en cualquier dispositivo.
            </p>

            {/* Pedagogical Key Points */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">
                    Microaprendizaje y Síntesis Cognitiva
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Formato conciso y vertical orientado al engagement atencional rápido y la transferencia visual de ideas clave.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">
                    Accesibilidad Universal y Multimodalidad
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Compatibilidad con subtítulos, navegación por teclado y controles integrados de reproducción.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct YouTube link */}
            <div className="pt-2">
              <a
                href="https://youtube.com/shorts/TpIvHf6DKck"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span>Abrir recurso directamente en YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Video Player Container */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[380px] rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-slate-950 p-2 sm:p-3 group">
              {/* Outer decorative glow frame */}
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner">
                {!isPlaying ? (
                  /* Video Poster / Interactive Play Cover */
                  <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-slate-950/70 via-slate-900/90 to-slate-950 text-white">
                    {/* Top status */}
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/40">
                        YouTube Short · Video Educativo
                      </span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                    </div>

                    {/* Play Button Center with Pulsing Glow */}
                    <div className="my-auto flex flex-col items-center justify-center text-center z-10">
                      <button
                        onClick={() => setIsPlaying(true)}
                        aria-label="Reproducir video de YouTube"
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="w-8 h-8 fill-slate-950 ml-1" />
                      </button>
                      <span className="mt-4 text-xs font-semibold text-slate-300 tracking-wide uppercase">
                        Haz clic para reproducir
                      </span>
                    </div>

                    {/* Bottom Info */}
                    <div className="z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-[11px]">ID: {videoId}</span>
                      <span className="text-cyan-300 font-medium">Formato 9:16</span>
                    </div>
                  </div>
                ) : (
                  /* YouTube IFrame Embed */
                  <iframe
                    src={embedUrl}
                    title="Video educativo sobre didácticas en entornos virtuales"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
