# Review — spec-er-01-ai-triage v1 (2026-11-06)

| Criterion | Result | Note |
|---|---|---|
| Cover card complete | pass | All fields present |
| Entry trigger drawn | pass | Home with "Get help now" |
| Exit states what changed | pass | Timeline entry, held arrival, records shared |
| Single feature bucket | pass | Links out to Status Tracking, Financial Concierge |
| Lyle's 7 questions | n/a | Not yet supplied |
| Innovative enough vs 1.0 | pass | Held arrival + records ahead are new; agent still says little before escalation (Lyle 10/27) |
| Data traceable to back end | pass | Clinic DB, availability, PIMS handoff; `erAway` clinic added to fixtures |
| T-shirt size consistent | pass | Large: three integrations |
| Human in the loop on agent screens | pass | Sticky "Talk to a vet now" |
| No-data / offline frame | pass | Screen 07 |
| Member vs non-member pricing | pass | Triage fee struck through with member price |
| Channel frames drawn | pass | SMS. Push mentioned, not drawn |
| Design system only | pass | 390×844, tokens, listed components |
| Fixtures match | pass | Scenario date aligned to the 18 Oct ER entry |
| Tone by stage | pass | Spec/ER: calm, direct, next action first |
| Naming | pass | `spec-er-01-ai-triage`, screens numbered |
| No dead taps | pass | Out-of-scope taps show a toast |

## Fixes (next version)
1. Agent should give one line of guidance before recommending the ER (Lyle's comment).
2. Draw the push notification frame alongside the SMS.
3. Decide the `pims_link = off` variant of "records sent" (QR fallback on confirmation).
