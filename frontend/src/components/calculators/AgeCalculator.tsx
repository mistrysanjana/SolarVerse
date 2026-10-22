import React, { useState } from 'react';
import { Calendar, Clock, Info, Sparkles } from 'lucide-react';
import { calculatePlanetaryAge, PlanetaryAgeResult } from '../../utils/converters';

export const AgeCalculator: React.FC = () => {
  const [earthAge, setEarthAge] = useState<number>(25);
  const results: PlanetaryAgeResult[] = calculatePlanetaryAge(earthAge);

  return (
    <div className="bg-space-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-2xl bg-cosmic-blue/20 text-cosmic-cyan border border-cosmic-blue/30">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl text-white">
            Planetary Age Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            See how old you would be on other worlds based on their orbital period around the Sun.
          </p>
        </div>
      </div>

      {/* Input Slider & Number Field */}
      <div className="bg-space-950/80 p-5 rounded-2xl border border-slate-800 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <label htmlFor="earthAgeInput" className="text-sm font-medium text-slate-200">
            Your Age on Earth (Years):
          </label>
          <div className="flex items-center gap-3">
            <input
              id="earthAgeInput"
              type="number"
              min="1"
              max="120"
              value={earthAge}
              onChange={(e) => setEarthAge(Math.max(1, Math.min(120, Number(e.target.value))))}
              className="w-24 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-center font-bold focus:outline-none focus:border-cosmic-cyan"
            />
            <span className="text-xs text-slate-400 font-mono">Earth Years</span>
          </div>
        </div>

        <input
          type="range"
          min="1"
          max="100"
          value={earthAge}
          onChange={(e) => setEarthAge(Number(e.target.value))}
          className="w-full accent-cosmic-cyan cursor-pointer"
        />
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {results.map((res) => (
          <div
            key={res.planetSlug}
            className="p-4 rounded-2xl bg-space-950/70 border border-slate-800/90 hover:border-cosmic-blue/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-display font-bold text-white text-base">
                  {res.planetName}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Orbit: {res.orbitalPeriodYears} yr
                </span>
              </div>
              <div className="text-3xl font-display font-extrabold text-cosmic-cyan mb-1">
                {res.ageOnPlanet}{' '}
                <span className="text-xs font-normal text-slate-400">years</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Next Birthday:</span>
              <span className="text-cosmic-gold font-semibold">
                in ~{res.nextBirthdayDays.toLocaleString()} Earth days
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Scientific Explanation Box */}
      <div className="p-4 rounded-xl bg-space-950/90 border border-slate-800 text-xs text-slate-400 font-mono flex items-start gap-3">
        <Info className="w-4 h-4 text-cosmic-gold flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-cosmic-gold font-semibold block mb-0.5">
            Orbital Mechanics (Kepler's Third Law)
          </span>
          A planetary year is the time it takes for a planet to complete one full revolution around
          the Sun. Because orbital speed decreases with distance, planets further out have much
          longer years: Mercury completes an orbit in 88 Earth days (making you over 4x older
          there), while Neptune takes 165 Earth years for a single trip around the Sun!
        </div>
      </div>
    </div>
  );
};
