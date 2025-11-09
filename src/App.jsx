import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-pink-900 relative">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <footer className="relative border-t border-pink-100 bg-white/70 backdrop-blur py-10 mt-10">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <p className="text-sm text-pink-800/70">© {new Date().getFullYear()} CreditExchange</p>
          <div className="text-sm text-pink-800/70">Built with love.</div>
        </div>
      </footer>
    </div>
  );
}
