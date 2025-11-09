import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, BadgeDollarSign, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Earn & Exchange',
    desc: 'Collect credits through rewards and exchange them for high-quality items in a few taps.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    desc: 'Bank-level security and encryption keep your transactions protected at all times.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Best Value',
    desc: 'Transparent pricing and fair exchange rates maximize your buying power.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Snappy performance with instant credit balance updates and notifications.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center"
        >
          Designed for modern credit marketplaces
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500/10 to-blue-600/10">
                <f.icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
