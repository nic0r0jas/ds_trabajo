# Entel Empresas — B2B web UI kit

High-fidelity, interactive reconstruction of Entel's **Empresas / Corporaciones** (B2B) marketing site, on the **Azul Negocios (#10069F)** tier with the more formal, consultative tone the manual prescribes. Built from the brand foundations — no production code was provided.

## Run
Open `index.html`. React + Babel (inline JSX) + Lucide, all from CDN. Uses `../../colors_and_type.css` and `../../assets/`.

## What's interactive
- **Header** — Azul Negocios accents, "entel) Empresas" lockup, "Habla con un experto" → scrolls to the contact form.
- **Hero** — Azul Negocios full-bleed, white parenthesis device, Verde Eco eyebrow; CTAs smooth-scroll.
- **Stats band** (black) — Verde Eco figures.
- **Solutions** — six `SolCard`s (Conectividad, Cloud, Ciberseguridad, Colaboración, IoT, Transformación digital); hover lift, "Conocer más" → contact.
- **Client logos** strip (placeholder wordmarks).
- **Contact** — split panel + working form; submit fires a confirmation toast.
- **Footer**.

## Files
- `kit.css` — styles (imports tokens; B2B palette).
- `components.jsx` — `Icon, Logo, Button, Header, Hero, Stats, Solutions, Logos, Contact, Footer, Toast` (exported to `window`).
- `app.jsx` — `App` with smooth-scroll nav + toast.

## Notes
- Distinct from the consumer kit by palette (Azul Negocios vs Azul Entel), tone (formal/partner) and content (solutions vs plans) — both share the type, parenthesis and icon system.
- Client logos are placeholders. Icons are **Lucide** (flagged substitute).
