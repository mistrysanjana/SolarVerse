import React, { useState, useEffect } from 'react';
import { SpaceApi } from '../services/api';
import { Planet } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LoadingSpinner, ErrorMessage } from '../components/common/LoadingSpinner';
import { FeaturedPlanetsGrid } from '../components/home/FeaturedPlanetsGrid';
import { Globe2, ArrowUpDown, Filter, LayoutGrid, List } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { kmToMiles, formatAstronomicalNumber } from '../utils/converters';
import { Link } from 'react-router-dom';

export const PlanetsListPage: React.FC = () => {
  const { unit } = usePreferences();
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'order' | 'diameter' | 'gravity' | 'temp'>('order');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  useEffect(() => {
    async function load() {
      try {
        const data = await SpaceApi.getPlanets();
        setPlanets(data);
      } catch (e: any) {
        setError(e.message || 'Failed to load planets');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <LoadingSpinner message="Querying planetary database..." />;
  if (error) return <ErrorMessage message={error} />;

  // Filter & Sort
  let filtered = [...planets];
  if (categoryFilter !== 'all') {
    filtered = filtered.filter((p) => p.category === categoryFilter);
  }

  filtered.sort((a, b) => {
    if (sortBy === 'order') return a.orderFromSun - b.orderFromSun;
    if (sortBy === 'diameter') return b.meanDiameterKm - a.meanDiameterKm;
    if (sortBy === 'gravity') return b.gravityMps2 - a.gravityMps2;
    if (sortBy === 'temp') return b.meanTempC - a.meanTempC;
    return 0;
  });

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Planets Directory' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-cyan text-xs font-mono mb-2">
              <Globe2 className="w-4 h-4" />
              <span>THE EIGHT MAJOR WORLDS</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              The Eight Planets
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Explore physical dimensions, atmospheres, orbital traits, and robotic mission
            telemetry for every world in our cosmic neighborhood.
          </p>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="p-4 rounded-2xl bg-space-900/80 border border-slate-800 mb-8 flex flex-wrap items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {['all', 'Terrestrial', 'Gas Giant', 'Ice Giant'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  categoryFilter === cat
                    ? 'bg-cosmic-blue/20 text-cosmic-cyan border border-cosmic-blue/40 font-bold'
                    : 'bg-space-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Planets (8)' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-space-950 border border-slate-700 rounded-xl px-2.5 py-1 text-slate-200 focus:outline-none focus:border-cosmic-cyan text-xs font-mono"
              >
                <option value="order">Order from Sun</option>
                <option value="diameter">Diameter (Largest first)</option>
                <option value="gravity">Gravity (Strongest first)</option>
                <option value="temp">Temperature (Hottest first)</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-space-950 border border-slate-800">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg ${
                  viewMode === 'grid' ? 'bg-slate-800 text-cosmic-cyan' : 'text-slate-400'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg ${
                  viewMode === 'table' ? 'bg-slate-800 text-cosmic-cyan' : 'text-slate-400'
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* View Layouts */}
        {viewMode === 'grid' ? (
          <FeaturedPlanetsGrid planets={filtered} />
        ) : (
          <div className="rounded-3xl bg-space-900/80 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-space-950/80 text-xs font-mono uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Planet</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Diameter</th>
                    <th className="px-6 py-4">Distance (AU)</th>
                    <th className="px-6 py-4">Orbit (Year)</th>
                    <th className="px-6 py-4">Moons</th>
                    <th className="px-6 py-4">Mean Temp</th>
                    <th className="px-6 py-4 text-right">Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-mono text-xs">
                  {filtered.map((p) => {
                    const diameter =
                      unit === 'metric'
                        ? `${formatAstronomicalNumber(p.meanDiameterKm)} km`
                        : `${formatAstronomicalNumber(kmToMiles(p.meanDiameterKm))} mi`;

                    return (
                      <tr key={p.slug} className="hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-sans font-bold text-white flex items-center gap-3">
                          <img
                            src={p.heroImageUrl}
                            alt={p.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span>{p.name}</span>
                        </td>
                        <td className="px-6 py-4 text-slate-400">{p.category}</td>
                        <td className="px-6 py-4 text-slate-200">{diameter}</td>
                        <td className="px-6 py-4 text-cosmic-cyan">{p.meanDistanceAu} AU</td>
                        <td className="px-6 py-4 text-slate-200">{p.orbitalPeriodDays} d</td>
                        <td className="px-6 py-4 text-cosmic-purple">{p.moonCount}</td>
                        <td className="px-6 py-4 text-amber-400">{p.meanTempC}°C</td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/planets/${p.slug}`}
                            className="px-3 py-1.5 rounded-lg bg-cosmic-blue/20 hover:bg-cosmic-blue/30 text-cosmic-cyan transition-colors"
                          >
                            Explore
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
