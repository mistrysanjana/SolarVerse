import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AgeCalculator } from '../components/calculators/AgeCalculator';
import { WeightCalculator } from '../components/calculators/WeightCalculator';
import { Calculator, Calendar, Scale, ArrowLeftRight, Info } from 'lucide-react';
import { formatAstronomicalNumber } from '../utils/converters';

export const CalculatorsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'age' | 'weight' | 'units'>('age');

  // Interactive Distance & Unit converter state
  const [auValue, setAuValue] = useState<number>(1);

  const kmEquivalent = auValue * 149597870.7;
  const milesEquivalent = auValue * 92955807.3;
  const lightSeconds = (kmEquivalent / 299792.458);
  const lightMinutes = lightSeconds / 60;

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Space Calculators' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-cyan text-xs font-mono mb-2">
              <Calculator className="w-4 h-4" />
              <span>ASTRONOMICAL MATHEMATICS & PHYSICAL COMPUTATIONS</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Space Calculators
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Compute your biological age across other worlds, calculate gravitational force on your
            mass, or convert astronomical distances into light travel time.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-space-900 border border-slate-800 w-fit mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('age')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'age'
                ? 'bg-cosmic-blue text-space-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Planetary Age</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('weight')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'weight'
                ? 'bg-cosmic-purple text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Surface Weight</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('units')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'units'
                ? 'bg-cosmic-gold text-space-950 font-bold shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Distance & Light Time</span>
          </button>
        </div>

        {/* Active Tool View */}
        {activeTab === 'age' && <AgeCalculator />}
        {activeTab === 'weight' && <WeightCalculator />}
        {activeTab === 'units' && (
          <div className="bg-space-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-cosmic-gold/20 text-cosmic-gold border border-cosmic-gold/30">
                <ArrowLeftRight className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Astronomical Distance & Light Travel Converter
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Convert Astronomical Units (AU) into kilometers, miles, and light travel time.
                </p>
              </div>
            </div>

            <div className="bg-space-950/80 p-5 rounded-2xl border border-slate-800 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <label htmlFor="distanceAuInput" className="text-sm font-medium text-slate-200">
                  Distance in Astronomical Units (AU):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="distanceAuInput"
                    type="number"
                    min="0.1"
                    max="100"
                    step="0.1"
                    value={auValue}
                    onChange={(e) => setAuValue(Math.max(0.01, Number(e.target.value)))}
                    className="w-28 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-center font-bold focus:outline-none focus:border-cosmic-gold"
                  />
                  <span className="text-xs text-slate-400 font-mono">AU</span>
                </div>
              </div>

              {/* Preset Shortcuts */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono text-slate-500 self-center">Presets:</span>
                {[
                  { name: 'Sun to Earth', au: 1.0 },
                  { name: 'Sun to Mars', au: 1.52 },
                  { name: 'Sun to Jupiter', au: 5.2 },
                  { name: 'Sun to Neptune', au: 30.07 },
                  { name: 'Sun to Pluto', au: 39.48 },
                ].map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setAuValue(p.au)}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 transition-colors"
                  >
                    {p.name} ({p.au} AU)
                  </button>
                ))}
              </div>
            </div>

            {/* Equivalent Measurements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-space-950/70 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Kilometers
                </span>
                <span className="text-xl font-display font-bold text-cosmic-cyan">
                  {formatAstronomicalNumber(kmEquivalent)} km
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-space-950/70 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Miles
                </span>
                <span className="text-xl font-display font-bold text-cosmic-gold">
                  {formatAstronomicalNumber(milesEquivalent)} miles
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-space-950/70 border border-slate-800 sm:col-span-2">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  One-Way Light Travel Time (at speed c)
                </span>
                <span className="text-2xl font-display font-bold text-cosmic-purple">
                  {lightMinutes >= 60
                    ? `${(lightMinutes / 60).toFixed(2)} hours`
                    : `${lightMinutes.toFixed(2)} minutes (${Math.round(lightSeconds).toLocaleString()} seconds)`}
                </span>
                <span className="text-[11px] font-mono text-slate-400 block mt-1">
                  Radio signals sent from Earth to a probe at this distance take this long to arrive.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
