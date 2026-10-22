import React from 'react';
import { QuizEngine } from '../components/quiz/QuizEngine';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const QuizPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-950 pt-24 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Astronomy Quiz' }]} />
        <QuizEngine />
      </div>
    </div>
  );
};
