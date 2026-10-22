import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';
import { PreferencesProvider } from './context/PreferencesContext';

// Pages
import { HomePage } from './pages/HomePage';
import { Explore3DPage } from './pages/Explore3DPage';
import { PlanetsListPage } from './pages/PlanetsListPage';
import { PlanetDetailPage } from './pages/PlanetDetailPage';
import { CelestialObjectsPage } from './pages/CelestialObjectsPage';
import { MissionsPage } from './pages/MissionsPage';
import { ComparePage } from './pages/ComparePage';
import { QuizPage } from './pages/QuizPage';
import { CalculatorsPage } from './pages/CalculatorsPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { SpaceNowPage } from './pages/SpaceNowPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <PreferencesProvider>
      <div className="flex flex-col min-h-screen bg-space-950 text-slate-100">
        <ScrollToTop />
        <Navbar onOpenSearch={() => setSearchOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore-3d" element={<Explore3DPage />} />
            <Route path="/planets" element={<PlanetsListPage />} />
            <Route path="/planets/:slug" element={<PlanetDetailPage />} />
            <Route path="/celestial-objects" element={<CelestialObjectsPage />} />
            <Route path="/celestial-objects/:slug" element={<CelestialObjectsPage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/space-now" element={<SpaceNowPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </PreferencesProvider>
  );
};

export default App;
