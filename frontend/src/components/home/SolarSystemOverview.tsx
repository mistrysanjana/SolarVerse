import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Globe, Shield, Orbit, Layers, ArrowRight, ExternalLink } from 'lucide-react';

export const SolarSystemOverview: React.FC = () => {
  const regions = [
    {
      title: 'The Sun',
      distance: '0 AU (Center)',
      desc: 'A G-type main-sequence star (yellow dwarf) providing 99.86% of the system’s mass. Its gravitational anchor and solar wind define the heliosphere.',
      color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400',
      tag: 'Host Star',
      link: '/explore-3d',
    },
    {
      title: 'Inner Terrestrial Planets',
      distance: '0.39 – 1.52 AU',
      desc: 'Mercury, Venus, Earth, and Mars. Dense, rocky worlds with silicate mantles, metallic cores, and few or no moons.',
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-cosmic-cyan',
      tag: 'Rocky Worlds',
      link: '/planets',
    },
    {
      title: 'The Asteroid Belt',
      distance: '2.2 – 3.2 AU',
      desc: 'Millions of rocky and metallic remnants from the primordial nebula, prevented from accreting into a planet by Jupiter’s gravitational tides. Home to dwarf planet Ceres.',
      color: 'from-amber-600/20 to-orange-500/10 border-amber-600/30 text-amber-300',
      tag: 'Circumstellar Disc',
      link: '/celestial-objects/asteroid-belt',
    },
    {
      title: 'Outer Giant Planets',
      distance: '5.2 – 30.1 AU',
      desc: 'Gas giants (Jupiter & Saturn) dominated by hydrogen-helium envelopes; Ice giants (Uranus & Neptune) rich in water, methane, and ammonia ices. Home to hundreds of dynamic moons.',
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-cosmic-purple',
      tag: 'Gas & Ice Giants',
      link: '/planets',
    },
    {
      title: 'The Kuiper Belt',
      distance: '30 – 55 AU',
      desc: 'A donut-shaped reservoir of cryogenic bodies and short-period comets. Hosts dwarf planets Pluto, Haumea, and Makemake.',
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300',
      tag: 'Trans-Neptunian',
      link: '/celestial-objects/kuiper-belt',
    },
    {
      title: 'The Oort Cloud',
      distance: '2,000 – 100,000 AU',
      desc: 'A theoretical spherical halo of trillions of icy planetesimals reaching nearly halfway to Alpha Centauri. Source of long-period comets.',
      color: 'from-slate-700/20 to-slate-800/10 border-slate-600/30 text-slate-300',
      tag: 'Outer Boundary',
      link: '/celestial-objects/oort-cloud',
    },
  ];

  return (
    <section className="py-20 bg-space-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cosmic-cyan block mb-2">
            Architecture of the Cosmos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Structure of Our Solar System
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formed 4.6 billion years ago from the gravitational collapse of a giant interstellar
            molecular cloud, our planetary neighborhood is arranged in distinct orbital zones
            governed by solar radiation and celestial mechanics.
          </p>
        </div>

        {/* Structural Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((r, i) => (
            <div
              key={r.title}
              className={`p-6 rounded-2xl bg-gradient-to-br ${r.color} border backdrop-blur-sm hover:scale-[1.02] transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-space-950/70 border border-current">
                    {r.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{r.distance}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{r.title}</h3>
                <p className="text-sm text-slate-300/90 leading-relaxed mb-6">{r.desc}</p>
              </div>

              <Link
                to={r.link}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cosmic-cyan group transition-colors"
              >
                <span>Explore Region</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
