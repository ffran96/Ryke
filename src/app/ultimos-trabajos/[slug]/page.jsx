import ContentSection from '@/app/Components/ContentSection';
import Videos from '@/app/data/Videobook';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Videos.map((video) => ({
    slug: video.slug, // Utilizamos el campo slug directamente
  }));
}

export default function VideoPage({ params }) {
  const video = Videos.find((v) => v.slug === params.slug);

  if (!video) {
    notFound(); // Maneja 404 correctamente en App Router
    return null;
  }

  return (
    <ContentSection>
      <h1 className='pt-20'>{video.title}</h1>
    </ContentSection>
  );
}
