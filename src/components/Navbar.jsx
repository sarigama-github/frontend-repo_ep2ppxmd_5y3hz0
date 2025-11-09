import { motion } from 'framer-motion';
import { Rocket, Wallet, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <Rocket className="h-6 w-6 text-orange-500" />
            <span>CrediX</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Features</a>
            <a href="#how" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">How it works</a>
            <a href="#market" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Marketplace</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              <Wallet className="h-4 w-4" />
              Sign in
            </button>
            <a href="#market" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
              <ShoppingCart className="h-4 w-4" />
              Get started
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
