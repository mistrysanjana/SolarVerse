import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ComparisonTool } from '../components/compare/ComparisonTool';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Scale } from 'lucide-react';

export const ComparePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const planetsParam = searchParams.get('planets');
  const initialSlugs = planetsParam ? planetsParam.split(',') : ['earth', 'mars'];

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Planet Comparison' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-gold text-xs font-mono mb-2">
              <Scale className="w-4 h-4" />
              <span>SIDE-BY-SIDE PLANETARY METRICS & VISUAL CHARTS</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Planet Comparison Tool
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Compare physical dimensions, mass, surface gravity, distance, and orbital mechanics
            between planets with strictly normalized scales and consistent scientific units.
          </p>
        </div>

        <ComparisonTool initialSlugs={initialSlugs} />
      </div>
    </div>
  );
};
