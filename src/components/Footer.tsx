import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B0F] border-t border-slate-900 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-white font-bold font-display tracking-tight text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-emerald-500 inline-block"></span>
              <span>ESTÊVÃO WILLIAN</span>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              Portail hommage et décryptage analytique dédié au prodige brésilien de Palmeiras, 
              de la Seleção et de Chelsea FC.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#biographie" className="hover:text-emerald-400 transition-colors">Biographie</a>
            <a href="#statistiques" className="hover:text-emerald-400 transition-colors">Statistiques</a>
            <a href="#galerie" className="hover:text-emerald-400 transition-colors">Galerie Photos</a>
            <a href="#tactique" className="hover:text-emerald-400 transition-colors">Radar Tactique</a>
            <a href="#quiz" className="hover:text-emerald-400 transition-colors">Quiz Fan</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs"
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <div>
            © {new Date().getFullYear()} Estêvão Willian Showcase. Projet indépendant à vocation éditoriale et documentaire.
          </div>
          <div className="flex items-center gap-4">
            <span>SE Palmeiras</span>
            <span aria-hidden="true">·</span>
            <span>Seleção Brasileira</span>
            <span aria-hidden="true">·</span>
            <span>Chelsea FC</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
