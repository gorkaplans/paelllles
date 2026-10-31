import type { Metadata } from "next";
import { cmGeom } from "./fonts";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "paelllles, paella amb xef a domicili",
  description:
    "Un xef prepara la paella a casa teva, a Catalunya. Reserveu per a celebracions, aniversaris i esdeveniments d'empresa.",
  openGraph: {
    title: "paelllles",
    description:
      "Un xef prepara la paella a casa teva, a Catalunya. El foc lent i la taula llarga.",
    locale: "ca_ES",
    type: "website",
    images: ["/brand/photos/Recurso 4.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "paelllles",
  description:
    "Servei de paella amb xef a domicili, a Castellar del Vallès, Sabadell i resta de Catalunya.",
  areaServed: "Catalunya",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castellar del Vallès",
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "LlulluCakes",
  },
};

// Abans de pintar: sense JS o amb moviment reduït, la pàgina es queda sense escenes fixades.
const motionScript = `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion")`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ca"
      className={`${cmGeom.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
