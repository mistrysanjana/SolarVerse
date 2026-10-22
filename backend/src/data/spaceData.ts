/**
 * SOLARVERSE Core Astronomical Dataset
 * Verified against NASA Planetary Fact Sheet, NSSDC, JPL Horizons, ESA, and IAU Archives.
 */

export interface PlanetSeedData {
  slug: string;
  name: string;
  category: string;
  orderFromSun: number;
  tagline: string;
  overview: string;
  discoveryHistory: string;
  formationHistory: string;
  positionSummary: string;
  meanRadiusKm: number;
  meanDiameterKm: number;
  massKg: string;
  massEarthRelative: number;
  gravityMps2: number;
  gravityEarthRelative: number;
  meanDistanceFromSunKm: number;
  meanDistanceAu: number;
  perihelionKm: number;
  aphelionKm: number;
  orbitalPeriodDays: number;
  orbitalPeriodYears: number;
  orbitalVelocityKms: number;
  orbitalInclinationDeg: number;
  orbitalEccentricity: number;
  rotationPeriodHours: number;
  rotationPeriodEarthDays: number;
  dayLengthHours: number;
  rotationDirection: string;
  axialTiltDeg: number;
  seasonsDescription: string;
  atmosphereComposition: Array<{ gas: string; percentage: number }>;
  surfacePressureBar: number;
  meanTempC: number;
  minTempC: number;
  maxTempC: number;
  tempMeasurementContext: string;
  surfaceComposition: string;
  geologyDescription: string;
  notableFeatures: Array<{ name: string; description: string; type: string }>;
  moonCount: number;
  confirmedMoons: number;
  provisionalMoons: number;
  hasRings: boolean;
  ringSystemDescription?: string;
  magneticFieldDescription: string;
  internalStructure: Array<{ layer: string; depth: string; composition: string }>;
  weatherPhenomena: string;
  explorationHistory: string;
  majorMissions: string[];
  lifePossibilityEvidence: string;
  lifePossibilityAssessment: string;
  interestingFacts: string[];
  earthComparison: {
    sizeRatio: number;
    massRatio: number;
    gravityRatio: number;
    distanceRatio: number;
    yearRatio: number;
  };
  faqs: Array<{ question: string; answer: string }>;
  colorHex: string;
  accentColor: string;
  textureKey: string;
  heroImageUrl: string;
}

export const planetsData: PlanetSeedData[] = [
  {
    slug: 'mercury',
    name: 'Mercury',
    category: 'Terrestrial',
    orderFromSun: 1,
    tagline: 'The Swift, Sun-Scorched Messenger',
    overview: 'Mercury is the smallest planet in the Solar System and closest to the Sun. Its surface is scarred by ancient impact craters and enormous lobate scarps (cliffs) formed as the planet contracted while cooling. Mercury endures some of the most violent temperature swings in the solar system, ranging from intense kiln-like heat during the day to cryogenic cold at night.',
    discoveryHistory: 'Known since antiquity by Sumerians, Babylonians, Greeks, and Romans due to its visibility to the naked eye at dawn and twilight. Named after the fleet-footed Roman messenger god Mercurius because of its rapid 88-day orbit around the Sun.',
    formationHistory: 'Formed approximately 4.5 billion years ago by accretion within the inner solar nebula. Intense early solar wind and giant impacts stripped away much of its outer silicate mantle, leaving an unusually massive metallic iron-nickel core comprising over 70% of its total mass and 85% of its planetary radius.',
    positionSummary: 'Innermost major planet, orbiting at an average distance of 57.9 million kilometers (0.387 AU) from the Sun.',
    meanRadiusKm: 2439.7,
    meanDiameterKm: 4879.4,
    massKg: '3.3011 × 10^23 kg',
    massEarthRelative: 0.0553,
    gravityMps2: 3.7,
    gravityEarthRelative: 0.38,
    meanDistanceFromSunKm: 57909050,
    meanDistanceAu: 0.387,
    perihelionKm: 46001200,
    aphelionKm: 69816900,
    orbitalPeriodDays: 87.97,
    orbitalPeriodYears: 0.24,
    orbitalVelocityKms: 47.36,
    orbitalInclinationDeg: 7.0,
    orbitalEccentricity: 0.2056,
    rotationPeriodHours: 1407.6,
    rotationPeriodEarthDays: 58.65,
    dayLengthHours: 4222.6, // One solar day = 175.9 Earth days (3:2 spin-orbit resonance)
    rotationDirection: 'Prograde',
    axialTiltDeg: 0.034,
    seasonsDescription: 'Due to Mercury’s near-zero axial tilt (0.034°), it does not experience seasons based on tilt. Instead, climatic variation is driven almost entirely by its highly eccentric orbit, receiving 3.2 times more solar irradiance at perihelion than at aphelion.',
    atmosphereComposition: [
      { gas: 'Oxygen (O2)', percentage: 42.0 },
      { gas: 'Sodium (Na)', percentage: 29.0 },
      { gas: 'Hydrogen (H2)', percentage: 22.0 },
      { gas: 'Helium (He)', percentage: 6.0 },
      { gas: 'Potassium (K)', percentage: 0.5 },
      { gas: 'Trace elements', percentage: 0.5 }
    ],
    surfacePressureBar: 1.0e-14, // Ultra-tenuous surface-bound exosphere
    meanTempC: 167,
    minTempC: -180,
    maxTempC: 430,
    tempMeasurementContext: 'Measured at the subsolar point (maximum ~430°C) versus permanently shadowed polar crater bottoms where temperatures plunge below -180°C.',
    surfaceComposition: 'Silicate crust rich in magnesium, sulfur, and potassium, but noticeably depleted in iron compared to Earth. Covered by a fine-grained basaltic regolith.',
    geologyDescription: 'Dominantly cratered terrain similar to Earth’s Moon, interspersed with smooth volcanic plains. Features dramatic compressional thrust faults (rupes) stretching hundreds of kilometers, proving Mercury shrank by 7 km in radius as its core cooled.',
    notableFeatures: [
      { name: 'Caloris Planitia', description: 'One of the largest impact basins in the Solar System (1,550 km across) created by a colossal asteroid collision ~3.8 billion years ago.', type: 'Impact Basin' },
      { name: 'Discovery Rupes', description: 'A massive 650 km long thrust scarp rising up to 2 kilometers high, formed by planetary thermal contraction.', type: 'Fault Scarp' },
      { name: 'Permanently Shadowed Polar Craters', description: 'Deep polar depressions (e.g. Prokofiev, Kandinsky) that never receive sunlight and harbor stable water ice.', type: 'Cryogenic Ice Trap' }
    ],
    moonCount: 0,
    confirmedMoons: 0,
    provisionalMoons: 0,
    hasRings: false,
    magneticFieldDescription: 'Possesses a global dipole magnetic field generated by an active dynamo in its partially molten outer iron core, though its strength is only about 1.1% of Earth’s magnetic field.',
    internalStructure: [
      { layer: 'Crust', depth: '0 - 35 km', composition: 'Silicate rocks rich in magnesium and volatile sulfur' },
      { layer: 'Mantle', depth: '35 - 400 km', composition: 'Dense silicate mantle depleted in iron' },
      { layer: 'Molten Outer Core', depth: '400 - 1900 km', composition: 'Liquid iron-nickel with light alloying elements (silicon/sulfur)' },
      { layer: 'Solid Inner Core', depth: '1900 - 2440 km', composition: 'Solid metallic iron-nickel core' }
    ],
    weatherPhenomena: 'Lacks a substantive atmosphere to sustain weather, wind, or precipitation. Space weathering occurs through high-energy solar wind bombardment, micrometeorite strikes, and extreme diurnal thermal expansion/contraction.',
    explorationHistory: 'Explored in detail by NASA Mariner 10 (three flybys in 1974-1975) and NASA MESSENGER (orbited 2011-2015). ESA/JAXA BepiColombo was launched in 2018 and is performing gravity assists before orbital insertion in late 2026.',
    majorMissions: ['mariner-10', 'messenger', 'bepicolombo'],
    lifePossibilityEvidence: 'No evidence of extinct or extant life. The absence of liquid water, lack of atmospheric shielding against solar radiation, and violent temperature extremes render the surface uninhabitable.',
    lifePossibilityAssessment: 'Currently assessed as completely uninhabitable for biological life.',
    interestingFacts: [
      'Mercury has a 3:2 spin-orbit resonance: it rotates exactly three times on its axis for every two orbits around the Sun.',
      'A single day-night cycle (solar day) on Mercury lasts 176 Earth days, twice as long as its 88-day year!',
      'Despite daytime temperatures reaching 430°C, deep radar and MESSENGER neutron spectrometry confirmed thick sheets of pure water ice hidden in permanently shadowed polar craters.',
      'Mercury is actually the most frequent closest planetary neighbor to Earth (and to all other planets) because of its small, tight orbit.'
    ],
    earthComparison: {
      sizeRatio: 0.383,
      massRatio: 0.055,
      gravityRatio: 0.38,
      distanceRatio: 0.387,
      yearRatio: 0.241
    },
    faqs: [
      { question: 'Why does Mercury have such extreme temperatures?', answer: 'Because it lacks a heat-retaining atmosphere. Without air to circulate warmth, exposed surfaces bake at 430°C in direct sunlight, while night-side surfaces radiate heat into space and freeze at -180°C.' },
      { question: 'Is Mercury the hottest planet?', answer: 'No. Despite being closest to the Sun, Venus is hotter (average ~464°C) because its dense carbon dioxide atmosphere traps heat via a runaway greenhouse effect.' },
      { question: 'Could humans ever land on Mercury?', answer: 'Missions to Mercury are technologically challenging due to the Sun’s gravitational pull requiring enormous delta-v for deceleration, and intense thermal radiation. However, permanent polar ice traps could theoretically offer shielded resources for future robotic outposts.' }
    ],
    colorHex: '#9ca3af',
    accentColor: '#fbbf24',
    textureKey: 'mercury',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA15190/PIA15190~orig.jpg'
  },
  {
    slug: 'venus',
    name: 'Venus',
    category: 'Terrestrial',
    orderFromSun: 2,
    tagline: 'The Runaway Greenhouse Hellscape',
    overview: 'Often referred to as Earth’s sister planet due to similar mass, density, and size, Venus took a radically divergent evolutionary path. Trapped in a runaway greenhouse effect, Venus possesses a crushing carbon dioxide atmosphere and corrosive clouds of sulfuric acid, making its surface the hottest of any planet in the Solar System.',
    discoveryHistory: 'Brightest natural celestial object in the sky after the Sun and the Moon. Recorded by ancient civilizations worldwide as the Morning Star and Evening Star (Phosphorus and Hesperus to Greeks). Galileo in 1610 discovered Venusian phases, proving it orbits the Sun.',
    formationHistory: 'Formed 4.5 billion years ago in the inner solar nebula. Venus likely possessed primordial liquid oceans, but as solar luminosity increased, water evaporated, filling the atmosphere with water vapor (a potent greenhouse gas). Ultraviolet photolysis broke H2O molecules, hydrogen escaped into space, and carbon dioxide degassed from carbonate rocks into an irreversible greenhouse state.',
    positionSummary: 'Second planet from the Sun, orbiting at an average distance of 108.2 million kilometers (0.723 AU).',
    meanRadiusKm: 6051.8,
    meanDiameterKm: 12103.6,
    massKg: '4.8675 × 10^24 kg',
    massEarthRelative: 0.815,
    gravityMps2: 8.87,
    gravityEarthRelative: 0.904,
    meanDistanceFromSunKm: 108208000,
    meanDistanceAu: 0.723,
    perihelionKm: 107477000,
    aphelionKm: 108939000,
    orbitalPeriodDays: 224.70,
    orbitalPeriodYears: 0.615,
    orbitalVelocityKms: 35.02,
    orbitalInclinationDeg: 3.39,
    orbitalEccentricity: 0.0067,
    rotationPeriodHours: -5832.5, // Retrograde rotation
    rotationPeriodEarthDays: -243.02,
    dayLengthHours: 2802.0, // 116.75 Earth days
    rotationDirection: 'Retrograde',
    axialTiltDeg: 177.36, // Rotates clockwise (upside down)
    seasonsDescription: 'Negligible seasonal variation. With an orbital eccentricity of less than 1% (the most circular orbit in the solar system) and effectively a 2.64° tilt relative to its orbital plane, the blistering climate remains constant year-round.',
    atmosphereComposition: [
      { gas: 'Carbon Dioxide (CO2)', percentage: 96.5 },
      { gas: 'Nitrogen (N2)', percentage: 3.5 },
      { gas: 'Sulfur Dioxide (SO2)', percentage: 0.015 },
      { gas: 'Argon (Ar)', percentage: 0.007 },
      { gas: 'Water Vapor (H2O)', percentage: 0.002 },
      { gas: 'Carbon Monoxide (CO)', percentage: 0.0017 }
    ],
    surfacePressureBar: 92.0, // 92 times Earth’s atmospheric pressure, equivalent to 900m underwater
    meanTempC: 464,
    minTempC: 438,
    maxTempC: 482,
    tempMeasurementContext: 'Uniform globally across both equator and poles, day and night, due to massive thermal inertia and efficient heat redistribution by super-rotating upper winds.',
    surfaceComposition: 'Dense basaltic volcanic rock rich in silicates, iron, and titanium, with evidence of ongoing active volcanism verified by radar emissivity anomalies.',
    geologyDescription: 'Dominated by volcanic features: rolling volcanic plains, shield volcanoes, pancake domes (farra), and large tectonic fracture rings called coronae. Surface age is estimated at ~300 to 600 million years, indicating a catastrophic global resurfacing event.',
    notableFeatures: [
      { name: 'Maat Mons', description: 'Massive shield volcano rising 8 km above surrounding plains, with recent radar evidence from Magellan indicating fresh lava flows.', type: 'Shield Volcano' },
      { name: 'Maxwell Montes', description: 'Highest mountain range on Venus, towering 11 kilometers above mean planetary radius with radar-reflective metallic snow (bismuth sulfide).', type: 'Mountain Range' },
      { name: 'Aphrodite Terra', description: 'Continent-sized highland plateau stretching half the circumference of the planet along the equator.', type: 'Highland Terra' }
    ],
    moonCount: 0,
    confirmedMoons: 0,
    provisionalMoons: 0,
    hasRings: false,
    magneticFieldDescription: 'Lacks an intrinsic dipolar dynamo field despite having an iron-nickel core comparable in size to Earth’s, largely due to sluggish core convection and slow rotation. An induced magnetosphere is formed by the solar wind interacting directly with the upper ionosphere.',
    internalStructure: [
      { layer: 'Crust', depth: '0 - 50 km', composition: 'Solid basaltic silicate crust' },
      { layer: 'Mantle', depth: '50 - 3000 km', composition: 'Viscous silicate rock mantle experiencing vigorous convective plumes' },
      { layer: 'Metallic Core', depth: '3000 - 6052 km', composition: 'Partially molten iron-nickel core without strong convective geodynamo' }
    ],
    weatherPhenomena: 'Atmospheric super-rotation: the upper cloud layers circle the planet in just 4 Earth days (speeds up to 360 km/h), 60 times faster than the solid planet rotates. Cloud decks produce sulfuric acid rain that evaporates into virga long before touching the incandescent surface.',
    explorationHistory: 'Subject of intense early space race exploration: Soviet Venera series (Venera 7 in 1970 was the first spacecraft to soft-land and transmit from another planet; Venera 13 survived 127 minutes in 1982 capturing color panoramas). NASA Magellan (1990-1994) radar-mapped 98% of the surface. ESA Venus Express and JAXA Akatsuki investigated climate dynamics.',
    majorMissions: ['venera-7', 'magellan', 'venus-express', 'akatsuki', 'davinci-veritas'],
    lifePossibilityEvidence: 'The scorching surface at 464°C and 92 bar is hostile to organic molecules. However, the temperate cloud deck at altitudes of 50-65 km exhibits benign temperatures (20-60°C) and pressures near 1 bar. Detection of phosphine (PH3) gas in 2020 sparked intense debate, though abiotic chemical pathways or instrument artifacts remain plausible explanations.',
    lifePossibilityAssessment: 'Surface life impossible; microbial aerial biosphere in upper clouds remains an unproven theoretical hypothesis under active scientific study.',
    interestingFacts: [
      'Venus rotates backwards (retrograde) compared to most other planets, so the Sun rises in the west and sets in the east.',
      'A Venusian year (225 Earth days) is shorter than a Venusian sidereal day (243 Earth days).',
      'The atmospheric pressure on the surface of Venus is equivalent to diving nearly 1 kilometer beneath Earth’s ocean—enough to instantly crush an unprotected submarine.',
      'Soviet landers survived only 1 to 2 hours before the extreme heat and corrosive pressure melted their electronic solder and optics.'
    ],
    earthComparison: {
      sizeRatio: 0.949,
      massRatio: 0.815,
      gravityRatio: 0.904,
      distanceRatio: 0.723,
      yearRatio: 0.615
    },
    faqs: [
      { question: 'Why does Venus rotate backwards?', answer: 'Astronomers hypothesize that a catastrophic collision with a massive protoplanet during early solar system formation knocked Venus upside down (tilt 177°), or atmospheric thermal tides acting on its super-dense atmosphere gradually arrested and reversed its spin.' },
      { question: 'Can humans terraform Venus?', answer: 'Theoretical proposals involve deploying solar shades at the Sun-Venus L1 Lagrange point to cool the planet, followed by atmospheric scrubbing to sequester trillions of tons of carbon dioxide, but the engineering scale is vastly beyond current human capabilities.' }
    ],
    colorHex: '#eab308',
    accentColor: '#f97316',
    textureKey: 'venus',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA00271/PIA00271~orig.jpg'
  },
  {
    slug: 'earth',
    name: 'Earth',
    category: 'Terrestrial',
    orderFromSun: 3,
    tagline: 'The Pale Blue Dot & Oasis of Life',
    overview: 'Earth is the third planet from the Sun and the only known astronomical body capable of supporting life. With vast liquid water oceans covering 70.8% of its surface, active plate tectonics recycling minerals, and a protective magnetic field shielding a nitrogen-oxygen atmosphere, Earth serves as the scientific benchmark for planetary habitability.',
    discoveryHistory: 'Humanity’s birthplace. Recognized as a spherical orbiting planet through ancient Greek astronomy (Pythagoras, Eratosthenes measuring circumference ~240 BCE) and mathematically confirmed by the Copernican Revolution and Keplerian mechanics in the 16th and 17th centuries.',
    formationHistory: 'Formed 4.54 billion years ago via accretion from the solar nebula. Around 4.5 billion years ago, a Mars-sized protoplanet named Theia collided with proto-Earth in a giant impact, ejecting debris that coalesced into the Moon and setting Earth’s rapid axial spin and 23.5° obliquity.',
    positionSummary: 'Center of the habitable zone, orbiting the Sun at an average distance of 149.6 million kilometers (defined as 1.000 Astronomical Unit).',
    meanRadiusKm: 6371.0,
    meanDiameterKm: 12742.0,
    massKg: '5.9722 × 10^24 kg',
    massEarthRelative: 1.0,
    gravityMps2: 9.807,
    gravityEarthRelative: 1.0,
    meanDistanceFromSunKm: 149598023,
    meanDistanceAu: 1.0,
    perihelionKm: 147095000,
    aphelionKm: 152100000,
    orbitalPeriodDays: 365.256,
    orbitalPeriodYears: 1.0,
    orbitalVelocityKms: 29.78,
    orbitalInclinationDeg: 0.0,
    orbitalEccentricity: 0.0167,
    rotationPeriodHours: 23.934,
    rotationPeriodEarthDays: 0.997,
    dayLengthHours: 24.0,
    rotationDirection: 'Prograde',
    axialTiltDeg: 23.44,
    seasonsDescription: 'Earth’s 23.44° axial tilt produces four distinct seasons in each hemisphere as the orientation toward solar irradiance alternates between the Northern and Southern hemispheres throughout the 365.25-day orbit.',
    atmosphereComposition: [
      { gas: 'Nitrogen (N2)', percentage: 78.08 },
      { gas: 'Oxygen (O2)', percentage: 20.95 },
      { gas: 'Argon (Ar)', percentage: 0.93 },
      { gas: 'Carbon Dioxide (CO2)', percentage: 0.042 },
      { gas: 'Water Vapor (H2O)', percentage: 0.4 }, // Variable 0-4%
      { gas: 'Neon, Helium, Methane', percentage: 0.008 }
    ],
    surfacePressureBar: 1.013,
    meanTempC: 15,
    minTempC: -89.2, // Recorded at Vostok Station, Antarctica
    maxTempC: 56.7, // Recorded at Furnace Creek, Death Valley
    tempMeasurementContext: 'Global average surface air temperature monitored continuously by satellite radiometers and land/sea meteorological stations.',
    surfaceComposition: 'Heterogeneous crust: 71% basaltic oceanic crust covered by liquid oceans; 29% granitic continental crust with sediments, organic soils, and polar ice sheets.',
    geologyDescription: 'The only planet in the Solar System with active plate tectonics. Seven major lithospheric plates float over the asthenosphere, causing continental drift, seafloor spreading, mountain building, subduction earthquakes, and volcanism.',
    notableFeatures: [
      { name: 'Mariana Trench (Challenger Deep)', description: 'Deepest oceanic oceanic trench on Earth, plunging 10,994 meters below sea level.', type: 'Oceanic Subduction Trench' },
      { name: 'Mount Everest', description: 'Highest elevation above sea level (8,848.86 m), uplifted by the ongoing continental collision of the Indian and Eurasian tectonic plates.', type: 'Continental Orogeny' },
      { name: 'Mid-Atlantic Ridge', description: 'Vast underwater mountain chain stretching over 16,000 kilometers along a divergent plate boundary.', type: 'Rift Zone' }
    ],
    moonCount: 1,
    confirmedMoons: 1,
    provisionalMoons: 0,
    hasRings: false,
    magneticFieldDescription: 'Strong geodynamo generated by convection of liquid iron in the outer core, creating the magnetosphere and Van Allen radiation belts that shield Earth from cosmic rays and solar wind stripping.',
    internalStructure: [
      { layer: 'Crust', depth: '0 - 70 km', composition: 'Silicate rocks (granite in continents, basalt in ocean basins)' },
      { layer: 'Upper & Lower Mantle', depth: '70 - 2890 km', composition: 'Dense peridotite and silicate minerals (bridgmanite, post-perovskite)' },
      { layer: 'Outer Core', depth: '2890 - 5150 km', composition: 'Liquid iron-nickel alloy generating geomagnetic field' },
      { layer: 'Inner Core', depth: '5150 - 6371 km', composition: 'Solid crystalline iron-nickel sphere at ~5,400°C' }
    ],
    weatherPhenomena: 'Dynamic hydrologic cycle driven by solar heating: evaporation, condensation, precipitation, jet streams, tropical cyclones, blizzards, monsoons, and auroral displays at geomagnetic poles.',
    explorationHistory: 'Monitored continuously from orbit by fleets of Earth-observing satellites (NASA Terra, Aqua, Landsat, Sentinel, GOES) tracking climate, oceanography, geology, and biosphere dynamics.',
    majorMissions: ['landsat', 'iss', 'terrasar', 'sentinel'],
    lifePossibilityEvidence: 'Home to millions of known species across all five biological kingdoms. Life originated ~3.8-4.1 billion years ago and has fundamentally transformed planetary chemistry, producing atmospheric oxygen and limestone deposits.',
    lifePossibilityAssessment: 'Abundantly inhabited; Earth is currently our sole reference point for biology.',
    interestingFacts: [
      'Earth is the densest planet in the Solar System at 5.515 g/cm³.',
      'The Moon’s gravitational pull creates oceanic tides and is gradually slowing Earth’s rotation by ~1.7 milliseconds per century.',
      'Earth’s magnetic poles drift over time and have reversed polarity hundreds of times over geological history (geomagnetic reversals).',
      'The atmosphere protects the surface from an estimated 100 metric tons of space dust and micrometeoroids entering every single day.'
    ],
    earthComparison: {
      sizeRatio: 1.0,
      massRatio: 1.0,
      gravityRatio: 1.0,
      distanceRatio: 1.0,
      yearRatio: 1.0
    },
    faqs: [
      { question: 'Why is Earth’s Moon so large compared to its host planet?', answer: 'The Moon has a radius more than 27% of Earth’s, making it by far the largest satellite relative to its host planet in the Solar System. This anomalous size is direct evidence of the giant impact hypothesis.' },
      { question: 'What maintains Earth’s liquid oceans?', answer: 'The Goldilocks position in the habitable zone combined with a moderate greenhouse effect and stable atmospheric pressure prevents water from boiling away or freezing permanently into a snowball state.' }
    ],
    colorHex: '#38bdf8',
    accentColor: '#10b981',
    textureKey: 'earth',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg'
  },
  {
    slug: 'mars',
    name: 'Mars',
    category: 'Terrestrial',
    orderFromSun: 4,
    tagline: 'The Rust-Red Frontier of Astrobiology',
    overview: 'Mars, the fourth planet from the Sun, is a dusty, cold desert world with a very thin atmosphere. Its reddish hue comes from oxidized iron minerals (rust) covering its regolith. Mars boasts the tallest volcano and the deepest canyon in the Solar System, and compelling geological evidence shows it once had abundant flowing liquid water, lakes, and possibly a northern ocean.',
    discoveryHistory: 'Known since prehistoric times; named after the Roman god of war due to its fiery blood-red color. Detailed telescopic observations by Christian Huygens (1659) first recorded Martian surface features. Giovanni Schiaparelli (1877) observed linear grooves which he called "canali" (channels), famously mistranslated as artificial canals.',
    formationHistory: 'Formed 4.5 billion years ago. Mars grew rapidly within the first few million years of the solar nebula but halted prematurely, likely due to Jupiter’s orbital migration (Grand Tack hypothesis) depleting the mass reservoir at 1.5 AU. Its smaller mass caused its core to cool rapidly, quenching its global magnetic field ~4 billion years ago.',
    positionSummary: 'Outermost terrestrial planet, orbiting at an average distance of 227.9 million kilometers (1.524 AU) from the Sun.',
    meanRadiusKm: 3389.5,
    meanDiameterKm: 6779.0,
    massKg: '6.4171 × 10^23 kg',
    massEarthRelative: 0.107,
    gravityMps2: 3.721,
    gravityEarthRelative: 0.379,
    meanDistanceFromSunKm: 227939200,
    meanDistanceAu: 1.524,
    perihelionKm: 206650000,
    aphelionKm: 249261000,
    orbitalPeriodDays: 686.98,
    orbitalPeriodYears: 1.881,
    orbitalVelocityKms: 24.07,
    orbitalInclinationDeg: 1.85,
    orbitalEccentricity: 0.0934,
    rotationPeriodHours: 24.623, // 1 Martian sol
    rotationPeriodEarthDays: 1.026,
    dayLengthHours: 24.66,
    rotationDirection: 'Prograde',
    axialTiltDeg: 25.19,
    seasonsDescription: 'Martian seasons closely mirror Earth’s in character due to its similar 25.19° tilt, but last nearly twice as long because of its longer 687-day year. High eccentricity causes southern summers to be significantly warmer and shorter than northern summers.',
    atmosphereComposition: [
      { gas: 'Carbon Dioxide (CO2)', percentage: 95.32 },
      { gas: 'Nitrogen (N2)', percentage: 2.6 },
      { gas: 'Argon (Ar)', percentage: 1.9 },
      { gas: 'Oxygen (O2)', percentage: 0.13 },
      { gas: 'Carbon Monoxide (CO)', percentage: 0.08 },
      { gas: 'Water Vapor (H2O)', percentage: 0.03 }
    ],
    surfacePressureBar: 0.0061, // ~6.1 millibars (less than 1% of Earth’s pressure, near the triple point of water)
    meanTempC: -63,
    minTempC: -140, // Polar winter nights
    maxTempC: 20, // Equatorial midday summer
    tempMeasurementContext: 'Measured at surface meteorological stations by Viking, Pathfinder, Curiosity, and Perseverance landers.',
    surfaceComposition: 'Basaltic rock covered by fine ferric oxide dust (Fe2O3), sulfates, perchlorates, and clays deposited by ancient liquid water.',
    geologyDescription: 'Dramatic hemispheric dichotomy: low-altitude, smooth volcanic plains in the northern lowlands, and ancient, heavily cratered highlands in the south. Hosts colossal shield volcanoes and extensional rift canyons.',
    notableFeatures: [
      { name: 'Olympus Mons', description: 'The tallest known planetary volcano in the Solar System, rising 21.9 km above datum—two and a half times Mount Everest’s height above sea level.', type: 'Shield Volcano' },
      { name: 'Valles Marineris', description: 'Vast canyon system stretching over 4,000 km in length, up to 200 km wide, and 7 km deep—dwarfing Earth’s Grand Canyon.', type: 'Tectonic Rift Canyon' },
      { name: 'Jezero Crater', description: 'Ancient 45 km wide impact crater with an exceptionally preserved river delta where NASA’s Perseverance rover collects astrobiological samples.', type: 'Paleolake Delta' }
    ],
    moonCount: 2,
    confirmedMoons: 2,
    provisionalMoons: 0,
    hasRings: false,
    ringSystemDescription: 'No current rings, though Phobos is spiraling inward and is predicted to be shredded by tidal forces in ~30-50 million years, forming a debris ring.',
    magneticFieldDescription: 'No global dynamo field today. NASA MGS revealed intense localized crustal magnetic remanence in ancient southern highlands, proving Mars possessed a dynamo field in its first 500 million years.',
    internalStructure: [
      { layer: 'Crust', depth: '0 - 50 km', composition: 'Basaltic crust enriched in iron and aluminum' },
      { layer: 'Mantle', depth: '50 - 1560 km', composition: 'Silicate mantle with higher iron-to-magnesium ratio than Earth' },
      { layer: 'Core', depth: '1560 - 3390 km', composition: 'Liquid iron-nickel-sulfur core, measured by InSight seismology' }
    ],
    weatherPhenomena: 'Dust devils towering up to 8 kilometers high; seasonal planet-encircling global dust storms that blot out solar panels for months; thin cirrus ice clouds and morning carbon dioxide frosts.',
    explorationHistory: 'Most thoroughly explored planet: Mariner 4 (first flyby 1965), Viking 1 & 2 (first sustained surface operations 1976), Pathfinder/Sojourner (1997), Spirit and Opportunity (2004), Curiosity (2012), InSight (2018), and Perseverance/Ingenuity (2021).',
    majorMissions: ['viking-1', 'pathfinder', 'spirit-opportunity', 'curiosity', 'perseverance', 'mars-reconnaissance-orbiter'],
    lifePossibilityEvidence: 'Abundant evidence for past habitability 3.5-4.0 billion years ago: ancient lake beds, river channels, clay minerals, organic molecules preserved in mudstones, and subsurface water ice. Methane plumes in the atmosphere have been detected, though their biological vs serpentinization origin remains unconfirmed.',
    lifePossibilityAssessment: 'Past microbial life is plausible and under active investigation by sample return initiatives. Present surface life is rendered virtually impossible by ultraviolet radiation, perchlorates, and lack of liquid surface water.',
    interestingFacts: [
      'A Martian day is called a "sol" and lasts 24 hours, 39 minutes, and 35 seconds—just 39 minutes longer than an Earth day.',
      'Sunsets on Mars appear distinctly blue due to fine airborne dust particles scattering blue light in the forward direction.',
      'The atmospheric pressure is so low (6 mbar) that pure liquid water boils immediately at room temperature.',
      'Mars has two tiny, potato-shaped moons—Phobos and Deimos—likely captured asteroids from the main belt.'
    ],
    earthComparison: {
      sizeRatio: 0.532,
      massRatio: 0.107,
      gravityRatio: 0.379,
      distanceRatio: 1.524,
      yearRatio: 1.881
    },
    faqs: [
      { question: 'Where did Mars’s ancient water go?', answer: 'When Mars lost its global magnetic field 4 billion years ago, solar wind stripped away most of its atmosphere. Without atmospheric pressure, surface water either sublimated into space or froze underground as permanent permafrost and polar ice caps.' },
      { question: 'Can humans breathe the air on Mars?', answer: 'No. The Martian atmosphere is 95% carbon dioxide and possesses less than 1% of Earth’s surface pressure. An astronaut without a pressurized spacesuit would lose consciousness within 15 seconds from hypoxia and ebullism.' }
    ],
    colorHex: '#ef4444',
    accentColor: '#f97316',
    textureKey: 'mars',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA04304/PIA04304~orig.jpg'
  },
  {
    slug: 'jupiter',
    name: 'Jupiter',
    category: 'Gas Giant',
    orderFromSun: 5,
    tagline: 'The Colossal Sovereign of the Planets',
    overview: 'Jupiter is the largest planet in our Solar System, possessing more than twice the mass of all other planets combined. Composed predominantly of hydrogen and helium like a miniature star, it lacks a solid surface. Jupiter features dynamic multicolored cloud belts, the centuries-old Great Red Spot storm, an immense magnetic field, and a mini-solar system of 95 known moons.',
    discoveryHistory: 'Known since antiquity as one of the brightest objects in the night sky. In 1610, Galileo Galilei turned his telescope toward Jupiter and discovered its four largest moons (Io, Europa, Ganymede, Callisto), providing the first definitive proof that celestial bodies orbit objects other than Earth.',
    formationHistory: 'Formed 4.5 billion years ago as the first planet to accrete in the solar system. By rapidly capturing gas directly from the solar nebula before it dispersed, Jupiter grew to over 300 Earth masses, preventing planetesimals in the nearby asteroid belt from coalescing into a ninth major planet.',
    positionSummary: 'Fifth planet from the Sun, orbiting at an average distance of 778.5 million kilometers (5.204 AU).',
    meanRadiusKm: 69911.0,
    meanDiameterKm: 139822.0,
    massKg: '1.8982 × 10^27 kg',
    massEarthRelative: 317.8,
    gravityMps2: 24.79,
    gravityEarthRelative: 2.528,
    meanDistanceFromSunKm: 778570000,
    meanDistanceAu: 5.204,
    perihelionKm: 740520000,
    aphelionKm: 816620000,
    orbitalPeriodDays: 4332.59,
    orbitalPeriodYears: 11.862,
    orbitalVelocityKms: 13.07,
    orbitalInclinationDeg: 1.30,
    orbitalEccentricity: 0.0489,
    rotationPeriodHours: 9.925, // Fastest rotator of all planets
    rotationPeriodEarthDays: 0.414,
    dayLengthHours: 9.93,
    rotationDirection: 'Prograde',
    axialTiltDeg: 3.13,
    seasonsDescription: 'Negligible seasonal variation due to its slight 3.13° axial tilt. Its climate is driven primarily by internal heat radiating outward rather than solar insolation.',
    atmosphereComposition: [
      { gas: 'Molecular Hydrogen (H2)', percentage: 89.8 },
      { gas: 'Helium (He)', percentage: 10.2 },
      { gas: 'Methane (CH4)', percentage: 0.3 },
      { gas: 'Ammonia (NH3)', percentage: 0.026 },
      { gas: 'Hydrogen Deuteride (HD)', percentage: 0.003 },
      { gas: 'Water Vapor (H2O)', percentage: 0.0004 }
    ],
    surfacePressureBar: 1.0, // Defined at the 1 bar atmospheric level (no solid surface)
    meanTempC: -110,
    minTempC: -145,
    maxTempC: 24000, // Core boundary temperature estimated ~24,000°C
    tempMeasurementContext: 'Standard temperature reported at the 1 bar pressure altitude is approximately -110°C, increasing rapidly with depth toward thousands of degrees.',
    surfaceComposition: 'Fluid envelope with no distinct solid boundary. Transition smoothly from gaseous molecular hydrogen to supercritical fluid, then into metallic liquid hydrogen under millions of atmospheres of pressure.',
    geologyDescription: 'Hydrodynamic planetary fluid dynamics: alternating dark belts (sinking gas) and light zones (rising ammoniated clouds) bounded by powerful counter-rotating zonal jet streams reaching 600 km/h.',
    notableFeatures: [
      { name: 'Great Red Spot', description: 'Enormous anticyclonic vortex larger than Earth that has persisted for at least 350 years, with perimeter winds exceeding 430 km/h.', type: 'Anticyclonic Storm' },
      { name: 'Galilean Moons System', description: 'Four world-sized satellites: volcanically erupting Io, ocean-harboring Europa, giant magnetic Ganymede, and cratered Callisto.', type: 'Satellite System' },
      { name: 'Metallic Hydrogen Ocean', description: 'Deep layer where crushing pressures compress hydrogen electrons into an electrically conducting liquid metal.', type: 'Fluid Mantle' }
    ],
    moonCount: 95,
    confirmedMoons: 95,
    provisionalMoons: 0,
    hasRings: true,
    ringSystemDescription: 'Faint planar ring system discovered by Voyager 1 in 1979, composed of dust grains blasted off inner moons (Metis, Adrastea, Amalthea, Thebe) by micrometeoroid impacts.',
    magneticFieldDescription: 'The most powerful planetary magnetosphere in the Solar System—nearly 20,000 times stronger than Earth’s at its cloud tops, with a magnetic tail extending past the orbit of Saturn.',
    internalStructure: [
      { layer: 'Gaseous Atmosphere', depth: '0 - 1000 km', composition: 'Molecular hydrogen, helium, ammonia, and water clouds' },
      { layer: 'Liquid Hydrogen Fluid', depth: '1000 - 15000 km', composition: 'Supercritical liquid molecular hydrogen' },
      { layer: 'Liquid Metallic Hydrogen', depth: '15000 - 55000 km', composition: 'Electrically conducting metallic hydrogen' },
      { layer: 'Dilute Core', depth: '55000 - 69911 km', composition: 'Diffuse, partially dissolved core of heavy elements and silicates' }
    ],
    weatherPhenomena: 'Extreme lightning strikes 1,000 times more energetic than Earth’s; polar cyclones arranged in stable geometric polygons discovered by NASA Juno; supersonic jet stream turbulence.',
    explorationHistory: 'Visited by Pioneer 10 & 11, Voyager 1 & 2, Ulysses, New Horizons, Cassini; orbited by Galileo (1995-2003, dropped an atmospheric entry probe) and NASA Juno (2016-present). ESA JUICE launched in 2023 to explore its icy ocean moons.',
    majorMissions: ['pioneer-10', 'voyager-1', 'galileo', 'juno', 'juice'],
    lifePossibilityEvidence: 'Jupiter itself is considered uninhabitable due to intense radiation, scorching internal temperatures, and ferocious atmospheric churning. However, its icy moons Europa, Ganymede, and Callisto harbor vast subsurface oceans that represent top candidates for astrobiological exploration.',
    lifePossibilityAssessment: 'Planet interior uninhabitable; satellites Europa and Ganymede possess high habitability potential.',
    interestingFacts: [
      'Jupiter rotates in under 10 hours, creating centrifugal forces that make its equator bulge noticeably (oblate spheroid).',
      'If Jupiter had been about 80 times more massive, it would have initiated nuclear fusion and become a red dwarf star.',
      'The Great Red Spot is shrinking: in the late 19th century it was wide enough to fit three Earths; today it measures roughly 1.3 Earth diameters.',
      'Jupiter acts as a gravitational shield for the inner Solar System, deflecting and absorbing countless comets that might otherwise impact Earth.'
    ],
    earthComparison: {
      sizeRatio: 10.97,
      massRatio: 317.8,
      gravityRatio: 2.528,
      distanceRatio: 5.204,
      yearRatio: 11.862
    },
    faqs: [
      { question: 'Could a spacecraft land on Jupiter?', answer: 'No. There is no solid surface to touch down on. A probe descending into Jupiter would be subjected to increasing pressure and temperature until its metals melt and disintegrate into the superheated fluid mantle.' },
      { question: 'Why does Jupiter have colorful bands?', answer: 'The bands are caused by different chemical compounds: white zones consist of high-altitude clouds of frozen ammonia crystals, while darker brown and reddish belts contain ammonium hydrosulfide and photochemically altered phosphorus and sulfur compounds.' }
    ],
    colorHex: '#d97706',
    accentColor: '#f59e0b',
    textureKey: 'jupiter',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg'
  },
  {
    slug: 'saturn',
    name: 'Saturn',
    category: 'Gas Giant',
    orderFromSun: 6,
    tagline: 'The Ringed Jewel of the Solar System',
    overview: 'Saturn is the sixth planet from the Sun and the second largest in the Solar System. Known since ancient times, it is famous for its majestic and complex ring system composed of trillions of water ice fragments. Saturn is the only planet in the Solar System with an average density lower than that of liquid water.',
    discoveryHistory: 'Known since antiquity; named after the Roman agricultural titan Saturnus. Galileo observed strange "handles" or companions in 1610. Christiaan Huygens in 1655 correctly deduced they were an unattached flat ring, and discovered Saturn’s giant moon Titan.',
    formationHistory: 'Formed 4.5 billion years ago alongside Jupiter by runaway gas accretion from the primordial nebula. Its extraordinary ring system is geologically young (estimated at 10 to 100 million years old), likely created by the tidal destruction of an icy moon or comet that strayed within Saturn’s Roche limit.',
    positionSummary: 'Sixth planet from the Sun, orbiting at an average distance of 1.43 billion kilometers (9.58 AU).',
    meanRadiusKm: 58232.0,
    meanDiameterKm: 116464.0,
    massKg: '5.6834 × 10^26 kg',
    massEarthRelative: 95.16,
    gravityMps2: 10.44,
    gravityEarthRelative: 1.065,
    meanDistanceFromSunKm: 1433530000,
    meanDistanceAu: 9.582,
    perihelionKm: 1352550000,
    aphelionKm: 1514500000,
    orbitalPeriodDays: 10759.22,
    orbitalPeriodYears: 29.457,
    orbitalVelocityKms: 9.69,
    orbitalInclinationDeg: 2.49,
    orbitalEccentricity: 0.0565,
    rotationPeriodHours: 10.57, // ~10h 33m
    rotationPeriodEarthDays: 0.440,
    dayLengthHours: 10.57,
    rotationDirection: 'Prograde',
    axialTiltDeg: 26.73,
    seasonsDescription: 'Pronounced 29.5-year seasonal cycles driven by its 26.73° tilt. As Saturn orbits the Sun, the perspective of its rings shifts dramatically from our point of view, appearing edge-on (and nearly invisible) every 14.7 years.',
    atmosphereComposition: [
      { gas: 'Molecular Hydrogen (H2)', percentage: 96.3 },
      { gas: 'Helium (He)', percentage: 3.25 },
      { gas: 'Methane (CH4)', percentage: 0.45 },
      { gas: 'Ammonia (NH3)', percentage: 0.026 },
      { gas: 'Hydrogen Deuteride (HD)', percentage: 0.011 },
      { gas: 'Ethane (C2H6)', percentage: 0.0007 }
    ],
    surfacePressureBar: 1.0,
    meanTempC: -140,
    minTempC: -178,
    maxTempC: 11700,
    tempMeasurementContext: 'Standard 1 bar altitude cloud top temperature averages -140°C.',
    surfaceComposition: 'Fluid gas giant without a solid surface; smooth transition from upper hydrogen-helium atmosphere into supercritical fluids and metallic hydrogen under immense pressure.',
    geologyDescription: 'Dynamic atmospheric meteorology featuring subdued banded structures muted by high-altitude haze. North pole hosts a unique, permanent hexagonal jet stream pattern spanning 30,000 kilometers.',
    notableFeatures: [
      { name: 'The Ring System', description: 'Extending up to 282,000 km from the planet but averaging only 10 to 30 meters in thickness; composed of 99% pure water ice particles from pebble to house size.', type: 'Planetary Ring System' },
      { name: 'North Polar Hexagon', description: 'A persistent six-sided jet stream wave pattern at 78°N with wind speeds over 320 km/h, large enough to contain four Earths.', type: 'Atmospheric Jet Stream' },
      { name: 'Titan', description: 'Second largest moon in the Solar System, possessing a dense nitrogen atmosphere and liquid methane/ethane lakes.', type: 'Major Moon' }
    ],
    moonCount: 146,
    confirmedMoons: 146,
    provisionalMoons: 0,
    hasRings: true,
    ringSystemDescription: 'The most extensive ring system in the Solar System, divided into main rings A, B, C, and fainter D, E, F, G rings, sculpted by shepherd moons like Prometheus and Pandora.',
    magneticFieldDescription: 'Possesses a strong dipolar magnetic field, uniquely aligned almost perfectly with its rotational axis (deviation < 0.005°), an anomaly that puzzles geophysicists modeling dynamos.',
    internalStructure: [
      { layer: 'Outer Atmosphere', depth: '0 - 1000 km', composition: 'Hydrogen and helium gas with ammonia ice haze' },
      { layer: 'Liquid Hydrogen Layer', depth: '1000 - 30000 km', composition: 'Supercritical liquid hydrogen experiencing helium rain' },
      { layer: 'Liquid Metallic Hydrogen', depth: '30000 - 45000 km', composition: 'Electrically conductive liquid metallic hydrogen' },
      { layer: 'Dense Core', depth: '45000 - 58232 km', composition: 'Rock, metal, and ice core ~9 to 22 times Earth mass' }
    ],
    weatherPhenomena: 'Supersonic equatorial jet streams exceeding 1,800 km/h; periodic Great White Spots (convective superstorms) erupting approximately every 30 Earth years; massive lightning storms detected by Cassini.',
    explorationHistory: 'Explored by Pioneer 11 (1979), Voyager 1 (1980), Voyager 2 (1981). The flagship NASA/ESA/ASI Cassini-Huygens mission orbited Saturn from 2004 to 2017, soft-landing the Huygens probe on Titan in 2005 and discovering Enceladus’s water plumes.',
    majorMissions: ['pioneer-11', 'voyager-1', 'voyager-2', 'cassini-huygens'],
    lifePossibilityEvidence: 'Saturn itself is uninhabitable. However, its icy moon Enceladus harbors a global subsurface saltwater ocean with hydrothermal vents and organic molecules, while Titan possesses abundant prebiotic organic chemistry.',
    lifePossibilityAssessment: 'Planet body uninhabitable; moons Enceladus and Titan rank among the highest astrobiological priorities.',
    interestingFacts: [
      'Saturn has an average density of 0.687 g/cm³—if you could build a bathtub large enough to hold it, Saturn would float in water!',
      'Saturn’s rings are disappearing: Cassini measurements show "ring rain" of water ice draining into the planet’s upper atmosphere at a rate that could destroy the rings in 100-300 million years.',
      'Saturn has 146 officially recognized moons, making it the moon king of the Solar System.',
      'The Cassini Division is a 4,800 km wide gap in the rings caused by orbital resonance with the moon Mimas.'
    ],
    earthComparison: {
      sizeRatio: 9.14,
      massRatio: 95.2,
      gravityRatio: 1.065,
      distanceRatio: 9.58,
      yearRatio: 29.457
    },
    faqs: [
      { question: 'How thick are Saturn’s rings?', answer: 'Remarkably thin! While they span across 282,000 kilometers, their vertical thickness averages only about 10 to 30 meters—thinner relative to their diameter than a razor blade.' },
      { question: 'What causes the hexagonal storm at Saturn’s north pole?', answer: 'Laboratory fluid dynamic experiments show that when an atmospheric jet stream flows at a specific speed relative to surrounding turbulence, it naturally forms stable geometric polygons; on Saturn, a six-sided standing wave formed.' }
    ],
    colorHex: '#fcd34d',
    accentColor: '#fbbf24',
    textureKey: 'saturn',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg'
  },
  {
    slug: 'uranus',
    name: 'Uranus',
    category: 'Ice Giant',
    orderFromSun: 7,
    tagline: 'The Tilted Cyan Ice Giant',
    overview: 'Uranus is the seventh planet from the Sun, an ice giant with a pale cyan-blue appearance created by atmospheric methane. Its most dramatic characteristic is an extreme axial tilt of 97.8°, causing it to rotate virtually on its side. Uranus possesses the coldest planetary atmosphere in the Solar System, faint rings, and 28 known moons.',
    discoveryHistory: 'The first planet discovered in modern history using a telescope. Discovered on March 13, 1781, by British astronomer William Herschel from his garden in Bath, England. Herschel initially thought it was a comet or nebula before its planetary orbit was calculated.',
    formationHistory: 'Formed ~4.5 billion years ago. Uranus and Neptune accreted slowly in the outer solar system, capturing smaller amounts of hydrogen and helium than Jupiter and Saturn, instead incorporating massive amounts of water, ammonia, and methane ices. A giant collision during late planetary migration likely knocked Uranus on its side.',
    positionSummary: 'Seventh planet from the Sun, orbiting at an average distance of 2.87 billion kilometers (19.2 AU).',
    meanRadiusKm: 25362.0,
    meanDiameterKm: 50724.0,
    massKg: '8.6810 × 10^25 kg',
    massEarthRelative: 14.54,
    gravityMps2: 8.69,
    gravityEarthRelative: 0.886,
    meanDistanceFromSunKm: 2870972000,
    meanDistanceAu: 19.191,
    perihelionKm: 2741300000,
    aphelionKm: 3003620000,
    orbitalPeriodDays: 30685.4,
    orbitalPeriodYears: 84.017,
    orbitalVelocityKms: 6.80,
    orbitalInclinationDeg: 0.77,
    orbitalEccentricity: 0.0472,
    rotationPeriodHours: -17.24, // Retrograde
    rotationPeriodEarthDays: -0.718,
    dayLengthHours: 17.24,
    rotationDirection: 'Retrograde',
    axialTiltDeg: 97.77, // Rotates on its side
    seasonsDescription: 'The most extreme seasons in the Solar System. With a 97.8° axial tilt, each pole points almost directly at the Sun for 42 years of continuous daylight, followed by 42 years of unbroken polar night.',
    atmosphereComposition: [
      { gas: 'Molecular Hydrogen (H2)', percentage: 82.5 },
      { gas: 'Helium (He)', percentage: 15.2 },
      { gas: 'Methane (CH4)', percentage: 2.3 },
      { gas: 'Hydrogen Deuteride (HD)', percentage: 0.015 },
      { gas: 'Ammonia, Water Ice', percentage: 0.005 }
    ],
    surfacePressureBar: 1.0,
    meanTempC: -195,
    minTempC: -224, // Coldest planetary atmosphere recorded
    maxTempC: 4700,
    tempMeasurementContext: 'Upper atmospheric minimum reaches -224°C (49 K), making Uranus colder than Neptune despite being closer to the Sun.',
    surfaceComposition: 'No solid surface. Composed primarily of a hot, dense supercritical "slush" of water, ammonia, and methane ices over a small rocky silicate core.',
    geologyDescription: 'Featureless pale cyan haze in visible light, though infrared observations with Hubble and Keck reveal dynamic storm bands, methane clouds, and auroras during equinoxes.',
    notableFeatures: [
      { name: 'Extreme 98° Axial Obliquity', description: 'Rotates perpendicular to the ecliptic plane, likely the consequence of a giant impact with an Earth-sized protoplanet.', type: 'Planetary Tilt' },
      { name: 'Miranda’s Chaotic Terrain', description: 'Innermost large moon featuring Verona Rupes (tallest cliff in the solar system, 20 km high) and scrambled chevron geological puzzle pieces.', type: 'Fractured Satellite' },
      { name: 'Complex Off-Center Magnetic Field', description: 'Magnetic axis tilted 59° from rotational axis and offset from the center of the planet by a third of its radius.', type: 'Asymmetric Magnetosphere' }
    ],
    moonCount: 28,
    confirmedMoons: 28,
    provisionalMoons: 0,
    hasRings: true,
    ringSystemDescription: '13 distinct, narrow, extremely dark rings composed of boulder-sized charcoal-black particles up to several meters wide.',
    magneticFieldDescription: 'Highly asymmetrical and tilted 59° from its rotation axis. Generated not by a metallic core, but by circulating currents in an electrically conducting ionic water-ammonia mantle.',
    internalStructure: [
      { layer: 'Upper Atmosphere', depth: '0 - 1000 km', composition: 'Hydrogen, helium, and methane gas clouds' },
      { layer: 'Supercritical Icy Mantle', depth: '1000 - 20000 km', composition: 'Hot, compressed ionic water, methane, and ammonia fluid' },
      { layer: 'Rocky Silicate Core', depth: '20000 - 25362 km', composition: 'Iron-nickel and silicate minerals (~0.55 Earth masses)' }
    ],
    weatherPhenomena: 'Methane cirrus clouds traveling at speeds up to 900 km/h; seasonal storm outbursts that intensify as the planet approaches equinox and sunlight hits equatorial regions.',
    explorationHistory: 'Visited only once by a robotic spacecraft: NASA Voyager 2 made a historic flyby on January 24, 1986, discovering 10 new moons, 2 rings, and its bizarre magnetic field. Designated by the 2023-2032 Planetary Decadal Survey as the highest priority flagship mission target (Uranus Orbiter and Probe).',
    majorMissions: ['voyager-2'],
    lifePossibilityEvidence: 'Uninhabitable. Crushing pressures, cryogenic temperatures, and lack of a stable thermodynamic disequilibrium environment preclude known biological chemistry.',
    lifePossibilityAssessment: 'Completely uninhabitable.',
    interestingFacts: [
      'Uranus was originally named "Georgium Sidus" (George’s Star) by William Herschel to honor King George III of England before the international astronomical community adopted Uranus.',
      'Unlike Jupiter and Saturn, Uranus emits very little excess heat beyond what it absorbs from the Sun, explaining its unexpectedly freezing temperatures.',
      'All of Uranus’s moons are named after characters from the works of William Shakespeare and Alexander Pope, rather than Greco-Roman mythology.',
      'Because of its sideways tilt, the seasons on Uranus last 21 Earth years each.'
    ],
    earthComparison: {
      sizeRatio: 4.01,
      massRatio: 14.5,
      gravityRatio: 0.886,
      distanceRatio: 19.2,
      yearRatio: 84.017
    },
    faqs: [
      { question: 'Why is Uranus blue-green?', answer: 'Methane in the upper atmosphere absorbs red light from the Sun while scattering blue and green wavelengths back into space.' },
      { question: 'Why does Uranus emit almost no internal heat?', answer: 'Scientists hypothesize that a giant impact or internal thermal stratification layer trapped heat inside its core, preventing it from convecting to the upper atmosphere.' }
    ],
    colorHex: '#22d3ee',
    accentColor: '#38bdf8',
    textureKey: 'uranus',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg'
  },
  {
    slug: 'neptune',
    name: 'Neptune',
    category: 'Ice Giant',
    orderFromSun: 8,
    tagline: 'The Supersonic Blue Ice Giant',
    overview: 'Neptune is the eighth and most distant major planet from the Sun. An ice giant clad in vivid cobalt-blue methane clouds, Neptune endures the most ferocious supersonic winds in the Solar System, clocking up to 2,100 km/h. It possesses 16 known moons, highlighted by Triton—a captured Kuiper Belt world erupting with nitrogen cryogeysers.',
    discoveryHistory: 'The only planet discovered through mathematical prediction rather than empirical observation. French mathematician Urbain Le Verrier and English astronomer John Couch Adams calculated its position based on unexplained gravitational perturbations in Uranus’s orbit. German astronomer Johann Gottfried Galle pointed his telescope and located Neptune within 1° of Le Verrier’s coordinates on September 23, 1846.',
    formationHistory: 'Formed 4.5 billion years ago. Formed closer to the Sun in the Nice model of planetary migration before gravitational interactions with Jupiter and Saturn propelled Neptune outward into the Kuiper Belt, scattering millions of icy planetesimals into the Oort Cloud and capturing Triton.',
    positionSummary: 'Outermost recognized major planet, orbiting at an average distance of 4.50 billion kilometers (30.07 AU) from the Sun.',
    meanRadiusKm: 24622.0,
    meanDiameterKm: 49244.0,
    massKg: '1.0241 × 10^26 kg',
    massEarthRelative: 17.15,
    gravityMps2: 11.15,
    gravityEarthRelative: 1.137,
    meanDistanceFromSunKm: 4498252900,
    meanDistanceAu: 30.069,
    perihelionKm: 4459630000,
    aphelionKm: 4536870000,
    orbitalPeriodDays: 60190.0,
    orbitalPeriodYears: 164.79,
    orbitalVelocityKms: 5.43,
    orbitalInclinationDeg: 1.77,
    orbitalEccentricity: 0.0086,
    rotationPeriodHours: 16.11,
    rotationPeriodEarthDays: 0.671,
    dayLengthHours: 16.11,
    rotationDirection: 'Prograde',
    axialTiltDeg: 28.32,
    seasonsDescription: 'Similar axial tilt to Earth (28.32°), producing seasonal cycles that each last over 40 Earth years as Neptune takes nearly 165 years to complete one orbit around the Sun.',
    atmosphereComposition: [
      { gas: 'Molecular Hydrogen (H2)', percentage: 80.0 },
      { gas: 'Helium (He)', percentage: 19.0 },
      { gas: 'Methane (CH4)', percentage: 1.5 },
      { gas: 'Hydrogen Deuteride (HD)', percentage: 0.019 },
      { gas: 'Ethane, Ice Aerosols', percentage: 0.001 }
    ],
    surfacePressureBar: 1.0,
    meanTempC: -201,
    minTempC: -218,
    maxTempC: 7000,
    tempMeasurementContext: 'Standard 1 bar cloud level temperature is -201°C, but unlike Uranus, Neptune radiates 2.61 times more heat than it receives from the distant Sun.',
    surfaceComposition: 'Fluid ice giant with no solid surface; supercritical mantle of compressed water, ammonia, and methane ices over a dense silicate/iron core.',
    geologyDescription: 'Highly active and dynamic meteorology characterized by dark anticyclonic storms (e.g., Great Dark Spot), bright high-altitude white methane cirrus clouds (called "Scooter"), and powerful zonal winds.',
    notableFeatures: [
      { name: 'Supersonic Winds', description: 'Fastest sustained planetary winds in the Solar System, reaching speeds of up to 2,100 km/h (nearly Mach 1.7 on Earth).', type: 'Atmospheric Winds' },
      { name: 'Triton (Captured Kuiper Belt Moon)', description: 'Largest satellite, orbiting backward (retrograde); features active cryovolcanic geysers erupting liquid nitrogen and nitrogen frost.', type: 'Cryovolcanic Moon' },
      { name: 'The Great Dark Spot', description: 'Earth-sized storm observed by Voyager 2 in 1989; unlike Jupiter’s persistent Red Spot, Neptune’s dark storms appear, migrate, and vanish over years.', type: 'Transient Anticyclone' }
    ],
    moonCount: 16,
    confirmedMoons: 16,
    provisionalMoons: 0,
    hasRings: true,
    ringSystemDescription: 'Five faint rings (Galle, Le Verrier, Lassell, Arago, Adams) containing peculiar clumped "arcs" of dense dust named Courage, Liberté, Egalité, and Fraternité.',
    magneticFieldDescription: 'Tilted 47° from its rotational axis and displaced from the physical planetary center by 13,500 km, generated by convective dynamo action in an icy conducting mantle.',
    internalStructure: [
      { layer: 'Upper Atmosphere', depth: '0 - 1000 km', composition: 'Hydrogen, helium, and methane gas with high cirrus clouds' },
      { layer: 'Supercritical Icy Mantle', depth: '1000 - 19000 km', composition: 'Vast ocean of water, ammonia, and methane fluid; diamond rain may occur here' },
      { layer: 'Silicate Iron Core', depth: '19000 - 24622 km', composition: 'Rocky iron, nickel, and silicate core ~1.2 Earth masses' }
    ],
    weatherPhenomena: 'Violent supersonic storms, high-altitude methane ice streaks casting shadows onto the lower deck 50 km below, and rapidly evolving dark vortex storms.',
    explorationHistory: 'Visited solely by NASA Voyager 2 on August 25, 1989, which flew within 4,950 kilometers of Neptune’s north pole before observing Triton.',
    majorMissions: ['voyager-2'],
    lifePossibilityEvidence: 'Planet itself is uninhabitable. However, its retrograde moon Triton may harbor a warm, ammonia-rich subsurface ocean beneath its cryovolcanic crust.',
    lifePossibilityAssessment: 'Planet uninhabitable; moon Triton has speculative cryobiological potential.',
    interestingFacts: [
      'In 2011, Neptune completed its very first full 165-year orbit since its mathematical discovery in 1846.',
      'At Neptune’s immense depths, theoretical physics and laboratory laser experiments indicate that extreme pressures split methane molecules, causing carbon to crystallize and precipitate as literal "diamond rain".',
      'Neptune receives 900 times less solar energy than Earth, yet generates the fastest winds anywhere in the Solar System.',
      'Triton is slowly spiraling closer to Neptune and will be torn apart into a massive planetary ring in ~3.6 billion years.'
    ],
    earthComparison: {
      sizeRatio: 3.88,
      massRatio: 17.15,
      gravityRatio: 1.137,
      distanceRatio: 30.07,
      yearRatio: 164.79
    },
    faqs: [
      { question: 'Why is Neptune a more vivid blue than Uranus?', answer: 'Both planets contain atmospheric methane which absorbs red light, but Neptune’s atmosphere has a thinner photochemical haze layer and potentially an additional unidentified atmospheric component that amplifies its deeper azure hue.' },
      { question: 'How can Neptune generate such fast winds with so little sunlight?', answer: 'Surprisingly, the lack of solar heating reduces frictional turbulence and atmospheric drag, allowing deep internal heat to drive smooth, ultra-fast jet streams without chaotic interference.' }
    ],
    colorHex: '#3b82f6',
    accentColor: '#60a5fa',
    textureKey: 'neptune',
    heroImageUrl: 'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg'
  }
];

export const celestialObjectsData = [
  // Dwarf Planets
  {
    slug: 'pluto',
    name: 'Pluto',
    category: 'dwarf_planet',
    parentBody: 'Sun',
    diameterKm: 2376.6,
    massKg: '1.303 × 10^22 kg',
    gravityMps2: 0.62,
    meanDistanceKm: 5906380000,
    meanDistanceAu: 39.48,
    orbitalPeriodDays: 90560,
    discoveryYear: 1930,
    discoveredBy: 'Clyde Tombaugh',
    overview: 'Pluto is the largest and most famous dwarf planet in the Kuiper Belt. Discovered in 1930 and classified as the ninth planet for 76 years, Pluto was reclassified as a dwarf planet by the International Astronomical Union (IAU) in 2006. In 2015, NASA’s New Horizons flyby revealed a startlingly active world featuring a vast heart-shaped nitrogen glacier, water-ice mountains, and blue atmospheric haze.',
    geology: 'Surprising geological youth: Sputnik Planitia is a 1,000 km nitrogen-methane ice sheet free of impact craters, undergoing continuous convective overturn. Water-ice mountain peaks tower 3 to 4 km above surrounding cryogenic plains.',
    atmosphere: 'Tenuous seasonal atmosphere of nitrogen (N2), methane (CH4), and carbon monoxide (CO), extending hundreds of kilometers into space with complex hydrocarbon haze layers.',
    exploration: 'Explored during the historic flyby of NASA New Horizons on July 14, 2015, which came within 12,500 km of the surface.',
    scientificSignificance: 'Revealed that cryogenic small worlds at the solar system’s edge can maintain active geology, cryovolcanism, and likely a subsurface liquid water ocean insulated by gas hydrates.',
    isDwarfPlanetIauExplained: true,
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg',
    facts: [
      'Pluto and its largest moon, Charon, form a binary planetary system: they are tidally locked face-to-face and orbit a shared center of mass (barycenter) located outside Pluto’s surface.',
      'Pluto’s heart-shaped feature is named Tombaugh Regio in honor of its discoverer Clyde Tombaugh.',
      'Pluto has five known moons: Charon, Styx, Nix, Kerberos, and Hydra.',
      'Why Pluto is a dwarf planet: The 2006 IAU resolution defined a planet as a body that (1) orbits the Sun, (2) has sufficient mass for hydrostatic equilibrium (nearly round), and (3) has cleared its orbital neighborhood. Pluto meets criteria 1 and 2, but shares its Kuiper Belt orbit with thousands of other icy bodies.'
    ],
    sources: [
      { name: 'NASA New Horizons Mission', url: 'https://science.nasa.gov/mission/new-horizons/' },
      { name: 'IAU Pluto Resolution 2006', url: 'https://www.iau.org/news/pressreleases/detail/iau0603/' }
    ]
  },
  {
    slug: 'ceres',
    name: 'Ceres',
    category: 'dwarf_planet',
    parentBody: 'Sun',
    diameterKm: 939.4,
    massKg: '9.393 × 10^20 kg',
    gravityMps2: 0.28,
    meanDistanceKm: 413700000,
    meanDistanceAu: 2.767,
    orbitalPeriodDays: 1682,
    discoveryYear: 1801,
    discoveredBy: 'Giuseppe Piazzi',
    overview: 'Ceres is the largest object in the main asteroid belt between Mars and Jupiter, comprising approximately one-third of the belt’s total mass. Originally classified as a planet upon discovery, then an asteroid for over a century, it was designated a dwarf planet in 2006. NASA’s Dawn mission revealed bright sodium carbonate salt deposits in Occator Crater and the Ahuna Mons cryovolcano.',
    geology: 'Differentiated body with a rocky core and an icy mantle. Displays cryovolcanism where briny mud and salts from a relict subsurface reservoir erupt onto the surface.',
    atmosphere: 'Transient, extremely tenuous water vapor exosphere produced when solar radiation sublimates surface water frost.',
    exploration: 'Orbited and mapped in extraordinary detail by NASA Dawn spacecraft from 2015 to 2018.',
    scientificSignificance: 'The only dwarf planet in the inner Solar System, representing a water-rich relict protoplanet that survived the planetary accretion epoch.',
    isDwarfPlanetIauExplained: true,
    imageUrl: 'https://images-assets.nasa.gov/image/PIA21906/PIA21906~orig.jpg',
    facts: [
      'Ceres contains more water than all the freshwater lakes and rivers on Earth combined.',
      'Ahuna Mons is a 4,000-meter-tall dome formed by cryovolcanic extrusion of sodium carbonate-rich brines.',
      'Ceres was the first asteroid ever discovered, spotted on New Year’s Day 1801.'
    ],
    sources: [
      { name: 'NASA Dawn Mission', url: 'https://science.nasa.gov/mission/dawn/' }
    ]
  },
  {
    slug: 'eris',
    name: 'Eris',
    category: 'dwarf_planet',
    parentBody: 'Sun',
    diameterKm: 2326.0,
    massKg: '1.66 × 10^22 kg',
    gravityMps2: 0.82,
    meanDistanceKm: 10123000000,
    meanDistanceAu: 67.78,
    orbitalPeriodDays: 203830,
    discoveryYear: 2005,
    discoveredBy: 'Mike Brown, Chad Trujillo, David Rabinowitz',
    overview: 'Eris is one of the most massive known dwarf planets in the Solar System, located in the distant scattered disc. Although slightly smaller in diameter than Pluto (2,326 km vs 2,376 km), Eris is 27% more massive, having a significantly higher density. Its discovery in 2005 directly triggered the IAU debate that formalized the definition of planets and dwarf planets.',
    geology: 'Covered in a uniform, highly reflective frost of pure methane and nitrogen ice, giving it an exceptionally high albedo (0.96), almost as bright as fresh snow.',
    atmosphere: 'Currently frozen onto its surface; when its 558-year orbit approaches perihelion (37.8 AU), sublimating methane forms a thin atmosphere.',
    exploration: 'Observed via Keck Observatory, Hubble Space Telescope, and stellar occultations; no spacecraft has yet visited Eris.',
    scientificSignificance: 'Its discovery demonstrated that Pluto is merely one of many large icy worlds in the outer realm, establishing the scattered disc population.',
    isDwarfPlanetIauExplained: true,
    imageUrl: 'https://images-assets.nasa.gov/image/PIA03034/PIA03034~orig.jpg',
    facts: [
      'Eris is accompanied by a small moon named Dysnomia, the mythological daughter of the Greek goddess Eris.',
      'Because Eris was initially reported as larger than Pluto, media dubbed it the "tenth planet" before the IAU 2006 reclassification.',
      'One orbit of Eris takes roughly 558 Earth years.'
    ],
    sources: [
      { name: 'IAU Minor Planet Center', url: 'https://www.minorplanetcenter.net/' }
    ]
  },
  {
    slug: 'haumea',
    name: 'Haumea',
    category: 'dwarf_planet',
    parentBody: 'Sun',
    diameterKm: 1560.0,
    massKg: '4.01 × 10^21 kg',
    gravityMps2: 0.40,
    meanDistanceKm: 6452000000,
    meanDistanceAu: 43.13,
    orbitalPeriodDays: 103774,
    discoveryYear: 2004,
    discoveredBy: 'Caltech / Sierra Nevada Observatory',
    overview: 'Haumea is a bizarre, rugby-ball-shaped dwarf planet in the Kuiper Belt. It spins extraordinarily fast—completing a rotation in just 3.9 hours—which has stretched it into a triaxial ellipsoid. In 2017, a stellar occultation revealed that Haumea possesses a ring system, making it the first trans-Neptunian object known to have rings.',
    geology: 'Crystalline water ice surface maintained by tidal flexing or radiogenic decay; high density indicates a large rocky core with a thin icy mantle.',
    atmosphere: 'Negligible detected atmosphere.',
    exploration: 'Monitored with ground-based telescopes and stellar occultation campaigns.',
    scientificSignificance: 'Exhibits the fastest rotation of any known large equilibrium body in the Solar System and possesses its own collisional family of icy fragments.',
    isDwarfPlanetIauExplained: true,
    imageUrl: 'https://images-assets.nasa.gov/image/PIA13518/PIA13518~orig.jpg',
    facts: [
      'Haumea is named after the Hawaiian goddess of fertility and childbirth.',
      'It has two known moons: Hiʻiaka and Namaka.',
      'Its ring has a radius of about 2,287 km and a width of 70 km.'
    ],
    sources: [
      { name: 'Nature - Haumea Ring Discovery', url: 'https://www.nature.com/articles/nature24051' }
    ]
  },
  {
    slug: 'makemake',
    name: 'Makemake',
    category: 'dwarf_planet',
    parentBody: 'Sun',
    diameterKm: 1430.0,
    massKg: '3.1 × 10^21 kg',
    gravityMps2: 0.50,
    meanDistanceKm: 6850000000,
    meanDistanceAu: 45.79,
    orbitalPeriodDays: 111800,
    discoveryYear: 2005,
    discoveredBy: 'Mike Brown and team',
    overview: 'Makemake is the second-brightest Kuiper Belt object after Pluto. It has a reddish-brown color caused by tholins (complex organic molecules created by solar ultraviolet irradiation of methane and ethane). Named after the creator god of the Rapa Nui people of Easter Island.',
    geology: 'Methane and ethane ice-dominated surface with grains up to 1 cm across, indicating pristine cryogenic composition.',
    atmosphere: 'Transient methane atmosphere possible near perihelion; stellar occultations show no global sustained atmosphere today.',
    exploration: 'Observed by Hubble Space Telescope and Spitzer.',
    scientificSignificance: 'Key member of the classical Kuiper Belt ("cubewanos") in non-resonant orbits.',
    isDwarfPlanetIauExplained: true,
    imageUrl: 'https://images-assets.nasa.gov/image/PIA20593/PIA20593~orig.jpg',
    facts: [
      'In 2016, the Hubble Space Telescope discovered a dark moon orbiting Makemake, provisionally nicknamed MK2.',
      'Takes 306 Earth years to complete one orbit around the Sun.'
    ],
    sources: [
      { name: 'NASA Solar System Exploration - Makemake', url: 'https://science.nasa.gov/dwarf-planets/makemake/' }
    ]
  },

  // Major Natural Satellites
  {
    slug: 'moon',
    name: 'The Moon (Luna)',
    category: 'moon',
    parentBody: 'Earth',
    diameterKm: 3474.8,
    massKg: '7.342 × 10^22 kg',
    gravityMps2: 1.62,
    meanDistanceKm: 384400,
    orbitalPeriodDays: 27.32,
    discoveryYear: 0,
    discoveredBy: 'Prehistoric humans',
    overview: 'Earth’s only natural satellite, the fifth largest moon in the Solar System. Tidally locked in synchronous rotation, it always presents the same hemisphere to Earth. Its surface is divided between dark basaltic volcanic plains (maria) and heavily cratered, bright anorthositic highlands. The Moon is the only extraterrestrial body visited by humans.',
    geology: 'Impact craters, volcanic maria formed by ancient basaltic lava flooding, lava tubes, and anorthositic highlands formed from a primordial magma ocean.',
    atmosphere: 'Ultra-tenuous exosphere containing argon, helium, sodium, and potassium with surface pressure of ~3 × 10^-15 bar.',
    exploration: 'Explored by Luna, Surveyor, Apollo (12 astronauts walked on the surface 1969-1972 returning 382 kg of lunar rocks), Lunar Reconnaissance Orbiter, Chang’e series, and the ongoing Artemis program.',
    scientificSignificance: 'Crucial chronicle of the early impact history of the inner solar system; stabilizes Earth’s 23.5° axial tilt, ensuring climatic stability essential for evolutionary biology.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00405/PIA00405~orig.jpg',
    facts: [
      'The Moon is slowly drifting away from Earth at a rate of 3.8 centimeters per year due to tidal friction.',
      'Permanently shadowed polar craters contain estimated billions of tons of water ice, targeted for extraction by Artemis missions.',
      'The Moon’s gravity causes two high tides and two low tides on Earth each day.'
    ],
    sources: [
      { name: 'NASA Moon Exploration', url: 'https://science.nasa.gov/moon/' }
    ]
  },
  {
    slug: 'europa',
    name: 'Europa',
    category: 'moon',
    parentBody: 'Jupiter',
    diameterKm: 3121.6,
    massKg: '4.8 × 10^22 kg',
    gravityMps2: 1.315,
    meanDistanceKm: 670900,
    orbitalPeriodDays: 3.55,
    discoveryYear: 1610,
    discoveredBy: 'Galileo Galilei',
    overview: 'Europa is the sixth-closest moon of Jupiter and the smallest of the four Galilean satellites. Beneath its fractured surface of pure water ice lies a global saltwater ocean estimated at 60 to 150 km deep, containing more liquid water than all of Earth’s oceans combined. Warmed by tidal flexing from Jupiter, Europa is widely regarded as the prime candidate for extraterrestrial habitability in the Solar System.',
    geology: 'Crisscrossed by reddish linear fractures called lineae, chaos terrains of disrupted ice rafts, and cycloidal ridge arcs. Remarkably few impact craters indicate a surface younger than 50 million years.',
    atmosphere: 'Tenuous oxygen exosphere generated by solar ultraviolet radiolysis of water ice molecules.',
    exploration: 'Observed by Pioneer, Voyager, Galileo (1995-2003), New Horizons, Juno. NASA’s Europa Clipper mission launched in October 2024 to determine habitability.',
    scientificSignificance: 'Direct contact between a subsurface liquid ocean and a rocky silicated mantle provides geothermal chemical gradients (hydrothermal vents) suitable for chemoautotrophic life.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19048/PIA19048~orig.jpg',
    facts: [
      'Europa’s ocean may hold twice as much liquid water as Earth’s global ocean.',
      'Hubble Space Telescope observations have detected intermittent water vapor plumes erupting 160 km into space.',
      'The reddish-brown material along surface fractures contains magnesium sulfate salts and irradiated sulfur compounds.'
    ],
    sources: [
      { name: 'NASA Europa Clipper Mission', url: 'https://science.nasa.gov/mission/europa-clipper/' }
    ]
  },
  {
    slug: 'ganymede',
    name: 'Ganymede',
    category: 'moon',
    parentBody: 'Jupiter',
    diameterKm: 5268.2,
    massKg: '1.4819 × 10^23 kg',
    gravityMps2: 1.428,
    meanDistanceKm: 1070400,
    orbitalPeriodDays: 7.15,
    discoveryYear: 1610,
    discoveredBy: 'Galileo Galilei',
    overview: 'Ganymede is the largest moon in the Solar System, surpassing both Mercury and Pluto in size (and only slightly smaller than Mars). It is the only known moon with its own internally generated dipolar magnetic field. Ganymede harbors a multi-layered subsurface ocean sandwiched between high-pressure phases of ice.',
    geology: 'Dual terrain: dark, ancient, heavily cratered regions (Galileo Regio) covering one-third of the surface, and lighter, younger grooved terrain cut by tectonic rifts and faults.',
    atmosphere: 'Very thin exosphere of oxygen produced by radiolytic dissociation of water ice.',
    exploration: 'Explored by Voyager, Galileo, New Horizons, Juno; primary target of ESA’s JUICE (Jupiter Icy Moons Explorer) spacecraft entering orbit in 2034.',
    scientificSignificance: 'Demonstrates liquid core dynamo physics in a moon; exhibits complex interactions between its intrinsic magnetosphere and Jupiter’s giant magnetic field.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00716/PIA00716~orig.jpg',
    facts: [
      'Ganymede has a diameter of 5,268 km, 8% larger than Mercury.',
      'Its aurorae wobble in response to Jupiter’s magnetic field, an observation Hubble used to confirm its underground saltwater ocean.',
      'If Ganymede orbited the Sun instead of Jupiter, it would easily be classified as a major planet.'
    ],
    sources: [
      { name: 'ESA JUICE Mission', url: 'https://www.esa.int/Science_Exploration/Space_Science/Juice' }
    ]
  },
  {
    slug: 'io',
    name: 'Io',
    category: 'moon',
    parentBody: 'Jupiter',
    diameterKm: 3643.2,
    massKg: '8.93 × 10^22 kg',
    gravityMps2: 1.796,
    meanDistanceKm: 421700,
    orbitalPeriodDays: 1.77,
    discoveryYear: 1610,
    discoveredBy: 'Galileo Galilei',
    overview: 'Io is the innermost Galilean moon of Jupiter and the most volcanically active body in the Solar System. Locked in an orbital resonance with Europa and Ganymede, Io is constantly squeezed by immense tidal forces, producing internal frictional heat that drives over 400 active volcanoes erupting sulfur and silicate lava hundreds of kilometers into space.',
    geology: 'Surreal landscape of molten sulfur lakes, volcanic calderas (paterae), towering non-volcanic silicate mountains taller than Everest, and fresh lava flows. Virtually devoid of impact craters.',
    atmosphere: 'Tenuous atmosphere dominated by sulfur dioxide (SO2), which collapses and freezes onto the ground as frost when Io enters Jupiter’s shadow.',
    exploration: 'Mapped by Voyager 1 (which discovered active volcanism in 1979), Galileo, New Horizons, and NASA Juno.',
    scientificSignificance: 'Extreme case study of tidal dissipation physics; supplies one ton of ionized sulfur and oxygen per second into Jupiter’s magnetospheric plasma torus.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00583/PIA00583~orig.jpg',
    facts: [
      'Io’s volcanic plumes, such as Pele and Tvashtar, shoot sulfur gas and dust up to 500 kilometers above the surface.',
      'The moon’s mottled yellow, red, orange, and black coloration is caused by allotropes of sulfur and silicate compounds.',
      'Io generates an electrical current of roughly 3 million amperes along magnetic flux tubes connecting it directly to Jupiter’s upper atmosphere.'
    ],
    sources: [
      { name: 'NASA Solar System - Io', url: 'https://science.nasa.gov/jupiter/moons/io/' }
    ]
  },
  {
    slug: 'callisto',
    name: 'Callisto',
    category: 'moon',
    parentBody: 'Jupiter',
    diameterKm: 4820.6,
    massKg: '1.076 × 10^23 kg',
    gravityMps2: 1.235,
    meanDistanceKm: 1882700,
    orbitalPeriodDays: 16.69,
    discoveryYear: 1610,
    discoveredBy: 'Galileo Galilei',
    overview: 'Callisto is the second-largest moon of Jupiter and the most heavily cratered object in the Solar System. It orbits outside Jupiter’s intense radiation belt, making it a prime candidate for a future human exploration base. Its ancient, unchanged surface preserves a 4-billion-year record of early impacts.',
    geology: 'Ancient cratered plains dominated by multi-ring impact basins like Valhalla (spanning 3,800 km) and Asgard; erosion driven by slow sublimation of carbon dioxide ice.',
    atmosphere: 'Tenuous exosphere of carbon dioxide and molecular oxygen.',
    exploration: 'Observed by Pioneer, Voyager, Galileo, and Cassini.',
    scientificSignificance: 'Incompletely differentiated internal structure provides insight into how icy worlds condense without experiencing runaway tidal heating.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA03456/PIA03456~orig.jpg',
    facts: [
      'Callisto has almost no geological activity; its surface is essentially an icy snapshot of the ancient Solar System.',
      'Magnetic measurements indicate Callisto may also harbor a deep, salty subsurface ocean beneath its 200 km thick crust.',
      'Radiation levels on Callisto are so low that humans could walk on its surface with standard shielding, unlike Io or Europa.'
    ],
    sources: [
      { name: 'NASA Solar System - Callisto', url: 'https://science.nasa.gov/jupiter/moons/callisto/' }
    ]
  },
  {
    slug: 'titan',
    name: 'Titan',
    category: 'moon',
    parentBody: 'Saturn',
    diameterKm: 5149.5,
    massKg: '1.3452 × 10^23 kg',
    gravityMps2: 1.352,
    meanDistanceKm: 1221870,
    orbitalPeriodDays: 15.95,
    discoveryYear: 1655,
    discoveredBy: 'Christiaan Huygens',
    overview: 'Titan is Saturn’s largest moon and the second-largest moon in the Solar System. It is the only moon with a dense atmosphere and the only planetary body other than Earth known to have stable bodies of liquid on its surface. However, its hydrologic cycle is based on liquid methane and ethane rather than water, raining into vast polar seas like Kraken Mare.',
    geology: 'Vast equatorial dune fields of organic soot, river networks carved by liquid methane, cryogenic hydrocarbon lakes, and potential water-ammonia cryovolcanism.',
    atmosphere: 'Dense atmosphere (95% nitrogen, 5% methane) with a surface pressure of 1.45 bar (50% greater than Earth’s), covered in an opaque orange photochemical haze.',
    exploration: 'Explored by Voyager 1 & 2; orbited 127 times by Cassini (2004-2017); the ESA Huygens probe landed on Titan on January 14, 2005. NASA Dragonfly rotorcraft mission is scheduled to arrive in 2034.',
    scientificSignificance: 'A prebiotic chemical laboratory frozen at -179°C; offers insights into the atmospheric organic synthesis that preceded the origin of life on Earth.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg',
    facts: [
      'If you strapped wings to your arms on Titan, you could easily fly through the air because of low gravity (0.14g) and dense atmosphere!',
      'Kraken Mare, Titan’s largest liquid sea, is larger than Earth’s Caspian Sea and over 100 meters deep.',
      'Cassini radar showed that water ice acts as rock on Titan, while liquid methane plays the role of water in rivers, clouds, and rain.'
    ],
    sources: [
      { name: 'NASA Dragonfly Mission', url: 'https://science.nasa.gov/mission/dragonfly/' }
    ]
  },
  {
    slug: 'enceladus',
    name: 'Enceladus',
    category: 'moon',
    parentBody: 'Saturn',
    diameterKm: 504.2,
    massKg: '1.08 × 10^20 kg',
    gravityMps2: 0.113,
    meanDistanceKm: 238000,
    orbitalPeriodDays: 1.37,
    discoveryYear: 1789,
    discoveredBy: 'William Herschel',
    overview: 'Enceladus is a small, glittering icy moon of Saturn with the highest albedo of any body in the Solar System, reflecting nearly 100% of sunlight. Despite its tiny size (about the width of the United Kingdom), Cassini discovered towering cryovolcanic geysers erupting from warm fractures ("tiger stripes") at its south pole, spewing water vapor, silica nanoparticles, salts, and complex organic molecules directly into Saturn’s E ring.',
    geology: 'Northern hemisphere is heavily cratered, while the south polar terrain is geologically young and tectonically active with deep parallel chasms (tiger stripes) heated by tidal dissipation.',
    atmosphere: 'Localized exosphere fed by cryovolcanic plumes composed of water vapor (91%), nitrogen, carbon dioxide, methane, and complex hydrocarbons.',
    exploration: 'Discovered by Herschel; photographed by Voyager; scrutinized by NASA Cassini during dozens of close flybys between 2005 and 2017, including flights through the active plumes.',
    scientificSignificance: 'Possesses all three classical requirements for life: liquid water, energy source (hydrothermal activity at ocean floor), and bio-essential elements (C, H, N, O, P, S).',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA17202/PIA17202~orig.jpg',
    facts: [
      'Cassini confirmed the presence of phosphorus in Enceladus’s ocean plumes in 2023, completing the set of six core chemical building blocks of life.',
      'Its south polar cryogeysers vent approximately 200 kilograms of water vapor and ice crystals every second.',
      'Enceladus’s plumes are the primary source material feeding Saturn’s broad E ring.'
    ],
    sources: [
      { name: 'NASA Cassini Enceladus Plumes', url: 'https://science.nasa.gov/saturn/moons/enceladus/' }
    ]
  },
  {
    slug: 'triton',
    name: 'Triton',
    category: 'moon',
    parentBody: 'Neptune',
    diameterKm: 2706.8,
    massKg: '2.14 × 10^22 kg',
    gravityMps2: 0.779,
    meanDistanceKm: 354800,
    orbitalPeriodDays: -5.88, // Retrograde
    discoveryYear: 1846,
    discoveredBy: 'William Lassell',
    overview: 'Triton is the largest moon of Neptune and the only large moon in the Solar System that orbits in the opposite direction of its planet’s rotation (retrograde). This orbit proves Triton was not formed around Neptune, but was captured from the Kuiper Belt. Despite surface temperatures of -235°C, Voyager 2 witnessed active cryovolcanic geysers erupting nitrogen gas and dark dust 8 km into its thin sky.',
    geology: 'Distinctive "cantaloupe terrain" of overlapping depressions, frozen nitrogen-methane lakes, volcanic calderas, and south polar ice cap.',
    atmosphere: 'Tenuous nitrogen atmosphere with traces of carbon monoxide and methane; surface pressure ~14 microbars.',
    exploration: 'Flyby by NASA Voyager 2 on August 25, 1989, capturing the only close-up imagery of Triton.',
    scientificSignificance: 'A pristine relic of the Kuiper Belt, representing an captured sibling of Pluto with active cryogenic volcanism.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA01530/PIA01530~orig.jpg',
    facts: [
      'Triton is one of the coldest known places in the Solar System at -235°C (38 K).',
      'Because of its retrograde orbit, tidal deceleration is slowly pulling Triton toward Neptune; in about 3.6 billion years it will cross Neptune’s Roche limit and shatter into a ring system grander than Saturn’s.',
      'Its nitrogen geysers are powered by subsurface solar greenhouse heating of nitrogen ice.'
    ],
    sources: [
      { name: 'NASA Solar System - Triton', url: 'https://science.nasa.gov/neptune/moons/triton/' }
    ]
  },
  {
    slug: 'phobos',
    name: 'Phobos',
    category: 'moon',
    parentBody: 'Mars',
    diameterKm: 22.2,
    massKg: '1.0659 × 10^16 kg',
    gravityMps2: 0.0057,
    meanDistanceKm: 9376,
    orbitalPeriodDays: 0.319,
    discoveryYear: 1877,
    discoveredBy: 'Asaph Hall',
    overview: 'Phobos is the innermost and larger of the two Martian moons. It is an irregular, heavily cratered potato-shaped body that orbits closer to its host planet than any other known natural satellite in the solar system—just 6,000 km above Mars’s surface. It orbits Mars three times every Martian day.',
    geology: 'Dominated by Stickney crater (9 km across, almost half the moon’s diameter) and mysterious parallel grooves and crater chains caused by tidal stresses.',
    atmosphere: 'None.',
    exploration: 'Imaged by Mariner 9, Viking 1 & 2, Mars Global Surveyor, Mars Express, Mars Reconnaissance Orbiter; target of JAXA’s MMX sample return mission.',
    scientificSignificance: 'Orbiting beneath synchronous altitude, tidal forces are causing Phobos to spiral inward by 1.8 meters per century; it will crash or disintegrate into a ring within 30-50 million years.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA10368/PIA10368~orig.jpg',
    facts: [
      'From the Martian surface, Phobos rises in the west and sets in the east twice every single day.',
      'Stickney crater is so large that the impact that formed it came dangerously close to shattering the moon entirely.',
      'Its escape velocity is so low (11 m/s) that an athletic human could almost run off the surface into space.'
    ],
    sources: [
      { name: 'NASA Mars Exploration - Moons', url: 'https://science.nasa.gov/mars/moons/' }
    ]
  },
  {
    slug: 'deimos',
    name: 'Deimos',
    category: 'moon',
    parentBody: 'Mars',
    diameterKm: 12.4,
    massKg: '1.4762 × 10^15 kg',
    gravityMps2: 0.003,
    meanDistanceKm: 23463,
    orbitalPeriodDays: 1.263,
    discoveryYear: 1877,
    discoveredBy: 'Asaph Hall',
    overview: 'Deimos is the smaller and outer of Mars’s two moons. With a mean diameter of just 12.4 km, it has a smoother appearance than Phobos because its impact craters are partially filled with a thick blanket of regolith.',
    geology: 'Smooth regolith blanket up to 100 meters thick; lack of the linear groove systems seen on Phobos.',
    atmosphere: 'None.',
    exploration: 'Imaged by Viking, Mars Global Surveyor, UAE Hope probe (which performed close flybys in 2023).',
    scientificSignificance: 'Recent Hope probe data revealed a composition similar to Mars’s basaltic crust rather than a carbonaceous chondrite asteroid, fueling debate on whether Mars’s moons formed from giant impact ejecta rather than asteroid capture.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA11826/PIA11826~orig.jpg',
    facts: [
      'Deimos takes 30 hours to orbit Mars, appearing as a bright, star-like beacon in the Martian night sky.',
      'Named after the Greek god of dread and terror, companion to Ares (Mars).'
    ],
    sources: [
      { name: 'Emirates Mars Mission - Deimos Findings', url: 'https://www.emiratesmarsmission.ae/' }
    ]
  },

  // Other Celestial Objects & Regions
  {
    slug: 'asteroid-belt',
    name: 'The Asteroid Belt',
    category: 'region',
    parentBody: 'Sun',
    diameterKm: 150000000,
    overview: 'A vast circumstellar disc situated between the orbits of Mars and Jupiter (2.2 to 3.2 AU). Rather than a crowded debris field as depicted in science fiction movies, the asteroid belt is mostly empty space: the average distance between asteroids of significant size is over 1 million kilometers. The total mass of the entire belt is only about 3% of Earth’s Moon.',
    geology: 'Contains millions of rocky and metallic remnants from the early solar nebula, prevented from coalescing into a planet by Jupiter’s immense gravitational perturbations.',
    atmosphere: 'None.',
    exploration: 'Traversed safely by dozens of interplanetary spacecraft; explored up close by Galileo (Gaspra, Ida), NEAR Shoemaker, Dawn (Vesta, Ceres), and OSIRIS-REx.',
    scientificSignificance: 'Preserves the primordial building blocks of the inner planets from 4.56 billion years ago.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg',
    facts: [
      'Ceres alone accounts for roughly one-third of the asteroid belt’s entire mass.',
      'If you aggregated all the millions of asteroids in the belt together, the resulting body would be smaller than half the diameter of our Moon.',
      'Gaps in the asteroid belt known as Kirkwood Gaps are cleared out by orbital resonance with Jupiter.'
    ],
    sources: [
      { name: 'NASA Asteroids Overview', url: 'https://science.nasa.gov/solar-system/asteroids/' }
    ]
  },
  {
    slug: 'kuiper-belt',
    name: 'The Kuiper Belt',
    category: 'region',
    parentBody: 'Sun',
    diameterKm: 3000000000,
    overview: 'A donut-shaped ring of icy bodies extending beyond Neptune’s orbit from 30 to roughly 55 AU. Home to dwarf planets Pluto, Haumea, and Makemake, as well as hundreds of thousands of icy planetesimals (Kuiper Belt Objects or KBOs) and short-period comets.',
    geology: 'Pristine volatile ices including nitrogen, methane, carbon monoxide, water, and tholin organic compounds.',
    atmosphere: 'None.',
    exploration: 'New Horizons was the first spacecraft specifically targeted to explore the Kuiper Belt, visiting Pluto in 2015 and the contact binary Arrokoth in 2019.',
    scientificSignificance: 'Represents the fossilized outer rim of the primordial solar nebula, shedding light on planetary migration and accretion.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA23000/PIA23000~orig.jpg',
    facts: [
      'Named after Dutch-American astronomer Gerard Kuiper, who theorized its existence in 1951.',
      'Arrokoth, imaged by New Horizons, resembles a snowman and is the most distant and primitive object ever explored by a spacecraft (44 AU).',
      'The Kuiper Belt is about 20 times wider and 20 to 200 times more massive than the asteroid belt.'
    ],
    sources: [
      { name: 'NASA Kuiper Belt Overview', url: 'https://science.nasa.gov/solar-system/kuiper-belt/' }
    ]
  },
  {
    slug: 'oort-cloud',
    name: 'The Oort Cloud',
    category: 'region',
    parentBody: 'Sun',
    diameterKm: 15000000000000,
    overview: 'A theoretical giant spherical shell enveloping the entire Solar System, extending from roughly 2,000 AU out to 100,000 AU (nearly 1.6 light-years away, halfway to the nearest star Proxima Centauri). Composed of trillions of icy bodies ejected by early giant planet interactions, it serves as the reservoir for long-period comets like Hale-Bopp.',
    geology: 'Trillions of icy planetesimals of water, methane, ethane, carbon monoxide, and hydrogen cyanide.',
    atmosphere: 'None.',
    exploration: 'No spacecraft has reached the Oort Cloud; Voyager 1, travelling at 17 km/s, will take roughly 300 years to reach its inner boundary and 30,000 years to pass through it.',
    scientificSignificance: 'Marks the gravitational boundary of our Solar System (Hill sphere of the Sun). Gravitational perturbations from passing stars dislodge icy objects into inbound parabolic orbits as comets.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA17046/PIA17046~orig.jpg',
    facts: [
      'Hypothesized in 1950 by Dutch astronomer Jan Oort to explain why long-period comets continue to visit the inner solar system without being depleted.',
      'The outer boundary of the Oort Cloud reaches nearly a quarter of the way to Alpha Centauri.',
      'Comet C/2013 A1 Siding Spring originated from the Oort Cloud, making its very first journey into the inner Solar System when it buzzed Mars in 2014.'
    ],
    sources: [
      { name: 'NASA Oort Cloud Overview', url: 'https://science.nasa.gov/solar-system/oort-cloud/' }
    ]
  },
  {
    slug: 'halley-comet',
    name: '1P/Halley (Halley’s Comet)',
    category: 'comet',
    parentBody: 'Sun',
    diameterKm: 11.0,
    overview: 'The most famous periodic comet in history, returning to the inner Solar System every 75 to 76 years. Its appearance has been recorded by observers worldwide since at least 240 BCE. Edmond Halley in 1705 applied Newton’s laws of gravitation to prove that sightings in 1531, 1607, and 1682 were the same object, successfully predicting its 1758 return.',
    geology: 'Peanut-shaped icy "dirty snowball" nucleus measuring 15 × 8 km, composed of volatile water, carbon monoxide, and organic dust with a very dark albedo (0.04).',
    exploration: 'Studied up close in 1986 by the international "Halley Armada", including ESA’s Giotto spacecraft which photographed its active gas-venting nucleus from 596 km away.',
    scientificSignificance: 'Provided the first direct proof of Fred Whipple’s "dirty snowball" hypothesis of comet nuclei.',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00122/PIA00122~orig.jpg',
    facts: [
      'Halley’s Comet will next reach perihelion in mid-2061.',
      'It creates two annual meteor showers on Earth: the Eta Aquariids in May and the Orionids in October.',
      'Mark Twain was famously born in 1835 as Halley’s Comet passed, and died the day after it returned in 1910.'
    ],
    sources: [
      { name: 'NASA Solar System - Comets', url: 'https://science.nasa.gov/solar-system/comets/' }
    ]
  }
];

export const missionsData = [
  {
    slug: 'apollo-11',
    name: 'Apollo 11',
    targetPlanet: 'Moon',
    agency: 'NASA',
    launchYear: 1969,
    launchDate: 'July 16, 1969',
    status: 'Completed',
    missionType: 'Crewed Lunar Landing',
    description: 'The historic first crewed mission to land on the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Eagle in the Sea of Tranquility on July 20, 1969, while Michael Collins orbited in the Command Module Columbia.',
    keyDiscoveries: [
      'First human footsteps and geological sampling on an extraterrestrial world',
      'Returned 21.55 kg of lunar regolith and rock samples',
      'Deployed the Early Apollo Scientific Experiments Package (EASEP) including laser ranging retroreflectors still used today'
    ],
    outcomes: 'Fulfilled President John F. Kennedy’s national goal of landing a man on the Moon and returning him safely to Earth before the decade was out.',
    officialUrl: 'https://www.nasa.gov/mission/apollo-11/',
    imageUrl: 'https://images-assets.nasa.gov/image/AS11-40-5903/AS11-40-5903~orig.jpg'
  },
  {
    slug: 'voyager-1',
    name: 'Voyager 1',
    targetPlanet: 'Deep Space',
    agency: 'NASA',
    launchYear: 1977,
    launchDate: 'September 5, 1977',
    status: 'Active',
    missionType: 'Planetary Flyby & Interstellar Probe',
    description: 'Launched to explore the outer solar system, Voyager 1 conducted dramatic flybys of Jupiter (1979) and Saturn (1980), including Titan. In August 2012, it became the first human-made object to cross the heliopause and enter interstellar space.',
    keyDiscoveries: [
      'Discovered active volcanism on Jupiter’s moon Io',
      'Discovered Jupiter’s rings and two new Jovian moons',
      'Revealed the complex ring structure and atmosphere of Saturn and Titan',
      'Captured the famous "Pale Blue Dot" photograph of Earth from 6 billion km away in 1990',
      'Directly measured interstellar plasma density beyond the heliopause'
    ],
    outcomes: 'Currently the most distant human artifact in existence, operating over 24 billion kilometers (162 AU) from Earth and transmitting data via the Deep Space Network.',
    officialUrl: 'https://voyager.jpl.nasa.gov/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00013/PIA00013~orig.jpg'
  },
  {
    slug: 'voyager-2',
    name: 'Voyager 2',
    targetPlanet: 'Uranus',
    agency: 'NASA',
    launchYear: 1977,
    launchDate: 'August 20, 1977',
    status: 'Active',
    missionType: 'Grand Tour Flyby & Interstellar Probe',
    description: 'The only spacecraft to complete the historic "Grand Tour" of all four gas and ice giants: Jupiter (1979), Saturn (1981), Uranus (1986), and Neptune (1989). Crossed into interstellar space in November 2018.',
    keyDiscoveries: [
      'Only spacecraft ever to visit Uranus and Neptune',
      'Discovered 11 moons and 2 rings at Uranus; discovered 6 moons and rings at Neptune',
      'Discovered active cryovolcanic nitrogen geysers on Neptune’s moon Triton',
      'Discovered Neptune’s Great Dark Spot and supersonic winds'
    ],
    outcomes: 'Provided our foundational data and photography for Uranus and Neptune that remains the gold standard in planetary science.',
    officialUrl: 'https://voyager.jpl.nasa.gov/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg'
  },
  {
    slug: 'cassini-huygens',
    name: 'Cassini-Huygens',
    targetPlanet: 'Saturn',
    agency: 'NASA / ESA / ASI',
    launchYear: 1997,
    launchDate: 'October 15, 1997',
    status: 'Completed',
    missionType: 'Orbiter & Titan Lander',
    description: 'A flagship collaborative international mission that spent 13 years orbiting Saturn (2004-2017). ESA’s Huygens probe detached and performed history’s first soft landing on a world in the outer solar system (Titan, Jan 14, 2005).',
    keyDiscoveries: [
      'Discovered cryovolcanic water plumes erupting from Enceladus’s south pole',
      'Discovered liquid methane and ethane seas, rivers, and dunes on Titan',
      'Observed Saturn’s polar hexagon storm and dynamic ring evolution in high definition',
      'Completed the "Grand Finale": 22 daring dives between Saturn and its innermost rings before plunging safely into the atmosphere to protect pristine moons'
    ],
    outcomes: 'Revolutionized astrobiology by demonstrating that Enceladus and Titan possess ocean worlds with habitability potential.',
    officialUrl: 'https://science.nasa.gov/mission/cassini/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg'
  },
  {
    slug: 'perseverance',
    name: 'Mars 2020 (Perseverance & Ingenuity)',
    targetPlanet: 'Mars',
    agency: 'NASA',
    launchYear: 2020,
    launchDate: 'July 30, 2020',
    status: 'Active',
    missionType: 'Rover & Aerial Helicopter',
    description: 'Landed in Jezero Crater on February 18, 2021, seeking signs of ancient microscopic life, characterizing Martian paleoclimate and geology, and caching rock cores for the future Mars Sample Return mission. Accompanied by Ingenuity, the first aircraft to achieve powered, controlled flight on another world.',
    keyDiscoveries: [
      'Confirmed Jezero Crater was once an ancient lake fed by a river delta with mudstones rich in organic molecules',
      'Ingenuity completed 72 flights over 3 years, logging over 128 minutes of flight time across 17 km',
      'MOXIE instrument successfully synthesized breathable oxygen from the Martian carbon dioxide atmosphere'
    ],
    outcomes: 'Has cored and sealed over 20 pristine geological sample tubes across Jezero’s ancient river delta.',
    officialUrl: 'https://mars.nasa.gov/mars2020/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA24483/PIA24483~orig.jpg'
  },
  {
    slug: 'new-horizons',
    name: 'New Horizons',
    targetPlanet: 'Pluto',
    agency: 'NASA',
    launchYear: 2006,
    launchDate: 'January 19, 2006',
    status: 'Active',
    missionType: 'Flyby Probe',
    description: 'Fastest spacecraft at launch, New Horizons flew past Jupiter for a gravity assist in 2007, executed the historic first flyby of Pluto on July 14, 2015, and made the first encounter with a pristine Kuiper Belt contact binary (Arrokoth) on January 1, 2019.',
    keyDiscoveries: [
      'Transformed Pluto from a pixelated dot into an active world with a convecting nitrogen glacier (Sputnik Planitia)',
      'Imaged Pluto’s blue atmospheric haze layers and Charon’s dark red polar cap (Mordor Macula)',
      'Captured close-up imagery of Arrokoth, proving gentle accretion theories of planetesimal formation'
    ],
    outcomes: 'Continues to explore the outer heliosphere and Kuiper Belt environment.',
    officialUrl: 'https://science.nasa.gov/mission/new-horizons/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg'
  },
  {
    slug: 'juno',
    name: 'Juno',
    targetPlanet: 'Jupiter',
    agency: 'NASA',
    launchYear: 2011,
    launchDate: 'August 5, 2011',
    status: 'Active',
    missionType: 'Orbiter',
    description: 'Entered polar orbit around Jupiter on July 4, 2016. Powered by massive solar arrays, Juno studies Jupiter’s deep interior, magnetic field, gravitational harmonics, water abundance, and auroral physics.',
    keyDiscoveries: [
      'Discovered that Jupiter has a "dilute", fuzzy core of heavy elements spanning half its radius',
      'Discovered stable geometric clusters of cyclones arranged as pentagons and octagons at the poles',
      'Performed close flybys of Ganymede, Europa, and Io, providing unprecedented radiation and thermal maps'
    ],
    outcomes: 'Extended mission continues through 2025, performing close investigations of the Galilean moons.',
    officialUrl: 'https://science.nasa.gov/mission/juno/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg'
  },
  {
    slug: 'curiosity',
    name: 'Mars Science Laboratory (Curiosity)',
    targetPlanet: 'Mars',
    agency: 'NASA',
    launchYear: 2011,
    launchDate: 'November 26, 2011',
    status: 'Active',
    missionType: 'Rover',
    description: 'Landed inside Gale Crater on August 6, 2012, using the groundbreaking sky-crane landing maneuver. Designed to assess whether Mars ever possessed an environment capable of supporting microbial life.',
    keyDiscoveries: [
      'Confirmed within its first year that Gale Crater hosted a habitable freshwater lake with bio-essential elements ~3.5 billion years ago (Yellowknife Bay)',
      'Discovered ancient organic carbon molecules preserved in 3-billion-year-old lacustrine mudstones',
      'Measured seasonal spikes of atmospheric methane'
    ],
    outcomes: 'Has driven over 32 km and climbed hundreds of meters up Mount Sharp, analyzing sedimentary geological strata.',
    officialUrl: 'https://mars.nasa.gov/msl/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg'
  },
  {
    slug: 'europa-clipper',
    name: 'Europa Clipper',
    targetPlanet: 'Jupiter',
    agency: 'NASA',
    launchYear: 2024,
    launchDate: 'October 14, 2024',
    status: 'En Route',
    missionType: 'Orbiter Flyby Campaign',
    description: 'NASA’s flagship mission dedicated to investigating Jupiter’s icy moon Europa. Launched aboard a SpaceX Falcon Heavy, it will arrive in the Jovian system in 2030 to perform nearly 50 low-altitude flybys of Europa.',
    keyDiscoveries: [
      'En route: Will determine ice shell thickness and ocean depth',
      'Will investigate ocean salinity, thermal convection, and organic surface composition',
      'Equipped with ice-penetrating radar (REASON), high-resolution cameras, mass spectrometers, and thermal imagers'
    ],
    outcomes: 'Will determine whether places exist beneath Europa’s ice sheet that could support biological life.',
    officialUrl: 'https://science.nasa.gov/mission/europa-clipper/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA26350/PIA26350~orig.jpg'
  }
];

export const glossaryData = [
  {
    term: 'Astronomical Unit (AU)',
    category: 'Mechanics',
    pronunciation: 'as-truh-NOM-i-kuhl YOO-nit',
    shortDefinition: 'The average distance between the Earth and the Sun, approximately 149.6 million kilometers (93 million miles).',
    fullDefinition: 'A fundamental unit of length in astronomy defined exactly as 149,597,870,700 meters by the International Astronomical Union in 2012. It provides a convenient scale for measuring distances within our Solar System and around other stars.',
    formula: '1 AU = 1.496 × 10^8 km ≈ 8.317 light-minutes',
    relatedTerms: ['Light-Year', 'Parsec', 'Perihelion', 'Aphelion']
  },
  {
    term: 'Axial Tilt (Obliquity)',
    category: 'Mechanics',
    pronunciation: 'AK-see-uhl tilt',
    shortDefinition: 'The angle between a planet’s rotational axis and a line perpendicular to its orbital plane.',
    fullDefinition: 'The tilt of a planet’s axis governs the severity of its seasonal variations. For example, Earth’s tilt of 23.44° causes our four seasons, while Uranus’s extreme 97.77° tilt means it rotates virtually on its side.',
    formula: 'Obliquity = angle between rotational angular momentum and orbital angular momentum',
    relatedTerms: ['Orbital Inclination', 'Precession', 'Seasons']
  },
  {
    term: 'Atmosphere',
    category: 'Atmospheric',
    pronunciation: 'AT-muh-sfeer',
    shortDefinition: 'A layer of gases surrounding a celestial body held in place by that body’s gravity.',
    fullDefinition: 'Atmospheres moderate surface temperatures, shield planets from harmful cosmic radiation and micrometeorites, and can support hydrologic cycles. Pressure typically decreases exponentially with altitude.',
    formula: 'Hydrostatic balance: dP/dz = -ρg',
    relatedTerms: ['Exosphere', 'Greenhouse Effect', 'Surface Pressure']
  },
  {
    term: 'Gravity',
    category: 'Mechanics',
    pronunciation: 'GRAV-i-tee',
    shortDefinition: 'The fundamental force of attraction between any two objects with mass or energy.',
    fullDefinition: 'Described by Newton’s universal law of gravitation as directly proportional to the product of their masses and inversely proportional to the square of the distance between them; formulated in Einstein’s General Relativity as the curvature of spacetime caused by mass-energy.',
    formula: 'F = G(m1·m2)/r^2 | Surface gravity g = GM/R^2',
    relatedTerms: ['Escape Velocity', 'Mass', 'Weight']
  },
  {
    term: 'Light-Year',
    category: 'Astrophysics',
    pronunciation: 'lyte-yeer',
    shortDefinition: 'The distance light travels through a vacuum in one Julian year (approx. 9.46 trillion kilometers).',
    fullDefinition: 'Used to measure stellar and galactic distances. Light travels at 299,792.458 km/s; in one year (365.25 days), it travels roughly 9.4607 × 10^12 km (63,241 AU).',
    formula: '1 ly = c × 1 yr ≈ 9.461 × 10^12 km',
    relatedTerms: ['Astronomical Unit (AU)', 'Parsec']
  },
  {
    term: 'Orbital Period',
    category: 'Mechanics',
    pronunciation: 'OR-bi-tuhl PEER-ee-uhd',
    shortDefinition: 'The time taken for a celestial body to complete one full orbit around another body.',
    fullDefinition: 'Determined by Kepler’s Third Law of Planetary Motion, which establishes that the square of the orbital period is proportional to the cube of the semi-major axis of its orbit.',
    formula: 'P^2 = (4π^2 / G(M+m)) · a^3',
    relatedTerms: ['Rotation Period', 'Kepler’s Laws', 'Semi-major Axis']
  },
  {
    term: 'Rotation',
    category: 'Mechanics',
    pronunciation: 'roh-TAY-shun',
    shortDefinition: 'The circular movement of an object around its own internal rotational axis.',
    fullDefinition: 'A sidereal day is the time required for a body to complete one 360° spin relative to distant fixed stars, whereas a solar day is the time between successive solar noons as viewed from the surface.',
    formula: 'Period T = 2π / ω',
    relatedTerms: ['Retrograde Motion', 'Tidal Locking', 'Day Length']
  },
  {
    term: 'Solar Wind',
    category: 'Astrophysics',
    pronunciation: 'SOH-ler wind',
    shortDefinition: 'A continuous stream of charged particles (protons and electrons) ejected outward from the Sun’s upper corona.',
    fullDefinition: 'The solar wind moves at supersonic speeds of 300 to 800 km/s into interplanetary space, sculpting the heliosphere and triggering aurorae and geomagnetic storms when interacting with planetary magnetospheres.',
    formula: 'Velocity v ≈ 400 - 750 km/s',
    relatedTerms: ['Magnetosphere', 'Coronal Mass Ejection', 'Aurora']
  },
  {
    term: 'Tidal Locking',
    category: 'Mechanics',
    pronunciation: 'TY-duhl LOK-ing',
    shortDefinition: 'The state where an orbiting body rotates on its axis at the same rate it orbits, showing only one face to its host.',
    fullDefinition: 'Caused by gravitational gradient torque dissipating rotational kinetic energy over geological time. Earth’s Moon, Pluto-Charon, and all four Galilean moons are tidally locked.',
    formula: 'Orbital period = Rotational period',
    relatedTerms: ['Synchronous Rotation', 'Roche Limit', 'Tidal Heating']
  },
  {
    term: 'Habitable Zone',
    category: 'Astrophysics',
    pronunciation: 'HAB-i-tuh-buhl zohn',
    shortDefinition: 'The circumstellar orbital region where temperatures allow liquid water to persist on a planet’s surface.',
    fullDefinition: 'Often colloquially termed the "Goldilocks Zone" (neither too hot nor too cold). In our Solar System, the conservative habitable zone lies between approximately 0.95 AU and 1.68 AU, containing Earth and Mars.',
    formula: 'R_in ≈ √(L_star / 1.1) | R_out ≈ √(L_star / 0.53)',
    relatedTerms: ['Exoplanet', 'Biosignature', 'Liquid Water']
  },
  {
    term: 'Roche Limit',
    category: 'Mechanics',
    pronunciation: 'ROHSH LIM-it',
    shortDefinition: 'The minimum distance a celestial body held together only by gravity can approach a second body without being shredded by tidal forces.',
    fullDefinition: 'Named after French mathematician Édouard Roche. Ring systems around gas giants reside predominantly inside their planet’s Roche limit, preventing debris from accreting into large moons.',
    formula: 'd ≈ 2.44 · R · (ρ_M / ρ_m)^(1/3)',
    relatedTerms: ['Planetary Rings', 'Tidal Locking', 'Gravity']
  },
  {
    term: 'Cryovolcanism',
    category: 'Planetary Geology',
    pronunciation: 'kry-oh-VOL-kuh-niz-um',
    shortDefinition: 'A type of volcanism in which volatile substances such as water, ammonia, or methane erupt instead of molten rock.',
    fullDefinition: 'Prominently observed on outer solar system worlds like Enceladus, Europa, Triton, and Ceres, where subsurface reservoirs of slushy brines or cryogenic liquids erupt into space through cracks in icy crusts.',
    formula: 'Driving force: phase transition expansion and geothermal tidal heat',
    relatedTerms: ['Tiger Stripes', 'Plumes', 'Enceladus']
  }
];

export const quizQuestionsData = [
  {
    difficulty: 'beginner',
    category: 'planets',
    question: 'Which planet is the hottest in our Solar System, despite not being the closest to the Sun?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correctIndex: 1,
    explanation: 'Venus is the hottest planet with an average surface temperature of ~464°C, caused by a runaway greenhouse effect in its dense carbon dioxide atmosphere.',
    scientificReference: 'NASA Planetary Fact Sheet - Venus'
  },
  {
    difficulty: 'beginner',
    category: 'planets',
    question: 'Which planet has the shortest day in the Solar System, rotating in under 10 hours?',
    options: ['Earth', 'Mars', 'Jupiter', 'Mercury'],
    correctIndex: 2,
    explanation: 'Jupiter rotates on its axis once every 9.93 hours, making its day the shortest of all planets.',
    scientificReference: 'NASA JPL Jupiter Fact Sheet'
  },
  {
    difficulty: 'beginner',
    category: 'moons',
    question: 'Which is the largest moon in the Solar System, larger even than the planet Mercury?',
    options: ['Titan', 'Ganymede', 'The Moon', 'Europa'],
    correctIndex: 1,
    explanation: 'Ganymede, a moon of Jupiter, has a diameter of 5,268 km, making it larger than Mercury (4,879 km) and Pluto.',
    scientificReference: 'Galilean Satellite Overview - NASA'
  },
  {
    difficulty: 'beginner',
    category: 'physics',
    question: 'What is the approximate distance from the Earth to the Sun defined as 1 Astronomical Unit (AU)?',
    options: ['384,400 km', '150 million km', '1.4 billion km', '1 light-year'],
    correctIndex: 1,
    explanation: '1 AU is officially defined as exactly 149,597,870.7 kilometers, or roughly 150 million kilometers (93 million miles).',
    scientificReference: 'IAU 2012 Resolution B2'
  },
  {
    difficulty: 'beginner',
    category: 'exploration',
    question: 'In what year did humans first set foot on the Moon during the Apollo 11 mission?',
    options: ['1961', '1969', '1972', '1959'],
    correctIndex: 1,
    explanation: 'Neil Armstrong and Buzz Aldrin landed on the lunar surface on July 20, 1969.',
    scientificReference: 'NASA Apollo 11 Mission Log'
  },
  {
    difficulty: 'intermediate',
    category: 'planets',
    question: 'Why does Uranus rotate "on its side" with an axial tilt of nearly 98 degrees?',
    options: [
      'Tidal interactions with Neptune pulled it sideways',
      'Solar wind pressure gradually tipped its magnetic pole',
      'A catastrophic collision with an Earth-sized protoplanet during early formation',
      'Its rapid spin rate caused rotational instability'
    ],
    correctIndex: 2,
    explanation: 'Astrophysical simulations indicate Uranus’s 97.77° obliquity was caused by one or more giant impacts with massive protoplanets during late solar system accretion.',
    scientificReference: 'Icarus Journal - Giant Impact Origin of Uranus’s Tilt'
  },
  {
    difficulty: 'intermediate',
    category: 'moons',
    question: 'What body of liquid fills the seas and lakes on Saturn’s giant moon Titan?',
    options: ['Liquid water', 'Liquid nitrogen', 'Liquid methane and ethane', 'Liquid carbon dioxide'],
    correctIndex: 2,
    explanation: 'Titan’s surface temperature is -179°C, where water is frozen rock-hard and hydrocarbons like methane and ethane exist as liquid rain, rivers, and seas like Kraken Mare.',
    scientificReference: 'Cassini Radar Science Team'
  },
  {
    difficulty: 'intermediate',
    category: 'exploration',
    question: 'Which criteria did Pluto fail in the 2006 IAU definition of a major planet?',
    options: [
      'It does not orbit the Sun directly',
      'It does not have sufficient gravity to be round (hydrostatic equilibrium)',
      'It has not cleared the neighborhood around its orbit',
      'It has too many moons'
    ],
    correctIndex: 2,
    explanation: 'Pluto orbits the Sun and is spherical (criteria 1 and 2), but its mass does not dominate its orbital zone in the Kuiper Belt (criterion 3), which it shares with thousands of other icy bodies.',
    scientificReference: 'IAU Resolution 5A (Prague 2006)'
  },
  {
    difficulty: 'intermediate',
    category: 'physics',
    question: 'What is the Roche limit?',
    options: [
      'The boundary where solar wind meets interstellar medium',
      'The distance within which tidal forces tear an orbiting gravitational body apart',
      'The maximum speed a planet can rotate before shedding mass',
      'The minimum temperature required for nuclear fusion'
    ],
    correctIndex: 1,
    explanation: 'The Roche limit is the minimum orbital distance a satellite held together only by gravity can approach its parent planet without being destroyed by tidal shear forces.',
    scientificReference: 'Celestial Mechanics & Dynamical Astronomy'
  },
  {
    difficulty: 'intermediate',
    category: 'planets',
    question: 'Which planet has an average density less than liquid water (0.687 g/cm³)?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctIndex: 1,
    explanation: 'Saturn has a mean density of 0.687 g/cm³, meaning that if an ocean could be built vast enough to hold it, Saturn would float.',
    scientificReference: 'NASA Planetary Fact Sheet - Saturn'
  },
  {
    difficulty: 'advanced',
    category: 'physics',
    question: 'What physical phenomenon causes Mercury to experience a 3:2 spin-orbit resonance?',
    options: [
      'Conservation of magnetic flux in its iron core',
      'Gravitational tidal torque acting on its high orbital eccentricity (e = 0.206)',
      'Direct magnetic coupling with the solar corona',
      'Relativistic frame dragging predicted by general relativity'
    ],
    correctIndex: 1,
    explanation: 'Mercury’s high orbital eccentricity causes tidal torques at perihelion (where orbital angular velocity peaks) to stabilize its rotation period at exactly 2/3 of its orbital period.',
    scientificReference: 'Goldreich & Peale (1966) - Spin-orbit resonance of Mercury'
  },
  {
    difficulty: 'advanced',
    category: 'moons',
    question: 'Why does Neptune’s moon Triton have a retrograde orbit, and what is its ultimate fate?',
    options: [
      'It formed from an impact; it will be ejected into interstellar space',
      'It was captured from the Kuiper Belt; tidal deceleration will cause it to break up into a ring in ~3.6 billion years',
      'It was reversed by Jupiter; it will stabilize in a higher orbit',
      'Neptune’s magnetic field flipped its spin; it will collide with Uranus'
    ],
    correctIndex: 1,
    explanation: 'Triton was gravitationally captured from the Kuiper Belt. Because it orbits retrograde, tidal interaction transfers angular momentum to Neptune, causing Triton to spiral inward until it breaches the Roche limit.',
    scientificReference: 'Nature - The capture of Triton by Neptune'
  },
  {
    difficulty: 'advanced',
    category: 'exploration',
    question: 'What was the first spacecraft to soft-land on another planet and successfully transmit data back to Earth?',
    options: ['Venera 7 (Venus, 1970)', 'Viking 1 (Mars, 1976)', 'Luna 9 (Moon, 1966)', 'Mariner 2 (Venus, 1962)'],
    correctIndex: 0,
    explanation: 'The Soviet Union’s Venera 7 spacecraft landed on the surface of Venus on December 15, 1970, transmitting telemetry for 23 minutes under 92 atmospheres of crushing pressure.',
    scientificReference: 'Soviet Planetary Exploration History - NASA NSSDC'
  },
  {
    difficulty: 'advanced',
    category: 'astrophysics',
    question: 'What gives Mars sunsets their characteristic bluish glow, the opposite of Earth’s sunsets?',
    options: [
      'Rayleigh scattering by atmospheric nitrogen',
      'Mie forward scattering of blue wavelengths by fine ferric oxide dust suspended in the thin atmosphere',
      'Absorption of red light by high-altitude ozone',
      'Refraction through carbon dioxide ice crystals'
    ],
    correctIndex: 1,
    explanation: 'Martian dust particles are the ideal size (~0.5 microns) to scatter blue light in the forward direction directly toward an observer looking toward the Sun, while scattering red light across the rest of the sky.',
    scientificReference: 'NASA Mars Science Laboratory Atmospheric Optics Team'
  }
];

export const spaceFactsData = [
  {
    category: 'extreme',
    fact: 'A day on Venus is longer than its entire year.',
    explanation: 'Venus takes 243 Earth days to rotate once on its axis (sidereal day), but completes its orbit around the Sun in only 224.7 Earth days.',
    sourceName: 'NASA Planetary Fact Sheet',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html',
    verificationDate: '2024-01-15'
  },
  {
    category: 'size',
    fact: 'The Sun contains 99.86% of all the mass in the entire Solar System.',
    explanation: 'Jupiter and all other seven planets, dwarf planets, moons, and asteroids combined make up only the remaining 0.14% of mass.',
    sourceName: 'NASA Solar System Exploration',
    sourceUrl: 'https://science.nasa.gov/sun/facts/',
    verificationDate: '2024-02-01'
  },
  {
    category: 'physics',
    fact: 'Saturn’s rings are over 280,000 km wide, but on average only 10 to 30 meters thick.',
    explanation: 'If you made a scale model of Saturn’s rings the size of a sheet of paper, they would be thousands of times thinner than the paper itself.',
    sourceName: 'NASA Cassini Mission Archives',
    sourceUrl: 'https://science.nasa.gov/mission/cassini/',
    verificationDate: '2024-02-10'
  },
  {
    category: 'extreme',
    fact: 'Olympus Mons on Mars is so tall that its peak pokes out above most of the Martian atmosphere.',
    explanation: 'Rising 21.9 km above datum, Olympus Mons is nearly three times the height of Mount Everest above sea level.',
    sourceName: 'USGS Astrogeology Science Center',
    sourceUrl: 'https://astrogeology.usgs.gov/',
    verificationDate: '2024-01-20'
  },
  {
    category: 'life',
    fact: 'Jupiter’s icy moon Europa likely contains more liquid water than all of Earth’s oceans combined.',
    explanation: 'Europa’s subsurface ocean is estimated to be 60 to 150 km deep beneath its ice shell, harboring an estimated 2 to 3 times Earth’s ocean volume.',
    sourceName: 'NASA Europa Clipper Science Team',
    sourceUrl: 'https://science.nasa.gov/mission/europa-clipper/',
    verificationDate: '2024-03-01'
  },
  {
    category: 'history',
    fact: 'Voyager 1 is over 24 billion kilometers from Earth and still communicating.',
    explanation: 'Radio signals traveling at the speed of light take over 22.5 hours to travel one way between Earth and Voyager 1.',
    sourceName: 'NASA JPL Voyager Status',
    sourceUrl: 'https://voyager.jpl.nasa.gov/mission/status/',
    verificationDate: '2024-04-12'
  },
  {
    category: 'physics',
    fact: 'Sunsets on Mars appear blue, while the daytime sky has a butterscotch or pinkish tint.',
    explanation: 'Fine dust particles in the thin Martian atmosphere scatter red light across the sky but allow blue wavelengths to pass forward toward the Sun.',
    sourceName: 'NASA Science Curiosity Rover News',
    sourceUrl: 'https://mars.nasa.gov/news/',
    verificationDate: '2024-02-15'
  },
  {
    category: 'extreme',
    fact: 'Supersonic winds on Neptune reach speeds of over 2,100 kilometers per hour.',
    explanation: 'Despite receiving 900 times less solar energy than Earth, Neptune’s low internal friction and deep heat drive the fastest planetary winds in the Solar System.',
    sourceName: 'NASA Neptune Fact Sheet',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html',
    verificationDate: '2024-01-18'
  }
];

export const scientificSourcesData = [
  {
    name: 'NASA Planetary Fact Sheets',
    organization: 'NASA Goddard Space Flight Center',
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/',
    description: 'Definitive physical, orbital, and atmospheric planetary parameters compiled by Dr. David R. Williams.',
    lastVerified: '2024-03-15'
  },
  {
    name: 'NASA Solar System Exploration',
    organization: 'NASA Science Mission Directorate',
    url: 'https://science.nasa.gov/solar-system/',
    description: 'Current mission overviews, discoveries, and multimedia archives for planetary bodies.',
    lastVerified: '2024-04-01'
  },
  {
    name: 'ESA Science & Exploration',
    organization: 'European Space Agency',
    url: 'https://www.esa.int/Science_Exploration',
    description: 'Mission archives for BepiColombo, JUICE, Rosetta, Venus Express, and Gaia.',
    lastVerified: '2024-03-20'
  },
  {
    name: 'IAU Minor Planet Center',
    organization: 'International Astronomical Union / Harvard-Smithsonian CfA',
    url: 'https://www.minorplanetcenter.net/',
    description: 'Official repository for observational data of asteroids, comets, and outer solar system minor planets.',
    lastVerified: '2024-03-25'
  }
];
