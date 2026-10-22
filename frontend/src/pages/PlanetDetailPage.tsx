import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SpaceApi } from '../services/api';
import { Planet } from '../types';
import { PlanetHeader } from '../components/planet/PlanetHeader';
import { PlanetTabs } from '../components/planet/PlanetTabs';
import { LoadingSpinner, ErrorMessage } from '../components/common/LoadingSpinner';
import { usePreferences } from '../context/PreferencesContext';
import { ChevronLeft, ChevronRight, Globe2, Orbit } from 'lucide-react';

export const PlanetDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addRecentItem } = usePreferences();

  const [planet, setPlanet] = useState<Planet | null>(null);
  const [allPlanets, setAllPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlanet() {
      if (!slug) return;
      setLoading(true);
      setError(null);
      try {
        const [planetData, planetsList] = await Promise.all([
          SpaceApi.getPlanet(slug),
          SpaceApi.getPlanets(),
        ]);
        setPlanet(planetData);
        setAllPlanets(planetsList);

        // Record in recently viewed
        addRecentItem({
          slug: planetData.slug,
          name: planetData.name,
          type: 'planet',
          url: `/planets/${planetData.slug}`,
        });
      } catch (err: any) {
        setError(err.message || `Planet '${slug}' could not be loaded`);
      } finally {
        setLoading(false);
      }
    }
    fetchPlanet();
  }, [slug]);

  if (loading) return <LoadingSpinner message={`Transmitting telemetry for ${slug}...`} />;
  if (error || !planet) {
    return (
      <div className="min-h-screen bg-space-950 pt-28 pb-16 text-slate-100">
        <ErrorMessage
          title="Planet Telemetry Unavailable"
          message={error || `The celestial coordinates for '${slug}' could not be verified.`}
          onRetry={() => navigate('/planets')}
        />
      </div>
    );
  }

  // Previous & Next navigation
  const currentIndex = allPlanets.findIndex((p) => p.slug === planet.slug);
  const prevPlanet =
    currentIndex > 0 ? allPlanets[currentIndex - 1] : allPlanets[allPlanets.length - 1];
  const nextPlanet =
    currentIndex < allPlanets.length - 1 ? allPlanets[currentIndex + 1] : allPlanets[0];

  return (
    <div className="min-h-screen bg-space-950 text-slate-100">
      {/* Hero Header with key telemetry & images */}
      <PlanetHeader planet={planet} />

      {/* 22 Required Content Areas via Multi-Tab Explorer */}
      <PlanetTabs planet={planet} />

      {/* Bottom Planet Navigation Links */}
      <div className="border-t border-slate-800/80 bg-space-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {prevPlanet && (
            <Link
              to={`/planets/${prevPlanet.slug}`}
              className="flex items-center gap-3 p-3 rounded-2xl bg-space-950/80 border border-slate-800 hover:border-cosmic-cyan/50 text-slate-300 hover:text-white transition-all group"
            >
              <ChevronLeft className="w-5 h-5 text-cosmic-cyan group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Previous World
                </span>
                <span className="text-sm font-display font-bold">{prevPlanet.name}</span>
              </div>
            </Link>
          )}

          <Link
            to="/planets"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>All 8 Planets</span>
          </Link>

          {nextPlanet && (
            <Link
              to={`/planets/${nextPlanet.slug}`}
              className="flex items-center gap-3 p-3 rounded-2xl bg-space-950/80 border border-slate-800 hover:border-cosmic-cyan/50 text-slate-300 hover:text-white transition-all group text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Next World
                </span>
                <span className="text-sm font-display font-bold">{nextPlanet.name}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-cosmic-cyan group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
