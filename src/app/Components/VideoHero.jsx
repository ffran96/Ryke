"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function VideoHero() {
  const videoRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (videoRef.current) {
/*       videoRef.current.load(); // Reiniciar el video al cambiar de ruta
 */    }
  }, [pathname]);

  return (
    <video
      ref={videoRef}
      className="h-dvh w-dvw object-cover absolute -z-10"
      src="/video-hero.mp4"
      autoPlay
      playsInline
      preload="auto"
      loop
      muted
    />
  );
}
