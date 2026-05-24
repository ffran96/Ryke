"use client";

import React, { useEffect, useState } from "react";
import NewVideoBook from "@/app/Components/NewVideoBook";

export default function Layout({ children }) {
 
    // Detectar mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className="md:max-w-[85%] m-auto pt-32">
        <div Class="flex flex-col md:flex-row gap-6">
          {children}
          <NewVideoBook
            AspectRatio="aspect-[16/9]"
            CustomCarousel=""
            Orientation={isMobile ? "horizontal" : "vertical"}
            TitleCustomClass="hidden"
          />
        </div>
      </div>
    </>
  );
}
