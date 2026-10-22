import React from 'react';
import { Link } from 'react-router-dom';
import { Orbit, Compass, ChevronDown, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartExploring?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartExploring }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Deep Space Background Canvas / Gradients */}
      <div className="absolute inset-0 bg-space-950 pointer-events-none">
        {/* Nebular Glow Gradients */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-cosmic-purple/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-cosmic-blue/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-cosmic-cyan/10 rounded-full blur-[120px] pointer-events-none" />

        {/* CSS Starfield Background Pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
                              radial-gradient(1.5px 1.5px at 60px 120px, #38bdf8, rgba(0,0,0,0)),
                              radial-gradient(1px 1px at 150px 70px, #fbbf24, rgba(0,0,0,0)),
                              radial-gradient(2px 2px at 240px 190px, #e0e7ff, rgba(0,0,0,0)),
                              radial-gradient(1px 1px at 320px 80px, #ffffff, rgba(0,0,0,0)),
                              radial-gradient(1.5px 1.5px at 420px 260px, #a855f7, rgba(0,0,0,0))`,
            backgroundSize: '550px 550px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Mission Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cosmic-blue/30 backdrop-blur-md text-xs font-mono text-cosmic-cyan mb-8 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cosmic-gold animate-pulse-slow" />
          <span>Interactive Digital Space Museum • Powered by NASA & ESA Data</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.08]">
          Explore the Wonders of Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue via-cosmic-cyan to-cosmic-purple">
            Solar System
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
          Your journey through our cosmic neighborhood. Discover the Sun, eight planets, moons,
          asteroids, and epic space exploration missions with rigorous scientific accuracy.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/explore-3d"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-space-950 font-display font-bold text-base flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            <Orbit className="w-5 h-5" />
            <span>Launch 3D Explorer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/planets"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-display font-semibold text-base border border-slate-700/80 hover:border-cosmic-blue/50 flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Compass className="w-5 h-5 text-cosmic-gold" />
            <span>Discover the 8 Planets</span>
          </Link>
        </div>

        {/* High-level Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80 text-left">
          <div className="p-4 rounded-2xl bg-space-900/50 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs font-mono uppercase text-slate-500 block">Host Star</span>
            <span className="text-2xl font-display font-bold text-cosmic-gold">1 Sun</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">99.86% Solar System mass</span>
          </div>

          <div className="p-4 rounded-2xl bg-space-900/50 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs font-mono uppercase text-slate-500 block">Major Worlds</span>
            <span className="text-2xl font-display font-bold text-cosmic-cyan">8 Planets</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">4 Terrestrial • 4 Giants</span>
          </div>

          <div className="p-4 rounded-2xl bg-space-900/50 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs font-mono uppercase text-slate-500 block">Natural Satellites</span>
            <span className="text-2xl font-display font-bold text-cosmic-purple">290+ Moons</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">Titan, Europa, Io, Triton</span>
          </div>

          <div className="p-4 rounded-2xl bg-space-900/50 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs font-mono uppercase text-slate-500 block">Remnant Bodies</span>
            <span className="text-2xl font-display font-bold text-emerald-400">1.3M+ Asteroids</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">Main Belt & Kuiper Belt</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center justify-center text-slate-500 text-xs font-mono">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-cosmic-blue" />
        </div>
      </div>
    </section>
  );
};
