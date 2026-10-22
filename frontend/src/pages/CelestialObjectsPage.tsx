import React, { useState, useEffect } from 'react';
import { SpaceApi } from '../services/api';
import { CelestialObject } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LoadingSpinner, ErrorMessage } from '../components/common/LoadingSpinner';
import { FavoriteButton } from '../components/common/FavoriteButton';
import {
  Compass,
  Moon,
  Search,
  Info,
  ExternalLink,
  X,
  Sparkles,
  ShieldCheck,
  Disc,
} from 'lucide-react';
import { formatAstronomicalNumber } from '../utils/converters';
import { usePreferences } from '../context/PreferencesContext';

export const CelestialObjectsPage: React.FC = () => {
  const [objects, setObjects] = useState<CelestialObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [category, setCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedObject, setSelectedObject] = useState<CelestialObject | null>(null);

  const { addRecentItem } = usePreferences();

  useEffect(() => {
    async function load() {
      try {
        const data = await SpaceApi.getCelestialObjects();
        setObjects(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load celestial objects');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleInspect = (obj: CelestialObject) => {
    setSelectedObject(obj);
    addRecentItem({
      slug: obj.slug,
      name: obj.name,
      type: 'object',
      url: `/celestial-objects#${obj.slug}`,
    });
  };

  if (loading) return <LoadingSpinner message="Scanning outer satellites and minor planets..." />;
  if (error) return <ErrorMessage message={error} />;

  // Filter
  const filtered = objects.filter((obj) => {
    const matchesCat = category === 'all' || obj.category === category;
    const matchesSearch =
      !searchQuery.trim() ||
      obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Celestial Objects' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-purple text-xs font-mono mb-2">
              <Compass className="w-4 h-4" />
              <span>DWARF PLANETS, MOONS & CIRCUMSTELLAR REGIONS</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Celestial Objects
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Beyond the eight major planets, explore dwarf worlds, subsurface ocean moons,
            asteroids, comets, and the icy frontiers of the Kuiper Belt and Oort Cloud.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 rounded-2xl bg-space-900/80 border border-slate-800 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'All Objects' },
              { id: 'dwarf_planet', label: 'Dwarf Planets' },
              { id: 'moon', label: 'Natural Moons' },
              { id: 'region', label: 'Belts & Regions' },
              { id: 'comet', label: 'Comets' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                  category === cat.id
                    ? 'bg-cosmic-purple text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                    : 'bg-space-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search moons, asteroids..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-space-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-purple font-mono"
            />
          </div>
        </div>

        {/* IAU 2006 Educational Banner if viewing Dwarf Planets */}
        {(category === 'all' || category === 'dwarf_planet') && (
          <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-space-900 via-cosmic-purple/10 to-space-900 border border-cosmic-purple/30 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 text-cosmic-purple font-mono font-bold text-xs mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>THE IAU 2006 DEFINITION: WHY IS PLUTO A DWARF PLANET?</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-3">
              In August 2006, the International Astronomical Union (IAU) voted on Resolution 5A,
              establishing three strict criteria for a celestial body to be considered a major
              planet:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-400 font-mono text-xs pl-2 mb-3">
              <li>It must orbit directly around the Sun.</li>
              <li>
                It must possess sufficient mass for self-gravity to overcome rigid body forces into
                hydrostatic equilibrium (a nearly round sphere).
              </li>
              <li>It must have cleared the neighborhood around its orbit.</li>
            </ol>
            <p className="text-slate-300 text-xs">
              Pluto and Ceres meet criteria 1 and 2, but fail criterion 3 because they share their
              orbital zones with thousands of other Kuiper Belt and Asteroid Belt bodies, hence
              their scientific classification as <strong>dwarf planets</strong>.
            </p>
          </div>
        )}

        {/* Objects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((obj) => (
            <div
              key={obj.slug}
              className="group rounded-2xl bg-space-900/80 border border-slate-800 hover:border-cosmic-purple/50 overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all flex flex-col justify-between"
            >
              <div className="relative h-44 bg-space-950 overflow-hidden">
                <img
                  src={obj.imageUrl}
                  alt={obj.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/40 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-space-950/80 text-cosmic-purple border border-cosmic-purple/30">
                    {obj.category.replace('_', ' ')}
                  </span>
                  <FavoriteButton id={`obj-${obj.slug}`} name={obj.name} />
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cosmic-purple transition-colors">
                    {obj.name}
                  </h3>
                  {obj.parentBody && (
                    <span className="text-xs text-cosmic-cyan font-mono">
                      Host Body: {obj.parentBody}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {obj.overview}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-space-950/70 p-2.5 rounded-xl border border-slate-800 mb-4">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Diameter</span>
                    <span className="text-slate-200">
                      {formatAstronomicalNumber(obj.diameterKm)} km
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Discovered</span>
                    <span className="text-slate-200">{obj.discoveryYear || 'Antiquity'}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleInspect(obj)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-cosmic-purple/20 text-slate-200 hover:text-cosmic-purple font-semibold text-xs border border-slate-700 hover:border-cosmic-purple/40 transition-colors"
                >
                  Inspect Object Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Modal for Inspected Object */}
      {selectedObject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSelectedObject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl bg-space-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedObject(null)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cosmic-purple mb-2">
              <Compass className="w-4 h-4" />
              <span>{selectedObject.category.replace('_', ' ').toUpperCase()} TELEMETRY</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl text-white mb-2">
              {selectedObject.name}
            </h2>

            {selectedObject.parentBody && (
              <span className="text-xs font-mono text-cosmic-cyan block mb-4">
                Orbits: {selectedObject.parentBody}
              </span>
            )}

            <div className="h-48 rounded-2xl overflow-hidden mb-6 border border-slate-800">
              <img
                src={selectedObject.imageUrl}
                alt={selectedObject.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-cosmic-cyan block font-semibold mb-1">
                  Overview & History
                </span>
                <p>{selectedObject.overview}</p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-cosmic-cyan block font-semibold mb-1">
                  Geological Characteristics
                </span>
                <p>{selectedObject.geology}</p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-cosmic-cyan block font-semibold mb-1">
                  Exploration History
                </span>
                <p>{selectedObject.exploration}</p>
              </div>

              {selectedObject.facts && selectedObject.facts.length > 0 && (
                <div className="p-4 rounded-xl bg-space-950 border border-slate-800">
                  <span className="text-xs font-mono uppercase text-cosmic-gold block font-semibold mb-2">
                    Key Observational Facts
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedObject.facts.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cosmic-purple font-mono font-bold">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Discovered by: {selectedObject.discoveredBy || 'Historical'} (
                {selectedObject.discoveryYear || 'Antiquity'})
              </span>
              <button
                type="button"
                onClick={() => setSelectedObject(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
