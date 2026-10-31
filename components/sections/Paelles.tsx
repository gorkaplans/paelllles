"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Ll } from "@/components/Ll";
import { sabors, type Sabor } from "@/lib/content";
import { PAELLERA_COS, PAELLERA_D, PAELLERA_VIEWBOX } from "@/lib/paellera-path";
import { requestTick } from "@/lib/scroll";

const { cx, cy, r } = PAELLERA_COS;

function triar(sabor: Sabor) {
  window.dispatchEvent(new CustomEvent("paelllles:sabor", { detail: sabor.nom }));
}

export function Paelles() {
  const [actiu, setActiu] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // El color del fons canvia sense scroll: la capçalera s'ha d'adonar del nou to.
  useEffect(requestTick, [actiu]);

  function onKeyDown(event: KeyboardEvent) {
    const pas = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!pas) return;
    event.preventDefault();
    const seguent = (actiu + pas + sabors.length) % sabors.length;
    setActiu(seguent);
    tabs.current[seguent]?.focus();
  }

  const sabor = sabors[actiu];
  const tonada = {
    "--fons": sabor.tonada.fons,
    "--text": sabor.tonada.text,
    "--gir": `${actiu * -60}deg`,
  } as CSSProperties;

  return (
    <section
      id="paelles"
      data-tone={sabor.tonada.fons.includes("crema") ? "light" : "dark"}
      style={tonada}
      className="dial"
    >
      <svg className="dial__paellera" viewBox={PAELLERA_VIEWBOX} aria-hidden="true">
        <path d={PAELLERA_D} fill={sabor.tonada.metall} className="dial__metall" />
        {sabors.map((s, i) =>
          s.foto ? (
            <g key={s.id} data-actiu={i === actiu} className="dial__foto">
              <clipPath id={`dial-${s.id}`}>
                <path d={PAELLERA_D} />
              </clipPath>
              <image
                href={s.foto}
                x={cx - r}
                y={cy - r}
                width={r * 2}
                height={r * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#dial-${s.id})`}
              />
            </g>
          ) : null,
        )}
      </svg>

      <div className="dial__cos">
        <h2 className="text-base font-medium md:text-lg">
          Sis maneres d&apos;acabar amb la cullera a la paellera
        </h2>

        <div role="tablist" aria-label="Sabors" aria-orientation="vertical" onKeyDown={onKeyDown} className="dial__selector">
          {sabors.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`sabor-tab-${s.id}`}
              aria-selected={i === actiu}
              aria-controls={`sabor-${s.id}`}
              tabIndex={i === actiu ? 0 : -1}
              onClick={() => setActiu(i)}
              className="dial__opcio"
            >
              <span className="dial__nom">
                <ArrowRight size="0.85em" weight="regular" aria-hidden="true" />
                {s.nom}
              </span>
            </button>
          ))}
        </div>

        <div className="dial__sabors">
          {sabors.map((s, i) => (
            <div
              key={s.id}
              id={`sabor-${s.id}`}
              role="tabpanel"
              aria-labelledby={`sabor-tab-${s.id}`}
              data-actiu={i === actiu}
              className="sabor"
            >
              <h3 className="display sabor__nom">
                <Ll>{s.nom}</Ll>
              </h3>
              <p className="mt-4 text-sm font-medium md:mt-6 md:text-base">{s.territori}</p>
              <p className="mt-1 max-w-[38ch] text-lg leading-snug md:text-xl">{s.text}</p>
              <a href="#reserva" onClick={() => triar(s)} className="enllac mt-5 inline-block text-base font-medium">
                Aquesta per a la nostra taula
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
