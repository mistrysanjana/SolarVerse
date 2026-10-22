import React, { useState } from 'react';
import { Rocket, Calendar, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineEvent {
  year: number;
  dateStr: string;
  mission: string;
  agency: string;
  target: string;
  summary: string;
  details: string;
  status: 'Completed' | 'Active' | 'En Route';
  officialUrl: string;
  imageUrl: string;
}

export const ExplorationTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      year: 1610,
      dateStr: 'January 7, 1610',
      mission: 'Galilean Telescopic Revolution',
      agency: 'Galileo Galilei',
      target: 'Jupiter & Venus',
      summary: 'Galileo discovered the 4 major moons of Jupiter and observed phases of Venus, proving bodies orbit stars other than Earth.',
      details: 'Using a primitive 20x refracting telescope, Galileo overturned the geocentric Ptolemaic model and provided observational proof for the Copernican heliocentric system.',
      status: 'Completed',
      officialUrl: 'https://science.nasa.gov/solar-system/galileo-discoveries/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA00583/PIA00583~orig.jpg',
    },
    {
      year: 1969,
      dateStr: 'July 20, 1969',
      mission: 'Apollo 11 Crewed Lunar Landing',
      agency: 'NASA',
      target: 'The Moon',
      summary: 'Humans walked on another celestial world for the very first time in history.',
      details: 'Neil Armstrong and Buzz Aldrin stepped onto the Sea of Tranquility, returning 21.5 kg of lunar regolith and setting seismic and laser retroreflectors still used today.',
      status: 'Completed',
      officialUrl: 'https://www.nasa.gov/mission/apollo-11/',
      imageUrl: 'https://images-assets.nasa.gov/image/AS11-40-5903/AS11-40-5903~orig.jpg',
    },
    {
      year: 1974,
      dateStr: 'March 29, 1974',
      mission: 'Mariner 10 Mercury Flybys',
      agency: 'NASA',
      target: 'Mercury & Venus',
      summary: 'First spacecraft to visit Mercury and first to use an interplanetary gravitational slingshot assist at Venus.',
      details: 'Conducted three close flybys of Mercury, revealing heavily cratered terrain, Caloris Planitia basin, and a surprising dipolar magnetic field.',
      status: 'Completed',
      officialUrl: 'https://science.nasa.gov/mission/mariner-10/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA15190/PIA15190~orig.jpg',
    },
    {
      year: 1977,
      dateStr: 'August / September 1977',
      mission: 'Voyager 1 & Voyager 2',
      agency: 'NASA',
      target: 'Outer Planets & Interstellar Space',
      summary: 'The historic "Grand Tour" of Jupiter, Saturn, Uranus, and Neptune, now exploring interstellar space.',
      details: 'Discovered active volcanism on Io, oceans on Europa, complex ring structures, Neptune’s supersonic winds, and the Pale Blue Dot photograph.',
      status: 'Active',
      officialUrl: 'https://voyager.jpl.nasa.gov/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA00013/PIA00013~orig.jpg',
    },
    {
      year: 1995,
      dateStr: 'December 7, 1995',
      mission: 'Galileo Orbiter & Atmospheric Probe',
      agency: 'NASA',
      target: 'Jupiter',
      summary: 'First spacecraft to orbit a gas giant planet and first to deploy an entry probe directly into Jupiter’s atmosphere.',
      details: 'Transmitted for 58 minutes into Jupiter’s crushing atmosphere, discovered Europa’s subsurface ocean signatures, and recorded Comet Shoemaker-Levy 9 impacts.',
      status: 'Completed',
      officialUrl: 'https://science.nasa.gov/mission/galileo/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA00716/PIA00716~orig.jpg',
    },
    {
      year: 2004,
      dateStr: 'July 1, 2004',
      mission: 'Cassini-Huygens at Saturn',
      agency: 'NASA / ESA / ASI',
      target: 'Saturn, Titan & Enceladus',
      summary: 'Thirteen years of exploration of Saturn, landing the Huygens probe on Titan and discovering Enceladus’s water plumes.',
      details: 'Transformed planetary science: discovered methane rain and seas on Titan, verified hydrothermal ocean vents on Enceladus, and mapped Saturn’s polar hexagon.',
      status: 'Completed',
      officialUrl: 'https://science.nasa.gov/mission/cassini/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg',
    },
    {
      year: 2012,
      dateStr: 'August 6, 2012',
      mission: 'Curiosity Rover (Mars Science Lab)',
      agency: 'NASA',
      target: 'Mars (Gale Crater)',
      summary: 'Confirmed ancient Mars had habitable freshwater lakes with bio-essential chemical elements.',
      details: 'Pioneered the sky-crane landing maneuver; discovered ancient organic carbon molecules in 3-billion-year-old sedimentary mudstones at Mount Sharp.',
      status: 'Active',
      officialUrl: 'https://mars.nasa.gov/msl/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg',
    },
    {
      year: 2015,
      dateStr: 'July 14, 2015',
      mission: 'New Horizons Pluto Flyby',
      agency: 'NASA',
      target: 'Pluto & Kuiper Belt',
      summary: 'First reconnaissance of Pluto and Charon, revealing active nitrogen glaciers and water-ice peaks.',
      details: 'Transformed Pluto from a fuzzy pixel into a geologically active cryogenic world, subsequently exploring pristine Kuiper Belt contact binary Arrokoth in 2019.',
      status: 'Active',
      officialUrl: 'https://science.nasa.gov/mission/new-horizons/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg',
    },
    {
      year: 2021,
      dateStr: 'February 18, 2021',
      mission: 'Perseverance & Ingenuity (Mars 2020)',
      agency: 'NASA',
      target: 'Mars (Jezero Crater)',
      summary: 'Caching astrobiological core samples in an ancient river delta; accompanied by the first powered flight on another planet.',
      details: 'Ingenuity helicopter completed 72 flights; MOXIE produced oxygen from carbon dioxide; rover has cached 20+ hermetically sealed rock cores for return to Earth.',
      status: 'Active',
      officialUrl: 'https://mars.nasa.gov/mars2020/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA24483/PIA24483~orig.jpg',
    },
    {
      year: 2024,
      dateStr: 'October 14, 2024',
      mission: 'Europa Clipper Launch',
      agency: 'NASA',
      target: 'Europa (Jupiter System)',
      summary: 'Flagship mission launched to investigate whether Jupiter’s icy moon Europa could harbor life.',
      details: 'Will arrive in the Jovian system in 2030 to perform nearly 50 close low-altitude flybys with ice-penetrating radar, spectrometers, and thermal imagers.',
      status: 'En Route',
      officialUrl: 'https://science.nasa.gov/mission/europa-clipper/',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA26350/PIA26350~orig.jpg',
    },
  ];

  return (
    <section className="py-20 bg-space-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cosmic-cyan block mb-2">
              Humanity’s Voyage
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Space Exploration Timeline
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Tracing our journey from early telescopic glimpses to robotic probes voyaging beyond the
            heliopause and robotic helicopters flying through the skies of Mars.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {timelineEvents.map((event, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={event.mission} className="relative group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-space-950 border-2 border-cosmic-blue flex items-center justify-center group-hover:border-cosmic-cyan group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-cosmic-cyan" />
                </div>

                {/* Content Card */}
                <div className="bg-space-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-slate-700 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cosmic-cyan px-2.5 py-0.5 rounded-full bg-cosmic-blue/15 border border-cosmic-blue/30">
                        {event.year}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{event.dateStr}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {event.agency} • Target: {event.target}
                      </span>
                      {event.status === 'Active' && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Active
                        </span>
                      )}
                      {event.status === 'En Route' && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/30 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> En Route
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {event.mission}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {event.summary}
                  </p>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in duration-200">
                      <div className="md:col-span-8">
                        <h4 className="text-xs font-mono uppercase text-cosmic-gold mb-1">
                          Historical Scientific Impact
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                          {event.details}
                        </p>
                        <a
                          href={event.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-cosmic-cyan hover:underline"
                        >
                          <span>Official Space Agency Mission Archive</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <div className="md:col-span-4 h-36 rounded-xl overflow-hidden border border-slate-800">
                        <img
                          src={event.imageUrl}
                          alt={event.mission}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className="text-xs font-mono text-slate-400 hover:text-cosmic-cyan flex items-center gap-1 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Read Full Mission Record</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/missions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm border border-slate-700/80 hover:border-cosmic-blue/40 transition-colors"
          >
            <Rocket className="w-4 h-4 text-cosmic-gold" />
            <span>Explore All Missions in Depth</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
