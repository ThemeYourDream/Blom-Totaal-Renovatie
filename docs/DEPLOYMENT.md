# Deployment op Vercel

## Voorbereiding

Zorg dat je:
1. ✅ GitHub repository hebt gemaakt
2. ✅ Code naar GitHub hebt gepusht
3. ✅ Environment variables in `.env.local` hebt ingesteld (lokaal getest)
4. ✅ npm run build is gelukt zonder fouten

## Stap 1: Vercel-account

Ga naar https://vercel.com en log in (je kunt met GitHub inloggen).

## Stap 2: Project toevoegen

1. Klik "Add New..." → "Project"
2. Kies "Import Git Repository"
3. Zoek en selecteer `Blom-Totaal-Renovatie`
4. Klik "Import"

## Stap 3: Environment variabelen

Op de "Configure Project" pagina:

Voeg onder "Environment Variables" toe:

```
RESEND_API_KEY = [je API key]
RESEND_FROM_EMAIL = offerte@blomtotaalrenovatie.nl
BLOB_READ_WRITE_TOKEN = [je token]
NEXT_PUBLIC_SITE_URL = https://blomtotaalrenovatie.nl
NEXT_PUBLIC_GA_ID = [optioneel, je GA ID]
NEXT_PUBLIC_GOOGLE_VERIFICATION = [optioneel, je verification code]
```

Zorg dat **BLOB_READ_WRITE_TOKEN** en **RESEND_API_KEY** als "Secret" zijn ingesteld (niet "Plaintext").

## Stap 4: Deploy

Klik "Deploy" en wacht tot build klaar is (~2-3 minuten).

Vercel geeft je een preview URL, bijvoorbeeld:
```
https://blom-totaal-renovatie-theyourdream.vercel.app
```

Test de website hier!

## Stap 5: Domein koppelen

### Domein toevoegen aan Vercel

1. Ga naar Project Settings → Domains
2. Voeg `blomtotaalrenovatie.nl` toe
3. Kies "Nameserver" (makkelijkste)
4. Volg Vercel instructies

### Nameservers wijzigen (bij je domeinnaamregistrar)

Dit kan bij bijvoorbeeld:
- Transip
- Hosting provider
- Domain registrar

Vervang nameservers met Vercel's servers (Vercel toont ze).

### Als je zelf DNS beheert

Voeg CNAME record toe:

```
Name: (root of domein)
Type: CNAME
Value: cname.vercel-dns.com
```

### ⚠️ BELANGRIJK: E-mail records behouden

Verwijder **NIET** deze records:

- **MX records** (e-mailrouting)
- **SPF record** (e-mailverificatie)
- **DKIM records** (e-mailhandtekening)
- **DMARC record** (e-mailbeleid)

**Voeg deze records toe óf behoud ze intact. Andersom werkt je e-mailadres niet!**

## Stap 6: Sitemap en Search Console

### Sitemap indienen

Zodra domein werkt:

1. Ga naar https://search.google.com/search-console
2. Voeg property toe: `https://blomtotaalrenovatie.nl`
3. Verifieer met Google (use het verification code dat je in `.env.local` hebt staan)
4. Ga naar "Sitemaps"
5. Voeg toe: `https://blomtotaalrenovatie.nl/sitemap.xml`
6. Klik "Submit"

## Verificatie

Na deployment:

- [ ] Website laadt op `https://blomtotaalrenovatie.nl`
- [ ] Homepage rendert correct
- [ ] Logo toont
- [ ] Navigatie werkt
- [ ] Offerteformulier werkt
- [ ] E-mail verzending werkt (test met formulier)
- [ ] Sitemap beschikbaar: `/sitemap.xml`
- [ ] Robots.txt beschikbaar: `/robots.txt`

## Continuous Deployment

Na de eerste deployment:

- Elke push naar `master` branch wordt **automatisch** naar Vercel gepusht
- Preview deployments voor pull requests
- Geen handmatige stappen nodig!

## Troubleshooting

### "Deployment failed"

Check de Vercel build logs:

1. Ga naar project
2. Klik "Deployments" 
3. Klik op failed deployment
4. Kijk naar "Build Logs"

Veelgemaakte fouten:
- Missing environment variables
- Node.js versie problemen
- TypeScript fouten

### "Website laadt niet"

- Controleer of DNS records correct zijn
- Wacht tot DNS is verspreid (kan 24 uur duren)
- Controleer Vercel deployment status

### "E-mails worden niet verzonden"

- Controleer `RESEND_API_KEY` in Vercel
- Controleer of afzenderadres geverifieerd is in Resend
- Check Vercel Function logs

## Verdere optimalisatie

Zodra live:

1. Enable "Automatic HTTPS" (Vercel standard)
2. Setup "Analytics" in Vercel (optioneel)
3. Configure "Edge Middleware" (optioneel)
4. Setup monitoring (optioneel)

## Support

Vercel support: https://vercel.com/support
