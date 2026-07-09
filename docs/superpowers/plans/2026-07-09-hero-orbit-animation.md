# Hero Orbit Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a balanced Mobile App Orbit hero animation (Framer Motion) with phone mockup, floating RN-themed cards, profile intro→float sequence, JSON-driven labels, and reduced-motion support.

**Architecture:** Extract hero into `src/components/HeroSection/` with focused subcomponents. Motion timings live in `heroMotion.ts`; editable labels/icons live in `portfolio-content.json` under `hero.animation`. Orbit renders behind z-10 hero content.

**Tech Stack:** React 19, Vite, Tailwind v4, Framer Motion 12, react-icons, existing `usePortfolioContent` + `iconMap`

**Spec:** `docs/superpowers/specs/2026-07-09-hero-orbit-animation-design.md`

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/components/HeroSection/heroMotion.ts` | Create | Animation variants, orbit configs, reduced-motion helpers |
| `src/components/HeroSection/HeroBackground.jsx` | Create | Pulsing gradient background |
| `src/components/HeroSection/FloatingCard.jsx` | Create | Single orbit card UI |
| `src/components/HeroSection/PhoneMockup.jsx` | Create | Phone frame + Strangerus-style screen |
| `src/components/HeroSection/HeroOrbit.jsx` | Create | Orbit container, responsive card count |
| `src/components/HeroSection/HeroProfile.jsx` | Create | Profile intro morph → float/glow |
| `src/components/HeroSection/index.jsx` | Create | Hero composition |
| `src/content/portfolio-content.json` | Modify | Add `hero.animation` block |
| `src/content/index.ts` | Modify | Expose `heroAnimation` from content hook |
| `src/components/index.js` | Modify | Export `HeroSection` |
| `src/pages/home/index.jsx` | Modify | Replace inline hero with `<HeroSection />` |

---

### Task 1: Motion constants and reduced-motion hook

**Files:**
- Create: `src/components/HeroSection/heroMotion.ts`

- [ ] **Step 1: Create `heroMotion.ts`**

```ts
export const profileIntro = {
  rotate: "1turn",
  scale: [1, 1.5, 1],
  borderRadius: ["6%", "75%", "150%"],
  boxShadow: [
    "0px 0px 10px rgba(255, 255, 255, 0.2)",
    "0px 0px 20px rgba(255, 255, 255, 0.5)",
    "0px 0px 30px rgba(255, 255, 255, 0.8)",
    "0px 0px 40px rgba(255, 255, 255, 1)",
  ],
};

export const profileIntroTransition = { duration: 1.5 };

export const profileFloat = {
  y: [0, -8, 0],
};

export const profileFloatTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

export const glowPulse = {
  opacity: [0.4, 0.8, 0.4],
  scale: [1, 1.05, 1],
};

export const glowPulseTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};

export const orbitDurations = [48, 52, 56, 44, 50, 54];

export const orbitRadius = {
  desktop: 280,
  tablet: 220,
};

export const cardCountByBreakpoint = {
  desktop: 6,
  tablet: 4,
  mobile: 3,
};
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build`  
Expected: PASS (no new errors; file may be unused until Task 6)

---

### Task 2: JSON content for hero animation

**Files:**
- Modify: `src/content/portfolio-content.json`
- Modify: `src/content/index.ts`

- [ ] **Step 1: Add `hero.animation` to JSON**

Inside `"hero"`, after `"links"`:

```json
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
```

- [ ] **Step 2: Expose animation in `usePortfolioContent`**

Add to return object in `src/content/index.ts`:

```ts
heroAnimation: content.hero.animation,
```

- [ ] **Step 3: Build**

Run: `npm run build`  
Expected: PASS

---

### Task 3: HeroBackground component

**Files:**
- Create: `src/components/HeroSection/HeroBackground.jsx`

- [ ] **Step 1: Create pulsing gradient background**

```jsx
import { motion, useReducedMotion } from "framer-motion";

export default function HeroBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"
        animate={reduceMotion ? {} : { opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}
```

---

### Task 4: PhoneMockup component

**Files:**
- Create: `src/components/HeroSection/PhoneMockup.jsx`

- [ ] **Step 1: Create phone frame with Strangerus-style screen**

Build a CSS phone frame (~140×280px desktop) with:
- Rounded outer border (`rounded-[2rem]`), notch, home indicator
- Inner screen showing: app title, location row, event card, check-in row with pulsing green dot, bottom nav placeholders
- Accept `className` prop for positioning
- Use `useReducedMotion` to disable inner dot pulse when reduced

Key structure:

```jsx
export default function PhoneMockup({ className = "" }) {
  return (
    <div className={`w-[140px] h-[280px] rounded-[2rem] border-2 border-gray-600 bg-gray-800 p-2 shadow-xl ${className}`}>
      {/* notch */}
      <div className="mx-auto w-16 h-4 bg-gray-900 rounded-full mb-2" />
      {/* screen */}
      <div className="rounded-2xl bg-gray-900 h-[calc(100%-2rem)] overflow-hidden p-2 text-[10px]">
        <p className="font-bold text-blue-400 mb-2">Strangerus</p>
        {/* location, event, check-in rows */}
      </div>
      {/* home indicator */}
      <div className="mx-auto mt-1 w-10 h-1 bg-gray-600 rounded-full" />
    </div>
  );
}
```

---

### Task 5: FloatingCard component

**Files:**
- Create: `src/components/HeroSection/FloatingCard.jsx`

- [ ] **Step 1: Create reusable orbit card**

```jsx
export default function FloatingCard({ icon, label, className = "" }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800/80 border border-gray-700/50 backdrop-blur-sm text-xs text-gray-200 shadow-lg ${className}`}
    >
      {icon}
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}
```

---

### Task 6: HeroOrbit component

**Files:**
- Create: `src/components/HeroSection/HeroOrbit.jsx`

- [ ] **Step 1: Implement orbit with responsive behavior**

Props: `orbitCards` (from JSON with resolved icons), `enabled`

Logic:
- `useReducedMotion()` → render static positioned cards + static phone (no orbit animation)
- `window.matchMedia` or Tailwind-responsive via CSS + a small `useMediaQuery` hook:
  - `lg+`: 6 cards + phone on elliptical orbit paths using `motion.div` with `animate={{ rotate: 360 }}` on wrapper and counter-rotate on children
  - `md`: 4 cards, smaller radius (`orbitRadius.tablet`)
  - `<md`: 2–3 cards at fixed corners + phone top-right, light `y` float only

Orbit implementation pattern:

```jsx
// Parent rotates slowly
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
  style={{ transformOrigin: "center center" }}
>
  <motion.div style={{ rotate: -360 }}> {/* counter-rotate keeps card upright */}
    <FloatingCard ... />
  </motion.div>
</motion.div>
```

Position each card at `translate(radius, 0)` with different starting angles: `index * (360 / count)`.

- [ ] **Step 2: Place phone mockup on its own orbit (slightly larger radius)**

Phone is the visual anchor — give it ~10% larger scale than cards.

---

### Task 7: HeroProfile component

**Files:**
- Create: `src/components/HeroSection/HeroProfile.jsx`

- [ ] **Step 1: Sequence intro morph then float/glow**

Use `useState` + `onAnimationComplete` on intro, or Framer `animation` array / `variants` with `intro` → `idle` states.

```jsx
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profileIntro, profileIntroTransition, profileFloat, profileFloatTransition, glowPulse, glowPulseTransition } from "./heroMotion";

export default function HeroProfile({ src, alt }) {
  const reduceMotion = useReducedMotion();
  const [introDone, setIntroDone] = useState(reduceMotion);

  return (
    <div className="relative w-60 h-60">
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
        animate={introDone && !reduceMotion ? glowPulse : { opacity: 0 }}
        transition={glowPulseTransition}
      />
      <motion.img
        src={src}
        alt={alt}
        className="w-60 h-60 relative z-10"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={
          reduceMotion
            ? {}
            : introDone
              ? profileFloat
              : profileIntro
        }
        transition={
          introDone ? profileFloatTransition : profileIntroTransition
        }
        onAnimationComplete={() => {
          if (!introDone) setIntroDone(true);
        }}
      />
    </div>
  );
}
```

If `reduceMotion`, skip intro morph — show final rounded image immediately.

---

### Task 8: HeroSection composition

**Files:**
- Create: `src/components/HeroSection/index.jsx`
- Modify: `src/components/index.js`

- [ ] **Step 1: Compose hero section**

```jsx
import { motion } from "framer-motion";
import { usePortfolioContent } from "../../content";
import { getIcon } from "../../content/iconMap";
import HeroBackground from "./HeroBackground";
import HeroOrbit from "./HeroOrbit";
import HeroProfile from "./HeroProfile";

// heroLinkStyles copied from home/index.jsx

export default function HeroSection() {
  const { content, heroLinks, profileImage, heroAnimation } = usePortfolioContent();

  const orbitCards = (heroAnimation?.orbitCards ?? []).map((card) => ({
    ...card,
    icon: getIcon(card.icon),
  }));

  return (
    <section className="h-full min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <HeroBackground />
      {heroAnimation?.enabled !== false && (
        <HeroOrbit orbitCards={orbitCards} />
      )}
      {/* profile wrapper — absolute centered, z-10 */}
      {/* text content — motion.div z-10 with name, title, statusBadge, links */}
    </section>
  );
}
```

- [ ] **Step 2: Export from `src/components/index.js`**

```js
import HeroSection from "./HeroSection";
export { ShowCaseContainer, Spacer, RichText, HeroSection };
```

- [ ] **Step 3: Status badge under title**

If `heroAnimation.statusBadge` exists, render pulsing green dot + text.

---

### Task 9: Wire into home page

**Files:**
- Modify: `src/pages/home/index.jsx`

- [ ] **Step 1: Replace inline hero section**

Remove lines ~35–92 (entire hero `<section>`) and replace with:

```jsx
import { HeroSection } from "../../components";

// in JSX:
<HeroSection />
```

Remove unused hero-specific imports (`heroLinkStyles` moves to HeroSection).

- [ ] **Step 2: Build and lint**

Run: `npm run build && npm run lint`  
Expected: PASS

---

### Task 10: Manual verification

- [ ] **Step 1: Desktop check**

Run: `npm run dev`  
Verify:
- Profile morph plays once, then floats gently
- Orbit cards + phone loop behind content
- Name/title/links readable and dominant
- Status badge pulses

- [ ] **Step 2: Mobile check (resize to <768px)**

Verify:
- 2–3 cards only, no cramped full orbit
- Phone visible but smaller
- Hero content not overlapped

- [ ] **Step 3: Reduced motion check**

In browser DevTools → Rendering → `prefers-reduced-motion: reduce`  
Verify: no orbit rotation, static cards, no float loop

- [ ] **Step 4: JSON edit check**

Change one `orbitCards[].label` in `portfolio-content.json`  
Verify: label updates without code changes

---

## Plan Self-Review vs Spec

| Spec requirement | Task |
|---|---|
| Profile intro morph kept | Task 7 |
| Intro → float/glow transition | Task 7 |
| Orbit behind content (z-index) | Task 8 |
| Desktop 5–6 cards | Task 6 |
| Tablet 4 cards | Task 6 |
| Mobile 2–3 static/light float | Task 6 |
| Phone mockup Strangerus UI | Task 4 |
| prefers-reduced-motion | Tasks 3, 6, 7 |
| JSON-driven labels | Task 2 |
| ≤10 animated DOM nodes | Tasks 6, 7 (by design) |
| No canvas/particles | N/A (not added) |

No placeholder steps. All file paths defined.

---

## Execution Handoff

Plan saved to `docs/superpowers/plans/2026-07-09-hero-orbit-animation.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — fresh subagent per task, review between tasks
2. **Inline Execution** — implement all tasks in this session with checkpoints

Which approach do you want?
