# Oplevering Checklist

## Code & Setup

- [ ] Repository op GitHub aanwezig
- [ ] npm install geslaagd
- [ ] npm run build geslaagd (geen errors)
- [ ] npm run lint geslaagd
- [ ] npm run dev werkt lokaal
- [ ] TypeScript strict mode geen errors

## Content & Branding

- [ ] Logo aanwezig in `public/images/logo blom.jpg`
- [ ] Logo toont correct in header
- [ ] Geen blauwe kleuren in design aanwezig
- [ ] Merkkleuren (rood #D32F2F, antraciet, wit) toegepast
- [ ] Lettertypen (Barlow Condensed, Manrope) laden correct
- [ ] Site config bijgewerkt (`src/config/site.ts`)

## Pagina's

- [ ] Homepage compleet en mooi
- [ ] Navigatie werkt op desktop en mobiel
- [ ] Alle dienstenpagina's beschikbaar
- [ ] Projectenpagina toont (al dan niet met projects)
- [ ] Over ons pagina ingevuld
- [ ] Contact pagina met alle contactgegevens
- [ ] Werkgebied pagina beschrijft regio's
- [ ] Privacy pagina ingevuld
- [ ] Cookies pagina ingevuld
- [ ] 404 pagina werkt

## Formulier

- [ ] Offerteformulier opent
- [ ] Stap 1: contactgegevens valideren
- [ ] Stap 2: projectinfo werkt
- [ ] Stap 3: bestandsupload werkt (max 10 files)
- [ ] Stap 4: review en submit werkt
- [ ] E-mail verzending naar melvin@blomtotaalrenovatie.nl
- [ ] Klant ontvangt bevestigings-e-mail
- [ ] Rate limiting werkt (spam protection)
- [ ] Bestanden correct geupload naar Vercel Blob

## Responsief Design

- [ ] Mobile (375px) toont correct
- [ ] Tablet (768px) toont correct
- [ ] Desktop (1280px) toont correct
- [ ] Geen horizontaal scrollen op mobiel
- [ ] Tekst is leesbaar op alle schermformaten
- [ ] Knoppen zijn aanraakbaar op mobiel (min 44x44px)
- [ ] Menu werkt op mobiel

## Accessibility

- [ ] Toetsenbordsnavigatie werkt (Tab key)
- [ ] Skip to content link aanwezig en werkend
- [ ] Focus states zichtbaar (outline)
- [ ] Alt text op alle afbeeldingen
- [ ] Kleurcontrast WCAG AA goed (niet alleen kleur)
- [ ] Formulier labels gekoppeld aan inputs
- [ ] Error messages duidelijk en toegankelijk
- [ ] Screenreader werkt (test met NVDA of Jaws)

## SEO

- [ ] Sitemap beschikbaar (`/sitemap.xml`)
- [ ] Robots.txt beschikbaar (`/robots.txt`)
- [ ] Unieke titel per pagina
- [ ] Unieke meta description per pagina
- [ ] H1 per pagina aanwezig (exact 1)
- [ ] Goede H2/H3 structuur
- [ ] Canonical URLs correct
- [ ] Open Graph metadata aanwezig
- [ ] Structured data (JSON-LD) aanwezig
- [ ] Google verification code in layout
- [ ] Google Analytics voorbereid

## Cookies & Privacy

- [ ] Cookie banner toont bij eerste bezoek
- [ ] Accept/Reject buttons werken
- [ ] Keuze wordt opgeslagen (localStorage)
- [ ] Analytics alleen laden met toestemming
- [ ] Privacy pagina juridisch gecontroleerd ✅ (OPGAVE VOOR EIGENAAR)
- [ ] Cookies pagina juridisch gecontroleerd ✅ (OPGAVE VOOR EIGENAAR)

## Performance

- [ ] Afbeeldingen in moderne formaten (WebP)
- [ ] Images responsive (sizes attribute)
- [ ] Lazy loading onder fold
- [ ] Geen render-blocking resources
- [ ] Google Fonts correct ingeladen
- [ ] Geen onnodig grote bundels
- [ ] Core Web Vitals OK

## Security

- [ ] Geen API keys in browsercode
- [ ] .env.local in .gitignore
- [ ] Environment variables in Vercel secret
- [ ] CSRF protection op formulier (honeypot)
- [ ] XSS protection (input sanitization)
- [ ] Server-side validatie (Zod)
- [ ] CSP headers ingesteld
- [ ] HTTPS enforced

## Contact & Business Info

- [ ] Bedrijfsnaam correct
- [ ] Telefoonnummer correct (06 39 14 03 53)
- [ ] E-mailadres correct (melvin@blomtotaalrenovatie.nl)
- [ ] WhatsApp link correct (31639140353)
- [ ] Locatie Doesburg correct
- [ ] KvK nummer correct (99836394)
- [ ] Geen woonadres zichtbaar
- [ ] Google beoordelingen link werkt
- [ ] Review teksten klopt met origineel

## Vercel Deployment

- [ ] Project op Vercel aangemaakt
- [ ] GitHub geïntegreerd
- [ ] Environment variables ingesteld
- [ ] Build succesvol
- [ ] Preview URL werkt
- [ ] Domain gekoppeld (CNAME of Nameservers)
- [ ] HTTPS werkend
- [ ] DNS records correct (zonder e-mail records te beschadigen)

## Final Testing

- [ ] Homepage volledig laden (alle secties zichtbaar)
- [ ] Alle links werken (internal + external)
- [ ] Alle afbeeldingen laden
- [ ] Geen console errors
- [ ] Geen TypeScript fouten
- [ ] Formulier test: submit gelukt
- [ ] E-mail test: offerte ontvangen
- [ ] Bestandsupload test: bestanden in Blob
- [ ] Mobile test: volledige workflow op smartphone
- [ ] Tablet test: vollledige workflow op tablet

## Social Media & Integrations

- [ ] Instagram link werkt
- [ ] Facebook link werkt
- [ ] Google beoordelingen link werkt
- [ ] WhatsApp link werkt

## Go-Live Requirements

Alles hierboven moet ✅ zijn voordat live gaat!

Wanneer alles klaar is:

1. **Meldde DNS change aan Melvin** (wacht op eventuele e-mailrecords)
2. **Domain laten verifiëren** in Google Search Console
3. **Sitemap indienen** in Google Search Console
4. **Robots.txt getest** met Search Console
5. **Analytics tracking testen**
6. **Bing Webmaster Tools setup** (optioneel)

## Post-Launch

Na go-live (1-2 weken):

- [ ] Google zoekopdrachten: indexering controleren
- [ ] Analytics data binnenkomst controleren
- [ ] Rankings monitoren
- [ ] Formulier submissions controleren
- [ ] Error logs checken
- [ ] Performance monitoren

---

**Laatst bijgewerkt:** Juli 2026
