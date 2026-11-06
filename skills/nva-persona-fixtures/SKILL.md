---
name: nva-persona-fixtures
description: The single source of persona and seed data for NVA prototypes — Lucy, Waffles, Mochi, household, membership, care team, timeline. Load whenever a screen shows names, dates, prices, records or history.
---

# NVA Persona Fixtures

## What this is
One fixed dataset that every NVA prototype screen draws from. It is the service-blueprint persona from the board (Lucy and Waffles, later Mochi) written down as fields so screens stay consistent and the no-data states can be produced by switching fields off.

## Why it's useful
Fifteen feature flows built by different people on different days will otherwise show different breeds, ages, clinic names and prices. Shared fixtures make the flows feel like one product, make demos coherent across the full lifecycle, and give a controlled way to answer "what happens when NVA doesn't have this data?".

## When to use
Load alongside `nva-prototype-flow` whenever a screen contains data. Never invent values; if a flow needs a field that isn't here, add it to this file.

## Household
- Account holder: Lucy Bennett, 34, lives in Austin, TX. Email lucy.bennett@example.com, mobile +1 512 555 0142.
- Care Circle: Sam Bennett (partner, can book and receive updates); Dana Ortiz (dog walker, receives schedule only).
- Membership: NVA Care Plan — Plus. Renews 14 March. Benefits: annual exam, core vaccines, 10% off services, end-of-life care covered.
- Insurance: Trupanion, policy on file, 90% reimbursement after $250 deductible.
- Preferences: SMS for reminders, email for records, push for day-of updates. Consent to share records with other NVA clinics: on.

## Pets
### Waffles (primary)
- Golden Retriever, male, neutered. Born 2 May 2024 (adopted 3 July 2024 from Austin Pets Alive!).
- Weight 31.4 kg. Microchip 985112009876543.
- Primary clinic: NVA Barton Springs Animal Hospital. Vet: Dr Priya Nair. Tech: Marcus.
- Timeline (newest first):
  - 18 Oct 2026 — ER visit, NVA Austin Specialty & ER: GI bleed, overnight observation, discharged with 7-day plan.
  - 3 Sep 2026 — Annual exam, vaccines (DHPP, rabies). Weight 31.4 kg. "Bestest boy" report.
  - 12 Feb 2026 — Ear infection, otic drops 10 days.
  - 14 Jul 2024 — First visit, puppy vaccines, deworming.
  - 3 Jul 2024 — Adopted; shelter record uploaded (spay/neuter, first vaccines).
- Next scheduled: recheck 25 Oct 2026 (telehealth); annual exam 3 Sep 2027 (forward-booked).
- Rewards: Level 2 "Good Boy", 340 points.

### Mochi (added in the "new family member" scenario)
- Maine Coon, female, spayed. Born approx. 1 Mar 2026. Adopted 5 Jun 2027 from Austin Humane Society.
- Inherits household preferences, Care Circle and membership. No timeline until first visit.

### Memorial state
In Aging & End of Life flows, Waffles shows as 11 years old (born 2 May 2015 in that scenario), and after the Pet Passing Workflow appears in a softer tone with a small memorial symbol. Reminders, billing and food deliveries show as stopped.

## Clinics
- NVA Barton Springs Animal Hospital — GP. 2.1 mi. Mon–Sat 7am–7pm. Parking on site.
- NVA Austin Specialty & ER — Spec/ER. 4.6 mi. 24/7.
- NVA Mueller Veterinary Clinic — GP. 5.8 mi. Mon–Fri 8am–6pm.
Next available slots (for booking screens): Tue 10:20, Tue 15:40, Thu 09:00.

## Prices (estimates, USD)
- Wellness exam $85 (member: covered). Dental cleaning $450–$900 (member: $405–$810).
- ER triage $175. Overnight observation $600–$1,200.
- Euthanasia in clinic $250 / at home $450. Sedation $90. Private cremation $220. Paw print $35. (Member: covered.)
- Lifetime care estimate, Golden Retriever: $18,000–$30,000. Maine Coon: $12,000–$20,000.
- Financing: Scratch Pay from $52/month over 12 months on a $600 balance.

## Content assets
- Vet videos: "What to bring to the first visit" (1:20), "Giving ear drops" (0:55), "Day 3 recovery check" (1:05).
- Checklist (puppy): crate, bed, food, bowls, collar and tag, leash, chew toys, puppy pads, enzyme cleaner.

## No-data toggles
When a flow needs its fallback state, turn one of these off and show what Lucy sees:
- `shelter_feed` — no partner pet listings (Smart Pet Match, adoption emails).
- `pims_link` — clinic can't sync intake or records (booking, first visit prep, ER handoff).
- `clinic_availability` — no live slots (booking shows "request a time").
- `insurance_on_file` — estimates show cash price only.
- `connectivity` — offline: last-known timeline, cached discharge plan, QR still works.

## Do not
- Change names, breeds or dates per flow. If a scenario needs a variant (e.g. the cat alt path), it is already here.
- Show real clinic, person or policy data. Everything above is fictional.
