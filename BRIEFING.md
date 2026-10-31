# BRIEFING

# Briefing web — paelllles

> Documento de contexto para Claude Code. Léelo antes de `/impeccable init` y de proponer la dirección de diseño.
> 

## 1. El proyecto

**paelllles** es un servicio de paellas con chef a domicilio: el chef va a casa del cliente y cocina la paella allí, delante de los invitados. Es un subnegocio de LlulluCakes (obrador de pastelería en Castellar del Vallès). Las “ll” del nombre vienen de Llullu.

- **Idioma principal de la marca:** catalán.
- **Zona de servicio:** Castellar, sabadell (vallès occidental) pero pagando desplazamiento toda catalunya
- **Formatos y precios:** 6 sabores de paella a confirmar y minimo 8 personas, precio tienen qe pedir presu

## 2. Posicionamiento

La identidad se sitúa en la intersección de tres territorios. La web tiene que vivir justo en ese punto, sin caer del todo en ninguno:

| Territorio | Qué aporta | Riesgo si domina |
| --- | --- | --- |
| **Trendy** | Estética actual, editorial, compartible | Postureo vacío |
| **Casolà** | Calidez, familia, sobremesa, producto | Aspecto de restaurante de toda la vida |
| **Autor** | Cocina cuidada, criterio de chef | Frialdad de alta cocina |

**Idea de marca:** el fuego lento y la mesa larga. Se trata de la experiencia de reunir gente alrededor de una paella hecha sin prisa, más que de “pedir comida”.

## 3. Público y objetivo

- **Cliente ideal:** Hipótesis: grupos de 25 a 45 años que organizan comidas en casa, cumpleaños o celebraciones informales, con sensibilidad estética. También eventos privados y de empresa.
- **Objetivo principal de la web:** conseguir solicitudes de reserva o presupuesto i mostrar la marca i la identidad
- **Objetivos secundarios:** transmitir la experiencia y dar confianza (cómo funciona, qué incluye, zona y precios orientativos).

## 4. Identidad visual (extraída de la presentación look&feel)

### Paleta

Valores aproximados, tomados de la presentación. Sustituir por los HEX oficiales: [CONFIRMAR]

| Rol | Color | Aprox. |
| --- | --- | --- |
| Verde oliva profundo (principal) | Verde muy oscuro | `#2A3618` |
| Verde musgo (acento) | Verde medio | `#5E7136` |
| Crema (fondo claro / texto sobre oscuro) | Blanco roto cálido | `#EDE5DF` |
| Marrón tostado (fondo oscuro) | Marrón casi negro | `#3B2F2A` |
| Carbón (fondo oscuro alternativo) | Gris verdoso oscuro | `#272B29` |
| Rojo tomate (solo fotografía) | Viene de la imagen, no de la UI | — |
- **Textura de grano** sutil sobre todos los fondos planos. Es parte esencial de la identidad y los fondos no deben quedar limpios ni digitales.
- Contraste siempre crema sobre oscuro o verde oscuro sobre crema.

### Tipografía

- **Display / logotipo:** sans geométrica en minúsculas con glifos personalizados: las “LLLL” altas del logotipo y la “u” y la “m”/“n” con forma particular (“taula”, “cullerada”). Se usa en titulares grandes y frases de marca. Archivo de fuente: /public/fonts
- **Texto / UI:** sans limpia y neutra
- Titulares cortos, mucho aire y poca jerarquía de pesos.

### Símbolo

- Silueta de **paellera con asas**, dibujada a mano con borde irregular.
- archivo del svg: /public/brand/
- Usos: sello o pegatina sobre fotografía, forma recortada que entra y sale por los bordes del encuadre, patrón sobre imagen, estampado en merch.
- Es el elemento gráfico principal de la web y sustituye a iconos genéricos.

### Fotografía

- archivos: /public/brand/photos
- Documental y cálida, con flash directo, grano analógico y colores saturados.
- Temas: paella en paellera sobre azulejo verde, producto en crudo (tomates, sofrito en primer plano), manos cocinando, cocina “detrás de escena”, gente alrededor de la mesa, merch (camiseta con logotipo y paellera).
- Nada de fotografía de stock luminosa ni de bodegones asépticos.

### Voz y textos

- Catalán, cercano, poético pero breve.
- Frases existentes en la presentación, candidatas a hero o tagline:
    - **“El foc lent i la taula llarga”**
    - **“Sempre una cullerada més…”**

## 5. Estructura propuesta

1. **Hero:** foto a sangre o fondo con textura, logotipo y frase de marca, CTA “Reserva / Demana pressupost”.
2. **El concepte:** qué es paelllles en 2–3 líneas, con el punto trendy · casolà · autor.
3. **Com funciona:** 3 pasos (reservas → el chef viene con todo → cocina delante de vosotros y vosotros solo disfrutáis).
4. **Les paelles:** tipos de paella o menú. [CONFIRMAR contenido]
5. **L’experiència:** galería documental (cocina, producto, mesa larga).
6. **Per a qui / ocasions:** celebraciones, cumpleaños, comidas de empresa.
7. **Preguntes freqüents:** zona, mínimo de comensales, qué hace falta en casa, alergias, precio orientativo.
8. **Reserva:** formulario de solicitud (fecha, comensales, ubicación, tipo de evento, contacto).
9. **Footer:** , Instagram, contacto…

## 6. Movimiento

Mínimo y con sentido. Candidatos:

- Paellera que entra y sale del encuadre o gira muy despacio, como el “foc lent”.
- Revelado suave de titulares al hacer scroll, con ease-out.
- Hover discreto en CTAs y tarjetas de paella.

No usar parallax agresivo, cursores personalizados ni animaciones en cada bloque. Respetar `prefers-reduced-motion`.

## 7. Qué evitar

- Degradados, especialmente morado-azul, y colores fuera de la paleta.
- Tipografía por defecto (Inter/Arial) en titulares.
- Tarjetas dentro de tarjetas e iconos redondeados sobre cada título. El símbolo de la paellera sustituye a los iconos.
- Estética de restaurante clásico (manteles, rojo y amarillo “bandera”, clipart de gambas).
- Fondos planos sin grano.

## 8. Requisitos técnicos

- **Framework:** Next.js (App Router) con TypeScript.
- **Estilos:** Tailwind CSS, con la paleta y tipografías como tokens del tema.
- **Animación:** librería `motion` (antes Framer Motion), solo donde la sección 6 lo justifique.
- **Imágenes:** public/brands`/photos`, formatos modernos y lazy loading.
- **Idiomas:** catalán por defecto;
- **Formulario de reserva:** route handler de Next que envía email (p. ej. Resend) o servicio externo. [CONFIRMAR]
- **SEO local:** metadatos por página, datos estructurados `LocalBusiness`/`FoodService` y Open Graph con la identidad.
- **Hosting:** Vercel.
- **Prioridad móvil:** la mayoría de visitas llegarán desde Instagram.

## 9. Respuestas para `/impeccable init`

- **¿Qué es?** Servicio de paella con chef a domicilio, en catalán, con identidad trendy · casolà · autor.
- **¿Para quién?** Grupos que celebran en casa y valoran la experiencia y la estética.
- **¿Qué debe conseguir?** Solicitudes de reserva o presupuesto.
- **Sensación:** cálida, editorial, con textura y sin prisa. Como una sobremesa larga, no como un restaurante.
- **No debe parecer:** una plantilla de restaurante, una web corporativa de catering ni una landing de SaaS.