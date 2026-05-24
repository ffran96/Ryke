"use client";

import React, { useEffect, useState } from "react";
import NewVideoBook from "@/app/Components/NewVideoBook";
import DesktopVideoGallery from "../Components/DesktopVideoGallery";

export default function Layout({ children }) {
  // Detectar mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className="lg:max-w-[85%] m-auto pt-32">
        <div Class="flex flex-col lg:flex-row gap-6">
          {children}

          {isMobile ? (
            <NewVideoBook
              AspectRatio="aspect-[16/9]"
              CustomCarousel=""
              Orientation="horizontal"
              TitleCustomClass="hidden"
              Visibility="hidden"
            />
          ) : (
            <DesktopVideoGallery H3Classname="mb-5"/>
          )}
        </div>
      </div>
    </>
  );
}
