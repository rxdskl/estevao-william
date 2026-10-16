import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BioSection } from './components/BioSection';
import { StatsSection } from './components/StatsSection';
import { GallerySection } from './components/GallerySection';
import { TacticalRadarSection } from './components/TacticalRadarSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';
import { PlayerModal } from './components/PlayerModal';

export default function App() {
  const [playerModalOpen, setPlayerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar onOpenPlayerCard={() => setPlayerModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenPlayerCard={() => setPlayerModalOpen(true)} />

        {/* Detailed Biography Section */}
        <BioSection />

        {/* Match Statistics & Historical Comparison Section */}
        <StatsSection />

        {/* High-Resolution Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Tactical Radar & Signature Dribbles Pitch Simulator */}
        <TacticalRadarSection />

        {/* Interactive Fan Quiz */}
        <QuizSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Player Profile & Contractual Modal */}
      <PlayerModal
        isOpen={playerModalOpen}
        onClose={() => setPlayerModalOpen(false)}
      />
    </div>
  );
}
