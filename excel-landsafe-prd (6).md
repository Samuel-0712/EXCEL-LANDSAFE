# Excel Landsafe Travels and Tours — Website PRD

**Prepared by:** Samuel Leo-Dada Jesudemilade
**Project type:** Freelance/client website build
**Status:** Draft for client approval

---

## 1. Project Overview

Excel Landsafe Travels and Tours Ltd is a Nigerian travel agency offering visa assistance, luxury tours, and global travel services. They currently have no website — only an Instagram presence.

**Client contact:** +234 818 268 1372 · info@excellandsafe.com.ng
**Instagram:** @excellandsafe_travel — "Seamless Travels | Expert Visa Assistance | Luxury Tours"

This document will be used to work with Antigravity to build the site.

### Goal of the site
A premium **showcase + lead generation** site — not a full booking engine for v1. Every page exists to move a visitor toward one action: reaching out via WhatsApp, phone, or an inquiry form.

### Design benchmark
Two existing competitor sites were reviewed as negative references — both feel dated/templated (WordPress/Elementor defaults, quote carousels, tiny cropped images, cluttered nav, generic "Read More" links):
- tourbrokersinternational.com
- bespokeholidaysng.com

The goal is to look **noticeably more premium** than both — closer to boutique travel/hospitality brand sites (Away, Black Tomato, Aman-style restraint) than to a generic Nigerian travel-agency template.

### Uniqueness requirement (important)
Everything in the design that is **not directly provided by the client** (stock imagery, fonts, icons, decorative shapes, patterns) must be as original/unique as possible. This build will be submitted to the client for approval, so nothing should look like a recognizable template or overused stock asset. Once approved, it will be tailored further to their specific needs and real content.

---

## 2. Assets & Content Status

| Asset | Status |
|---|---|
| Logo / brand files | ✅ Available (provided by client) |
| Brand color palette | To be extracted from logo if no formal guide exists |
| Real copy (services, about, testimonials) | To be gathered from client — placeholder-shaped content used in the meantime |
| Hero image/video | Not yet sourced — options: request from client, curated stock (Unsplash/Pexels, avoiding top/overused results), or original SVG/illustrated treatment |
| Testimonials | Only include if real testimonials are available — do not fabricate |

---

## 3. Sitemap / Pages

1. **Home**
2. **Services** (Visa Assistance / Tours / Flights & Hotels — confirm exact service list with client)
3. **Destinations / Gallery**
4. **About**
5. **Contact**

Kept intentionally lean (5 pages max) — both competitor references over-populated their nav with low-value links (blog, multiple language toggles, etc.).

---

## 4. Section-by-Section Specification

### 4.1 Navigation
- Sticky nav; transparent over hero, background fades in on scroll
- Logo left, links center/right
- WhatsApp/phone CTA as a distinct pill button, always visible (not hidden in a hamburger on desktop)
- Max 5 nav links: Home · Services · Destinations · About · Contact
- Mobile: full-screen overlay menu (not a cramped dropdown), large tap targets, CTA repeated at the bottom

### 4.2 Hero
- Full-viewport-height section
- Full-bleed background image or subtle looping video (8–15s, muted, no controls, slow Ken-Burns-style zoom)
- Bottom-heavy gradient overlay for text legibility
- **Headline treatment:** sans-serif → script/serif accent → sans-serif, three-line structure, e.g.:
  - Line 1 (bold sans): "Make Your"
  - Line 2 (script accent, brand color): emotional hook phrase
  - Line 3 (bold sans): closing phrase
  - The script font is used ONLY in this accent role — not as a third site-wide typeface
- No eyebrow pill/badge above the headline — an icon + rounded-pill label was tested and cut; it read as a generic AI-page-builder default and added no value the headline didn't already carry
- **Site-wide rule (updated):** the recurring kicker-pill label pattern (e.g. "CURATED DESTINATIONS," "CLIENT EXPERIENCES," "FULL SCOPE OF OPERATIONS") used above section headlines was tested across multiple sections and ultimately cut — repeating the same pill shape above every section header started to read as a formulaic component rather than a design choice. Section headlines now stand alone without a kicker label, consistent with the hero.
- One short supporting line below headline in body font, muted gray
- One primary CTA button + one secondary/ghost CTA button — no quote carousel, no cycling taglines

### 4.3 Services
- 3–4 cards in a grid (not tiny 150x150 icon-and-label style)
- Each card: photo background or icon on colored panel, service name, one-sentence value line, text-with-arrow "Learn More" link (not a boxed button)
- Hover: card lifts (translateY -4px), shadow deepens; image scales 1.05x within a fixed-overflow container
- Equal-height cards, one consistent border-radius site-wide

### 4.4 Destinations / Gallery
- Highest visual weight section — this sells the aspiration
- Masonry/asymmetric grid or horizontal-scroll destination cards (image, place name, one-line hook, price-from optional)
- Entire card is the clickable CTA (leads to inquiry with destination pre-filled) — avoid a separate visible button per card

### 4.5 About
- Split layout: photo one side, concise trust-building copy the other (who they are, why "seamless," years active if known)
- Optional understated 3-stat row (e.g. "500+ Trips Planned," "10+ Years," "24/7 Support") — no gimmicky animated counters
- Soft secondary CTA or none — About doesn't need aggressive selling
- **Mission & Vision:** a compact two-card row placed directly below the photo/copy split layout — not more stacked paragraphs. Each card: a small letter-spaced label ("Our Mission" / "Our Vision"), 1-2 sentences max underneath. Subtle visual differentiation between the two (e.g. one card on the base neutral background, the other on the light green tint `#E4EEDD` reused from the icon badges) rather than introducing a new color. No icon badges on these cards — kept quiet/text-led. Copy pending real input from the client; use placeholder-shaped copy in the meantime.
- **Accreditation line:** client confirmed they hold CAC registration and NANTA membership (no IATA or other accreditations). Displayed as a single quiet text line — e.g. "CAC Registered · NANTA Member" — not a full trust-bar section, since only two credentials don't warrant heavy visual treatment.
- **Suggested order within About, top to bottom:** photo+copy split → mission/vision two-card row → CAC/NANTA credential line as a closing trust signal

### 4.6 Trust / Testimonials
- Real client testimonials confirmed and sourced from the client's existing social graphics — do not fabricate.
- **Attribution:** none of the source testimonials included a client name or location — each was only captioned with the business's own Instagram handle. Decision: use discreet anonymized attribution (e.g. "Verified Client — Lagos, Nigeria" or similar, varying the city per card) rather than blocking on chasing real names from the client. Revisit with real names later if the client provides them.
- **Copy handling:** two of the six source testimonials read as raw WhatsApp messages rather than testimonial copy (casual openers like "Good evening sis!", "Dear Yomi, we're home now"). Lightly trim these to remove the personal-message framing while preserving the real sentiment and wording as closely as possible — do not rewrite the substance, only the greeting/framing.
- **Section behavior:** auto-scrolling horizontal marquee, not a static 3-card grid or a manual-arrow carousel. Continuous, slow, seamless loop (duplicate the card set and animate `translateX`). Pause on hover so visitors can read at their own pace. Speed should stay slow/readable — avoid a fast ticker-tape feel. Implementation: `react-fast-marquee` or a manual CSS `@keyframes` loop (CSS-only tends to perform more smoothly for this use case).
- Star ratings: vary slightly (not all identical 5-star) once real ratings are available, or keep at 5 if all six are genuinely uniformly positive — avoid three identical scores sitting side by side reading as staged.
- Card structure otherwise unchanged: quote-mark iconography (subtle, muted), stars, quote text, attribution line — no service-type pill (cut earlier in the design pass).

**Extracted testimonial content (6 total, real client feedback):**
1. "I just got back from my trip, and I can't thank you enough. Everything was perfectly arranged, and it was such a smooth and enjoyable experience. I'll gladly recommend your services to anyone who loves traveling."
2. "I really appreciate how seamless everything was from start to finish. Please keep me updated on future promos and offers. I definitely look forward to traveling with you again."
3. "Thank you for all your support — I really appreciate it! You made my travel experience smooth and stress free." *(trimmed from original "Good evening sis! Yes oh, I'm back..." framing)*
4. "Thank you so much! You honestly deserve an award for being the most patient and reliable travel agent. You do such a great job. I'm super impressed."
5. "Thanks for your excellent customer delivery service which you have personally demonstrated to me. May your coast continue to enlarge and your enterprises continue to thrive."
6. "Thank you for everything, we had a wonderful trip. I truly appreciate your consistent follow-up throughout. You're an amazing travel agent, and I pray your business continues to grow. I've already been recommending you to others. Keep up the great work." *(trimmed from original "Dear Yomi, we're home now..." framing)*

### 4.7 Final CTA Band
- Full-width, contrasting/saturated background band right before the footer
- Centered headline (e.g. "Ready to plan your next journey?")
- Single large CTA button — largest on the page, same style family as hero button, sized up

### 4.8 Footer
- Dark, calm, organized in clean columns: logo/tagline, quick links, contact (phone/WhatsApp/email), social icons
- Social icons small, monochrome, brand-color only on hover
- Copyright line
- No forms, no review widgets, no clutter

---

## 5. Button System (site-wide)

| Type | Style | Use case |
|---|---|---|
| Primary | Solid fill, brand accent color, generous padding, hover shadow + arrow nudge | The #1 action per section (hero, final CTA band) |
| Secondary / Ghost | 1–2px border, transparent fill, fills on hover | Lower-priority actions (hero secondary, nav) |
| Text / Tertiary | No border, text + arrow icon, underline animates in on hover | Inside cards (service cards, destination cards) |

**Consistency rules:** one border-radius value, one shadow style, one hover-transition duration (150–200ms) applied across every button on the site.

---

## 6. Visual / Design System

### Color
- Primary: extracted from client logo
- Neutral base: warm off-white or deep charcoal (not pure #FFFFFF / #000000)
- Accent: reserved exclusively for CTAs/links so buttons always stand out

**Working values (approximate, based on a low-res reference photo of the logo — to be refined once the real vector file is available):**
- Primary green (CTAs/accent): `#4A7C3C`
- Near-black (text): `#1C1C1A`
- Base background: `#FAF7F2`
- Secondary neutral (section alternation, cards): `#F0EBE2`
- Deep accent (final CTA band): `#25381C`

### Typography
- Max 2 core font families site-wide (one display/headline sans, one body sans)
- One script/serif accent font used only for the hero emotional-hook word(s) — never for body copy, buttons, or nav
- Avoid overused defaults (Poppins, Montserrat, Inter, Roboto, Great Vibes, Dancing Script); lean toward more distinctive picks (e.g. Sora, General Sans, Manrope, Bricolage Grotesque for sans; Instrument Serif Italic, Bela, or Gambetta for the script accent)

**Working values:**
- Display/headline: Bricolage Grotesque
- Body: General Sans (or Manrope)
- Hero accent (script/serif): Instrument Serif Italic — chosen to echo the logo's serif wordmark

### Spacing
- Generous section padding: 100–140px vertical on desktop, 60–80px on mobile
- This is a major driver of "premium vs. template" perception

### Motion
- Scroll-reveal fade+slide on section entry (Framer Motion)
- Image hover-zoom on cards
- Subtle button hover states
- No gimmicky animated counters or carousels

### Imagery
- No recognizable/overused stock photos — search deeper pages or more specific terms rather than top results
- Consider a consistent subtle color-grade/duotone (~10% brand-color overlay) across all images for a curated, cohesive look
- Prefer client-provided real photos where available over stock

### Shapes, icons, patterns (originality requirement)
- Custom SVG decorative shapes (blob/wave dividers) instead of flat rectangle section breaks
- Subtle custom pattern/texture (dot grid, thin lines) at low opacity behind key sections
- Original/custom-generated gradient meshes for CTA band backgrounds instead of flat color
- Icons paired with custom-shaped colored badges (soft blob/squircle, not plain circles) rather than bare default icon-library icons
- Where feasible, original SVG icon/illustration assets built specifically for this project rather than sourced from common icon libraries

**Assets produced so far** (hand-built, brand-colored, not sourced from icon libraries):
- `service-icon-badges.svg` — passport/stamp (Visa Assistance), compass (Tours), paper-plane (Flights & Hotels), each in a soft squircle badge
- `section-divider.svg` — organic wave shape divider with a brand-green crest line
- `hero-texture-pattern.svg` — tileable dot-grid texture at low opacity for hero/CTA backgrounds

---

## 7. Technical Stack

- **Framework:** Vite + React
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion for scroll-reveal and hover interactions
- **Backend/data:** Supabase — recommended for storing contact/inquiry form submissions (gives the client a queryable record instead of relying solely on email)
- **Routing:** React Router (or anchor-scrolled single page, given the site is small — decide based on final page count)

---

## 8. Contact Form & Submission Flow

**Fields:** Name · Email · Phone · Message (free text for whatever they want to inquire about)

A "Service Requested" dropdown was tested but decided against — an explicit service list risks implying the company only handles what's listed, which undersells the actual breadth of services offered. The open-ended message field lets visitors describe anything without being boxed in.

**On submission:**
- Inline confirmation message on the page (no page reload/redirect) — e.g. a success state that replaces the form or appears above it, something like "Thanks, [Name] — we've received your message and will reach out shortly."
- Auto-email sent to the submitter confirming receipt (simple transactional template, on-brand — logo, brand color accents)
- Submission also stored in Supabase so the client has a running record, and can optionally trigger a notification email to the client's own inbox

## 9. Loading & Feedback States

Loading states are a small detail that either reinforces the premium feel or breaks it instantly if generic — a spinning circle icon feels like a cheap template. Recommended approach:

- **Form submit button:** on click, button label swaps to a subtle inline state (e.g. text changes to "Sending..." with a small animated dot/pulse rather than a spinner icon), button stays the same size/shape so nothing jumps. Disable the button during submission to prevent double-submits.
- **Success state:** smooth fade+slide transition (matching the site's scroll-reveal motion language) from form → confirmation message, rather than an abrupt swap or a jarring browser alert.
- **Error state:** inline, calm messaging near the field or button (e.g. "Something went wrong — please try again or reach us on WhatsApp") — always give a WhatsApp fallback so a failed form never dead-ends the user.
- **Page/section load:** since sections use scroll-reveal (fade+slide via Framer Motion), there's no separate full-page loading state needed for normal navigation — keep the same motion language consistent rather than introducing a spinner or skeleton screen, which would feel like a different design system.
- **Image loading:** use a subtle blur-up or fade-in as images load (especially for the destinations gallery) rather than a blank space or generic placeholder icon — this keeps the premium feel intact even on slower connections.

---

## 10. Deferred Items — Revisit After Core Site Is Built

Flagged during review but intentionally set aside until the majority of the site is built out, so they don't slow down the main build:

**SEO & discoverability**
- Page titles, meta descriptions per page
- Basic schema markup (LocalBusiness/TravelAgency) to help local search visibility
- Favicon and social share preview image (og:image) — important for WhatsApp/Instagram link shares given their existing social presence

**Performance & responsiveness**
- Explicit responsive breakpoint behavior for grid sections (services, destinations) across mobile/tablet/desktop
- Image optimization strategy — lazy-loading, WebP/compressed formats, so large "premium" imagery doesn't slow the site down

**Legal/trust**
- Privacy policy and terms page
- Any accreditation/licensing badges the client wants displayed (e.g. NANTA/IATA-type credentials, if applicable)

**Analytics**
- Whether to wire in Google Analytics and/or Meta Pixel from launch

**Other pages**
- On-brand 404/error page

**Process/logistics**
- Domain registration and hosting decision (Vercel/Netlify recommended given the stack)
- Number of client revision rounds included before final sign-off
- Rough target timeline/launch date

---

---

## 11. Open Items / To Confirm with Client

- Exact service list (visa assistance, tours, flights/hotels — confirm which they actually offer)
- Real copy for all sections (services, about, testimonials)
- Hero image/video — client-provided or curated stock
- Whether real testimonials exist to include
- Years in operation / any credentials or stats worth featuring in About
- Physical office address (for footer/contact, if applicable)

---

## 12. V2 — Deferred Features & Items

Everything below is intentionally out of scope for initial launch, consolidated here so it's not scattered across earlier notes when picked back up.

### New features (not in original scope)
- **Scroll-drawn "Route Line" background element** — full implementation plan below (see "Route Line — Implementation Plan").
- **Packages & Offers section** — full implementation plan below (see "Packages & Offers — Implementation Plan").
- **FAQ section** — 4-6 real Q&As on common visa/travel questions (processing times, document requirements, rejected-case handling, etc.), positioned right before the final CTA band. Needs accurate answers from the client — do not launch with generic/filler content.
- **Swap "VIP Travel Concierge" hero card for "MICE & Corporate Events"** — client confirmed MICE (Meetings, Incentives, Conferencing, Events) is part of their real service scope and should replace Concierge as a flagship service card. Needs: a new custom icon badge (conference/podium or handshake-in-circle style, not the crown planned for Concierge), headline "MICE & Corporate Events" or "Corporate Travel & Events," checklist bullets covering Conference & Meeting Logistics, Group Travel Coordination, Incentive Trip Planning, Event & Delegate Support.
- **Give Cruise Bookings real visibility** — currently at risk of being buried in a lower-tier services list. Preferred approach: add a "Cruise Escapes"-style card to the Destinations/Gallery section (cruise photography fits that section's aspirational visual style), rather than a 5th Services hero card or a plain checklist bullet.
- **Full 9-service scope reconciliation** — client's official scope of services is: Flight Tickets, Hotel Reservations, Tour Packaging, Visa Consultation, Airport Logistics, Travel Health Insurance, Cruise Bookings, MICE Packages, Comprehensive Travel Solutions. The 4 hero cards (Visa, Tours, Flights & Hotel, MICE once swapped) don't cover all 9 on their own. Add a lighter-weight "Complete Range of Services" section directly below the hero cards — no photography, grouped into categories, reusing existing icon/checklist styling:
  - **Travel Essentials** — Flight Tickets · Hotel Reservations · Airport Logistics
  - **Trip Experiences** — Tour Packaging · Cruise Bookings (in addition to its Destinations placement)
  - **Visa & Protection** — Visa Consultation · Travel Health Insurance
  - **Corporate & Group** — MICE Packages · Comprehensive Travel Solutions
- **4th custom icon badge** — a "VIP Travel Concierge" service card surfaced in review without a matching custom badge; now superseded by the MICE swap above — build the MICE icon instead of the previously planned crown/concierge-bell.
- **Filterable packages/destinations** (by country/season) — only worth building once there's enough package content to justify filtering.

### Route Line — Implementation Plan

**Inspiration:** lusion.co uses a thick, saturated, scroll-drawn line as a brand centerpiece. Adapted here as a **subtle, low-opacity background element**, not a foreground graphic — thematically fitting for a travel site since a winding line reads naturally as a flight path / journey route, which ties directly into the brand rather than being decoration for its own sake.

**Design rules (what makes this different from the Lusion reference, so it doesn't disrupt what's already built):**
- Thin stroke (2-3px), low opacity (15-25%), in the site's exact primary green (`#4A7C3C`) — never a new color
- Sits *behind* content as a quiet connective thread — `z-index: 0`, `pointer-events: none`, never blocks clicks or competes with text/cards in front of it
- Gentle S-curve path, not a sharp zigzag — calm, not erratic
- Used selectively — one or two sections that genuinely benefit from a sense of motion/journey (Services, or the transition into Destinations), not stretched across the entire page on a first pass
- No new dependency required — reuses Framer Motion, already planned for the site's scroll-reveal animations (`useScroll` + `useTransform`)

**How it works technically:** an SVG path's `stroke-dasharray`/`pathLength` is animated against scroll position within the wrapping section, so the line appears to "draw itself in" as the visitor scrolls past — not an element that moves on its own, but one that reveals progressively tied to scroll progress.

**Component code (drop-in, already written):**

```jsx
// RouteLine.jsx
// A subtle "journey path" that draws itself in as the user scrolls past
// the wrapped section. Sits behind content — pure atmosphere, not a UI element.

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function RouteLine({ children }) {
  const containerRef = useRef(null)

  // Tracks scroll progress through the wrapping section (0 at top entering
  // the viewport, 1 as it fully exits) — this drives how much of the path
  // has been "drawn" so far.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // pathLength animates from 0 -> 1 across the scroll range.
  // Adjust the input range [0, 1] -> [0.1, 0.9] if you want the line to
  // finish drawing before the section fully scrolls away.
  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1])

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Background route line — sits behind content via z-index/negative offset */}
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <motion.path
          d="M -20,40
             C 180,40 220,160 380,180
             C 540,200 560,340 420,380
             C 300,412 300,300 420,280
             C 620,246 700,360 780,420
             C 860,478 880,520 960,560"
          fill="none"
          stroke="#4A7C3C"
          strokeOpacity="0.22"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>

      {/* Actual section content sits above the line */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
```

**Usage:**

```jsx
<RouteLine>
  <ServicesSection />
</RouteLine>
```

**Tuning notes for whoever builds this:**
- The `viewBox="0 0 1000 600"` and path coordinates are generic placeholders — reshape the curve to actually weave behind the specific section's card positions (e.g. touching near each of the 4 service cards) rather than an arbitrary S-curve
- If 22% opacity feels too visible once live, drop to 12-15%
- The path only fully draws between 5%–85% of the section's scroll range so it doesn't snap instantly or leave a jarring incomplete line at the very edges — adjust the `useTransform` input range if that timing needs changing
- Test on one section first (Services is the suggested starting point), screenshot it, and evaluate before extending to any other section

### Packages & Offers — Implementation Plan

**Data source rule (important):** the client already produces package flyers (graphics design work Samuel also handles for them separately). These flyers are **not** to be embedded directly on the website — text is baked into the image, fonts/colors don't match the site's system, and baked-in text isn't crawlable by search engines. Instead: extract the real content from each flyer (package name, dates, price(s), full inclusions list, any fine-print notes like "Family Package Rate Available Upon Request") and rebuild it as real HTML/CSS inside the site's existing card system. The flyer's photography can be reused directly if quality/composition is good — only the text/graphic layer gets rebuilt, not the images.

**Card structure** (same visual language as Destinations cards — full-bleed image, plain-text labels, no pill badges):
- Background image (reused from the flyer where suitable)
- Small plain-text label at top (e.g. destination/category, styled like the Destinations location labels — "GLOBAL VOYAGES" style, no pill)
- Package name as the card headline (e.g. "Doha & Seychelles Summer")
- Date range (e.g. "9th–16th August 2026")
- Price-from, styled cleanly in-brand (not the oversized boxed price callouts flyers use) — show both sharing/double and single-occupancy rates if the client provides both, similar to the flyer's own dual-pricing format
- Full inclusions shown as a short checklist (reuse the same checklist pattern/icon from the Tier 1 service cards)
- Small fine-print note line if applicable (e.g. "Family package rate available upon request")
- CTA button in the site's standard primary button style — "Inquire About This Package" or "Book Now" — never a flyer-style button baked into an image

**Pricing display — needs a client decision:** the flyers do show explicit Naira pricing, which suggests the client is comfortable with public pricing (unlike the earlier assumption that pricing might need to stay private). Confirm this is the case for the website specifically before publishing — some clients differentiate between flyer pricing (sent directly to warm leads) and public website pricing (visible to anyone, including competitors).

**Placement:** its own section, positioned after the Services section (Tier 1 + Tier 2) — likely before Destinations, since a live/current package offer is a stronger, more time-sensitive conversion driver than general destination inspiration. Final ordering worth a quick sanity check once there's real content in both sections.

**Content lifecycle / update workflow (important — flyers rotate frequently):** since the client produces new package flyers regularly (seasonal offers expire and get replaced), hardcoding packages directly into components risks showing an expired "Easter Package" months later. Recommended: store packages in a Supabase table (`packages` — fields: name, date_range, price_double, price_single, inclusions, fine_print, image_url, active boolean, display_order) rather than hardcoding in JSX. This lets packages be added/retired without a redeploy, and the `active` flag lets expired ones be hidden without deleting the record. A simple authenticated admin view (or direct edits via the Supabase table editor) can manage this — doesn't need a full custom CMS for launch.

**Genuine urgency messaging:** since real packages have real dates and (per the flyer example) explicit limited-time framing, honest urgency language is appropriate here — e.g. surfacing the date range prominently, or a "Limited Slots" tag if the client confirms real capacity limits. This is different from the fake-urgency gimmicks generic templates use, since it's grounded in actual constraints.

**Before building — confirm with client:**
- Whether public pricing is approved for the website (see above)
- Whether they want Samuel to pull current live packages from existing/recent flyers as launch content, or wait for new ones
- Whether they'll want to update packages themselves periodically, which affects whether the admin-editable Supabase approach is worth the extra setup versus a simpler hardcoded version updated by Samuel on request

### Pre-launch essentials (from original Deferred Items list — status noted)
- Favicon + og:image (social share preview) — in progress for this Vercel deploy
- Page title / meta description — in progress for this Vercel deploy
- Full responsive breakpoint pass + image lazy-loading/WebP compression — recommend a real mobile device check before client review, not strictly V2
- On-brand 404 page — quick enough to do pre-launch, recommended before client sees the live link
- Basic schema markup (LocalBusiness/TravelAgency) — lower urgency, can wait
- Privacy policy + terms page — pending client cross-check (tied to the earlier contact-form privacy-line discussion)
- Accreditation badges (NANTA/IATA-type) — pending client input on whether they hold any
- Analytics (Google Analytics / Meta Pixel) — client decision, can wait
- Custom domain — being handled via Vercel once client has one ready
- Revision rounds / launch timeline — process decision with the client, not a build task

### Suggested priority order
1. **Before sending to client:** favicon, og:image, meta title/description, real mobile device check, 404 page
2. **After client approval, before true launch:** privacy policy, custom domain, analytics decision
3. **Genuine V2 (next phase, new scope):** Packages & Offers, FAQ, 4th icon badge, filtering
