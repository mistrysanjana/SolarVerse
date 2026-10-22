import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Globe2, Compass, Rocket, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { SpaceApi } from '../../services/api';
import { SearchResult } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Global shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await SpaceApi.search(query);
        setResults(data);
        setSelectedIndex(0);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const handleSelect = (item: SearchResult) => {
    onClose();
    navigate(item.url);
  };

  if (!isOpen) return null;

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'planet':
        return <Globe2 className="w-4 h-4 text-cosmic-cyan" />;
      case 'object':
        return <Compass className="w-4 h-4 text-cosmic-purple" />;
      case 'mission':
        return <Rocket className="w-4 h-4 text-cosmic-gold" />;
      case 'glossary':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      default:
        return <Search className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-space-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search Solar System"
    >
      <div
        className="w-full max-w-2xl bg-space-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-space-950/60">
          <Search className="w-5 h-5 text-cosmic-cyan flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search planets, moons, missions, astrophysics terms..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-base focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-400"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-800/40">
          {loading && (
            <div className="py-12 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-cosmic-cyan border-t-transparent animate-spin" />
              <span>Scanning astronomical database...</span>
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="py-12 text-center px-6">
              <p className="text-slate-300 font-medium text-base mb-1">
                No cosmic records found for "{query}"
              </p>
              <p className="text-slate-500 text-xs max-w-sm mx-auto">
                Try searching for specific planet names (Mars, Jupiter), moons (Europa, Titan),
                missions (Cassini, Apollo), or concepts (AU, Roche Limit, Habitable Zone).
              </p>
            </div>
          )}

          {!loading && !query && (
            <div className="py-8 px-6 text-center text-slate-500 text-xs">
              <span className="font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Suggested Searches
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {['Saturn', 'Europa', 'Perseverance', 'Olympus Mons', 'AU', 'Tidal Locking'].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {!loading &&
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-start justify-between gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-cosmic-blue/15 border border-cosmic-blue/40' : 'hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 mt-0.5">
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-sm">{item.title}</span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-xs text-cosmic-cyan/80 mb-0.5">{item.subtitle}</div>
                      <div className="text-xs text-slate-400 line-clamp-1">{item.snippet}</div>
                    </div>
                  </div>
                  <div className="flex items-center self-center pl-2">
                    {isSelected ? (
                      <CornerDownLeft className="w-4 h-4 text-cosmic-cyan" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-space-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>SOLARVERSE Search Engine</span>
        </div>
      </div>
    </div>
  );
};
