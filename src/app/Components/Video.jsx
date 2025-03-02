import React from "react";

export default function Video({Source, Class}) {
  return (
    <video
      src={Source}
      type="video/mp4"
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      className={`${Class} w-[412px] object-cover rounded-[12px] cursor-pointer`}
    />
  );
}

