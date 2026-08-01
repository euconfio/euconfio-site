# euconfio.com.br

Static site hosted on Cloudflare Pages.

## Stack

- **Hosting:** Cloudflare Pages
- **Type:** Pure HTML + CSS + JavaScript
- **Analytics:** Google Tag Manager (GTM-PGSZ98WB)
- **Staging:** dev.euconfio.com.br
- **Production:** euconfio.com.br

## Structure

```
├── index.html              # Landing page
├── assets/
│   ├── css/style.css      # All styling
│   └── js/analytics-events.js  # GA4 events
├── robots.txt             # SEO
├── sitemap.xml            # Sitemap
└── _headers               # Cache configuration
```

## Deployment

Push to `main` → automatic Cloudflare Pages deployment.

## Cache

- Assets: 1 year immutable
- HTML: 1 hour
- Sitemap/robots: 1 day

## Analytics

Google Tag Manager tracks: whatsapp_click, phone_click, email_click, app_download_click, page_view.
