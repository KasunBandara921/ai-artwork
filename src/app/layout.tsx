import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vesak — Enlightenment Under the Bodhi Tree",
  description:
    "An animated Vesak scene: Buddha beneath the Bodhi tree, lanterns, and twilight glow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
