<div align="center">

<img src="docs/screenshots/hero-home.png" alt="termfolio" width="100%" />

# termfolio

**A terminal-native personal site with a journal, bilingual Arabic surfaces, a lab bench, and useful no-login tools.**

Write in Obsidian, VS Code, Vim, or any editor. Push markdown to GitHub. The site updates.
No database, no CMS, no duplicated writing workflow.

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_15-0B0B0F?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-0B0B0F?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-0B0B0F?style=for-the-badge&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-0B0B0F?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![Obsidian](https://img.shields.io/badge/Obsidian-0B0B0F?style=for-the-badge&logo=obsidian&logoColor=7C3AED)](https://obsidian.md/)
[![Vercel](https://img.shields.io/badge/Vercel-0B0B0F?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br/>

[![Stars](https://img.shields.io/github/stars/wa1939/termfolio?style=flat&logo=github&color=7dd3fc&labelColor=0B0B0F)](https://github.com/wa1939/termfolio/stargazers)
[![Forks](https://img.shields.io/github/forks/wa1939/termfolio?style=flat&logo=github&color=8FD4A7&labelColor=0B0B0F)](https://github.com/wa1939/termfolio/network/members)
[![License](https://img.shields.io/github/license/wa1939/termfolio?style=flat&color=A7B8FF&labelColor=0B0B0F)](./LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/wa1939/termfolio?style=flat&color=E8B87E&labelColor=0B0B0F)](https://github.com/wa1939/termfolio/commits/main)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio&label=visitors&labelColor=%230B0B0F&countColor=%237dd3fc)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio)

[Live Demo](https://walhamed.com) · [Deploy Your Own](#deploy-in-3-minutes) · [Full Tutorial](https://walhamed.com/blog/deploy-your-terminal-portfolio)

</div>

---

## Latest Update

The current release keeps the terminal vibe, but makes the site more useful and shareable:

- Full Arabic route set: `/ar`, `/ar/blog`, `/ar/about`, `/ar/contact`, `/ar/lab`, `/ar/tools`, and `/ar/card`.
- Thmanyah Arabic typography for Arabic UI and reading surfaces, while terminal commands stay in English.
- Journal digest cards for skim-first readers: the point, key ideas, useful jumps, and a three-word memory hook.
- Lab bench for public experiments, kept separate from formal portfolio case studies.
- Everyday tools: bill splitter, short links, QR codes, WhatsApp links, calendar files, image shrinking, and share-card generation.
- Digital card improvements: vCard, QR, WhatsApp, LinkedIn, wallet pass support, and share-card attribution.
- Vercel is the default theme, with the theme picker and `theme` terminal command still available.

---

## Deploy in 3 Minutes

No local setup required. Click, paste, deploy.

| Step | Action | Time |
|:----:|--------|:----:|
| **1** | Click **Deploy with Vercel** below. It forks the repo and creates your project. | 30s |
| **2** | Add the email env variables from [resend.com](https://resend.com) if you want newsletter support. | 90s |
| **3** | Click **Deploy**. Your site is live. | 60s |

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio&env=RESEND_API_KEY,RESEND_AUDIENCE_ID,NOTIFY_SECRET&envDescription=API%20keys%20for%20newsletter%20and%20notifications&envLink=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio%23environment-variables)

</div>

After deploy, edit `content/site.ts`, `content/card.md`, `content/locale.ts`, and `content/lab.ts` to make the site yours. Posts live in `content/posts/*.md`.

---

## See It in Action

<div align="center">

| | |
|:---:|:---:|
| ![Home](docs/screenshots/hero-home.png) | ![Blog](docs/screenshots/blog.png) |
| **Home** - Boot sequence, terminal, theme picker, useful tools, and recent writing | **Journal** - Search, tags, writing heatmap, and digest-first reading |
| ![Blog Post](docs/screenshots/blog-post.png) | ![About](docs/screenshots/about.png) |
| **Post** - Reading controls, ToC, focus mode, comments, and skim cards | **About** - Resume-style dossier, experience, skills, credentials |
| ![Contact](docs/screenshots/contact.png) | ![Mobile](docs/screenshots/mobile-home.png) |
| **Contact** - Booking, newsletter, and direct channels | **Card** - Digital business card with vCard, QR, WhatsApp, and wallet support |

</div>

---

## What Is Inside

### Reading Experience

- Three reading themes: Terminal, Light, and Sepia.
- Adjustable font size, spacing, focus mode, progress bar, and table of contents.
- Markdown posts with GFM, code highlighting, headings, links, images, and tables.
- Digest cards for readers who want the idea before the full article.
- RTL-aware Arabic surfaces using the local Thmanyah font files.
- Giscus comments through GitHub Discussions, with a safe fallback when not configured.

### Terminal Commands

The home terminal is a real command parser with 28 commands.

| Group | Commands |
|-------|----------|
| Navigation | `about`, `blog`, `lab`, `tools`, `card`, `contact` |
| Public tools | `split`, `short`, `qr`, `wa`, `event`, `image`, `sharecard` |
| Identity | `whoami`, `skills`, `theme`, `dashboard`, `clear` |
| Text utilities | `json`, `base64`, `wordcount`, `uuid`, `epoch` |
| Play and maps | `type`, `stars`, `map`, `snake`, `pokedex` |

The default theme is `vercel`; visitors can switch themes from the nav dropdown or by typing `theme`.

### Lab Bench

The lab is intentionally not a polished project/case-study section. It is a place for experiments, prototypes, and public traces of how ideas get tested.

Configured experiments currently include:

- `wa1939/termfolio`
- `wa1939/athar`
- `wa1939/arabic-pdf-suite`
- `wa1939/wafi`
- `wa1939/Arabic-OCR`
- `wa1939/ArabicWordCloudGenerator`

### Everyday Tools

The tools are meant to give people a practical reason to come back without creating accounts or uploading data unnecessarily.

- Bill splitter with service charge, tax, payers, portions, and a copyable group message.
- Short link maker using a no-login external shortener.
- QR generator.
- WhatsApp click-to-chat link builder.
- Calendar `.ics` file generator.
- Browser-side image shrinker.
- Share-card maker with site attribution.

---

## Content Model

### Site Config

Most identity, navigation, resume, and social data is controlled from:

```txt
content/site.ts
content/locale.ts
content/card.md
content/lab.ts
```

`content/site.ts` is the main English source. `content/locale.ts` contains Arabic UI copy and Arabic resume content. `content/card.md` powers the digital card and vCard. `content/lab.ts` powers the lab and tools listings.

### Blog Posts

Create `.md` files in `content/posts/`:

```markdown
---
title: "My First Post"
date: "2026-01-15"
excerpt: "A brief description for cards and SEO"
tags: ["topic", "another"]
status: "published"
language: "en"
---

Your markdown content here.
```

| Field | Required | Notes |
|-------|:--------:|-------|
| `title` | Yes | Post title |
| `date` | Yes | ISO date, `YYYY-MM-DD` |
| `status` | Yes | `published` or `draft` |
| `excerpt` | No | Used in cards, SEO, digest, and email |
| `tags` | No | Array of strings for filtering |
| `language` | No | `en` by default, `ar` for Arabic posts |
| `coverImage` | No | Path relative to `public/` |
| `author` | No | Defaults to `siteConfig.name` |

---

## Obsidian Workflow

Your markdown files are the CMS. You can copy posts into `content/posts/`, symlink an Obsidian folder, or sync from a vault repo through GitHub Actions.

```bash
# macOS/Linux
ln -s ~/obsidian-vault/published content/posts

# Windows PowerShell as Admin
New-Item -ItemType SymbolicLink -Path content\posts -Target C:\Users\you\obsidian-vault\published
```

The repo also includes `.github/workflows/sync-obsidian.yml` for syncing from a separate vault repo.

---

## Environment Variables

| Variable | Required | Description |
|----------|:--------:|-------------|
| `RESEND_API_KEY` | Newsletter only | Resend API key |
| `RESEND_AUDIENCE_ID` | Newsletter only | Resend audience ID |
| `NOTIFY_SECRET` | Notifications only | Protects the new-post notification endpoint |
| `RESEND_FROM_EMAIL` | No | Sender address override |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL override |
| `NEXT_PUBLIC_NASA_API_KEY` | No | NASA APOD widget key |
| `NEXT_PUBLIC_GISCUS_REPO` | Comments only | Giscus repo name |
| `NEXT_PUBLIC_GISCUS_REPO_ID` | Comments only | Giscus repo ID |
| `NEXT_PUBLIC_GISCUS_CATEGORY` | Comments only | Giscus category |
| `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | Comments only | Giscus category ID |
| `WALLETWALLET_API_KEY` | Wallet only | WalletWallet API key for Apple Wallet passes on `/card` |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 App Router |
| UI | React 19, TypeScript, Tailwind CSS 3 |
| Content | Local Markdown with `gray-matter` |
| Markdown | `unified`, `remark-gfm`, `rehype-slug`, `rehype-highlight`, `rehype-react` |
| Fonts | IBM Plex Mono, Source Serif 4, local Thmanyah Sans, local Thmanyah Serif Text |
| Email | Resend |
| Comments | Giscus / GitHub Discussions |
| Analytics | Vercel Analytics and Speed Insights |

## Project Structure

```txt
content/
  site.ts                 Main English site config
  locale.ts               Arabic UI and resume copy
  lab.ts                  Lab experiments and tool registry
  card.md                 Digital business card data
  posts/*.md              Journal posts

app/
  page.tsx                English home
  ar/                     Arabic route tree
  blog/[slug]/            Journal article route
  lab/                    Experiment lab
  tools/                  Utility tools
  card/                   Digital card
  api/subscribe/          Newsletter subscription endpoint
  api/notify/             New-post notification endpoint
  api/tools/shorten/      Short link endpoint
  api/card/vcard/         vCard endpoint
  api/card/wallet/        Wallet pass endpoint

components/
  boot-terminal.tsx       Interactive terminal and command parser
  theme-picker.tsx        Theme dropdown, defaulting to Vercel
  article-digest.tsx      Skim cards for posts
  reading-controls.tsx    Theme, font, spacing, focus, progress
  journal-client.tsx      Searchable journal archive
  lab-bench.tsx           Experiments grid
  everyday-tool-client.tsx Utility tool UI
  splitter-client.tsx     Bill splitter
  card-client.tsx         Digital card UI
```

## Dev Commands

```bash
npm run dev        # Development server
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
npm run check      # Lint + typecheck + build
```

---

## Documentation

- `docs/AI_CONTEXT.md` - repo orientation for future AI sessions.
- `docs/ROUTES.md` - active route map.
- `docs/ACTIVE_VS_LEGACY.md` - active files vs older helper code.
- `docs/INTEGRATIONS.md` - external services and environment variables.
- `docs/DESIGN_HANDOFF.md` - design direction and guardrails.
- `docs/enhancement-roadmap.md` - shipped improvements and future ideas.

## Contributing

1. Fork the repo.
2. Create your branch: `git checkout -b feat/cool-feature`.
3. Commit: `git commit -m "feat: add cool feature"`.
4. Push: `git push origin feat/cool-feature`.
5. Open a pull request.

[Report bugs or request features](https://github.com/wa1939/termfolio/issues)

## License

[MIT](./LICENSE)

<div align="center">

Built by [Waleed Alhamed](https://walhamed.com)

</div>
