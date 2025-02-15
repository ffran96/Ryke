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

export default function NewVideoBook() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Este useEffect se asegura de actualizar el estado cada vez que el api cambia
  useEffect(() => {
    if (!api) return;

    // Establece el número total de elementos
    setCount(api.scrollSnapList().length);
    
    // Establece el valor inicial de 'current' al primer elemento seleccionado
    setCurrent(api.selectedScrollSnap() + 1);

    // Añade un listener para actualizar el 'current' cuando se cambia el seleccionado
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Limpiar el listener cuando el componente se desmonte o el api cambie
    return () => {
      api.off("select");
    };
  }, [api]);

  const Basis = "md:basis-auto";

  return (
    <ContentSection SectionId="video-book">
      <Title2 Class="pt-20 mb-3">Últimos trabajos</Title2>
      <article>
        <Carousel
          setApi={setApi} // Actualiza el estado de api
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Videos.map(({ title, src, thumbnail, slug }) => (
              <CarouselItem
                key={slug} // Cambié 'title' por 'slug' como key única para evitar conflictos
                className={`${Basis} flex flex-col gap-3`}
              >
                <Link href={`/ultimos-trabajos/${slug}`}>
                  <Video Source={`/${src}`} PosterImage={thumbnail} />
                </Link>
                <h3 className="max-w-[300px] m-auto text-xl text-center">
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
