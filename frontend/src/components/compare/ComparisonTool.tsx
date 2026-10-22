import React, { useState, useEffect } from 'react';
import { Planet } from '../../types';
import { SpaceApi } from '../../services/api';
import { usePreferences } from '../../context/PreferencesContext';
import {
  kmToMiles,
  celsiusToFahrenheit,
  formatAstronomicalNumber,
} from '../../utils/converters';
import { Scale, Plus, X, Globe, Thermometer, Gauge, Clock, Orbit, Moon } from 'lucide-react';
import { LoadingSpinner, ErrorMessage } from '../common/LoadingSpinner';

interface ComparisonToolProps {
  initialSlugs?: string[];
}

export const ComparisonTool: React.FC<ComparisonToolProps> = ({
  initialSlugs = ['earth', 'mars'],
}) => {
  const { unit } = usePreferences();
  const [allPlanets, setAllPlanets] = useState<Planet[]>([]);
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(initialSlugs);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const planets = await SpaceApi.getPlanets();
        setAllPlanets(planets);
      } catch (err: any) {
        setError(err.message || 'Failed to load planets for comparison');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const addPlanet = (slug: string) => {
    if (!selectedSlugs.includes(slug) && selectedSlugs.length < 4) {
      setSelectedSlugs([...selectedSlugs, slug]);
    }
  };

  const removePlanet = (slug: string) => {
    if (selectedSlugs.length > 1) {
      setSelectedSlugs(selectedSlugs.filter((s) => s !== slug));
    }
  };

  if (loading) return <LoadingSpinner message="Aligning planetary orbital data..." />;
  if (error) return <ErrorMessage message={error} />;

  const comparedPlanets = selectedSlugs
    .map((slug) => allPlanets.find((p) => p.slug === slug))
    .filter(Boolean) as Planet[];

  // Max values for normalized comparison bars
  const maxDiameter = Math.max(...allPlanets.map((p) => p.meanDiameterKm));
  const maxGravity = Math.max(...allPlanets.map((p) => p.gravityMps2));
  const maxMoons = Math.max(...allPlanets.map((p) => p.moonCount));
  const maxDistance = Math.max(...allPlanets.map((p) => p.meanDistanceAu));

  return (
    <div className="space-y-10">
      {/* Planetary Selector Ribbon */}
      <div className="p-6 rounded-3xl bg-space-900/80 border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Selected Worlds ({comparedPlanets.length}/4)
            </h3>
            <span className="text-xs text-slate-400">
              Select up to four planets to analyze physical and orbital telemetry side-by-side.
            </span>
          </div>

          {/* Quick add dropdown or pills */}
          <div className="flex flex-wrap gap-1.5">
            {allPlanets.map((p) => {
              const isSelected = selectedSlugs.includes(p.slug);
              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => (isSelected ? removePlanet(p.slug) : addPlanet(p.slug))}
                  disabled={!isSelected && selectedSlugs.length >= 4}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-cosmic-cyan text-space-950 font-bold shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                      : 'bg-space-950 text-slate-400 hover:text-white border border-slate-800 disabled:opacity-40'
                  }`}
                >
                  <span>{p.name}</span>
                  {isSelected ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {comparedPlanets.map((p) => {
          const diameter =
            unit === 'metric'
              ? `${formatAstronomicalNumber(p.meanDiameterKm)} km`
              : `${formatAstronomicalNumber(kmToMiles(p.meanDiameterKm))} mi`;

          const temp =
            unit === 'metric'
              ? `${p.meanTempC}°C`
              : `${Math.round(celsiusToFahrenheit(p.meanTempC))}°F`;

          const gravity =
            unit === 'metric' ? `${p.gravityMps2} m/s²` : `${(p.gravityMps2 * 3.28).toFixed(1)} ft/s²`;

          return (
            <div
              key={p.slug}
              className="p-6 rounded-3xl bg-space-900/90 border border-slate-800 shadow-2xl relative flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-space-950 border border-slate-800 text-cosmic-cyan">
                    #{p.orderFromSun} • {p.category}
                  </span>
                  {selectedSlugs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePlanet(p.slug)}
                      className="p-1 rounded-full text-slate-500 hover:text-white hover:bg-slate-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Planet Image & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={p.heroImageUrl}
                    alt={p.name}
                    className="w-14 h-14 rounded-full object-cover shadow-lg border border-slate-700"
                  />
                  <div>
                    <h4 className="font-display font-bold text-2xl text-white">{p.name}</h4>
                    <span className="text-xs text-cosmic-cyan/80 font-mono">
                      {p.earthComparison?.sizeRatio}x Earth size
                    </span>
                  </div>
                </div>

                {/* Metrics Stack */}
                <div className="space-y-4 text-xs font-mono">
                  {/* Diameter */}
                  <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-cosmic-cyan" />
                        <span>Diameter</span>
                      </span>
                      <span className="text-white font-bold">{diameter}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-cosmic-cyan rounded-full"
                        style={{ width: `${(p.meanDiameterKm / maxDiameter) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Surface Gravity */}
                  <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-cosmic-purple" />
                        <span>Gravity</span>
                      </span>
                      <span className="text-white font-bold">{gravity}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-cosmic-purple rounded-full"
                        style={{ width: `${(p.gravityMps2 / maxGravity) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Mean Temperature */}
                  <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                        <span>Mean Temp</span>
                      </span>
                      <span className="text-white font-bold">{temp}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-1">
                      Range: {p.minTempC}°C to {p.maxTempC}°C
                    </span>
                  </div>

                  {/* Distance from Sun */}
                  <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Orbit className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Distance</span>
                      </span>
                      <span className="text-white font-bold">{p.meanDistanceAu} AU</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{ width: `${(p.meanDistanceAu / maxDistance) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Orbital Period */}
                  <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>Year Length</span>
                      </span>
                      <span className="text-white font-bold">
                        {p.orbitalPeriodYears >= 1
                          ? `${p.orbitalPeriodYears} Earth yrs`
                          : `${p.orbitalPeriodDays} Earth days`}
                      </span>
                    </div>
                  </div>

                  {/* Day Length */}
                  <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cosmic-gold" />
                        <span>Solar Day</span>
                      </span>
                      <span className="text-white font-bold">
                        {p.dayLengthHours >= 24
                          ? `${(p.dayLengthHours / 24).toFixed(1)} Earth days`
                          : `${p.dayLengthHours.toFixed(1)} hours`}
                      </span>
                    </div>
                  </div>

                  {/* Known Moons */}
                  <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Moon className="w-3.5 h-3.5 text-slate-300" />
                        <span>Known Moons</span>
                      </span>
                      <span className="text-white font-bold">{p.moonCount}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-slate-300 rounded-full"
                        style={{ width: `${(p.moonCount / maxMoons) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Link to Profile */}
              <a
                href={`/planets/${p.slug}`}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs text-center block transition-colors"
              >
                Inspect {p.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
