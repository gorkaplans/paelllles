# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Grups de 25 a 45 anys que organitzen àpats a casa, aniversaris o celebracions informals, amb sensibilitat estètica. També esdeveniments privats i d'empresa.

## Product Purpose

paelllles és un servei de paella amb xef a domicili: el xef va a casa del client i cuina la paella allà mateix, davant dels convidats. És un subnegoci de LlulluCakes (obrador de pastisseria a Castellar del Vallès); les "ll" del nom vénen de Llullu. La web ha de generar sol·licituds de reserva o pressupost i transmetre la marca i la identitat.

## Positioning

La identitat viu a la intersecció de tres territoris, sense caure del tot en cap: **Trendy** (estètica actual, editorial, compartible — risc: postureo buit), **Casolà** (calidesa, família, sobretaula, producte — risc: aspecte de restaurant de tota la vida) i **Autor** (cuina cuidada, criteri de xef — risc: fredor d'alta cuina). Idea de marca: "el foc lent i la taula llarga" — l'experiència de reunir gent al voltant d'una paella feta sense pressa, més que "demanar menjar".

## Operating Context

- Zona de servei base: Castellar del Vallès, Sabadell (Vallès Occidental); servei a tot Catalunya pagant desplaçament.
- Mínim 8 persones per reserva.
- Flux: reserva → el xef arriba amb tot el necessari → cuina davant dels convidats → els convidats només gaudeixen.
- La majoria de visites arriben des d'Instagram (prioritat mòbil).

## Capabilities and Constraints

- **Sabors i preus: pendents de confirmar.** El BRIEFING esmenta 6 sabors de paella a confirmar; el preu no es mostra fix a la web, es dona només per pressupost (no inventar xifres ni llista de sabors).
- **Formulari de reserva:** recull data, nombre de comensals, ubicació, tipus d'esdeveniment i contacte. Backend d'enviament d'email **pendent de decidir** (el BRIEFING apunta a un route handler de Next.js + servei tipus Resend, però no està confirmat).
- Idioma principal: català.
- Stack ja decidit pel codi existent: Next.js (App Router) + TypeScript, Tailwind CSS, llibreria `motion` per animació, hosting a Vercel. (Veure `BRIEFING.md` secció 8 per detall tècnic complet.)

## Brand Commitments

- Nom: **paelllles**, subnegoci de LlulluCakes.
- Veu: català, proper, poètic però breu. Frases candidates a hero/tagline: "El foc lent i la taula llarga", "Sempre una cullerada més…".
- Símbol principal: silueta de paellera amb anses, dibuixada a mà amb vora irregular (substitueix icones genèriques). Fitxers: `/public/brand/`.
- Tipografia de marca: sans geomètrica en minúscules amb glifs personalitzats (fitxer a `/public/fonts/`).
- Fotografia: documental i càlida, flash directe, gra analògic, colors saturats; mai stock lluminós ni bodegons assèptics.
- Què evitar: degradats (especialment porpra-blau), tipografia per defecte en titulars, tarjetes dins de tarjetes, icones rodones sobre títols, estètica de restaurant clàssic, fons plans sense gra.

## Evidence on Hand

- `BRIEFING.md` — document de context complet (posicionament, paleta aproximada, tipografia, símbol, fotografia, veu, estructura proposada, requisits tècnics).
- `/public/brand/Presentacion_paelllles.pdf` — presentació look & feel original.
- `/public/brand/logo.svg`, `/public/brand/Illustration.svg` — actius de marca.
- `/public/brand/photos/` — fotografia documental de producte (actualment 4 recursos).
- `/public/fonts/CMGeom-Regular.woff(2)` — tipografia de marca.
- No hi ha testimonis, casos d'estudi ni dades de preu/menú confirmades encara: no inventar-les.

## Product Principles

1. L'experiència (el foc lent, la taula llarga) és el producte, no un afegit decoratiu.
2. Equilibri constant entre trendy, casolà i autor — mai inclinar-se del tot cap a un sol extrem.
3. La fotografia documental i el símbol de la paellera substitueixen la iconografia genèrica i l'estètica de restaurant clàssic.
4. Mòbil primer: la majoria del trànsit ve d'Instagram.
5. No inventar dades de producte (sabors, preus, testimonis) que encara no existeixen.
