---
status: testing
phase: 01-product-truth-hire-path
source: [01-VERIFICATION.md]
started: 2026-09-23T04:31:09Z
updated: 2026-09-23T04:31:09Z
---

## Current Test

number: 1
name: Brand + title
expected: |
  Header shows Winner Tech. Browser tab title is Winner Tech. No old legal company name as title.
awaiting: user response

## Tests

### 1. Brand + title
expected: Open `/`. Header "Winner Tech"; tab title "Winner Tech". No "Winner Tecnologia da Informação" as title.
result: [pending]

### 2. Hero locked offer
expected: First viewport reads offer "Fazemos o sistema e o site do seu negócio." then "Sistemas para quem opera." then button "Quero contratar".
result: [pending]

### 3. Four systems, no site card
expected: Section `#sistemas` has exactly four articles in order Zelo → Alfa → Frutmix → Laço. Site offer is not a fifth product card.
result: [pending]

### 4. WhatsApp hire path
expected: Hero CTA and closing CTA both open WhatsApp to +55 62 99828-6169 with message "Olá, vi os sistemas de vocês e quero conversar."
result: [pending]

### 5. Portuguese-only skim
expected: All visible UI is Portuguese. No English create-next-app scaffold chrome.
result: [pending]

## Summary

total: 5
passed: 0
issues: 0
pending: 5
skipped: 0
blocked: 0

## Gaps
