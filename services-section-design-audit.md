# Design QA Audit — "Complete Range of Services" Section
**Project:** Excel Landsafe Travels and Tours Ltd — Website
**Section reviewed:** Tier 2 services grid (Travel Essentials / Trip Experiences / Visa & Protection / Corporate & Group)
**Status:** Needs revision before ship

---

## Summary

The layout structure of this section is sound and doesn't need to change. The core issue is a **visual inconsistency with the rest of the site's established design system** — specifically color discipline and icon style — plus two functional bugs (text truncation, inconsistent header wrapping). These need a full pass before this section ships.

---

## 1. Color discipline (critical — highest priority)

The rest of the site commits to a single accent color (`#4A7C3C` green) across hero, service cards, buttons, and dividers, with everything else in neutrals (`#1C1C1A` charcoal, `#FAF7F2` base, `#F0EBE2` secondary neutral). This section breaks that rule in four different ways at once, using a distinct accent color per card:

- "Travel Essentials" → amber
- "Trip Experiences" → green
- "Visa & Protection" → blue
- "Corporate & Group" → purple

**Fix:** every icon container uses the same light tint (`#E4EEDD`); every icon and text accent uses the same primary green (`#4A7C3C`) or charcoal (`#1C1C1A`). No per-category color coding, no exceptions.

---

## 2. Iconography — style mismatch with the rest of the site

The site's hero service cards use hand-built, consistent-weight custom line icons (passport/stamp, compass, paper-plane) inside soft squircle containers (`rx=28`). The 9 icons in this section appear to be pulled from a generic icon library, with:
- A smaller/tighter container radius (~12px) than the established squircle badges
- Inconsistent fill logic — some icons filled solid, others outlined, within the same section

**Fix:** rebuild all 9 icons as a matched set — same stroke weight, same fill/outline logic, same container shape and radius as the existing hero badges, scaled down proportionally.

---

## 3. Colored pill subtitles

Each card header has a colored pill subtitle ("Core Logistics," "Curated Escapes," "Advisory & Safety," "Enterprise Solutions") that is both redundant (the card title already communicates the category) and inconsistent in color per card. This is the same icon+pill decorative pattern already identified and removed elsewhere on the site (hero eyebrow badge, "Featured" destination badge, "Visa & Bespoke Package" badge).

**Fix:** remove entirely. If a supporting line is wanted, use plain muted-gray text with no background or border — consistent with the site's existing kicker-label pattern (e.g. "CURATED DESTINATIONS," "CLIENT EXPERIENCES").

---

## 4. Typography hierarchy / header wrapping

Card titles wrap inconsistently at the current card width — three of the four titles ("Trip Experiences," "Visa & Protection," "Corporate & Group") wrap to two lines while "Travel Essentials" stays on one, creating uneven card-top alignment across the row.

**Fix:** adjust card width/font-size so two-word titles reliably fit on one line, or reserve equal vertical space for the header block across all four cards so alignment stays consistent regardless of wrapping.

---

## 5. Copy truncation (functional bug)

Multiple item descriptions are cut off mid-word with an ellipsis (e.g. "Meetings, Incentives,…", "Comprehensive worldwide…"). This reads as an unfinished/broken layout rather than a style choice.

**Fix:** increase container height, reduce font size slightly, or shorten the copy so it reliably fits within two lines at the current card width.

---

## 6. What's already working — no change needed

- **"Inquire About X" links** — text + arrow, no button box, consistent with the tertiary link style used elsewhere on the site (service cards, hero secondary CTA)
- **Overall card structure** — white card, light-gray internal item rows, footer link, bottom divider — structurally sound and doesn't need to change; the issues are entirely in color and iconography, not layout

---

## Recommendation

This section needs a full visual pass, not a spot-fix. Structure stays as-is; color and iconography need to be rebuilt from scratch to match the site's established system before this ships.
