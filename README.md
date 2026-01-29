# Personlig Portfolio - Rasmus

Et hurtigt, minimalistisk portfolio-site bygget med [Astro](https://astro.build) og [Tailwind CSS](https://tailwindcss.com).

## Kom godt i gang

For at køre projektet lokalt skal du have [Node.js](https://nodejs.org/) installeret.

### 1. Installation

Installer afhængigheder:

```bash
npm install
```

### 2. Kør lokalt (Udvikling)

Start udviklingsserveren:

```bash
npm run dev
```

Hjemmesiden vil nu køre på `http://localhost:4321`.

### 3. Byg til produktion

Når du er klar til at udgive siden (static site generation):

```bash
npm run build
```

Filerne ligger nu i `dist/` mappen og kan uploades til enhver webhost (Netlify, Vercel, GitHub Pages, UnoEuro etc.).

## Projektstruktur

Hele koden ligger i `src/` mappen:

- `src/data/projects.ts`: Her ændrer du dine projekter.
- `src/pages/`: Her ligger siderne (`index.astro`, `om.astro` osv.).
- `src/components/`: Genbrugelige dele som Header, Footer og ProjectCard.
- `src/layouts/`: Det overordnede layout (HTML shell).
