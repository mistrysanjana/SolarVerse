import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  Sparkles,
  Sun,
  Globe2,
  Orbit,
} from 'lucide-react';

interface TourStation {
  step: number;
  title: string;
  subtitle: string;
  body: string;
  keyStats: string;
  imageUrl: string;
  linkText: string;
  linkUrl: string;
}

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuidedTourModal: React.FC<GuidedTourModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const stations: TourStation[] = [
    {
      step: 1,
      title: 'The Sun',
      subtitle: 'The Heart of the Solar System',
      body: 'Our journey begins at the center. The Sun contains 99.86% of the system’s total mass and fuses 600 million tons of hydrogen into helium every second in its 15,000,000°C core.',
      keyStats: 'Diameter: 1.39M km • Surface Temp: 5,500°C • Type: G2V Yellow Dwarf',
      imageUrl: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~orig.jpg',
      linkText: 'Explore in 3D',
      linkUrl: '/explore-3d',
    },
    {
      step: 2,
      title: 'The Inner Terrestrial Worlds',
      subtitle: 'Mercury and Venus: The Kiln and the Greenhouse',
      body: 'Closest to the Sun lie Mercury and Venus. Mercury contracts as it cools with violent temperature swings (-180°C to 430°C), while Venus traps heat in a 92-bar carbon dioxide furnace at 464°C.',
      keyStats: 'Mercury: 0.39 AU • Venus: 0.72 AU • Runaway Greenhouse Effect',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA00271/PIA00271~orig.jpg',
      linkText: 'Explore Venus Profile',
      linkUrl: '/planets/venus',
    },
    {
      step: 3,
      title: 'Earth and Mars',
      subtitle: 'The Habitable Zone and the Red Frontier',
      body: 'Earth is humanity’s pale blue dot with liquid water oceans and a nitrogen-oxygen atmosphere. Beyond lies Mars, a frozen desert with extinct giant volcanoes and ancient river deltas.',
      keyStats: 'Earth: 1.0 AU • Mars: 1.52 AU • Olympus Mons: 21.9 km tall',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg',
      linkText: 'Explore Mars Profile',
      linkUrl: '/planets/mars',
    },
    {
      step: 4,
      title: 'The Asteroid Belt',
      subtitle: 'The Primordial Rubble Frontier',
      body: 'Between Mars and Jupiter lies a vast disc of millions of rocky fragments. Gravitational perturbations from Jupiter prevented them from accreting into a planet. Home to dwarf planet Ceres.',
      keyStats: 'Distance: 2.2 – 3.2 AU • Total Mass: 3% of Earth’s Moon',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA21906/PIA21906~orig.jpg',
      linkText: 'Explore Ceres & Belt',
      linkUrl: '/celestial-objects/ceres',
    },
    {
      step: 5,
      title: 'The Gas Giants',
      subtitle: 'Jupiter and Saturn: Monarchs of Fluid and Rings',
      body: 'Jupiter holds more mass than all other planets combined and commands 95 moons. Saturn boasts a majestic 282,000 km wide ring system and ocean moons Titan and Enceladus.',
      keyStats: 'Jupiter: 318 Earth masses • Saturn: 146 moons • Ring thickness: ~20m',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg',
      linkText: 'Explore Saturn Profile',
      linkUrl: '/planets/saturn',
    },
    {
      step: 6,
      title: 'The Ice Giants & Outer Moons',
      subtitle: 'Uranus and Neptune: The Deep Azure Realm',
      body: 'Uranus rotates on its side at an extreme 98° tilt. Outermost Neptune endures supersonic winds clocking 2,100 km/h and holds Triton, a captured Kuiper Belt moon with nitrogen geysers.',
      keyStats: 'Uranus: -224°C record cold • Neptune: 30 AU • Triton: Retrograde orbit',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg',
      linkText: 'Explore Neptune Profile',
      linkUrl: '/planets/neptune',
    },
    {
      step: 7,
      title: 'The Kuiper Belt & The Oort Cloud',
      subtitle: 'Pluto, Arrokoth and the Edge of the Sun’s Reach',
      body: 'Beyond Neptune lies the Kuiper Belt, home to Pluto and trillions of icy bodies. Far beyond, the spherical Oort Cloud stretches out to 100,000 AU (1.6 light-years), marking the gravitational threshold.',
      keyStats: 'Pluto: 39.5 AU • Oort Cloud: 100,000 AU • Hill Sphere Boundary',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg',
      linkText: 'Explore Pluto Profile',
      linkUrl: '/celestial-objects/pluto',
    },
  ];

  if (!isOpen) return null;

  const current = stations[currentStep];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl bg-space-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-space-950/70">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-cosmic-cyan" />
            <span className="font-display font-bold text-white text-base">
              Guided Cosmic Tour (Station {current.step} of {stations.length})
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Station Image Banner */}
        <div className="h-48 sm:h-64 relative bg-space-950 overflow-hidden">
          <img
            src={current.imageUrl}
            alt={current.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono uppercase tracking-wider text-cosmic-cyan block mb-1">
              {current.subtitle}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex-1">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {current.body}
          </p>

          <div className="p-3.5 rounded-xl bg-space-950 border border-slate-800 text-xs font-mono text-cosmic-gold mb-6">
            <span className="text-slate-400 block text-[10px] uppercase mb-0.5">
              Key Observational Telemetry:
            </span>
            {current.keyStats}
          </div>

          <div className="flex items-center justify-between">
            <Link
              to={current.linkUrl}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cosmic-cyan hover:underline"
            >
              <span>{current.linkText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Previous Station"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (currentStep + 1 < stations.length) {
                    setCurrentStep((prev) => prev + 1);
                  } else {
                    onClose();
                  }
                }}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-space-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-cosmic-blue/20 hover:brightness-110 transition-all"
              >
                <span>{currentStep + 1 === stations.length ? 'Finish Tour' : 'Next Station'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
