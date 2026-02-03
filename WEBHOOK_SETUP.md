# Sådan tilføjer du Vercel Webhook i Sanity

## Trin 1: Log ind på Sanity Studio

1. Gå til [http://localhost:4321/admin](http://localhost:4321/admin)
2. Log ind med din Google/GitHub konto

## Trin 2: Åbn Sanity Management Console

1. Åbn en ny fane og gå til [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Log ind hvis nødvendigt
3. Find dit projekt **"Test Hjemmeside"** (Project ID: `jpgm97rd`)
4. Klik på projektet

## Trin 3: Tilføj Webhook

1. I venstre sidebar, klik på **"API"**
2. Scroll ned til sektionen **"Webhooks"**
3. Klik på **"Create webhook"** eller **"Add webhook"**

## Trin 4: Konfigurer Webhook

Udfyld følgende felter:

- **Name:** `Vercel Deploy`
- **URL:** `https://api.vercel.com/v1/integrations/deploy/prj_AudjbeVEwT8fmxUT5GE0EUjY2WEg/srJQrXeAPT`
- **Dataset:** `production`
- **Trigger on:** Vælg **"Create"**, **"Update"**, og **"Delete"**
- **Filter:** Lad stå tom (eller brug `_type in ["homepage", "project", "settings", "aboutPage", "newsletterPage"]` hvis du kun vil triggere på disse typer)
- **Projection:** Lad stå tom
- **HTTP method:** `POST`
- **API version:** `2024-01-01` (eller seneste)

## Trin 5: Gem Webhook

1. Klik **"Save"** eller **"Create"**
2. Webhook er nu aktiv! 🎉

## Test Webhook

1. Gå tilbage til Sanity Studio ([http://localhost:4321/admin](http://localhost:4321/admin))
2. Rediger noget indhold (f.eks. ændre "Velkomst Tag" på Forsiden)
3. Klik **"Publish"**
4. Gå til [Vercel Dashboard](https://vercel.com/dashboard) → Dit projekt
5. Du skulle se en ny deployment starte inden for 10-30 sekunder
6. Vent 1-2 minutter på at deployment er færdig
7. Tjek din live site - ændringerne skulle nu være synlige!

---

## Alternativ: Brug Sanity CLI (Avanceret)

Hvis du foretrækker at bruge CLI:

```bash
cd sanity
npx sanity hook create \
  --name "Vercel Deploy" \
  --url "https://api.vercel.com/v1/integrations/deploy/prj_AudjbeVEwT8fmxUT5GE0EUjY2WEg/srJQrXeAPT" \
  --dataset production
```

---

## Fejlfinding

**Problem:** Webhook triggerer ikke
- Tjek at URL'en er korrekt
- Tjek at "Trigger on" inkluderer "Update"
- Tjek at dataset er "production"

**Problem:** Deployment fejler
- Tjek Vercel deployment logs
- Tjek at Sanity data er korrekt formateret

**Problem:** Ændringer vises ikke på live site
- Vent 2-3 minutter (Vercel build + deploy tid)
- Hard refresh browseren (Cmd + Shift + R)
- Tjek at du har klikket "Publish" (ikke bare gemt som draft)
