import React from "react";

export default function Underline({ children }) {
  return (
    <u className="underline underline-offset-4 decoration-[3px] decoration-[#dcd9d1]">
      {children}
    </u>
  );
}
