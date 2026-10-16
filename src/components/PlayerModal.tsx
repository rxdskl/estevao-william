import React, { useEffect } from 'react';
import { PLAYER_INFO } from '../data/estevaoData';
import { X, Award, Shield, FileText, CheckCircle2 } from 'lucide-react';

interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl my-auto text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 font-mono text-sm">
              41
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Fiche Officielle du Joueur
              </h3>
              <p className="text-xs text-slate-400">Sociedade Esportiva Palmeiras & Seleção</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Identity Grid */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Identité & Profil Physique</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[11px]">Nom complet</div>
                <div className="text-white font-medium mt-0.5">{PLAYER_INFO.fullName}</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[11px]">Date de naissance</div>
                <div className="text-white font-medium mt-0.5">{PLAYER_INFO.birthDate} ({PLAYER_INFO.age} ans)</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[11px]">Lieu de naissance</div>
                <div className="text-white font-medium mt-0.5">{PLAYER_INFO.birthPlace}</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[11px]">Taille & Poids</div>
                <div className="text-white font-medium mt-0.5">{PLAYER_INFO.height} · {PLAYER_INFO.weight}</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[11px]">Pied de prédilection</div>
                <div className="text-emerald-400 font-bold mt-0.5">{PLAYER_INFO.preferredFoot}</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[11px]">Poste préférentiel</div>
                <div className="text-white font-medium mt-0.5">{PLAYER_INFO.primaryPosition}</div>
              </div>
            </div>
          </div>

          {/* Transfer & Contractual Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Situation Contractuelle & Transfert</span>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <div className="text-slate-400">Club acquéreur officiel</div>
                  <div className="text-sm font-bold text-white mt-0.5">{PLAYER_INFO.nextClub}</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-slate-400">Indemnité négociée</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">{PLAYER_INFO.transferFee}</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                L'accord signé en juin 2024 stipule qu'Estêvão reste à disposition de Palmeiras jusqu'à l'issue 
                du Mondial des Clubs de la FIFA 2025 à l'été, avant de rejoindre l'effectif professionnel des Blues à Londres avec un bail courant jusqu'en 2033.
              </p>
            </div>
          </div>

          {/* Historical Records Broken */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Records Historiques Majeurs</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Record U-18 du Brasileirão :</strong> 20 G+A en 2024, surclassant Neymar (16 G+A en 2009).</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Précocité Nike :</strong> Plus jeune athlète brésilien sous contrat équipementier de l'histoire à 10 ans.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Copa Libertadores :</strong> 3e plus jeune buteur de l'histoire de la compétition (16 ans et 11 mois).</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Seleção A :</strong> 5e plus jeune joueur capé de l'histoire de l'équipe nationale à 17 ans et 135 jours.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
          >
            Fermer la Fiche
          </button>
        </div>

      </div>
    </div>
  );
};
