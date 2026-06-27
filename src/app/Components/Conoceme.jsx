import React from "react";
import ContentSection from "./ContentSection";
import Underline from "./Underline";
import Image from "next/image";
import ConocemeImage from "../../../public/enrique-ferri-galeria-1.jpg";
import Title2 from "./Title2";
import RRSS from "../data/RRSS";

export default function Conoceme() {
  const whatsappMessage = encodeURIComponent(
    "Hola Enrique, quiero un videoclip y me gustaría hablar contigo sobre la idea."
  );

  return (
    <ContentSection SectionId={"conoceme"}>
      <article className="pt-[65px] lg:pt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:gap-14">
        <div className="flex flex-col gap-5">
          <Title2 Class="max-w-[365px]">Conóceme</Title2>
          <Image
            alt="Enrique ferri camara en mano"
            loading="lazy"
            className="h-[360px] w-full rounded-[8px] object-cover object-center sm:h-[430px] lg:h-[560px]"
            src={ConocemeImage}
          />
        </div>

        <div className="border-t border-[#dcd9d133] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14">
          <div className="max-w-[680px] space-y-5 text-[15px] leading-7 text-[#f2efe8d9] sm:text-[16px] xl:text-[17px] xl:leading-8 [&_u]:text-[#ffffff]">
            <p>
              Desde siempre he sentido una profunda pasión por el mundo
              audiovisual. De manera autodidacta, he perfeccionado mi estilo en
              la realización de videoclips, combinando{" "}
              <Underline>
                recursos visuales, efectos dinámicos y una estética cuidada
              </Underline>{" "}
              para crear experiencias que impacten y conecten.
            </p>
            <p>
              Mi inspiración proviene de la cultura urbana, sus sonidos y su
              energía, elementos que integran cada uno de mis proyectos para
              <Underline> dotarlos de autenticidad y fuerza.</Underline> Trabajo
              con artistas de diversos géneros, buscando{" "}
              <Underline>capturar la esencia de su música</Underline> a través
              de una narrativa visual potente y un montaje innovador.
            </p>
            <p className="border-l-2 border-[#dcd9d1] pl-5 italic text-[#ffffff]">
              &#34;Soy un filmmaker comprometido con la creatividad, siempre en
              <Underline>
                {" "}
                busca de nuevos desafíos que me permitan evolucionar
              </Underline>{" "}
              y seguir contando historias a través de la imagen, el ritmo y la
              emoción.&#34;
            </p>
            <a
              className="inline-flex w-fit items-center rounded-full border border-[#ffffff33] bg-[#dcd9d1] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#111111] transition-all duration-300 hover:border-[#ffffff99] hover:bg-[#ffffff] hover:scale-[1.03]"
              href={`https://wa.me/${RRSS.whatsapp}?text=${whatsappMessage}`}
              rel="no-referrer"
              target="_blank"
            >
              Quiero un videoclip
            </a>
          </div>
        </div>
      </article>
    </ContentSection>
  );
}
