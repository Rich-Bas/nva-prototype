---
name: nva-prototype-flow
description: How to build one NVA feature bucket as a clickable low-fidelity flow — structure, naming, channel frames and what every flow must state. Load when creating or extending any prototype flow.
---

# NVA Prototype Flow

## What this is
The standard shape of a prototype flow in the NVA artifact: one feature bucket from the Blueprint Feature Blocking board becomes one flow, built from the components in `nva-lofi-design-system`, populated with data from `nva-persona-fixtures`, written with `nva-tone-content`, and checked with `nva-review`.

## Why it's useful
The board already defines each feature by situation, NVA reaction, access points, back-end needs and the delta from Waffles 1.0. If every flow carries the same header and the same structure, reviewers can read any flow cold, compare flows to each other, and trace a screen back to the board. It also stops the non-app channels (email, SMS, print, post) being forgotten because they are not "screens".

## When to use
Load when asked to prototype, mock up, wireframe or extend any NVA feature. Load `nva-lofi-design-system` and `nva-persona-fixtures` alongside it.

## Feature buckets (one flow each)
Adoption: Pet Fit Quiz · Smart Pet Match · Tailored Supplies List
First Visit & Ramping Up: Care-Led Booking · First Visit Prep & Lifelong Care Guide · Household Profile
Ongoing Care: Portable Care Record · Financial Concierge · Continuum of Care Hub (QOL dashboard, rewards, community)
Spec/ER: 24/7 Spec/ER Access with AI Triage · Spec/ER/Surgery Status Tracking · Ready Set Recover (at-home care)
Aging & End of Life: Compassionate Euthanasia Pricing · Pet Passing Workflow · Grief Support

Cross-lifecycle features (Household Profile, Portable Care Record, Financial Concierge, 24/7 Access) get one flow at their primary moment plus a short "also appears in" note listing the other flows that link to them.

## Every flow starts with a cover card
A single non-interactive frame at the start of the flow stating:
- Feature name and lifecycle stage.
- Pet parent situation (one or two sentences, from the board).
- NVA reaction (what the system does, one or two sentences).
- Access points covered: which of app / email / SMS / push / print / post this flow draws.
- Deepen from Waffles 1.0: what 1.0 had, what 2.0 adds.
- Prototype priority and T-shirt size from the board.
- Open questions carried from the board.

## Structure
1. Entry: how Lucy arrives (notification, email link, home tab, QR scan). Draw the trigger frame, not just the first screen.
2. Happy path: the fewest screens that show the NVA reaction working. Aim for 4–8 phone screens.
3. Branches: at most two — the one that matters most to the feature and the no-data / offline state (required, see below).
4. Exit: where Lucy lands and what has changed in the fixtures (a new timeline entry, a held booking, a stopped reminder). Say it on the final frame.

## Channel frames
Non-app touchpoints are drawn as frames inside the same flow using the channel frames in the design system. They sit in sequence with the phone screens, not in a separate file. Examples from the board: pre-visit email and SMS sequence; "we've sent Waffles' records" confirmation; printed discharge sheet with QR; sympathy card; donate-or-carry-over email.

## Required states
- No-data / no-connectivity: every flow shows at least one frame of what Lucy sees when NVA lacks the data (no shelter feed, no PIMS link, no clinic availability) or the network. This is a standing board question; answer it in the prototype.
- Member vs non-member where cost appears: original price struck through, member price beside it, one line explaining it's part of the plan.
- Human in the loop where an AI agent appears: a visible "Talk to a vet now" / "Call the care team" action on every agent screen.

## Naming
- Flow: `stage-nn-feature` e.g. `specer-01-ai-triage`.
- Screen: `feature/nn-short-name` e.g. `ai-triage/03-nearest-er`.
- Channel frame: prefix with channel e.g. `ai-triage/email-04-records-sent`.

## Interactions
- Lo-fi: tap-to-navigate only. No animated transitions, no micro-interactions.
- Every tappable element goes somewhere or shows a "not in scope" toast. No dead buttons.

## Do not
- Combine two feature buckets in one flow to "show the seamlessness". Link between flows instead; the Continuum of Care Hub flow is where that story is told.
- Draw desktop or tablet. Note "also web" on the cover card if the board says so (e.g. Pet Fit Quiz).
- Add screens the board does not call for without flagging them as a proposal on the cover card.
