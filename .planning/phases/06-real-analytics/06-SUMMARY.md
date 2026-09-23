# Phase 6 Summary — Real analytics

**Status:** complete  
**Requirements:** ANAL-01, ANAL-02

## Delivered
- `Ga4` loads gtag only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` set
- `trackHireClick` pushes dataLayer + gtag event `hire_whatsapp_click`
- `.env.example` documents the var
- HireCta centralizes click tracking

## Notes
- Without ID, site ships with no third-party analytics script
