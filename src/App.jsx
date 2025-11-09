import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import MarketplacePreview from './components/MarketplacePreview';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <MarketplacePreview />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} CrediX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
