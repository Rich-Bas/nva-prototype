# 24/7 Spec/ER Access with AI Triage — v1

**Stage:** Spec/ER
**Situation:** Something is wrong with Waffles late at night, away from home. Lucy doesn't know whether it's an emergency or where to go, and doesn't want to explain his history several times over while anxious.
**NVA reaction:** Chat-first guided questions, a vet one tap away, a held arrival time at the nearest NVA Spec/ER, and records sent ahead.
**Access points:** App (chat, confirmation), SMS, offline fallback. Back end: handoff to nearest Spec/ER with records.
**1.0 → 2.0:** 1.0 Teletriage, Emergency Queue, Virtual Check-In. 2.0 chat-first questions, arrival held, records sent ahead.
**Priority / size:** Prototype Y · Large
**Open questions:** How much can the agent say before a vet is involved? What does "records sent" mean when the ER's PIMS isn't linked? Lyle (10/27): agent should offer more and route by answers.
**Also appears in:** Spec/ER/Surgery Status Tracking, Financial Concierge, Portable Care Record.

## Screens
00 Cover · 01 Home (entry) · 02 Chat greeting · 03 Guided questions · 04 Recommendation · 05 Confirmation · 06 SMS · 07 Offline fallback · 08 Exit
