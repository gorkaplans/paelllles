import { EscenaFoto } from "@/components/EscenaFoto";

export function Concept() {
  return (
    <EscenaFoto
      src="/brand/photos/Recurso 6.png"
      alt="El xef d'esquena, amb la samarreta de paelllles"
      enquadre="object-[45%_45%]"
      titol="paella feta sense presses, a casa teva."
    >
      <p className="max-w-[46ch] text-lg leading-relaxed md:text-xl">
        paelllles és un xef, una paellera i el foc, a casa vostra. Neix de
        LlulluCakes, l&apos;obrador de Castellar del Vallès, amb la mateixa
        manera de fer: bon producte, temps i ganes que la gent es quedi.
      </p>
      <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-oliva/80 md:text-xl">
        No venim a portar menjar. Venim a allargar la sobretaula.
      </p>
    </EscenaFoto>
  );
}
