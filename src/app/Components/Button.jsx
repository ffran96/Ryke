import React from "react";

export default function Button({ Label, Link }) {
  return (
    <a
      href={Link}
      target="_blank"
      className={`flex items-center justify-center bg-[#5d3427] uppercase max-w-fit py-3 px-4 rounded-3xl tracking-widest font-semibold text-sm xl:hover:text-[#5d3427] xl:hover:bg-[#ffffff] xl:transition-colors xl:ease-in-out xl:duration-300`}
    >
      {Label}
    </a>
  );
}
