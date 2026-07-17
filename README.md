# Blom Totaal Renovatie Website

Professionele website voor [Blom Totaal Renovatie](https://blomtotaalrenovatie.nl) — complete renovatie met één duidelijk aanspreekpunt.

## 🏗️ Technologie

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strikt)
- **Styling:** Tailwind CSS + CSS variabelen
- **E-mail:** Resend
- **File Storage:** Vercel Blob
- **Hosting:** Vercel
- **Validation:** Zod
- **Package Manager:** npm

## 📋 Vereisten

- Node.js 18+ en npm
- Git

## 🚀 Aan de slag

### 1. Installeren

```bash
npm install
```

### 2. Omgevingsvariabelen instellen

Kopieer `.env.example` naar `.env.local` en vul alle vereiste waarden in:

```bash
cp .env.example .env.local
```

**Verplichte variabelen:**

- `RESEND_API_KEY` — API key van [Resend](https://resend.com)
- `RESEND_FROM_EMAIL` — Afzenderadres voor e-mails
- `BLOB_READ_WRITE_TOKEN` — Token van Vercel Blob
- `NEXT_PUBLIC_SITE_URL` — URL van de website

**Optionele variabelen:**

- `NEXT_PUBLIC_GA_ID` — Google Analytics ID
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` — Google Search Console verificatie code
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile (spam-bescherming)
- `TURNSTILE_SECRET_KEY` — Turnstile secret key

### 3. Lokaal starten

```bash
npm run dev
```

Website is beschikbaar op `http://localhost:3000`

## 📁 Projectstructuur

```
src/
├── app/                    # App Router pagina's
│   ├── page.tsx           # Homepage
│   ├── diensten/          # Dienstenpagina's
│   ├── projecten/         # Projectenpagina's
│   ├── offerte/           # Offerteformulier
│   ├── actions/           # Server actions
│   └── ...
├── components/
│   ├── sections/          # Homepage secties
│   ├── forms/             # Formulieren
│   └── ...
├── config/
│   └── site.ts           # Centrale site configuratie
├── data/
│   ├── services.ts       # Dienstenlijst
│   ├── reviews.ts        # Beoordelingen
│   └── projects.ts       # Projecten (toekomstig)
├── lib/
│   └── utils.ts          # Utility functies
└── types/
    └── project.ts        # TypeScript types
```

## ⚙️ Configuratie

### Site instellingen

Bewerk `src/config/site.ts` voor:
- Bedrijfsnaam, contactgegevens, telefoonnummer
- Social media links
- Werkgebieden
- Google beoordelingen

### Diensten toevoegen/wijzigen

Bewerk `src/data/services.ts`

### Beoordelingen aanpassen

Bewerk `src/data/reviews.ts`

## 📧 E-mail instellen

### Resend configureren

1. Ga naar [Resend.com](https://resend.com)
2. Maak een account aan
3. Genereer een API key
4. Stel in `RESEND_API_KEY` en `RESEND_FROM_EMAIL` in `.env.local`

**Zorg ervoor dat het e-mailadres geverifieerd is in Resend.**

## 💾 Bestandsupload

### Vercel Blob instellen

1. Ga naar [Vercel Dashboard](https://vercel.com)
2. Ga naar "Blob Storage"
3. Genereer een token
4. Stel `BLOB_READ_WRITE_TOKEN` in `.env.local` in

## 📊 Google Analytics

1. Maak een Google Analytics 4 property aan
2. Kopieer de Measurement ID
3. Stel `NEXT_PUBLIC_GA_ID` in `.env.local` in

Analytics wordt pas ingesteld met toestemming van bezoekers (cookies).

## 🔍 Google Search Console

1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Voeg de website toe
3. Kopieer de verification code
4. Stel `NEXT_PUBLIC_GOOGLE_VERIFICATION` in `.env.local` in

## 🛡️ Spam-bescherming (optioneel)

### Cloudflare Turnstile

1. Ga naar [Cloudflare Turnstile](https://dash.cloudflare.com/turnstile)
2. Maak een site aan
3. Stel de keys in `.env.local` in

## 🚀 Productiebuild

```bash
npm run build
npm start
```

TypeScript en ESLint controleren:

```bash
npm run lint
```

## 📱 Responsief ontwerp

Website is geoptimaliseerd voor:
- Mobile (375px+)
- Tablet (640px+)
- Desktop (1280px+)

Test op alle formaten voordat je publiceert.

## ♿ Toegankelijkheid

- WCAG AA contrast ratios
- Toetsenbordsnavigatie
- Screenreader ondersteuning
- Semantic HTML

## 🎨 Merkvormgeving

### Kleuren

- `--color-brand-red`: #D32F2F (primair accent)
- `--color-brand-dark`: #2C3E50 (tekst)
- `--color-brand-light`: #FAF5F3 (achtergrond)

Pas deze aan in `src/app/globals.css` en `tailwind.config.ts`

### Lettertypen

- **Headings:** Barlow Condensed (via Google Fonts)
- **Body:** Manrope (via Google Fonts)

## 🔗 Domeinkoppeling

Website wordt gehost op Vercel. Voor domein koppeling:

1. Ga naar Vercel Project → Settings → Domains
2. Voeg `blomtotaalrenovatie.nl` toe
3. Update DNS records:
   - Voeg CNAME record toe naar Vercel
   - **BEHOUD BESTAANDE MX, SPF, DKIM, DMARC records voor e-mail**

⚠️ **Let op:** Bij DNS wijzigingen alleen de website records aanpassen, niet de e-mailrecords!

## 📝 Logo vervangen

1. Plaats nieuwe logoafbeelding in `public/images/logo.jpg`
2. Zorg dat het formaat gelijk is aan het origineel
3. Pas eventueel logo afmetingen aan in `Header.tsx`

**Geen AI reconstructie of wijzigingen toegestaan.**

## 👤 Foto van Melvin toevoegen

1. Plaats foto in `public/images/melvin.jpg`
2. Update verwijzing in `src/app/overons/page.tsx`

## 📚 Documentatie

- `docs/projecten_toevoegen.md` — Hoe projecten toevoegen
- `docs/vercel_en_domein.md` — Vercel en domein setup
- `docs/oplevering.md` — Checklist oplevering

## 🧪 Tests

Controleer voor publicatie:

```bash
# TypeScript controle
npm run lint

# Build controle
npm run build

# Lokaal testen
npm run dev
```

Controleer manueel:
- [ ] Homepage laadt volledig
- [ ] Navigatie werkt op desktop en mobiel
- [ ] Formulier verzending werkt
- [ ] Links naar Google beoordelingen werken
- [ ] Logo toont correct
- [ ] Geen blauwe kleuren aanwezig
- [ ] Privacy/cookies pagina's zijn ingevuld
- [ ] Sitemap beschikbaar op `/sitemap.xml`

## 🐛 Probleemoplossing

### Logo toont niet

- Controleer of `public/images/logo.jpg` bestaat
- Bestandsnaam moet exact kloppen (hoofdlettergevoelig)
- Controleer bestandsgrootte (max ~500KB)

### E-mails worden niet verzonden

- Controleer `RESEND_API_KEY` in `.env.local`
- Controleer of afzenderadres geverifieerd is in Resend
- Check server logs voor errors

### Bestanden uploaden mislukt

- Controleer `BLOB_READ_WRITE_TOKEN`
- Controleer bestandsgrootte (max 10MB)
- Ondersteunde formaten: JPG, PNG, WebP, PDF

## 📞 Support

Voor vragen over de website, neem contact op met:
- **E-mail:** melvin@blomtotaalrenovatie.nl
- **Telefoon:** 06 39 14 03 53

## 📄 Licentie

Privé project. Alle rechten voorbehouden.

---

**Bijgewerkt:** Januari 2026
