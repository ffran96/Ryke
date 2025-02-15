import React from "react";

export default function Video({Source, PosterImage}) {
  return (
    <video
      src={Source}
      type="video/mp4"
      preload="auto"
      poster={PosterImage}
      autoPlay
      muted
      playsInline
      loop
      className={`w-[415px] aspect-[9/16] object-cover rounded-[12px] cursor-pointer`}
    />
  );
}