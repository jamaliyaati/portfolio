# AGENTS.md — Portfolio Architecture

## Project Overview

Static portfolio site. Three-file architecture: no framework, no bundler, no build step.

## Key Files

| File | Purpose |
|---|---|
| `index.html` | All markup. Sections: hero, about, journey, projects, photography, contact, footer. Preloader and mobile menu overlays also here. |
| `styles.css` | All CSS. Organized in labeled blocks matching section order. CSS custom properties at top in `:root`. |
| `script.js` | All JS. Data arrays (TIMELINE, PROJECTS) at top, then UI logic. No external dependencies. |

## Architecture Decisions

- **Single-page scroll** (not JS-routed pages): navigation uses anchor links (`#section-id`). Sections are always in DOM. This was a deliberate change from the original portfolio which used JS page-switching.
- **Data in script.js**: Timeline entries and project cards are plain JS arrays at the top of `script.js`, making content edits easy without touching markup.
- **No frameworks**: keeps the project self-contained and edit-friendly for the user.
- **Custom cursor**: hidden on mobile (`display:none`) via CSS; `cursor: none` on body only applies on desktop.

## CSS Conventions

- CSS variables are in `:root` — edit colors/fonts there first.
- Each section has its own labeled block in `styles.css` (matching `/* ===== SECTION ===== */` comments).
- Responsive breakpoints: 768px (tablet), 480px (small mobile).
- Reveal animations use the `.reveal-up` class + `--delay` CSS variable for staggering.

## Content Editing

- **Timeline entries**: edit the `TIMELINE` array in `script.js`
- **Projects**: edit the `PROJECTS` array in `script.js`
- **Personal info** (name, location, stats, social links): directly in `index.html`
- **Colors/fonts**: CSS variables in `:root` of `styles.css`

## Design System

- `--bg` / `--bg2` / `--bg3` — dark background layers
- `--orange` — primary accent (call-to-action, highlights)
- `--cream` — primary text
- `--muted` — secondary text
- `--mono` — monospace font (DM Mono)
- `--display` — large display font (Bebas Neue)
- `--serif` — editorial body font (Fraunces)
