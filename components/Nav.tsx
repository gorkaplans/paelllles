"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr/List";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { seccions } from "@/lib/content";
import { usePageScroll } from "@/lib/scroll";

export function Nav() {
  const [obert, setObert] = useState(false);
  const [actiu, setActiu] = useState<string | null>(null);

  usePageScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const hash = `#${entry.target.id}`;
          if (entry.isIntersecting) setActiu(hash);
          else setActiu((a) => (a === hash ? null : a));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const s of seccions) {
      const el = document.querySelector(s.href);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!obert) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setObert(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [obert]);

  return (
    <header className="nav">
      <div className="nav__barra">
        <Link href="/" aria-label="paelllles" className="nav__marca">
          <span className="nav__logo" aria-hidden="true" />
          <span className="nav__paellera mask-paellera" aria-hidden="true" />
        </Link>

        <nav aria-label="Principal" className="nav__apartats">
          {seccions.map((s) => (
            <a
              key={s.href}
              href={s.href}
              aria-current={actiu === s.href ? "location" : undefined}
              className="nav__enllac"
            >
              {s.nom}
            </a>
          ))}
        </nav>

        <div className="nav__accions">
          <a href="#reserva" className="nav__cta">
            Demana pressupost
          </a>
          <button
            type="button"
            aria-expanded={obert}
            aria-controls="nav-menu"
            aria-label={obert ? "Tanca el menú" : "Obre el menú"}
            onClick={() => setObert(!obert)}
            className="nav__boto"
          >
            {obert ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {obert && (
        <nav id="nav-menu" aria-label="Menú" className="nav__menu">
          {seccions.map((s) => (
            <a key={s.href} href={s.href} onClick={() => setObert(false)} className="nav__menu-enllac">
              {s.nom}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
