import React from "react";

export default function Title1({ children, Class }) {
  return (
    <h1
      className={`${Class} select-none text-2xl sm:text-3xl 2xl:text-4xl font-extralight tracking-tighter uppercase`}
    >
      {children}
    </h1>
  );
}
