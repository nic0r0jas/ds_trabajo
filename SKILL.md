---
name: entel-design
description: Use this skill to generate well-branded interfaces and assets for Entel (the Chilean telecom — consumer "Personas" and business "Empresas/Corporaciones"), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Also covers the working brand "Trabajo".
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Tokens:** link/import `colors_and_type.css` — never hard-code hex. Brand: Azul Entel `#002EFF`, Naranjo Entel `#FF3D00`, Blanco; secondary Verde Eco `#42E8B4` (offers), Azul Negocios `#10069F` (B2B). Greys + semáforo (success/warning/error) included.
- **Type:** Barlow (display/titles, self-hosted in `fonts/`) + Inter (small UI, Google Fonts). Sentence case, flush-left, tracking 0.
- **Brand device:** the parenthesis `( )` (`assets/paren-*.svg` in azul/naranjo/verde/blanco) — scale large, show both corners or keep the left, never rotate/recolor. Authentic logo (real vectors): `assets/entel-logo-horizontal-color.svg` / `-blanco.svg` (full lockup "e) entel", primary), `assets/entel-isotipo-color.svg` / `-blanco.svg` (the "e)" symbol). Blue "e" + **orange** parenthesis.
- **Icons:** Lucide from CDN at stroke ~1.5 in Azul Entel (flagged substitute for Entel's proprietary single-stroke set).
- **Voice:** Spanish, "tú", warm + clear + optimistic, no emoji. "Contigo en todas" (B2C) / "Con tu negocio en todas" (B2B).
- **UI kits:** `ui_kits/personas_web` (B2C site), `ui_kits/empresas_web` (B2B site), `ui_kits/app` (Mi Entel mobile). Copy components/patterns from these.

## Files
- `README.md` — full brand context, content + visual foundations, iconography, manifest.
- `colors_and_type.css` — all design tokens + semantic type styles.
- `fonts/` — Barlow TTFs (self-hosted). `assets/` — logo + parenthesis marks.
- `preview/` — specimen cards. `ui_kits/` — interactive reconstructions.
