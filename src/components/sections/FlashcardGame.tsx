import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Brain,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  BookOpen,
  Search,
  Check,
  Trophy,
} from 'lucide-react';
import { FLASHCARDS_DATA, Flashcard } from '../../data/flashcardsData';

export const FlashcardGame: React.FC = () => {
  // Mode: 'cards' (Flashcard 3D) | 'quiz' (Desafío de memoria) | 'glossary' (Explorador)
  const [activeMode, setActiveMode] = useState<'cards' | 'quiz' | 'glossary'>('cards');

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');

  // Search query for glossary
  const [searchQuery, setSearchQuery] = useState('');

  // Mastered & Review tracking
  const [masteredIds, setMasteredIds] = useState<Set<number>>(new Set());
  const [reviewIds, setReviewIds] = useState<Set<number>>(new Set());

  // Filtered cards list
  const filteredCards = useMemo(() => {
    return FLASHCARDS_DATA.filter((card) => {
      const matchesCategory =
        selectedCategory === 'todas' || card.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        card.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.keyConcept.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Current card index in active list
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Keep currentIndex bounded
  useEffect(() => {
    if (currentIndex >= filteredCards.length) {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
  }, [filteredCards, selectedCategory]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  // Flip card
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // Next / Prev
  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  }, [filteredCards.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  }, [filteredCards.length]);

  // Mark as Mastered
  const handleMarkMastered = () => {
    if (!currentCard) return;
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.add(currentCard.id);
      return next;
    });
    setReviewIds((prev) => {
      const next = new Set(prev);
      next.delete(currentCard.id);
      return next;
    });
    setTimeout(() => {
      handleNext();
    }, 250);
  };

  // Mark for Review
  const handleMarkReview = () => {
    if (!currentCard) return;
    setReviewIds((prev) => {
      const next = new Set(prev);
      next.add(currentCard.id);
      return next;
    });
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.delete(currentCard.id);
      return next;
    });
    setTimeout(() => {
      handleNext();
    }, 250);
  };

  // Shuffle deck
  const handleShuffle = () => {
    if (filteredCards.length <= 1) return;
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === '1' || e.key.toLowerCase() === 'r') {
        handleMarkReview();
      } else if (e.key === '2' || e.key.toLowerCase() === 'd') {
        handleMarkMastered();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, currentCard]);

  // Stats
  const totalCards = FLASHCARDS_DATA.length;
  const masteredCount = masteredIds.size;
  const reviewCount = reviewIds.size;
  const progressPercent = Math.round((masteredCount / totalCards) * 100);

  // Quiz Mode states
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);

  // Generate 4 randomized options for Quiz mode based on current card
  const quizOptions = useMemo(() => {
    if (!currentCard) return [];
    const correct = currentCard.keyConcept;
    const others = FLASHCARDS_DATA.filter((c) => c.keyConcept !== correct)
      .map((c) => c.keyConcept)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return [correct, ...others].sort(() => 0.5 - Math.random());
  }, [currentCard]);

  const handleQuizSelect = (option: string) => {
    if (isQuizAnswered || !currentCard) return;
    setSelectedQuizOption(option);
    setIsQuizAnswered(true);
    setQuizAnswered((prev) => prev + 1);
    if (option === currentCard.keyConcept) {
      setQuizScore((prev) => prev + 1);
      setMasteredIds((prev) => new Set(prev).add(currentCard.id));
    } else {
      setReviewIds((prev) => new Set(prev).add(currentCard.id));
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedQuizOption(null);
    setIsQuizAnswered(false);
    handleNext();
  };

  return (
    <section id="flashcards" className="py-24 bg-[#050812] text-slate-100 relative overflow-hidden border-b border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span>Laboratorio Interactivo de Aprendizaje</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Juego de Memoria y Flashcards Pedagógicas
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Consolida los 60 conceptos clave de la base de conocimiento: Proyecto MEEBAI, Realidad Virtual segura, modelo MDC de gamificación, arquitectura RAG con NotebookLM y Diseño Universal (DUA).
            </p>
          </div>

          {/* Progress Tracker Widget in Dark Glass */}
          <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.12)] flex items-center gap-6 shrink-0">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Dominio Global</span>
                <span className="font-mono font-bold text-cyan-300 tabular-nums">{progressPercent}%</span>
              </div>
              <div className="w-40 sm:w-48 h-2 bg-slate-950 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 border-l border-white/10 pl-4 text-xs font-mono">
              <div className="text-emerald-400">
                <span className="block text-[10px] uppercase text-slate-400">Dominadas</span>
                <span className="font-bold text-sm tabular-nums">{masteredCount}</span>
              </div>
              <div className="text-amber-400">
                <span className="block text-[10px] uppercase text-slate-400">Repasar</span>
                <span className="font-bold text-sm tabular-nums">{reviewCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Mode Switcher) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-white/10 shadow-lg">
            <button
              onClick={() => {
                setActiveMode('cards');
                setIsFlipped(false);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'cards'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Modo Flashcards 3D</span>
            </button>

            <button
              onClick={() => {
                setActiveMode('quiz');
                setIsQuizAnswered(false);
                setSelectedQuizOption(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'quiz'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Desafío de Memoria (Quiz)</span>
            </button>

            <button
              onClick={() => setActiveMode('glossary')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'glossary'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explorador (60 Preguntas)</span>
            </button>
          </div>

          {/* Category Filter Pills (Interactive Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: 'todas', label: 'Todas (60)' },
              { id: 'adaptativa', label: 'Adaptativa & MEEBAI' },
              { id: 'inmersiva', label: 'Inmersiva & VR' },
              { id: 'conversacional', label: 'Conversacional & LLM' },
              { id: 'dua', label: 'Inclusiva & DUA' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors border ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-950 text-cyan-300 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-900 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* MODE 1: FLASHCARDS 3D CARD FLIP IN DARK THEME                 */}
        {/* ============================================================== */}
        {activeMode === 'cards' && currentCard && (
          <div className="max-w-3xl mx-auto">
            {/* Status Line */}
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4 px-1">
              <span className="font-semibold text-cyan-300">
                Tarjeta {currentIndex + 1} de {filteredCards.length}
              </span>
              <div className="flex items-center gap-3 text-[11px]">
                <span>Espacio: Girar</span>
                <span>·</span>
                <span>← / → : Navegar</span>
              </div>
            </div>

            {/* 3D Flip Card Container with Atmospheric Illumination */}
            <div
              className="relative w-full min-h-[380px] sm:min-h-[420px] cursor-pointer select-none group [perspective:1000px]"
              onClick={handleFlip}
            >
              <div
                className={`relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* ---------------- FRONT SIDE (QUESTION) ---------------- */}
                <div className="absolute inset-0 w-full h-full rounded-3xl p-8 sm:p-10 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between [backface-visibility:hidden]">
                  {/* Top Bar on Front */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/40">
                      {currentCard.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Pregunta #{currentCard.id}
                    </span>
                  </div>

                  {/* Question Center */}
                  <div className="my-auto py-6">
                    <span className="text-xs uppercase tracking-wider font-bold text-cyan-400/80 block mb-2">
                      Pregunta de Conocimiento:
                    </span>
                    <h3
                      className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug"
                      style={{ textWrap: 'balance' }}
                    >
                      {currentCard.question}
                    </h3>
                  </div>

                  {/* Bottom Hint on Front */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-medium">
                      <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                      <span>Haz clic o presiona Espacio para ver la respuesta</span>
                    </div>
                    <span className="text-slate-400 font-mono">Voltear ↻</span>
                  </div>
                </div>

                {/* ---------------- BACK SIDE (ANSWER) ---------------- */}
                <div className="absolute inset-0 w-full h-full rounded-3xl p-8 sm:p-10 bg-slate-950 text-white border border-cyan-400/60 shadow-[0_0_60px_rgba(6,182,212,0.25)] flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  {/* Top Bar on Back */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                      <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                        Concepto: {currentCard.keyConcept}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Respuesta #{currentCard.id}
                    </span>
                  </div>

                  {/* Answer Center */}
                  <div className="my-auto py-4">
                    <span className="text-xs uppercase tracking-wider font-bold text-cyan-400 block mb-2">
                      Respuesta Fundamentada:
                    </span>
                    <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                      {currentCard.answer}
                    </p>
                  </div>

                  {/* Back Actions: Self Evaluation */}
                  <div
                    className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-xs text-slate-400">¿Cómo te fue con este concepto?</span>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleMarkReview}
                        className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-900 hover:bg-amber-950/80 hover:text-amber-300 text-slate-300 text-xs font-medium border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                        title="Presiona '1' o 'R'"
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                        <span>Necesito Repasar</span>
                      </button>

                      <button
                        onClick={handleMarkMastered}
                        className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                        title="Presiona '2' o 'D'"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                        <span>¡Lo Domino!</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & Action Deck */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm"
                aria-label="Tarjeta anterior"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShuffle}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors shadow-sm"
                  title="Barajar tarjetas aleatoriamente"
                  aria-label="Barajar tarjetas"
                >
                  <Shuffle className="w-4 h-4" />
                </button>

                <button
                  onClick={handleFlip}
                  className="px-5 py-2.5 rounded-xl bg-cyan-950 border border-cyan-400/40 hover:bg-cyan-900 text-cyan-300 text-xs font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  <RotateCw className="w-4 h-4 text-cyan-400" />
                  <span>{isFlipped ? 'Ver Pregunta' : 'Girar Tarjeta'}</span>
                </button>
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm"
                aria-label="Siguiente tarjeta"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* MODE 2: DESAFÍO DE MEMORIA / QUIZ CONCEPTUAL IN DARK THEME    */}
        {/* ============================================================== */}
        {activeMode === 'quiz' && currentCard && (
          <div className="max-w-2xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-cyan-500/30 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                {currentCard.categoryLabel}
              </span>
              <div className="text-xs font-mono text-slate-400">
                Puntaje:{' '}
                <span className="font-bold text-cyan-300 tabular-nums">
                  {quizScore} / {quizAnswered}
                </span>
              </div>
            </div>

            <span className="text-xs uppercase font-bold text-cyan-400/80 tracking-wider block mb-2">
              Identifica el Concepto Clave:
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug mb-8">
              {currentCard.question}
            </h3>

            {/* Multiple Choice Options */}
            <div className="space-y-3 mb-8">
              {quizOptions.map((opt, idx) => {
                const isSelected = selectedQuizOption === opt;
                const isCorrect = opt === currentCard.keyConcept;

                let btnStyles = 'bg-slate-950/80 border-white/10 text-slate-200 hover:border-cyan-500/40 hover:bg-slate-950';

                if (isQuizAnswered) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 font-semibold shadow-[0_0_15px_rgba(52,211,153,0.3)]';
                  } else if (isSelected && !isCorrect) {
                    btnStyles = 'bg-red-950/80 border-red-400 text-red-200 line-through';
                  } else {
                    btnStyles = 'bg-slate-950/40 border-white/5 text-slate-500 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isQuizAnswered}
                    onClick={() => handleQuizSelect(opt)}
                    className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${btnStyles}`}
                  >
                    <span>{opt}</span>
                    {isQuizAnswered && isCorrect && (
                      <Check className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Answer Explanation once answered */}
            {isQuizAnswered && (
              <div className="p-4 rounded-xl bg-cyan-950/50 border border-cyan-500/40 mb-6 text-xs text-slate-200 leading-relaxed animate-in fade-in duration-200 shadow-inner">
                <span className="font-bold text-cyan-300 block mb-1">
                  Explicación Académica:
                </span>
                <p>{currentCard.answer}</p>
              </div>
            )}

            {/* Bottom Next Button */}
            <div className="flex justify-end">
              <button
                disabled={!isQuizAnswered}
                onClick={handleNextQuizQuestion}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isQuizAnswered
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <span>Siguiente Desafío</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* MODE 3: GLOSARIO & EXPLORADOR COMPLETO IN DARK THEME           */}
        {/* ============================================================== */}
        {activeMode === 'glossary' && (
          <div className="space-y-6">
            {/* Search Input */}
            <div className="max-w-md">
              <div className="relative">
                <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar por concepto, autor (MEEBAI, Werbach, Kostoudis)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Mostrando {filteredCards.length} de {FLASHCARDS_DATA.length} preguntas disponibles
            </div>

            {/* Cards Grid in Dark Theme */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCards.map((card) => {
                const isMastered = masteredIds.has(card.id);
                const isReview = reviewIds.has(card.id);

                return (
                  <div
                    key={card.id}
                    className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-white/10 shadow-sm hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                          {card.keyConcept}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          #{card.id}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-3 font-serif leading-snug">
                        {card.question}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {card.answer}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">
                        {card.categoryLabel}
                      </span>
                      {isMastered && (
                        <span className="flex items-center gap-1 text-emerald-400 font-medium text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Dominada</span>
                        </span>
                      )}
                      {isReview && (
                        <span className="flex items-center gap-1 text-amber-400 font-medium text-[11px]">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Repasar</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
