import React from 'react';
import { Scale, Globe } from 'lucide-react';

interface EarthComparisonProps {
  planetName: string;
  comparison: {
    sizeRatio: number;
    massRatio: number;
    gravityRatio: number;
    distanceRatio: number;
    yearRatio: number;
  };
}

export const EarthComparisonVisual: React.FC<EarthComparisonProps> = ({
  planetName,
  comparison,
}) => {
  const metrics = [
    { label: 'Physical Diameter', ratio: comparison.sizeRatio, unit: 'x Earth Diameter' },
    { label: 'Mass', ratio: comparison.massRatio, unit: 'x Earth Mass' },
    { label: 'Surface Gravity', ratio: comparison.gravityRatio, unit: 'g (Earth = 1.0g)' },
    { label: 'Distance from Sun', ratio: comparison.distanceRatio, unit: 'AU (Earth = 1.0 AU)' },
    { label: 'Orbital Year', ratio: comparison.yearRatio, unit: 'x Earth Year (365d)' },
  ];

  return (
    <div className="bg-space-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Scale className="w-5 h-5 text-cosmic-gold" />
        <h3 className="font-display font-bold text-lg text-white">
          Comparison with Planet Earth
        </h3>
      </div>

      <div className="space-y-4">
        {metrics.map((m) => {
          // Normalize bar percentage for visualization (logarithmic clamp if > 10)
          const barWidth = Math.min(Math.max(m.ratio * 35, 6), 100);

          return (
            <div key={m.label} className="p-3 rounded-xl bg-space-950/60 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="text-slate-300 font-medium">{m.label}</span>
                <span className="text-cosmic-cyan font-bold">
                  {m.ratio} {m.unit}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cosmic-blue to-cosmic-cyan transition-all duration-500"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
