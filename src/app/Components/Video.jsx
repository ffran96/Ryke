import React from "react";

export default function Video({Source}) {
  return (
    <video
      src={Source}
      type="video/mp4"
      autoPlay
      muted
      playsInline
      loop
      className={`w-[415px] aspect-[4/5] xl:aspect-[9/16] object-cover rounded-[12px] cursor-pointer`}
    />
  );
}