"use client";
import React, { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GalleryImages from "../data/images";
import Image from "next/image";
import ContentSection from "./ContentSection";
import CarouselSelector from "./CarouselSelector";
import Title2 from "./Title2";

export default function NewGallery() {
  const galleryID = "gallery";
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <ContentSection SectionId="galeria">
      <Title2 Class="pt-20 mb-3">Galería</Title2>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent id={galleryID}>
          {GalleryImages.map(
            ({ largeURL, width, height, thumbnailURL, altThumbnail }) => (
              <CarouselItem key={largeURL} className="md:basis-auto">
                <a
                  className="group xl:hover:z-10 xl:hover:scale-105  xl:transition-all relative object-cover"
                  href={largeURL}
                  data-pswp-width={width}
                  data-pswp-height={height}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={thumbnailURL}
                    quality={70}
                    width={400}
                    height={400}
                    className="size-[400px] object-cover rounded-[12px]"
                    alt={altThumbnail}
                    loading="lazy"
                  />
                </a>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden xl:inline-flex absolute bottom-0 left-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300" />
        <CarouselNext className="hidden xl:inline-flex absolute bottom-0 right-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300" />
      </Carousel>
      <CarouselSelector Array={GalleryImages} CurrentCard={current} />
    </ContentSection>
  );
}
