"use client";

import { motion } from "framer-motion";

export type LightSpot = {
  id: string;
  left: string;
  top: string;
  size: number;
  color?: "gold" | "amber" | "warm";
  delay?: number;
};

const DEFAULT_SPOTS: LightSpot[] = [
  { id: "halo", left: "50%", top: "28%", size: 140, color: "gold", delay: 0 },
  { id: "stupa-1", left: "88%", top: "38%", size: 20, delay: 0.4 },
  { id: "stupa-2", left: "90%", top: "48%", size: 18, delay: 1.0 },
  { id: "stupa-3", left: "86%", top: "52%", size: 16, delay: 1.6 },
  { id: "lotus-glow", left: "50%", top: "52%", size: 90, color: "warm", delay: 0 },
];

const colorMap = {
  gold: "rgba(255, 220, 100, 0.55)",
  amber: "rgba(255, 160, 50, 0.5)",
  warm: "rgba(255, 140, 80, 0.35)",
};

export function LightHotspots({ spots = DEFAULT_SPOTS }: { spots?: LightSpot[] }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[25] mix-blend-screen"
      aria-hidden
    >
      {spots.map((spot) => {
        const isHalo = spot.id === "halo";
        const isLotus = spot.id === "lotus-glow";
        const tint = colorMap[spot.color ?? "amber"];

        return (
          <motion.div
            key={spot.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: spot.left,
              top: spot.top,
              width: spot.size,
              height: spot.size,
              background: `radial-gradient(circle, ${tint} 0%, transparent 70%)`,
              filter: isHalo ? "blur(8px)" : "blur(2px)",
            }}
            animate={{
              opacity: isHalo
                ? [0.5, 0.95, 0.55, 0.9, 0.5]
                : isLotus
                  ? [0.25, 0.5, 0.3, 0.45, 0.25]
                  : [0.35, 0.85, 0.45, 0.75, 0.4],
              scale: isHalo
                ? [1, 1.12, 1.02, 1.1, 1]
                : [0.9, 1.08, 0.95, 1.05, 0.9],
              x: isLotus 
                ? [0, -15, 5, -8, 0] // Sway left and right in the wind
                : 0,
            }}
            transition={{
              duration: isHalo ? 5 : isLotus ? 6 : 2.2 + (spot.delay ?? 0),
              repeat: Infinity,
              delay: spot.delay ?? 0,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
