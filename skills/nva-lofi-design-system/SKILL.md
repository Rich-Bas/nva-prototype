---
name: nva-lofi-design-system
description: Fixed low-fidelity visual system for all NVA prototype screens. Load before drawing any screen, frame or component. Keeps every flow at the same wireframe fidelity on one phone canvas.
---

# NVA Lo-Fi Design System

## What this is
A deliberately plain set of visual rules for the NVA prototype: one phone canvas, grey boxes, one type scale, no brand colour. Every other NVA skill assumes these rules are in place.

## Why it's useful
NVA has no shared branding yet, so any colour or polish we add now is a guess that will be argued over. A locked lo-fi system keeps reviews focused on flows and content, keeps all feature buckets looking like one product, and avoids the drift where screen three is suddenly high-fidelity.

## When to use
Load it before creating or editing any screen. If a request would break one of the rules below, say so and keep the rule.

## Rules

### Canvas
- Mobile only. One frame size: 390 × 844, portrait. No other breakpoints, no desktop, no "quick responsive check".
- Status bar and home indicator drawn as simple grey bars. No device bezel.
- Safe area: 16px side padding, 24px top under the status bar.

### Colour
- Background `#FFFFFF`. Surfaces `#F3F4F6`. Borders `#D1D5DB`. Text `#111827`. Muted text `#6B7280`.
- One accent only, `#2563EB`, used for the single primary action per screen and for links. Nothing else is coloured.
- Semantic states: success `#16A34A`, warning `#D97706`, error `#DC2626`. Use for status chips and validation only.
- No gradients, shadows, illustrations, photos or icons beyond the set below.

### Type
- One system font (Inter or system sans).
- Scale: 28/34 title, 20/28 heading, 16/24 body, 14/20 secondary, 12/16 caption. Nothing in between.
- Real copy only — no lorem ipsum. Use the content rules in `nva-tone-content`.

### Spacing and shape
- 8px grid. Spacing values: 4, 8, 16, 24, 32.
- Corner radius 8 on everything. Buttons 48px tall, full width unless paired.

### Components (the only ones allowed)
- Top bar: back chevron, title, optional one text action.
- Primary button, secondary (outline) button, text link.
- Card: surface fill, 16px padding, optional title and one-line meta.
- List row: label, value, chevron.
- Input, select, checkbox, radio, toggle.
- Status chip (uses semantic colours).
- Bottom sheet.
- Chat bubble (left = NVA agent, right = pet parent) and quick-reply pills.
- Timeline row: icon circle, date, one-line summary. Icons limited to syringe, stethoscope, ambulance, pill, calendar, dollar, heart.
- Image placeholder: grey rectangle with a diagonal cross and a caption describing the intended image.
- Map placeholder: grey rectangle labelled "Map" with pin markers.

### Non-app channel frames
Used only through `nva-prototype-flow`:
- Email: 600px-wide white panel, subject line at top, plain text body, one button.
- SMS: single grey bubble with sender "NVA" and a timestamp.
- Push notification: lock-screen style card, app name, title, one line.
- Printed sheet: A4-proportioned white panel, grey QR placeholder bottom-right.
- Mailed card: landscape card, handwritten-style text indicated by italics.

## Do not
- Add colour, imagery or motion "to help it read better". Fidelity is a project decision, not a screen decision.
- Invent new components. If a screen needs one, add it here first so every flow can use it.
