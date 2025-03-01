import React from "react";

export default function Title2({ children, Class }) {
  return (
    <h2
      className={`${Class} text-xl xl:text-3xl font-semibold tracking-wider uppercase`}
    >
      {children}
    </h2>
  );
}
