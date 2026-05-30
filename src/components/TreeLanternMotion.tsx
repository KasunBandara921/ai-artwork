"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TREE_LANTERNS } from "./scene-mask-regions";
import { SCENE_IMAGE, SceneImage, toClipPath } from "./scene-image";

function MovingTreeLantern({
  region,
}: {
  region: (typeof TREE_LANTERNS)[number];
}) {
  const clipPath = toClipPath(region.cx, region.cy, region.rx, region.ry);
  const originX = `${region.cx * 100}%`;
  const originY = `${((region.cy - region.ry) * 100).toFixed(2)}%`;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[4]"
      style={{
        clipPath,
        transformOrigin: `${originX} ${originY}`,
      }}
      animate={{
        rotate: [-3, 3, -2, 2.5, -3],
        x: [0, 2, -1.5, 1, 0],
      }}
      transition={{
        duration: region.duration,
        repeat: Infinity,
        delay: region.delay,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0">
        <SceneImage />
      </div>
    </motion.div>
  );
}

/** Full scene image + swaying tree lanterns (no mask holes) */
export function TreeLanternEffect({ alt }: { alt: string }) {
  return (
    <>
      <Image
        src={SCENE_IMAGE}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={92}
      />
      {TREE_LANTERNS.map((region) => (
        <MovingTreeLantern key={region.id} region={region} />
      ))}
    </>
  );
}
