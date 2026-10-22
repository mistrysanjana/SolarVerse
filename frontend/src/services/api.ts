import {
  Planet,
  CelestialObject,
  Mission,
  GlossaryTerm,
  QuizQuestion,
  SpaceFact,
  ScientificSource,
  SearchResult,
  NasaApod,
} from '../types';

const API_BASE = '/api';

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    let msg = `API error: ${res.status} ${res.statusText}`;
    try {
      const errData = await res.json();
      if (errData?.error) msg = errData.error;
      else if (errData?.message) msg = errData.message;
    } catch {
      // ignore
    }
    throw new Error(msg);
  }
  const json = await res.json();
  return json.data !== undefined ? json.data : json;
}

export const SpaceApi = {
  // Planets
  async getPlanets(): Promise<Planet[]> {
    return fetchJson<Planet[]>(`${API_BASE}/planets`);
  },

  async getPlanet(slug: string): Promise<Planet> {
    return fetchJson<Planet>(`${API_BASE}/planets/${slug}`);
  },

  // Celestial Objects
  async getCelestialObjects(category?: string): Promise<CelestialObject[]> {
    const query = category && category !== 'all' ? `?category=${category}` : '';
    return fetchJson<CelestialObject[]>(`${API_BASE}/celestial-objects${query}`);
  },

  async getCelestialObject(slug: string): Promise<CelestialObject> {
    return fetchJson<CelestialObject>(`${API_BASE}/celestial-objects/${slug}`);
  },

  // Missions
  async getMissions(target?: string, status?: string): Promise<Mission[]> {
    const params = new URLSearchParams();
    if (target && target !== 'all') params.append('target', target);
    if (status && status !== 'all') params.append('status', status);
    const query = params.toString() ? `?${params.toString()}` : '';
    return fetchJson<Mission[]>(`${API_BASE}/missions${query}`);
  },

  // Glossary
  async getGlossary(category?: string): Promise<GlossaryTerm[]> {
    const query = category && category !== 'all' ? `?category=${category}` : '';
    return fetchJson<GlossaryTerm[]>(`${API_BASE}/glossary${query}`);
  },

  // Quiz
  async getQuizQuestions(
    difficulty?: string,
    category?: string,
    limit: number = 10
  ): Promise<QuizQuestion[]> {
    const params = new URLSearchParams();
    if (difficulty) params.append('difficulty', difficulty);
    if (category) params.append('category', category);
    params.append('limit', limit.toString());
    return fetchJson<QuizQuestion[]>(`${API_BASE}/quiz/questions?${params.toString()}`);
  },

  // Facts
  async getRandomFact(category?: string): Promise<SpaceFact> {
    const query = category ? `?category=${category}` : '';
    return fetchJson<SpaceFact>(`${API_BASE}/facts/random${query}`);
  },

  async getAllFacts(): Promise<SpaceFact[]> {
    return fetchJson<SpaceFact[]>(`${API_BASE}/facts`);
  },

  // Sources
  async getSources(): Promise<ScientificSource[]> {
    return fetchJson<ScientificSource[]>(`${API_BASE}/sources`);
  },

  // Global Search
  async search(q: string): Promise<SearchResult[]> {
    if (!q || !q.trim()) return [];
    return fetchJson<SearchResult[]>(`${API_BASE}/search?q=${encodeURIComponent(q.trim())}`);
  },

  // NASA APOD
  async getApod(): Promise<NasaApod> {
    return fetchJson<NasaApod>(`${API_BASE}/space/apod`);
  },
};
