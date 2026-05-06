# Fleya Website — Bouwplan

## Overzicht
Fleya is een webshop voor vrouwelijke accessoires (bag holders, later tassen & kleding). De website is gebouwd als statische HTML met Tailwind CDN en inline stijlen. Geen framework, geen bundler — single-file pagina's.

---

## Bestaande pagina's

| Pagina | Status |
|--------|--------|
| `index.html` | Compleet — homepage met hero, producten, blog preview |
| `about.html` | Compleet — over het merk |
| `product.html` | Compleet — productpagina (Bag Holder) |
| `product-tote.html` | Compleet — productpagina (The Everyday Tote) |
| `winkelwagen.html` | Compleet — winkelwagen met localStorage |
| `verlanglijst.html` | Compleet — verlanglijst met localStorage |
| `journal.html` | Compleet — blog overzichtspagina |
| `journal-bagholder.html` | Compleet — blog detailpagina |
| `contact.html` | Compleet — contactformulier |
| `verzending-retour.html` | Compleet — verzending & retourinfo |
| `faq.html` | Compleet — accordion FAQ |
| `voor-bedrijven.html` | Compleet — B2B landingspagina (bag holders voor horeca/events) |

---

## Prioriteit 1 — Gedaan ✓

- [x] Hernoem "Journal" → "Blog" in alle navigaties en footers
- [x] Verwijder Maatgids-link uit footers
- [x] Maak `contact.html`
- [x] Maak `verzending-retour.html`
- [x] Maak `faq.html`
- [x] Footer-links koppelen aan echte pagina's (geen `#` placeholders meer)

---

## Prioriteit 2 — Nu te doen

- [x] **`privacybeleid.html`** — Aangemaakt met AVG-conforme placeholdertekst; gebruiker vervangt waar nodig
- [x] **Productfoto's in winkelwagen & verlanglijst** — echte foto's (bagholder-zwart/goud/zilver/roze.jpg) per kleur
- [x] **Productfoto's in about.html** — placehold.co vervangen door echte productfoto's
- [x] **Winkelwagen popup** — slide-in paneel rechts bij toevoegen product; toont alle huidige cart-items met aantal, prijs en subtotaal; knoppen voor +/−/Verwijder; navbar badge en localStorage live bijgewerkt
- [x] **`serve.mjs` herschreven** — van Python naar Node.js ES module; bevat no-cache headers
- [x] **`voor-bedrijven.html`** — B2B landingspagina met hero, how-it-works, features, B2B designs (QR/nummer/logo/hybrid/NFC), afwerkingen (zwart/goud/zilver/roze), en CTA; toegevoegd aan navbar en footer van alle pagina's
- [x] **Klikbare productfoto homepage** — foto in "De Collectie" (Fleya Bag Holder — Roze) is nu klikbaar en linkt naar product.html, net als de "Bestel Nu" knop
- [x] **"De Collectie" upgrade (index.html)** — grid herschreven van 3-koloms (2 editorial placeholders + 1 product) naar 4-koloms met alle echte productfoto's (roze/zilver/goud/zwart); kleurswatches per kaart; hover-overlay met "Bekijk Product" + verlanglijst-hartje; CTA "Bekijk de volledige collectie" onder het grid toegevoegd; dode link verwijderd
- [ ] **Echte Fleya-copy** — generieke placeholder-tekst op alle pagina's vervangen door echte merktekst
  - Productnamen / beschrijvingen
  - Over-ons tekst (about.html) — al grotendeels brand-specifiek
  - Blog-artikelen (journal.html + journal-bagholder.html)
  - Hero-taglines (index.html) — al brand-specifiek

---

## Prioriteit 2b — Product.html verbeteringen ✓

- [x] **Verticale thumbnailstrip** — 4 thumbnails links naast de hoofdfoto (verticaal gestapeld); meer editorial/luxe look
- [x] **Gift box badge zichtbaar bij CTA** — klein icon-badge "Geleverd in Fleya signature giftbox" direct onder de CTA-knoppen
- [x] **Aantal-selector (qty stepper)** — `− 1 +` control tussen kleurkiezer en beschrijving; synct met winkelwagen; kan naar 0 (verwijder); knoptekst wisselt naar "Verwijder uit winkelwagen" bij 0
- [x] **Winkelwagen-aantallen per kleur** — kleine roze pill-badge onder elk kleurbolletje toont hoeveel er van die kleur in de cart zit; live bijgewerkt
- [x] **"Meld mij als terug op voorraad" verborgen** — knop verwijderd; product is op voorraad
- [x] **"Compleet de look" sectie** — SVG-wireframes vervangen: Bag Holder Set toont twee echte productfoto's naast elkaar; Mini Bag & Tote Bag tonen editorial gradient placeholders met "Binnenkort" tekst
- [x] **Sticky mobiele CTA-balk** — vaste balk onderin op mobiel met prijs + "Toevoegen"; verborgen op desktop
- [x] **Kleurswatches goud & zilver** — radial gradient (past bij cirkelvorm); geen donkere randlijnen meer

---

## Prioriteit 1 — Volgende stap ⬅

- [ ] **Tote Bag toevoegen aan homepage collectiegrid** — Vierde kaart in "De Collectie" op index.html bijwerken van placeholder naar echte tote-foto + link naar product-tote.html

---

## Prioriteit 3 — Gedaan ✓ + later

- [x] **`product-tote.html`** — The Everyday Tote productpagina aangemaakt met 5 foto's, thumbnail gallery, add-to-cart & wishlist
- [x] **product.html "Compleet de look"** — Tote Bag kaart bijgewerkt van "Binnenkort" placeholder naar echte foto + link naar product-tote.html
- [ ] **Collectiepagina (`collectie.html`)** — Nu er 2 echte producten zijn heeft een aparte collectiepagina zin; met filterbalk (Alles / Bag Holders / Tassen / Nieuw) en alle kaarten
- [ ] **Productkaart-reviews** — Sterrenrating (bijv. 4.9 ★) zichtbaar op kaarten in De Collectie voor social proof; kleine, subtiele badge naast de naam
- [ ] **Echte Fleya-copy** — generieke placeholder-tekst vervangen door echte merktekst
  - Productnamen / beschrijvingen
  - Blog-artikelen (journal.html + journal-bagholder.html)
  - Hero-taglines (index.html) — al grotendeels brand-specifiek

## Prioriteit 4 — Later

- [ ] **Checkout flow** — werkende bestelpagina (checkout.html), eventueel koppeling met Stripe of Mollie
- [ ] **Echte sociale links** — Instagram, Pinterest, TikTok (nu allemaal `href="#"`)
- [ ] **Meer blog-content** — extra artikelen in journal.html + detailpagina's — gebruik `/blog-write <onderwerp>` skill
- [ ] **SEO basics**
  - `<meta name="description">` per pagina
  - `<meta property="og:image">` voor social sharing
  - Unieke `<title>` tags nalopen
- [ ] **Cookie/consent banner** — pas toevoegen als analytics of tracking live gaat
- [ ] **Mini Bag** — zodra productfoto's beschikbaar zijn: eigen productpagina aanmaken (zelfde aanpak als tote)

---

## Technische stack

- HTML5, inline Tailwind CSS via CDN
- Google Fonts: Cormorant Garamond (headings) + Jost (body)
- JavaScript: vanilla, geen framework
- Opslag: `localStorage` voor winkelwagen en verlanglijst
- Hosting: GitHub → Thijstm06/Fleya-test-website

---

## Claude Skills (`.claude/skills/`)

Projectspecifieke skills voor herbruikbare taken. Aanroepen via `/skill-name` in de chat.

| Skill | Bestand | Wat doet het |
|-------|---------|--------------|
| `blog-write` | `SKILL_blog.md` | Genereert volledig HTML blogartikel met Fleya brand styling, SEO meta, FAQ sectie en interne links |

---

## Merk & stijl (referentie)

| Token | Waarde |
|-------|--------|
| Rose (primary) | `#E0828F` |
| Petal (light) | `#F2C4CE` |
| Mauve (deep) | `#B85A68` |
| Cream (background) | `#F7F0EF` |
| Espresso (text) | `#2A2220` |
| Heading font | Cormorant Garamond 300 |
| Body font | Jost 300–400 |

Sfeer: luxe, minimalistisch, tijdloos — denk Jacquemus, The Row.

---

## Openstaande vragen / notities

- Gebruiker levert privacybeleid-tekst aan zodra die klaar is
- Betaalintegratie (Stripe / Mollie) is nog niet bepaald
- Sociale media accounts zijn nog niet actief / links onbekend
