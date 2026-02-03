# Guide: Udfyld Initial Data i Sanity Studio

Når du logger ind på Sanity Studio første gang, skal du oprette indhold for de nye schemas. Her er hvad du skal gøre:

## 1. Indstillinger (Settings)

1. I Sanity Studio sidebar, klik på **"Indstillinger"**
2. Klik **"Create new Indstillinger"**
3. Udfyld følgende:

### Sidenavn
```
Rasmus
```

### Navigation
Klik "Add item" for hvert navigationspunkt:

**Item 1:**
- Tekst: `Forside`
- Link: `/`

**Item 2:**
- Tekst: `Om mig`
- Link: `/om`

**Item 3:**
- Tekst: `Projekter`
- Link: `/projekter`

**Item 4:**
- Tekst: `Nyhedsbrev`
- Link: `/nyhedsbrev`

**Item 5:**
- Tekst: `Test`
- Link: `/test`

### Sociale Medier
- **GitHub URL:** `https://github.com/RFensten` (eller din GitHub URL)
- **LinkedIn URL:** `https://linkedin.com/in/din-profil` (eller din LinkedIn URL)
- **Email:** `kontakt@eksempel.dk` (eller din rigtige email)

### Footer Tekst
```
Alle rettigheder forbeholdes
```

4. Klik **"Publish"**

---

## 2. Om Mig Side (aboutPage)

1. I sidebar, klik på **"Om Mig Side"**
2. Klik **"Create new Om Mig Side"**
3. Udfyld følgende:

### Sidetitel
```
Om mig
```

### Profilbillede
- Klik "Upload" og vælg dit profilbillede
- Eller brug det eksisterende `/rasmus-portrait.png`

### Bio - Afsnit 1
```
Jeg er en Cand.IT-studerende med en passion for at bygge bro mellem komplekse teknologiske løsninger og forretningsmæssig værdi. Min rejse startede med en nysgerrighed for, hvordan vi kan arbejde smartere, ikke hårdere.
```

### Bio - Afsnit 2
```
I dag fokuserer jeg på digital transformation gennem automatisering og implementering af AI-værktøjer. Jeg elsker at dykke ned i "messy" data og processer for at skabe struktur og effektivitet.
```

### Bio - Afsnit 3
```
Når jeg ikke studerer eller bygger automations, eksperimenterer jeg med nye web-teknologier eller bidrager til open source projekter.
```

### Kompetencer Overskrift
```
Kompetencer
```

### Kompetencer
Klik "Add item" for hver kompetence:
- `Automatisering (Make.com, n8n, Zapier)`
- `AI & Prompt Engineering`
- `Dataanalyse & Visualisering`
- `Python Scripting`
- `Frontend Web (React, Astro, Tailwind)`
- `Digital Strategi`
- `Procesoptimering`

4. Klik **"Publish"**

---

## 3. Nyhedsbrev Side (newsletterPage)

1. I sidebar, klik på **"Nyhedsbrev Side"**
2. Klik **"Create new Nyhedsbrev Side"**
3. Udfyld følgende:

### Sidetitel
```
Kontakt & Nyhedsbrev
```

### Beskrivelse
```
Har du spørgsmål eller vil du følge med i mine seneste opdagelser?
```

### Kontakt Sektion Titel
```
Send mig en direkte besked
```

### Kontakt Email
```
kontakt@eksempel.dk
```
(eller din rigtige email)

4. Klik **"Publish"**

---

## 4. Verificer på Localhost

1. Gå til [http://localhost:4321/](http://localhost:4321/)
2. Tjek at alle ændringer vises korrekt
3. Naviger til alle sider:
   - Forside
   - Om mig
   - Projekter
   - Nyhedsbrev
4. Tjek footer og navigation

---

## 5. Test Webhook (Efter webhook er sat op)

1. Gå tilbage til Sanity Studio
2. Rediger noget indhold (f.eks. ændre "Velkomst Tag" til "Portfolio 2026 - Live Test")
3. Klik **"Publish"**
4. Gå til [Vercel Dashboard](https://vercel.com/dashboard)
5. Du skulle se en ny deployment starte
6. Vent 1-2 minutter
7. Tjek din live site - ændringerne skulle nu være synlige!

---

## Tips

- **Gem ofte:** Klik "Save" for at gemme som draft
- **Publish for at gå live:** Kun publiceret indhold vises på siden
- **Billeder:** Upload billeder direkte i Sanity for bedre performance
- **Ændringer:** Alle ændringer opdateres automatisk på localhost
- **Production:** Efter webhook er sat op, opdateres production automatisk ved publish

🎉 **Tillykke!** Du har nu fuld kontrol over alt indhold på din hjemmeside gennem Sanity Studio!
