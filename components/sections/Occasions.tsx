import { EscenaFoto } from "@/components/EscenaFoto";

export function Occasions() {
  return (
    <EscenaFoto
      invertit
      src="/brand/photos/Recurso 5.png"
      alt="Mans rentant tomàquets"
      enquadre="object-[42%_50%]"
      titol="dinars de celebració a casa, aniversaris i esdeveniments d'empresa que volen sortir de la sala de reunions."
    >
      <p className="max-w-[46ch] text-lg leading-relaxed md:text-xl">
        A partir de 8 persones. Som a Castellar del Vallès i Sabadell, i anem a
        tota Catalunya amb un suplement de desplaçament.
      </p>
    </EscenaFoto>
  );
}
