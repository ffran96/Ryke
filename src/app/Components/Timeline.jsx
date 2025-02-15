import React from "react";

export default function Timeline({ Competencia, Width }) {
  return (
    <section className="bg-[#0c0c0c] flex justify-center pt-12">
      <div className={Width}>
        <ul className="md:cursor-pointer select-none">
          {Competencia.map(({ Titulo, Lugar, Fecha }) => (
            <li
              key={Titulo}
              className="relative flex gap-6 item pb-5 items-baseline *:before:absolute *:before:left-[7px] *:before:h-full *:before:top-3 *:before:w-[2px] *:before:bg-[#5d3427] *:last:before:w-[0px]"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#5d3427"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </span>
              <div className="text-[#ffffff]">
                <p className="text-md">{Fecha}</p>
                <p className="mt-1 font-medium text-lg">{Titulo}</p>
                <p className="italic text-lg">{Lugar}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
