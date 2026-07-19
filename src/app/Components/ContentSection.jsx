import React from "react";

export default function ContentSection({ children, SectionId, Class }) {
  return (
    <section
      id={SectionId}
      className={`${Class} mx-auto w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-32px)] md:max-w-[600px] lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl`}
    >
      {children}
    </section>
  );
}
