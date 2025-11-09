import { motion } from 'framer-motion';
import { Shield, Zap, Gift } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Strong encryption and transparent fees keep every swap safe.',
  },
  {
    icon: Zap,
    title: 'Fast & simple',
    desc: 'No clutter—just smooth, instant exchanges in a few taps.',
  },
  {
    icon: Gift,
    title: 'Give back easily',
    desc: 'Auto-donate leftover credits to vetted causes you choose.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-pink-700"
        >
          Why you’ll love it
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-pink-100 bg-white/70 p-6 backdrop-blur hover:bg-white shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 text-white">
                  {<f.icon size={18} />}
                </div>
                <p className="font-medium text-pink-700">{f.title}</p>
              </div>
              <p className="mt-3 text-pink-800/80 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
