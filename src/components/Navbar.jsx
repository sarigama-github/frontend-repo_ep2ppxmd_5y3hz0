import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 text-white">
              <Heart size={18} />
            </div>
            <span className="font-semibold tracking-tight text-pink-600">CreditExchange</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-pink-700/80">
            <a href="#features" className="hover:text-pink-700 transition-colors">Features</a>
            <a href="#how" className="hover:text-pink-700 transition-colors">How it works</a>
            <a href="#donate" className="hover:text-pink-700 transition-colors">Donate</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-pink-200 bg-white/70 px-4 py-2 text-sm text-pink-700 hover:bg-white transition-colors">Sign in</button>
            <button className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2 text-sm text-white shadow-sm hover:shadow-md transition-shadow">Get started</button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
