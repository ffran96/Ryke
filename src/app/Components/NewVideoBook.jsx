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
import { usePathname } from "next/navigation"; // Detecta cambios de URL

export default function NewVideoBook() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const pathname = usePathname(); // Obtiene la URL actual

  const videoList = useMemo(() => Videos, []);

  const count = useMemo(() => api?.scrollSnapList().length || 0, [api]);

  // 🔥 Forzar re-render cuando el usuario vuelve a esta página
  useEffect(() => {
    setApi(null); // Resetea el carrusel
    setTimeout(() => setApi(api), 100); // Vuelve a asignarlo
  }, [pathname]); // Se ejecuta cuando cambia la URL

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    const updateCurrent = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <ContentSection SectionId="video-book">
      <Title2 Class="pt-20 mb-3">Últimos trabajos</Title2>
      <article>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {videoList.map(({ title, src, thumbnail, slug }) => (
              <CarouselItem key={slug} className="md:basis-auto flex flex-col gap-3">
                <Link href={`/ultimos-trabajos/${slug}`}>
                  <Video Source={`/${src}`} PosterImage={thumbnail} />
                </Link>
                <h3 className="max-w-[300px] m-auto text-xl text-center">{title}</h3>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:inline-flex absolute bottom-0 left-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300" />
          <CarouselNext className="hidden xl:inline-flex absolute bottom-0 right-5 size-14 hover:bg-[#dcd9d1] hover:border-[#ffffff13] hover:text-[#000000e7] transition-colors ease-in-out duration-300" />
        </Carousel>
        <CarouselSelector Array={videoList} CurrentCard={current} />
      </article>
    </ContentSection>
  );
}
