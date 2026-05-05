# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Skills
Custom skills for this project live in `.claude/skills/`. Invoke them via `/skill-name` in the chat.

| Skill | Bestand | Gebruik |
|-------|---------|---------|
| `blog-write` | `.claude/skills/SKILL_blog.md` | Schrijft een volledig HTML blogartikel in Fleya-stijl met SEO meta, Cormorant Garamond/Jost styling, en merkspecifieke CTAs. Gebruik: `/blog-write <onderwerp>` |

## Git & GitHub Rules — Never Push Without Approval
- **Never push to GitHub automatically.** All changes stay local until I explicitly approve them.
- After making changes, always serve them locally first (`node serve.mjs`) so I can review them in the browser.
- When a change is ready, ask me: *"I've made [short description of change]. Want me to push this to GitHub?"*
- Only run `git push` after I say yes, approve, or give explicit confirmation.
- Never run `git add`, `git commit`, or `git push` as part of a task without asking first.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present (`brand_assets/fleya-logo.svg`), use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Brand Identity — Fleya

### Merk
- Naam: Fleya
- Categorie: Vrouwelijke accessoires (bag holders, later tassen & kleding)
- Doelgroep: Vrouwen 18–40
- Sfeer: Luxe, minimalistisch, tijdloos — denk Jacquemus, The Row

### Kleuren
- Primary (Rose):    #E0828F  ← gebruik voor knoppen, accenten, logo
- Light (Petal):     #F2C4CE  ← achtergronden, hover states
- Deep (Mauve):      #B85A68  ← tekst op lichte achtergrond, active states
- Background:        #F7F0EF  ← pagina-achtergrond (cream)
- Text/Dark:         #2A2220  ← hoofdtekst (espresso, niet zwart)

### Typografie
- Headings: Cormorant Garamond, weight 300, letter-spacing 0.05em
- Body: Jost, weight 300–400, letter-spacing 0.08em, line-height 1.7
- Knoppen: Jost, uppercase, letter-spacing 0.15em, weight 400
- Laad beide fonts via Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&display=swap`

### Logo
- Bestand: `brand_assets/fleya-logo.svg`
- Woordmerk in Cormorant Garamond, weight 300, gespatieerd, kleur #E0828F
- Altijd gebruiken op achtergrond #F7F0EF (cream) of wit
- Nooit vervormen, verkleuren of aanpassen

### Stijlregels
- Nooit standaard Tailwind blauw/indigo gebruiken
- Primaire kleur is altijd #E0828F (Rose) en zijn afgeleiden
- Witruimte is een designelement — ruim en luchtig
- Geen zware schaduwen; gebruik subtiele, warme roze tinten: `box-shadow: 0 4px 24px rgba(224,130,143,0.12)`
- Afbeeldingen krijgen een zacht roze overlay via `mix-blend-multiply`
- Hoeken: subtiel afgerond (border-radius 8–12px), nooit scherp
- Decoratieve lijntjes (0.5px, kleur #E0828F) boven/onder titels voor luxe gevoel

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Always derive from Fleya brand colors above.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Always use Cormorant Garamond for headings, Jost for body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
