/**
 * Scientific unit conversion and astronomical computation utilities
 */

// 1 km = 0.621371 miles
export function kmToMiles(km: number): number {
  return km * 0.621371;
}

// 1 mile = 1.60934 km
export function milesToKm(miles: number): number {
  return miles * 1.60934;
}

// Celsius to Fahrenheit: (°C × 9/5) + 32
export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

// 1 m/s² = 3.28084 ft/s²
export function mps2ToFtps2(mps2: number): number {
  return mps2 * 3.28084;
}

// 1 kg = 2.20462 lbs
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

// 1 lb = 0.453592 kg
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

/**
 * Format large astronomical numbers with commas or scientific notation
 */
export function formatAstronomicalNumber(value: number, decimals: number = 1): string {
  if (value === undefined || value === null || isNaN(value)) return 'N/A';
  if (Math.abs(value) >= 1e9) {
    return (value / 1e9).toFixed(decimals) + ' billion';
  }
  if (Math.abs(value) >= 1e6) {
    return (value / 1e6).toFixed(decimals) + ' million';
  }
  return value.toLocaleString('en-US', { maximumFractionDigits: decimals });
}

/**
 * Planetary age calculator:
 * Given age in Earth years, calculates age on each planet based on orbital period in Earth years.
 */
export interface PlanetaryAgeResult {
  planetSlug: string;
  planetName: string;
  orbitalPeriodYears: number;
  ageOnPlanet: number;
  nextBirthdayDays: number;
}

export function calculatePlanetaryAge(earthAgeYears: number): PlanetaryAgeResult[] {
  if (earthAgeYears <= 0 || isNaN(earthAgeYears)) return [];

  const planetPeriods: Array<{ slug: string; name: string; periodYears: number }> = [
    { slug: 'mercury', name: 'Mercury', periodYears: 0.2408467 },
    { slug: 'venus', name: 'Venus', periodYears: 0.61519726 },
    { slug: 'earth', name: 'Earth', periodYears: 1.0 },
    { slug: 'mars', name: 'Mars', periodYears: 1.8808158 },
    { slug: 'jupiter', name: 'Jupiter', periodYears: 11.862615 },
    { slug: 'saturn', name: 'Saturn', periodYears: 29.447498 },
    { slug: 'uranus', name: 'Uranus', periodYears: 84.016846 },
    { slug: 'neptune', name: 'Neptune', periodYears: 164.79132 },
  ];

  return planetPeriods.map((p) => {
    const ageOnPlanet = earthAgeYears / p.periodYears;
    const wholeYears = Math.floor(ageOnPlanet);
    const fractionPast = ageOnPlanet - wholeYears;
    const daysUntilNext = Math.round((1 - fractionPast) * (p.periodYears * 365.25));

    return {
      planetSlug: p.slug,
      planetName: p.name,
      orbitalPeriodYears: p.periodYears,
      ageOnPlanet: Number(ageOnPlanet.toFixed(2)),
      nextBirthdayDays: daysUntilNext,
    };
  });
}

/**
 * Surface weight comparison calculator:
 * Weight is the gravitational force W = m * g.
 * Given weight on Earth (in kg or lbs), calculates equivalent weight on each planetary body using documented surface gravity values.
 */
export interface PlanetaryWeightResult {
  planetSlug: string;
  planetName: string;
  gravityMps2: number;
  gravityRelative: number;
  calculatedWeight: number;
  description: string;
}

export function calculatePlanetaryWeight(
  earthWeight: number,
  unit: 'metric' | 'imperial' = 'metric'
): PlanetaryWeightResult[] {
  if (earthWeight <= 0 || isNaN(earthWeight)) return [];

  // Earth gravity standard g0 = 9.80665 m/s²
  const bodies: Array<{
    slug: string;
    name: string;
    gravityMps2: number;
    description: string;
  }> = [
    { slug: 'sun', name: 'Sun (surface)', gravityMps2: 274.0, description: 'Crushing stellar gravity; bone fracture immediate' },
    { slug: 'mercury', name: 'Mercury', gravityMps2: 3.7, description: 'Very light; high leaps possible' },
    { slug: 'venus', name: 'Venus', gravityMps2: 8.87, description: 'Close to Earth; slight feeling of lightness' },
    { slug: 'earth', name: 'Earth', gravityMps2: 9.807, description: 'Standard 1.0g reference' },
    { slug: 'moon', name: 'The Moon', gravityMps2: 1.62, description: 'Classic Apollo astronaut bounding bounce' },
    { slug: 'mars', name: 'Mars', gravityMps2: 3.72, description: 'Roughly 38% of Earth gravity' },
    { slug: 'jupiter', name: 'Jupiter (1 bar)', gravityMps2: 24.79, description: 'Heavy sensation; difficulty standing' },
    { slug: 'saturn', name: 'Saturn (1 bar)', gravityMps2: 10.44, description: 'Surprising: barely 6% heavier than Earth!' },
    { slug: 'uranus', name: 'Uranus (1 bar)', gravityMps2: 8.69, description: 'Slightly lighter than Earth due to low density' },
    { slug: 'neptune', name: 'Neptune (1 bar)', gravityMps2: 11.15, description: 'About 14% heavier than Earth' },
    { slug: 'pluto', name: 'Pluto', gravityMps2: 0.62, description: 'Near-weightless cryogenic world' },
  ];

  return bodies.map((b) => {
    const gravityRelative = b.gravityMps2 / 9.807;
    const calculatedWeight = Number((earthWeight * gravityRelative).toFixed(1));

    return {
      planetSlug: b.slug,
      planetName: b.name,
      gravityMps2: b.gravityMps2,
      gravityRelative: Number(gravityRelative.toFixed(3)),
      calculatedWeight,
      description: b.description,
    };
  });
}
