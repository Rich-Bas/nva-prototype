# NVA Prototype

Low-fidelity, clickable prototypes for the NVA pet-lifecycle features, one flow per feature bucket from the Blueprint Feature Blocking board. Plain HTML, CSS and JS — no build step. Open any `index.html` in a browser.

**Live:** once GitHub Pages is on, every flow has a URL at `https://<org>.github.io/nva-prototype/flows/<stage>/<nn-feature>/`. The root URL lists all flows.

## How a design becomes a viewable prototype

1. **Design in Claude Design.** Designers build the flow there using the NVA skills (`skills/`). Claude Design produces real HTML/CSS/JS, so the design is already a working prototype.
2. **Export.** Download the flow as standalone HTML from Claude Design (or hand the bundle to Claude Code and ask it to fit this repo's structure).
3. **Fit the repo.** Put it at `flows/<stage>/<nn-feature>/index.html`. Link `shared/tokens.css`, `shared/components.css` and `shared/fixtures.js` instead of inlined copies, so every flow shares one look and one dataset. Add `cover.md` and run the review skill to produce `review.md`.
4. **Branch and PR.** Branch `flow/<stage>-<nn>-<feature>`, commit, open a pull request using the template. Reviewers comment on the PR; the Pages preview of the branch (or the file opened locally) is what they look at.
5. **Merge.** On merge to `main`, GitHub Pages republishes. The flow's URL is what Lyle shares with the client audience.
6. **Tag before a walkthrough.** `git tag walkthrough-YYYY-MM-DD` so the state shown can always be recovered.

Start-to-finish for a reviewed flow: about ten minutes of repo work.

## Structure
```
index.html                     # flow index (the Pages landing page)
shared/
  tokens.css                   # design-system tokens
  components.css               # the only components allowed on screens
  fixtures.js                  # Lucy / Waffles / clinics / prices (fictional)
flows/
  spec-er/01-ai-triage/
    index.html                 # the clickable flow
    cover.md                   # cover card as text
    review.md                  # latest review output
    screens/                   # one PNG per screen, 2x
skills/                        # the NVA skills, for reference and for Claude Code
.github/pull_request_template.md
```

## Enable GitHub Pages (once)
Repo → Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save. The site is live a minute later. `.nojekyll` is already in the root so folders are served as-is.

## Conventions
- Mobile only, 390 × 844. Lo-fi: grey boxes, one accent. No branding yet.
- Data comes from `shared/fixtures.js`. Change it once, every flow updates.
- Clinical copy is a stand-in tagged `[vet-approved content]`.
- Every tappable element goes somewhere or shows a "not in scope" toast.
- One PR per flow. Nothing is pushed to `main` directly.

## Flows
| Stage | Flow | Status |
|---|---|---|
| Spec/ER | [24/7 Spec/ER Access with AI Triage](flows/spec-er/01-ai-triage/) | v1 · reviewed 2026-11-06 |
