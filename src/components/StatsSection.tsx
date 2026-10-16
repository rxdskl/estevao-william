import React, { useState, useMemo } from 'react';
import { MATCH_STATS, COMPARISONS_AT_17, SEASON_TOTALS_2024 } from '../data/estevaoData';
import { MatchStat } from '../types';
import { Search, ChevronDown, ChevronUp, Star, Flame, Trophy, TrendingUp, Info } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<string>('Tous');
  const [selectedResult, setSelectedResult] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedMatchId, setExpandedMatchId] = useState<string | null>('m-04'); // Default open Juventude record match

  const competitions = ['Tous', 'Brasileirão', 'Copa Libertadores', 'Seleção', 'Paulistão'];
  const results = ['Tous', 'win', 'draw', 'loss'];

  // Filter logic
  const filteredMatches = useMemo(() => {
    return MATCH_STATS.filter(m => {
      const matchComp = selectedComp === 'Tous' || m.competition === selectedComp;
      const matchRes = selectedResult === 'Tous' || m.result === selectedResult;
      const matchQuery = searchQuery.trim() === '' || 
        m.opponent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.notes.toLowerCase().includes(searchQuery.toLowerCase());
      return matchComp && matchRes && matchQuery;
    });
  }, [selectedComp, selectedResult, searchQuery]);

  // Dynamic KPIs calculated from filtered matches
  const statsKPIs = useMemo(() => {
    const total = filteredMatches.length;
    if (total === 0) return { matches: 0, goals: 0, assists: 0, dribbles: 0, avgRating: '0.0', minutes: 0 };
    
    const goals = filteredMatches.reduce((acc, m) => acc + m.goals, 0);
    const assists = filteredMatches.reduce((acc, m) => acc + m.assists, 0);
    const dribbles = filteredMatches.reduce((acc, m) => acc + m.dribbles.completed, 0);
    const minutes = filteredMatches.reduce((acc, m) => acc + m.minutes, 0);
    const avgRating = (filteredMatches.reduce((acc, m) => acc + m.rating, 0) / total).toFixed(1);

    return { matches: total, goals, assists, dribbles, avgRating, minutes };
  }, [filteredMatches]);

  const toggleExpand = (id: string) => {
    setExpandedMatchId(expandedMatchId === id ? null : id);
  };

  const getResultBadge = (result: 'win' | 'draw' | 'loss') => {
    switch (result) {
      case 'win':
        return <span className="text-emerald-400 font-bold font-mono">V</span>;
      case 'draw':
        return <span className="text-slate-400 font-bold font-mono">N</span>;
      case 'loss':
        return <span className="text-rose-400 font-bold font-mono">D</span>;
    }
  };

  return (
    <section id="statistiques" className="py-20 border-b border-slate-800 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            <span>Données & Performances</span>
            <span aria-hidden="true">·</span>
            <span>Feuilles de Match Officielles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            STATISTIQUES DE MATCH
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Toutes les performances de match d'Estêvão Willian analysées : buts, passes décisives, 
            dribbles réussis, notes et impact décisif.
          </p>
        </div>

        {/* Global Season Highlight Card */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-900/50 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                <Trophy className="w-4 h-4" />
                <span>Bilan Cumulé de la Saison 2024 · SE Palmeiras</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Le Joueur U-18 le Plus Décisif de l'Histoire du Championnat
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                À 17 ans, Estêvão Willian a bouclé la saison avec 18 buts et 10 passes décisives toutes compétitions confondues, 
                dont 20 actions décisives (12 buts, 8 passes) rien qu'en Série A brésilienne.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 shrink-0">
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400">Matchs Joués</div>
                <div className="font-mono text-2xl font-black text-white tabular-nums">{SEASON_TOTALS_2024.matches}</div>
              </div>
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400">Buts Marqués</div>
                <div className="font-mono text-2xl font-black text-emerald-400 tabular-nums">{SEASON_TOTALS_2024.goals}</div>
              </div>
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400">Passes Décisives</div>
                <div className="font-mono text-2xl font-black text-emerald-400 tabular-nums">{SEASON_TOTALS_2024.assists}</div>
              </div>
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400">Dribbles Réussis</div>
                <div className="font-mono text-2xl font-black text-white tabular-nums">{SEASON_TOTALS_2024.dribblesCompleted}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar (Interactive Segmented Buttons) */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Competition Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {competitions.map(comp => (
                <button
                  key={comp}
                  onClick={() => setSelectedComp(comp)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedComp === comp
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {comp}
                </button>
              ))}
            </div>

            {/* Search Bar for Opponents */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un adversaire..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 text-xs text-white pl-9 pr-3 py-2 rounded-lg focus:outline-none focus:border-emerald-500 placeholder:text-slate-600"
              />
            </div>

          </div>

          {/* Results Filter & Result Counter */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Filtrer par résultat :</span>
              {results.map(res => (
                <button
                  key={res}
                  onClick={() => setSelectedResult(res)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                    selectedResult === res
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {res === 'Tous' ? 'Tous' : res === 'win' ? 'Victoires' : res === 'draw' ? 'Nuls' : 'Défaites'}
                </button>
              ))}
            </div>

            <div className="font-mono text-slate-500 text-[11px]">
              Affichage de <span className="text-emerald-400 font-semibold">{filteredMatches.length}</span> matchs
            </div>
          </div>
        </div>

        {/* Dynamic Aggregated Metric Strip for Filtered Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <div className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-xl">
            <div className="text-[11px] text-slate-500">Matchs filtrés</div>
            <div className="font-mono text-xl font-bold text-white tabular-nums">{statsKPIs.matches}</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-xl">
            <div className="text-[11px] text-slate-500">Buts</div>
            <div className="font-mono text-xl font-bold text-emerald-400 tabular-nums">{statsKPIs.goals}</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-xl">
            <div className="text-[11px] text-slate-500">Passes décisives</div>
            <div className="font-mono text-xl font-bold text-emerald-400 tabular-nums">{statsKPIs.assists}</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-xl">
            <div className="text-[11px] text-slate-500">Dribbles réussis</div>
            <div className="font-mono text-xl font-bold text-white tabular-nums">{statsKPIs.dribbles}</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-xl">
            <div className="text-[11px] text-slate-500">Minutes disputées</div>
            <div className="font-mono text-xl font-bold text-white tabular-nums">{statsKPIs.minutes}'</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-xl">
            <div className="text-[11px] text-slate-500">Note moyenne</div>
            <div className="font-mono text-xl font-bold text-amber-400 tabular-nums flex items-center gap-1">
              <span>{statsKPIs.avgRating}</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
            </div>
          </div>
        </div>

        {/* Interactive Match Log Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-lg mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Compétition</th>
                  <th className="py-3.5 px-4">Adversaire</th>
                  <th className="py-3.5 px-3 text-center">Score</th>
                  <th className="py-3.5 px-3 text-center">Min</th>
                  <th className="py-3.5 px-3 text-center">Buts</th>
                  <th className="py-3.5 px-3 text-center">Passes</th>
                  <th className="py-3.5 px-3 text-center">Dribbles</th>
                  <th className="py-3.5 px-3 text-center">Note</th>
                  <th className="py-3.5 px-4 text-right">Détails</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {filteredMatches.length > 0 ? (
                  filteredMatches.map(match => {
                    const isExpanded = expandedMatchId === match.id;
                    return (
                      <React.Fragment key={match.id}>
                        <tr 
                          onClick={() => toggleExpand(match.id)}
                          className={`hover:bg-slate-800/40 cursor-pointer transition-colors ${
                            isExpanded ? 'bg-slate-800/30' : ''
                          }`}
                        >
                          <td className="py-3 px-4 font-mono text-slate-400 whitespace-nowrap">
                            {match.date}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="font-medium text-slate-200">{match.competition}</span>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white">{match.opponent}</span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                ({match.isHome ? 'Dom.' : 'Ext.'})
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-center font-mono whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[11px]">
                              {getResultBadge(match.result)}
                              <span className="text-slate-200">{match.score}</span>
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-slate-300 tabular-nums">
                            {match.minutes}'
                          </td>
                          <td className="py-3 px-3 text-center font-mono font-bold tabular-nums">
                            {match.goals > 0 ? (
                              <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
                                {match.goals}
                              </span>
                            ) : (
                              <span className="text-slate-600">-</span>
                            )}
                          </td>
                          <td className="py-3 px-3 text-center font-mono font-bold tabular-nums">
                            {match.assists > 0 ? (
                              <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
                                {match.assists}
                              </span>
                            ) : (
                              <span className="text-slate-600">-</span>
                            )}
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-slate-300 tabular-nums whitespace-nowrap">
                            {match.dribbles.completed}/{match.dribbles.attempted}
                          </td>
                          <td className="py-3 px-3 text-center font-mono font-bold tabular-nums">
                            <span className={`px-2 py-0.5 rounded text-[11px] ${
                              match.rating >= 9.0 
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                                : match.rating >= 8.0 
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-300'
                            }`}>
                              {match.rating.toFixed(1)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(match.id);
                              }}
                              className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
                              aria-label="Afficher les détails"
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </td>
                        </tr>

                        {/* Expandable Match Deep-Dive Detail Row */}
                        {isExpanded && (
                          <tr className="bg-slate-950/70 border-t border-b border-slate-800">
                            <td colSpan={10} className="p-4 sm:p-6 space-y-3">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="space-y-1">
                                  {match.specialRecord && (
                                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 font-mono">
                                      <Flame className="w-3.5 h-3.5" />
                                      <span>{match.specialRecord}</span>
                                    </div>
                                  )}
                                  <div className="text-sm font-semibold text-white">
                                    Compte-rendu du match contre {match.opponent}
                                  </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                                  <span>Taux de dribbles : {Math.round((match.dribbles.completed / match.dribbles.attempted) * 100)}%</span>
                                  <span>·</span>
                                  <span>Impact : {match.goals + match.assists} contribution(s)</span>
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                                {match.notes}
                              </p>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={10} className="py-12 text-center text-slate-500">
                      Aucun match ne correspond aux filtres sélectionnés.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Historic Comparison Module: Estêvão at 17 vs Legends at 17 */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-1">
                <span>Analyse Comparative Historique</span>
                <span aria-hidden="true">·</span>
                <span>Série A Brésilienne</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                ESTÊVÃO VS LES PHÉNOMÈNES BRÉSILIENS À 17 ANS
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Comparatif des saisons disputées en Série A brésilienne avant d'atteindre l'âge de 18 ans. 
                Estêvão Willian domine toutes les références historiques modernes.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Source : Transfermarkt & CBF Records
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPARISONS_AT_17.map((player, idx) => {
              const isEstevao = player.name === "Estêvão Willian";
              return (
                <div
                  key={player.name}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isEstevao
                      ? 'bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 border-emerald-500/50 shadow-xl'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={isEstevao ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        #{idx + 1} U-18
                      </span>
                      <span className="text-slate-500 text-[11px]">{player.year}</span>
                    </div>

                    <div>
                      <h4 className={`text-base font-bold ${isEstevao ? 'text-white' : 'text-slate-200'}`}>
                        {player.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{player.clubAt17}</p>
                    </div>

                    <div className="py-2 border-y border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">G+A Total</span>
                        <span className={`font-mono font-black text-lg tabular-nums ${isEstevao ? 'text-emerald-400' : 'text-white'}`}>
                          {player.goalContributions}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>Buts / Passes</span>
                        <span className="font-mono text-slate-300">{player.goals} B / {player.assists} P</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>Min. par contribution</span>
                        <span className="font-mono text-slate-300">{player.minsPerContribution} min</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <span className={`text-[11px] leading-tight block ${isEstevao ? 'text-emerald-300 font-medium' : 'text-slate-400'}`}>
                      {player.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
            <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Note statistique :</strong> Avec 20 contributions de buts directes (12 buts et 8 passes) en Série A 2024, 
              Estêvão Willian est le premier joueur de l'histoire du football brésilien à franchir le cap des 18 G+A avant ses 18 ans, 
              dépassant la légende Neymar Jr dont le record de 16 G+A tenait depuis 2009.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
