import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Filmaker profesional en Valencia - Enrique Ferri",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
