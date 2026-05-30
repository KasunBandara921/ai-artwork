"use client";

import { motion } from "framer-motion";

const PETALS = 12;

function seededRandom(seed: number) {
  const x = Math.sin(seed * 3141) * 10000;
  return x - Math.floor(x);
}

export function FloatingPetals() {
  const petals = Array.from({ length: PETALS }, (_, i) => ({
    id: i,
    left: `${seededRandom(i) * 100}%`,
    delay: seededRandom(i * 2) * 8,
    duration: 14 + seededRandom(i * 3) * 10,
    rotate: seededRandom(i * 4) * 360,
    scale: 0.4 + seededRandom(i * 5) * 0.6,
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[35] overflow-hidden"
      aria-hidden
    >
      {petals.map((petal) => (
        <motion.svg
          key={petal.id}
          viewBox="0 0 24 16"
          className="absolute text-pink-300/50"
          style={{
            left: petal.left,
            width: 18 * petal.scale,
            height: 12 * petal.scale,
            filter: "drop-shadow(0 0 4px rgba(255,150,180,0.4))",
          }}
          initial={{ y: "105vh", opacity: 0, rotate: petal.rotate }}
          animate={{
            y: ["105vh", "-10vh"],
            opacity: [0, 0.7, 0.5, 0],
            rotate: [petal.rotate, petal.rotate + 180],
            // Added dramatic, sweeping side-to-side movements to simulate a strong wind gust
            x: [0, -120, -180, -80, -250],
          }}
          transition={{
            duration: petal.duration * 0.7, // Petals move faster due to the wind
            repeat: Infinity,
            delay: petal.delay,
            ease: "easeInOut", // Smoother arcing motion for the wind
          }}
        >
          {/* Changed the simple ellipse to a more detailed, curved lotus petal path */}
          <path 
            d="M 12 1 C 18 4 22 10 12 15 C 2 10 6 4 12 1 Z" 
            fill="currentColor" 
          />
        </motion.svg>
      ))}
    </div>
  );
}
