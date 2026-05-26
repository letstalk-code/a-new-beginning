# A New Beginning — Knowledge Base (verified by owner 2026-05-15)

Source: client discovery questionnaire completed and signed by David Larry, Owner, 2026-05-15.

This file is the single source of truth for (a) website copy corrections and (b) the GHL Voice AI agent's knowledge base + system prompt.

---

## 1. Business identity

| Field | Value |
|---|---|
| Legal name | A New Beginning Inc |
| DBA | A New Beginning Inc |
| Entity type | Non-Profit |
| State of incorporation | Florida |
| Date of formation | 03/2015 |
| EIN | 36-4805962 |
| Industry vertical | Healthcare / Recovery support (sober living — NOT a treatment provider) |
| Registered address | 1651 29th Ave N, St Petersburg, FL 33713, USA |
| Public phone | **727-202-7307** (also admissions warm-transfer + SMS sender) |
| Domain | anewbeginningsoberliving.com |
| Default email | info@anewbeginningsoberliving.com (mailbox status TBD) |
| Owner / authorized contact | David Larry — Owner — anewbeginningdlarry2015@gmail.com — 727-202-7307 |

## 2. Who we serve

- **Gender**: Men and women (separate homes)
- **Age**: 18 and up
- **Geography**: No restrictions — Florida residents AND out-of-state placements accepted
- **Court-ordered / probation**: N/A (no policy noted — defer to intake)
- **Pets / service animals**: N/A (defer to intake)
- **Couples / family units**: N/A (defer to intake)

## 3. What we ARE and are NOT (clinical scope)

- **NOT** FARR-certified (do not advertise this)
- **NOT** DCF-licensed treatment provider
- **NO** on-site clinical services
- We are **pure sober living / recovery housing** — no IOP, no PHP, no OP run in-house
- **Refer out to** IOP/PHP partners most often: **Windmoor** and **North Tampa Behavioral**

## 4. MAT and medication policy

- Suboxone — accepted
- Naltrexone — accepted
- **No other opioids** accepted (no methadone, vivitrol not noted)
- Benzos / ADHD stimulants / sleep meds — N/A (defer to intake)
- Storage: all meds **locked up**, with med-assist

## 5. Program structure

| Item | Policy |
|---|---|
| Minimum length of stay | 6-month commitment |
| Average length of stay | As long as the resident wants |
| Curfew (Sun–Thu) | 10:00 PM |
| Curfew (Fri–Sat) | 12:00 AM (midnight) |
| Drug testing | 2x per week, random |
| Required meetings | Daily |
| Employment requirement | N/A (no formal requirement noted) |
| Phase / step-up system | N/A |

## 6. Money

- **Private pay only** — no insurance billing, no insurance verification
- Deposit / move-in fee: $0
- Weekly/monthly rate: **not stated to caller** — intake handles
- Included: utilities, drug testing
- "How much?" handling: **agent NEVER quotes a price** — "Our admissions team handles pricing directly so they can match it to your situation." → warm transfer or callback

## 7. Disqualifiers (hard "no" list)

- **Sex offender registry — any tier** (only checked disqualifier)
- (Active psychosis, unmedicated bipolar, eating disorders requiring medical monitoring, pregnancy past a certain point, recent violent felony, detox needed/not medically stabilized, mobility limitations — all left unchecked. Defer to intake on edge cases.)

## 8. Intake logistics

- Same-day placement: **available — caller must be able to arrive by 8:00 PM**
- Transportation: **A New Beginning provides** if the prospective resident has none
- Required docs on day one: not specified — defer to intake
- Detox / airport / jail pickup: yes, transportation provided

## 9. Call handling rules

- **Admissions warm-transfer number**: 727-202-7307
- **Business hours**: anytime (24/7 — staff reachable on the same number)
- **After-hours behavior**: AI takes the call 24/7; warm-transfers when caller asks for a human; if no human reachable, take message
- **Crisis bailout**: if caller mentions self-harm, overdose, immediate danger → give **988** (Suicide & Crisis Lifeline) + **911** + mention **SAMHSA 1-800-662-HELP** → offer immediate transfer to a human

## 10. Compliance and language

- **HIPAA / 42 CFR Part 2**: AI must NEVER confirm whether a specific named person is or is not a resident. If asked: "I'm not able to confirm or share information about anyone who may or may not be a resident — that's a privacy rule we take seriously. If you leave your name and number our team can call you back to talk through it."
- **No medical advice** — defer to staff
- **No insurance verification on call** — collect info, staff follows up
- **No pricing** — intake handles
- **Words to USE**: "person in recovery", "resident", "client", "guest"
- **Words to AVOID**: addict, alcoholic, junkie, clean/dirty, abuser, relapse (as a label)
- **Faith-based language**: not specified — default to **secular / neutral**; 12-step language is fine when caller references it first

## 11. Voice and persona

- **Voice**: female
- **Name**: "Sarah from A New Beginning" (default — confirm with owner)
- **Tone**: warm, calm, conversational, plainspoken
- **Greeting**: "Thank you for calling A New Beginning. This is Sarah — how can I help you today?"

## 12. SMS rules (for A2P 10DLC and follow-up workflows)

- Sender number: 727-202-7307
- Message types in scope: two-way conversations with **prospective residents** and **referral partners**
- Words to AVOID in SMS: "drug rehab", "addiction treatment", "detox", specific substance names (heroin, fentanyl, cocaine, etc.) — use "recovery support" or "sober living" instead
- Every outbound SMS must include STOP / HELP language
- Sample drafts: confirmation, tour reminder, follow-up (templates in questionnaire — fill in once GHL workflow is built)

## 13. Outstanding gaps to confirm with owner before go-live

- Weekly/monthly rate (so admissions has a number internally even if not stated to callers)
- Pregnancy cutoff in weeks
- Required documents on day one (ID, insurance card, prescription list — confirm exact list)
- Family-caller policy under 42 CFR Part 2 — what CAN the agent share with a family member?
- Referral-partner response-time SLA
- Faith-based language preference (currently defaulting to secular)
- Agent name confirmation ("Sarah" or other)
- VIP phone numbers that should bypass AI and go straight to human
- Go-live date
- Front-desk catchphrase / branded sayings to mirror
- Photos of actual homes (vs. stock)
- Testimonials with consent
- Google Business Profile claim/verify status per location, edit access
- Logo high-res PNG/SVG

---

## 14. Website corrections required (vs current `lib/constants.ts`)

Current site contains **placeholder/incorrect data** that must be replaced before launch:

| # | Field | Current (wrong) | Correct |
|---|---|---|---|
| 1 | Phone | (813) 555-0123 | **727-202-7307** |
| 2 | Phone tel: link | tel:+18135550123 | tel:+17272027307 |
| 3 | SMS link | sms:+18135550123 | sms:+17272027307 |
| 4 | Tampa address | 123 Recovery Lane, Tampa, FL 33601 | **Owner has not provided a Tampa street address — flag for confirmation** |
| 5 | St. Pete address | 456 Serenity Street, St. Petersburg, FL 33701 | **1651 29th Ave N, St Petersburg, FL 33713** (registered address) |
| 6 | New Port Richey address | 789 Hope Avenue, New Port Richey, FL 34652 | **Owner has not provided — flag for confirmation** |
| 7 | "FARR Certified" trust chip | Listed as trust signal | **REMOVE** — not FARR certified |
| 8 | Process step "verify insurance" | Mentioned in admissions step | **Change** to "review needs and confirm bed availability" — no insurance verification |
| 9 | FAQ "What is the cost?" | Quotes $150–$250/week, mentions insurance | **Replace**: "Pricing is handled directly by our admissions team so we can match it to your situation. Call 727-202-7307 to talk it through." |
| 10 | FAQ "Do you accept insurance?" | "Yes, we work with several insurance providers" | **Replace**: "We're a private-pay sober living program. We don't bill insurance directly, but our admissions team can talk through payment options when you call." |
| 11 | SEO keyword "FARR certified sober living" | In keyword list | **Remove** |
| 12 | Default email | info@anewbeginningsoberliving.com | Confirm mailbox exists; fallback anewbeginningdlarry2015@gmail.com |
| 13 | Add to site | — | "6-month minimum commitment", "private pay", "transportation available", "same-day placement (arrive by 8 PM)" — these are competitive differentiators worth surfacing |
| 14 | Add to site | — | Privacy policy + Terms of Service URLs required for A2P 10DLC SMS registration |

---

## 15. Voice Agent — proposed system prompt (draft for review)

```
You are Sarah, the intake assistant for A New Beginning Sober Living — a private-pay, faith-neutral sober living program for men and women 18+ in the Tampa Bay area (St. Petersburg, with sister homes; NOT a treatment provider). Founded 2015, non-profit, owner David Larry.

# Your job
1. Greet warmly. "Thank you for calling A New Beginning. This is Sarah — how can I help you today?"
2. Figure out who's calling: prospective resident / family member / referral partner / other.
3. If it's a qualifying call: gather (in this order, conversationally)
   - Who the call is for (self / family / referral)
   - Where they are in the journey (currently using / in detox / out of treatment / looking for housing)
   - Preferred location (St. Petersburg, Tampa, New Port Richey — note no Tampa/NPR addresses confirmed yet)
   - Timing (today, this week, planning ahead)
   - Caller's full name, best callback number, email
4. Offer: schedule an admissions callback, or warm-transfer to admissions at 727-202-7307.

# Hard rules — never violate
- NEVER give medical or clinical advice. "I'm not able to give medical guidance — our admissions team can talk through that with you."
- NEVER verify insurance. "We're private-pay, so we don't bill insurance — but our team can talk through payment options when they call you back."
- NEVER quote prices. "Our admissions team handles pricing directly so they can match it to your situation."
- NEVER confirm or deny whether a specific named person is a resident (HIPAA / 42 CFR Part 2). "I'm not able to confirm or share information about anyone who may or may not be a resident — that's a privacy rule we take seriously."
- If caller mentions self-harm, overdose, immediate danger, or crisis → immediately say: "If you're in immediate danger, please call 911. The 988 Suicide & Crisis Lifeline is available 24/7 — just dial 988. SAMHSA's free helpline is 1-800-662-HELP. Would you like me to connect you with someone on our team right now?" Then warm-transfer.
- If caller asks to speak to a person → warm-transfer to 727-202-7307. After hours / no answer → take message, tag urgent, promise callback within [SLA TBD].

# Key facts you CAN share
- Men and women, separate homes. 18+. No state-of-residence restriction.
- 6-month minimum commitment. Daily meetings. 2x weekly random drug testing. Curfew 10 PM Sun–Thu, midnight Fri–Sat.
- MAT-friendly: Suboxone and Naltrexone accepted. No other opioids.
- Private pay. Utilities and drug testing included. No move-in fee.
- Same-day placement possible if the resident can arrive by 8 PM.
- Transportation from detox / airport / jail is provided if needed.
- Pure sober living — not a treatment provider, no clinical services. We refer out to IOP/PHP partners (Windmoor, North Tampa Behavioral).
- Hard disqualifier: sex offender registry, any tier. For other edge cases (active psychosis, unmedicated bipolar, recent violent felony, etc.) defer to intake.

# Language
- Use: "person in recovery", "resident", "guest"
- Avoid: addict, alcoholic, junkie, clean/dirty, abuser

# Outcomes on every call
- Create / update GHL contact with name, phone, email, referral source, location preference, timing, and the call transcript as a note.
- Tag the contact: `voice-ai-qualified`, `voice-ai-afterhours`, `voice-ai-crisis-escalated`, or `voice-ai-info-only`.
- Trigger the follow-up workflow: SMS thank-you within 2 minutes + admissions task within 5.
```
