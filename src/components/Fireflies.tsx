"use client";

import { motion } from "framer-motion";

const FIREFLY_COUNT = 18;

function seededRandom(seed: number) {
  const x = Math.sin(seed * 4242) * 10000;
  return x - Math.floor(x);
}

export function Fireflies() {
  const flies = Array.from({ length: FIREFLY_COUNT }, (_, i) => ({
    id: i,
    left: `${12 + seededRandom(i) * 76}%`,
    top: `${28 + seededRandom(i * 2) * 55}%`,
    size: 2 + seededRandom(i * 3) * 3,
    duration: 6 + seededRandom(i * 5) * 8,
    delay: seededRandom(i * 7) * 5,
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 mix-blend-screen"
      aria-hidden
    >
      {flies.map((fly) => (
        <motion.span
          key={fly.id}
          className="absolute rounded-full"
          style={{
            left: fly.left,
            top: fly.top,
            width: fly.size,
            height: fly.size,
            background:
              "radial-gradient(circle, rgba(255,230,120,0.95) 0%, rgba(255,180,40,0.4) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 10, -15, 0],
            opacity: [0, 0.85, 0.5, 0.9, 0],
            scale: [0.5, 1.1, 0.8, 1, 0.5],
          }}
          transition={{
            duration: fly.duration,
            repeat: Infinity,
            delay: fly.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
