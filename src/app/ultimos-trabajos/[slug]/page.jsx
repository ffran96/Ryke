import ContentSection from "@/app/Components/ContentSection";
import Videos from "../../data/Videobook"
import Video from "@/app/Components/Video";

// Esta función se utiliza para generar las rutas estáticas de los slugs
export function generateStaticParams() {
  // Generamos las rutas para cada video, usando su 'slug'
  return Videos.map(video => ({
    slug: video.slug,  // Devuelve el slug para cada video
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
    return <>
        <ContentSection>
      <h2 className="pt-20">Video no encontrado.</h2>
    </ContentSection>
    </>
  }

  return (
    <ContentSection>
      <h1 className="pt-20">{video.title}</h1>
      <Video Source={`/${video.src}`}/>
    </ContentSection>
  );
}