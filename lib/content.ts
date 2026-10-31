// Contingut editable de la web. Per posar una foto real, ompliu `foto` o `src`
// amb la ruta dins de /public (per exemple "/brand/photos/arros-negre.jpg").

export const seccions = [
  { href: "#com-funciona", nom: "Com funciona" },
  { href: "#paelles", nom: "Les paelles" },
  { href: "#experiencia", nom: "L'experiència" },
  { href: "#preguntes", nom: "Preguntes" },
];

// Número pendent: canvieu-lo aquí i s'actualitza a tot el web.
export const contacte = { telefon: "+34 000 000 000" };

const digits = contacte.telefon.replace(/\D/g, "");

export const enllacTelefon = `tel:+${digits}`;

export function enllacWhatsapp(missatge: string) {
  return `https://wa.me/${digits}?text=${encodeURIComponent(missatge)}`;
}

export type Tonada = {
  fons: string;
  text: string;
  /** Color de la paellera. */
  metall: string;
};

export type Sabor = {
  id: string;
  nom: string;
  territori: "mar" | "muntanya" | "hort" | "mar i muntanya";
  text: string;
  foto?: string;
  tonada: Tonada;
};

const oliva = "var(--color-oliva)";
const molsa = "var(--color-molsa)";
const crema = "var(--color-crema)";
const marro = "var(--color-marro)";
const carbo = "var(--color-carbo)";

// Sabors de mostra: pendents de confirmar pel xef.
export const sabors: Sabor[] = [
  {
    id: "senyoret",
    nom: "Paella del senyoret",
    territori: "mar",
    text: "Gamba, sípia i un bon fumet, tot ja net i pelat. Aquí no cal embrutar-se els dits.",
    tonada: { fons: marro, text: crema, metall: crema },
  },
  {
    id: "negre",
    nom: "Arròs negre",
    territori: "mar",
    text: "Sípia, la seva tinta i un allioli fet a mà. Les dents tenyides, per a la foto de grup.",
    tonada: { fons: crema, text: oliva, metall: carbo },
  },
  {
    id: "mar-muntanya",
    nom: "Mar i muntanya",
    territori: "mar i muntanya",
    text: "Pollastre, botifarra i gamba compartint paellera. Dos mons, una sola cullera.",
    tonada: { fons: oliva, text: crema, metall: crema },
  },
  {
    id: "anec-bolets",
    nom: "Ànec i bolets",
    territori: "muntanya",
    text: "Ànec a foc lent i bolets de temporada. La paella que demana jersei i vi negre.",
    tonada: { fons: carbo, text: crema, metall: molsa },
  },
  {
    id: "verdures",
    nom: "Verdures de l'hort",
    territori: "hort",
    text: "Carxofa, mongeta, pebrot i el que mani el mercat. Ningú hi troba a faltar la carn.",
    tonada: { fons: crema, text: oliva, metall: molsa },
  },
  {
    id: "fideua",
    nom: "Fideuà",
    territori: "mar",
    text: "Fideu fi, brou de peix i allioli. La cosina de l'arròs, que sempre acaba a la festa.",
    tonada: { fons: marro, text: crema, metall: crema },
  },
];

export const passos = [
  {
    verb: "reserveu",
    text: "Reserveu la data i quants sou.",
  },
  {
    verb: "arribem",
    text: "El xef arriba a casa amb tot el que cal.",
  },
  {
    verb: "gaudiu",
    text: "Vosaltres només gaudiu de la taula.",
  },
];

export const galeria: { src?: string; alt: string; alcada: string; enquadre?: string }[] = [
  { src: "/brand/photos/Recurso 4.png", alt: "La paella acabada, amb gambes, sobre l'azulejo verd", alcada: "100%", enquadre: "object-[68%_50%]" },
  { alt: "la taula parada abans que arribi tothom", alcada: "68%" },
  { src: "/brand/photos/Recurso 5.png", alt: "Rentant tomàquets acabats de collir", alcada: "86%", enquadre: "object-[42%_50%]" },
  { alt: "el xef remenant, amb els convidats al voltant", alcada: "58%" },
  { src: "/brand/photos/Recurso 3.png", alt: "Sofregit a foc lent, de prop", alcada: "78%" },
];
