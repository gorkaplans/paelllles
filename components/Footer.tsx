import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { contacte, enllacTelefon, enllacWhatsapp, seccions } from "@/lib/content";

export function Footer() {
  return (
    <footer data-tone="dark" className="overflow-hidden bg-carbo px-5 pb-6 pt-16 text-base text-crema md:px-10 md:pt-20">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
        <div className="sm:col-span-2 md:col-span-4">
          <p className="max-w-[34ch] leading-relaxed text-crema/80">
            Paella amb xef a domicili. Un subnegoci de LlulluCakes, obrador de
            pastisseria a Castellar del Vallès.
          </p>
        </div>

        <nav aria-label="Peu de pàgina" className="md:col-span-3">
          <p className="peu__titol">Navega</p>
          <ul className="peu__llista">
            {seccions.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="enllac-net">{s.nom}</a>
              </li>
            ))}
            <li>
              <a href="#reserva" className="enllac-net">Demana pressupost</a>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="peu__titol">Contacte</p>
          <ul className="peu__llista">
            <li>
              <a href={enllacTelefon} className="enllac-net">{contacte.telefon}</a>
            </li>
            <li>
              <a href={enllacWhatsapp("Hola! Voldria demanar pressupost per a una paella.")} target="_blank" rel="noreferrer" className="enllac-net">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 text-crema/80">
              <InstagramLogo size={18} aria-hidden="true" />
              Instagram (enllaç pendent)
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="peu__titol">Zona</p>
          <p className="leading-relaxed text-crema/80">
            Castellar del Vallès i Sabadell. Tota Catalunya amb suplement de
            desplaçament.
          </p>
        </div>
      </div>

      <span className="logo-gegant mt-14 md:mt-20" role="img" aria-label="paelllles" />

      <div className="mt-6 flex flex-col gap-2 border-t border-crema/25 pt-4 text-sm text-crema/80 md:flex-row md:justify-between">
        <p>© 2026 paelllles · LlulluCakes</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li>Avís legal (pendent)</li>
          <li>Privacitat (pendent)</li>
          <li>Cookies (pendent)</li>
        </ul>
      </div>
    </footer>
  );
}
