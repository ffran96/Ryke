"use client";

import React, { useRef } from "react";

export default function Video({Source, Class}) {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const stopVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      src={Source}
      type="video/mp4"
      muted
      playsInline
      loop
      preload="metadata"
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      onFocus={playVideo}
      onBlur={stopVideo}
      className={`${Class} w-[412px] object-cover rounded-[12px] cursor-pointer`}
    />
  );
}

