import { motion } from 'framer-motion';
import { ShoppingBag, Gift, Headphones, Smartphone } from 'lucide-react';

const items = [
  { icon: Gift, name: 'Gift Cards', credits: 120 },
  { icon: Headphones, name: 'Wireless Headphones', credits: 980 },
  { icon: Smartphone, name: 'Smartphone', credits: 3250 },
  { icon: ShoppingBag, name: 'Merch Bundle', credits: 540 },
];

export default function MarketplacePreview() {
  return (
    <section id="market" className="relative py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Trending items</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Exchange your credits for curated products from top brands.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-md bg-neutral-900 text-white px-4 py-2 font-medium shadow hover:bg-neutral-800">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur p-5 shadow-sm"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500/10 to-blue-600/10">
                <it.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{it.name}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{it.credits.toLocaleString()} credits</p>
              <div className="mt-4 flex items-center justify-between">
                <button className="inline-flex rounded-md bg-gradient-to-r from-orange-500 to-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-90">Exchange</button>
                <button className="inline-flex rounded-md border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800">Buy with credits</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
