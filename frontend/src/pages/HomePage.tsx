import React, { useState, useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { SolarSystemCanvas } from '../components/3d/SolarSystemCanvas';
import { SolarSystemOverview } from '../components/home/SolarSystemOverview';
import { FeaturedPlanetsGrid } from '../components/home/FeaturedPlanetsGrid';
import { FeaturedDiscoveries } from '../components/home/FeaturedDiscoveries';
import { ExplorationTimeline } from '../components/home/ExplorationTimeline';
import { EducationalCTAs } from '../components/home/EducationalCTAs';
import { GuidedTourModal } from '../components/tour/GuidedTourModal';
import { SpaceApi } from '../services/api';
import { Planet } from '../types';
import { Compass, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    async function loadPlanets() {
      try {
        const data = await SpaceApi.getPlanets();
        setPlanets(data);
      } catch (e) {
        console.error('Failed to load planets for home:', e);
      }
    }
    loadPlanets();
  }, []);

  return (
    <div className="min-h-screen bg-space-950 text-slate-100">
      {/* 1. Hero Section */}
      <Hero />

      {/* Floating Guided Tour Trigger Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 flex justify-center relative z-20">
        <button
          type="button"
          onClick={() => setTourOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/90 hover:bg-space-900 text-cosmic-cyan border border-cosmic-blue/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] text-sm font-semibold transition-all hover:scale-105 active:scale-95"
        >
          <Compass className="w-4 h-4 text-cosmic-gold animate-spin-slow" />
          <span>Launch Guided Cosmic Tour (7 Stations)</span>
          <Sparkles className="w-3.5 h-3.5 text-cosmic-purple" />
        </button>
      </div>

      {/* 2. Interactive Solar System Canvas */}
      <section id="interactive-solar-system" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-cosmic-cyan block mb-2">
            Signature Interactive 3D Experience
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Interactive Solar System Explorer
          </h2>
          <p className="text-slate-400 text-sm">
            Rotate, zoom, and explore orbital motion in real-time. Tap any planet to inspect its
            physical telemetry and access its comprehensive profile.
          </p>
        </div>

        {planets.length > 0 && <SolarSystemCanvas planets={planets} />}
      </section>

      {/* 3. Solar System Overview */}
      <SolarSystemOverview />

      {/* 4. Featured Planets Grid */}
      {planets.length > 0 && <FeaturedPlanetsGrid planets={planets} />}

      {/* 5. Featured Discoveries */}
      <FeaturedDiscoveries />

      {/* 6. Exploration Timeline */}
      <ExplorationTimeline />

      {/* 7. Educational CTAs */}
      <EducationalCTAs />

      {/* Guided Tour Modal */}
      <GuidedTourModal isOpen={tourOpen} onClose={() => setTourOpen(false)} />
    </div>
  );
};
