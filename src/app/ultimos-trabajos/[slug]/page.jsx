"use client";
import ContentSection from "@/app/Components/ContentSection";
import Videos from "../../data/Videobook";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import NewVideoBook from "@/app/Components/NewVideoBook";
import Title2 from "@/app/Components/Title2";
import Hero from "@/app/Components/Hero";

// Esta función se utiliza para generar las rutas estáticas de los slugs
export function getStaticParams() {
  // Generamos las rutas para cada video, usando su 'slug'
  return Videos.map((video) => ({
    slug: video.slug, // Devuelve el slug para cada video
  }));
}

export default function SlugPage({ params }) {
  // Encontramos el video correspondiente al slug
  const videoMap = Videos.reduce((acc, video) => {
    acc[video.slug] = video;
    return acc;
  }, {});
  const video = videoMap[params.slug];

  // Si no se encuentra el video, podrías mostrar una página de error o notFound
  if (!video) {
    return (
      <>
        <ContentSection>
          <h2 className="pt-20">Video no encontrado.</h2>
        </ContentSection>
      </>
    );
  }

  return (
    <>
      <video
        className="h-svh  w-svw object-cover absolute"
        src="video-hero.mp4"
        autoPlay
        playsInline
        preload="auto"
        loop
        muted
      />
      <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-t from-[#000000] from-0% via-[#000000b1] via-40% to-[#000000] to-100%" />

      <ContentSection Class="relative">
        <Title2 Class="pt-20 mb-3">{video.title}</Title2>
        <LiteYouTubeEmbed id={video.yt} title={video.title} />
        <NewVideoBook AspectRatio="aspect-[9/4]" slug={params.slug} Selected="bg-[#ffbc04cf] p-[6px] rounded-[12px]" />
      </ContentSection>
    </>
  );
}
