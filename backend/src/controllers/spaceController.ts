import { Request, Response, NextFunction } from 'express';
import { SpaceService } from '../services/spaceService.js';
import {
  SearchQuerySchema,
  QuizQuerySchema,
  SlugParamSchema,
} from '../validators/spaceValidators.js';

export class SpaceController {
  static async getHealth(_req: Request, res: Response) {
    res.json({
      status: 'healthy',
      app: 'SOLARVERSE API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    });
  }

  static async getPlanets(_req: Request, res: Response, next: NextFunction) {
    try {
      const planets = await SpaceService.getAllPlanets();
      res.json({ success: true, count: planets.length, data: planets });
    } catch (err) {
      next(err);
    }
  }

  static async getPlanetBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { slug } = SlugParamSchema.parse(req.params);
      const planet = await SpaceService.getPlanetBySlug(slug);
      if (!planet) {
        return res.status(404).json({ success: false, message: `Planet '${slug}' not found` });
      }
      res.json({ success: true, data: planet });
    } catch (err) {
      next(err);
    }
  }

  static async getCelestialObjects(req: Request, res: Response, next: NextFunction) {
    try {
      const category = req.query.category as string | undefined;
      const objects = await SpaceService.getAllCelestialObjects(category);
      res.json({ success: true, count: objects.length, data: objects });
    } catch (err) {
      next(err);
    }
  }

  static async getCelestialObjectBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { slug } = SlugParamSchema.parse(req.params);
      const obj = await SpaceService.getCelestialObjectBySlug(slug);
      if (!obj) {
        return res.status(404).json({ success: false, message: `Celestial object '${slug}' not found` });
      }
      res.json({ success: true, data: obj });
    } catch (err) {
      next(err);
    }
  }

  static async getMissions(req: Request, res: Response, next: NextFunction) {
    try {
      const target = req.query.target as string | undefined;
      const status = req.query.status as string | undefined;
      const missions = await SpaceService.getAllMissions(target, status);
      res.json({ success: true, count: missions.length, data: missions });
    } catch (err) {
      next(err);
    }
  }

  static async getGlossary(req: Request, res: Response, next: NextFunction) {
    try {
      const category = req.query.category as string | undefined;
      const glossary = await SpaceService.getGlossary(category);
      res.json({ success: true, count: glossary.length, data: glossary });
    } catch (err) {
      next(err);
    }
  }

  static async getQuizQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const query = QuizQuerySchema.parse(req.query);
      const questions = await SpaceService.getQuizQuestions(
        query.difficulty,
        query.category,
        query.limit
      );
      res.json({ success: true, count: questions.length, data: questions });
    } catch (err) {
      next(err);
    }
  }

  static async getRandomFact(req: Request, res: Response, next: NextFunction) {
    try {
      const category = req.query.category as string | undefined;
      const fact = await SpaceService.getRandomFact(category);
      res.json({ success: true, data: fact });
    } catch (err) {
      next(err);
    }
  }

  static async getAllFacts(_req: Request, res: Response, next: NextFunction) {
    try {
      const facts = await SpaceService.getAllFacts();
      res.json({ success: true, count: facts.length, data: facts });
    } catch (err) {
      next(err);
    }
  }

  static async getSources(_req: Request, res: Response, next: NextFunction) {
    try {
      const sources = await SpaceService.getSources();
      res.json({ success: true, count: sources.length, data: sources });
    } catch (err) {
      next(err);
    }
  }

  static async search(req: Request, res: Response, next: NextFunction) {
    try {
      const { q } = SearchQuerySchema.parse(req.query);
      const results = await SpaceService.search(q);
      res.json({ success: true, query: q, count: results.length, data: results });
    } catch (err) {
      next(err);
    }
  }

  static async getNasaApod(_req: Request, res: Response, next: NextFunction) {
    try {
      const apod = await SpaceService.getNasaApod();
      res.json({ success: true, data: apod });
    } catch (err) {
      next(err);
    }
  }
}
