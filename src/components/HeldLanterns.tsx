"use client";

import { motion } from "framer-motion";

export function HeldLanterns() {
  const lanterns = [
    { id: "woman-r", left: "86%", top: "61.5%", delay: 0 },
    // Carefully aligned to the specific painted lantern positions
    { id: "monk-l", left: "10%", top: "64%", delay: 0.2 },
    { id: "monk-l2", left: "17.5%", top: "66%", delay: 0.9 },
    { id: "monk-r", left: "76%", top: "66%", delay: 0.6 },
    // Tree lanterns - adjusted coordinates to match the painted lanterns exactly
    { id: "tree-1", left: "22.5%", top: "22%", delay: 0.3 },
    { id: "tree-2", left: "35%", top: "15%", delay: 0.8 },
    { id: "tree-3", left: "62%", top: "17%", delay: 1.1 },
    { id: "tree-4", left: "78%", top: "23.5%", delay: 0.5 },
    { id: "tree-5", left: "48%", top: "13%", delay: 1.4 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-[22]" aria-hidden>
      {lanterns.map((lantern) => (
        <motion.div
          key={lantern.id}
          className="absolute flex items-center justify-center mix-blend-screen -translate-x-1/2 -translate-y-1/2"
          style={{
            left: lantern.left,
            top: lantern.top,
            width: "40px",
            height: "50px",
          }}
        >
          {/* Soft, flickering rectangular glow precisely tracing the lantern shape */}
          <motion.div
            className="absolute rounded-md blur-[4px]"
            style={{
              width: "30px",
              height: "45px",
              background: "rgba(255, 200, 50, 0.4)",
              boxShadow: "0 0 15px 8px rgba(255, 150, 40, 0.6)",
            }}
            animate={{
              opacity: [0.5, 1, 0.6, 0.9, 0.4],
              scale: [0.95, 1.05, 0.98, 1.02, 0.95],
            }}
            transition={{
              duration: 0.5 + lantern.delay * 0.2, // Slightly offset timings
              repeat: Infinity,
              delay: lantern.delay,
              ease: "linear",
            }}
          />

          {/* Large ambient light spread radiating from the lamp into the misty background */}
          <motion.div
            className="absolute rounded-full -z-10 mix-blend-screen"
            style={{
              width: "130px",
              height: "130px",
              background: `radial-gradient(circle, rgba(255, 180, 50, 0.5) 0%, transparent 70%)`,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: [0.6, 0.9, 0.7, 1.0, 0.6],
              scale: [0.95, 1.05, 0.98, 1.02, 0.95],
            }}
            transition={{
              duration: 0.8 + lantern.delay * 0.1,
              repeat: Infinity,
              delay: lantern.delay,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
