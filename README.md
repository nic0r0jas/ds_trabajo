# Mi Entel — mobile app UI kit

High-fidelity, interactive reconstruction of the **Mi Entel** self-service mobile app, in an iOS device frame. Built from the brand manual (color roles, type, parenthesis, UI icon rules) — no production code was provided.

## Run
Open `index.html`. React + Babel (inline JSX) + Lucide + the `ios-frame.jsx` starter, all from CDN / local. Uses `../../colors_and_type.css` and `../../assets/`.

## Flow (click-through)
1. **Login** — Azul Entel screen with the white parenthesis device; RUT + clave pre-filled → "Ingresar".
2. **Home** — greeting, **consumo card** (GB gauge in Verde Eco over Azul Entel), quick actions, "Mis productos" list. Tap **Recargar** (quick action) or the **Recarga** tab.
3. **Recarga** — amount chips, payment-method radios → "Recargar $X".
4. **Success** — confirmation → back to Inicio.
- **Bottom tab bar**: Inicio · Recarga · Beneficios · Ayuda.

## Files
- `app-styles.css` — screen styles (imports tokens).
- `screens.jsx` — `MIcon, Login, Home, Recarga, Success, TabBar` (exported to `window`).
- `app.jsx` — `App` state machine (auth → tabs → success).
- `ios-frame.jsx` — device-bezel starter (`IOSDevice`).

## Notes
- Status-bar clearance handled with top padding on each screen.
- Icons are **Lucide** (flagged substitute for Entel's proprietary single-stroke UI set).
