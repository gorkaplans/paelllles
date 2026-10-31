"use client";

import { useCallback, useRef } from "react";
import { Ll } from "@/components/Ll";
import { PAELLERA_COS, PAELLERA_D } from "@/lib/paellera-path";
import { useScrub } from "@/lib/scroll";

const { cx, cy, r } = PAELLERA_COS;
// El cos de la paellera ocupa el 40% del costat curt del visor en repòs.
const BANDA = r / 0.4;
const GIR_INICIAL = -12;

export function Hero() {
  const stage = useRef<HTMLElement>(null);
  const pan = useRef<SVGGElement>(null);

  const draw = useCallback((p: number) => {
    const el = stage.current;
    if (!el || !pan.current) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cobrir = (Math.hypot(w, h) / 2 / (0.4 * Math.min(w, h))) * 1.12;
    const zoom = Math.pow(cobrir, p);
    pan.current.setAttribute(
      "transform",
      `rotate(${(GIR_INICIAL + p * 120).toFixed(2)} ${cx} ${cy}) translate(${cx} ${cy}) scale(${zoom.toFixed(4)}) translate(${-cx} ${-cy})`,
    );
  }, []);

  useScrub(stage, "stage", draw);

  return (
    <section ref={stage} data-tone="dark" className="hero bg-oliva">
      <div className="hero__stage">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`${cx - BANDA / 2} ${cy - BANDA / 2} ${BANDA} ${BANDA}`}
          aria-hidden="true"
        >
          <g ref={pan} transform={`rotate(${GIR_INICIAL} ${cx} ${cy})`}>
            <path d={PAELLERA_D} fill="var(--color-molsa)" />
          </g>
        </svg>

        <h1 className="hero__logo">
          <span className="sr-only">paelllles</span>
          <span className="logo-gegant" aria-hidden="true" />
        </h1>

        <div className="hero__peu">
          <div>
            <p className="hero__esvaeix mb-3 max-w-[34ch] text-base leading-snug md:text-lg">
              Un xef prepara la paella a casa teva, davant dels convidats, sense
              presses.
            </p>
            <p className="hero__frase display">
              el foc lent i la taula <Ll>llarga</Ll>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#reserva" className="boto boto--crema">
              Demana pressupost
            </a>
            <a href="#com-funciona" className="hero__esvaeix enllac text-sm font-medium">
              Com funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
