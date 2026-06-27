"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Video({ Source, Class, Href }) {
  const router = useRouter();
  const videoRef = useRef(null);
  const pointerStartRef = useRef({ x: 0, y: 0, moved: false });
  const previewTime = 0.1;

  const videoSource = `${Source}#t=${previewTime}`;

  const showPreviewFrame = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = previewTime;
  };

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  const stopVideo = () => {
    if (!videoRef.current) return;

    document.documentElement.classList.remove("is-pressing-video");
    videoRef.current.pause();
    videoRef.current.currentTime = previewTime;
  };

  const handlePointerDown = (event) => {
    document.documentElement.classList.add("is-pressing-video");
    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      moved: false,
    };
    playVideo();
  };

  const handlePointerMove = (event) => {
    const deltaX = Math.abs(event.clientX - pointerStartRef.current.x);
    const deltaY = Math.abs(event.clientY - pointerStartRef.current.y);

    if (deltaX > 10 || deltaY > 10) {
      pointerStartRef.current.moved = true;
    }
  };

  const handleClick = () => {
    if (!Href || pointerStartRef.current.moved) return;

    router.push(Href);
  };

  return (
    <video
      ref={videoRef}
      src={videoSource}
      type="video/mp4"
      muted
      playsInline
      loop
      preload="auto"
      onLoadedMetadata={showPreviewFrame}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopVideo}
      onPointerCancel={stopVideo}
      onFocus={playVideo}
      onBlur={stopVideo}
      onClick={handleClick}
      onContextMenu={(event) => event.preventDefault()}
      draggable={false}
      className={`${Class} w-[412px] object-cover rounded-[12px] cursor-pointer select-none [-webkit-touch-callout:none]`}
    />
  );
}

