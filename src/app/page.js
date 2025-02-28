import Hero from "./Components/Hero";
import Conoceme from "./Components/Conoceme";
import NewGallery from "./Components/NewGallery";
import NewVideoBook from "./Components/NewVideoBook";
import Contacto from "./Components/Contacto";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Conoceme />
    </main>
  );
}
