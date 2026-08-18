# About Page — Design Spec
**Project:** Excel Landsafe Travels and Tours Ltd — Website
**Page:** `/about` (dedicated route, not a homepage section)

---

## Concept: "Editorial Masthead" — not a template split-layout

Most About pages default to the same pattern: photo-left/text-right blocks repeated down the page, icon-grid values, avatar cards for leadership. That pattern is what makes About pages feel interchangeable between companies.

This spec takes an editorial/magazine-feature approach instead — asymmetric layout, typography carrying the storytelling weight, generous whitespace and scale doing the work that icons and card borders usually do. It introduces **zero new colors and zero new icon styles** — every distinctive choice comes from layout and typographic confidence, reusing the palette, fonts, and restraint already established across the rest of the site.

---

## 1. Oversized Founding-Year Opener

Instead of a conventional page hero, open with a large, quiet typographic moment:

- A large **"2011"** set in the site's script/serif accent font (the same one used for the hero's emotional-hook word), in the primary green
- A short supporting line beside or beneath it, e.g. *"The year we started making journeys seamless."*
- Generous whitespace around this — it should feel like a considered opening statement, not a hero banner competing for attention with imagery

This is real, verifiable data (the client's actual founding year), presented distinctively through scale and restraint rather than decoration.

---

## 2. Company Story as an Editorial Pull-Quote

Rather than a standard paragraph block, lead with one strong sentence pulled from the real "About Us" copy, set oversized and centered in the display font — magazine pull-quote style:

> "Every journey is well-planned, hassle-free, and enriching."

The full paragraph runs smaller, positioned alongside or beneath the pull-quote — supporting detail, not the primary visual focus:

> "Excel Landsafe Travel and Tours Ltd. is a dynamic and innovative travel and tourism management company dedicated to providing a comprehensive array of travel services tailored to cater to the diverse needs and preferences of its clients. Our company prioritizes safety and commitment to excellence at every stage of its customers' trips, ensuring peace of mind and value for money. Additionally, it specializes in the packaging of unique and immersive travel experiences that showcase the excellence, culture, and diversity of destinations around the world. With a strong commitment to customer satisfaction and safety, we ensure that every journey is well-planned, hassle-free, and enriching."

---

## 3. Mission & Vision as a Diptych

Two full-width statements stacked with generous whitespace between them — no card borders, no boxes. Separation comes purely from background color and spacing:

- **Mission** — set on the base neutral background (`#FAF7F2`)
- **Vision** — set on the light green tint (`#E4EEDD`, reused from the icon badges)

**Full statements (real, client-confirmed):**

**Mission:** "To provide unparalleled adventures and seamless experiences fuelled by our unwavering commitment to exceed expectations, ensuring your journey is not just a trip but a cherished commitment to your travel dreams."

**Vision:** "To be an epitome of excellence in the travel industry, where every journey we curate not only exceeds expectations but also becomes a testament to our unwavering commitment to delivering unparalleled and seamless experiences."

Run these in full — this page is exactly where the complete statements belong, versus a trimmed version elsewhere on the site.

---

## 4. Core Values as a Numbered List

Not an icon grid (already used elsewhere on the site — repeating it here would feel redundant). Instead:

- Large numerals (01–05) in primary green
- Value name in bold serif beside each numeral
- Simple vertical list, generous line-height between entries

01 — Commitment to Excellence
02 — Customer-Centric Approach
03 — Continuous Learning and Growth
04 — Integrity and Transparency
05 — Team Spirit

A numbered list reads as considered and authored rather than assembled from a component library.

---

## 5. Leadership as a Masthead Credit Line

No photos required for now, no avatar placeholders. Set like a magazine masthead credit — quiet, confident typography, no boxes:

**Oluwayomi Elizabeth Dada** — Managing Director
**Babatunde Leo Dada** — Managing Partner

Design the layout so a headshot could slot in cleanly later if the client provides one, without requiring a rebuild — but don't block on it now.

---

## 6. Facts Strip

A thin, quiet, footer-style bar — not another card. Small text, understated, sitting just before the closing CTA:

- Founded 2011
- 60 Allen Avenue, by Adeboye Sholanke Entrance Gate, Ikeja, Lagos
- CAC Registered · NANTA Member

---

## 7. Closing CTA Band

Same pattern as the homepage's final CTA band, so the page loops back to conversion rather than dead-ending:

- Full-width, contrasting/saturated background (the darkest green in the palette, `#25381C`)
- Centered headline, single large CTA button
- Consistent with the homepage's existing final CTA band styling — no new button style introduced

---

## Why this fits what's already been built

- **No new colors** — uses only the existing palette (`#4A7C3C` primary green, `#1C1C1A` charcoal, `#FAF7F2` base, `#E4EEDD` light tint, `#25381C` deep accent)
- **No new fonts** — reuses the existing display, body, and script-accent fonts already established for the hero
- **No new icon style** — deliberately avoids an icon grid for Core Values since that pattern already exists elsewhere on the site (Services section)
- **Distinctiveness comes from layout and typographic confidence** (scale, whitespace, editorial pacing), not from adding new decorative UI elements — consistent with the discipline held throughout the rest of the build (cutting sparkle pills, colored badges, kicker labels, etc.)
- Reflects current (2026) hospitality/travel web design research: brands that stand out lean into distinctive personality and editorial storytelling pacing rather than generic hospitality warmth or template component grids

---

## Technical note

Requires React Router (`react-router-dom`) if not already in the project — `/about` as a real route, linked from the nav instead of an anchor scroll. Confirm the Vercel rewrite/fallback is configured (see deploy checklist) so direct navigation or a refresh on `/about` doesn't 404.
