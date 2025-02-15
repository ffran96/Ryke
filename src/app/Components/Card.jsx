import React from "react";

export default function Card({ children, Title, Height }) {
  return (
    <div className={` ${Height} relative min-h-fit bg-[#0c0c0c] p-5 rounded-b-2xl rounded-xl`}>
      <div className="absolute top-5 right-5 text-[#fffffff3] text-sm bg-[#5d3427] px-4 py-1 rounded-2xl max-w-fit">
        {Title}
      </div>
      {children}
    </div>
  );
}
