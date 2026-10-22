import React, { useState, useEffect } from 'react';
import { SpaceApi } from '../services/api';
import { GlossaryTerm } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LoadingSpinner, ErrorMessage } from '../components/common/LoadingSpinner';
import { BookOpen, Search, Volume2, Sparkles, Filter } from 'lucide-react';

export const GlossaryPage: React.FC = () => {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function load() {
      try {
        const data = await SpaceApi.getGlossary();
        setTerms(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load glossary terms');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <LoadingSpinner message="Consulting astronomical codex..." />;
  if (error) return <ErrorMessage message={error} />;

  const categories = [
    'all',
    'Mechanics',
    'Atmospheric',
    'Astrophysics',
    'Planetary Geology',
  ];

  const filtered = terms.filter((term) => {
    const matchesCat = selectedCategory === 'all' || term.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      term.term.toLowerCase().includes(q) ||
      term.shortDefinition.toLowerCase().includes(q) ||
      term.fullDefinition.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Astronomy Glossary' }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
              <BookOpen className="w-4 h-4" />
              <span>ASTRONOMY & ASTROPHYSICS A–Z COMPENDIUM</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Cosmic Glossary
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Authoritative, accessible explanations of fundamental astrophysical principles,
            orbital mechanics terms, and planetary sciences.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="p-4 rounded-2xl bg-space-900/80 border border-slate-800 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold'
                    : 'bg-space-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Disciplines' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts, formulas..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-space-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-mono"
            />
          </div>
        </div>

        {/* Terms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.term}
              className="p-6 rounded-3xl bg-space-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-space-950 text-emerald-400 border border-emerald-500/30">
                    {item.category}
                  </span>
                  {item.pronunciation && (
                    <span className="text-xs font-mono text-slate-500 italic">
                      /{item.pronunciation}/
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">{item.term}</h3>
                <p className="text-xs sm:text-sm text-cosmic-cyan font-medium leading-relaxed mb-3">
                  {item.shortDefinition}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.fullDefinition}
                </p>

                {/* Mathematical Formula Callout */}
                {item.formula && (
                  <div className="p-3 rounded-xl bg-space-950 border border-slate-800 text-xs font-mono text-cosmic-gold mb-4">
                    <span className="text-slate-500 block text-[10px] uppercase mb-0.5">
                      Governing Formula:
                    </span>
                    {item.formula}
                  </div>
                )}
              </div>

              {item.relatedTerms && item.relatedTerms.length > 0 && (
                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-500">Related:</span>
                  {item.relatedTerms.map((rel) => (
                    <button
                      key={rel}
                      type="button"
                      onClick={() => setSearchQuery(rel)}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    >
                      {rel}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
