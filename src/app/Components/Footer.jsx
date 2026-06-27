import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Enlaces from "../data/links";
import RRSS from "../data/RRSS";

export default function Footer() {
  const { instagram, youtube, email } = RRSS;

  return (
    <footer
      id={"footer"}
      className="mt-20 border-t border-[#dcd9d133] bg-[#070707] text-[#f2efe8]"
    >
      <div className="mx-auto grid max-w-[320px] gap-10 py-10 sm:max-w-[415px] md:max-w-[600px] lg:max-w-4xl lg:grid-cols-[1.1fr_0.8fr_1fr] lg:py-12 xl:max-w-6xl 2xl:max-w-7xl">
        <div className="space-y-4">
          <h2 className="font-display text-2xl uppercase sm:text-3xl">
            Enrique Ferri
          </h2>
          <p className="max-w-[320px] text-sm leading-6 text-[#f2efe8b8]">
            Filmmaker en Valencia especializado en videoclips, narrativa visual
            y piezas audiovisuales con una estética cinematográfica.
          </p>
        </div>

        <nav className="space-y-4" aria-label="Enlaces del footer">
          <h3 className="font-display text-lg uppercase text-[#ffffff]">
            Enlaces
          </h3>
          <ul className="space-y-2">
            {Enlaces.map(({ id, link, name }) => (
              <li key={id}>
                <Link
                  className="text-sm text-[#f2efe8b8] transition-colors duration-300 hover:text-[#ffffff]"
                  href={`/${link}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4">
          <h3 className="font-display text-lg uppercase text-[#ffffff]">
            Contacto
          </h3>
          <div className="flex flex-col gap-3">
            <a
              className="inline-flex w-fit items-center gap-3 text-sm text-[#f2efe8b8] transition-colors duration-300 hover:text-[#ffffff]"
              href={`mailto:${email}`}
            >
              <FontAwesomeIcon className="text-base" icon={faEnvelope} />
              {email}
            </a>
            <div className="flex gap-3 pt-1">
              <a
                className="flex size-10 items-center justify-center rounded-full border border-[#ffffff24] text-[#f2efe8] transition-all duration-300 hover:border-[#ffffff99] hover:bg-[#ffffff] hover:text-[#000000]"
                href={"https://www.instagram.com/" + instagram}
                rel="no-referrer"
                target="_blank"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full border border-[#ffffff24] text-[#f2efe8] transition-all duration-300 hover:border-[#ffffff99] hover:bg-[#ffffff] hover:text-[#000000]"
                href={"https://www.youtube.com/" + youtube}
                rel="no-referrer"
                target="_blank"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#dcd9d11f] py-4">
        <div className="mx-auto flex max-w-[320px] flex-col gap-2 text-xs text-[#f2efe88f] sm:max-w-[415px] md:max-w-[600px] lg:max-w-4xl lg:flex-row lg:items-center lg:justify-between xl:max-w-6xl 2xl:max-w-7xl">
          <p>© {new Date().getFullYear()} Enrique Ferri. Todos los derechos reservados.</p>
          <p>
            designed by{" "}
            <a
              className="font-semibold text-[#ffffff] transition-colors duration-300 hover:text-[#dcd9d1]"
              href="https://webeo.es"
              rel="no-referrer"
              target="_blank"
            >
              Webeo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
