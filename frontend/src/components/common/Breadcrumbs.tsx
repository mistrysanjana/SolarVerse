import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: Array<{ label: string; path?: string }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono py-3 mb-4 overflow-x-auto" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-cosmic-cyan flex items-center gap-1 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            {isLast || !item.path ? (
              <span className="text-cosmic-cyan font-semibold truncate max-w-[200px]" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-slate-200 transition-colors truncate max-w-[200px]">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
