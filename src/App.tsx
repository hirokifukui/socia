import { LangProvider } from './i18n';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experiments } from './components/Experiments';
import { Findings } from './components/Findings';
import { Framework } from './components/Framework';
import { About } from './components/About';
import { Paper } from './components/Paper';
import { Footer } from './components/Footer';

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-black text-stone-100 selection:bg-red-900/40 selection:text-white">
        <Navigation />
        <Hero />
        <Experiments />
        <Findings />
        <Framework />
        <About />
        <Paper />
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App
