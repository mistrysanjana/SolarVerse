import React from 'react';
import { Planet } from '../../types';
import { usePreferences } from '../../context/PreferencesContext';
import {
  kmToMiles,
  celsiusToFahrenheit,
  mps2ToFtps2,
  formatAstronomicalNumber,
} from '../../utils/converters';
import { FavoriteButton } from '../common/FavoriteButton';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Globe, Orbit, Thermometer, Gauge, Clock, Calendar } from 'lucide-react';

interface PlanetHeaderProps {
  planet: Planet;
}

export const PlanetHeader: React.FC<PlanetHeaderProps> = ({ planet }) => {
  const { unit, toggleUnit } = usePreferences();

  const diameter =
    unit === 'metric'
      ? `${formatAstronomicalNumber(planet.meanDiameterKm)} km`
      : `${formatAstronomicalNumber(kmToMiles(planet.meanDiameterKm))} mi`;

  const meanTemp =
    unit === 'metric'
      ? `${planet.meanTempC}°C`
      : `${Math.round(celsiusToFahrenheit(planet.meanTempC))}°F`;

  const gravity =
    unit === 'metric'
      ? `${planet.gravityMps2} m/s²`
      : `${(planet.gravityMps2 * 3.28084).toFixed(1)} ft/s²`;

  const distance =
    unit === 'metric'
      ? `${formatAstronomicalNumber(planet.meanDistanceFromSunKm)} km`
      : `${formatAstronomicalNumber(kmToMiles(planet.meanDistanceFromSunKm))} mi`;

  return (
    <div className="relative pt-24 pb-12 overflow-hidden border-b border-slate-800/80">
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-25"
        style={{ backgroundColor: planet.colorHex || '#38bdf8' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs
          items={[
            { label: 'Planets', path: '/planets' },
            { label: planet.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
          {/* Left Text & Key Telemetry */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-cosmic-blue/15 text-cosmic-cyan border border-cosmic-blue/30">
                #{planet.orderFromSun} From Sun • {planet.category} Planet
              </span>
              <FavoriteButton id={planet.slug} name={planet.name} />
              <button
                type="button"
                onClick={toggleUnit}
                className="text-xs font-mono text-slate-400 hover:text-cosmic-gold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
                title="Toggle units"
              >
                Units: {unit.toUpperCase()}
              </button>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white mb-3 tracking-tight">
              {planet.name}
            </h1>

            <p className="text-lg sm:text-xl text-cosmic-cyan/90 font-medium mb-4">
              {planet.tagline}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {planet.overview}
            </p>

            {/* Telemetry Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-space-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                  <Globe className="w-3.5 h-3.5 text-cosmic-cyan" />
                  <span>Diameter</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  {diameter}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {planet.earthComparison?.sizeRatio}x Earth
                </div>
              </div>

              <div className="p-3 rounded-xl bg-space-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mean Temp</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  {meanTemp}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {planet.minTempC}°C to {planet.maxTempC}°C
                </div>
              </div>

              <div className="p-3 rounded-xl bg-space-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                  <Gauge className="w-3.5 h-3.5 text-cosmic-purple" />
                  <span>Surface Gravity</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  {gravity}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {planet.gravityEarthRelative}g (relative)
                </div>
              </div>

              <div className="p-3 rounded-xl bg-space-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                  <Orbit className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Distance</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  {planet.meanDistanceAu} AU
                </div>
                <div className="text-[10px] text-slate-500 font-mono truncate">{distance}</div>
              </div>

              <div className="p-3 rounded-xl bg-space-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                  <Clock className="w-3.5 h-3.5 text-cosmic-gold" />
                  <span>Solar Day</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  {planet.dayLengthHours >= 24
                    ? `${(planet.dayLengthHours / 24).toFixed(1)} Earth days`
                    : `${planet.dayLengthHours.toFixed(1)} hours`}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {planet.rotationDirection}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-space-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Orbital Period</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  {planet.orbitalPeriodYears >= 1
                    ? `${planet.orbitalPeriodYears} Earth yrs`
                    : `${planet.orbitalPeriodDays} Earth days`}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Velocity: {planet.orbitalVelocityKms} km/s
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-88 lg:w-96 aspect-square rounded-full p-2 bg-gradient-to-tr from-space-900 via-slate-800 to-space-900 border border-slate-700/80 shadow-[0_0_60px_rgba(0,0,0,0.8)] flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse-slow pointer-events-none"
                style={{ backgroundColor: planet.colorHex || '#38bdf8' }}
              />
              <img
                src={planet.heroImageUrl}
                alt={planet.name}
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
