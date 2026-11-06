---
name: nva-figma-sync
description: Push reviewed NVA prototype screens into the project's Figma file next to the Blueprint board so the team can review in the tool they already use. Load when asked to sync, send or publish a flow to Figma.
---

# NVA Figma Sync

## What this is
A routine for placing a flow's frames into a dedicated page of the NVA Figma file, laid out in flow order with the cover card first, so reviewers can comment in Figma against the board.

## Why it's useful
The team's discussion already lives in Figma (the Feature Blocking board, storyboards, references). Putting prototype screens beside that material means feedback lands in one place, screens can be referenced from board stickies, and the "Go to prototypes" link on the board resolves to something.

## When to use
After `nva-review` passes, usually in the same step as `nva-push-github`. Use the Figma MCP tools and the `figma-generate-design` / `figma-use` skills; this skill only sets the NVA conventions.

## Conventions
- Target: the NVA Figma design file, page `Prototypes / <Stage>`. One section per flow, named after the flow (`spec-er-01-ai-triage`).
- Order inside a section: cover card, then screens left to right in flow order, channel frames in sequence where they occur. 48px gaps.
- Frames stay 390 × 844 and use the design-system values; do not restyle with any library the file may contain.
- Each frame gets a small caption below it: screen name and one line of what it shows.
- Add a sticky at the start of the section with the flow's version, date and a link to the GitHub PR.
- Re-syncing a flow replaces its section; do not stack versions in Figma. Previous versions live in GitHub.

## Back to the board
- On the Feature Blocking board, update the feature's "Prototype Y/N" cell to Y and link the section.
- Do not edit any other board content.

## Do not
- Sync unreviewed or partial flows.
- Convert frames to components or add auto-layout polish beyond what the screens already have.
