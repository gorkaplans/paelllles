"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";

const faqs = [
  {
    q: "Quina és la zona de servei?",
    a: "Treballem base a Castellar del Vallès i Sabadell. Fem desplaçaments a tota Catalunya amb un suplement segons la distància.",
  },
  {
    q: "Quin és el mínim de comensals?",
    a: "Vuit persones per reserva.",
  },
  {
    q: "Què necessito tenir a casa?",
    a: "Espai per a la paellera i el foc. Us diem amb exactitud què cal quan confirmem la reserva.",
  },
  {
    q: "Teniu en compte al·lèrgies?",
    a: "Sí, ens ho indiqueu en la reserva i ho adaptem amb el xef.",
  },
  {
    q: "Quin és el preu orientatiu?",
    a: "Depèn del nombre de comensals, el sabor i la data. Us enviem un pressupost personalitzat sense compromís.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntes" data-tone="dark" className="bg-marro px-5 py-24 text-crema md:px-10 md:py-36">
      <div className="grid gap-12 md:grid-cols-12">
        <h2 className="display text-[clamp(3rem,7vw,7.5rem)] md:col-span-5">
          abans que ho pregunteu
        </h2>

        <div className="border-t border-crema/25 md:col-span-7">
          {faqs.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q} className="border-b border-crema/25">
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : i)}
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-lg font-medium md:text-xl">{item.q}</span>
                  <CaretDown
                    size={20}
                    weight="bold"
                    className={`shrink-0 transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className="faq-resposta" data-obert={expanded}>
                  <p className="max-w-[55ch] pb-6 text-base leading-relaxed text-crema/85 md:text-lg">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
