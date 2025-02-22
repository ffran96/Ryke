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
      preload="auto"
      className={`${Class} w-[415px] object-cover rounded-[12px] cursor-pointer`}
    />
  );
}