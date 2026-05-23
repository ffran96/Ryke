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
}) {
  const params = useParams();
  const { slug } = params;

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);


  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <ContentSection SectionId="ultimos-trabajos">
      <Title2 Class={`pt-[65px] mb-3 ${TitleCustomClass}`}>
        Últimos trabajos
      </Title2>

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
            {Videos.map(({ title, src, slug, id }) => (
              <CarouselItem
                key={title}
                className="md:basis-auto flex flex-col gap-3 mr-5"
              >
                <Link
                  className={
                    params.slug + ".mp4" == src
                      ? "bg-[#dcd9d1] box-content p-[6px] rounded-[12px] transition-all ease-in-out duration-300 shadow-sm drop-shadow-sm shadow-[#dcd9d1]"
                      : ""
                  }
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
        </Carousel>

        <CarouselSelector Array={Videos} CurrentCard={current} />
      </article>
    </ContentSection>
  );
}