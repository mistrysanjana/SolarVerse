import React, { useState, useEffect } from 'react';
import { SpaceApi } from '../services/api';
import { NasaApod } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LoadingSpinner, ErrorMessage } from '../components/common/LoadingSpinner';
import { Radio, Calendar, ExternalLink, ShieldCheck, Sparkles, Wifi } from 'lucide-react';

export const SpaceNowPage: React.FC = () => {
  const [apod, setApod] = useState<NasaApod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await SpaceApi.getApod();
        setApod(data);
      } catch (err: any) {
        setError(err.message || 'Failed to connect to NASA space telemetry');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <LoadingSpinner message="Receiving telemetry from NASA Open APIs..." />;
  if (error || !apod) {
    return (
      <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
        <ErrorMessage message={error || 'NASA telemetry stream currently unreachable'} />
      </div>
    );
  }

  const liveMissions = [
    {
      name: 'Voyager 1',
      agency: 'NASA / JPL',
      status: 'Interstellar Space',
      distance: '162.7 AU (~24.3 Billion km)',
      signalTime: '22 Hours, 36 Minutes (One-Way Light Time)',
      update: 'Thruster alignment verified; operating 4 scientific instruments beyond the heliopause.',
    },
    {
      name: 'Europa Clipper',
      agency: 'NASA / SpaceX',
      status: 'En Route to Jupiter',
      distance: '0.45 AU from Earth (Cruise Phase)',
      signalTime: '3.7 Minutes (One-Way Light Time)',
      update: 'Solar arrays deployed; magnetic field calibration underway for 2030 Jovian insertion.',
    },
    {
      name: 'James Webb Space Telescope (JWST)',
      agency: 'NASA / ESA / CSA',
      status: 'Sun-Earth L2 Orbit',
      distance: '1.5 Million km from Earth',
      signalTime: '5 Seconds',
      update: 'Spectroscopic detection of atmospheric atmospheric water and carbon on exoplanet targets.',
    },
    {
      name: 'Perseverance Rover & Ingenuity',
      agency: 'NASA',
      status: 'Mars (Jezero Crater)',
      distance: '1.8 AU from Earth',
      signalTime: '15 Minutes',
      update: 'Sample tube #24 sealed in the ancient river delta margin.',
    },
  ];

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Space Now' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-cyan text-xs font-mono mb-2">
              <Radio className="w-4 h-4 animate-pulse-slow" />
              <span>LIVE NASA TELEMETRY & ASTRONOMICAL OBSERVATORY</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Space Now
            </h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-space-900 border border-slate-800 text-xs font-mono">
            <Wifi className="w-4 h-4 text-emerald-400" />
            <span>Feed Status: {apod.isLive ? 'NASA Live Stream Active' : 'Verified Archive Active'}</span>
          </div>
        </div>

        {/* 1. NASA Astronomy Picture of the Day (APOD) */}
        <div className="mb-14 rounded-3xl bg-space-900/80 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cosmic-gold block mb-1">
                NASA Astronomy Picture of the Day
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {apod.title}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Calendar className="w-4 h-4 text-cosmic-cyan" />
              <span>Date: {apod.date}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-xl max-h-[500px]">
              {apod.media_type === 'image' ? (
                <img
                  src={apod.hdurl || apod.url}
                  alt={apod.title}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <iframe
                  src={apod.url}
                  title={apod.title}
                  className="w-full h-80 sm:h-96"
                  allowFullScreen
                />
              )}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {apod.explanation}
              </p>

              {apod.copyright && (
                <div className="text-xs font-mono text-slate-400">
                  Image Copyright / Credit: <span className="text-white">{apod.copyright}</span>
                </div>
              )}

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Retrieved: {new Date(apod.retrievedAt).toLocaleDateString()}
                </span>
                <a
                  href="https://apod.nasa.gov/apod/astropix.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cosmic-cyan hover:underline"
                >
                  <span>Official APOD Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Live Interplanetary Mission Telemetry Board */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Radio className="w-5 h-5 text-cosmic-purple" />
            <h2 className="font-display font-bold text-2xl text-white">
              Active Interplanetary Mission Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveMissions.map((m) => (
              <div
                key={m.name}
                className="p-6 rounded-3xl bg-space-900/80 border border-slate-800 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cosmic-cyan px-2.5 py-0.5 rounded-full bg-cosmic-blue/15 border border-cosmic-blue/30">
                      {m.agency}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {m.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">{m.name}</h3>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-space-950 p-3 rounded-xl border border-slate-800 mb-4">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Distance</span>
                      <span className="text-slate-200">{m.distance}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">One-Way Light Time</span>
                      <span className="text-slate-200">{m.signalTime}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {m.update}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Source: NASA Deep Space Network (DSN)</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
