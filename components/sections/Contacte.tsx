"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { contacte, enllacTelefon, enllacWhatsapp } from "@/lib/content";

export function Contacte() {
  const [sabor, setSabor] = useState<string | null>(null);

  useEffect(() => {
    function onSabor(event: Event) {
      setSabor((event as CustomEvent<string>).detail);
    }
    window.addEventListener("paelllles:sabor", onSabor);
    return () => window.removeEventListener("paelllles:sabor", onSabor);
  }, []);

  const missatge = sabor
    ? `Hola! Voldria demanar pressupost per a una paella: ${sabor}.`
    : "Hola! Voldria demanar pressupost per a una paella.";

  return (
    <section id="reserva" data-tone="light" className="bg-crema px-5 py-20 text-oliva md:px-10 md:py-20">
      <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-6">
        <h2 className="display text-[clamp(3rem,13vw,4rem)] md:col-span-7 md:text-[clamp(2rem,3.4vw,3.25rem)]">
          demana pressupost
        </h2>
        <p className="max-w-[42ch] text-lg leading-snug md:col-span-5">
          Expliqueu-nos quan i quants sou, i us preparem un pressupost
          personalitzat. A partir de 8 persones.
        </p>
      </div>

      <div className="contacte mt-10 md:mt-10">
        <a href={enllacTelefon} className="contacte__cta">
          <span className="contacte__nom">
            <Phone size="0.8em" aria-hidden="true" />
            truca&apos;ns
          </span>
          <span className="contacte__dada">
            {contacte.telefon}
            <ArrowRight size="1.1em" aria-hidden="true" />
          </span>
        </a>
        <a href={enllacWhatsapp(missatge)} target="_blank" rel="noreferrer" className="contacte__cta">
          <span className="contacte__nom">
            <WhatsappLogo size="0.8em" aria-hidden="true" />
            whatsapp
          </span>
          <span className="contacte__dada">
            {sabor ?? "Escriu-nos"}
            <ArrowRight size="1.1em" aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
