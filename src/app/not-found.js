import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClapperboard } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-24 text-[#111111]">
      <section className="mx-auto flex max-w-[620px] flex-col items-center rounded-[8px] border border-[#ffffff80] bg-[#f2efe8d9] px-6 py-10 text-center shadow-2xl backdrop-blur-sm sm:px-10">
        <FontAwesomeIcon
          className="mb-8 text-4xl text-[#111111]"
          icon={faClapperboard}
        />
        <p className="font-display text-sm uppercase tracking-[0.3em] text-[#00000099]">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase sm:text-5xl lg:text-6xl">
          Esta escena no existe
        </h1>
        <p className="mt-6 max-w-[480px] text-base font-medium leading-7 text-[#000000cc] sm:text-lg">
          Parece que este plano se quedó fuera del montaje final. Mejor volver
          al inicio antes de que alguien pida una segunda toma.
        </p>
        <Link
          className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#00000033] bg-[#111111] px-5 py-3 text-sm font-medium text-[#ffffff] transition-all duration-300 hover:border-[#000000] hover:bg-[#dcd9d1] hover:text-[#000000]"
          href="/"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
