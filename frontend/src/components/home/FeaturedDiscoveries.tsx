import React, { useState } from 'react';
import { Flame, Mountain, Wind, Waves, Search, Disc, Moon, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DiscoveryTopic {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  body: string;
  scientificContext: string;
  isConfirmed: boolean;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
}

export const FeaturedDiscoveries: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('extremes');

  const topics: DiscoveryTopic[] = [
    {
      id: 'extremes',
      title: 'Extreme Temperatures',
      subtitle: 'From +464°C Kiln Heat to -224°C Deep Freeze',
      icon: Flame,
      body: 'Venus is the hottest planet with an average temperature of 464°C, hot enough to melt lead, trapped by a runaway greenhouse effect. Conversely, Uranus endures the coldest planetary atmosphere ever recorded in the Solar System at -224°C (49 Kelvin), colder even than more distant Neptune.',
      scientificContext: 'Measured by spacecraft infrared radiometers (Venus Express & Voyager 2). Venusian heat is uniformly distributed by atmospheric super-rotation; Uranus’s cryogenic state is due to lack of internal heat convection.',
      isConfirmed: true,
      linkText: 'Explore Venus & Uranus',
      linkUrl: '/compare?planets=venus,uranus',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA00271/PIA00271~orig.jpg',
    },
    {
      id: 'mountains',
      title: 'Colossal Planetary Volcanoes',
      subtitle: 'Olympus Mons: 21.9 km High Extraterrestrial Titan',
      icon: Mountain,
      body: 'Olympus Mons on Mars is the largest known volcano in the Solar System. Rising nearly 22 kilometers high with a base spanning 600 kilometers, it is nearly three times the height of Mount Everest above sea level and would cover the entire state of Arizona or Poland.',
      scientificContext: 'Formed because Mars lacks mobile tectonic plates; the stationary Martian crust remained parked over a mantle magma plume for hundreds of millions of years, stacking lava flows to monstrous heights.',
      isConfirmed: true,
      linkText: 'Explore Mars Geology',
      linkUrl: '/planets/mars',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA04304/PIA04304~orig.jpg',
    },
    {
      id: 'storms',
      title: 'The Great Red Spot',
      subtitle: 'An Anticyclone Storm Raging for Centuries',
      icon: Wind,
      body: 'Jupiter’s Great Red Spot is a persistent anticyclonic vortex that has churned continuously for at least 350 years. Wider than the entire planet Earth, its perimeter winds exceed 430 km/h, flanked by counter-rotating supersonic atmospheric jet streams.',
      scientificContext: 'Recent NASA Juno microwave radiometer passes revealed that the storm extends roughly 300 to 500 kilometers down beneath Jupiter’s cloud tops, deeply rooted in the planet’s internal thermodynamics.',
      isConfirmed: true,
      linkText: 'Explore Jupiter Storms',
      linkUrl: '/planets/jupiter',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg',
    },
    {
      id: 'oceans',
      title: 'Subsurface Ocean Worlds',
      subtitle: 'Liquid Saltwater Hidden Beneath Cryogenic Ice Shells',
      icon: Waves,
      body: 'Jupiter’s moon Europa and Saturn’s moon Enceladus hide global liquid saltwater oceans beneath their icy crusts. Europa’s ocean is estimated to contain twice the water of all Earth’s oceans combined. Cassini flew through Enceladus’s plumes, detecting water vapor, salts, silica, and phosphorus.',
      scientificContext: 'Tidal flexing from resonant gravitational interactions with host gas giants produces geothermal core heating, keeping oceans liquid and powering seafloor hydrothermal chimneys.',
      isConfirmed: true,
      linkText: 'Explore Europa & Enceladus',
      linkUrl: '/celestial-objects/europa',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA19048/PIA19048~orig.jpg',
    },
    {
      id: 'life',
      title: 'Search for Extraterrestrial Life',
      subtitle: 'Distinguishing Habitability from Confirmed Biology',
      icon: Search,
      body: 'No extraterrestrial life has ever been confirmed anywhere in the universe. However, NASA’s Perseverance rover caches samples of ancient lacustrine mudstones in Jezero Crater on Mars, while the upcoming Europa Clipper and Dragonfly missions will investigate potential biosignatures in ocean worlds.',
      scientificContext: 'Scientific Distinction: Habitability refers only to the presence of water, energy, and bio-essential elements. It does NOT prove the presence of biology. Extant vs extinct biosignatures remain under rigorous scientific evaluation.',
      isConfirmed: false, // Explicit scientific disclosure
      linkText: 'Astrobiology Exploration',
      linkUrl: '/missions/perseverance',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA24483/PIA24483~orig.jpg',
    },
    {
      id: 'rings',
      title: 'Spectacular Planetary Rings',
      subtitle: 'Trillions of Ice Fragments in Cosmic Dance',
      icon: Disc,
      body: 'Saturn’s main rings span across 282,000 km, yet their vertical thickness averages only 10 to 30 meters. Jupiter, Uranus, Neptune, and even dwarf planet Haumea also possess ring systems composed of pulverized dust and carbonaceous boulders.',
      scientificContext: 'Rings reside inside the host planet’s Roche limit where tidal forces prevent material from coalescing into moons. Cassini confirmed "ring rain" that is slowly depleting Saturn’s rings over 100-300 million years.',
      isConfirmed: true,
      linkText: 'Explore Saturn’s Rings',
      linkUrl: '/planets/saturn',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg',
    },
  ];

  const active = topics.find((t) => t.id === activeTab) || topics[0];

  return (
    <section className="py-20 bg-space-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cosmic-purple block mb-2">
            Phenomena & Frontiers
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Remarkable Cosmic Discoveries
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From towering cryovolcanoes and diamond rain to deep hidden oceans, discover the most
            extraordinary findings confirmed by planetary exploration.
          </p>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {topics.map((t) => {
            const isCurrent = t.id === activeTab;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isCurrent
                    ? 'bg-cosmic-blue/20 text-cosmic-cyan border border-cosmic-blue/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                    : 'bg-space-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Discovery Feature Card */}
        <div className="bg-space-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/40">
                  {active.title}
                </span>
                {active.isConfirmed ? (
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    ✓ Confirmed Measurement
                  </span>
                ) : (
                  <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                    ⚠️ Active Hypothesis (Unconfirmed)
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                {active.subtitle}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {active.body}
              </p>

              {/* Scientific Context Disclosure Box */}
              <div className="p-4 rounded-xl bg-space-950/80 border border-slate-800 text-xs text-slate-400 leading-relaxed mb-6 font-mono">
                <div className="flex items-center gap-1.5 text-cosmic-gold mb-1 font-semibold">
                  <Info className="w-3.5 h-3.5" />
                  <span>Scientific Context & Methodology</span>
                </div>
                {active.scientificContext}
              </div>
            </div>

            <div>
              <Link
                to={active.linkUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-cosmic-blue/20 text-white hover:text-cosmic-cyan border border-slate-700 hover:border-cosmic-blue/40 text-sm font-semibold transition-all group"
              >
                <span>{active.linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden relative shadow-xl border border-slate-800">
            <img
              src={active.imageUrl}
              alt={active.title}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
