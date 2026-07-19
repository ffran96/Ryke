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
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

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

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <ContentSection SectionId="galeria">
      <div className="pt-[65px] mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dcd9d1b8]">
            Backstage
          </span>
          <Title2>Galería</Title2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#f2efe8b8] sm:text-right">
          Momentos de rodaje, detalles y escenas que completan la mirada detrás
          de cada proyecto.
        </p>
      </div>

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
                  className="group relative block overflow-hidden rounded-[8px] bg-[#ffffff0d] p-2 transition-all duration-300 hover:bg-[#ffffff14] xl:hover:z-10"
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
                    className="size-[400px] rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
