# Analytics & Event Tracking — Implementation Guide
**Project:** Excel Landsafe Travels and Tours Ltd — Website
**Goal:** accurately track real conversions (WhatsApp clicks, form submissions, package inquiries) rather than relying on raw pageview/bounce-rate numbers, which undercount a WhatsApp-first lead-gen site.

---

## Why this matters

Vercel Analytics' default bounce-rate metric only counts a session as "not bounced" if a second *pageview* fires. On this site, the best-case outcome is often a visitor clicking straight into WhatsApp and leaving — which currently gets miscounted as a bounce. Both tools below fix this by tracking the actual actions that matter, not just page loads.

---

## Part 1 — Google Analytics 4 (primary tool)

### 1. Create the GA4 property
- Go to [analytics.google.com](https://analytics.google.com) → Admin → Create Property
- Name it "Excel Landsafe Website," set timezone to Nigeria, currency to NGN
- Create a **Web** data stream for the live domain (`https://www.excellandsafe.com.ng`)
- Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Add the GA4 script
Add this to the `<head>` of `index.html` (or via a React helmet/head component if the project uses one):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with the real Measurement ID from step 1.

### 3. A small helper for firing events cleanly

```js
// utils/analytics.js
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}
```

### 4. Custom events to fire, and where

**WhatsApp clicks** — fire on every WhatsApp touchpoint (hero CTA, floating bubble, nav pill, footer, package cards, final CTA band). Include a `location` param so you can see which WhatsApp entry point actually converts:

```jsx
import { trackEvent } from '../utils/analytics'

<a
  href="https://wa.me/2348182681372"
  onClick={() => trackEvent('whatsapp_click', { location: 'hero' })}
>
  Chat on WhatsApp
</a>
```

Repeat with `location: 'nav'`, `location: 'floating_bubble'`, `location: 'footer'`, `location: 'package_card'`, `location: 'final_cta'` at each respective spot.

**Contact form submission** — fire once the Supabase insert succeeds (not on button click — you want to confirm it actually went through):

```jsx
const { error } = await supabase.from('inquiries').insert({ name, email, phone, message })

if (!error) {
  trackEvent('inquiry_submitted')
  // show inline confirmation state
}
```

**Package "Inquire" clicks** — include which package, so you know which offers actually drive interest:

```jsx
<button onClick={() => trackEvent('package_inquire', { package_name: 'Doha & Seychelles Summer' })}>
  Inquire About This Package
</button>
```

**Destination card clicks** (once the card-click modal/detail view from earlier is built):

```jsx
trackEvent('destination_click', { destination: 'North Malé Atoll' })
```

**Phone number taps** (if `tel:` links are in place per the earlier internal-email fix):

```jsx
<a href="tel:+2348182681372" onClick={() => trackEvent('phone_click')}>
  +234 818 268 1372
</a>
```

### 5. Where to see the data
GA4 → Reports → Engagement → Events, shows counts per event name. Build a simple funnel later (Explore → Funnel Exploration) once there's enough volume: e.g. Page View → Scrolled to Services → WhatsApp Click.

---

## Part 2 — Vercel Analytics custom events (secondary, quick-glance dashboard)

Since Vercel Analytics is already installed, add the same instrumentation using its `track()` function alongside the GA4 calls — no need to choose one over the other, they can both fire from the same click handler.

### Setup (if not already done)
```bash
npm install @vercel/analytics
```

```jsx
// In your root App component
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      {/* rest of app */}
      <Analytics />
    </>
  )
}
```

### Firing events alongside GA4
```jsx
import { track } from '@vercel/analytics'
import { trackEvent } from '../utils/analytics'

function handleWhatsAppClick(location) {
  trackEvent('whatsapp_click', { location })   // GA4
  track('whatsapp_click', { location })        // Vercel Analytics
}
```

Vercel's dashboard shows these under a separate "Events" tab — useful for a fast daily glance without opening GA4.

---

## Part 3 — What to actually watch, once data is flowing

- **Conversion counts** (form submits + WhatsApp clicks + phone taps combined) — this is the real north-star number, not raw visitor count
- **Which WhatsApp `location` converts most** — tells you whether the floating bubble, hero button, or package cards are doing the real work, which can inform future layout priority
- **Which packages get the most `package_inquire` events** — direct business intelligence for the client on what to promote
- **Traffic source breakdown** (GA4 → Acquisition) — see whether visitors are coming from Instagram, direct/WhatsApp shares, or search, which matters given their existing social presence

### A note on sample size
With traffic still in the tens/hundreds per week, don't over-read day-to-day swings in any of these numbers — wait for a larger sample (a few hundred visitors minimum) before drawing conclusions about what's working.

---

## Summary checklist

- [ ] Create GA4 property, get Measurement ID
- [ ] Add gtag.js snippet to `index.html`
- [ ] Add `trackEvent()` helper
- [ ] Instrument all WhatsApp touchpoints with `location` param
- [ ] Instrument form submission (on Supabase success, not button click)
- [ ] Instrument package inquire buttons with `package_name` param
- [ ] Instrument phone `tel:` links
- [ ] Confirm `@vercel/analytics` is installed and `<Analytics />` is mounted
- [ ] Add matching `track()` calls alongside each `trackEvent()` call
- [ ] Wait for a meaningful sample size before drawing conclusions from the data
