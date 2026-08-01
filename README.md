# Eu Confio Website

Site estático do Eu Confio hospedado em Cloudflare Pages.

## Stack Técnica

- **Hospedagem:** Cloudflare Pages
- **Tipo:** Site estático (HTML + CSS + JS puro)
- **Analytics:** Google Tag Manager (GTM-PGSZ98WB)
- **Domínios:** 
  - Staging: dev.euconfio.com.br
  - Produção: euconfio.com.br

## Estrutura do Projeto

```
euconfio-site/
├── index.html           # Página principal
├── assets/
│   ├── css/
│   │   └── style.css    # Design system
│   ├── js/
│   │   └── analytics-events.js  # Rastreamento GA4
│   └── images/          # Imagens (WebP otimizadas)
├── functions/
│   └── api/             # APIs serverless (se necessário)
├── docs/                # Documentação
├── _headers             # Cache headers do Cloudflare
├── robots.txt           # SEO
├── sitemap.xml          # Sitemap
├── wrangler.toml        # Config Cloudflare Pages
└── README.md
```

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar localmente (com Wrangler)
wrangler pages dev

# Acessar
http://localhost:8788
```

## Deploy

### Staging (dev.euconfio.com.br)

```bash
git push origin main
# Cloudflare Pages detecta push e faz deploy automático
```

### Produção (euconfio.com.br)

Após validação em staging:
1. Fazer merge/push para `main`
2. Cloudflare Pages faz deploy automático
3. Monitorar em euconfio.com.br

## Cache-Buster

**IMPORTANTE:** Sempre que editar `style.css` ou `analytics-events.js`, incrementar o `?v=N` no index.html:

```html
<link rel="stylesheet" href="assets/css/style.css?v=2">
<script src="assets/js/analytics-events.js?v=2" defer></script>
```

## GTM & Analytics

- Container ID: `GTM-PGSZ98WB`
- Eventos rastreados: whatsapp_click, phone_click, email_click, app_download_click
- Ver: `docs/02-gtm-ga4-eventos.md`

## SEO & Validação

- `robots.txt` libera crawling completo
- `sitemap.xml` com URLs principais
- Meta tags em todas as páginas
- Tipografia clara (AA+ WCAG)
- Imagens com alt text

## Documentação

Ver pasta `docs/` para:
- `00-visao-geral-projeto.md` - Overview
- `01-cloudflare-dns-pages.md` - Setup Cloudflare
- `02-gtm-ga4-eventos.md` - Analytics
- `03-seo-aeo.md` - SEO

---

**Data de Criação:** 01/08/2026  
**Última Atualização:** 01/08/2026
