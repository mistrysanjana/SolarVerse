import { z } from 'zod';

export const SearchQuerySchema = z.object({
  q: z.string().min(1).max(100),
  category: z.enum(['all', 'planets', 'objects', 'missions', 'glossary']).optional().default('all'),
});

export const QuizQuerySchema = z.object({
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  category: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).optional().default(10),
});

export const SlugParamSchema = z.object({
  slug: z.string().min(1).max(80).regex(/^[a-z0-9-]+$/i, 'Invalid slug format'),
});

export const CompareQuerySchema = z.object({
  planets: z.string().min(1), // comma separated slugs e.g. "earth,mars"
});
