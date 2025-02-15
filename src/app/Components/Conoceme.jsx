import React from "react";
import ContentSection from "./ContentSection";
import Underline from "./Underline";
import Image from "next/image";
import ConocemeImage from "../../../public/Enrique camara en mano.png";
import Title2 from "./Title2";

export default function Conoceme() {
  return (
    <ContentSection SectionId={"conoceme"}>
      <article className="pt-20 flex flex-col xl:flex-row items-center justify-between gap-10">
        <div className="max-w-[600px] [&>p]:mb-4 [&>p]:leading-6 xl[&>p]:leading-[30px] [&>p]:text-lg md:[&>p]:text-2xl [&>p]:text-pretty">
          <Title2>Conóceme</Title2>
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
            dotarlos de autenticidad y fuerza. Trabajo con artistas de diversos
            géneros, buscando  <Underline>capturar la esencia de su música</Underline> a través de una
            narrativa visual potente y un montaje innovador.
          </p>
          <p className="italic">
            &#34;Soy un filmmaker comprometido con la creatividad, siempre en
            busca de nuevos desafíos que me permitan evolucionar y seguir
            contando historias a través de <Underline>la imagen, el ritmo y la
            emoción.</Underline>&#34;
          </p>
        </div>
        <Image
          alt="Enrique camara en mano"
          loading="lazy"
          className="size-[350px] md:size-[600px] object-cover rounded-full "
          src={ConocemeImage}
        />
      </article>
    </ContentSection>
  );
}
