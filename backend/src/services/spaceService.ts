import { prisma } from '../config/db.js';
import {
  planetsData,
  celestialObjectsData,
  missionsData,
  glossaryData,
  quizQuestionsData,
  spaceFactsData,
  scientificSourcesData,
} from '../data/spaceData.js';

// Helper to safely parse JSON strings from SQLite
function safeJsonParse<T>(jsonStr: string | null | undefined, fallback: T): T {
  if (!jsonStr) return fallback;
  try {
    return JSON.parse(jsonStr) as T;
  } catch {
    return fallback;
  }
}

function formatPlanet(p: any) {
  return {
    ...p,
    atmosphereComposition: safeJsonParse(p.atmosphereComposition, []),
    notableFeatures: safeJsonParse(p.notableFeatures, []),
    internalStructure: safeJsonParse(p.internalStructure, []),
    majorMissions: safeJsonParse(p.majorMissions, []),
    interestingFacts: safeJsonParse(p.interestingFacts, []),
    earthComparison: safeJsonParse(p.earthComparison, {}),
    faqs: safeJsonParse(p.faqs, []),
  };
}

function formatCelestialObject(obj: any) {
  return {
    ...obj,
    facts: safeJsonParse(obj.facts, []),
    sources: safeJsonParse(obj.sources, []),
  };
}

function formatMission(m: any) {
  return {
    ...m,
    keyDiscoveries: safeJsonParse(m.keyDiscoveries, []),
  };
}

function formatGlossary(g: any) {
  return {
    ...g,
    relatedTerms: safeJsonParse(g.relatedTerms, []),
  };
}

function formatQuizQuestion(q: any) {
  return {
    ...q,
    options: safeJsonParse(q.options, []),
  };
}

export class SpaceService {
  // --- PLANETS ---
  static async getAllPlanets() {
    try {
      const rows = await prisma.planet.findMany({
        orderBy: { orderFromSun: 'asc' },
      });
      if (rows && rows.length > 0) {
        return rows.map(formatPlanet);
      }
    } catch (e) {
      console.warn('Fallback to static planetsData due to:', e);
    }
    return planetsData;
  }

  static async getPlanetBySlug(slug: string) {
    try {
      const row = await prisma.planet.findUnique({
        where: { slug: slug.toLowerCase() },
      });
      if (row) return formatPlanet(row);
    } catch (e) {
      console.warn('Fallback to static planet lookup:', e);
    }
    const found = planetsData.find((p) => p.slug === slug.toLowerCase());
    return found || null;
  }

  // --- CELESTIAL OBJECTS ---
  static async getAllCelestialObjects(category?: string) {
    try {
      const where = category && category !== 'all' ? { category } : {};
      const rows = await prisma.celestialObject.findMany({
        where,
        orderBy: { diameterKm: 'desc' },
      });
      if (rows && rows.length > 0) {
        return rows.map(formatCelestialObject);
      }
    } catch (e) {
      console.warn('Fallback to static celestialObjectsData:', e);
    }
    if (category && category !== 'all') {
      return celestialObjectsData.filter((c) => c.category === category);
    }
    return celestialObjectsData;
  }

  static async getCelestialObjectBySlug(slug: string) {
    try {
      const row = await prisma.celestialObject.findUnique({
        where: { slug: slug.toLowerCase() },
      });
      if (row) return formatCelestialObject(row);
    } catch (e) {
      console.warn('Fallback to static celestial object lookup:', e);
    }
    const found = celestialObjectsData.find((c) => c.slug === slug.toLowerCase());
    return found || null;
  }

  // --- MISSIONS ---
  static async getAllMissions(target?: string, status?: string) {
    try {
      const where: any = {};
      if (target && target !== 'all') where.targetPlanet = target;
      if (status && status !== 'all') where.status = status;

      const rows = await prisma.mission.findMany({
        where,
        orderBy: { launchYear: 'asc' },
      });
      if (rows && rows.length > 0) {
        return rows.map(formatMission);
      }
    } catch (e) {
      console.warn('Fallback to static missionsData:', e);
    }
    let res = missionsData;
    if (target && target !== 'all') res = res.filter((m) => m.targetPlanet === target);
    if (status && status !== 'all') res = res.filter((m) => m.status === status);
    return res;
  }

  static async getMissionBySlug(slug: string) {
    try {
      const row = await prisma.mission.findUnique({
        where: { slug: slug.toLowerCase() },
      });
      if (row) return formatMission(row);
    } catch (e) {
      console.warn('Fallback mission lookup:', e);
    }
    const found = missionsData.find((m) => m.slug === slug.toLowerCase());
    return found || null;
  }

  // --- GLOSSARY ---
  static async getGlossary(category?: string) {
    try {
      const where = category && category !== 'all' ? { category } : {};
      const rows = await prisma.glossaryTerm.findMany({
        where,
        orderBy: { term: 'asc' },
      });
      if (rows && rows.length > 0) {
        return rows.map(formatGlossary);
      }
    } catch (e) {
      console.warn('Fallback glossaryData:', e);
    }
    if (category && category !== 'all') {
      return glossaryData.filter((g) => g.category === category);
    }
    return glossaryData;
  }

  // --- QUIZ QUESTIONS ---
  static async getQuizQuestions(difficulty?: string, category?: string, limit: number = 10) {
    try {
      const where: any = {};
      if (difficulty) where.difficulty = difficulty;
      if (category) where.category = category;

      const rows = await prisma.quizQuestion.findMany({
        where,
      });
      if (rows && rows.length > 0) {
        // Shuffle and limit
        const shuffled = rows.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit).map(formatQuizQuestion);
      }
    } catch (e) {
      console.warn('Fallback quiz questions:', e);
    }
    let pool = quizQuestionsData;
    if (difficulty) pool = pool.filter((q) => q.difficulty === difficulty);
    if (category) pool = pool.filter((q) => q.category === category);
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  }

  // --- SPACE FACTS ---
  static async getRandomFact(category?: string) {
    try {
      const where = category ? { category } : {};
      const count = await prisma.spaceFact.count({ where });
      if (count > 0) {
        const skip = Math.floor(Math.random() * count);
        const fact = await prisma.spaceFact.findFirst({
          where,
          skip,
        });
        if (fact) return fact;
      }
    } catch (e) {
      console.warn('Fallback random fact:', e);
    }
    let pool = spaceFactsData;
    if (category) pool = pool.filter((f) => f.category === category);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  static async getAllFacts() {
    try {
      const rows = await prisma.spaceFact.findMany();
      if (rows && rows.length > 0) return rows;
    } catch (e) {
      console.warn('Fallback all facts:', e);
    }
    return spaceFactsData;
  }

  // --- SCIENTIFIC SOURCES ---
  static async getSources() {
    try {
      const rows = await prisma.scientificSource.findMany();
      if (rows && rows.length > 0) return rows;
    } catch (e) {
      console.warn('Fallback sources:', e);
    }
    return scientificSourcesData;
  }

  // --- GLOBAL SEARCH ---
  static async search(query: string) {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const results: Array<{
      id: string;
      title: string;
      subtitle: string;
      type: 'planet' | 'object' | 'mission' | 'glossary';
      url: string;
      snippet: string;
    }> = [];

    // Search planets
    const planets = await this.getAllPlanets();
    for (const p of planets) {
      if (
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      ) {
        results.push({
          id: `planet-${p.slug}`,
          title: p.name,
          subtitle: `${p.category} Planet • ${p.orderFromSun} from Sun`,
          type: 'planet',
          url: `/planets/${p.slug}`,
          snippet: p.tagline,
        });
      }
    }

    // Search celestial objects
    const objects = await this.getAllCelestialObjects();
    for (const obj of objects) {
      if (
        obj.name.toLowerCase().includes(q) ||
        obj.overview.toLowerCase().includes(q) ||
        obj.category.toLowerCase().includes(q) ||
        (obj.parentBody && obj.parentBody.toLowerCase().includes(q))
      ) {
        results.push({
          id: `object-${obj.slug}`,
          title: obj.name,
          subtitle: `${obj.category.replace('_', ' ')} • Parent: ${obj.parentBody || 'Sun'}`,
          type: 'object',
          url: `/celestial-objects/${obj.slug}`,
          snippet: obj.overview.slice(0, 140) + '...',
        });
      }
    }

    // Search missions
    const missions = await this.getAllMissions();
    for (const m of missions) {
      if (
        m.name.toLowerCase().includes(q) ||
        m.targetPlanet.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.agency.toLowerCase().includes(q)
      ) {
        results.push({
          id: `mission-${m.slug}`,
          title: m.name,
          subtitle: `${m.agency} • Target: ${m.targetPlanet} (${m.launchYear})`,
          type: 'mission',
          url: `/missions#${m.slug}`,
          snippet: m.description.slice(0, 140) + '...',
        });
      }
    }

    // Search glossary
    const glossary = await this.getGlossary();
    for (const g of glossary) {
      if (
        g.term.toLowerCase().includes(q) ||
        g.shortDefinition.toLowerCase().includes(q) ||
        g.fullDefinition.toLowerCase().includes(q)
      ) {
        results.push({
          id: `glossary-${g.term}`,
          title: g.term,
          subtitle: `Glossary • ${g.category}`,
          type: 'glossary',
          url: `/glossary?search=${encodeURIComponent(g.term)}`,
          snippet: g.shortDefinition,
        });
      }
    }

    return results.slice(0, 20);
  }

  // --- NASA APOD INTEGRATION WITH SAFE FALLBACK ---
  static async getNasaApod() {
    const apiKey = process.env.NASA_API_KEY || 'DEMO_KEY';
    const fallbackApod = {
      title: 'The Pillars of Creation in M16',
      date: '2024-04-12',
      explanation: 'Towering tendrils of cosmic dust and gas sit at the heart of the Eagle Nebula (M16). Captured in breathtaking detail by the James Webb Space Telescope in near-infrared light, these columns of cold molecular hydrogen and dust incubate newborn stars carving cavity bubbles with their stellar winds.',
      url: 'https://images-assets.nasa.gov/image/PIA25432/PIA25432~orig.jpg',
      hdurl: 'https://images-assets.nasa.gov/image/PIA25432/PIA25432~orig.jpg',
      media_type: 'image',
      copyright: 'NASA, ESA, CSA, STScI, Webb ERO Production Team',
      isLive: false,
    };

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, {
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (res.ok) {
        const data = await res.json();
        return {
          ...data,
          isLive: true,
          retrievedAt: new Date().toISOString(),
        };
      }
    } catch (e) {
      console.warn('NASA APOD live fetch failed or timed out, returning verified archive:', e);
    }

    return {
      ...fallbackApod,
      retrievedAt: new Date().toISOString(),
    };
  }
}
