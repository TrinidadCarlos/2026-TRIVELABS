# BASADO EN MI "2026-BOILERPLATE-ASTRO" (actualizado en marzo 2026 astro y dependencias)

## 🚀 Project Structure

```text
/
├── public/
│   ├── fonts/
│   ├── images/
│   └── favicon.svg
├── src
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   │
│   ├── components/
│   │   └── BaseHead.astro
│   │
│   ├── constants/
│   │
│   ├── hooks/
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── lib/
│   │
│   ├── pages/
│   │    └── index.astro
│   │
│   ├── styles/
│   │   ├── partials/
│   │   │   ├── _tags.css
│   │   └── global.css
│   │
│   ├── types/
│   │
│   ├── utils/
│   │   └── siteTheme.ts
│   │
│   └── notes.txt
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## 🚀 Dependencies

```text
Review package.json for the latest dependency versions.
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
