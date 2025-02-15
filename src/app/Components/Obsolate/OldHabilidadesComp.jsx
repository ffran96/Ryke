import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function HabilidadesComp({Habilidad}) {
  return (
    <li className=" lg:hover:bg-slate-400/20 rounded-lg p-2 transition-all ease-in-out cursor-pointer">
      <div className="flex items-center justify-start gap-4">
        <span className="size-4 relative">
          <FontAwesomeIcon
            className="size-4 absolute inset-0 m-auto text-[rgb(var(--foreground-rgb)]"
            icon={faChevronRight}
          />
        </span>
        <div className="flex flex-col lg:w-[400px]">
          <span className="text-xl font-medium">{Habilidad}</span>
        </div>
      </div>
    </li>
  );
}
