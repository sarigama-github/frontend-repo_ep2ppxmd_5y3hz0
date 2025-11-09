import { motion } from 'framer-motion';
import { Wallet, ArrowRightLeft, ShoppingCart, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Load credits',
    desc: 'Earn through rewards or top up with your preferred payment method.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Exchange',
    desc: 'Swap credits for items or convert between categories instantly.',
  },
  {
    icon: ShoppingCart,
    title: 'Buy with credits',
    desc: 'Checkout seamlessly using your balance with no hidden fees.',
  },
  {
    icon: CheckCircle2,
    title: 'Enjoy',
    desc: 'Track orders and unlock bonuses for every purchase you make.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center"
        >
          How it works
        </motion.h2>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500/10 to-blue-600/10">
                <s.icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
