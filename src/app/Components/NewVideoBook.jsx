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
import { useParams } from "next/navigation";

export default function NewVideoBook({
  AspectRatio,
  Orientation,
  CustomCarousel,
  TitleCustomClass,
  Visibility,
}) {
  const params = useParams();
  const orderedVideos = [...Videos].reverse();
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <ContentSection SectionId="ultimos-trabajos">
      <div className="pt-[65px] mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dcd9d1b8]">
            Videobook
          </span>
          <Title2 Class={TitleCustomClass}>Últimos trabajos</Title2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#f2efe8b8] sm:text-right">
          Una selección breve de piezas recientes, pensadas para enseñar ritmo,
          estética y narrativa sin rodeos.
        </p>
      </div>

      <article>
        <Carousel
          className={CustomCarousel}
          orientation={Orientation}
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {orderedVideos.map(({ title, src, slug }) => (
              <CarouselItem key={title} className="md:basis-auto">
                <div
                  className={`group flex h-full flex-col gap-3 rounded-[8px] p-2 transition-all duration-300 hover:bg-[#ffffff0d] ${
                    params.slug === slug
                      ? "bg-[#dcd9d1] shadow-sm shadow-[#dcd9d1]"
                      : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-[8px]">
                    <Video
                      Source={`/${src}`}
                      Class={`${AspectRatio} w-[calc(100vw-56px)] max-w-[412px] rounded-[8px] transition-transform duration-500 group-hover:scale-[1.02]`}
                      Href={`/ultimos-trabajos/${slug}`}
                    />
                  </div>

                  <Link href={`/ultimos-trabajos/${slug}`}>
                    <h3 className="max-w-[400px] cursor-pointer px-1 pb-1 text-sm uppercase leading-5 tracking-wide text-[#f2efe8] transition-colors duration-300 group-hover:text-[#dcd9d1]">
                      {title}
                    </h3>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={` ${Visibility} absolute bottom-0 left-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300`}
          />
          <CarouselNext
            className={`${Visibility} absolute bottom-0 right-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300`}
          />
        </Carousel>

        <CarouselSelector Array={orderedVideos} CurrentCard={current} />
      </article>
    </ContentSection>
  );
}
