---
name: nva-review
description: Checklist review of a finished NVA prototype flow against the Blueprint board's own criteria before it is shared or pushed. Load when asked to review, critique, QA or sign off a flow.
---

# NVA Flow Review

## What this is
A fixed review pass that runs over one flow and returns a short pass/fail list. The criteria come from the board: Lyle's questions, innovation, back-end feasibility, T-shirt size, data and connectivity fallbacks, plus consistency with the other NVA skills.

## Why it's useful
The board already says how NVA will judge the work. Running those criteria before each flow leaves the artifact catches the obvious misses early, keeps feedback rounds short, and gives the team a consistent record of what was checked. It also stops a polished-looking flow hiding a gap in the story.

## When to use
Run before any flow is pushed with `nva-push-github`, synced with `nva-figma-sync`, or shown in a walkthrough. Run again after changes.

## Output format
Return a table: criterion · pass / fail / n/a · one-line note. Then at most five fixes, ordered by impact. Nothing else.

## Criteria

### Story
- Cover card present and complete (feature, stage, situation, reaction, access points, 1.0 → 2.0 delta, priority, size, open questions).
- Entry trigger drawn, not assumed.
- Exit frame states what changed for Lucy and in the fixtures.
- Flow stays inside one feature bucket; links to others rather than absorbing them.

### Lyle's questions
`[Add Lyle's 7 questions here — placeholder from the board. Each becomes one criterion.]`
- Will this be innovative enough? Note what is new versus Waffles 1.0 and versus the comparable products on the board (Ada, Zocdoc, Airbnb, Lemonade, FedEx tracker).

### Feasibility
- Each screen's data can be traced to a back-end item on the board (PIMS sync, clinic availability, shelter feed, product catalogue, CMS, messaging sequence) or the fixtures' no-data toggles.
- T-shirt size on the cover card is consistent with the number of integrations the flow relies on.
- Human-in-the-loop action present on every AI agent screen.

### Resilience
- No-data / no-connectivity frame present and plausible.
- Member and non-member pricing shown where cost appears.
- Multi-channel touchpoints from the board (email, SMS, push, print, post) drawn as frames, not just mentioned.

### Consistency
- Only `nva-lofi-design-system` components and the 390 × 844 canvas. No colour beyond the accent and semantic set.
- All names, dates, prices and clinics match `nva-persona-fixtures`.
- Copy follows `nva-tone-content` for the stage; no lorem ipsum; vet content tagged `[vet-approved content]`.
- Naming follows the `nva-prototype-flow` scheme.
- No dead taps.

## Do not
- Rewrite the flow during review. Report, then fix on request.
- Pass a flow with a missing cover card or missing no-data state; those are hard fails.
