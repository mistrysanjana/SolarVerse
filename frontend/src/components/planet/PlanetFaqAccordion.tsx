import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface PlanetFaqAccordionProps {
  faqs: Array<{ question: string; answer: string }>;
  planetName: string;
}

export const PlanetFaqAccordion: React.FC<PlanetFaqAccordionProps> = ({ faqs, planetName }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="bg-space-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-cosmic-cyan" />
        <h3 className="font-display font-bold text-lg text-white">
          Frequently Asked Questions ({planetName})
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-800 bg-space-950/80 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-medium text-slate-200 hover:text-white transition-colors"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-cosmic-cyan flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
