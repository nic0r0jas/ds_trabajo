# Entel Design System

A working design system derived from the **Entel Manual de Marca 2022** (version 08/2023, 191 pp.). It packages Entel's brand foundations — color, typography, the parenthesis device, iconography rules, tone of voice — plus ready-to-use CSS tokens, preview cards, UI kits and slide templates, so design agents can produce on-brand Entel interfaces and assets.

> **About "Trabajo":** this project was briefed under the working name *Trabajo*. The source material is Entel's official brand manual, and Entel's **Empresas / Corporaciones** (B2B / "work") tier — built on the *Azul Negocios* palette and the "Con tu negocio en todas" verbal complement — is the most relevant surface for a work/business product. The system covers both the consumer (B2C) and business (B2B) expressions.

---

## Who is Entel

Entel is a major Chilean telecommunications company (mobile, fixed, 5G, B2B/enterprise digital services), also operating in Peru. Its purpose, per the manual: *"Existimos para acercar las infinitas posibilidades que da la tecnología y así transformar responsablemente la sociedad."* The brand line is **"Entel. Contigo en todas"** (B2C) / **"Con tu negocio en todas"** (B2B) — positioning Entel as a trusted ally in both personal and working life.

**Three design principles** govern everything, visual and verbal:
- **Simple** — clear and direct; strip away artifice, focus on the user.
- **Expresivo** — dynamic and expansive; the type, color and *parenthesis* stretch elastically to surprise and stay memorable.
- **Transformador** — an agent of change; inclusive, digital-first, generating positive impact in every interaction.

**Brand segments / surfaces:**
- **Entel (B2C / Personas)** — consumer mobile, plans, devices, app. Azul Entel + Naranjo, warm and close.
- **Entel Empresas & Corporaciones (B2B)** — business & enterprise. More formal, leans on **Azul Negocios**.
- **Markets:** Chile (the "e)" isotype alone suffices) and Peru (full "entel" wordmark recommended).

---

## Sources

- `uploads/Manual de marca.pdf` — Entel Manual de Marca 2022 (08/2023), 191 pages. Primary source.
- `uploads/Entel_Manual_Marca_2023_Agosto_Final2.pdf` — identical copy of the above.
- `uploads/entel_manual_text.txt` — extracted full text of the manual (for reference / search).

No codebase, Figma, or live product was provided. UI-kit screens here are faithful reconstructions of the patterns described and illustrated in the manual (color roles, type hierarchy, the parenthesis system, UI icon rules), not copies of production code. Where production detail is unknown, components stay deliberately simple.

---

## CONTENT FUNDAMENTALS

How Entel writes. The voice is **Cercano, Facilitador, Inspirador** — warm, helpful, optimistic.

- **Language:** Spanish (Chilean), standard and accessible. Avoids jargon and over-technical terms; explains with humility when needed.
- **Person:** Second person singular, informal — **"tú"** (never "usted"). Speaks to the customer as an equal. Uses community words like *"juntos"*, *"contigo"*. Personalizes (uses the customer's name where possible).
- **Casing:** **Sentence case** everywhere — headlines and titles take a single initial capital only. *Never* ALL CAPS for headlines (the manual explicitly says it's harder to read). 
- **Headlines:** Short. One idea per message. Don't repeat the same text across headline, subhead and button. "Menos es más." No terminal punctuation on headlines or list items.
- **CTAs / buttons:** Imperative verbs, but warm and non-authoritarian — invite, don't command. The user must know exactly what happens on click. E.g. *"Descubre más"*, *"Contrata tu plan"*, *"Mejora tu negocio"*.
- **Gender-neutral** language wherever possible.
- **Alignment:** Flush left (bandera izquierda). Avoid centered or right-aligned body text.
- **Tone by segment:** Personas → close, everyday, reassuring. Empresas/Corporaciones → still warm but more formal, expert, "partnership" framed; consultative.
- **Emoji:** Not part of the brand system. Don't use emoji in product or marketing copy. Meaning is carried by icons, the parenthesis and color, not emoji.
- **Vibe:** *"Estar expectante por el futuro viviendo el presente."* Positive, authentic, energetic, inclusive, local. Hopeful and human — technology in service of people, never technology as the hero.

**Example copy (from the manual's own pieces):**
- *"Que tu negocio sea protagonista"*
- *"Nuevos planes para empresas"*
- *"Mejora tu negocio con las mejores soluciones"*
- *"Todo lo necesario para tu negocio y para ti"*
- *"Entel te acompaña durante todo el proceso"*
- *"Cobertura donde la necesites"*
- *"Más cerca de los tuyos en todo momento"*

---

## VISUAL FOUNDATIONS

**Color.** White-dominant. **Blanco (#FFFFFF)** is the predominant color of *every* piece. **Azul Entel (#002EFF)** is the protagonist — titles, prices, links, buttons, the parenthesis, brand presence; used consistently for recognition. **Naranjo Entel (#FF3D00)** is a fundamental but low-percentage accent — highlights, iconography, the parenthesis, "5G". Secondary: **Verde Eco (#42E8B4)** for offers/discounts/promos only; **Azul Negocios (#10069F)** for the more formal Empresas/Corporaciones tier (backgrounds, iconography, illustration). **Black** is exceptional — body text, product descriptions, special campaigns (Black Friday). A cool neutral grey scale (#F7F7F7 → #66686C → #000000) orders secondary information. Feedback uses a traffic-light set (success #22BE8D, warning #F5B207, error #DB110A) each over a pale tint. Imagery color is **warm, vibrant, natural-light** — never B&W, never artificially lit or obviously retouched.

**Typography.** Two families. **Barlow** (a slightly rounded grotesk inspired by Californian transit signage) for titles and large text — weights Regular / Medium / Bold (full Thin→Black + italics available), **self-hosted from `fonts/`** (the user supplied the TTFs). **Inter** for small sizes where Barlow's low contrast hurts legibility, loaded from Google Fonts. Hierarchy: Titulares Barlow Regular 54pt, Precio Barlow Bold 60pt, Subtítulo/Destacado Barlow Bold 22/26, body Barlow Regular 16, small 10. Tracking 0 (optical), line-height 100–140%, flush-left, sentence case.

**The parenthesis "( )"** is Entel's signature graphic device — the bracket that completes the "e)" logo, detached and scaled freely to build a unique brand language. As a rule it scales to ~200% of the longest side of a piece (150% horizontal formats, 250% vertical). Preferred crop shows **both corners** of the bracket; if not possible, keep the **left** corner. It never touches the format edges with both corners, is never rotated, deformed or recolored outside palette. Used as: image crop, inline element, image container, or integrated into a photo. Color: Azul Entel (default), Naranjo or Verde Eco occasionally.

**Backgrounds.** Mostly solid white or solid brand color (Azul Entel / Azul Negocios) — flat, no gradients, no noise, no busy textures. Photography is used full-bleed or cropped inside the parenthesis. The parenthesis itself, set large and low-contrast, is the main "texture."

**Layout.** Flush-left composition, generous white space, one or two focal elements. Logo preferred top-left or bottom-right corner. 4px spacing grid. 24px icon grid.

**Corner radii.** Geometric with gentle softening. Icons use ~1–3px vertex radii. UI uses small radii on cards/inputs and pill radii on primary buttons and chips. Not heavily rounded, not sharp-cornered.

**Shadows / elevation.** Soft, low, cool-tinted (toward Azul Negocios). No heavy drop shadows, no volume. Illustration and icons are explicitly **flat — never shadowed or given volume**. Depth comes from color contrast and the grey surfaces (#F7F7F7), not shadow.

**Borders.** Hairline neutral lines (#E9E9E9 / #D7D7D7) to delimit and divide. Selection / interaction shown by high color contrast rather than heavy outlines.

**Hover / press states.** Hover = soft grey surface (#F7F7F7) or a darker shade of the brand color. Press = stronger color contrast. Focus = blue focus ring (rgba(0,46,255,.25)). Interactivity is signaled by **color**, per the UI color principles (Consistente, Distintivo, Intencional). No bounce; motion is simple and direct.

**Animation.** Following "Simple" and "Transformador": direct, no gratuitous tricks or ornament. Two logo-motion modes — v01 *Simplicidad* (clear, direct, preferred) and v02 *Transformación* (more expressive). Favor clean fades and crisp transitions over playful bounce; nothing distracting.

**Transparency / blur.** Used sparingly — text-protection gradients over photos to keep WCAG-AA contrast (4.5:1 normal text, 3:1 large). Prefer the parenthesis or solid panels over heavy glassmorphism.

---

## ICONOGRAPHY

Entel splits icons into two clear uses:

- **UI / functional icons** — practical, for apps/web/mailing. **Single color.** If interactive, **Azul Entel (#002EFF)**; white when on a blue background. Small, no rotation. Built on a **24px grid** with sizes **Small 18 / Medium 24 / Large 36 / XLarge 48** px. Line-based with consistent **1px strokes**, ~20×20px safe zone (2px padding), outer-vertex radius 1px (small) to 3px (large). **No fill, no perspective, no volume, no shadow, no rotation, never more than one color in UI.**
- **Illustrative icons** — support concepts in banners, packaging, mailings, decks, social. **Two colors** (always more Azul than Verde Eco/Naranjo), medium (static) to large (rotation allowed). Each brand attribute has a dedicated illustrative icon: *Líder transformador, Motivador, Explorador, Inspirador, Cercano, Facilitador*. Still flat — never shadowed.

**Don'ts:** mixed stroke weights, fills, >2 colors, non-corporate colors, perspective/volume, over-detailed icons, rotating UI icons.

**There is no proprietary icon font in the provided materials.** For this design system we substitute **[Lucide](https://lucide.dev)** (loaded from CDN) as the UI icon set — it is a clean, consistent, open-source line set on a 24px grid that closely matches Entel's geometric, single-stroke, rounded-vertex style. We render Lucide at **stroke-width ~1.5** in Azul Entel to approximate Entel's thinner 1px feel. **⚠️ Substitution flagged** — see Caveats. Emoji and unicode glyphs are **not** used as icons.

---

## Logo & the parenthesis

The logo is the lowercase **"e"** followed by a **parenthesis** → **"e)"** (the *isotipo*); the full **horizontal lockup** adds the **"entel"** wordmark. The authentic isotipo pairs a **blue `#002EFF` "e"** with an **orange `#FF3D00` parenthesis** — that orange bracket is the signature. **Real vectors** were extracted from the user's `uploads/Logos.pdf` and `uploads/manual marca logos.pdf` and live in `assets/`: `entel-logo-horizontal-color/blanco.svg` (+ 2800px PNGs, the primary logo, used in UI-kit headers), `entel-isotipo-color/blanco.svg` (+ PNGs), and `paren-*.svg`. Minimum sizes ~20/30/60 px wide. Don't alter structure, recolor outside palette, separate the "e" from the parenthesis, rotate, deform, or add effects.

---

## Index / Manifest

Root files:
- **`README.md`** — this file: brand context, content & visual foundations, iconography, manifest.
- **`colors_and_type.css`** — all design tokens: brand + UI colors, grey scale, semantic colors, type families/weights, semantic type styles, spacing, radii, shadows, icon sizes. **Import this in every artifact.**
- **`SKILL.md`** — Agent-Skills-compatible entry point for using this system.
- **`uploads/`** — source PDFs + extracted text.

Folders:
- **`assets/`** — logo lockups, the parenthesis device, brand marks. (See `assets/README.md`.)
- **`preview/`** — small HTML specimen cards that populate the Design System tab (colors, type, spacing, components, brand).
- **`ui_kits/`** — high-fidelity interactive reconstructions, one folder per surface:
  - `ui_kits/personas_web/` — Entel B2C marketing/site (plans, devices, hero).
  - `ui_kits/empresas_web/` — Entel Empresas (B2B) site, Azul Negocios tier.
  - `ui_kits/app/` — Entel mobile app (Mi Entel) screens.
- **`slides/`** — Entel-branded slide templates (title, section, comparison, big-quote, stat). Created because the manual is presentation-led; mirrors the manual's own layout language.

---

## How to use

1. Link `colors_and_type.css` and use the CSS variables — never hard-code hex values.
2. Fonts: **Barlow self-hosted** from `fonts/` (`@font-face` in the CSS); **Inter** from Google Fonts (already `@import`-ed).
3. Use Lucide from CDN for UI icons, Azul Entel, ~1.5 stroke (flagged substitution).
4. Compose flush-left, white-dominant, with the parenthesis as the hero graphic.
5. Write copy in Spanish, "tú", sentence case, warm and clear.
