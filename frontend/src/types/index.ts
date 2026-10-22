export interface Planet {
  id: number;
  slug: string;
  name: string;
  category: 'Terrestrial' | 'Gas Giant' | 'Ice Giant' | string;
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

export interface CelestialObject {
  id: number;
  slug: string;
  name: string;
  category: 'dwarf_planet' | 'moon' | 'asteroid' | 'comet' | 'region';
  parentBody?: string;
  diameterKm: number;
  massKg?: string;
  gravityMps2?: number;
  meanDistanceKm?: number;
  meanDistanceAu?: number;
  orbitalPeriodDays?: number;
  discoveryYear?: number;
  discoveredBy?: string;
  overview: string;
  geology: string;
  atmosphere?: string;
  exploration: string;
  scientificSignificance: string;
  isDwarfPlanetIauExplained?: boolean;
  imageUrl: string;
  facts: string[];
  sources: Array<{ name: string; url: string }>;
}

export interface Mission {
  id: number;
  slug: string;
  name: string;
  targetPlanet: string;
  agency: string;
  launchYear: number;
  launchDate: string;
  status: string;
  missionType: string;
  description: string;
  keyDiscoveries: string[];
  outcomes: string;
  officialUrl: string;
  imageUrl: string;
}

export interface GlossaryTerm {
  id: number;
  term: string;
  category: string;
  pronunciation?: string;
  shortDefinition: string;
  fullDefinition: string;
  formula?: string;
  relatedTerms: string[];
}

export interface QuizQuestion {
  id: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  scientificReference: string;
}

export interface SpaceFact {
  id: number;
  category: string;
  fact: string;
  explanation: string;
  sourceName: string;
  sourceUrl: string;
  verificationDate: string;
}

export interface ScientificSource {
  id: number;
  name: string;
  organization: string;
  url: string;
  description: string;
  lastVerified: string;
}

export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'planet' | 'object' | 'mission' | 'glossary';
  url: string;
  snippet: string;
}

export interface NasaApod {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
  copyright?: string;
  isLive: boolean;
  retrievedAt: string;
}
