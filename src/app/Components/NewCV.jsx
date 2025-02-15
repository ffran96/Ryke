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
import Timeline from "./Timeline";
import Curriculum from "../data/CV";
import Card from "./Card";
import ContentSection from "./ContentSection";
import Button from "./Button";
import MultiCard from "./MultiCard";
import CarouselSelector from "./CarouselSelector";
import Title2 from "./Title2";

export default function NewCV() {
  const { Experiencia, Formacion, Competencia } = Curriculum;
  const { Idiomas, Habilidades } = Competencia;
  const CVArrayMap = [Formacion, Experiencia];
  const CVArraySelector = [Experiencia, Formacion, Competencia];
  const Basis = "md:basis-auto";
  const TimelineWidth = "w-[375px]";

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
    <ContentSection SectionId={"cv"}>
      <div className="pt-20 flex flex-col md:flex-row justify-between gap-2 mb-3">
        <Title2>Currículum</Title2>
        <Button Label="Descargar CV" Link="./CV.pdf" />
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {CVArrayMap.map(({ id, Competencia, Data }) => (
            <CarouselItem key={id} className={Basis}>
              <Card Height="h-[900px]" Title={Competencia}>
                <Timeline Width={TimelineWidth} Competencia={Data} />
              </Card>
            </CarouselItem>
          ))}
          <CarouselItem key={Competencia.id} className={Basis}>
            <MultiCard Idiomas={Idiomas.Data} Habilidades={Habilidades.Data} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden xl:inline-flex absolute bottom-0 left-5 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
        <CarouselNext className="hidden xl:inline-flex absolute bottom-0 right-5 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
      </Carousel>
      <CarouselSelector Array={CVArraySelector} CurrentCard={current} />
    </ContentSection>
  );
}
