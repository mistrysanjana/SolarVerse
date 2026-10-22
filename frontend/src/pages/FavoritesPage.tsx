import React, { useState, useEffect } from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { SpaceApi } from '../services/api';
import { Planet, CelestialObject } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Bookmark, Clock, Trash2, ArrowRight, Globe, Compass } from 'lucide-react';

export const FavoritesPage: React.FC = () => {
  const {
    favorites,
    clearFavorites,
    toggleFavorite,
    recentItems,
    clearRecentItems,
  } = usePreferences();

  const [allPlanets, setAllPlanets] = useState<Planet[]>([]);
  const [allObjects, setAllObjects] = useState<CelestialObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [p, o] = await Promise.all([
          SpaceApi.getPlanets(),
          SpaceApi.getCelestialObjects(),
        ]);
        setAllPlanets(p);
        setAllObjects(o);
      } catch (e) {
        console.error('Failed to load for favorites:', e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const favoritePlanets = allPlanets.filter((p) => favorites.includes(p.slug));
  const favoriteObjects = allObjects.filter((o) => favorites.includes(`obj-${o.slug}`));

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Saved Bookmarks & History' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cosmic-purple text-xs font-mono mb-2">
              <Bookmark className="w-4 h-4" />
              <span>PERSISTENT LOCAL ASTRONOMICAL PREFERENCES</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Bookmarks & History
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Manage your saved cosmic worlds, recently explored celestial bodies, and personal
            astronomical reading list.
          </p>
        </div>

        {/* 1. Saved Favorites Section */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-cosmic-purple" />
              <h2 className="font-display font-bold text-2xl text-white">
                Saved Celestial Bodies ({favoritePlanets.length + favoriteObjects.length})
              </h2>
            </div>
            {favorites.length > 0 && (
              <button
                type="button"
                onClick={clearFavorites}
                className="flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Bookmarks</span>
              </button>
            )}
          </div>

          {favorites.length === 0 ? (
            <div className="p-8 rounded-3xl bg-space-900/60 border border-slate-800 text-center">
              <Bookmark className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-300 text-sm mb-2 font-medium">No bookmarks saved yet</p>
              <p className="text-slate-500 text-xs mb-4">
                Click the bookmark heart icon on any planet or celestial object to save it here.
              </p>
              <Link
                to="/planets"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Explore Planets Directory
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoritePlanets.map((p) => (
                <div
                  key={p.slug}
                  className="rounded-2xl bg-space-900/80 border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between"
                >
                  <div className="h-36 relative bg-space-950">
                    <img
                      src={p.heroImageUrl}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent" />
                    <button
                      type="button"
                      onClick={() => toggleFavorite(p.slug)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-space-950/80 text-cosmic-purple"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="absolute bottom-2 left-3">
                      <span className="font-display font-bold text-lg text-white">{p.name}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">{p.tagline}</p>
                    <Link
                      to={`/planets/${p.slug}`}
                      className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white font-medium flex items-center justify-center gap-1.5"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}

              {favoriteObjects.map((obj) => (
                <div
                  key={obj.slug}
                  className="rounded-2xl bg-space-900/80 border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between"
                >
                  <div className="h-36 relative bg-space-950">
                    <img
                      src={obj.imageUrl}
                      alt={obj.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent" />
                    <button
                      type="button"
                      onClick={() => toggleFavorite(`obj-${obj.slug}`)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-space-950/80 text-cosmic-purple"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="absolute bottom-2 left-3">
                      <span className="font-display font-bold text-lg text-white">{obj.name}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">{obj.overview}</p>
                    <Link
                      to={`/celestial-objects#${obj.slug}`}
                      className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white font-medium flex items-center justify-center gap-1.5"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Recently Explored Pages */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cosmic-cyan" />
              <h2 className="font-display font-bold text-2xl text-white">
                Recently Explored ({recentItems.length})
              </h2>
            </div>
            {recentItems.length > 0 && (
              <button
                type="button"
                onClick={clearRecentItems}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear History</span>
              </button>
            )}
          </div>

          {recentItems.length === 0 ? (
            <p className="text-xs font-mono text-slate-500">No recently explored pages recorded.</p>
          ) : (
            <div className="space-y-2">
              {recentItems.map((item) => (
                <Link
                  key={item.slug + item.timestamp}
                  to={item.url}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-space-900/60 border border-slate-800 hover:border-cosmic-cyan/40 hover:bg-space-900 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-cosmic-cyan">
                      {item.type === 'planet' ? (
                        <Globe className="w-4 h-4" />
                      ) : (
                        <Compass className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <span className="font-medium text-white text-sm group-hover:text-cosmic-cyan transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 block">
                        Visited: {new Date(item.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
