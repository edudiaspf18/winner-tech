# API Coverage — Phase 1

**Declaration:** No external API integration: outbound `wa.me` link with a constant message, not an API client.

| Surface | Kind | Notes |
|---------|------|-------|
| WhatsApp Click-to-Chat | Constant HTTPS link | `https://wa.me/5562998286169?text=` + `encodeURIComponent` of locked Portuguese message; no SDK, no HTTP client, no webhook |
| Other APIs | None | No fetch to third parties in Phase 1 |
