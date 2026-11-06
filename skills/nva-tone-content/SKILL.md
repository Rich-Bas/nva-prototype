---
name: nva-tone-content
description: Voice, tone and copy rules for NVA prototype screens, messages and agent dialogue across the pet lifecycle. Load before writing any on-screen text, notification, email or chat line.
---

# NVA Tone and Content

## What this is
A short voice guide plus copy rules for the prototype. It tells Claude how NVA sounds at each lifecycle stage and how to handle placeholders for content that needs veterinary approval.

## Why it's useful
Lo-fi screens are judged on their words. The board asks for very different registers — fast and calm in an emergency, warm at adoption, silent and compassionate at end of life ("no offers, no logistics"). Writing to one voice everywhere would undermine the feature stories. Fixed rules also prevent lorem ipsum and off-brand copy from creeping into reviews.

## When to use
Load whenever a screen, chat, email, SMS, push or printed sheet contains text. Pair with `nva-persona-fixtures` for names and values.

## Voice (always)
- Plain language, short sentences, second person. "We've sent Waffles' records to the clinic."
- Say what NVA has done and what Lucy needs to do, in that order. Nothing she doesn't need.
- Use the pet's name, never "your pet", when the fixture provides it.
- No exclamation marks except in the adoption welcome email. No jargon without a one-line plain explanation beside it.
- Prices are shown, not described. Ranges as "low–high", member price next to crossed-out price.

## Tone by stage
- Adoption: warm, encouraging, light. Promotional copy allowed (free first visit, discount codes). One CTA per message.
- First Visit & Ramping Up: reassuring and practical. Countdown cards, one tip each, one vet video each.
- Ongoing Care: friendly and brief. Nudges are helpful, not naggy; rewards copy is playful but not cute.
- Spec/ER: calm, direct, fast. Lead with the next action ("Go to NVA Austin Specialty & ER — arrival held for 8:40pm"). Short lines, quick-reply buttons, a visible human option on every screen.
- At-home recovery: step-by-step, dated, checkable. Each step says what to do, when, and what "better" looks like.
- Aging & End of Life: quiet and compassionate. No promotions, no rewards, no cheer. Name the options (in clinic, at home, sedation, aftercare) with plain prices; never make her ask. After passing: a sympathy line first, logistics only much later and only as a gentle choice.

## AI agent dialogue
- The agent introduces itself once, briefly, and never pretends to be a vet.
- Guided questions, one at a time, with quick-reply pills. Free text always available.
- Escalation is one tap: "Talk to a vet now" / "Call the care team". Keep it on screen throughout.
- Any clinical guidance is marked `[vet-approved content]` as a placeholder — see below.

## Placeholders for approved content
Veterinary advice, triage logic, discharge instructions and medical explanations are not ours to write. In prototypes:
- Write a realistic one-line stand-in, then tag it inline: `[vet-approved content]`.
- Keep stand-ins plausible but generic ("Keep Waffles rested and offer small amounts of water").
- Never state dosages, diagnoses or outcomes as fact.

## Notifications and messages
- Push: title ≤ 30 characters, body ≤ 90. One idea.
- SMS: ≤ 160 characters, includes "NVA" and one link or action.
- Email: subject ≤ 50 characters, body ≤ 120 words, one button.
- Printed sheet: headings, numbered steps, QR to the live version.

## Do not
- Use lorem ipsum, "Lorem", "Text here" or similar.
- Write the "seamless continuum of care" message into copy. Show it through the flows.
- Reuse a Spec/ER line in an end-of-life screen, or vice versa.
