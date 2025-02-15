import React from "react";

export default function ContentSection({ children, SectionId }) {
  return (
    <section
      id={SectionId}
      className="max-w-[365px] sm:max-w-[415px] md:max-w-[600px] lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto"
    >
      {children}
    </section>
  );
}
