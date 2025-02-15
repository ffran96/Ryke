/* eslint-disable @next/next/no-img-element */
import React from "react";
import LiCV from "./OldLiCV";
import Curriculum from "../../data/CV";
import IdiomasComp from "./OldIdiomasComp";
import HabilidadesComp from "./OldHabilidadesComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CV() {
  const { Experiencia, Formacion, Idiomas, Habilidades } = Curriculum;

  return (
    <section className="relative overflow-hidden">
      <div id="cv" className="lg:max-w-7xl mx-auto mx- px-3 lg:px-0">
        <h2 className="pt-32 mb-8 text-3xl font-semibold ">
          Curriculum
          <a
            href="./CV.pdf "
            target="_blank"
            className="xl:cursor-pointer ml-3"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
          </a>
        </h2>
        <div className="flex justify-around flex-col gap-10 overflow-hidden lg:flex-row ">
          <div className="">
            <h3 className="text-2xl font-semibold mb-6">Formación</h3>
            <ul className="[&>li]:mb-3 [&>li]:max-w-80 [&>li]:rounded-2xl">
              {Formacion.map(({ id, Titulo, Lugar, Fecha, Info }) => (
                <LiCV
                  key={id}
                  Titulo={Titulo}
                  Lugar={Lugar}
                  Fecha={Fecha}
                  Descripcion={Info.Descripcion}
                />
              ))}
            </ul>
          </div>
          <img
            src="/destello-josselyn.webp"
            alt="Destello Josslyn Castro"
            className="absolute  blur-[96px] -z-10 rounded-full -right-[20%]  w-[1500px]  h-[2000px] "
          />
          <img
            src="/destello-josselyn.webp"
            alt="Destello Josslyn Castro"
            className="absolute  blur-[288px] -z-20 rounded-full -right-[20%]  w-[3000px]  h-[4000px] "
          />
          <div className="">
            <h3 className="text-2xl font-semibold mb-6">Experiencia</h3>
            <ul className="[&>li]:mb-3 [&>li]:max-w-80 [&>li]:rounded-2xl">
              {Experiencia.map(({ id, Titulo, Lugar, Fecha, Info }) => (
                <LiCV
                  key={id}
                  Titulo={Titulo}
                  Lugar={Lugar}
                  Fecha={Fecha}
                  Descripcion={Info.Descripcion}
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Habilidades</h3>
              <ul className="[&>li]:mb-1 [&>li]:max-w-80 [&>li]:rounded-2xl">
                {Habilidades.map((habilidad) => (
                  <HabilidadesComp key={habilidad} Habilidad={habilidad} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Idiomas</h3>
              <ul className="[&>li]:mb-1 [&>li]:max-w-80 [&>li]:rounded-2xl">
                {Idiomas.map((idioma) => (
                  <IdiomasComp key={idioma} Idioma={idioma} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 w-full h-[100%] bg-gradient-to-t from-[#000000] from-0% via-[#00000028] via-30% to-[#00000000] to-100%" />
    </section>
  );
}
