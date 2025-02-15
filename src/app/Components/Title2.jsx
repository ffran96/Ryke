import React from "react";

export default function Title2({ children, Class }) {
  return (
    <h2
      className={`${Class} text-5xl font-semibold tracking-wider uppercase`}
    >
      {children}
    </h2>
  );
}
