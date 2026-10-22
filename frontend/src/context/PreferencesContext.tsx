import React, { createContext, useContext, useState, useEffect } from 'react';

export type UnitType = 'metric' | 'imperial';

export interface RecentItem {
  slug: string;
  name: string;
  type: string;
  url: string;
  timestamp: number;
}

interface PreferencesContextType {
  unit: UnitType;
  setUnit: (unit: UnitType) => void;
  toggleUnit: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
  recentItems: RecentItem[];
  addRecentItem: (item: Omit<RecentItem, 'timestamp'>) => void;
  clearRecentItems: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

const FAVORITES_KEY = 'solarverse_favorites_v1';
const RECENT_KEY = 'solarverse_recent_v1';
const UNIT_KEY = 'solarverse_unit_v1';
const REDUCED_MOTION_KEY = 'solarverse_reduced_motion_v1';

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Unit Preference
  const [unit, setUnitState] = useState<UnitType>(() => {
    try {
      const saved = localStorage.getItem(UNIT_KEY);
      return saved === 'imperial' ? 'imperial' : 'metric';
    } catch {
      return 'metric';
    }
  });

  const setUnit = (newUnit: UnitType) => {
    setUnitState(newUnit);
    try {
      localStorage.setItem(UNIT_KEY, newUnit);
    } catch (e) {
      console.warn('localStorage not available', e);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : ['earth', 'jupiter', 'saturn', 'pluto'];
    } catch {
      return ['earth', 'jupiter', 'saturn', 'pluto'];
    }
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('localStorage error', e);
      }
      return updated;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const clearFavorites = () => {
    setFavorites([]);
    try {
      localStorage.removeItem(FAVORITES_KEY);
    } catch (e) {
      console.warn('localStorage error', e);
    }
  };

  // Recently Viewed
  const [recentItems, setRecentItems] = useState<RecentItem[]>(() => {
    try {
      const saved = localStorage.getItem(RECENT_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const addRecentItem = (item: Omit<RecentItem, 'timestamp'>) => {
    setRecentItems((prev) => {
      const filtered = prev.filter((r) => r.slug !== item.slug);
      const updated = [{ ...item, timestamp: Date.now() }, ...filtered].slice(0, 10);
      try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('localStorage error', e);
      }
      return updated;
    });
  };

  const clearRecentItems = () => {
    setRecentItems([]);
    try {
      localStorage.removeItem(RECENT_KEY);
    } catch (e) {
      console.warn('localStorage error', e);
    }
  };

  // Reduced Motion
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(REDUCED_MOTION_KEY);
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  });

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(REDUCED_MOTION_KEY, String(next));
      } catch (e) {
        console.warn('localStorage error', e);
      }
      return next;
    });
  };

  return (
    <PreferencesContext.Provider
      value={{
        unit,
        setUnit,
        toggleUnit,
        favorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        recentItems,
        addRecentItem,
        clearRecentItems,
        reducedMotion,
        toggleReducedMotion,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
