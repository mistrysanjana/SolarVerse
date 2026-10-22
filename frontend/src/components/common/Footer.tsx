import React from 'react';
import { Link } from 'react-router-dom';
import { Orbit, ExternalLink, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-space-950 border-t border-slate-800/80 text-slate-400 text-sm overflow-hidden pt-16 pb-12">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-b from-cosmic-blue/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cosmic-purple/30 to-cosmic-blue/30 border border-cosmic-blue/50 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-cosmic-gold shadow-[0_0_8px_#fbbf24]" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider">
                SOLAR<span className="text-cosmic-blue">VERSE</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
              An immersive digital space museum and interactive solar system explorer. Designed for
              students, researchers, and stargazers, powered by verified astronomical data from
              NASA, ESA, and the IAU.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Scientific Observational Data</span>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-display font-semibold text-white tracking-wider uppercase text-xs mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/explore-3d" className="hover:text-cosmic-cyan transition-colors">
                  3D Solar System
                </Link>
              </li>
              <li>
                <Link to="/planets" className="hover:text-cosmic-cyan transition-colors">
                  All 8 Planets
                </Link>
              </li>
              <li>
                <Link to="/celestial-objects" className="hover:text-cosmic-cyan transition-colors">
                  Dwarf Planets & Moons
                </Link>
              </li>
              <li>
                <Link to="/missions" className="hover:text-cosmic-cyan transition-colors">
                  Exploration Missions
                </Link>
              </li>
              <li>
                <Link to="/space-now" className="hover:text-cosmic-cyan transition-colors">
                  Space Now & APOD
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Learning */}
          <div>
            <h3 className="font-display font-semibold text-white tracking-wider uppercase text-xs mb-4">
              Learn & Calculate
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/compare" className="hover:text-cosmic-cyan transition-colors">
                  Planet Comparison Tool
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-cosmic-cyan transition-colors">
                  Astronomy Mastery Quiz
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="hover:text-cosmic-cyan transition-colors">
                  Age & Weight Calculators
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="hover:text-cosmic-cyan transition-colors">
                  Astrophysics Glossary
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-cosmic-cyan transition-colors">
                  Saved Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Scientific Sources */}
          <div>
            <h3 className="font-display font-semibold text-white tracking-wider uppercase text-xs mb-4">
              Scientific Sources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://science.nasa.gov/solar-system/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cosmic-cyan transition-colors flex items-center gap-1.5"
                >
                  NASA Solar System
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cosmic-cyan transition-colors flex items-center gap-1.5"
                >
                  NASA Planetary Fact Sheets
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.esa.int/Science_Exploration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cosmic-cyan transition-colors flex items-center gap-1.5"
                >
                  ESA Science Archives
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.iau.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cosmic-cyan transition-colors flex items-center gap-1.5"
                >
                  International Astronomical Union
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://images.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cosmic-cyan transition-colors flex items-center gap-1.5"
                >
                  NASA Image Library
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            <p>
              Educational Use Disclaimer: Planetary imagery courtesy of NASA, ESA, JPL-Caltech, and
              STScI. Content is curated for educational and non-commercial scientific visualization.
            </p>
            <p className="mt-1">
              Visual Explorer scales are enhanced for visibility; see the Scientific Scale mode for
              geometric disclosures.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span>SOLARVERSE © {new Date().getFullYear()}</span>
            <span>•</span>
            <span className="text-cosmic-cyan">Explore Responsibly</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
