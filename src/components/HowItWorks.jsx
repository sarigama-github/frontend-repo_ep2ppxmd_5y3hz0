import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Create account', desc: 'Start with a simple signup.' },
  { step: '02', title: 'Connect wallets', desc: 'Link platforms to move credits.' },
  { step: '03', title: 'Swap & donate', desc: 'Exchange instantly and tip a cause.' },
  { step: '04', title: 'Track impact', desc: 'See your history and donations.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-pink-700"
        >
          How it works
        </motion.h2>

        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-pink-100 bg-white/70 p-6 backdrop-blur hover:bg-white"
            >
              <div className="text-xs font-semibold text-rose-500">{s.step}</div>
              <div className="mt-1 font-medium text-pink-700">{s.title}</div>
              <p className="mt-2 text-sm text-pink-800/80">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
