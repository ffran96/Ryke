"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useRouter } from "next/navigation";

const Video = forwardRef(function Video({ Source, Class, Href, Controlled = false }, ref) {
  const router = useRouter();
  const videoRef = useRef(null);
  const pointerStartRef = useRef({ x: 0, y: 0, moved: false });
  const previewTime = 0.1;
  const sizeClass = Class || "aspect-video w-[412px]";

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

  useImperativeHandle(ref, () => ({
    play: playVideo,
    stop: stopVideo,
  }));

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
      onMouseEnter={Controlled ? undefined : playVideo}
      onMouseLeave={Controlled ? undefined : stopVideo}
      onPointerDown={Controlled ? undefined : handlePointerDown}
      onPointerMove={Controlled ? undefined : handlePointerMove}
      onPointerUp={Controlled ? undefined : stopVideo}
      onPointerCancel={Controlled ? undefined : stopVideo}
      onFocus={Controlled ? undefined : playVideo}
      onBlur={Controlled ? undefined : stopVideo}
      onClick={Controlled ? undefined : handleClick}
      onContextMenu={(event) => event.preventDefault()}
      draggable={false}
      className={`${sizeClass} object-cover rounded-[12px] cursor-pointer select-none [-webkit-touch-callout:none]`}
    />
  );
});

export default Video;

