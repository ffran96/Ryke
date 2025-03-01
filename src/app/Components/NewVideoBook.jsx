"use client";
import React, { useEffect, useState } from "react";
import "photoswipe/style.css";
import ContentSection from "./ContentSection";
import Video from "./Video";
import Videos from "../data/Videobook";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselSelector from "./CarouselSelector";
import Title2 from "./Title2";
import Link from "next/link";

export default function NewVideoBook({ AspectRatio, Selected, VideoSlug }) {
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
    <ContentSection SectionId="ultimos-trabajos">
      <Title2 Class="pt-[65px] mb-3">Últimos trabajos</Title2>
      <article>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Videos.map(({ title, src, slug, id }) => (
              <CarouselItem
                key={title}
                className="md:basis-auto flex flex-col gap-3"
              >
                <Link
                  className={VideoSlug + ".mp4" == src ? Selected : ""}
                  href={`/ultimos-trabajos/${slug}`}

                >
                  <Video Source={`/${src}`} Class={AspectRatio} />
                </Link>
                <h3 className="max-w-[400px] m-auto text-md uppercase text-center select-none cursor-pointer">
                  {title}
                </h3>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:inline-flex absolute bottom-0 left-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300" />
          <CarouselNext className="hidden xl:inline-flex absolute bottom-0 right-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300" />
        </Carousel>
        <CarouselSelector Array={Videos} CurrentCard={current} />
      </article>
    </ContentSection>
  );
}
