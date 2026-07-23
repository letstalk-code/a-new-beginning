# A New Beginning — GHL Integration + AI Voice Bot

## Context (decided 2026-05-26)

- **GHL sub-account**: New "A New Beginning" sub-account already created. Not yet wired to any MCP. **Approach: drive GHL via Chrome MCP in the browser** (user's preference) instead of adding an MCP server entry.
- **Website**: Next.js 16 app at `/Users/labiffilmhouse/anew-beginning`. Contact form + Referral wizard both POST to `app/api/lead/route.ts`, which currently only `console.log`s. **Needs a real GHL push.**
- **AI Voice Bot platform**: **GHL native Voice AI Agent** (not Vapi).
- **Phone setup**: Client has an existing business number. A GHL number was also purchased. Plan: AI Agent attached to the GHL number; client's existing carrier does an **unconditional forward 24/7** to the GHL number so the AI is the first voice every caller hears. Caller can ask for a human → bot transfers (warm transfer to staff number / takes message after hours).
- **Bot role**: 24/7 qualifier + after-hours + info line (FAQ).
- **Compliance guardrails** (sober-living, HIPAA-adjacent):
  - No medical/clinical advice — defer to staff.
  - No insurance verification on call — collect info only, staff follows up.
  - Crisis/self-harm/overdose → give 988, offer transfer to human or 911.
  - No pricing on call — route pricing questions to admissions.

## Facts received 2026-05-26 (from signed client questionnaire)

Captured in detail in [tasks/knowledge-base.md](knowledge-base.md). Highlights:

- Public phone / admissions warm-transfer: **727-202-7307**
- Business hours: **anytime (24/7)** on the same number
- Registered address: **1651 29th Ave N, St Petersburg, FL 33713**
- Entity: A New Beginning Inc — Florida non-profit, EIN 36-4805962, founded 03/2015
- Owner: David Larry — anewbeginningdlarry2015@gmail.com
- Voice persona: female, warm, conversational; proposed name "Sarah"
- Knowledge base + draft system prompt ready in knowledge-base.md §15

## Inputs still needed from user

- [ ] GHL sub-account login URL / credentials (so I can drive it via Chrome MCP)
- [ ] GHL-purchased phone number (the one the AI agent will be attached to)
- [ ] 727-202-7307's carrier (for the call-forwarding step)
- [ ] Tampa and New Port Richey street addresses (current site shows placeholders)
- [ ] Confirm "Sarah" as agent name (or pick another)
- [ ] Outstanding gaps in knowledge-base.md §13 (rate, pregnancy cutoff, day-one docs, family-caller policy, faith language, VIP list, go-live date, photos, testimonials, GBP status, logo)

---

## Phase 0 — Website data corrections ✅ done 2026-05-26

- [x] Replace `PHONE_NUMBER` / `PHONE_LINK` / `TEXT_LINK` with 727-202-7307 (constants.ts)
- [x] Replace all 9 hardcoded `tel:+18135550123` across pages
- [x] St. Petersburg address → 1651 29th Ave N, St Petersburg, FL 33713
- [x] Tampa + New Port Richey addresses → flagged "call for address" pending owner
- [x] Remove "FARR Certified" trust chip (hero + footer)
- [x] Remove "Insurance Accepted" trust chip
- [x] Remove "FARR certified sober living" SEO keyword (replaced with private-pay / MAT-friendly / same-day variants)
- [x] Rewrite ProcessSteps step 2 — drop "verify insurance"
- [x] Rewrite ProcessSteps step 3 — add "arrive by 8 PM" + transportation
- [x] Rewrite FAQ cost question — no price quoted; route to admissions
- [x] Rewrite FAQ insurance question — private-pay only
- [x] Rewrite FAQ minimum stay — 6 months (was 90 days)
- [x] Add FAQ entries: MAT policy, same-day admissions
- [x] Rewrite HOME_EXPECTATIONS — daily meetings (not weekly), real curfew times, 2x/wk testing
- [x] Rewrite admissions page Financial Responsibility + Payment Options blocks (private-pay, no move-in fee, utilities + drug testing included)
- [x] Rewrite for-referrers "Insurance Coordination" → "Clinical Step-Down" mentioning Windmoor + North Tampa Behavioral
- [x] Rewrite admissions page metadata description
- [x] Typecheck passes

**Still pending (need owner input)**:
- [ ] Tampa street address
- [ ] New Port Richey street address
- [ ] Privacy Policy + Terms of Service pages (required for A2P 10DLC SMS approval)
- [ ] Confirm `info@anewbeginningsoberliving.com` mailbox exists (or fall back to owner email)

## Phase 1 — Wire website forms to GHL ✅ done 2026-05-26

Switched from webhook-trigger pattern to direct Contacts API (cleaner, no iframe clicks, same auth path we'll need for the voice agent).

- [x] Created GHL Private Integration: "Website Lead Intake" with scopes `contacts.readonly` + `contacts.write`
- [x] Stored PIT + Location ID as Vercel env vars (production + preview): `GHL_PIT`, `GHL_LOCATION_ID`
- [x] Rewrote `/api/lead` to call `POST /contacts/upsert` (dedupes on phone/email) + `POST /contacts/{id}/notes` for free-text fields
- [x] Tagging strategy: `website-contact` / `website-referral` + location/timeframe/referrer slug tags so GHL workflows can fan out on tags
- [x] Fails closed with "call (727) 202-7307" message if env vars unset
- [x] Deployed (Vercel `dpl_Aykek2di5974ynLWCnKNCmKsfE9R`)
- [x] End-to-end smoke test: POST to `/api/lead` → contact `LEgqHsX5OBYW7LIbW3cm` appeared in GHL with `website-contact-form` source and `website-contact` tag (phone normalized to E.164)
- [ ] **Owner action**: delete the "Devon Test" contact in GHL (bogus probe data)
- [ ] **Owner-side, when ready**: build the downstream GHL workflows triggered by `website-contact` / `website-referral` tag — SMS thank-you within 2 min, admissions task, internal notification

## Phase 2 — Add GHL site-wide tracking + chat widget

- [ ] Pull the GHL chat widget snippet from the sub-account (Sites → Chat Widget)
- [ ] Add it to `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`
- [ ] Verify widget loads on every page and conversations land in GHL Conversations inbox

## Phase 3 — Calendar embed (admissions tour / call booking)

- [ ] Create a calendar in GHL ("Admissions Call" or "Tour Booking") — duration, availability, notifications
- [ ] Grab the embed code, drop it into `app/contact/page.tsx` (or new section on `/admissions`)
- [ ] Confirm bookings flow into GHL with the right tag

## Phase 4 — AI Voice Agent in GHL ✅ live 2026-05-26

- [x] Created Voice AI agent in GHL: **Sarah** (female voice "Jessica", GPT-4o, advanced/custom mode, ID `6a15d70c456df3c877760f47`)
- [x] Initial greeting: *"Thank you for calling A New Beginning. This is Sarah — how can I help you today?"*
- [x] Pasted full system prompt covering role, qualifying flow, transfer logic, hard rules (no medical advice / no insurance / no pricing / HIPAA-42-CFR-Part-2 / 988-911 crisis), facts to share, and language guardrails
- [x] Action 1: **Transfer to David Larry (Owner)** → +1-727-272-5067, with whisper summary
- [x] Action 2: **Transfer to Ms. Roberson (Assistant Director)** → +1-727-612-6261, with whisper summary
- [x] "Add call summary as a note to the contact" enabled (so every call writes to GHL contact)
- [x] "Receive email notification post call completion" enabled → All Admins
- [x] Disabled "Enable AI Agent as a backup" (AI now answers every call immediately, not as fallback)
- [x] Attached GHL phone number: **(813) 733-6566** — the number callers are forwarded to
- [x] Agent is LIVE — visible in Agent List with channel attached

**Remaining for full go-live**:
- [ ] **Call forwarding**: client's existing carrier needs to unconditionally forward 727-202-7307 → 813-733-6566 (the GHL number). Until that's set up, only people who dial 813-733-6566 directly will hit the AI.
- [ ] Web-call test of Sarah (verify greeting, qualifying flow, both transfer paths, compliance refusals) before exposing to real callers
- [ ] Confirm "Sarah" agent name with David (currently using it by default)
- [ ] Confirm Ms. Roberson's role label ("Assistant Director") with David

- [ ] In GHL sub-account → Voice AI Agent (or Conversation AI → Voice): create new agent
- [ ] Agent persona: warm, calm, plainspoken — "A New Beginning" intake assistant
- [ ] Knowledge base: paste in services, locations (Tampa / St. Pete / New Port Richey), amenities, admissions process, what's covered/not covered conversationally
- [ ] Qualifying flow:
  1. Greet + identify
  2. Who is the call for (self / family member / referrer)?
  3. What stage is the person in (currently using / detoxing / out of treatment / looking for sober living)?
  4. Preferred location
  5. Timing (today / this week / planning ahead)
  6. Capture name + best callback number + email
  7. Offer: schedule a call/tour OR have admissions call back
- [ ] Guardrails (system prompt):
  - No medical advice → "I'm not able to give medical guidance — our admissions team can talk that through with you."
  - No insurance verification → "I can take down your insurance info and our team will verify and call you back."
  - No pricing → "Our admissions team handles pricing directly so they can match it to your situation."
  - Crisis trigger words → 988 + offer transfer / 911
  - "Talk to a person" / "human" → warm transfer to staff number; after hours → take message, tag urgent
- [ ] Attach agent to the GHL-purchased phone number (inbound)
- [ ] Outcomes: every call writes a Contact + Note (transcript) + tag (`voice-ai-qualified`, `voice-ai-afterhours`, `voice-ai-crisis-escalated`) + triggers follow-up workflow (SMS within 2 min thanking caller, task to admissions)

## Phase 5 — Forward existing business number → GHL number

- [ ] Confirm existing number + carrier with user
- [ ] Provide carrier-specific unconditional call-forwarding steps (or do it via Chrome MCP if carrier has a web portal)
- [ ] Test: dial existing business number from a personal phone → should land on the GHL AI agent
- [ ] Document the forwarding setup in a one-pager for the client

## Phase 6 — Smoke test the whole loop

- [ ] Call existing business number → AI answers → run a qualifying script → confirm contact + transcript + tags in GHL
- [ ] Ask AI for a human mid-call → confirm transfer behavior
- [ ] Trigger a crisis phrase → confirm 988 response + escalation tag
- [ ] Submit website contact form → confirm contact in GHL
- [ ] Submit referral wizard → confirm contact + correct tag
- [ ] Book via calendar embed → confirm booking in GHL

---

# Website Design Tightening + SEO / Google Ads Conversion Readiness (planned 2026-07-23)

Full site reviewed in browser (desktop + mobile, all pages) + Lighthouse audit (SEO 91, Accessibility 94, Best Practices 100).

## Findings

**Broken / buggy**
- Fixed header (80–96px tall) overlaps the H1 on every interior page — hero sections have no top offset, so "Start Your Journey Today", "Get in Touch", etc. sit under the nav.
- Contact page renders two near-identical "Get in Touch" sections stacked back-to-back (page hero + ContactPanel).
- Homepage hero has fake, non-functional carousel dots (decorative only) — signals a broken slider.
- `HERO_CONTENT.trustChips` ("Established 2015", "Same-Day Placement", etc.) are defined but never rendered — the strongest trust signals never appear.
- `SEOSection` component is unused keyword-stuffing — delete it.
- Testimonials are fabricated placeholders (e.g. "Sarah K., Case Manager, Tampa General") — a trust risk and a Google Ads policy risk. Need real ones from David or the section comes out.

**SEO gaps (all missing)**
- No `metadataBase`, no canonical URLs, no Open Graph / Twitter tags, no OG image, no favicon.
- No `sitemap.xml`, no `robots.txt`.
- No structured data: no LocalBusiness/Organization schema, no FAQPage schema (the FAQ is a perfect candidate).
- Deprecated `keywords` meta tag in layout (remove).
- Lighthouse flags: color contrast (terra/olive text combos), heading order, non-descriptive "Learn More" links.
- Location pages are thin; Tampa + New Port Richey show "call for address" (NAP inconsistency; blocked on owner).
- hero-bg.png is 1.6MB, logo.png 370KB (Next/Image mitigates, but sources should be compressed).

**Google Ads conversion readiness (all missing)**
- ZERO analytics/tracking: no GA4, no Google Ads tag, no GTM. No conversion events on form submit or phone clicks — ads can't be optimized without this.
- Phone CTA is secondary everywhere; for this audience call-first is likely the primary conversion.
- Above-the-fold content is `opacity: 0` until framer-motion JS runs — hurts perceived speed / LCP on ad clicks.
- ⚠️ **Policy flag for Devon**: Google Ads requires LegitScript certification to run US ads for drug/alcohol addiction services, which typically includes sober living. Verify certification path before spending.

## Todo

### Phase A — Bug fixes (quick) ✅ done 2026-07-23
- [x] Added `.page-hero` utility (globals.css) — clears the fixed header; applied to all 9 interior page heros
- [x] De-duped Contact page (ContactPanel re-titled "Reach Us Directly" instead of a second "Get in Touch")
- [x] Removed fake carousel dots from homepage hero
- [x] Trust chips now render in hero (Established 2015 · Men & Women · Same-Day Placement · 24/7 Support)
- [x] Deleted unused SEOSection component; removed `keywords` meta

### Phase B — SEO foundation ✅ done 2026-07-23
- [x] `metadataBase` (anewbeginningsoberliving.com, overridable via NEXT_PUBLIC_SITE_URL) + canonical on every page + Open Graph/Twitter metadata
- [x] Favicon (`app/icon.png` + `app/apple-icon.png` from logo) + OG image (`app/opengraph-image.jpg`)
- [x] `app/robots.ts` + `app/sitemap.ts` (all 10 pages)
- [x] JSON-LD: Organization (layout) + LocalBusiness (3 location pages via `lib/schema.ts`) + FAQPage (homepage)
- [x] Location page titles → "Sober Living in Tampa, FL" pattern; title template in layout
- [x] hero-bg 1.6MB PNG → 288KB JPEG; logo 370KB → 38KB

### Phase C — Design tightening ✅ done 2026-07-23
- [x] Hero: CSS entrance animation (no JS dependency), visible phone line "answered 24/7", chips row, Call as primary CTA
- [x] Added terra-700 (#8A5F3D, WCAG AA) — all text/button uses of terra-500 on light bg switched; CalloutBanner bg darkened; footer "Est. 2015" → sand-200; footer body text white/70
- [x] Footer h4 → h3 (heading order)
- [x] "Learn More" → "About Tampa / St. Petersburg / New Port Richey"
- [x] Fabricated testimonials removed from homepage → new TrustBand (real facts: est. 2015, 3 locations, 24/7, same-day). TestimonialCarousel component kept for when David supplies real quotes.

### Phase D — Conversion tracking ✅ scaffolded 2026-07-23
- [x] `components/Analytics.tsx` — gtag loads when `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GOOGLE_ADS_ID` env vars are set (no-op until then)
- [x] Global tel:/sms: click listener → `phone_click` / `sms_click` events (covers every phone link site-wide)
- [x] `generate_lead` event on referral wizard + contact form success (`lib/tracking.ts`)
- [x] MobileBottomBar: Call is now the highlighted cell
- [ ] **Needs Devon/David**: GA4 ID + Google Ads ID → set env vars in Vercel, then create the Ads conversion actions from `generate_lead` / `phone_click`

### Blocked on owner (carry-over)
- Tampa + New Port Richey street addresses, real photos, real testimonials, GA4/Google Ads account IDs, LegitScript certification status (required for addiction-services ads)

## Review (2026-07-23)

**Verified**: `tsc --noEmit` clean; `next build` succeeds (18 routes incl. sitemap/robots/icons/OG image); Lighthouse mobile now **100/100/100 (SEO / Accessibility / Best Practices)** on audited pages (was 91/94/100 with 3 failures).

**Files changed**: layout.tsx (metadata + Org schema + Analytics), page.tsx (FAQ schema, TrustBand), all 9 page files (page-hero + canonicals), HeroSection (rewrite), new TrustBand/Analytics/tracking/schema/robots/sitemap, Button/CalloutBanner/Footer/MobileBottomBar/LocationCards/ContactPanel (contrast + CTA), forms (lead events), tailwind (terra-700), globals.css (page-hero, fade-up), images regenerated. Deleted: SEOSection, hero-bg.png.

**Not deployed** — run `vercel --prod` / push when ready. OG image URL resolves via metadataBase in production.
