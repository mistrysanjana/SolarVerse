import React, { useState, useEffect } from 'react';
import { SolarSystemCanvas } from '../components/3d/SolarSystemCanvas';
import { SpaceApi } from '../services/api';
import { Planet } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Orbit, Compass, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Explore3DPage: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string>('earth');

  useEffect(() => {
    async function load() {
      try {
        const data = await SpaceApi.getPlanets();
        setPlanets(data);
      } catch (e) {
        console.error('Failed to load planets:', e);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: '3D Solar System Explorer' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-cyan text-xs font-mono mb-2">
              <Orbit className="w-4 h-4 animate-spin-slow" />
              <span>ORBITAL SIMULATION & CELESTIAL MECHANICS</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              3D Solar System Explorer
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Interactive real-time 3D simulation powered by Three.js. Tap any planet to focus
            the viewport, examine its characteristics, and discover its cosmic story.
          </p>
        </div>

        {/* Planet Quick Select Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {planets.map((p) => {
            const isSelected = p.slug === selectedSlug;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => setSelectedSlug(p.slug)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-cosmic-blue text-space-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                    : 'bg-space-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: p.colorHex || '#38bdf8' }}
                />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Canvas Container */}
        {planets.length > 0 && (
          <SolarSystemCanvas
            planets={planets}
            selectedPlanetSlug={selectedSlug}
            onSelectPlanet={(slug) => setSelectedSlug(slug)}
          />
        )}

        {/* Scientific Scale & Disclosure Section */}
        <div className="mt-8 p-6 rounded-3xl bg-space-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2 text-cosmic-gold font-mono font-bold text-xs">
              <Info className="w-4 h-4" />
              <span>SCIENTIFIC SCALE & VISUALIZATION DISCLOSURE</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              In real astronomical space, planetary sizes and interplanetary distances differ by
              multiple orders of magnitude: the Sun is over 100 times the diameter of Earth, while
              Neptune is 30 times further away from the Sun than Earth. If rendered to strict linear
              distance scale on a computer screen, all planets would be invisible sub-pixel dots.
              Our <strong className="text-white">Visual Explorer</strong> applies an logarithmic
              scale adjustment so you can simultaneously appreciate relative planet sizes, orbital
              order, and atmospheric characteristics.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <Link
              to="/compare"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-2 transition-colors border border-slate-700"
            >
              <span>Compare Exact Metrics in Charts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
