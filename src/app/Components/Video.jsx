"use client";

import React, { useRef } from "react";

export default function Video({Source, Class}) {
  const videoRef = useRef(null);
  const previewTime = 0.1;

  const showPreviewFrame = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = previewTime;
  };

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  const stopVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = previewTime;
  };

  return (
    <video
      ref={videoRef}
      src={Source}
      type="video/mp4"
      muted
      playsInline
      loop
      preload="auto"
      onLoadedMetadata={showPreviewFrame}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      onTouchStart={playVideo}
      onTouchEnd={stopVideo}
      onTouchCancel={stopVideo}
      onFocus={playVideo}
      onBlur={stopVideo}
      className={`${Class} w-[412px] object-cover rounded-[12px] cursor-pointer`}
    />
  );
}

