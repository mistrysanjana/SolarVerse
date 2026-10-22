import React, { useState, useEffect } from 'react';
import { SpaceApi } from '../../services/api';
import { QuizQuestion } from '../../types';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { LoadingSpinner, ErrorMessage } from '../common/LoadingSpinner';

export const QuizEngine: React.FC = () => {
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Load questions when difficulty changes
  const loadQuestions = async () => {
    setLoading(true);
    setError(null);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);

    try {
      const data = await SpaceApi.getQuizQuestions(difficulty, undefined, 8);
      if (data && data.length > 0) {
        setQuestions(data);
      } else {
        setError('No quiz questions available for this level.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to retrieve quiz questions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [difficulty]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const getRank = (finalScore: number, total: number) => {
    const pct = (finalScore / total) * 100;
    if (pct >= 85) return { title: 'Chief Astrophysicist', desc: 'Flawless mastery of celestial mechanics and planetary science!' };
    if (pct >= 60) return { title: 'Orbital Navigator', desc: 'Strong astronomical knowledge and space flight understanding.' };
    return { title: 'Apprentice Stargazer', desc: 'Great start! Review the planet profiles and try again.' };
  };

  if (loading) return <LoadingSpinner message="Assembling astronomical exam..." />;
  if (error) return <ErrorMessage message={error} onRetry={loadQuestions} />;

  return (
    <div className="bg-space-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
      {/* Header with Difficulty Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cosmic-purple block mb-1">
            Space Science Certification
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Astronomy Mastery Quiz
          </h2>
        </div>

        {/* Difficulty Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-space-950 border border-slate-800">
          {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setDifficulty(lvl)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono capitalize transition-all ${
                difficulty === lvl
                  ? 'bg-cosmic-purple text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Body */}
      {!quizFinished && currentQ && (
        <div>
          {/* Progress Bar & Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span>
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span>Score: {score}</span>
          </div>

          <div className="w-full h-1.5 bg-space-950 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-6 leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options Grid */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'bg-space-950/80 hover:bg-slate-800 border-slate-800 text-slate-200';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
                } else {
                  btnStyle = 'bg-space-950/40 border-slate-850 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base flex items-center justify-between gap-3 transition-all ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Revealed after answer) */}
          {isAnswered && (
            <div className="p-5 rounded-2xl bg-space-950/90 border border-slate-800 mb-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-mono font-semibold text-cosmic-cyan">
                <Sparkles className="w-4 h-4 text-cosmic-gold" />
                <span>SCIENTIFIC EXPLANATION</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                {currentQ.explanation}
              </p>
              <div className="text-[11px] font-mono text-slate-500">
                Reference: {currentQ.scientificReference}
              </div>
            </div>
          )}

          {/* Bottom Action Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-space-950 font-display font-bold text-sm flex items-center gap-2 shadow-lg shadow-cosmic-blue/20 hover:brightness-110 transition-all"
              >
                <span>
                  {currentIndex + 1 === questions.length ? 'View Final Results' : 'Next Question'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Final Score Screen */}
      {quizFinished && (
        <div className="text-center py-6 animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 rounded-full bg-cosmic-gold/20 text-cosmic-gold flex items-center justify-center mx-auto mb-6 border border-cosmic-gold/40 shadow-[0_0_25px_rgba(251,191,36,0.3)]">
            <Trophy className="w-10 h-10" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-cosmic-gold block mb-2">
            Mission Debrief Complete
          </span>

          <h3 className="font-display font-black text-3xl sm:text-4xl text-white mb-2">
            {getRank(score, questions.length).title}
          </h3>

          <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
            {getRank(score, questions.length).desc}
          </p>

          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-space-950 border border-slate-800 text-center mb-8">
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">FINAL SCORE</span>
              <span className="text-3xl font-display font-bold text-cosmic-cyan">
                {score} / {questions.length}
              </span>
            </div>
            <div className="w-px h-10 bg-slate-800" />
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">ACCURACY</span>
              <span className="text-3xl font-display font-bold text-cosmic-purple">
                {Math.round((score / questions.length) * 100)}%
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={loadQuestions}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cosmic-blue hover:bg-cosmic-blue/90 text-space-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cosmic-blue/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Quiz</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const nextDiff =
                  difficulty === 'beginner'
                    ? 'intermediate'
                    : difficulty === 'intermediate'
                    ? 'advanced'
                    : 'beginner';
                setDifficulty(nextDiff);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
            >
              <span>Try {difficulty === 'beginner' ? 'Intermediate' : 'Advanced'} Level</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
