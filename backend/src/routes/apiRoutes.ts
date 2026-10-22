import { Router } from 'express';
import { SpaceController } from '../controllers/spaceController.js';

export const apiRouter = Router();

// Health Check
apiRouter.get('/health', SpaceController.getHealth);

// Planets
apiRouter.get('/planets', SpaceController.getPlanets);
apiRouter.get('/planets/:slug', SpaceController.getPlanetBySlug);

// Celestial Objects
apiRouter.get('/celestial-objects', SpaceController.getCelestialObjects);
apiRouter.get('/celestial-objects/:slug', SpaceController.getCelestialObjectBySlug);

// Missions
apiRouter.get('/missions', SpaceController.getMissions);

// Glossary
apiRouter.get('/glossary', SpaceController.getGlossary);

// Quiz
apiRouter.get('/quiz/questions', SpaceController.getQuizQuestions);

// Facts
apiRouter.get('/facts', SpaceController.getAllFacts);
apiRouter.get('/facts/random', SpaceController.getRandomFact);

// Scientific Sources
apiRouter.get('/sources', SpaceController.getSources);

// Global Search
apiRouter.get('/search', SpaceController.search);

// NASA Space Now / APOD
apiRouter.get('/space/apod', SpaceController.getNasaApod);
