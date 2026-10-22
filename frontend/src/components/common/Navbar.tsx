import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  Globe2,
  Orbit,
  Rocket,
  BookOpen,
  Search,
  Bookmark,
  Menu,
  X,
  Scale,
  Sparkles,
  HelpCircle,
  Calculator,
  Eye,
  Radio,
} from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const location = useLocation();
  const { unit, toggleUnit, favorites } = usePreferences();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLearnDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Explore 3D', path: '/explore-3d', icon: Orbit },
    { label: 'Planets', path: '/planets', icon: Globe2 },
    { label: 'Celestial Objects', path: '/celestial-objects', icon: Compass },
    { label: 'Missions', path: '/missions', icon: Rocket },
    { label: 'Space Now', path: '/space-now', icon: Radio },
  ];

  const learnLinks = [
    { label: 'Planet Comparison', path: '/compare', icon: Scale, desc: 'Side-by-side data & visual charts' },
    { label: 'Interactive Quiz', path: '/quiz', icon: HelpCircle, desc: 'Test your astronomical mastery' },
    { label: 'Space Calculators', path: '/calculators', icon: Calculator, desc: 'Your age & weight across worlds' },
    { label: 'Cosmic Glossary', path: '/glossary', icon: BookOpen, desc: 'A–Z definitions and formulas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-blue rounded-lg"
            aria-label="SOLARVERSE Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cosmic-purple/20 via-cosmic-blue/20 to-cosmic-gold/30 border border-cosmic-blue/40 group-hover:border-cosmic-cyan transition-colors">
              <div className="w-4 h-4 rounded-full bg-cosmic-gold shadow-[0_0_12px_#fbbf24] animate-pulse-slow" />
              <div className="absolute inset-0 rounded-full border border-dashed border-cosmic-cyan/60 animate-spin-slow pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-cosmic-cyan transition-colors flex items-center gap-1.5">
                SOLAR<span className="text-cosmic-blue">VERSE</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-slate-400">
                Cosmic Explorer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                    active
                      ? 'text-cosmic-cyan bg-cosmic-blue/15 border border-cosmic-blue/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4 opacity-70" />}
                  {item.label}
                </Link>
              );
            })}

            {/* Learn Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                onBlur={() => setTimeout(() => setLearnDropdownOpen(false), 200)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  location.pathname.startsWith('/compare') ||
                  location.pathname.startsWith('/quiz') ||
                  location.pathname.startsWith('/calculators') ||
                  location.pathname.startsWith('/glossary')
                    ? 'text-cosmic-cyan bg-cosmic-blue/15 border border-cosmic-blue/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
                aria-expanded={learnDropdownOpen}
              >
                <BookOpen className="w-4 h-4 opacity-70" />
                Learn
                <span className="text-[10px] ml-0.5">▼</span>
              </button>

              {learnDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-space-900/95 backdrop-blur-xl border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-mono uppercase text-slate-400 px-3 py-1.5 border-b border-slate-800">
                    Interactive Learning Tools
                  </div>
                  {learnLinks.map((l) => (
                    <Link
                      key={l.path}
                      to={l.path}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-slate-800 text-cosmic-cyan group-hover:bg-cosmic-blue/20 transition-colors">
                        <l.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-200 group-hover:text-white">
                          {l.label}
                        </div>
                        <div className="text-xs text-slate-400">{l.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-300 hover:text-white text-xs transition-all group"
              aria-label="Search Solar System (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-cosmic-cyan group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Metric / Imperial Unit Toggle */}
            <button
              type="button"
              onClick={toggleUnit}
              title={`Switch to ${unit === 'metric' ? 'Imperial (mi, °F)' : 'Metric (km, °C)'}`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-xs font-mono text-slate-300 hover:text-cosmic-gold transition-colors"
            >
              <span className={unit === 'metric' ? 'text-cosmic-cyan font-bold' : 'text-slate-500'}>
                km
              </span>
              <span className="text-slate-600">/</span>
              <span className={unit === 'imperial' ? 'text-cosmic-gold font-bold' : 'text-slate-500'}>
                mi
              </span>
            </button>

            {/* Favorites / Bookmarks Link */}
            <Link
              to="/favorites"
              className="relative p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-300 hover:text-cosmic-rose transition-colors"
              aria-label={`Saved favorites (${favorites.length})`}
              title="Saved planets and celestial objects"
            >
              <Bookmark className="w-4 h-4" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cosmic-purple text-[10px] font-bold text-white">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-space-950/98 backdrop-blur-2xl border-b border-slate-800 p-5 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium mb-3"
            >
              <Search className="w-4 h-4 text-cosmic-cyan" />
              <span>Search Solar System...</span>
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-cosmic-blue/20 text-cosmic-cyan border border-cosmic-blue/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.icon && <link.icon className="w-5 h-5 text-cosmic-blue" />}
                {link.label}
              </Link>
            ))}

            <div className="my-2 border-t border-slate-800 pt-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 px-4">
                Interactive Learning
              </span>
              <div className="mt-2 flex flex-col gap-1">
                {learnLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-300 hover:bg-slate-900 hover:text-white"
                  >
                    <l.icon className="w-4 h-4 text-cosmic-purple" />
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between px-2">
              <span className="text-xs text-slate-400">Measurement Units</span>
              <button
                type="button"
                onClick={toggleUnit}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cosmic-cyan"
              >
                Active: {unit === 'metric' ? 'Metric (km / °C)' : 'Imperial (mi / °F)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
