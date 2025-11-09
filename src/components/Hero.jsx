import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] pt-20 overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[90vh] items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
          >
            Exchange credits for things you love
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300"
          >
            A modern marketplace to trade and purchase items using credits. Fast, secure, and rewarding.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#market" className="inline-flex justify-center rounded-md bg-neutral-900 text-white px-5 py-3 font-medium shadow hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Explore marketplace
            </a>
            <a href="#how" className="inline-flex justify-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium shadow border border-neutral-200 hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700">
              How it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
