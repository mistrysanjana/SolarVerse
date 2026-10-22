import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export const LoadingSpinner: React.FC<{ message?: string }> = ({
  message = 'Loading celestial data...',
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
        <div className="absolute inset-0 rounded-full border-2 border-cosmic-cyan border-t-transparent animate-spin" />
        <div className="absolute inset-3 rounded-full border-2 border-cosmic-purple border-b-transparent animate-spin-reverse" />
        <div className="absolute inset-6 rounded-full bg-cosmic-gold animate-pulse-slow" />
      </div>
      <p className="text-sm font-mono text-slate-400 tracking-wide">{message}</p>
    </div>
  );
};

export const ErrorMessage: React.FC<{
  title?: string;
  message: string;
  onRetry?: () => void;
}> = ({ title = 'Telemetry Error', message, onRetry }) => {
  return (
    <div className="max-w-md mx-auto my-12 p-6 rounded-2xl bg-space-900/90 border border-red-500/30 shadow-2xl text-center">
      <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-6">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Re-establish Connection</span>
        </button>
      )}
    </div>
  );
};
