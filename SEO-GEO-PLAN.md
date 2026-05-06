# SEO & GEO Verbeterplan — Fleya
*Opgesteld: 2026-05-06 — Volledig geïmplementeerd: 2026-05-06*

## Context
Dit plan beschrijft alle SEO (zoekmachine) en GEO (AI-zoekmachine) verbeteringen voor de Fleya website. De site bestaat uit 16 HTML-bestanden, gebouwd met Tailwind CDN + Google Fonts in single-file HTML. Er is nog geen domein live — alles draait lokaal op `http://localhost:3000`.

---

## Huidige situatie (audit)

**Wat volledig ontbreekt:**
- Geen `robots.txt`
- Geen `sitemap.xml`
- Geen favicon
- Geen Open Graph tags (Facebook/WhatsApp previews)
- Geen Twitter/X Card tags
- Geen gestructureerde data (Schema.org / JSON-LD)
- Geen canonical tags
- Geen `hreflang` taalmarkering

**Meta descriptions:** Slechts 3 van 16 pagina's hebben er een:
- `collectie.html` ✓
- `duurzaamheid.html` ✓
- `journal-seizoenstrends-accessoires.html` ✓

**Pagina's zonder meta description (moeten nog worden toegevoegd):**
- `index.html`
- `product.html`
- `product-tote.html`
- `about.html`
- `faq.html`
- `journal.html`
- `journal-bagholder.html`
- `contact.html`
- `voor-bedrijven.html`
- `verlanglijst.html`
- `winkelwagen.html`
- `verzending-retour.html`
- `privacybeleid.html`

---

## Wat is GEO?
GEO = Generative Engine Optimization — content vindbaar maken voor AI-zoekmachines zoals ChatGPT, Perplexity, Google AI Overviews en Claude. Die lezen geen advertenties; ze citeren pagina's die *duidelijk, feitelijk en gezaghebbend* zijn.

---

## Implementatieplan — 4 lagen (hoog → laag prioriteit)

---

### Laag 1 — Technische basis ✅

| # | Wat | Bestand | Status |
|---|-----|---------|--------|
| 1.1 | `robots.txt` aanmaken | `/robots.txt` | ✅ Klaar |
| 1.2 | `sitemap.xml` aanmaken | `/sitemap.xml` | ✅ Klaar (alle 16 pagina's) |
| 1.3 | Favicon toevoegen (SVG) | Alle HTML `<head>` | ✅ Klaar (`brand_assets/fleya-favicon.svg`) |
| 1.4 | `<link rel="canonical">` op elke pagina | Alle 16 HTML bestanden | ✅ Klaar |

**robots.txt inhoud:**
```
User-agent: *
Allow: /
Sitemap: https://fleya.nl/sitemap.xml
```

**sitemap.xml inhoud (template):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://fleya.nl/</loc><priority>1.0</priority></url>
  <url><loc>https://fleya.nl/collectie.html</loc><priority>0.9</priority></url>
  <url><loc>https://fleya.nl/product.html</loc><priority>0.9</priority></url>
  <url><loc>https://fleya.nl/product-tote.html</loc><priority>0.9</priority></url>
  <url><loc>https://fleya.nl/about.html</loc><priority>0.7</priority></url>
  <url><loc>https://fleya.nl/journal.html</loc><priority>0.7</priority></url>
  <url><loc>https://fleya.nl/journal-bagholder.html</loc><priority>0.6</priority></url>
  <url><loc>https://fleya.nl/journal-seizoenstrends-accessoires.html</loc><priority>0.6</priority></url>
  <url><loc>https://fleya.nl/faq.html</loc><priority>0.6</priority></url>
  <url><loc>https://fleya.nl/contact.html</loc><priority>0.5</priority></url>
  <url><loc>https://fleya.nl/voor-bedrijven.html</loc><priority>0.5</priority></url>
  <url><loc>https://fleya.nl/duurzaamheid.html</loc><priority>0.5</priority></url>
  <url><loc>https://fleya.nl/verzending-retour.html</loc><priority>0.4</priority></url>
</urlset>
```

---

### Laag 2 — Meta descriptions per pagina ✅

Toegevoegd aan alle 16 pagina's op 2026-05-06. Voeg toe aan elke `<head>` als: `<meta name="description" content="...">`

| Pagina | Title | Meta description |
|--------|-------|-----------------|
| `index.html` | `Fleya — Bag Holders & Accessoires voor Vrouwen` | `Fleya maakt tijdloze bag holders en accessoires voor de moderne vrouw. Minimalistisch design, duurzaam gemaakt. Ontdek de collectie.` |
| `product.html` | `Fleya Bag Holder — Leren Tashanger` | `De Fleya Bag Holder — elegante leren tashanger om je tas te beschermen en stijlvol neer te zetten. Gratis verzending vanaf €50.` |
| `product-tote.html` | `Fleya Tote Bag — Minimalistische Draagtas` | `De Fleya Tote Bag combineert functionaliteit met tijdloos design. Gemaakt voor de moderne vrouw. Bestel nu bij Fleya.` |
| `about.html` | `Over Fleya — Het Verhaal Achter het Merk` | `Fleya is geboren uit de overtuiging dat kleine details het verschil maken. Lees het verhaal achter ons merk en onze missie.` |
| `collectie.html` | `Collectie — Fleya` | *(al aanwezig — behouden)* |
| `faq.html` | `Veelgestelde Vragen — Fleya` | `Antwoorden op de meest gestelde vragen over Fleya producten, verzending, retourneren en onderhoud.` |
| `journal.html` | `Journal — Stijl & Inspiratie` | `Het Fleya Journal: tips over stijl, accessoires en de moderne vrouw. Artikelen over bag holders, seizoenstrends en meer.` |
| `journal-bagholder.html` | `Waarom een Bag Holder? — Fleya Journal` | `Ontdek waarom een bag holder onmisbaar is voor elke handtasliefhebber. Praktisch én stijlvol.` |
| `contact.html` | `Contact — Fleya` | `Neem contact op met Fleya. Vragen over je bestelling, een samenwerking of gewoon hallo zeggen — we horen graag van je.` |
| `voor-bedrijven.html` | `Voor Bedrijven — Fleya` | `Fleya biedt zakelijke oplossingen voor hotels, kantoren en retailers. Ontdek onze B2B mogelijkheden.` |
| `duurzaamheid.html` | `Duurzaamheid — Fleya` | *(al aanwezig — behouden)* |
| `verzending-retour.html` | `Verzending & Retour — Fleya` | `Alles over verzending, levertijden en ons retourbeleid bij Fleya. Gratis verzending vanaf €50 binnen Nederland.` |

---

### Laag 3 — Open Graph + Twitter Cards ✅

Toegevoegd aan alle 16 pagina's op 2026-05-06. Voeg toe aan **elke pagina** in `<head>` (vervang `[...]` met paginaspecifieke waarden):

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="[pagina title]">
<meta property="og:description" content="[meta description]">
<meta property="og:image" content="https://fleya.nl/brand_assets/og-image.jpg">
<meta property="og:url" content="https://fleya.nl/[pagina.html]">
<meta property="og:site_name" content="Fleya">
<meta property="og:locale" content="nl_NL">

<!-- Twitter/X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[pagina title]">
<meta name="twitter:description" content="[meta description]">
<meta name="twitter:image" content="https://fleya.nl/brand_assets/og-image.jpg">
```

**Aangemaakt:** `brand_assets/og-image.jpg` + `brand_assets/og-image.svg` — 1200×630px branded banner, cream achtergrond, Fleya wordmark in rose + tagline. SVG is de bronversie; JPG wordt gegenereerd via `sips`.

---

### Laag 4 — Gestructureerde data / Schema.org (GEO-kritisch) ✅

Toegevoegd op 2026-05-06. Voeg toe als `<script type="application/ld+json">` in de `<head>`.

**Homepage — Organization schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fleya",
  "url": "https://fleya.nl",
  "logo": "https://fleya.nl/brand_assets/fleya-logo.svg",
  "description": "Fleya maakt tijdloze bag holders en accessoires voor de moderne vrouw. Minimalistisch design, duurzaam gemaakt.",
  "foundingDate": "2024",
  "sameAs": []
}
```

**Productpagina's — Product schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Fleya Bag Holder",
  "description": "Elegante leren tashanger om je tas te beschermen en stijlvol neer te zetten.",
  "brand": { "@type": "Brand", "name": "Fleya" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "49.00",
    "availability": "https://schema.org/InStock",
    "url": "https://fleya.nl/product.html"
  }
}
```

**FAQ-pagina — FAQPage schema (grote GEO-impact):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is een bag holder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een bag holder is een elegant accessoire waarmee je je handtas op tafel of aan de stoel kunt hangen, zodat hij niet op de grond hoeft te staan."
      }
    }
  ]
}
```

**Journal/Blog artikelen — Article schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[artikel titel]",
  "author": { "@type": "Organization", "name": "Fleya" },
  "publisher": { "@type": "Organization", "name": "Fleya", "logo": "https://fleya.nl/brand_assets/fleya-logo.svg" },
  "datePublished": "2025-01-01",
  "description": "[meta description]"
}
```

---

## Prioriteitsvolgorde

| Prioriteit | Taak | Status |
|-----------|------|--------|
| **1** | `robots.txt` + `sitemap.xml` aanmaken | ✅ Klaar (2026-05-06) |
| **2** | Meta descriptions + titles op alle 16 pagina's | ✅ Klaar (2026-05-06) |
| **3** | Canonical tags op alle pagina's | ✅ Klaar (2026-05-06) |
| **4** | Open Graph + Twitter Cards op alle pagina's | ✅ Klaar (2026-05-06) |
| **5** | Organization + Product JSON-LD schema | ✅ Klaar (2026-05-06) |
| **6** | FAQ schema (grote GEO-impact) | ✅ Klaar (2026-05-06) |
| **7** | Journal/Article schema | ✅ Klaar (2026-05-06) |
| **8** | OG-afbeelding maken (1200×630px) | ✅ Klaar — SVG + JPG in `brand_assets/` |
| **9** | Favicon aanmaken + toevoegen | ✅ Klaar — `brand_assets/fleya-favicon.svg` |

**Alle 9 prioriteiten afgerond op 2026-05-06.**

---

## Extra GEO-tips (voor AI-zoekmachines)

- Schrijf in duidelijke, feitelijke zinnen op about- en productpagina's — AI citeert gezaghebbende stellingen
- FAQ-pagina uitbreiden met echte vragen: "Wat is een bag holder?", "Hoe zorg ik voor mijn tas?", "Waar is Fleya gemaakt?"
- Merknaam altijd consistent als "Fleya" schrijven — niet "fleya" of "FLEYA"
- Externe links verdienen: stuur persbericht naar lifestyle blogs, vraag reviews
- Google Search Console koppelen zodra de site live is op een domein

---

## Instructie voor volgende chat

Zeg tegen Claude: *"Ik wil de SEO en GEO van mijn Fleya website verbeteren. Het plan staat in `SEO-GEO-PLAN.md`. Begin met prioriteit 1 en werk de lijst van boven naar beneden af."*
