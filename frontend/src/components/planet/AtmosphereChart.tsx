import React from 'react';
import { Wind, Gauge, AlertTriangle } from 'lucide-react';

interface AtmosphereChartProps {
  atmosphere: Array<{ gas: string; percentage: number }>;
  pressureBar: number;
  tempMeasurementContext: string;
}

export const AtmosphereChart: React.FC<AtmosphereChartProps> = ({
  atmosphere,
  pressureBar,
  tempMeasurementContext,
}) => {
  const gasColors = [
    '#38bdf8', // sky blue
    '#a855f7', // purple
    '#fbbf24', // amber
    '#34d399', // emerald
    '#f43f5e', // rose
    '#94a3b8', // slate
  ];

  return (
    <div className="bg-space-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 text-cosmic-cyan" />
          <h3 className="font-display font-bold text-lg text-white">Atmospheric Composition</h3>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-space-950 border border-slate-800 text-xs font-mono text-slate-300">
          <Gauge className="w-3.5 h-3.5 text-cosmic-purple" />
          <span>Surface Pressure: {pressureBar} bar</span>
        </div>
      </div>

      {/* Stacked Proportional Bar */}
      {atmosphere && atmosphere.length > 0 ? (
        <>
          <div className="w-full h-5 rounded-full overflow-hidden flex bg-space-950 border border-slate-800 mb-6">
            {atmosphere.map((item, i) => (
              <div
                key={item.gas}
                style={{
                  width: `${Math.max(item.percentage, 1)}%`,
                  backgroundColor: gasColors[i % gasColors.length],
                }}
                title={`${item.gas}: ${item.percentage}%`}
                className="h-full transition-all hover:opacity-80"
              />
            ))}
          </div>

          {/* Gas Legend Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {atmosphere.map((item, i) => (
              <div
                key={item.gas}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-space-950/60 border border-slate-800/80"
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: gasColors[i % gasColors.length] }}
                />
                <div className="overflow-hidden">
                  <span className="text-xs font-medium text-slate-200 block truncate">
                    {item.gas}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="p-4 rounded-xl bg-space-950/60 border border-slate-800 text-sm text-slate-400 mb-4 font-mono">
          Surface-bound ultra-tenuous exosphere; collisions between gas atoms are rare.
        </div>
      )}

      {/* Temperature & Measurement Methodology Note */}
      <div className="p-3.5 rounded-xl bg-space-950/80 border border-slate-800 text-xs text-slate-400 font-mono flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-cosmic-gold flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-cosmic-gold font-semibold block mb-0.5">
            Measurement Context
          </span>
          {tempMeasurementContext}
        </div>
      </div>
    </div>
  );
};
