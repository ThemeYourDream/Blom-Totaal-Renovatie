# Installatie en Setup

## Vereisten

- Node.js 18 of hoger
- npm 9 of hoger
- Git

## Lokale installatie

### 1. Clone repository

```bash
git clone https://github.com/ThemeYourDream/Blom-Totaal-Renovatie.git
cd Blom-Totaal-Renovatie
```

### 2. Installeer dependencies

```bash
npm install
```

### 3. Zet omgevingsvariabelen op

Kopieer `.env.example` naar `.env.local`:

```bash
cp .env.example .env.local
```

Vul de volgende **verplichte** variabelen in:

#### Resend (e-mailverzing)

1. Ga naar https://resend.com
2. Maak een account aan
3. Maak een API key aan
4. **Zorg dat het afzenderadres geverifieerd is**
5. Voeg in `.env.local` in:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=offerte@blomtotaalrenovatie.nl
```

#### Vercel Blob (bestandsupload)

1. Ga naar https://vercel.com/dashboard
2. Selecteer het project
3. Ga naar "Blob Storage"
4. Genereer een token
5. Voeg in `.env.local` in:

```
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
```

#### Site URL

```
NEXT_PUBLIC_SITE_URL=https://blomtotaalrenovatie.nl
```

### 4. Optionele services

#### Google Analytics

1. Ga naar https://analytics.google.com
2. Maak een GA4 property aan
3. Kopieer Measurement ID
4. Voeg in `.env.local` in:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Google Search Console

1. Ga naar https://search.google.com/search-console
2. Voeg site toe
3. Kopieer verification code
4. Voeg in `.env.local` in:

```
NEXT_PUBLIC_GOOGLE_VERIFICATION=xxxxxxxxxxxxxxxxx
```

## Lokaal testen

```bash
# Start development server
npm run dev

# Website is beschikbaar op http://localhost:3000
```

## Productiebuild

```bash
# Build website
npm run build

# Start production server
npm start

# Of run locaal:
npm run build && npm start
```

## Validatie voordat je live gaat

```bash
# TypeScript controle
npm run lint

# ESLint
npx eslint src/

# Build test
npm run build
```

## Deployment op Vercel

### Met GitHub verbonden:

1. Ga naar https://vercel.com/new
2. Kies "Import Git Repository"
3. Selecteer `Blom-Totaal-Renovatie` repository
4. Voeg environment variables toe (uit `.env.local`)
5. Deploy

### Omgevingsvariabelen in Vercel:

In Vercel Project Settings → Environment Variables, voeg toe:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `BLOB_READ_WRITE_TOKEN`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optioneel)
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` (optioneel)

## DNS setup voor domein

Als je `blomtotaalrenovatie.nl` wilt gebruiken:

1. Ga naar Vercel Project Settings → Domains
2. Voeg domein toe
3. Volg Vercel instructies voor DNS records
4. **BELANGRIJK:** Behoud alle bestaande MX, SPF, DKIM, DMARC records voor e-mail!

## Troubleshooting

### "npm: command not found"

Node.js is niet geïnstalleerd. Download van https://nodejs.org/ (LTS versie aanbevolen).

### "RESEND_API_KEY is not defined"

- Controleer `.env.local` file
- Controleer of `.env.local` NOT in `.gitignore` staat (mag niet!)
- Restart dev server na wijzigingen in `.env.local`

### "Bestandsupload mislukt"

- Controleer `BLOB_READ_WRITE_TOKEN`
- Controleer bestandsgrootte (max 10MB)
- Controleer bestandstype (JPG, PNG, WebP, PDF)

### "E-mail wordt niet verzonden"

- Controleer of afzenderadres geverifieerd is in Resend
- Controleer `RESEND_API_KEY`
- Check server logs: `npm run dev` en controleer console

## Volgende stappen

1. Pas `src/config/site.ts` aan met je bedrijfsgegevens
2. Voeg projecten toe in `src/data/projects.ts`
3. Pas beoordelingen aan in `src/data/reviews.ts` (al ingevuld)
4. Test alle functies locaal
5. Deploy naar Vercel
6. Zet domein naar Vercel
