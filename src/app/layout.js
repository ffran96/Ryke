import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";
import { Analytics } from "@vercel/analytics/react";
import VideoHero from "./Components/VideoHero";
import ScrollTopButton from "./Components/ScrollTopButton";

const siteUrl = "https://www.enriqueferri.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enrique Ferri - Filmmaker profesional en Valencia",
    template: "%s | Enrique Ferri",
  },
  description:
    "Filmmaker en Valencia especializado en videoclips, cine y piezas audiovisuales con estética cinematográfica.",
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
  authors: [{ name: "Enrique Ferri" }],
  creator: "Enrique Ferri",
  publisher: "Enrique Ferri",
  category: "Filmmaking",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Enrique Ferri - Filmmaker profesional en Valencia",
    description:
      "Videoclips, cine y piezas audiovisuales con estética cinematográfica.",
    url: siteUrl,
    siteName: "Enrique Ferri",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${siteUrl}/enrique-ferri-galeria-3.jpg`,
        width: 1200,
        height: 630,
        alt: "Enrique Ferri filmmaker en Valencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Ferri - Filmmaker profesional en Valencia",
    description:
      "Videoclips, cine y piezas audiovisuales con estética cinematográfica.",
    images: [`${siteUrl}/enrique-ferri-galeria-3.jpg`],
  },
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
};

const themeScript = `
  try {
    const storedTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = storedTheme || systemTheme;
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
        <ScrollTopButton />
      </body>
    </html>
  );
}
