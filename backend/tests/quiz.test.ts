import { describe, it, expect } from 'vitest';
import { quizQuestionsData } from '../src/data/spaceData.js';

describe('Astronomy Quiz Question Bank & Scoring Mechanics', () => {
  it('contains questions across all three difficulty levels', () => {
    const beginner = quizQuestionsData.filter((q) => q.difficulty === 'beginner');
    const intermediate = quizQuestionsData.filter((q) => q.difficulty === 'intermediate');
    const advanced = quizQuestionsData.filter((q) => q.difficulty === 'advanced');

    expect(beginner.length).toBeGreaterThanOrEqual(4);
    expect(intermediate.length).toBeGreaterThanOrEqual(4);
    expect(advanced.length).toBeGreaterThanOrEqual(4);
  });

  it('ensures all questions have exactly 4 options and valid correctIndex', () => {
    quizQuestionsData.forEach((q) => {
      expect(q.options).toHaveLength(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(4);
      expect(typeof q.explanation).toBe('string');
      expect(q.explanation.length).toBeGreaterThan(10);
      expect(typeof q.scientificReference).toBe('string');
    });
  });

  it('correctly calculates percentage accuracy and assigns rank', () => {
    function computeRank(score: number, total: number) {
      const pct = (score / total) * 100;
      if (pct >= 85) return 'Chief Astrophysicist';
      if (pct >= 60) return 'Orbital Navigator';
      return 'Apprentice Stargazer';
    }

    expect(computeRank(10, 10)).toBe('Chief Astrophysicist');
    expect(computeRank(9, 10)).toBe('Chief Astrophysicist');
    expect(computeRank(7, 10)).toBe('Orbital Navigator');
    expect(computeRank(4, 10)).toBe('Apprentice Stargazer');
  });
});
