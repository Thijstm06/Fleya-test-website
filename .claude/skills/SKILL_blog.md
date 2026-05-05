---
name: blog-write
description: >
  Schrijft complete blogartikel in HTML voor Fleya — vrouwelijke accessoires merk.
  Genereert SEO meta tags, gestructureerde content met Fleya brand styling (Cormorant Garamond
  headings, Jost body, Rose #E0828F accenten), cover + inline Unsplash foto's, FAQ sectie,
  en merkspecifieke CTAs. Voegt artikel automatisch toe aan journal.html als featured card.
  Gebruik wanneer: "schrijf blog", "nieuw blogartikel", "maak artikel over", "schrijf over".
user-invokable: true
argument-hint: "<onderwerp>"
---

# Blog Writer — Fleya HTML Artikel

Schrijft een volledig blogartikel in HTML, geoptimaliseerd voor SEO én afgestemd op Fleya's merkidentiteit: luxe, minimalistisch, tijdloos. Altijd inclusief Unsplash foto's, date/auteur/leestijd, en automatische update van `journal.html`.

---

## Fase 1: Onderwerp begrijpen

Vraag de gebruiker indien niet opgegeven:
- Onderwerp / primair zoekwoord
- Doelgroep-angle (cadeautip, styling inspiratie, interieur, behind the brand, etc.)
- Auteursnaam (standaard: Thijs)
- Gewenste lengte (standaard: 800–1200 woorden)

Stel voor als het ontbreekt — kies uit deze on-brand onderwerpen als er geen input is:
- Bag holder styling: hoe combineer je een tas holder in je entree?
- Cadeau gids: het perfecte cadeau voor haar
- Hallway styling tips: maak je entree luxueus en functioneel
- Seizoenstrends in accessoires
- Het verhaal achter Fleya: waarom elk detail telt
- Hoe kies je de juiste bag holder voor jouw interieur?

---

## Fase 2: Outline opstellen

Maak een outline en presenteer die ter goedkeuring:

```
Titel (H1) — bevat primair zoekwoord, aspirationele toon
Introductie (100–150 woorden) — sfeer-opening, geen droge opsomming
H2: [Sectie 1]
H2: [Sectie 2]
H2: [Sectie 3]
H2: [Sectie 4 — optioneel]
FAQ (3–5 vragen)
Conclusie + Fleya CTA
```

---

## Fase 3: Foto's zoeken (ALTIJD doen vóór schrijven)

### 3a. Cover/hero afbeelding (1 stuks)

Gebruik WebFetch om Unsplash-zoekpagina's te scrapen. Zoek naar brede, landscape-afbeeldingen.

**Aanpak:**
```
WebFetch: https://unsplash.com/s/photos/[topic-keywords]
Prompt: "Extract the direct image URLs for the first 4 photos. Give full image URL, photo ID, description, photographer. Prefer landscape/wide images."
```

**Regels voor Unsplash URLs:**
- ALLEEN `https://images.unsplash.com/photo-[ID]` gebruiken — dit zijn gratis afbeeldingen
- NOOIT `https://plus.unsplash.com/premium_photo-` gebruiken — die zijn premium en laden niet
- URL-parameters toevoegen: `?w=1400&h=700&q=85&fit=crop&auto=format` voor hero
- `?w=900&h=480&q=80&fit=crop&auto=format` voor inline afbeeldingen

**Zoekqueries voor cover (pas aan op onderwerp):**
- `https://unsplash.com/s/photos/[topic]-woman-fashion`
- `https://unsplash.com/s/photos/fashion-accessories-flat-lay`
- `https://unsplash.com/s/photos/[topic]-lifestyle-banner`

### 3b. Inline afbeeldingen (3–5 stuks, één per sectie)

Doe meerdere WebFetch-calls parallel voor de verschillende secties:

```
WebFetch: https://unsplash.com/s/photos/spring-summer-accessories
WebFetch: https://unsplash.com/s/photos/autumn-winter-fashion
WebFetch: https://unsplash.com/s/photos/handbag-elegant-table
WebFetch: https://unsplash.com/s/photos/timeless-fashion-woman
```

**Selectie-criteria:**
- Horizontaal/landscape formaat heeft voorkeur voor inline gebruik
- Passend bij de sfeer van die sectie
- Geen stockfoto-look: geen rode cirkels, geen witte tekst over lagen, geen expliciete reclame

### 3c. Als WebFetch ook geblokkeerd is

Gebruik `https://placehold.co/900x480/F2C4CE/B85A68?text=[Sectienaam]` als fallback — maar meld dit aan de gebruiker zodat ze zelf foto's kunnen aanleveren.

---

## Fase 4: HTML schrijven

### 4a. SEO Block

```html
<title>[Primair zoekwoord] — Fleya Blog</title>
<meta name="description" content="[150–160 tekens, bevat zoekwoord + belofte, warme toon]">
<meta property="og:title" content="[Zelfde als title]">
<meta property="og:description" content="[Zelfde als description]">
<meta property="og:image" content="[Cover afbeelding URL]">
<link rel="canonical" href="/[bestandsnaam].html">
```

### 4b. Bestandsnaam

Sla altijd op als: `journal-[onderwerp-slug].html`  
Voorbeelden: `journal-seizoenstrends-accessoires.html`, `journal-cadeau-gids.html`

### 4c. Verplichte imports (identiek aan rest van de site)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          rose: '#E0828F', petal: '#F2C4CE', mauve: '#B85A68',
          cream: '#F7F0EF', espresso: '#2A2220',
        },
        fontFamily: {
          heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
          body: ['Jost', '"Helvetica Neue"', 'sans-serif'],
        },
      }
    }
  }
</script>
```

### 4d. Navigatie — ALTIJD identiek aan `journal-bagholder.html`

Kopieer exact de volledige nav-structuur van `journal-bagholder.html`, inclusief:
- Mobile menu overlay met hamburger
- Grain SVG overlay
- Fixed navbar met: links (Collectie, Over), center (FLEYA wordmark), rechts (Blog active, verlanglijst-icoon, winkelwagen)
- Wishlist + cart badge scripts onderaan

Gebruik de `.nav-link.active` class op de Blog-link.

### 4e. Hero afbeelding

```html
<div class="article-hero">
  <img src="[COVER_URL]?w=1400&h=700&q=85&fit=crop&auto=format"
       alt="[Beschrijving] — Fleya Blog">
</div>
```

De `.article-hero` stijl heeft een gradient fade-out naar de achtergrond onderaan.

### 4f. Artikel header (datum + auteur + leestijd — ALTIJD)

```html
<header class="fade-up" style="margin-bottom: 52px; text-align: center;">
  <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:20px;">
    <span style="font-size:9px;letter-spacing:0.24em;text-transform:uppercase;color:#E0828F;">[Categorie]</span>
    <span class="deco-line" style="width:24px;"></span>
    <span style="font-size:9px;letter-spacing:0.24em;text-transform:uppercase;color:#E0828F;">[Subcategorie]</span>
  </div>
  <h1 style="font-size:clamp(2.2rem,5.5vw,3.8rem);line-height:1.12;color:#2A2220;margin-bottom:28px;">
    [Titel]
  </h1>
  <span class="deco-line deco-line-center" style="margin-bottom:24px;"></span>
  <div style="display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;">
    <span style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(42,34,32,0.45);">[Datum]</span>
    <span style="width:3px;height:3px;border-radius:50%;background:rgba(224,130,143,0.4);display:inline-block;"></span>
    <span style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(42,34,32,0.45);">Door [Auteur]</span>
    <span style="width:3px;height:3px;border-radius:50%;background:rgba(224,130,143,0.4);display:inline-block;"></span>
    <span style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(42,34,32,0.45);">[X] min lezen</span>
  </div>
</header>
```

**Leestijd berekenen:** ~200 woorden per minuut. 800w = 4 min, 1000w = 5 min, 1200w = 6 min.

### 4g. Artikel body structuur

```html
<div class="article-body fade-up" style="transition-delay:0.1s;">

  <p>[Introductie]</p>
  <p>[Introductie vervolg]</p>

  <div class="section-divider"></div>

  <h2>[Sectie 1]</h2>
  <p>[150–200 woorden]</p>

  <!-- Inline afbeelding na eerste of tweede alinea per sectie -->
  <figure class="inline-image">
    <img src="[UNSPLASH_URL]?w=900&h=480&q=80&fit=crop&auto=format"
         alt="[Beschrijving]">
    <figcaption>[Korte caption, max 8 woorden]</figcaption>
  </figure>

  <p>[Vervolg sectie 1]</p>

  <blockquote class="pull-quote">
    "[Krachtige zin uit de tekst — sfeer, geen feiten]"
  </blockquote>

  <h2>[Sectie 2]</h2>
  <p>[150–200 woorden]</p>

  <figure class="inline-image">
    <img src="[UNSPLASH_URL]?w=900&h=480&q=80&fit=crop&auto=format"
         alt="[Beschrijving]">
    <figcaption>[Caption]</figcaption>
  </figure>

  <!-- Herhaal per sectie -->

  <div class="section-divider"></div>

  <h2>Veelgestelde Vragen</h2>
  <p style="font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:#E0828F;margin-bottom:32px;margin-top:-12px;">
    Antwoorden op jouw stijlvragen
  </p>

  <div style="margin-bottom:32px;">
    <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:300;color:#2A2220;margin-bottom:10px;">[Vraag?]</h3>
    <p>[Antwoord 40–60 woorden]</p>
  </div>
  <!-- 3–5 vragen -->

  <div class="section-divider"></div>

  <h2>Conclusie — [Korte sfeer-titel]</h2>
  <p>[Sluit af met gevoel, wek verlangen. Geen opsomming.]</p>
  <p>[Zachte richting naar de collectie.]</p>

</div>
```

### 4h. CSS die altijd aanwezig moet zijn in `<style>`

Kopieer deze blokken exact uit `journal-bagholder.html`:
- `.article-hero` + gradient overlay
- `.article-container`
- `.article-body p`, `.article-body h2`
- `.inline-image` + `:hover img` + `figcaption`
- `.pull-quote`
- `.section-divider`
- `.back-link`
- `.cta-card` + `::before`
- `.fade-up` + `.visible`
- `.grain-overlay`
- Mobile menu styles

### 4i. CTA block (donker, onderaan artikel)

```html
<div class="fade-up cta-card" style="transition-delay:0.15s;">
  <span class="deco-line deco-line-center" style="background:rgba(224,130,143,0.4);margin-bottom:24px;"></span>
  <p style="font-size:9px;letter-spacing:0.28em;text-transform:uppercase;color:#E0828F;margin-bottom:14px;">[Subtitel]</p>
  <h2 style="font-size:clamp(1.8rem,4vw,2.8rem);color:#F7F0EF;margin-bottom:16px;line-height:1.15;">[CTA titel]</h2>
  <p style="font-size:13px;font-weight:300;letter-spacing:0.08em;color:rgba(247,240,239,0.55);max-width:380px;margin:0 auto 32px;">[Korte ondertitel]</p>
  <a href="product.html"
     style="background-color:#E0828F;color:#F7F0EF;font-family:'Jost',sans-serif;
            font-weight:400;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;
            padding:14px 40px;border-radius:4px;display:inline-block;text-decoration:none;
            transition:background-color 0.3s cubic-bezier(0.25,0.46,0.45,0.94),
                        transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94);"
     onmouseover="this.style.backgroundColor='#B85A68';this.style.transform='translateY(-1px)'"
     onmouseout="this.style.backgroundColor='#E0828F';this.style.transform='translateY(0)'">
    Bekijk de collectie
  </a>
  <span class="deco-line deco-line-center" style="background:rgba(224,130,143,0.4);margin-top:28px;"></span>
</div>
```

---

## Fase 5: journal.html updaten

**Altijd** na het schrijven van een nieuw artikel `journal.html` updaten:

1. **Nieuw artikel** wordt de nieuwe featured card (`.blog-card-featured`) bovenaan de grid
2. **Vorige featured card** schuift door als reguliere `.blog-card` (tweede positie)
3. **Binnenkort-placeholders** blijven onderaan totdat er een echt artikel voor is

Featured card template:
```html
<a href="[bestandsnaam].html" class="blog-card blog-card-featured fade-up" style="transition-delay:0.05s;">
  <div class="card-img-wrap">
    <img src="[COVER_URL]?w=800&h=600&q=80&fit=crop&auto=format"
         alt="[Alt tekst]" loading="lazy">
  </div>
  <div class="card-body">
    <span class="card-category">[Categorie] · [Subcategorie]</span>
    <h2 class="card-title">[Titel]</h2>
    <p class="card-excerpt">[Excerpt, 1–2 zinnen, sfeer + belofte]</p>
    <div class="card-meta">
      <span class="card-date">[Datum]</span>
      <span class="card-meta-dot"></span>
      <span class="card-read">[X] min lezen</span>
    </div>
    <span class="card-arrow">
      Lees meer
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path d="M0 5h12M8.5 1l4 4-4 4" stroke="#E0828F" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </div>
</a>
```

---

## Fase 6: Schrijfregels voor Fleya

**Toon & stem**
- Schrijf als een stijlvolle vriendin die adviseert — niet als een SEO-copywriter
- Aspirationeel maar toegankelijk: luxe gevoel, geen neerbuigend jargon
- "Je" / "jij" (informeel), maar beschaafd en warm
- Woorden die passen: tijdloos, verfijnd, moeiteloos, bewust, zacht, evenwicht
- Woorden te vermijden: goedkoop, beste koop, aanbieding, nummer 1, klik hier

**Structuur**
- Elke paragraaf: 40–120 woorden
- Elke zin: max 20 woorden
- H2-secties mogen narratief openen (sfeer → kern)
- Gebruik het primaire zoekwoord in: H1, eerste alinea, 2–3 H2-koppen, meta description

**Interne links — gebruik altijd deze Fleya pagina's**
- Collectie / product: `product.html`
- Blog overzicht: `journal.html`
- Over ons: `about.html`
- Voor bedrijven: `voor-bedrijven.html`
- FAQ: `faq.html`

---

## Fase 7: Kwaliteitscheck

Controleer voor oplevering:
1. SEO meta block aanwezig (title, description, og:title, og:description, og:image, canonical)
2. H1 bevat primair zoekwoord
3. Meta description is 150–160 tekens
4. Nav identiek aan `journal-bagholder.html` — FLEYA wordmark, Blog active, verlanglijst + winkelwagen
5. Cover hero afbeelding aanwezig (Unsplash, geen premium `plus.unsplash.com` URL)
6. 3–5 inline afbeeldingen, één per sectie, met figcaption
7. Datum + auteur + leestijd in artikel header
8. Pull quote aanwezig (minimaal 1)
9. FAQ sectie aanwezig (3–5 vragen)
10. Donkere CTA card onderaan artikel
11. `journal.html` bijgewerkt met nieuw artikel als featured card
12. Geen `plus.unsplash.com` URLs gebruikt
13. Geen generieke Tailwind blauw/indigo kleuren gebruikt
14. Bestandsnaam: `journal-[slug].html`

---

## Fase 8: Oplevering

Lever het artikel op met een korte samenvatting:

```
Artikel klaar: [Titel]
- Bestand: journal-[slug].html
- Zoekwoord: [primair zoekwoord]
- Woordtelling: ~[N] woorden
- Leestijd: [N] min
- Auteur: [Naam]
- Datum: [datum]
- Cover: Unsplash [photo-ID]
- Inline foto's: [N] stuks
- H2 secties: [N]
- FAQ items: [N]
- journal.html: bijgewerkt (nieuw artikel als featured)
- Server: http://localhost:3000/journal-[slug].html
```
