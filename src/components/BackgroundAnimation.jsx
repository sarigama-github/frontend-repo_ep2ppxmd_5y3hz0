import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  const blobs = [
    { x: -200, y: -100, size: 380, color: 'from-rose-400/40 to-pink-300/30' },
    { x: 120, y: 40, size: 300, color: 'from-pink-400/30 to-rose-300/20' },
    { x: -50, y: 180, size: 420, color: 'from-fuchsia-400/20 to-pink-300/20' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.4, x: b.x, y: b.y }}
          animate={{
            y: [b.y, b.y + 20, b.y - 20, b.y],
            x: [b.x, b.x + 10, b.x - 10, b.x],
          }}
          transition={{ duration: 18 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute blur-3xl bg-gradient-to-br ${b.color} rounded-full`}
          style={{ width: b.size, height: b.size }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(251,113,133,0.12),transparent_60%)]" />
    </div>
  );
}
