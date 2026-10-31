"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { sabors } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const sabor = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    function onSabor(event: Event) {
      if (sabor.current) sabor.current.value = (event as CustomEvent<string>).detail;
    }
    window.addEventListener("paelllles:sabor", onSabor);
    return () => window.removeEventListener("paelllles:sabor", onSabor);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="reserva" data-tone="light" className="bg-crema px-5 py-24 text-oliva md:px-10 md:py-36">
      <h2 className="sr-only">Demana pressupost</h2>
      <p className="max-w-[46ch] text-lg leading-relaxed md:text-xl">
        Ompliu la frase i us responem amb un pressupost personalitzat.
      </p>

      <form onSubmit={handleSubmit} className="frase display mt-10 md:mt-14">
        <p>
          hola, soc <Camp name="nom" label="Nom" placeholder="el teu nom" mida={9} required />.
          {" "}som <Camp name="comensals" label="Comensals, mínim 8" type="number" min={8} placeholder="12" mida={3} required />{" "}
          a taula, a <Camp name="poblacio" label="Població" placeholder="Sabadell" mida={9} required />,
          {" "}el dia <Camp name="data" label="Data desitjada" type="date" mida={9} required />,
          {" "}per a{" "}
          <span className="whitespace-nowrap">
          <span className="camp">
            <label htmlFor="tipus" className="sr-only">Tipus d&apos;esdeveniment</label>
            <select id="tipus" name="tipus" required defaultValue="">
              <option value="" disabled>quina ocasió?</option>
              <option value="celebracio-casa">una celebració a casa</option>
              <option value="aniversari">un aniversari</option>
              <option value="empresa">un esdeveniment d&apos;empresa</option>
              <option value="altres">una altra cosa</option>
            </select>
          </span>.
          </span>
          {" "}ens ve de gust{" "}
          <span className="whitespace-nowrap">
          <span className="camp">
            <label htmlFor="sabor" className="sr-only">Sabor</label>
            <select id="sabor" name="sabor" ref={sabor} defaultValue="">
              <option value="">el que ens recomaneu</option>
              {sabors.map((s) => (
                <option key={s.id} value={s.nom}>{s.nom}</option>
              ))}
            </select>
          </span>.
          </span>
          {" "}escriviu-me a <Camp name="email" label="Email" type="email" placeholder="correu@exemple.cat" mida={16} required />
          {" "}o truqueu al <Camp name="telefon" label="Telèfon, opcional" type="tel" placeholder="telèfon" mida={9} />.
        </p>

        <div className="frase__peu">
          <div>
            <label htmlFor="notes" className="text-base font-medium">Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Al·lèrgies, preferències o qualsevol detall útil"
              className="field-input mt-2 w-full resize-none"
            />
          </div>
          <div>
            <button type="submit" disabled={status === "submitting"} className="boto boto--oliva w-full sm:w-auto">
              {status === "submitting" ? "Enviant..." : "Enviar sol·licitud"}
            </button>
            <div aria-live="polite">
              {status === "success" && (
                <p className="mt-4 text-base font-medium">Sol·licitud enviada. Us respondrem aviat.</p>
              )}
              {status === "error" && (
                <p className="mt-4 text-base">
                  No hem pogut enviar la sol·licitud. Torneu-ho a provar o
                  escriviu-nos directament a Instagram.
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

function Camp({
  name,
  label,
  mida,
  type = "text",
  ...props
}: {
  name: string;
  label: string;
  mida: number;
  type?: string;
  placeholder?: string;
  min?: number;
  required?: boolean;
}) {
  return (
    <span className="camp">
      <label htmlFor={name} className="sr-only">{label}</label>
      <input id={name} name={name} type={type} style={{ width: `${mida * 0.56}em` }} {...props} />
    </span>
  );
}
