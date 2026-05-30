"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STAR_COUNT = 48;

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function Stars() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    left: `${seededRandom(i * 3) * 100}%`,
    top: `${seededRandom(i * 7) * 38}%`,
    size: 1 + seededRandom(i * 11) * 2.5,
    delay: seededRandom(i * 13) * 4,
    duration: 2 + seededRandom(i * 17) * 3,
  }));

  if (!isClient) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20"
      aria-hidden
    >
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 6px 1px rgba(255,255,255,0.6)",
          }}
          animate={{
            opacity: [0.15, 0.9, 0.2],
            scale: [0.8, 1.2, 0.9],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
