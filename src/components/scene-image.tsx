import Image from "next/image";

export const SCENE_IMAGE = "/vesak-scene.png";

export function toClipPath(cx: number, cy: number, rx: number, ry: number) {
  return `ellipse(${(rx * 100).toFixed(2)}% ${(ry * 100).toFixed(2)}% at ${(cx * 100).toFixed(2)}% ${(cy * 100).toFixed(2)}%)`;
}

export function SceneImage() {
  return (
    <Image
      src={SCENE_IMAGE}
      alt=""
      fill
      aria-hidden
      className="object-cover object-center"
      sizes="100vw"
      quality={92}
    />
  );
}
