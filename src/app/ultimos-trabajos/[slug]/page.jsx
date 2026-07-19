"use client";

import Videos from "../../data/Videobook";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import RRSS from "@/app/data/RRSS";

export function getStaticParams() {
  return Videos.map((video) => ({
    slug: video.slug,
  }));
}

export default function SlugPage({ params }) {
  const video = Videos.find((item) => item.slug === params.slug);

  if (!video) {
    return (
      <section className="rounded-[8px] border border-[#ffffff14] bg-[#ffffff0d] p-6">
        <h2 className="font-display text-2xl uppercase">Video no encontrado.</h2>
      </section>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hola Enrique, he visto "${video.title}" y quiero hablar contigo sobre un videoclip.`
  );

  const shareVideo = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: "Mira este trabajo de Enrique Ferri.",
          url,
        });
      } catch {
        return;
      }
      return;
    }

    await navigator.clipboard.writeText(url);
  };

  return (
    <article className="space-y-4 pb-10">
      <div className="overflow-hidden rounded-[12px] bg-[#000000] shadow-2xl">
        <LiteYouTubeEmbed
          id={video.yt}
          title={video.title}
          poster="maxresdefault"
          noCookie={true}
        />
      </div>

      <div className="space-y-4">
        <h1 className="watch-title text-balance text-xl font-semibold leading-7 text-[#ffffff] sm:text-2xl lg:text-3xl">
          {video.title}
        </h1>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dcd9d1] font-display text-sm uppercase text-[#111111]">
              EF
            </div>
            <div className="min-w-0">
              <p className="watch-title font-semibold leading-5 text-[#ffffff]">
                Enrique Ferri
              </p>
              <p className="watch-muted text-sm leading-5 text-[#f2efe899]">
                Filmmaker · Valencia
              </p>
            </div>
            <a
              className="watch-primary-button ml-1 rounded-full bg-[#ffffff] px-4 py-2 text-sm font-semibold text-[#111111] transition-colors duration-300 hover:bg-[#dcd9d1]"
              href={`https://wa.me/${RRSS.whatsapp}?text=${whatsappMessage}`}
              rel="no-referrer"
              target="_blank"
            >
              Quiero un videoclip
            </a>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              className="watch-action-button inline-flex shrink-0 items-center gap-2 rounded-full bg-[#ffffff1a] px-4 py-2 text-sm font-semibold text-[#ffffff] transition-colors duration-300 hover:bg-[#ffffff2b]"
              onClick={shareVideo}
              type="button"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Compartir
            </button>
          </div>
        </div>

        <section className="watch-description rounded-[12px] bg-[#ffffff12] p-4 text-sm leading-6 text-[#f2efe8d9]">
          <p className="watch-title font-semibold text-[#ffffff]">
            Proyecto audiovisual · Videoclip
          </p>
          <p className="watch-muted mt-2">
            Dirección, cámara y montaje con una estética pensada para que la
            música tenga presencia visual propia. Si quieres llevar tu próximo
            tema a imagen, este es el tipo de pieza que podemos construir.
          </p>
        </section>
      </div>
    </article>
  );
}
