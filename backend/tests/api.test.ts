import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/server.js';

describe('SOLARVERSE REST API Endpoints', () => {
  it('GET /api/health returns healthy status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.app).toBe('SOLARVERSE API');
  });

  it('GET /api/planets returns all 8 planets in heliocentric order', async () => {
    const res = await request(app).get('/api/planets');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBe(8);
    expect(res.body.data).toHaveLength(8);

    // Verify ordering
    expect(res.body.data[0].slug).toBe('mercury');
    expect(res.body.data[1].slug).toBe('venus');
    expect(res.body.data[2].slug).toBe('earth');
    expect(res.body.data[3].slug).toBe('mars');
    expect(res.body.data[4].slug).toBe('jupiter');
    expect(res.body.data[5].slug).toBe('saturn');
    expect(res.body.data[6].slug).toBe('uranus');
    expect(res.body.data[7].slug).toBe('neptune');
  });

  it('GET /api/planets/mars returns detailed profile with all scientific fields', async () => {
    const res = await request(app).get('/api/planets/mars');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    const mars = res.body.data;

    expect(mars.name).toBe('Mars');
    expect(mars.category).toBe('Terrestrial');
    expect(mars.orderFromSun).toBe(4);
    expect(mars.meanDiameterKm).toBe(6779.0);
    expect(mars.gravityMps2).toBeCloseTo(3.72, 1);
    expect(Array.isArray(mars.atmosphereComposition)).toBe(true);
    expect(Array.isArray(mars.notableFeatures)).toBe(true);
    expect(Array.isArray(mars.internalStructure)).toBe(true);
    expect(Array.isArray(mars.faqs)).toBe(true);
    expect(mars.earthComparison).toBeDefined();
  });

  it('GET /api/planets/nonexistent returns 404', async () => {
    const res = await request(app).get('/api/planets/krypton');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });

  it('GET /api/celestial-objects returns dwarf planets, moons and regions', async () => {
    const res = await request(app).get('/api/celestial-objects');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBeGreaterThan(10);
  });

  it('GET /api/celestial-objects/pluto contains IAU dwarf planet explanation', async () => {
    const res = await request(app).get('/api/celestial-objects/pluto');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe('Pluto');
    expect(res.body.data.isDwarfPlanetIauExplained).toBe(true);
  });

  it('GET /api/missions returns historical and active space missions', async () => {
    const res = await request(app).get('/api/missions');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBeGreaterThanOrEqual(8);
  });

  it('GET /api/glossary returns astrophysics definitions', async () => {
    const res = await request(app).get('/api/glossary');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBeGreaterThanOrEqual(10);
  });

  it('GET /api/quiz/questions returns questions by difficulty', async () => {
    const res = await request(app).get('/api/quiz/questions?difficulty=beginner&limit=5');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBeGreaterThan(0);
    expect(res.body.data[0].difficulty).toBe('beginner');
    expect(res.body.data[0].options).toHaveLength(4);
  });

  it('GET /api/search?q=mars finds relevant records across planets, objects, and missions', async () => {
    const res = await request(app).get('/api/search?q=mars');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBeGreaterThan(0);
    const hasMarsPlanet = res.body.data.some((r: any) => r.type === 'planet' && r.title === 'Mars');
    expect(hasMarsPlanet).toBe(true);
  });

  it('GET /api/space/apod returns astronomy picture of the day', async () => {
    const res = await request(app).get('/api/space/apod');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBeDefined();
    expect(res.body.data.url).toBeDefined();
    expect(res.body.data.explanation).toBeDefined();
  });
});
