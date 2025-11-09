import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/70 to-white"></div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <h1 className="font-semibold leading-tight tracking-tight text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-rose-500">
            Exchange Credits. Support Causes. Feel Good.
          </h1>
          <p className="mt-4 text-pink-800/80 md:text-lg">
            A clean, fast way to swap platform credits and donate the change. Simple, secure, and kind.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-3 text-white shadow-sm hover:shadow-md transition">
              Get Started
            </button>
            <button className="rounded-xl border border-pink-200 bg-white/70 px-5 py-3 text-pink-700 hover:bg-white transition">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="z-10"
        >
          <GlassPane />
        </motion.div>
      </div>
    </section>
  );
}

function GlassPane() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_0%,rgba(244,114,182,0.25),transparent),radial-gradient(600px_200px_at_100%_60%,rgba(251,113,133,0.18),transparent)]" />

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <DonationBox />
        <CycleList />
      </div>

      <AnimatedStripes />
    </div>
  );
}

function DonationBox() {
  // Cartoon coin donation box using pure JSX shapes
  return (
    <div className="relative mx-auto grid h-64 w-full place-items-center">
      {/* Box */}
      <div className="relative h-40 w-44 rounded-xl bg-gradient-to-br from-rose-200 via-pink-100 to-white shadow-xl">
        <div className="absolute -top-4 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-300 to-pink-300 shadow-md" />
        <div className="absolute top-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-rose-400/70" />
        <div className="absolute inset-x-0 bottom-3 mx-auto h-7 w-32 rounded-md bg-white/70 backdrop-blur border border-pink-200 text-center text-pink-700 font-semibold grid place-items-center">
          DONATE
        </div>
      </div>

      {/* Coins cycle */}
      <div className="absolute -top-2">
        <CoinCycle />
      </div>
    </div>
  );
}

function CoinCycle() {
  const coins = [0, 1, 2, 3];
  return (
    <div className="relative h-28 w-28">
      {coins.map((c, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-b from-yellow-300 to-amber-300 shadow"
          style={{ rotate: `${(i * 360) / coins.length}deg`, transformOrigin: '0 56px' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-300 border border-amber-400 grid place-items-center text-amber-700 font-bold text-xs">
            ¢
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CycleList() {
  const items = [
    { title: 'Top up credits', desc: 'Load from any partner platform.' },
    { title: 'Swap instantly', desc: 'Best rates, zero hassle.' },
    { title: 'Donate the rest', desc: 'Send spare change to causes.' },
    { title: 'Track impact', desc: 'See how your credits help.' },
  ];
  return (
    <ul className="space-y-4">
      {items.map((it, idx) => (
        <motion.li
          key={it.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: idx * 0.08 }}
          className="rounded-2xl border border-pink-100 bg-white/70 p-4 backdrop-blur hover:bg-white/80"
        >
          <p className="font-medium text-pink-700">{it.title}</p>
          <p className="text-sm text-pink-800/70">{it.desc}</p>
        </motion.li>
      ))}
    </ul>
  );
}

function AnimatedStripes() {
  return (
    <div className="pointer-events-none relative mt-6 h-16 overflow-hidden rounded-xl">
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(244,114,182,0.25)_25%,transparent_25%),linear-gradient(110deg,transparent_50%,rgba(244,114,182,0.25)_50%),linear-gradient(110deg,rgba(251,113,133,0.18)_75%,transparent_75%)] bg-[length:200%_100%]"
        animate={{ backgroundPosition: ['200% 0%', '0% 0%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
