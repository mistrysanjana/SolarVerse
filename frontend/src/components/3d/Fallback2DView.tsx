import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, RotateCcw, Eye, EyeOff, ArrowRight, Info, Sparkles } from 'lucide-react';
import { Planet } from '../../types';

interface Fallback2DViewProps {
  planets: Planet[];
  selectedPlanetSlug?: string;
  onSelectPlanet?: (slug: string) => void;
  scaleMode: 'visual' | 'scientific';
  onToggleScaleMode: () => void;
}

export const Fallback2DView: React.FC<Fallback2DViewProps> = ({
  planets,
  selectedPlanetSlug,
  onSelectPlanet,
  scaleMode,
  onToggleScaleMode,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync selected planet with prop
  useEffect(() => {
    if (selectedPlanetSlug) {
      const p = planets.find((item) => item.slug === selectedPlanetSlug);
      if (p) setSelectedPlanet(p);
    }
  }, [selectedPlanetSlug, planets]);

  // Planet display parameters for 2D View
  const visualConfig = [
    { slug: 'mercury', radius: 4, distance: 45, color: '#9ca3af', speed: 4.15 },
    { slug: 'venus', radius: 7, distance: 70, color: '#f59e0b', speed: 1.62 },
    { slug: 'earth', radius: 7.5, distance: 98, color: '#38bdf8', speed: 1.0 },
    { slug: 'mars', radius: 5.5, distance: 130, color: '#ef4444', speed: 0.53 },
    { slug: 'jupiter', radius: 18, distance: 185, color: '#d97706', speed: 0.084 },
    { slug: 'saturn', radius: 15, distance: 245, color: '#fcd34d', speed: 0.034, hasRing: true },
    { slug: 'uranus', radius: 10, distance: 300, color: '#22d3ee', speed: 0.012 },
    { slug: 'neptune', radius: 9.5, distance: 350, color: '#3b82f6', speed: 0.006 },
  ];

  const [angles, setAngles] = useState<number[]>([0.5, 1.8, 3.2, 4.5, 0.2, 2.1, 5.0, 3.8]);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (isPlaying) {
        setAngles((prev) =>
          prev.map((angle, idx) => {
            const spd = visualConfig[idx]?.speed || 1;
            return (angle + dt * spd * speed * 0.4) % (Math.PI * 2);
          })
        );
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, speed]);

  const handlePlanetClick = (slug: string) => {
    const found = planets.find((p) => p.slug === slug);
    if (found) {
      setSelectedPlanet(found);
      onSelectPlanet?.(slug);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] lg:h-[720px] bg-gradient-to-b from-space-950 via-space-900 to-space-950 rounded-3xl border border-slate-800/80 overflow-hidden shadow-2xl flex items-center justify-center select-none"
    >
      {/* Background Starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0,transparent_70%)] pointer-events-none" />

      {/* Floating HUD Controls */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 bg-space-950/85 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl">
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors"
          title={isPlaying ? 'Pause Orbits' : 'Resume Orbits'}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-cosmic-cyan" /> : <Play className="w-4 h-4 text-emerald-400" />}
        </button>

        <button
          type="button"
          onClick={() => setShowOrbits(!showOrbits)}
          className={`p-2 rounded-xl text-xs transition-colors ${
            showOrbits ? 'bg-cosmic-blue/20 text-cosmic-cyan' : 'bg-slate-900 text-slate-500'
          }`}
          title="Toggle Orbit Lines"
        >
          {showOrbits ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={() => setShowLabels(!showLabels)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
            showLabels ? 'bg-cosmic-blue/20 text-cosmic-cyan' : 'bg-slate-900 text-slate-500'
          }`}
        >
          Labels
        </button>

        <button
          type="button"
          onClick={onToggleScaleMode}
          className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-cosmic-gold border border-slate-700/60"
        >
          {scaleMode === 'visual' ? 'Mode: Visual Explorer' : 'Mode: Scientific Scale'}
        </button>
      </div>

      {/* Speed Slider */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-space-950/85 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-800 text-xs font-mono text-slate-400">
        <span>Speed:</span>
        <input
          type="range"
          min="0.2"
          max="3"
          step="0.2"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="w-20 accent-cosmic-cyan cursor-pointer"
        />
        <span>{speed.toFixed(1)}x</span>
      </div>

      {/* SVG Solar System Scene */}
      <svg
        viewBox="-400 -400 800 800"
        className="w-full h-full max-w-[800px] max-h-[800px] transform active:cursor-grabbing cursor-grab"
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="80%" stopColor="#d97706" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Orbit paths */}
        {showOrbits &&
          visualConfig.map((cfg) => (
            <circle
              key={`orbit-${cfg.slug}`}
              cx="0"
              cy="0"
              r={cfg.distance}
              fill="none"
              stroke="rgba(148, 163, 184, 0.15)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          ))}

        {/* Asteroid Belt representation */}
        <circle
          cx="0"
          cy="0"
          r="155"
          fill="none"
          stroke="rgba(245, 158, 11, 0.12)"
          strokeWidth="12"
          strokeDasharray="1 5"
        />

        {/* The Sun */}
        <circle cx="0" cy="0" r="42" fill="url(#sunGlow)" className="animate-pulse-slow" />
        <circle cx="0" cy="0" r="26" fill="#f59e0b" />
        <circle cx="0" cy="0" r="22" fill="#fbbf24" />

        {/* Sun Label */}
        {showLabels && (
          <text
            x="0"
            y="35"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="10"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight="bold"
            pointerEvents="none"
          >
            SUN
          </text>
        )}

        {/* Planets */}
        {visualConfig.map((cfg, idx) => {
          const angle = angles[idx] || 0;
          const x = Math.cos(angle) * cfg.distance;
          const y = Math.sin(angle) * cfg.distance;
          const isSelected = selectedPlanet?.slug === cfg.slug;
          const planetData = planets.find((p) => p.slug === cfg.slug);

          return (
            <g
              key={cfg.slug}
              transform={`translate(${x}, ${y})`}
              className="cursor-pointer group"
              onClick={() => handlePlanetClick(cfg.slug)}
            >
              {/* Selection Ring */}
              {isSelected && (
                <circle
                  cx="0"
                  cy="0"
                  r={cfg.radius + 6}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  className="animate-spin-slow"
                />
              )}

              {/* Saturn's Rings */}
              {cfg.hasRing && (
                <ellipse
                  cx="0"
                  cy="0"
                  rx={cfg.radius * 2.2}
                  ry={cfg.radius * 0.7}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3.5"
                  opacity="0.8"
                  transform="rotate(-25)"
                />
              )}

              {/* Planet Body */}
              <circle
                cx="0"
                cy="0"
                r={cfg.radius}
                fill={cfg.color}
                className="transition-transform group-hover:scale-125"
                filter="drop-shadow(0 0 6px rgba(255,255,255,0.3))"
              />

              {/* Planet Label */}
              {showLabels && (
                <text
                  x="0"
                  y={cfg.radius + 12}
                  textAnchor="middle"
                  fill={isSelected ? '#38bdf8' : '#e2e8f0'}
                  fontSize="9"
                  fontFamily="Inter, sans-serif"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                  className="pointer-events-none drop-shadow"
                >
                  {planetData?.name || cfg.slug.toUpperCase()}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating Planet Inspection HUD Card */}
      {selectedPlanet && (
        <div className="absolute bottom-6 right-6 z-30 w-80 sm:w-88 bg-space-900/95 backdrop-blur-xl border border-cosmic-blue/40 rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cosmic-cyan">
                {selectedPlanet.category} Planet • #{selectedPlanet.orderFromSun} from Sun
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                {selectedPlanet.name}
              </h3>
            </div>
            <div
              className="w-4 h-4 rounded-full mt-1"
              style={{ backgroundColor: selectedPlanet.colorHex || '#38bdf8' }}
            />
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
            {selectedPlanet.tagline}
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-space-950/70 p-2.5 rounded-xl border border-slate-800 mb-4">
            <div>
              <span className="text-slate-500 block text-[10px]">Diameter</span>
              <span className="text-slate-200">
                {selectedPlanet.meanDiameterKm.toLocaleString()} km
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Distance</span>
              <span className="text-slate-200">{selectedPlanet.meanDistanceAu} AU</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Orbit Year</span>
              <span className="text-slate-200">{selectedPlanet.orbitalPeriodDays} d</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Moons</span>
              <span className="text-slate-200">{selectedPlanet.moonCount}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/planets/${selectedPlanet.slug}`}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-space-950 font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-lg shadow-cosmic-blue/20 hover:brightness-110 transition-all"
            >
              <span>Explore Detailed Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setSelectedPlanet(null)}
              className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Scale Mode Scientific Disclosure Pill */}
      <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-2 bg-space-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 font-mono">
        <Info className="w-3.5 h-3.5 text-cosmic-gold" />
        <span>
          {scaleMode === 'visual'
            ? 'Visual Explorer (Orbits & scale optimized for view)'
            : 'Scientific Scale Mode active'}
        </span>
      </div>
    </div>
  );
};
