import React from "react";
import ContentSection from "./ContentSection";
import Underline from "./Underline";
import Image from "next/image";
import ConocemeImage from "../../../public/Enrique camara en mano.png";
import Title2 from "./Title2";

export default function Conoceme() {
  return (
    <ContentSection SectionId={"conoceme"}>
      <article className="pt-[65px] flex flex-col xl:flex-row items-center justify-between">
        <div className="min-w-[365px] [&>p]:mb-4 [&>p]:text-sm md:[&>p]:text-lg [&>p]:text-pretty">
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
          className="size-[415px] md:size-[600px] md:scale-75 object-cover rounded-[12px] "
          src={ConocemeImage}
        />
      </article>
    </ContentSection>
  );
}
