import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, SlidersHorizontal, BookOpen, Compass, Layers, Sparkles, Brain } from 'lucide-react';

interface NavbarProps {
  onOpenAccessibility: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAccessibility }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'tipos-didacticas', 'caracteristicas', 'ejemplos-practicos', 'flashcards'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Compass },
    { id: 'tipos-didacticas', label: 'Tipos de didácticas', icon: Layers },
    { id: 'caracteristicas', label: 'Características', icon: Sparkles },
    { id: 'ejemplos-practicos', label: 'Ejemplos prácticos', icon: BookOpen },
    { id: 'flashcards', label: 'Flashcards', icon: Brain },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/40 border-b border-cyan-500/20 py-3.5'
          : 'bg-slate-950/75 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark as mandated by top bar contract */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <span className="font-serif font-bold text-white group-hover:text-cyan-300 transition-colors">
              Didácticas en entornos virtuales
            </span>
          </a>

          {/* Zone 2: Clean nav links with smooth luminous indicator */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center gap-1.5 transition-colors relative py-1 ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAccessibility}
              aria-label="Opciones de accesibilidad visual"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium border border-white/10 hover:border-cyan-500/40"
              title="Ajustes de accesibilidad y lectura"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Accesibilidad</span>
            </button>

            <a
              href="#flashcards"
              onClick={(e) => handleNavClick(e, 'flashcards')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg transition-all whitespace-nowrap shadow-[0_0_15px_rgba(34,211,238,0.3)] font-semibold"
            >
              <span>Juego Flashcards</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 border-b border-cyan-500/30 shadow-2xl p-5 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-950/70 text-cyan-300 font-semibold border-l-4 border-cyan-400 shadow-[inset_0_0_15px_rgba(6,182,212,0.2)]'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccessibility();
              }}
              className="w-full py-2.5 px-3 rounded-lg border border-slate-700 text-xs font-medium text-slate-300 flex items-center justify-center gap-2 hover:bg-slate-900"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
              <span>Ajustes de accesibilidad (contraste / tamaño)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
