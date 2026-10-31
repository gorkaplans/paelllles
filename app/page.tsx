import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Paelles } from "@/components/sections/Paelles";
import { Gallery } from "@/components/sections/Gallery";
import { Occasions } from "@/components/sections/Occasions";
import { Faq } from "@/components/sections/Faq";
import { Contacte } from "@/components/sections/Contacte";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <Paelles />
        <Gallery />
        <Occasions />
        <Faq />
        <Contacte />
      </main>
      <Footer />
    </>
  );
}
