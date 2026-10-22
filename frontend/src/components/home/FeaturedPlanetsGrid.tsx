import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Orbit, Compass, Sparkles } from 'lucide-react';
import { Planet } from '../../types';
import { usePreferences } from '../../context/PreferencesContext';
import { kmToMiles, formatAstronomicalNumber } from '../../utils/converters';
import { FavoriteButton } from '../common/FavoriteButton';

interface FeaturedPlanetsGridProps {
  planets: Planet[];
}

export const FeaturedPlanetsGrid: React.FC<FeaturedPlanetsGridProps> = ({ planets }) => {
  const { unit } = usePreferences();

  return (
    <section className="py-20 bg-space-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cosmic-cyan block mb-2">
              The Major Celestial Bodies
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              The Eight Planets
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            From the cratered scorched plains of Mercury to the supersonic storms of Neptune,
            explore the diverse geology and atmospheres of our neighborhood.
          </p>
        </div>

        {/* 8 Planet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {planets.map((planet) => {
            const diameter =
              unit === 'metric'
                ? `${formatAstronomicalNumber(planet.meanDiameterKm)} km`
                : `${formatAstronomicalNumber(kmToMiles(planet.meanDiameterKm))} mi`;

            const firstFact =
              planet.interestingFacts && planet.interestingFacts.length > 0
                ? planet.interestingFacts[0]
                : planet.tagline;

            return (
              <div
                key={planet.slug}
                className="group relative rounded-2xl bg-space-950/80 border border-slate-800/90 hover:border-cosmic-blue/50 overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden bg-space-900">
                  <img
                    src={planet.heroImageUrl}
                    alt={`${planet.name} planet`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />

                  {/* Top Bar with Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-space-950/85 backdrop-blur-md text-cosmic-cyan border border-slate-700/80">
                      #{planet.orderFromSun} • {planet.category}
                    </span>
                    <FavoriteButton id={planet.slug} name={planet.name} />
                  </div>

                  {/* Planet Title in image bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-cosmic-cyan transition-colors">
                      {planet.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  {/* Interesting Fact Callout */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3 italic">
                    "{firstFact}"
                  </p>

                  {/* Quick Specs Table */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-space-900/60 p-3 rounded-xl border border-slate-800/80 mb-5">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Diameter</span>
                      <span className="text-slate-200">{diameter}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Distance</span>
                      <span className="text-slate-200">{planet.meanDistanceAu} AU</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Orbital Period</span>
                      <span className="text-slate-200">{planet.orbitalPeriodDays} days</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Known Moons</span>
                      <span className="text-slate-200">{planet.moonCount}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <Link
                    to={`/planets/${planet.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cosmic-blue/20 text-slate-200 hover:text-cosmic-cyan border border-slate-700/80 hover:border-cosmic-blue/40 font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all group/btn"
                  >
                    <span>Explore Planet Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
