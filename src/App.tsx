import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { VideoShowcase } from './components/sections/VideoShowcase';
import { Section1Types } from './components/sections/Section1Types';
import { VisualTransition } from './components/sections/VisualTransition';
import { Section2Characteristics } from './components/sections/Section2Characteristics';
import { Section3PracticalExamples } from './components/sections/Section3PracticalExamples';
import { FlashcardGame } from './components/sections/FlashcardGame';
import { FinalReflection } from './components/sections/FinalReflection';
import { Footer } from './components/layout/Footer';
import { AccessibilityModal } from './components/ui/AccessibilityModal';

export default function App() {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Dynamic class assignment based on accessibility preferences
  const fontSizeClass =
    fontSize === 'larger' ? 'text-lg' : fontSize === 'large' ? 'text-base' : 'text-[15px]';

  const contrastClass = highContrast ? 'contrast-125 saturate-110' : '';
  const motionClass = reducedMotion ? '[&_*]:transition-none [&_*]:animation-none' : '';

  return (
    <div className={`min-h-screen bg-[#060911] text-slate-100 ${fontSizeClass} ${contrastClass} ${motionClass} selection:bg-cyan-500/30 selection:text-cyan-200`}>
      {/* Top sticky navigation bar */}
      <Navbar onOpenAccessibility={() => setIsAccessibilityOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="relative">
        {/* HERO: 70% - 90% first viewport with contemporary educational lab */}
        <Hero />

        {/* CÁPSULA AUDIOVISUAL EN VIDEO (YOUTUBE SHORT) */}
        <VideoShowcase />

        {/* SECCIÓN 1: "Tipos de didácticas en entornos virtuales" */}
        <Section1Types />

        {/* TRANSICIÓN VISUAL: De la clasificación taxonómica a las características operativas */}
        <VisualTransition />

        {/* SECCIÓN 2: "Características de los tipos de didácticas" */}
        <Section2Characteristics />

        {/* SECCIÓN 3: "Ejemplos prácticos de los tipos de didácticas aplicados a jóvenes adultos" */}
        <Section3PracticalExamples />

        {/* JUEGO DE MEMORIA / FLASHCARDS PEDAGÓGICAS (60 PREGUNTAS) */}
        <FlashcardGame />

        {/* BLOQUE FINAL: Conclusión y convergencia educativa */}
        <FinalReflection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Accessibility & Reading Modal */}
      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
      />
    </div>
  );
}
