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
- Optional small eyebrow pill above headline (e.g. "✦ Seamless Travel")
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

### 4.6 Trust / Testimonials
- Only build this section if real client testimonials exist
- If included: 3-card layout, subtle quote-mark iconography, client name + optional photo
- Do not fabricate placeholder testimonials

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

## 11. Open Items / To Confirm with Client

- Exact service list (visa assistance, tours, flights/hotels — confirm which they actually offer)
- Real copy for all sections (services, about, testimonials)
- Hero image/video — client-provided or curated stock
- Whether real testimonials exist to include
- Years in operation / any credentials or stats worth featuring in About
- Physical office address (for footer/contact, if applicable)
