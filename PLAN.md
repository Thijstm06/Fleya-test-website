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
| `winkelwagen.html` | Compleet — winkelwagen met localStorage |
| `verlanglijst.html` | Compleet — verlanglijst met localStorage |
| `journal.html` | Compleet — blog overzichtspagina |
| `journal-bagholder.html` | Compleet — blog detailpagina |
| `contact.html` | Compleet — contactformulier |
| `verzending-retour.html` | Compleet — verzending & retourinfo |
| `faq.html` | Compleet — accordion FAQ |

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
- [ ] **Echte Fleya-copy** — generieke placeholder-tekst op alle pagina's vervangen door echte merktekst
  - Productnamen / beschrijvingen
  - Over-ons tekst (about.html) — al grotendeels brand-specifiek
  - Blog-artikelen (journal.html + journal-bagholder.html)
  - Hero-taglines (index.html) — al brand-specifiek

---

## Prioriteit 3 — Later

- [ ] **Checkout flow** — werkende bestelpagina (checkout.html), eventueel koppeling met Stripe of Mollie
- [ ] **Meer productpagina's** — extra producten / varianten, categoriepagina
- [ ] **Echte sociale links** — Instagram, Pinterest, TikTok (nu allemaal `href="#"`)
- [ ] **Meer blog-content** — extra artikelen in journal.html + detailpagina's
- [ ] **SEO basics**
  - `<meta name="description">` per pagina
  - `<meta property="og:image">` voor social sharing
  - Unieke `<title>` tags nalopen
- [ ] **Cookie/consent banner** — pas toevoegen als analytics of tracking live gaat

---

## Technische stack

- HTML5, inline Tailwind CSS via CDN
- Google Fonts: Cormorant Garamond (headings) + Jost (body)
- JavaScript: vanilla, geen framework
- Opslag: `localStorage` voor winkelwagen en verlanglijst
- Hosting: GitHub → Thijstm06/Fleya-test-website

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
