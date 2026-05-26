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

## Phase 1 — Wire website forms to GHL

- [ ] Get a GHL inbound webhook URL (created inside the sub-account's Workflow Builder) — captured via Chrome MCP
- [ ] Update `app/api/lead/route.ts` to forward the submission to that webhook (server-side `fetch`, URL from `process.env.GHL_LEAD_WEBHOOK_URL`)
- [ ] Add `GHL_LEAD_WEBHOOK_URL` to `.env.local` (and document for production env)
- [ ] In GHL: build a Workflow that receives the webhook → creates/updates Contact, tags by source (`website-contact` vs `website-referral`), notifies staff
- [ ] Test end-to-end: submit ContactForm and ReferralFastTrackWizard locally → verify contact appears in GHL with correct tags

## Phase 2 — Add GHL site-wide tracking + chat widget

- [ ] Pull the GHL chat widget snippet from the sub-account (Sites → Chat Widget)
- [ ] Add it to `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`
- [ ] Verify widget loads on every page and conversations land in GHL Conversations inbox

## Phase 3 — Calendar embed (admissions tour / call booking)

- [ ] Create a calendar in GHL ("Admissions Call" or "Tour Booking") — duration, availability, notifications
- [ ] Grab the embed code, drop it into `app/contact/page.tsx` (or new section on `/admissions`)
- [ ] Confirm bookings flow into GHL with the right tag

## Phase 4 — AI Voice Agent in GHL

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

## Review
(filled in after execution)
