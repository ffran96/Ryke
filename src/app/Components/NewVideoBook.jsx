"use client";
import React, { useEffect, useState, useMemo } from "react";
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
import { usePathname } from "next/navigation";

export default function NewVideoBook() {
  const pathname = usePathname(); // Obtiene la ruta actual

  // Estado para forzar la actualización cuando cambia la ruta
  const [reset, setReset] = useState(0);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Memoización de datos
  const memoizedVideos = useMemo(() => {
    return Videos.map(({ id, title, slug, src, thumbnail }) => ({
      id,
      title,
      slug, // Asegúrate de que el slug esté sin la extensión .mp4
      src,
      thumbnail
    }));
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Forzar la actualización cuando se cambia la ruta
  useEffect(() => {
    setReset((prev) => prev + 1);
  }, [pathname]);

  const Basis = "md:basis-auto";

  return (
    <ContentSection SectionId="video-book" key={reset}> {/* Key cambia con reset */}
      <Title2 Class="pt-20 mb-3">Últimos trabajos</Title2>
      <article>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {memoizedVideos.map(({ title, src, thumbnail, slug }) => {
              return (
                <CarouselItem key={title} className={`${Basis} flex flex-col gap-3`}>
                  <Link href={`/ultimos-trabajos/${slug}`}>  
                    <Video Source={src} PosterImage={thumbnail} />
                  </Link>
                  <h3 className="max-w-[300px] m-auto text-xl text-center">{title}</h3>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:inline-flex absolute bottom-0 left-5 size-14" />
          <CarouselNext className="hidden xl:inline-flex absolute bottom-0 right-5 size-14" />
        </Carousel>
        <CarouselSelector Array={memoizedVideos} CurrentCard={current} />
      </article>
    </ContentSection>
  );
}
