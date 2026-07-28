# 25 Landing Pages — Identity Manifest

Each page is a standalone, self-contained `index.html` (inline CSS + JS, zero build step)
inside `pages/NN-slug/`, with its own generated `img/` set. No shared stylesheet, no shared
layout, no shared animation code — every page is engineered as if by a different studio.

| # | Slug | Style | Brand name | Type system | Signature animation |
|---|------|-------|-----------|-------------|---------------------|
| 01 | the-funeral-begins | Cinematic | WANGSHENG PICTURES | Cinzel + Barlow Condensed | Letterboxed 3-act scroll camera, film grain, butterfly cursor swarm |
| 02 | butterflys-call | Cinematic | LEPIDOPTERA | Cormorant Garamond + Jost | Cursor-attracted butterfly flock (boids), bloom trails |
| 03 | one-last-smile | Cinematic | LAST LIGHT STUDIO | Playfair Display + Inter Tight | Horizontal film-strip scroll, portrait cross-dissolve |
| 04 | midnight-lantern | Cinematic | 子夜 MIDNIGHT | Marcellus + Manrope | Draggable lantern light that reveals the dark scene |
| 05 | festival-of-spirits | Cinematic | SPIRIT FESTIVAL CO. | Bebas Neue + Sora | Parade marquee, firework particles, depth parallax rows |
| 06 | crafted-for-collectors | Luxury | ATELIER HU | Bodoni Moda + Karla | Museum plinth, slow zoom reveal, magnetic cursor |
| 07 | limited-collection | Luxury | MAISON 77 | Italiana + Archivo | Numbered edition counter, split-flap reveal |
| 08 | elegance-in-crimson | Luxury | CRIMSON | Tenor Sans + Syne | Silk liquid transitions, colour-swipe wipes |
| 09 | the-art-of-hu-tao | Luxury | THE HU TAO ARCHIVE | Libre Baskerville + Outfit | Gallery rail, frame-by-frame curator zoom |
| 10 | premium-edition | Luxury | ÉDITION PRIME | Gilda Display + Public Sans | Vertical marquee, foil-gradient shimmer |
| 11 | adventure-begins | Gaming | WAYFARER ONLINE | Orbitron + Rajdhani | Boot sequence, HUD compass, quest-marker pings |
| 12 | character-selection | Gaming | SELECT SCREEN | Chakra Petch + Saira | Roster carousel, 3D tilt cards, stat radar |
| 13 | inventory | Gaming | INVENTORY.EXE | Share Tech Mono + Titillium Web | Drag-drop grid, rarity glow, tooltip inspector |
| 14 | quest-rewards | Gaming | QUESTLINE | Cinzel Decorative + Exo 2 | Scroll-unlock nodes, loot burst, XP fill |
| 15 | battle-pass | Gaming | SEASON 07 | Russo One + Barlow | Horizontal tier track, unlock shockwave |
| 16 | dear-traveler | Emotional | LETTERS FROM LIYUE | EB Garamond + Lora | Handwriting draw-on, paper unfold |
| 17 | a-walk-with-hu-tao | Emotional | THE LONG WALK | Newsreader + Nunito Sans | Side-scrolling walk cycle, day-to-dusk sky |
| 18 | the-last-goodbye | Emotional | GOODBYE, GENTLY | Crimson Pro + Figtree | Fading-memory dissolve, candle blowout |
| 19 | our-little-adventure | Emotional | LITTLE ADVENTURE | Fraunces + Quicksand | Storybook page-turn, sticker scrapbook |
| 20 | the-memory-box | Emotional | THE MEMORY BOX | Vollkorn + Rubik | Lid-open reveal, polaroid physics scatter |
| 21 | too-cute | Gen Z | TOO CUTE!! | Baloo 2 + Poppins | Squish physics, confetti burst, jelly hover |
| 22 | pov | Gen Z | POV: | Archivo Black + DM Sans | Vertical swipe feed, caption pop, tap hearts |
| 23 | touch-everything | Gen Z | TOUCH EVERYTHING | Bungee + Space Mono | Every element is draggable / throwable |
| 24 | oops | Gen Z | OOPS. | Anton + IBM Plex Sans | Glitch, chaos mode, things fall apart |
| 25 | main-character-energy | Gen Z | MAIN CHARACTER | Climate Crisis + Sora | Spotlight follow, hype meter, marquee stack |

## Conventions
- Root `index.html` = gallery index of all 25.
- Every page: loading screen, custom cursor treatment, responsive desktop/tablet/mobile,
  reduced-motion support, semantic landmarks, skip link, focus states, OG/Twitter meta,
  JSON-LD product schema, lazy-loaded below-fold imagery.
- Images: generated per page, never shared between pages (except `assets/shared/butterfly.png`,
  an intentional brand motif).
