"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { Fireflies } from "./Fireflies";
import { TreeLanternEffect } from "./TreeLanternMotion";
import { FloatingPetals } from "./FloatingPetals";
import { LightHotspots } from "./LightHotspots";
import { LampFlames } from "./LampFlames";
import { HeldLanterns } from "./HeldLanterns";
import { Stars } from "./Stars";
import { SwayingVines } from "./SwayingVines";

const PARALLAX_STRENGTH = 12;

const TECHNOLOGIES = [
  { name: 'Next.js', version: '15.5.2' },
  { name: 'React', version: '19.1.1' },
  { name: 'Framer Motion', version: '12.23.12' },
  { name: 'Tailwind CSS', version: '4.1.12' },
  { name: 'TypeScript', version: '5.9.2' },
];

export function VesakScene() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [showTech, setShowTech] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  const bgX = useTransform(springX, (v) => v * 0.4);
  const bgY = useTransform(springY, (v) => v * 0.4);
  const midX = useTransform(springX, (v) => v * 0.8);
  const midY = useTransform(springY, (v) => v * 0.8);
  const fgX = useTransform(springX, (v) => v * 1.2);
  const fgY = useTransform(springY, (v) => v * 1.2);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(nx * PARALLAX_STRENGTH);
      mouseY.set(ny * PARALLAX_STRENGTH);
    },
    [mouseX, mouseY],
  );

  const handlePointerLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-[#0a1628]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Vesak scene with Buddha under the Bodhi tree"
    >
      {/* Fills viewport edge-to-edge — no page scroll */}
      <motion.div
        className="absolute inset-0"
        style={{ x: bgX, y: bgY }}
      >
        <TreeLanternEffect alt="Buddha meditating on a lotus beneath the Bodhi tree at Vesak, with lanterns and a stupa at twilight" />

          {/* Light vignette — kept subtle so edges stay visible */}
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,22,40,0.35)_100%)]"
            aria-hidden
          />

          {/* Mid effects — aligned to image bounds */}
          <motion.div
            className="absolute inset-0 z-20"
            style={{ x: midX, y: midY }}
          >
            <Stars />
            <SwayingVines />
            <LightHotspots />
            <LampFlames />
            <HeldLanterns />
          </motion.div>

          {/* Foreground effects */}
          <motion.div
            className="absolute inset-0 z-30"
            style={{ x: fgX, y: fgY }}
          >
            <Fireflies />
            <FloatingPetals />
          </motion.div>

          {/* Ambient shimmer */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-40 mix-blend-overlay"
            aria-hidden
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(255,210,80,0.2), transparent)",
            }}
          />
      </motion.div>

      {/* Title overlay */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-4 text-center sm:pt-6">
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.35em] text-amber-200/80 sm:text-sm"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Vesak
        </motion.p>
        <motion.h1
          className="mt-2 max-w-xl text-2xl font-light tracking-wide text-amber-50/95 sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2 }}
        >
          Under the Bodhi Tree
        </motion.h1>
        <motion.p
          className="mt-3 max-w-md text-sm text-amber-100/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Move your cursor to feel the light
        </motion.p>
      </header>

      <motion.footer
        className="pointer-events-none absolute inset-x-0 bottom-0 z-50 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent px-6 pb-5 pt-12 text-center sm:pb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-amber-100/75 sm:text-base">
          On Vesak, we celebrate the birth, enlightenment, and passing of the
          Buddha — a night of lanterns, lotus light, and peaceful reflection.
        </p>
      </motion.footer>

      {/* Tech Info Button */}
      <motion.button
        onClick={() => setShowTech(!showTech)}
        className="pointer-events-auto absolute bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/80 hover:bg-amber-500 transition-colors shadow-lg backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="text-xl font-bold text-white">⚙️</span>
      </motion.button>

      {/* Tech Info Modal */}
      {showTech && (
        <motion.div
          className="pointer-events-auto absolute bottom-20 left-6 z-50 rounded-lg bg-[#1a2a3a]/95 backdrop-blur-md border border-amber-500/30 p-4 w-64 shadow-2xl"
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-amber-300">Technologies</h3>
            <button
              onClick={() => setShowTech(false)}
              className="text-amber-300/60 hover:text-amber-300 text-lg"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2">
            {TECHNOLOGIES.map((tech) => (
              <div key={tech.name} className="flex items-center justify-between text-xs">
                <span className="text-amber-200/80">{tech.name}</span>
                <span className="text-amber-400/60 font-mono">{tech.version}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
