import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/estevaoData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Share2, Check, Calendar, MapPin, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copiedToast, setCopiedToast] = useState(false);

  const categories = [
    { id: 'all', label: 'Toutes les photos' },
    { id: 'action', label: 'En Action' },
    { id: 'celebration', label: 'Célébrations' },
    { id: 'selecao', label: 'Seleção Brasileira' },
    { id: 'portrait', label: 'Portraits' }
  ];

  const filteredPhotos = GALLERY_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="galerie" className="py-20 border-b border-slate-800 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
              <span>Archives Visuelles</span>
              <span aria-hidden="true">·</span>
              <span>Moments d'Élite & Célébrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              GALERIE PHOTOS HAUTE RÉSOLUTION
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Plongez dans les clichés les plus emblématiques de la carrière d'Estêvão Willian : 
              dribbles sous les projecteurs, communion avec les supporters et première cape internationale.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {filteredPhotos.map((photo, index) => {
            // Bento sizing distribution: alternate prominence
            const isFeatured = index === 0 || index === 2;
            const gridColSpan = isFeatured ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`${gridColSpan} group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer transition-all duration-300 hover:border-emerald-500/50 shadow-lg`}
              >
                <div className={`relative w-full ${isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={photo.imageSrc}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-emerald-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                      {photo.category.toUpperCase()}
                    </span>
                    <button
                      className="p-1.5 rounded-lg bg-slate-950/80 text-white/80 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                      aria-label="Agrandir la photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>{photo.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{photo.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-emerald-300 transition-colors">
                      {photo.title}
                    </h3>

                    {photo.statsHighlight && (
                      <div className="text-xs text-emerald-400/90 font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{photo.statsHighlight}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && lightboxIndex !== null && (
          <div 
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Modal Container */}
            <div 
              className="relative max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={e => e.stopPropagation()}
            >
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/60 text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-emerald-400 font-bold">
                    {lightboxIndex + 1} / {filteredPhotos.length}
                  </span>
                  <span className="text-slate-400 hidden sm:inline">· {activeLightboxItem.title}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
                  >
                    {copiedToast ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedToast ? 'Lien copié !' : 'Partager'}</span>
                  </button>

                  <button
                    onClick={closeLightbox}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Frame with Prev/Next Controls */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[65vh] overflow-hidden">
                <img
                  src={activeLightboxItem.imageSrc}
                  alt={activeLightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />

                {/* Prev Button */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors shadow-lg"
                  aria-label="Photo précédente"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors shadow-lg"
                  aria-label="Photo suivante"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Caption Footer */}
              <div className="p-5 border-t border-slate-800 bg-slate-900/80 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white font-display">
                    {activeLightboxItem.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{activeLightboxItem.date}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{activeLightboxItem.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeLightboxItem.context}
                </p>

                {activeLightboxItem.statsHighlight && (
                  <div className="inline-block pt-1 text-xs text-emerald-400 font-semibold font-mono">
                    ★ {activeLightboxItem.statsHighlight}
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
