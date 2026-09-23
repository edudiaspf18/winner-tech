---
status: complete
phase: 01-product-truth-hire-path
source: [01-VERIFICATION.md]
started: 2026-09-23T04:31:09Z
updated: 2026-09-23T05:00:00Z
---

## Current Test

[testing complete]

## Tests

### 1. Brand + title
expected: Open `/`. Header "Winner Tech"; tab title "Winner Tech". No "Winner Tecnologia da Informação" as title.
result: pass

### 2. Hero locked offer
expected: First viewport reads offer "Fazemos o sistema e o site do seu negócio." then "Sistemas para quem opera." then button "Quero contratar".
result: pass

### 3. Four systems, no site card
expected: Section `#sistemas` has exactly four articles in order Zelo → Alfa → Frutmix → Laço. Site offer is not a fifth product card.
result: pass

### 4. WhatsApp hire path
expected: Hero CTA and closing CTA both open WhatsApp to +55 62 99828-6169 with message "Olá, vi os sistemas de vocês e quero conversar."
result: pass

### 5. Portuguese-only skim
expected: All visible UI is Portuguese. No English create-next-app scaffold chrome.
result: pass

## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps
