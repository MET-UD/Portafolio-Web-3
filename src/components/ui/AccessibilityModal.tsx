import React from 'react';
import { X, Type, Eye, Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  fontSize: 'normal' | 'large' | 'larger';
  setFontSize: (size: 'normal' | 'large' | 'larger') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  reducedMotion,
  setReducedMotion,
}) => {
  if (!isOpen) return null;

  const resetSettings = () => {
    setFontSize('normal');
    setHighContrast(false);
    setReducedMotion(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl shadow-2xl border border-cyan-500/30 p-6 sm:p-8 overflow-hidden text-slate-100">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h2 id="accessibility-modal-title" className="text-lg font-serif font-bold text-white">
                Ajustes de Accesibilidad y Lectura
              </h2>
              <p className="text-xs text-slate-400">
                Compatibilidad con pautas DUA y estándares WCAG 2.2
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal de accesibilidad"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options */}
        <div className="py-6 space-y-6 relative z-10">
          {/* Font Size */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5 flex items-center gap-2">
              <Type className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tamaño de Tipografía</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setFontSize('normal')}
                className={`py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                  fontSize === 'normal'
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-950/70 text-slate-300 border-white/10 hover:bg-slate-800'
                }`}
              >
                <span>Estándar (100%)</span>
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                  fontSize === 'large'
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-950/70 text-slate-300 border-white/10 hover:bg-slate-800'
                }`}
              >
                <span>Mediana (115%)</span>
              </button>
              <button
                onClick={() => setFontSize('larger')}
                className={`py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                  fontSize === 'larger'
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-950/70 text-slate-300 border-white/10 hover:bg-slate-800'
                }`}
              >
                <span>Grande (125%)</span>
              </button>
            </div>
          </div>

          {/* High Contrast Mode */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 bg-slate-950/60">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-cyan-400" />
              <div>
                <span className="text-sm font-bold text-white block">Modo Alto Contraste</span>
                <span className="text-xs text-slate-400">Refuerza el contraste de texto y bordes para baja visión.</span>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={highContrast}
              onClick={() => setHighContrast(!highContrast)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                highContrast ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'bg-slate-700'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  highContrast ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion Mode */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 bg-slate-950/60">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <div>
                <span className="text-sm font-bold text-white block">Reducción de Movimiento</span>
                <span className="text-xs text-slate-400">Desactiva animaciones y transiciones continuas.</span>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={reducedMotion}
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                reducedMotion ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'bg-slate-700'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  reducedMotion ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
          <button
            onClick={resetSettings}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            Aplicar y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
