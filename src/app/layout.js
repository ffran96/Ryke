import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";
import { Analytics } from "@vercel/analytics/react";

const inter = Lora({ subsets: ["latin"] });
const { className } = inter;

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
    images: "https://www.enriqueferri.com/ryke-og.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <head>
        <FontAwesomeConfig />
        <Analytics />
      </head>
      <body className={className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
