import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './i18n';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { FacilityPage } from './pages/FacilityPage';
import { FrameworkPage } from './pages/FrameworkPage';
import { AboutPage } from './pages/AboutPage';
import { PapersPage } from './pages/PapersPage';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/research/series-c" element={
          <ComingSoonPage
            titleKey="experiments.seriesc.title"
            descKey="seriesc.coming.desc"
            backTo="/research"
          />
        } />
        <Route path="/research/series-r" element={
          <ComingSoonPage
            titleKey="research.seriesr.title"
            descKey="seriesr.coming.desc"
            backTo="/research"
          />
        } />
        <Route path="/research/series-p" element={
          <ComingSoonPage
            titleKey="research.seriesp.title"
            descKey="seriesp.coming.desc"
            backTo="/research"
          />
        } />
        <Route path="/research/publications" element={
          <ComingSoonPage
            titleKey="research.publications.title"
            descKey="publications.coming.desc"
            backTo="/research"
          />
        } />
        <Route path="/facility" element={<FacilityPage />} />
        <Route path="/framework" element={<FrameworkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/papers" element={<PapersPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-stone-100 selection:bg-red-900/40 selection:text-white">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
