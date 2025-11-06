import type { Metadata } from "next";
import "./globals.css";
import { MagnetiProvider } from "./context/MagnetiContext";
import MagneticWrapper from "./components/MagneticWrapper";
import BackgroundMusic from "./components/BackgroundMusic";

export const metadata: Metadata = {
  title: "BAKA",
  description: "Geek Store",
  openGraph: {
    title: "BAKA",
    description: "Geek Store",
    //url: "https://seusite.com",
    siteName: "BAKA",
    images: [
      {
        url: "https://seusite.com/imagem.jpg",
        width: 800,
        height: 600,
        alt: "J0S3f 2K24",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: [
    "Geek",
    "Store",
    "Loja",
    "Anime",
    "Mangá",
    "Figuras de ação",
    "Colecionáveis",
    "Cultura pop",
    "Quadrinhos",
    "Jogos",
    "Nerd",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="antialiased"
      >
        <MagnetiProvider>
          {children}
        </MagnetiProvider>
      </body>
    </html>
  );
}