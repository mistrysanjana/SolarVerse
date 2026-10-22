import React from 'react';
import { Bookmark } from 'lucide-react';
import { usePreferences } from '../../context/PreferencesContext';

interface FavoriteButtonProps {
  id: string;
  name?: string;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ id, name, className = '' }) => {
  const { isFavorite, toggleFavorite } = usePreferences();
  const favorited = isFavorite(id);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
      }}
      className={`p-2 rounded-xl transition-all flex items-center gap-1.5 ${
        favorited
          ? 'bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
          : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60'
      } ${className}`}
      title={favorited ? `Remove ${name || id} from favorites` : `Save ${name || id} to favorites`}
      aria-label={favorited ? `Remove ${name || id} from favorites` : `Save ${name || id} to favorites`}
    >
      <Bookmark className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
    </button>
  );
};
