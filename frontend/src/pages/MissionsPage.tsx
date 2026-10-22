import React, { useState, useEffect } from 'react';
import { SpaceApi } from '../services/api';
import { Mission } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LoadingSpinner, ErrorMessage } from '../components/common/LoadingSpinner';
import {
  Rocket,
  Calendar,
  ExternalLink,
  Filter,
  CheckCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

export const MissionsPage: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [targetFilter, setTargetFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    async function load() {
      try {
        const data = await SpaceApi.getMissions();
        setMissions(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load missions');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <LoadingSpinner message="Retrieving interplanetary flight logs..." />;
  if (error) return <ErrorMessage message={error} />;

  // Filter
  const filtered = missions.filter((m) => {
    const matchesTarget = targetFilter === 'all' || m.targetPlanet === targetFilter;
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter;
    return matchesTarget && matchesStatus;
  });

  const targets = ['all', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Pluto', 'Deep Space'];

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Missions' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-gold text-xs font-mono mb-2">
              <Rocket className="w-4 h-4" />
              <span>ROBOTIC & CREWED EXPLORATION FLEET</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Space Exploration Missions
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            From the first human footsteps in the Sea of Tranquility to the Voyagers voyaging
            through interstellar space, inspect history’s greatest space exploration milestones.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="p-4 rounded-2xl bg-space-900/80 border border-slate-800 mb-8 flex flex-wrap items-center justify-between gap-4">
          {/* Target Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {targets.map((tgt) => (
              <button
                key={tgt}
                type="button"
                onClick={() => setTargetFilter(tgt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                  targetFilter === tgt
                    ? 'bg-cosmic-gold text-space-950 font-bold shadow-[0_0_12px_rgba(251,191,36,0.4)]'
                    : 'bg-space-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tgt === 'all' ? 'All Targets' : tgt}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-space-950 border border-slate-700 rounded-xl px-3 py-1 text-slate-200 text-xs font-mono"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="En Route">En Route</option>
            </select>
          </div>
        </div>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((m) => (
            <div
              key={m.slug}
              id={m.slug}
              className="p-6 rounded-3xl bg-space-900/80 border border-slate-800 hover:border-cosmic-gold/50 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cosmic-gold px-2.5 py-0.5 rounded-full bg-cosmic-gold/15 border border-cosmic-gold/30">
                      {m.launchYear}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {m.agency} • Target: {m.targetPlanet}
                    </span>
                  </div>

                  {m.status === 'Active' && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Active
                    </span>
                  )}
                  {m.status === 'En Route' && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/30 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> En Route
                    </span>
                  )}
                  {m.status === 'Completed' && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      Completed
                    </span>
                  )}
                </div>

                <div className="h-44 rounded-2xl overflow-hidden mb-4 border border-slate-800">
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2">{m.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {m.description}
                </p>

                {/* Key Discoveries */}
                {m.keyDiscoveries && m.keyDiscoveries.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-space-950/80 border border-slate-800 mb-4">
                    <span className="text-[10px] font-mono uppercase text-cosmic-cyan block font-semibold mb-2">
                      Key Scientific Discoveries
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {m.keyDiscoveries.map((disc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cosmic-gold font-mono">•</span>
                          <span>{disc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Launched: {m.launchDate}
                </span>
                <a
                  href={m.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cosmic-gold hover:underline"
                >
                  <span>Official Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
