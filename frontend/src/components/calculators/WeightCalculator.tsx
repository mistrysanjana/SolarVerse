import React, { useState } from 'react';
import { Scale, Info, Sparkles } from 'lucide-react';
import { calculatePlanetaryWeight, PlanetaryWeightResult } from '../../utils/converters';
import { usePreferences } from '../../context/PreferencesContext';

export const WeightCalculator: React.FC = () => {
  const { unit } = usePreferences();
  const [weight, setWeight] = useState<number>(70); // 70 kg or 150 lbs
  const activeUnit = unit === 'metric' ? 'kg' : 'lbs';

  const results: PlanetaryWeightResult[] = calculatePlanetaryWeight(weight, unit);

  return (
    <div className="bg-space-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-2xl bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/30">
          <Scale className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl text-white">
            Planetary Weight Comparison Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Estimate how much force gravity exerts on your body across the Sun, planets, and moons.
          </p>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-space-950/80 p-5 rounded-2xl border border-slate-800 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <label htmlFor="earthWeightInput" className="text-sm font-medium text-slate-200">
            Your Weight on Earth ({activeUnit}):
          </label>
          <div className="flex items-center gap-3">
            <input
              id="earthWeightInput"
              type="number"
              min="10"
              max="300"
              value={weight}
              onChange={(e) => setWeight(Math.max(1, Math.min(500, Number(e.target.value))))}
              className="w-28 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-center font-bold focus:outline-none focus:border-cosmic-purple"
            />
            <span className="text-xs text-slate-400 font-mono">{activeUnit}</span>
          </div>
        </div>

        <input
          type="range"
          min="30"
          max="200"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full accent-cosmic-purple cursor-pointer"
        />
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {results.map((res) => (
          <div
            key={res.planetSlug}
            className="p-4 rounded-2xl bg-space-950/70 border border-slate-800/90 hover:border-cosmic-purple/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-display font-bold text-white text-base">
                  {res.planetName}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {res.gravityRelative}g
                </span>
              </div>
              <div className="text-2xl font-display font-black text-cosmic-purple mb-1">
                {res.calculatedWeight}{' '}
                <span className="text-xs font-normal text-slate-400">{activeUnit}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-800/80 leading-relaxed">
              {res.description}
            </p>
          </div>
        ))}
      </div>

      {/* Physics Distinction: Mass vs Weight */}
      <div className="p-4 rounded-xl bg-space-950/90 border border-slate-800 text-xs text-slate-400 font-mono flex items-start gap-3">
        <Info className="w-4 h-4 text-cosmic-cyan flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-cosmic-cyan font-semibold block mb-0.5">
            Physical Principle: Mass vs Weight
          </span>
          Your mass (the quantity of matter in your body, measured in kilograms) remains completely
          constant everywhere in the universe. Weight, however, is a measurement of the downward
          gravitational force ($W = m \cdot g$) exerted on that mass by the planetary body beneath
          your feet.
        </div>
      </div>
    </div>
  );
};
