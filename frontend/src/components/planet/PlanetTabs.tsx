import React, { useState } from 'react';
import { Planet } from '../../types';
import {
  Globe2,
  Wind,
  Orbit,
  Moon,
  Rocket,
  Scale,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Compass,
  AlertCircle,
  HelpCircle,
  Layers,
} from 'lucide-react';
import { AtmosphereChart } from './AtmosphereChart';
import { InternalStructureDiagram } from './InternalStructureDiagram';
import { EarthComparisonVisual } from './EarthComparisonVisual';
import { PlanetFaqAccordion } from './PlanetFaqAccordion';

interface PlanetTabsProps {
  planet: Planet;
}

export const PlanetTabs: React.FC<PlanetTabsProps> = ({ planet }) => {
  const [activeTab, setActiveTab] = useState<
    'geology' | 'atmosphere' | 'orbit' | 'moons' | 'exploration' | 'comparison'
  >('geology');

  const tabs = [
    { id: 'geology', label: 'Geology & Interior', icon: Layers },
    { id: 'atmosphere', label: 'Atmosphere & Climate', icon: Wind },
    { id: 'orbit', label: 'Orbit & Motion', icon: Orbit },
    { id: 'moons', label: `Moons & Rings (${planet.moonCount})`, icon: Moon },
    { id: 'exploration', label: 'Missions & Astrobiology', icon: Rocket },
    { id: 'comparison', label: 'Earth Comparison & FAQs', icon: Scale },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800 no-scrollbar">
        {tabs.map((tab) => {
          const isCurrent = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                isCurrent
                  ? 'bg-cosmic-blue/20 text-cosmic-cyan border border-cosmic-blue/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'bg-space-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Geology & Interior */}
      {activeTab === 'geology' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-200">
          <div className="space-y-6">
            {/* Overview & Formation History */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Formation & Geological History
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {planet.formationHistory}
              </p>
              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs font-mono uppercase text-cosmic-cyan block mb-1">
                  Discovery & Nomenclature History
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {planet.discoveryHistory}
                </p>
              </div>
            </div>

            {/* Surface Composition & Geology */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Surface Composition & Terrain
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {planet.geologyDescription}
              </p>
              <div className="p-3.5 rounded-xl bg-space-950/80 border border-slate-800 text-xs font-mono text-slate-300">
                <span className="text-cosmic-gold block mb-1 font-semibold">
                  Primary Crust Chemistry
                </span>
                {planet.surfaceComposition}
              </div>
            </div>

            {/* Notable Surface Features */}
            {planet.notableFeatures && planet.notableFeatures.length > 0 && (
              <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Notable Geological Landmarks
                </h3>
                <div className="space-y-3">
                  {planet.notableFeatures.map((f) => (
                    <div
                      key={f.name}
                      className="p-3.5 rounded-xl bg-space-950/70 border border-slate-800"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-display font-bold text-sm text-cosmic-cyan">
                          {f.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {f.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Internal Structure Cross-Section Diagram */}
            <InternalStructureDiagram
              layers={planet.internalStructure}
              magneticField={planet.magneticFieldDescription}
            />

            {/* Mass, Radius & Density Specs */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Mass, Radius & Gravitational Mechanics
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Total Mass</span>
                  <span className="text-slate-200 font-bold">{planet.massKg}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {planet.massEarthRelative}x Earth
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Mean Radius</span>
                  <span className="text-slate-200 font-bold">
                    {planet.meanRadiusKm.toLocaleString()} km
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Diameter: {planet.meanDiameterKm.toLocaleString()} km
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Surface Gravity</span>
                  <span className="text-slate-200 font-bold">{planet.gravityMps2} m/s²</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {planet.gravityEarthRelative}g (Relative)
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Category</span>
                  <span className="text-slate-200 font-bold">{planet.category}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Order #{planet.orderFromSun}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Atmosphere & Climate */}
      {activeTab === 'atmosphere' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-200">
          <div className="space-y-6">
            <AtmosphereChart
              atmosphere={planet.atmosphereComposition}
              pressureBar={planet.surfacePressureBar}
              tempMeasurementContext={planet.tempMeasurementContext}
            />

            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Weather & Atmospheric Phenomena
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {planet.weatherPhenomena}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Thermal Profile */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Thermal Spectrum & Measurement
              </h3>
              <div className="grid grid-cols-3 gap-3 text-center mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                  <span className="text-blue-400 block text-[10px]">Minimum</span>
                  <span className="text-lg font-bold text-white">{planet.minTempC}°C</span>
                </div>
                <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                  <span className="text-cosmic-cyan block text-[10px]">Mean Global</span>
                  <span className="text-lg font-bold text-white">{planet.meanTempC}°C</span>
                </div>
                <div className="p-3 rounded-xl bg-space-950/80 border border-slate-800">
                  <span className="text-amber-400 block text-[10px]">Maximum</span>
                  <span className="text-lg font-bold text-white">{planet.maxTempC}°C</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-space-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-cosmic-gold block mb-1 font-semibold">
                  How Planetary Temperatures Are Measured
                </span>
                Astronomers measure planetary temperatures through space probe thermal emission
                spectrometers, infrared radiometers (e.g. MESSENGER MASCS, Cassini CIRS, Juno MWR),
                radio occultations, and direct in-situ lander meteorology stations.
              </div>
            </div>

            {/* Greenhouse or Exosphere Disclosure */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Atmospheric Dynamics & Pressure
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Atmospheric density determines weather circulation and surface erosion. At{' '}
                {planet.surfacePressureBar} bar, surface conditions differ drastically from
                Earth's 1.013 bar baseline.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Orbit & Motion */}
      {activeTab === 'orbit' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-200">
          <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Orbital Parameters (Heliocentric)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {planet.positionSummary}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Semi-Major Axis</span>
                <span className="text-slate-200 font-bold">{planet.meanDistanceAu} AU</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  {planet.meanDistanceFromSunKm.toLocaleString()} km
                </span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Orbital Velocity</span>
                <span className="text-slate-200 font-bold">{planet.orbitalVelocityKms} km/s</span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Perihelion (Closest)</span>
                <span className="text-slate-200 font-bold">
                  {planet.perihelionKm.toLocaleString()} km
                </span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Aphelion (Furthest)</span>
                <span className="text-slate-200 font-bold">
                  {planet.aphelionKm.toLocaleString()} km
                </span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Orbital Eccentricity</span>
                <span className="text-slate-200 font-bold">{planet.orbitalEccentricity}</span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Orbital Inclination</span>
                <span className="text-slate-200 font-bold">{planet.orbitalInclinationDeg}°</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Rotation, Axial Tilt & Seasons
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {planet.seasonsDescription}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Axial Tilt (Obliquity)</span>
                <span className="text-slate-200 font-bold">{planet.axialTiltDeg}°</span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Rotation Direction</span>
                <span className="text-slate-200 font-bold">{planet.rotationDirection}</span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Sidereal Day (Rotation)</span>
                <span className="text-slate-200 font-bold">{planet.rotationPeriodHours} hours</span>
              </div>
              <div className="p-3 rounded-xl bg-space-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Solar Day (Sun cycle)</span>
                <span className="text-slate-200 font-bold">{planet.dayLengthHours} hours</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-space-950/80 border border-slate-800 text-xs text-slate-300 font-mono">
              <span className="text-cosmic-cyan font-semibold block mb-1">
                Definition: Sidereal Day vs Solar Day
              </span>
              A sidereal day measures one complete 360° spin relative to distant stars. A solar day
              (synodic period) measures the time between consecutive solar noons from the surface,
              factoring in the planet’s orbital displacement around the Sun.
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Moons & Rings */}
      {activeTab === 'moons' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Satellite System ({planet.moonCount} Known Moons)
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  Data verification date: IAU Minor Planet Center & NASA JPL Horizons
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-xl bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/40">
                  {planet.confirmedMoons} Confirmed
                </span>
                {planet.provisionalMoons > 0 && (
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300">
                    {planet.provisionalMoons} Provisional
                  </span>
                )}
              </div>
            </div>

            {planet.moonCount === 0 ? (
              <p className="text-sm text-slate-400 leading-relaxed">
                {planet.name} has no natural satellites. Being so close to the Sun, solar tidal
                forces would destabilize any satellite orbit around the planet over geological
                timescales.
              </p>
            ) : (
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {planet.name} commands an extensive gravitational sphere of influence harboring
                world-sized satellites and captured retrograde irregulars.
              </p>
            )}

            {/* Rings section if present */}
            {planet.hasRings && (
              <div className="mt-6 pt-6 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cosmic-gold block font-semibold mb-2">
                  Planetary Ring System
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {planet.ringSystemDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 5: Exploration & Astrobiology */}
      {activeTab === 'exploration' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-200">
          {/* Exploration History */}
          <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Exploration Missions & History
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {planet.explorationHistory}
            </p>

            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-mono uppercase text-cosmic-cyan block font-semibold mb-2">
                Major Historic Robotic Missions
              </span>
              <div className="flex flex-wrap gap-2">
                {planet.majorMissions.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 rounded-lg bg-space-950 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {m.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Possibility of Life (Scientifically Rigorous) */}
          <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="font-display font-bold text-xl text-white">
                Astrobiology & Possibility of Life
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-space-950/90 border border-slate-800 text-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block font-semibold mb-1">
                Current Scientific Assessment
              </span>
              <p className="text-slate-200 leading-relaxed">
                {planet.lifePossibilityAssessment}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-space-950/90 border border-slate-800 text-xs text-slate-300 font-mono">
              <span className="text-cosmic-gold block font-semibold mb-1">
                Observational Evidence & Distinctions
              </span>
              <p className="leading-relaxed mb-2">{planet.lifePossibilityEvidence}</p>
              <div className="p-2.5 rounded bg-space-900 text-slate-400 text-[11px] leading-relaxed border border-slate-800">
                ⚠️ Strict Scientific Rule: The presence of habitable environmental factors (water,
                energy, organic chemistry) does NOT prove that biological life has ever existed.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Comparison, FAQs & References */}
      {activeTab === 'comparison' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <EarthComparisonVisual
              planetName={planet.name}
              comparison={planet.earthComparison}
            />

            {/* Interesting Facts */}
            <div className="bg-space-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-cosmic-gold" />
                <h3 className="font-display font-bold text-lg text-white">
                  Verified Interesting Facts
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {planet.interestingFacts.map((fact, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-xl bg-space-950/70 border border-slate-800 leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="text-cosmic-cyan font-bold font-mono text-xs mt-0.5">
                      {idx + 1}.
                    </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs Accordion */}
          <PlanetFaqAccordion faqs={planet.faqs} planetName={planet.name} />

          {/* Authoritative Sources & Citations */}
          <div className="p-6 rounded-2xl bg-space-950/90 border border-slate-800 text-xs text-slate-400 font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-white font-semibold block mb-1">
                Authoritative Scientific References
              </span>
              <span>
                Verified against NASA Planetary Data System, NSSDC Planetary Fact Sheet, and IAU
                Nomenclature Archives.
              </span>
            </div>
            <a
              href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cosmic-cyan border border-slate-800 transition-colors"
            >
              <span>NASA Fact Sheet Data</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
