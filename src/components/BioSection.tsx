import React, { useState } from 'react';
import { BIO_CHAPTERS, QUOTES } from '../data/estevaoData';
import { Calendar, MapPin, CheckCircle2, Quote, BookOpen, ChevronRight, Trophy } from 'lucide-react';

export const BioSection: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(BIO_CHAPTERS[3].id); // Default to explosive 2023-2024 records chapter
  const [showFullRead, setShowFullRead] = useState<boolean>(false);

  const activeChapter = BIO_CHAPTERS.find(c => c.id === activeChapterId) || BIO_CHAPTERS[0];

  return (
    <section id="biographie" className="py-20 border-b border-slate-800 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
              <span>Parcours & Destin</span>
              <span aria-hidden="true">·</span>
              <span>De Franca à Stamford Bridge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              BIOGRAPHIE DÉTAILLÉE
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              L'épopée fascinante d'un génie précoce qui a bousculé la hiérarchie du football sud-américain 
              avant même d'atteindre sa majorité.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFullRead(!showFullRead)}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>{showFullRead ? 'Vue interactive par époque' : 'Mode lecture intégrale'}</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Interactive Era Explorer */}
        {!showFullRead ? (
          <div>
            {/* Interactive Era Segmented Control */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-800 mb-8">
              {BIO_CHAPTERS.map((chapter, index) => {
                const isActive = chapter.id === activeChapterId;
                return (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapterId(chapter.id)}
                    className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                    }`}
                  >
                    <span className="font-mono text-xs opacity-75">{index + 1}.</span>
                    <span>{chapter.period}</span>
                    <span className="hidden sm:inline opacity-70">· {chapter.title.split('&')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Chapter Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Main Narrative Column */}
              <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                
                {/* Chapter Meta */}
                <div className="space-y-2 border-b border-slate-800 pb-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{activeChapter.period}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-700">/</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{activeChapter.location}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {activeChapter.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/90">
                    {activeChapter.subtitle}
                  </p>
                </div>

                {/* Narrative Paragraphs */}
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeChapter.content.map((paragraph, i) => (
                    <p key={i} className="text-justify sm:text-left">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Milestones in active chapter */}
                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Repères & Faits Marquants
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeChapter.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Attributable Quote */}
                {activeChapter.keyQuote && (
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800/90 relative mt-4">
                    <Quote className="w-6 h-6 text-emerald-500/30 absolute top-4 right-4" />
                    <p className="text-xs sm:text-sm italic text-slate-200 mb-2 pr-6">
                      "{activeChapter.keyQuote.text}"
                    </p>
                    <div className="text-[11px] text-slate-400">
                      <span className="font-semibold text-white">{activeChapter.keyQuote.author}</span>
                      <span className="mx-1.5 text-slate-600">·</span>
                      <span>{activeChapter.keyQuote.role}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Sidebar: Era Stats & Career Context */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Era Key Numbers */}
                {activeChapter.keyStats && activeChapter.keyStats.length > 0 && (
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Chiffres Clés de la Période
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {activeChapter.keyStats.map((stat, idx) => (
                        <div key={idx} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                          <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                          <div className="font-mono text-lg font-bold text-emerald-400">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Progression Stepper */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Chronologie des Étapes
                  </h4>
                  <div className="space-y-3">
                    {BIO_CHAPTERS.map((chap, idx) => {
                      const isSelected = chap.id === activeChapterId;
                      return (
                        <button
                          key={chap.id}
                          onClick={() => setActiveChapterId(chap.id)}
                          className={`w-full text-left p-3 rounded-xl transition-colors border flex items-center justify-between ${
                            isSelected
                              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                              : 'bg-slate-950/30 border-slate-800/80 hover:bg-slate-800/40 text-slate-400'
                          }`}
                        >
                          <div>
                            <div className="text-[11px] font-mono opacity-80">{chap.period}</div>
                            <div className="text-xs font-semibold text-slate-200 mt-0.5">{chap.title}</div>
                          </div>
                          <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Legacy & Palmeiras Trophies */}
                <div className="p-5 bg-gradient-to-br from-emerald-950/20 to-slate-900/80 border border-emerald-900/40 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Trophy className="w-4 h-4" />
                    <span>Palmarès en Club & Équipe Nationale</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>Champion du Brésil Série A (2023)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>Champion du Paulistão (2024)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>Vainqueur de la Copinha U-20 (2023)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>Copa do Brasil U-17 (2022, 2023)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>Champion Sud-Américain U-17 avec le Brésil (2023)</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* Mode 2: Continuous Full Biography Read */
          <div className="space-y-12 max-w-4xl mx-auto">
            {BIO_CHAPTERS.map((chap, idx) => (
              <article key={chap.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
                  <span>Chapitre {idx + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span>{chap.period}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">{chap.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  {chap.title}
                </h3>
                <h4 className="text-sm font-semibold text-slate-300">
                  {chap.subtitle}
                </h4>
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {chap.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
                {chap.keyQuote && (
                  <blockquote className="mt-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm italic text-slate-300">
                    "{chap.keyQuote.text}"
                    <cite className="block not-italic text-[11px] text-slate-400 mt-2 font-mono">
                      — {chap.keyQuote.author}, {chap.keyQuote.role}
                    </cite>
                  </blockquote>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Legend Testimonials Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
            Ce que les légendes du football disent d'Estêvão
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUOTES.map((q, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3 flex flex-col justify-between">
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{q.quote}"
                </p>
                <div className="pt-2 border-t border-slate-800/80 text-[11px]">
                  <div className="font-bold text-white">{q.author}</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">{q.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
