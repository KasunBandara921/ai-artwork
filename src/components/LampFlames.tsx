"use client";

import { motion } from "framer-motion";

export function LampFlames() {
  const lamps = [
    { id: "diya-1", left: "32%", top: "78%", size: 22, delay: 0.1 },
    { id: "diya-2", left: "42%", top: "82%", size: 20, delay: 0.7 },
    { id: "diya-3", left: "52%", top: "80%", size: 24, delay: 1.3 },
    { id: "diya-4", left: "58%", top: "84%", size: 18, delay: 0.5 },
    { id: "diya-5", left: "48%", top: "86%", size: 20, delay: 1.8 },
    { id: "diya-6", left: "38%", top: "84%", size: 16, delay: 1.1 },
  ];

  const tint = "rgba(255, 160, 50, 0.5)";

  return (
    <div className="pointer-events-none absolute inset-0 z-20 mix-blend-screen" aria-hidden>
      {lamps.map((lamp) => (
        <div
          key={lamp.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{
            left: lamp.left,
            top: lamp.top,
            width: lamp.size,
            height: lamp.size,
          }}
        >
          {/* The soft glowing halo around the flame */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${tint} 0%, transparent 70%)`,
              filter: "blur(2px)",
            }}
            animate={{
              opacity: [0.4, 1.0, 0.6, 0.9, 0.5, 0.8, 0.4],
              scale: [0.9, 1.15, 0.95, 1.1, 0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 0.6 + lamp.delay * 0.3,
              repeat: Infinity,
              delay: lamp.delay,
              ease: "linear",
            }}
          />

          {/* The intense moving central core (Overrides the static flame pixels in the image) */}
          <motion.div
            className="w-[6px] h-[10px] bg-[#fffade] rounded-[50%_50%_20%_20%] blur-[1px] absolute z-10"
            style={{
              boxShadow: "0 0 4px 2px rgba(255, 200, 50, 0.8)"
            }}
            animate={{
              x: [0, 1.5, -1, 2, -1.5, 0],
              y: [0, -1.5, 1, -2, 0.5, 0],
              scaleY: [1, 1.3, 0.85, 1.2, 0.9, 1],
              skewX: [0, 5, -5, 8, -4, 0]
            }}
            transition={{
              duration: 0.35 + lamp.delay * 0.1,
              repeat: Infinity,
              ease: "linear",
              delay: lamp.delay,
            }}
          />
        </div>
      ))}
    </div>
  );
}
