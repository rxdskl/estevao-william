import React, { useState } from 'react';
import { Menu, X, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenPlayerCard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlayerCard }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F14]/90 backdrop-blur-md border-b border-slate-800">
      {/* Strict Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 Nav links) — Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 font-display"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"></span>
          <span>ESTÊVÃO WILLIAN</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#biographie" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Biographie
          </a>
          <a href="#statistiques" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Statistiques
          </a>
          <a href="#galerie" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Galerie
          </a>
          <a href="#tactique" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Radar & Dribbles
          </a>
          <a href="#quiz" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Quiz Fan
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPlayerCard}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Fiche Joueur</span>
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenPlayerCard}
            className="p-2 text-xs font-medium text-emerald-400 bg-slate-800/80 rounded-lg hover:bg-slate-700"
            title="Fiche Joueur"
          >
            <UserCheck className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0F151F] px-4 pt-3 pb-5 space-y-3">
          <a
            href="#biographie"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Biographie
          </a>
          <a
            href="#statistiques"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Statistiques de Match
          </a>
          <a
            href="#galerie"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Galerie Photos
          </a>
          <a
            href="#tactique"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Radar & Dribbles
          </a>
          <a
            href="#quiz"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Quiz Fan
          </a>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlayerCard();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors"
            >
              Consulter la Fiche Joueur Complète
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
