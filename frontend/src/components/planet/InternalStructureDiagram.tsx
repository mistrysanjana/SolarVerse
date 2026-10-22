import React from 'react';
import { Layers } from 'lucide-react';

interface InternalStructureDiagramProps {
  layers: Array<{ layer: string; depth: string; composition: string }>;
  magneticField: string;
}

export const InternalStructureDiagram: React.FC<InternalStructureDiagramProps> = ({
  layers,
  magneticField,
}) => {
  const layerColors = [
    'border-amber-400 bg-amber-500/10 text-amber-300',
    'border-orange-500 bg-orange-600/10 text-orange-300',
    'border-red-500 bg-red-600/10 text-red-300',
    'border-rose-400 bg-rose-500/10 text-rose-300',
  ];

  return (
    <div className="bg-space-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-cosmic-purple" />
        <h3 className="font-display font-bold text-lg text-white">Internal Geophysics & Core</h3>
      </div>

      {/* Layer Cards */}
      <div className="space-y-3 mb-6">
        {layers.map((layer, idx) => (
          <div
            key={layer.layer}
            className={`p-3.5 rounded-xl border ${layerColors[idx % layerColors.length]} flex flex-col sm:flex-row sm:items-center justify-between gap-2`}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-white">
                  {idx + 1}. {layer.layer}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-space-950/80 border border-current">
                  {layer.depth}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{layer.composition}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Magnetosphere Callout */}
      <div className="p-4 rounded-xl bg-space-950/80 border border-slate-800 text-xs">
        <span className="font-mono uppercase tracking-wider text-cosmic-cyan block font-semibold mb-1">
          Magnetic Field & Geodynamo
        </span>
        <p className="text-slate-300 leading-relaxed">{magneticField}</p>
      </div>
    </div>
  );
};
