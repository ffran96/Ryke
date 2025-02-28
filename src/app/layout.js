import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";
import { Analytics } from "@vercel/analytics/react";
import NewVideoBook from "./Components/NewVideoBook";
import Contacto from "./Components/Contacto";
import NewGallery from "./Components/NewGallery";

export const metadata = {
  title: "Enrique Ferri - Filmaker profesional en Valencia",
  description:
    "Filmmaker en Valencia. Cine, publicidad y videoclips con una visión cinematográfica única. ¡Descubre mi trabajo!!",
  keywords: [
    "Filmmaker en Valencia",
    "Filmmaker profesional",
    "Producción audiovisual",
    "Rodaje de videoclips",
    "Publicidad en vídeo",
    "Grabación profesional",
    "Videógrafo en Valencia",
    "Cine y audiovisuales",
    "Cámara y dirección",
    "Narrativa visual",
  ],
  openGraph: {
    images: "https://www.enriqueferri.com/enrique-ferri-galeria-3.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <head>
        <FontAwesomeConfig />
        <Analytics />
      </head>
      <body>
        <video
          className="h-svh  w-svw object-cover absolute -z-10"
          src="video-hero.mp4"
          autoPlay
          playsInline
          preload="auto"
          loop
          muted
        />
        <div className="absolute -z-10 bottom-0 w-full h-[100%] bg-gradient-to-t from-[#000000] from-0% via-[#00000019] via-40% to-[#000000] to-100%" />
        <Header />
        {children}
        <NewVideoBook AspectRatio="aspect-[9/16]" />
        <NewGallery />
        <Contacto />
        <Footer />
      </body>
    </html>
  );
}
