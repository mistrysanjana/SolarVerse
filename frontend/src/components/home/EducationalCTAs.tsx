import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HelpCircle, Shuffle, Sparkles, ArrowRight, ExternalLink, X, Bookmark } from 'lucide-react';
import { SpaceApi } from '../../services/api';
import { SpaceFact } from '../../types';
import { usePreferences } from '../../context/PreferencesContext';

export const EducationalCTAs: React.FC = () => {
  const navigate = useNavigate();
  const [factModalOpen, setFactModalOpen] = useState(false);
  const [currentFact, setCurrentFact] = useState<SpaceFact | null>(null);
  const [loadingFact, setLoadingFact] = useState(false);
  const { isFavorite, toggleFavorite } = usePreferences();

  const handleRandomPlanet = () => {
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
    const random = planets[Math.floor(Math.random() * planets.length)];
    navigate(`/planets/${random}`);
  };

  const handleOpenTodayFact = async () => {
    setLoadingFact(true);
    setFactModalOpen(true);
    try {
      const fact = await SpaceApi.getRandomFact();
      setCurrentFact(fact);
    } catch (e) {
      console.error('Fact fetch failed:', e);
    } finally {
      setLoadingFact(false);
    }
  };

  return (
    <section className="py-20 bg-space-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cosmic-gold block mb-2">
            Interactive Learning Center
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Expand Your Astronomical Horizons
          </h2>
          <p className="text-slate-400 text-sm">
            Engage with interactive space challenges, test your knowledge against astrophysics
            questions, or embark on a serendipitous random cosmic voyage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Quiz CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cosmic-purple/15 to-space-900 border border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cosmic-purple/20 text-cosmic-purple flex items-center justify-center mb-6 border border-cosmic-purple/40 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cosmic-purple block mb-1">
                Gamified Mastery
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Test Your Space Knowledge
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Challenge yourself with curated questions across beginner, intermediate, and
                advanced astrophysicist levels. Track your score and unlock instant scientific
                explanations.
              </p>
            </div>
            <Link
              to="/quiz"
              className="py-3 px-5 rounded-xl bg-cosmic-purple hover:bg-cosmic-purple/90 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cosmic-purple/25"
            >
              <span>Take Astronomy Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2. Random Planet CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cosmic-blue/15 to-space-900 border border-cosmic-blue/30 hover:border-cosmic-blue/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cosmic-blue/20 text-cosmic-cyan flex items-center justify-center mb-6 border border-cosmic-blue/40 group-hover:scale-110 transition-transform">
                <Shuffle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cosmic-cyan block mb-1">
                Serendipitous Voyage
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Explore a Random Planet
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Let celestial mechanics choose your next destination. Warp directly to a randomized
                planet profile with complete physical, orbital, and atmospheric telemetry.
              </p>
            </div>
            <button
              type="button"
              onClick={handleRandomPlanet}
              className="py-3 px-5 rounded-xl bg-cosmic-blue hover:bg-cosmic-blue/90 text-space-950 font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cosmic-blue/25"
            >
              <span>Jump to Random Planet</span>
              <Shuffle className="w-4 h-4" />
            </button>
          </div>

          {/* 3. Space Fact CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cosmic-gold/15 to-space-900 border border-cosmic-gold/30 hover:border-cosmic-gold/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cosmic-gold/20 text-cosmic-gold flex items-center justify-center mb-6 border border-cosmic-gold/40 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cosmic-gold block mb-1">
                Verified Curiosities
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Discover Today's Space Fact
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Did you know that sunsets on Mars are blue, or that Saturn’s rings are only 20
                meters thick? Reveal verified scientific insights cited directly from NASA missions.
              </p>
            </div>
            <button
              type="button"
              onClick={handleOpenTodayFact}
              className="py-3 px-5 rounded-xl bg-cosmic-gold hover:bg-cosmic-gold/90 text-space-950 font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cosmic-gold/25"
            >
              <span>Reveal Cosmic Fact</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Verified Space Fact Modal */}
      {factModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setFactModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-space-900 border border-cosmic-gold/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFactModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cosmic-gold text-xs font-mono mb-3">
              <Sparkles className="w-4 h-4" />
              <span>VERIFIED ASTRONOMICAL FACT</span>
            </div>

            {loadingFact && (
              <div className="py-12 text-center text-slate-400 font-mono text-sm">
                Retrieving observational record...
              </div>
            )}

            {!loadingFact && currentFact && (
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4 leading-snug">
                  "{currentFact.fact}"
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 bg-space-950/60 p-4 rounded-xl border border-slate-800">
                  {currentFact.explanation}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-6">
                  <span>Source: {currentFact.sourceName}</span>
                  <span>Verified: {currentFact.verificationDate}</span>
                </div>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={currentFact.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cosmic-cyan hover:underline"
                  >
                    <span>View Primary Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleFavorite(`fact-${currentFact.id}`)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cosmic-rose"
                      title="Save to favorites"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isFavorite(`fact-${currentFact.id}`)
                            ? 'text-cosmic-purple fill-current'
                            : ''
                        }`}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenTodayFact}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium"
                    >
                      Another Fact
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
