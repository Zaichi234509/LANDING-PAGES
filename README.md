# 25 Studios — Hu Tao Landing Page Collection

Twenty-five Hu Tao merchandise landing pages, each built as if by a **different design studio**.
No shared stylesheet, no reused hero, no repeated component, no common animation library, no build step.

Open `index.html` for the gallery of all twenty-five.

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Status — 25 of 25 complete

### Cinematic
| # | Page | Brand | Signature interaction |
|---|------|-------|----------------------|
| 01 | [The Funeral Begins](pages/01-the-funeral-begins/) | Wangsheng Pictures | Letterboxed 3-act scroll camera, film grain, cursor-tracking butterfly flock |
| 02 | [Butterfly's Call](pages/02-butterflys-call/) | Lepidoptera | Boids flock of spirit butterflies that answers the pointer; "call the flock" gathers them |
| 03 | [One Last Smile](pages/03-one-last-smile/) | Last Light Studio | 4-3-2-1 leader countdown, then a scroll-driven horizontal film strip of four frames |
| 04 | [Midnight Lantern](pages/04-midnight-lantern/) | 子夜 Midnight | The street is unlit until you drag the lantern across it (radial mask reveal) |
| 05 | [Festival of Spirits](pages/05-festival-of-spirits/) | Spirit Festival Co. | Parallax lantern rows, ticker marquee, canvas fireworks you can launch early |

### Luxury
| # | Page | Brand | Signature interaction |
|---|------|-------|----------------------|
| 06 | [Crafted for Collectors](pages/06-crafted-for-collectors/) | Atelier Hu | Museum plinths with lit spots, magnetic cursor + label ring, tilt-parallax objects |
| 07 | [Limited Collection](pages/07-limited-collection/) | Maison 77 | Split-flap edition counter, pointer-following piece swatches, numbered ledger |
| 08 | [Elegance in Crimson](pages/08-elegance-in-crimson/) | Crimson | The whole page changes colour per material chapter, over a flowing silk canvas |
| 09 | [The Art of Hu Tao](pages/09-the-art-of-hu-tao/) | The Hu Tao Archive | Horizontal gallery rail, wall labels, click-to-zoom frames, print room |
| 10 | [Premium Edition](pages/10-premium-edition/) | Édition Prime | Vertical foil marquee, box that opens on scroll, grid of 50 claimable numbers |

### Gaming
| # | Page | Brand | Signature interaction |
|---|------|-------|----------------------|
| 11 | [Adventure Begins](pages/11-adventure-begins/) | Wayfarer Online | Client boot log, spinning compass strip, pingable four-region world map |
| 12 | [Character Selection](pages/12-character-selection/) | Select Screen | 3D tilt roster, live SVG stat radar, lock-in timer, arrow-key navigation |
| 13 | [Inventory](pages/13-inventory/) | INVENTORY.EXE | Drag-and-drop loadout grid, rarity tiers as literal stock, terminal boot log |
| 14 | [Quest Rewards](pages/14-quest-rewards/) | Questline | Scroll-unlocked objective nodes, filling XP, four openable reward caskets |
| 15 | [Battle Pass](pages/15-battle-pass/) | Season 07 | Twelve-tier horizontal track, free/premium lanes, unlock shockwaves, live season clock |

### Emotional storytelling
| # | Page | Brand | Signature interaction |
|---|------|-------|----------------------|
| 16 | [Dear Traveler](pages/16-dear-traveler/) | Letters from Liyue | Wax-seal envelope opening, self-drawing handwriting (SVG path animation) |
| 17 | [A Walk with Hu Tao](pages/17-a-walk-with-hu-tao/) | The Long Walk | Sky interpolates afternoon → dusk with scroll; a rail tracks your six kilometres |
| 18 | [The Last Goodbye](pages/18-the-last-goodbye/) | Goodbye, Gently | Memories blur as they leave the viewport; a candle you blow out dims the page |
| 19 | [Our Little Adventure](pages/19-our-little-adventure/) | Little Adventure | Five-page illustrated picture book with arrow-key page turns, then a sticker board |
| 20 | [The Memory Box](pages/20-the-memory-box/) | The Memory Box | Lid lifts, nine draggable photographs scatter; flip each to read the back |

### Gen Z
| # | Page | Brand | Signature interaction |
|---|------|-------|----------------------|
| 21 | [Too Cute!!](pages/21-too-cute/) | TOO CUTE!! | Squish physics, draggable cuteness meter, canvas confetti, personality quiz |
| 22 | [POV](pages/22-pov/) | POV: | Snap-scrolling six-scene phone feed, double-tap hearts, shop-the-scene jumps |
| 23 | [Touch Everything](pages/23-touch-everything/) | Touch Everything | Custom physics engine — every prop and product card is grabbable and throwable |
| 24 | [Oops](pages/24-oops/) | OOPS. | Glitch type, published incident log, chaos mode that tilts the layout apart |
| 25 | [Main Character Energy](pages/25-main-character-energy/) | Main Character | Pointer-following spotlight, four-slot fit builder, live hype meter |

## Design constraints held on every page

- **Distinct type system** — validator enforces no two pages share a font pairing (25/25 unique)
- **Distinct hero headline, section order, navigation pattern, CTA and footer** (25/25 unique)
- Responsive desktop / tablet / mobile, tested down to 320px
- Bespoke loading screen per page — projector leader, match strike, terminal boot, wax seal,
  gallery doors, foil stamp, error dialog, curtain spot, chrysalis, dust beam…
- `prefers-reduced-motion` honoured throughout — every page disables its own animation language
- Semantic landmarks, skip links, visible focus states, `alt` on all imagery, ARIA on custom widgets
- SEO: unique title/description, canonical, Open Graph, Twitter card, JSON-LD `Product`/`ItemList`/`Event`
- Lazy-loaded below-fold imagery, `fetchpriority` on the LCP image, no build step, no framework

## Art direction

Pages 01–04 use AI-generated cinematic photography (optimized to ≤1600px, progressive JPEG).
The remaining pages are **deliberately vector-native** — their identities (terminal UI, HUD,
museum plinths, storybook ink, gallery plates, physics toys, glitch print) are authentically
expressed in hand-authored SVG and CSS rather than raster art, which also keeps them near-instant
to load. Every page ships a bespoke Open Graph card drawn in its own visual language.

## Tooling

```bash
node tools/validate.mjs                    # QA: broken refs, a11y, SEO, identity uniqueness
./tools/optimize.sh pages/*/img/*.jpg      # downscale + recompress generated art
```

`tools/validate.mjs` fails the build on broken image references, missing `alt`, absent
reduced-motion handling, missing landmarks or SEO metadata, and any duplicated typography
or hero headline across pages. Current status: **all clear, 0 warnings**.

---
Fan project. Not affiliated with HoYoverse.
