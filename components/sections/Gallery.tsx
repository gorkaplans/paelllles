import type { CSSProperties } from "react";
import { Foto } from "@/components/Foto";
import { Ll } from "@/components/Ll";
import { galeria } from "@/lib/content";

export function Gallery() {
  return (
    <section id="experiencia" data-tone="dark" className="bg-oliva px-5 py-20 text-crema md:px-10 md:py-28">
      <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-6">
        <h2 className="display text-[clamp(3rem,13vw,4rem)] md:col-span-7 md:text-[clamp(3.5rem,6vw,6.5rem)]">
          la taula <Ll>llarga</Ll>
        </h2>
        <p className="max-w-[42ch] text-lg leading-snug md:col-span-5 md:text-xl">
          Una paella es comparteix des de molt abans de servir-la: l&apos;olor,
          el sofregit, la conversa al costat del foc.
        </p>
      </div>

      <ul className="galeria mt-10 md:mt-14">
        {galeria.map((f) => (
          <li key={f.alt} style={{ "--alt": f.alcada } as CSSProperties}>
            <Foto
              src={f.src}
              alt={f.alt}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-full w-full"
              imageClassName={`object-cover ${f.enquadre ?? ""}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
