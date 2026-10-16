import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon, Flame, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { PLAYER_INFO } from '../data/estevaoData';

interface HeroSectionProps {
  onOpenPlayerCard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPlayerCard }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-8 pb-16 border-b border-slate-800 overflow-hidden bg-gradient-to-b from-[#0B0F14] via-[#0E1520] to-[#0B0F14]">
      {/* Subtle background ambient lighting (no garish neon) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed editorial kicker without pill enclosures */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              <span>Série A Brésilienne</span>
              <span aria-hidden="true">·</span>
              <span>Seleção A</span>
              <span aria-hidden="true">·</span>
              <span>Chelsea FC 2025</span>
            </div>

            {/* Oversized Headline with text-wrap: balance */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display uppercase leading-tight">
                ESTÊVÃO <span className="text-emerald-400">WILLIAN</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 font-display">
                Le phénomène de Franca qui réécrit les records du football mondial
              </p>
            </div>

            {/* Lead Narrative Body */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              À seulement 17 ans, l'ailier droit de Palmeiras a pulvérisé le record historique de précocité 
              établi par Neymar Jr en 2009. Avec son pied gauche supersonique, ses dribbles dévastateurs et 
              une lucidité de vétéran, le futur joyau de Chelsea FC et de la Seleção brésilienne s'impose 
              déjà comme la sensation planétaire de sa génération.
            </p>

            {/* Functional Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#statistiques"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-md"
              >
                <span>Statistiques Détaillées</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#galerie"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-emerald-400" />
                <span>Galerie Photos</span>
              </a>

              <button
                onClick={onOpenPlayerCard}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-400 hover:text-emerald-300 transition-colors"
              >
                <span>Fiche & Records</span>
              </button>
            </div>

            {/* Quick trust / credentials tags (unboxed inline text with separators) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-3 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Recordman U-18 Brasileirão (20 G+A)</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Sélectionné avec le Brésil A à 17 ans</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Accord Chelsea FC à 61,5 M€</span>
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Container at Matching Height */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[1/1] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              
              {!imageError ? (
                <img
                  src={PLAYER_INFO.heroImages.action}
                  alt="Estêvão Willian en action de dribble avec le maillot de Palmeiras"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 text-center">
                  <Flame className="w-16 h-16 text-emerald-400 mb-4" />
                  <span className="text-lg font-bold text-white font-display">Estêvão Willian</span>
                  <span className="text-xs text-slate-400 mt-1">Prodige de Palmeiras & Seleção</span>
                </div>
              )}

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">L'Accélération Dévastatrice</p>
                  <p className="text-slate-400 text-[11px]">Allianz Parque, São Paulo · Saison 2024</p>
                </div>
                <span className="font-mono text-emerald-400 font-bold bg-slate-900/80 px-2 py-1 rounded border border-slate-800 text-[11px]">
                  #41 PALMEIRAS
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Full-Width KPI Strip (Below Hero Split as per Section 2 & 1C) */}
        <div className="mt-14 pt-8 border-t border-slate-800/90 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
              20 <span className="text-emerald-400 text-lg font-normal">G+A</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Record Historique U-18</div>
            <div className="text-[11px] text-slate-500">12 buts & 8 passes en Serie A (bat Neymar)</div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
              45 <span className="text-emerald-400 text-lg font-normal">Matchs</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Apparitions Officielles</div>
            <div className="text-[11px] text-slate-500">Toutes compétitions confondues en 2024</div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
              61,5 <span className="text-emerald-400 text-lg font-normal">M€</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Transfert Chelsea FC</div>
            <div className="text-[11px] text-slate-500">Accord historique conclu à l'été 2024</div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
              74,8<span className="text-emerald-400 text-lg font-normal">%</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Dribbles Réussis</div>
            <div className="text-[11px] text-slate-500">142 éliminations directes en 1-contre-1</div>
          </div>

        </div>

      </div>
    </section>
  );
};
