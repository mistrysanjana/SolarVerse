import { describe, it, expect } from 'vitest';

// Replicating calculation logic to verify exact math
function kmToMiles(km: number): number {
  return km * 0.621371;
}

function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

function calculatePlanetaryAge(earthAgeYears: number) {
  const planetPeriods = [
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
    return {
      planetSlug: p.slug,
      ageOnPlanet: Number(ageOnPlanet.toFixed(2)),
    };
  });
}

function calculatePlanetaryWeight(earthWeight: number) {
  const bodies = [
    { slug: 'earth', gravityMps2: 9.807 },
    { slug: 'mars', gravityMps2: 3.721 },
    { slug: 'jupiter', gravityMps2: 24.79 },
    { slug: 'moon', gravityMps2: 1.62 },
  ];

  return bodies.map((b) => {
    const gravityRelative = b.gravityMps2 / 9.807;
    return {
      slug: b.slug,
      weight: Number((earthWeight * gravityRelative).toFixed(1)),
    };
  });
}

describe('Astronomical Calculations & Scientific Conversions', () => {
  it('correctly converts kilometers to miles', () => {
    expect(kmToMiles(100)).toBeCloseTo(62.1371, 2);
    expect(kmToMiles(12742)).toBeCloseTo(7917.5, 0); // Earth diameter in miles ~7,917 mi
  });

  it('correctly converts Celsius to Fahrenheit', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
    expect(celsiusToFahrenheit(-40)).toBe(-40);
    expect(celsiusToFahrenheit(464)).toBeCloseTo(867.2, 1); // Venus surface temp
  });

  it('correctly calculates planetary age based on orbital periods', () => {
    const ages = calculatePlanetaryAge(24);
    const mercury = ages.find((a) => a.planetSlug === 'mercury');
    const jupiter = ages.find((a) => a.planetSlug === 'jupiter');
    const earth = ages.find((a) => a.planetSlug === 'earth');

    expect(earth?.ageOnPlanet).toBe(24);
    // On Mercury, 24 Earth years is ~99.6 Mercury years
    expect(mercury?.ageOnPlanet).toBeGreaterThan(95);
    // On Jupiter, 24 Earth years is ~2.02 Jupiter years
    expect(jupiter?.ageOnPlanet).toBeCloseTo(2.02, 1);
  });

  it('correctly computes surface weight based on planetary gravity', () => {
    const weights = calculatePlanetaryWeight(100);
    const earth = weights.find((w) => w.slug === 'earth');
    const mars = weights.find((w) => w.slug === 'mars');
    const jupiter = weights.find((w) => w.slug === 'jupiter');
    const moon = weights.find((w) => w.slug === 'moon');

    expect(earth?.weight).toBe(100);
    expect(mars?.weight).toBeCloseTo(37.9, 0.5); // 38% on Mars
    expect(jupiter?.weight).toBeCloseTo(252.8, 1); // 2.5x on Jupiter
    expect(moon?.weight).toBeCloseTo(16.5, 0.5); // 16.5% on Moon
  });
});
