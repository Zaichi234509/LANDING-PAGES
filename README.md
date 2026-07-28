# 25 Studios — Hu Tao Landing Page Collection

Twenty-five Hu Tao merchandise landing pages, each built as if by a **different design studio**.
No shared stylesheet, no reused hero, no repeated component, no common animation library.

Open `index.html` for the gallery of all twenty-five.

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Status — 7 of 25 pages complete

| # | Page | Style | Brand | Signature interaction |
|---|------|-------|-------|----------------------|
| 01 | [The Funeral Begins](pages/01-the-funeral-begins/) | Cinematic | Wangsheng Pictures | Letterboxed 3-act scroll camera, film grain, cursor-tracking butterfly flock (canvas) |
| 07 | [Limited Collection](pages/07-limited-collection/) | Luxury | Maison 77 | Split-flap edition counter, pointer-following piece swatches, numbered ledger |
| 12 | [Character Selection](pages/12-character-selection/) | Gaming | Select Screen | 3D tilt roster, live SVG stat radar, lock-in timer, arrow-key navigation |
| 13 | [Inventory](pages/13-inventory/) | Gaming | INVENTORY.EXE | Drag-and-drop loadout grid, rarity tiers as literal stock, terminal boot log |
| 16 | [Dear Traveler](pages/16-dear-traveler/) | Emotional | Letters from Liyue | Wax-seal envelope opening, self-drawing handwriting (SVG path animation) |
| 21 | [Too Cute!!](pages/21-too-cute/) | Gen Z | TOO CUTE!! | Squish physics, draggable cuteness meter, canvas confetti, personality quiz |
| 23 | [Touch Everything](pages/23-touch-everything/) | Gen Z | Touch Everything | Custom physics engine — every prop and product card is grabbable and throwable |

Remaining 18 identities are specified in [`PLAN.md`](PLAN.md) and appear as "In progress"
tiles in the gallery index.

## Design constraints held on every page

- **Distinct type system** — validator enforces no two pages share a font pairing
- **Distinct hero headline, section order, navigation pattern, CTA and footer**
- Responsive desktop / tablet / mobile, tested down to 320px
- Bespoke loading screen per page (projector threading, terminal boot, wax seal, envelope, curtain…)
- `prefers-reduced-motion` honoured throughout — every page disables its animation language
- Semantic landmarks, skip links, visible focus states, `alt` on all imagery, ARIA on custom widgets
- SEO: unique title/description, canonical, Open Graph, Twitter card, JSON-LD `ItemList`/`Product`
- Lazy-loaded below-fold imagery, `fetchpriority` on the LCP image, no build step, no framework

## Art direction

Page 01 uses AI-generated cinematic photography (optimized to ≤1600px, progressive JPEG).
Pages 07, 12, 13, 16, 21 and 23 are **deliberately vector-native** — their identities
(terminal UI, character-select HUD, storybook ink, physics toys, luxury typography) are
authentically expressed in hand-authored SVG and CSS rather than raster art, which also keeps
them near-instant to load. Every page ships a bespoke Open Graph card.

## Tooling

```bash
node tools/validate.mjs                    # QA: broken refs, a11y, SEO, identity uniqueness
./tools/optimize.sh pages/*/img/*.jpg      # downscale + recompress generated art
```

`tools/validate.mjs` fails the build on broken image references, missing `alt`, absent
reduced-motion handling, missing landmarks or SEO metadata, and any duplicated typography
or hero headline across pages.

---
Fan project. Not affiliated with HoYoverse.
