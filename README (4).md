# Entel — Personas (B2C web) UI kit

High-fidelity, interactive reconstruction of Entel's consumer web surface (mobile plans + devices marketing/commerce). Built from the brand manual's color roles, type hierarchy, parenthesis system and UI icon rules — not from production code (none was provided).

## Run
Open `index.html`. React + Babel (inline JSX) + Lucide icons, all from CDN. Uses `../../colors_and_type.css` and `../../assets/`.

## What's interactive
- **Header** — sticky, blur, nav, search/account/cart icon buttons; cart badge increments.
- **Hero** — full-bleed Azul Entel with the white parenthesis device; CTA smooth-scrolls to plans.
- **Plans** — filter chips (selection by contrast), three `PlanCard`s; "Contratar" selects (blue border) and fires a toast + cart bump.
- **Devices** — `DeviceCard` grid; clicking adds to cart with toast.
- **Banner** — B2B cross-sell on Azul Negocios.
- **Footer** + **Toast** confirmation.

## Files
- `kit.css` — component styles (imports the design tokens).
- `components.jsx` — `Icon, Logo, Button, Header, Hero, PlansSection, DevicesSection, Banner, Footer, Toast` (exported to `window`).
- `app.jsx` — `App` orchestrator: cart + selection + toast state.

## Notes
- Logo is live Barlow text (`entel)`); parenthesis is the SVG device.
- Device images are placeholders (line icon) — swap for real product shots.
- Icons are **Lucide** (CDN) at stroke 1.5 as the flagged substitute for Entel's proprietary single-stroke set.
