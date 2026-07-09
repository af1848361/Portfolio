# Hero Orbit Animation — Design Spec

**Date:** 2026-07-09  
**Status:** Approved (with refinements)  
**Owner:** Syed Gohar Ali Naqvi Portfolio

## Goal

Enhance the first hero section with a **Mobile App Orbit** animation system that continuously loops in a balanced, professional way — clearly signaling **React Native / mobile developer** identity without overwhelming the main content (photo, name, title, CTAs).

## Approved Direction

- **Approach:** Framer Motion orbit system (Approach A)
- **Intensity:** Balanced
- **Not in scope:** Canvas particles, generic floating particles, scroll-driven hero transitions

## User Refinements (Locked In)

1. **Profile animation:** Keep the existing one-time morph (rotate, scale, border-radius, glow) as the opening moment, then transition into a subtle infinite float + soft glow loop.
2. **Visual hierarchy:** Orbit layer stays **behind** hero content. Name, photo, title, and links remain dominant.
3. **Responsive card counts:**
   - Desktop: 5–6 orbit cards
   - Tablet: 4 cards
   - Mobile: 2–3 static or lightly floating cards (no full orbit — avoids cramped layout)
4. **Phone mockup:** Strong identity anchor with a simple Strangerus-style in-screen UI (check-in, events, location, live status).
5. **Accessibility:** `prefers-reduced-motion` disables orbit loops; cards render static.
6. **Performance:** ~8–10 animated DOM elements max; transform-only animations; decorative layer uses `pointer-events: none`.

## Current State

- Hero lives inline in `src/pages/home/index.jsx`
- Profile uses a one-time Framer Motion animation (no loop after ~1.5s)
- Content is JSON-driven via `src/content/portfolio-content.json`
- Stack: React 19, Vite, Tailwind v4, Framer Motion 12, react-icons

## Visual Layout

```
┌──────────────────────────────────────────────────────────┐
│  [HeroBackground — slow pulsing radial gradient]         │
│                                                          │
│   orbit layer (z-0, aria-hidden, pointer-events-none)    │
│     • Phone mockup (identity anchor)                     │
│     • 5–6 floating UI cards (desktop)                    │
│                                                          │
│   hero content (z-10)                                    │
│     • Profile photo (intro morph → float/glow loop)      │
│     • Name (gradient)                                    │
│     • Title + optional status badge                      │
│     • LinkedIn / Github / Resume links                   │
└──────────────────────────────────────────────────────────┘
```

## Animation Specification

### Profile Photo

| Phase | Behavior | Duration |
|---|---|---|
| Intro | Existing morph: rotate, scale, borderRadius, boxShadow keyframes | ~1.5s, once |
| Settle | Transition into `y: [0, -8, 0]` float loop | 4s, infinite |
| Glow | Soft ring opacity pulse after intro completes | 3s, infinite |

Intro and loop must be sequenced (not simultaneous competing transforms on first paint).

### Orbit Layer (Desktop)

- **Phone mockup:** Elliptical orbit, slow rotation (~40–60s per revolution), slight tilt wobble
- **Floating cards (5–6):** Independent orbit paths with staggered `delay` and `duration`
- **Card themes:** Live Check-in (WebSocket), Firebase Auth, Redux State, Events, Location, Play Store badge
- All orbit elements: `opacity: 0.6–0.85`, blurred slightly optional on far cards

### Phone Mockup Screen (Strangerus-style)

Static simplified UI inside the frame (CSS/Tailwind, no real screenshot required):

- Header: app name “Strangerus”
- Location row with pin icon
- Event card with “Live Event” badge
- Check-in row with green “Connected” dot (pulses)
- Bottom nav hint (3 icon placeholders)

### Status Badge (Optional, under title)

- Text from JSON: e.g. `"Live on Android & iOS"`
- Green dot pulse animation, subtle scale loop

### Title

- Optional soft gradient shimmer on hero title text (low amplitude, 6s loop)
- Must not reduce readability

## Responsive Behavior

| Breakpoint | Orbit | Cards | Phone |
|---|---|---|---|
| `lg+` (desktop) | Full elliptical orbit | 5–6 | Full size, orbiting |
| `md` (tablet) | Reduced radius | 4 | Medium, orbiting |
| `< md` (mobile) | Disabled | 2–3 static corner floats | Smaller, fixed position (top-right or side) |
| `prefers-reduced-motion` | Disabled | Static placement | Static |

## Architecture

```
src/components/HeroSection/
  index.jsx           — composes all hero subcomponents
  HeroBackground.jsx  — ambient gradient pulse
  HeroOrbit.jsx       — orbit container, responsive card count
  PhoneMockup.jsx     — phone frame + Strangerus-style screen
  FloatingCard.jsx    — single orbit card (icon + label)
  HeroProfile.jsx     — profile image: intro → float/glow
  heroMotion.js       — shared animation variants & timings

src/content/portfolio-content.json
  hero.animation       — enable flag, status badge, orbit card labels/icons

src/pages/home/index.jsx
  — replace inline hero <section> with <HeroSection />
```

## Data Flow

```
portfolio-content.json
  → usePortfolioContent() (existing)
  → HeroSection reads content.hero + content.assets.profileImage
  → iconMap resolves card icons
  → heroMotion.ts supplies loop timings (code-owned, not JSON)
```

### JSON Schema Addition

```json
"hero": {
  "animation": {
    "enabled": true,
    "statusBadge": "Live on Android & iOS",
    "orbitCards": [
      { "icon": "websocket", "label": "Live Check-in" },
      { "icon": "firebase", "label": "Firebase Auth" },
      { "icon": "redux", "label": "Redux State" },
      { "icon": "mobile", "label": "Events" },
      { "icon": "link", "label": "Location" },
      { "icon": "googlePlay", "label": "Play Store" }
    ]
  }
}
```

When `enabled: false`, hero renders without orbit (static fallback).

## Accessibility

- Orbit layer: `aria-hidden="true"`
- `useReducedMotion()` from Framer Motion gates all infinite loops
- When reduced motion: static card positions, no float on profile after intro completes (or skip intro morph — show final state immediately)
- Contrast: hero text unchanged; orbit elements stay muted

## Performance

- Target: ≤10 animated DOM nodes in hero
- Use `transform` and `opacity` only (GPU-friendly)
- No `requestAnimationFrame` canvas
- `will-change: transform` only on orbit items if needed
- Verify `npm run build` passes; spot-check mobile Safari

## Out of Scope

- Real Strangerus app screenshots inside phone (can be added later via JSON asset path)
- Scroll-linked hero parallax
- New npm dependencies
- Changes to sections below the hero

## Success Criteria

1. Hero has continuous subtle motion after page load (not static after 2s)
2. Profile keeps opening morph, then settles into float/glow
3. Phone mockup reads as mobile/RN identity anchor
4. Name, photo, title, links remain visually dominant
5. Mobile layout is not cramped (2–3 cards, no full orbit)
6. `prefers-reduced-motion` disables loops
7. Orbit card labels editable from `portfolio-content.json`
8. Build passes with no lint errors

## Spec Self-Review

- [x] No TBD / placeholder requirements
- [x] User refinements explicitly captured
- [x] Responsive + a11y + performance defined
- [x] JSON vs code responsibilities separated
- [x] Scope bounded to hero section only
