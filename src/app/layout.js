import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";
import { Analytics } from "@vercel/analytics/react";
import NewVideoBook from "./Components/NewVideoBook";
import Contacto from "./Components/Contacto";
import NewGallery from "./Components/NewGallery";
import VideoHero from "./Components/VideoHero";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <FontAwesomeConfig />
        <Analytics />
      </head>
      <body>
        <VideoHero />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
