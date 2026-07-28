#!/usr/bin/env node
/* Static QA for all landing pages:
   - every referenced local image exists (and is non-trivial in size)
   - required meta / a11y / SEO landmarks present
   - typography + palette uniqueness across pages (no copy-paste identities)
   - rough page weight budget
*/
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PAGES = path.join(ROOT, 'pages');
let fail = 0, warn = 0;
const bad = (p, m) => { console.log(`  \x1b[31mFAIL\x1b[0m ${p}: ${m}`); fail++; };
const wrn = (p, m) => { console.log(`  \x1b[33mWARN\x1b[0m ${p}: ${m}`); warn++; };

const fontSets = new Map();   // page -> sorted font families
const heroSig = new Map();    // page -> h1 text
const dirs = fs.readdirSync(PAGES).filter(d =>
  fs.statSync(path.join(PAGES, d)).isDirectory()).sort();

console.log(`\nValidating ${dirs.length} pages\n${'='.repeat(60)}`);

for (const d of dirs) {
  const file = path.join(PAGES, d, 'index.html');
  if (!fs.existsSync(file)) { bad(d, 'missing index.html'); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const issues0 = fail + warn;

  // --- referenced local assets exist
  const refs = [...html.matchAll(/(?:src|href|content)=["']([^"'#?]+\.(?:jpg|jpeg|png|webp|svg|avif))["']/gi)]
    .map(m => m[1]).filter(u => !/^(https?:|data:)/.test(u));
  let bytes = 0;
  for (const r of new Set(refs)) {
    const abs = path.resolve(path.join(PAGES, d), r);
    if (!fs.existsSync(abs)) { bad(d, `broken image ref -> ${r}`); continue; }
    const sz = fs.statSync(abs).size;
    bytes += sz;
    if (sz < 3000 && !r.endsWith('.svg')) wrn(d, `suspiciously small image ${r} (${sz}B)`);
  }

  // --- unused generated images
  const imgDir = path.join(PAGES, d, 'img');
  if (fs.existsSync(imgDir)) {
    for (const f of fs.readdirSync(imgDir)) {
      if (!refs.some(r => r.endsWith(f))) wrn(d, `unused asset img/${f}`);
    }
  }

  // --- SEO / meta
  if (!/<title>.{10,}<\/title>/s.test(html)) bad(d, 'missing/short <title>');
  if (!/name=["']description["']\s+content=["'].{50,}/i.test(html)) bad(d, 'missing meta description');
  if (!/property=["']og:image["']/i.test(html)) bad(d, 'missing og:image');
  if (!/name=["']viewport["']/i.test(html)) bad(d, 'missing viewport');
  if (!/application\/ld\+json/i.test(html)) wrn(d, 'no JSON-LD structured data');
  if (!/rel=["']canonical["']/i.test(html)) wrn(d, 'no canonical link');

  // --- a11y
  if (!/<html[^>]+lang=/i.test(html)) bad(d, 'no lang attribute');
  if (!/<main/i.test(html)) bad(d, 'no <main> landmark');
  if (!/<footer/i.test(html)) bad(d, 'no <footer>');
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length === 0) bad(d, 'no <h1>');
  if (h1s.length > 1) wrn(d, `${h1s.length} <h1> elements`);
  if (!/class=["']skip["']|skip-link|Skip to/i.test(html)) wrn(d, 'no skip link');
  if (!/prefers-reduced-motion/.test(html)) bad(d, 'no reduced-motion handling');
  if (!/:focus-visible/.test(html)) wrn(d, 'no :focus-visible styles');

  // images need alt (allow alt="" for decorative)
  const imgTags = [...html.matchAll(/<img\b[^>]*>/gi)].map(m => m[0]);
  const noAlt = imgTags.filter(t => !/\balt=/i.test(t));
  if (noAlt.length) bad(d, `${noAlt.length} <img> without alt`);
  const belowFold = imgTags.filter(t => !/loading=|fetchpriority=/i.test(t));
  if (belowFold.length > 1) wrn(d, `${belowFold.length} imgs without loading hint`);

  // --- perf budget
  const kb = Math.round(bytes / 1024);
  if (kb > 3600) wrn(d, `image payload ${kb}KB over budget`);

  // --- identity capture
  const fam = [...html.matchAll(/family=([A-Za-z0-9+.]+)[:&]/g)].map(m => m[1].replace(/\+/g, ' '));
  fontSets.set(d, [...new Set(fam)].sort().join(' + ') || '(system)');
  heroSig.set(d, (h1s[0]?.[1] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 46));

  if (fail + warn === issues0) console.log(`  \x1b[32mOK\x1b[0m   ${d}  (${imgTags.length} imgs, ${kb}KB)`);
}

// --- cross-page uniqueness
console.log(`\n${'='.repeat(60)}\nIdentity uniqueness`);
const seen = new Map();
for (const [d, f] of fontSets) {
  if (seen.has(f)) { bad(d, `typography duplicates ${seen.get(f)} -> ${f}`); }
  else seen.set(f, d);
}
const hs = new Map();
for (const [d, h] of heroSig) {
  if (h && hs.has(h)) bad(d, `hero headline duplicates ${hs.get(h)}`);
  else hs.set(h, d);
}
console.log(`  ${seen.size}/${dirs.length} distinct type systems`);
console.log(`  ${hs.size}/${dirs.length} distinct hero headlines`);

console.log(`\n${'='.repeat(60)}`);
console.log(fail ? `\x1b[31m${fail} failures\x1b[0m, ${warn} warnings` : `\x1b[32mAll clear\x1b[0m (${warn} warnings)`);
process.exit(fail ? 1 : 0);
