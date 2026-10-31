import { Scrub } from "@/components/Scrub";
import { passos } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="com-funciona" data-tone="dark" className="bg-oliva px-5 py-20 text-crema md:px-10 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <h2 className="display text-[clamp(2rem,3.4vw,3.25rem)] md:col-span-3">
          com funciona
        </h2>

        <Scrub className="passos md:col-span-9">
          <div className="passos__via" aria-hidden="true">
            <span className="passos__paellera mask-paellera" />
          </div>
          <ol className="grid gap-9 md:grid-cols-3 md:gap-6">
            {passos.map((p) => (
              <li key={p.verb}>
                <p className="display text-[clamp(2rem,3.4vw,3.25rem)]">{p.verb}</p>
                <p className="mt-2 max-w-[26ch] text-base leading-snug text-crema/85 md:mt-3 md:text-lg">
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </Scrub>
      </div>
    </section>
  );
}
