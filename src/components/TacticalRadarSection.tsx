import React, { useState, useEffect } from 'react';
import { TACTICAL_SKILLS, SIGNATURE_MOVES } from '../data/estevaoData';
import { Play, RotateCcw, Crosshair, Zap, ShieldAlert, Sparkles } from 'lucide-react';

export const TacticalRadarSection: React.FC = () => {
  const [selectedMoveId, setSelectedMoveId] = useState<string>(SIGNATURE_MOVES[0].id);
  const [animationStep, setAnimationStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeMove = SIGNATURE_MOVES.find(m => m.id === selectedMoveId) || SIGNATURE_MOVES[0];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (animationStep < 3) {
        timer = setTimeout(() => {
          setAnimationStep(prev => prev + 1);
        }, 900);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, animationStep]);

  const handlePlayMove = () => {
    setAnimationStep(0);
    setIsPlaying(true);
  };

  const handleResetMove = () => {
    setIsPlaying(false);
    setAnimationStep(0);
  };

  const selectMove = (id: string) => {
    setSelectedMoveId(id);
    setIsPlaying(false);
    setAnimationStep(0);
  };

  return (
    <section id="tactique" className="py-20 border-b border-slate-800 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            <span>Palette Technique & Décryptage</span>
            <span aria-hidden="true">·</span>
            <span>Profil de l'Attaquant Intérieur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            RADAR TACTIQUE & DRIBBLES SIGNATURE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Analyse détaillée des qualités qui font d'Estêvão Willian un cauchemar pour les défenses : 
            centre de gravité ultra-bas, toucher de balle soyeux et lucidité tactique.
          </p>
        </div>

        {/* Top Split: Tactical Radar Bars + System Fit Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Skill Scores & Attributes */}
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Attributs Spécifiques (Notation Scouts)
                </h3>
                <p className="text-xs text-slate-400">Évaluation basée sur les données Wyscout & Série A 2024</p>
              </div>
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
                PROFIL ÉLITE MONDIAL
              </span>
            </div>

            <div className="space-y-4">
              {TACTICAL_SKILLS.map(skill => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">{skill.score} / 100</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tactical Dossier & Position Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Crosshair className="w-4 h-4" />
                <span>Rôle Tactique : Ailier Intérieur Gaucher sur Flanc Droit</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Pourquoi la Comparaison avec Messi est-elle Naturelle ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comme Lionel Messi à ses débuts au Barça ou Arjen Robben, Estêvão évolue en faux pied sur l'aile droite. 
                Ce positionnement lui permet d'ouvrir l'angle de frappe et de passe sur son pied gauche surpuissant.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Prise d'Appui Éclair</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Changement d'angle en moins de 0.2 seconde, sans décélération préalable.
                  </div>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Résistance au Duel</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Utilisation de l'avant-bras et du fessier pour protéger le ballon malgré son jeune âge.
                  </div>
                </div>
              </div>
            </div>

            {/* Chelsea Tactical Fit Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/30 via-slate-900 to-slate-950 border border-blue-900/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Intégration Tactique à Chelsea FC (Stamford Bridge)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sous le système de jeu de position préconisé par Enzo Maresca, les ailiers reçoivent le ballon très haut 
                et très large pour créer des situations d'isolation en 1-contre-1. Estêvão Willian est le profil sur mesure 
                pour dynamiter les blocs bas de Premier League et convertir les phases de fixation en occasions nettes.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Pitch Simulator: Signature Move Playback */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase mb-1">
                Simulateur Tactique sur Pelouse
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                DÉCOUVREZ SES 3 MOUVEMENTS SIGNATURES
              </h3>
            </div>

            {/* Move Selector Segmented Control */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {SIGNATURE_MOVES.map(move => (
                <button
                  key={move.id}
                  onClick={() => selectMove(move.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedMoveId === move.id
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
                  }`}
                >
                  {move.name.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Pitch Canvas Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Tactical Half-Pitch SVG */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] bg-[#112417] rounded-xl border-2 border-emerald-900/60 overflow-hidden shadow-inner flex items-center justify-center p-4">
                
                {/* Grass stripes pattern */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 80px)'
                  }}
                />

                {/* Tactical pitch markings (SVG) */}
                <svg className="absolute inset-0 w-full h-full text-emerald-700/60" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Half pitch line */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.8" />
                  {/* Center circle half */}
                  <path d="M 50,35 A 15,15 0 0,1 50,65" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  {/* Right Penalty Area (Goal at x=100) */}
                  <rect x="84" y="22" width="16" height="56" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  {/* Goal box */}
                  <rect x="94" y="34" width="6" height="32" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  {/* Penalty spot */}
                  <circle cx="89" cy="50" r="0.8" fill="currentColor" />
                  {/* Penalty arc */}
                  <path d="M 84,39 A 10,10 0 0,0 84,61" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  {/* Goal frame */}
                  <rect x="99" y="42" width="1" height="16" fill="white" opacity="0.8" />
                </svg>

                {/* Dynamic Player & Ball Movement Trajectory */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Run Path */}
                  <path
                    d={`M ${activeMove.pitchCoordinates.start.x},${activeMove.pitchCoordinates.start.y} 
                        Q ${activeMove.pitchCoordinates.mid.x},${activeMove.pitchCoordinates.mid.y} 
                          ${activeMove.pitchCoordinates.finish.x},${activeMove.pitchCoordinates.finish.y}`}
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="1.2"
                    strokeDasharray="2,2"
                  />
                  {/* Shot / Pass Path */}
                  <line
                    x1={activeMove.pitchCoordinates.finish.x}
                    y1={activeMove.pitchCoordinates.finish.y}
                    x2={activeMove.pitchCoordinates.target.x}
                    y2={activeMove.pitchCoordinates.target.y}
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                    strokeDasharray={animationStep >= 2 ? "none" : "1,2"}
                  />
                </svg>

                {/* Animated Player Dot */}
                <div
                  className="absolute w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-950 flex items-center justify-center font-mono text-[9px] font-bold text-slate-950 shadow-lg transition-all duration-700 z-10"
                  style={{
                    left: `${
                      animationStep === 0 
                        ? activeMove.pitchCoordinates.start.x 
                        : animationStep === 1 
                        ? activeMove.pitchCoordinates.mid.x 
                        : activeMove.pitchCoordinates.finish.x
                    }%`,
                    top: `${
                      animationStep === 0 
                        ? activeMove.pitchCoordinates.start.y 
                        : animationStep === 1 
                        ? activeMove.pitchCoordinates.mid.y 
                        : activeMove.pitchCoordinates.finish.y
                    }%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  41
                </div>

                {/* Animated Ball Dot */}
                <div
                  className="absolute w-2.5 h-2.5 rounded-full bg-white border border-slate-950 shadow-md transition-all duration-500 z-20"
                  style={{
                    left: `${
                      animationStep < 2
                        ? (animationStep === 0 ? activeMove.pitchCoordinates.start.x + 1 : activeMove.pitchCoordinates.mid.x + 1)
                        : animationStep === 2
                        ? activeMove.pitchCoordinates.finish.x + 1
                        : activeMove.pitchCoordinates.target.x
                    }%`,
                    top: `${
                      animationStep < 2
                        ? (animationStep === 0 ? activeMove.pitchCoordinates.start.y + 1 : activeMove.pitchCoordinates.mid.y + 1)
                        : animationStep === 2
                        ? activeMove.pitchCoordinates.finish.y + 1
                        : activeMove.pitchCoordinates.target.y
                    }%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />

                {/* Defender Target Marker */}
                <div
                  className="absolute w-4 h-4 rounded-full bg-rose-500/80 border border-slate-950 flex items-center justify-center font-mono text-[8px] font-bold text-white opacity-80"
                  style={{
                    left: `${activeMove.pitchCoordinates.mid.x + 3}%`,
                    top: `${activeMove.pitchCoordinates.mid.y - 2}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title="Latéral gauche adverse"
                >
                  DEF
                </div>

                {/* Target / Goal Indicator */}
                <div
                  className="absolute px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-mono text-[9px] font-bold shadow-md"
                  style={{
                    left: `${activeMove.pitchCoordinates.target.x - 4}%`,
                    top: `${activeMove.pitchCoordinates.target.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  BUT / CIBLE
                </div>

                {/* Controls overlay in pitch */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <button
                    onClick={handlePlayMove}
                    disabled={isPlaying}
                    className="px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>{isPlaying ? 'Action en cours...' : "Lancer l'action"}</span>
                  </button>
                  <button
                    onClick={handleResetMove}
                    className="p-1.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    title="Réinitialiser"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tactical Explanations & Step Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  {activeMove.subname}
                </div>
                <h4 className="text-xl font-bold text-white font-display mt-0.5">
                  {activeMove.name}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeMove.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Séquençage Technique :
                </div>
                <div className="text-xs text-slate-300 bg-slate-950/70 p-3 rounded-xl border border-slate-800 font-mono leading-relaxed">
                  {activeMove.howItWorks}
                </div>
              </div>

              <div className="p-3 bg-emerald-950/30 rounded-xl border border-emerald-900/50 text-xs text-emerald-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0 text-emerald-400" />
                <span><strong>Efficacité prouvée :</strong> {activeMove.effectiveness}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
