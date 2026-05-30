"use client";

import { motion } from "framer-motion";

export function SwayingVines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[15]"
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 120 800"
        className="absolute left-0 top-0 h-full w-[8%] min-w-[40px] max-w-[90px] opacity-40"
        preserveAspectRatio="xMinYMin slice"
        animate={{ rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
      >
        <path
          d="M60 0 Q40 120 55 240 T50 400 T58 560 T52 720 T60 800"
          fill="none"
          stroke="rgba(80,120,60,0.6)"
          strokeWidth="3"
        />
        {[120, 240, 360, 480, 600].map((y, i) => (
          <motion.circle
            key={y}
            cx={48 + (i % 2) * 24}
            cy={y}
            r="4"
            fill="rgba(180,220,100,0.35)"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.svg>

      <motion.svg
        viewBox="0 0 120 800"
        className="absolute right-0 top-0 h-full w-[8%] min-w-[40px] max-w-[90px] opacity-35"
        preserveAspectRatio="xMaxYMin slice"
        animate={{ rotate: [1.2, -1.2, 1.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
      >
        <path
          d="M60 0 Q80 140 65 280 T70 440 T62 600 T68 760 T60 800"
          fill="none"
          stroke="rgba(70,110,55,0.55)"
          strokeWidth="2.5"
        />
      </motion.svg>
    </div>
  );
}
