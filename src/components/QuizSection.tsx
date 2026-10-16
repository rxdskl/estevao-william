import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/estevaoData';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);
    if (idx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const getScoreVerdict = () => {
    if (score === 5) return { title: "Expert Absolu du Verdão & de la Seleção !", desc: "Parfait ! Vous connaissez le parcours d'Estêvão Willian sur le bout des doigts." };
    if (score >= 3) return { title: "Connaisseur Averti !", desc: "Très bon score ! Vous suivez de près l'ascension du futur prodige de Stamford Bridge." };
    return { title: "Supporter en Apprentissage", desc: "Pas de panique, sa carrière ne fait que commencer. Relisez la biographie pour tout savoir !" };
  };

  return (
    <section id="quiz" className="py-20 border-b border-slate-800 bg-[#0B0F14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Zone Fan & Connaissances</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            LE GRAND QUIZ ESTÊVÃO WILLIAN
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Testez vos connaissances sur la pépite brésilienne : records de précocité, Palmeiras, Seleção et Chelsea FC.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          {!isQuizCompleted ? (
            <div className="space-y-6">
              
              {/* Progress & Stepper */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800 pb-4">
                <span>Question {currentQuestionIndex + 1} sur {QUIZ_QUESTIONS.length}</span>
                <span className="text-emerald-400 font-bold">Score actuel : {score} / {QUIZ_QUESTIONS.length}</span>
              </div>

              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
                {currentQ.question}
              </h3>

              {/* Options List */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctIndex;
                  
                  let optionStyle = "bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-200";
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle = "bg-emerald-950/50 border-emerald-500 text-emerald-200 font-semibold";
                    } else if (isSelected && !isCorrect) {
                      optionStyle = "bg-rose-950/50 border-rose-500 text-rose-200";
                    } else {
                      optionStyle = "bg-slate-950/30 border-slate-800 text-slate-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-center justify-between ${optionStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box on Submit */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 mt-4">
                  <div className="text-xs font-bold font-mono text-emerald-400">
                    EXPLICATION :
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Next Question Button */}
              {isAnswerSubmitted && (
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-md"
                  >
                    <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Question suivante' : 'Voir les résultats'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs text-emerald-400 uppercase">
                  Quiz Terminé
                </div>
                <h3 className="text-3xl font-black text-white font-display">
                  {getScoreVerdict().title}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {getScoreVerdict().desc}
                </p>
              </div>

              <div className="py-4">
                <div className="font-mono text-5xl font-black text-emerald-400 tabular-nums">
                  {score} <span className="text-xl text-slate-500 font-normal">/ {QUIZ_QUESTIONS.length}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">Bonnes réponses enregistrées</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors shadow-md"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Recommencer le Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
