import type { ReactNode } from "react";
import { Foto } from "@/components/Foto";
import { Scrub } from "@/components/Scrub";

/** Titular que travessa una foto en segon pla; `invertit` posa la foto a l'esquerra. */
export function EscenaFoto({
  src,
  alt,
  enquadre,
  titol,
  invertit = false,
  children,
}: {
  src: string;
  alt: string;
  enquadre: string;
  titol: string;
  invertit?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      data-tone="light"
      data-tone-md={invertit ? "dark" : "light"}
      className={`concepte overflow-x-clip bg-crema text-oliva ${invertit ? "concepte--invertit" : ""}`}
    >
      <div className="concepte__cap" data-tone="dark" data-tone-md={invertit ? "dark" : "light"}>
        <Scrub className="concepte__foto">
          <Foto
            src={src}
            alt={alt}
            sizes="(min-width: 768px) 60vw, 100vw"
            className="h-full w-full"
            imageClassName={`object-cover ${enquadre}`}
          />
        </Scrub>
        <h2 className="concepte__titol display">{titol}</h2>
      </div>

      <div className="concepte__text">{children}</div>
    </section>
  );
}
