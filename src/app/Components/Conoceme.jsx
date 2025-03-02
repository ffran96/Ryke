import React from "react";
import ContentSection from "./ContentSection";
import Underline from "./Underline";
import Image from "next/image";
import ConocemeImage from "../../../public/enrique-ferri-galeria-1.jpg";
import Title2 from "./Title2";

export default function Conoceme() {
  return (
    <ContentSection SectionId={"conoceme"}>
      <article className="pt-[65px] flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="xl:w-fill flex flex-col bg-[#ffffff11] xl:h-[450px] rounded-[12px] [&>h2]:mt-4 [&>h2]:ml-4 [&>p]:mb-4 [&>p]:ml-4 [&>p]:mt-2 [&>p]:max-w-[88%] [&>p]:text-sm md:[&>p]:text-[14px]  2xl:[&>p]:text-[17px] [&>p]:leading-6 [&>p]:text-pretty">
          <Title2 Class="max-w-[365px]">Conóceme</Title2>
          <p>
            Desde siempre he sentido una profunda pasión por el mundo
            audiovisual. De manera autodidacta, he perfeccionado mi estilo en la
            realización de videoclips, combinando <Underline>recursos visuales, efectos
            dinámicos y una estética cuidada</Underline> para crear experiencias que
            impacten y conecten.
          </p>
          <p>
            Mi inspiración proviene de la cultura urbana, sus sonidos y su
            energía, elementos que integran cada uno de mis proyectos para
            <Underline> dotarlos de autenticidad y fuerza.</Underline> Trabajo con artistas de diversos
            géneros, buscando  <Underline>capturar la esencia de su música</Underline> a través de una
            narrativa visual potente y un montaje innovador.
          </p>
          <p className="italic">
            &#34;Soy un filmmaker comprometido con la creatividad, siempre en
            <Underline> busca de nuevos desafíos que me permitan evolucionar</Underline> y seguir
            contando historias a través de la imagen, el ritmo y la
            emoción.&#34;
          </p>
        </div>
        <Image
          alt="Enrique ferri camara en mano"
          loading="lazy"
          className="w-fill h-[320px] lg:w-[300px] lg:h-[500px] xl:h-[450px] xl:w-[450px] lg:aspect-square object-cover rounded-[12px]"
          src={ConocemeImage}
        />
      </article>
    </ContentSection>
  );
}
