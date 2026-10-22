import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Orbit, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-950 flex items-center justify-center p-4 text-center">
      <div className="max-w-md p-8 rounded-3xl bg-space-900/80 border border-slate-800 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-cosmic-purple/20 text-cosmic-purple flex items-center justify-center mx-auto mb-6 border border-cosmic-purple/40">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-cosmic-cyan block mb-2">
          Coordinates Unknown • 404
        </span>
        <h1 className="font-display font-extrabold text-3xl text-white mb-3">
          Lost in Deep Space
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The celestial coordinates you requested do not correspond to any known planetary body,
          natural moon, or space mission in our astronomical registry.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-space-950 font-display font-bold text-sm shadow-lg shadow-cosmic-blue/20 hover:brightness-110 transition-all"
        >
          <Orbit className="w-4 h-4" />
          <span>Return to Solar System</span>
        </Link>
      </div>
    </div>
  );
};
