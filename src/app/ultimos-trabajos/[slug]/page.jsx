import ContentSection from "@/app/Components/ContentSection";
import Videos from "../../data/Videobook";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

// Esta función se utiliza para generar las rutas estáticas de los slugs
export function generateStaticParams() {
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
    <ContentSection>
      <h2 className="pt-20 mb-5">{video.title}</h2>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${video.yt}?si=9DyWAvH--olFCH-E`}
        title="YouTube video player"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </ContentSection>
  );
}
