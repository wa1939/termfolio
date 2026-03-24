<div align="center">

<img src="docs/screenshots/hero-home.png" alt="termfolio" width="100%" />

<br />
<br />

# termfolio

**Your portfolio should boot like a terminal, not load like a Squarespace.**

Write in Obsidian. Push to GitHub. Your site updates.<br />
No database. No CMS. No writing in two places.

<br />

[Live Demo](https://waleedalghamdi.com) &bull; [Deploy Your Own](#-deploy-in-3-minutes) &bull; [Full Tutorial](https://waleedalghamdi.com/blog/building-terminal-website)

<br />

[![Stars](https://img.shields.io/github/stars/wa1939/termfolio?style=flat&logo=github&color=7dd3fc&labelColor=0B0B0F)](https://github.com/wa1939/termfolio/stargazers)
[![Forks](https://img.shields.io/github/forks/wa1939/termfolio?style=flat&logo=github&color=8FD4A7&labelColor=0B0B0F)](https://github.com/wa1939/termfolio/network/members)
[![License](https://img.shields.io/github/license/wa1939/termfolio?style=flat&color=A7B8FF&labelColor=0B0B0F)](./LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/wa1939/termfolio?style=flat&color=E8B87E&labelColor=0B0B0F)](https://github.com/wa1939/termfolio/commits/main)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio&label=visitors&labelColor=%230B0B0F&countColor=%237dd3fc)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio)

</div>

---

## Deploy in 3 Minutes

No local setup needed. Click, paste, done.

| Step | Action | Time |
|:----:|--------|:----:|
| **1** | Click **Deploy with Vercel** below. It forks the repo and creates your project. | 30s |
| **2** | Vercel asks for 3 env variables. Get them from [resend.com](https://resend.com) (free tier). Paste them in. | 90s |
| **3** | Click **Deploy**. Your site is live. | 60s |

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio&env=RESEND_API_KEY,RESEND_AUDIENCE_ID,NOTIFY_SECRET&envDescription=API%20keys%20for%20newsletter%20and%20notifications&envLink=https%3A%2F%2Fgithub.com%2Fwa1939%2Ftermfolio%23-environment-variables)

<details>
<summary><strong>Getting the env variables (takes 2 minutes)</strong></summary>

1. Go to [resend.com](https://resend.com) and sign up (free)
2. **RESEND_API_KEY** — Go to API Keys → Create API Key → copy it
3. **RESEND_AUDIENCE_ID** — Go to Audiences → Create Audience → copy the ID
4. **NOTIFY_SECRET** — Any random string. Generate one:
   ```
   openssl rand -hex 32
   ```
   Or just type something long and random.

That's it. The newsletter and email notifications now work.

</details>

After deploy, clone your forked repo and edit **one file** — `content/site.ts` — to replace the demo content with yours. Push. Done.

> **Want the full walkthrough?** Read the [step-by-step tutorial](https://waleedalghamdi.com/blog/building-terminal-website) with screenshots.

---

## Why termfolio?

Most portfolio templates make you choose: **look good** or **easy to maintain**.

| | Traditional portfolio | termfolio |
|---|:---:|:---:|
| Write content | CMS dashboard | Obsidian / VS Code / any editor |
| Content storage | Database (Postgres, Notion, Contentful) | Plain `.md` files in your repo |
| Write in one place | No — CMS + code | Yes — just markdown |
| Vendor lock-in | Tied to CMS provider | Zero — it's just files |
| Works offline | No | Yes |
| Deploy | Complex pipeline | `git push` |
| Customize | Dig through 50+ files | Edit **one file** (`content/site.ts`) |

---

## What's Inside

<div align="center">

| | |
|:---:|:---:|
| ![Home](docs/screenshots/hero-home.png) | ![Blog](docs/screenshots/blog.png) |
| **Home — Boot sequence & interactive terminal** | **Journal — Search, heatmap, tag filters** |
| ![Blog Post](docs/screenshots/blog-post.png) | ![About](docs/screenshots/about.png) |
| **Blog Post — 3 reading themes, ToC, progress** | **About — Experience, skills, certifications** |
| ![Contact](docs/screenshots/contact.png) | ![Mobile](docs/screenshots/mobile-home.png) |
| **Contact — Cal.com scheduling, newsletter** | **Mobile — Fully responsive on all devices** |

</div>

### The Best Reading Experience

We obsessed over reading UX so your visitors actually finish your posts.

- **3 reading themes** — Terminal (dark), Light, and Sepia. Readers switch mid-article without losing their place
- **Adjustable font size** — Small, medium, large. Readers pick what's comfortable
- **Focus mode** — Hides everything except the article. No nav, no sidebar, no distractions
- **Reading progress bar** — Shows how far through the post they are
- **Table of contents** — Auto-generated from headings, highlights current section as you scroll
- **Estimated reading time** — Shown before they start
- **Syntax highlighting** — Code blocks with proper language coloring
- **Full RTL/Arabic support** — Set `language: "ar"` in frontmatter and the entire post flips — layout, fonts, everything

### 7 Built-in Terminal Games & Tools

Your visitors won't just read — they'll play. The home page terminal is a real command parser:

| Command | What it does |
|---------|-------------|
| `snake` | Classic Snake game — playable right in the terminal |
| `pokedex` | Browse Pokemon with stats, types, and pixel art |
| `typing-test` | Speed typing challenge with WPM tracking |
| `starmap` | Interactive constellation map based on your coordinates |
| `worldmap` | SVG world map highlighting your city |
| `json` | Paste and format/validate JSON instantly |
| `dashboard` | System dashboard with live clock and stats |
| `base64` | Encode/decode Base64 strings |
| `wordcount` | Count words, characters, and lines |
| `epoch` | Convert Unix timestamps to human dates |
| `uuid` | Generate random UUIDs |
| `whoami` | Shows your identity (reads from config) |
| `skills` | Shows your skills (reads from config) |
| `theme` | Toggle light/dark mode |

Every command reads from `content/site.ts` — so `whoami` outputs **your** name, and `starmap` shows **your** sky.

### Write in Obsidian, Publish Everywhere

```
Obsidian (write) → content/posts/*.md → git push → Live site
```

Your markdown files **are** the blog. No database. No CMS. No API calls to fetch content.

- **Symlink your vault** → posts update when you save in Obsidian
- **GitHub Action included** → auto-syncs from a separate vault repo on push
- **Works with any editor** → VS Code, Vim, iA Writer — if it saves `.md` files, it works

### Comments via GitHub Discussions

Readers comment on your posts using their GitHub account. No database, no moderation dashboard — comments live in your repo's Discussions tab.

**Setup (2 minutes):**

1. Go to [giscus.app](https://giscus.app)
2. Enter your repo name → it checks if Discussions are enabled
3. Pick a category (use "Announcements")
4. Copy the 4 values it gives you
5. Add them to your `.env.local`:

```bash
NEXT_PUBLIC_GISCUS_REPO=your-username/termfolio
NEXT_PUBLIC_GISCUS_REPO_ID=R_xxxxxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_xxxxxxxxxx
```

Done. Comments appear at the bottom of every blog post. You moderate them from GitHub Discussions — same place you manage issues and PRs.

### Everything Else

- **Newsletter** — Email subscriptions + new-post notifications via [Resend](https://resend.com) (free tier: 3,000 emails/month)
- **Halftone image effect** — Your profile photo renders as a canvas-based halftone
- **Star field background** — Animated starfield on the home page
- **Writing heatmap** — GitHub-style contribution graph showing your blog activity
- **Cal.com embed** — Scheduling widget on the contact page
- **Spotify widget** — Links to your music profile
- **SEO optimized** — Dynamic OG images, sitemap, robots.txt, structured metadata
- **Vercel Analytics** — Built-in analytics and speed insights
- **Security hardened** — HSTS, CSP headers, rate limiting, timing-safe auth, input validation

---

## Configure from One File

Open **`content/site.ts`** and make it yours. This single file controls your entire site:

```typescript
export const siteConfig = {
  name: "Your Name",           // site title, metadata, emails, footer
  handle: "you",               // terminal prompt, top bar
  tagline: "your · tagline",   // below ASCII art
  email: "you@example.com",    // contact page, comment fallback
  siteUrl: "https://you.com",  // metadata, sitemap, emails

  // Terminal commands read from these:
  whoami: { focus: "what you do", status: "what you're up to" },
  terminalSkills: ["skill1 // skill2 // skill3"],

  // Your location powers the star map and world map:
  coordinates: { lat: 40.7128, lon: -74.0060, label: "New York" },

  // Social links appear in the nav bar:
  socials: {
    github: { url: "https://github.com/you", label: "GitHub", icon: "</>" },
    linkedin: { url: "https://linkedin.com/in/you", label: "LinkedIn", icon: "[in]" },
  },

  // Generate ASCII art at patorjk.com/software/taag
  asciiArt: { home: [...], about: [...] },

  // About page content:
  bio: [...], experience: [...], skills: [...], certifications: [...],
}
```

<details>
<summary><strong>Full field reference</strong></summary>

| Field | Controls |
|-------|----------|
| `name` | Site title, metadata, email sender, footer |
| `handle` | Terminal prompt, top bar display |
| `title` | Meta title, about page header |
| `tagline` | Text below ASCII art on home page |
| `description` | Meta/OG description across all pages |
| `email` | Contact page, comment fallback |
| `siteUrl` | Metadata, sitemap, robots.txt, email links |
| `twitterHandle` | Twitter/X card metadata |
| `calUrl` / `calEmbedUrl` | Contact page calendar widget |
| `spotifyUrl` | Music widget link |
| `coordinates` | Star map location, world map pin |
| `asciiArt.home` / `asciiArt.about` | ASCII art banners ([generate here](https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow)) |
| `socials` | Nav bar links (GitHub, LinkedIn, X, etc.) |
| `whoami` | Terminal `whoami` command output |
| `terminalSkills` | Terminal `skills` command output |
| `terminalPrompt` | Shell prompt string (e.g. `root@you:~`) |
| `developedBy` | Footer attribution (links to this repo) |
| `customizedBy` | Your attribution — set `{ name: "You", url: "..." }` |
| `bio`, `stats`, `experience`, `skills` | About page content |
| `certifications`, `credentials` | About page badges and degrees |

</details>

---

## Blog Posts

Create `.md` files in `content/posts/`. That's your entire CMS:

```markdown
---
title: "My First Post"
date: "2026-01-15"
excerpt: "A brief description for cards and SEO"
tags: ["topic", "another"]
status: "published"
language: "en"
---

Your markdown content here. Supports GFM: tables, task lists,
strikethrough, footnotes, syntax-highlighted code blocks.
```

| Frontmatter | Required | Notes |
|-------------|:--------:|-------|
| `title` | Yes | Post title |
| `date` | Yes | ISO date (YYYY-MM-DD) |
| `status` | Yes | `"published"` or `"draft"` (drafts are hidden) |
| `excerpt` | No | Used in cards, SEO, and email notifications |
| `tags` | No | Array of strings for filtering |
| `language` | No | `"en"` (default) or `"ar"` for RTL Arabic |
| `coverImage` | No | Path relative to `public/` |
| `author` | No | Defaults to your `siteConfig.name` |

---

## Obsidian Integration

<details>
<summary><strong>Option A: Copy files</strong> (simplest)</summary>

Copy `.md` files from your Obsidian vault to `content/posts/`.

</details>

<details>
<summary><strong>Option B: Symlink</strong> (best for local dev)</summary>

Point `content/posts/` at your vault folder. Posts update live when you save in Obsidian:

```bash
# macOS/Linux
ln -s ~/obsidian-vault/published content/posts

# Windows (PowerShell as Admin)
New-Item -ItemType SymbolicLink -Path content\posts -Target C:\Users\you\obsidian-vault\published
```

</details>

<details>
<summary><strong>Option C: GitHub Action</strong> (fully automated)</summary>

A ready-made workflow is included at `.github/workflows/sync-obsidian.yml`. It syncs posts from a separate Obsidian vault repo automatically.

**Setup:**

1. Store your Obsidian posts in a separate GitHub repo (e.g. `your-username/obsidian-vault`)
2. Create a [Personal Access Token](https://github.com/settings/tokens) with `repo` scope
3. In **this** repo, go to **Settings > Secrets > Actions** and add:
   - `VAULT_REPO` — `your-username/obsidian-vault`
   - `VAULT_PAT` — your PAT
   - `VAULT_PATH` — folder inside the vault repo (default: `published`)
4. The workflow runs daily at 6 AM UTC, or trigger it manually from the Actions tab

**Optional — auto-trigger on vault push:**

Add this workflow to your vault repo:

```yaml
name: Trigger site sync
on:
  push:
    paths: ['published/**']
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - run: |
          curl -X POST \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Authorization: token ${{ secrets.SITE_REPO_PAT }}" \
            https://api.github.com/repos/YOUR_USERNAME/termfolio/dispatches \
            -d '{"event_type":"sync-obsidian"}'
```

Now every time you push your vault, your site auto-updates.

</details>

<details>
<summary><strong>Obsidian frontmatter template</strong></summary>

Save this as a template in Obsidian for new posts:

```yaml
---
title: "{{title}}"
date: "{{date:YYYY-MM-DD}}"
author: "Your Name"
excerpt: ""
coverImage: ""
tags: []
status: "draft"
language: "en"
---
```

</details>

---

## Environment Variables

| Variable | Required | Description |
|----------|:--------:|-------------|
| `RESEND_API_KEY` | Yes | [Resend](https://resend.com) API key — free tier gives 3,000 emails/month |
| `RESEND_AUDIENCE_ID` | Yes | Resend audience ID (Audiences → Create → copy ID) |
| `NOTIFY_SECRET` | Yes | Any random string — protects the notification endpoint |
| `RESEND_FROM_EMAIL` | No | Sender address (default: `Your Name <noreply@yourdomain.com>`) |
| `NEXT_PUBLIC_SITE_URL` | No | Override site URL (default from `siteConfig.siteUrl`) |
| `NEXT_PUBLIC_NASA_API_KEY` | No | [NASA API key](https://api.nasa.gov/) for APOD widget |
| `NEXT_PUBLIC_GISCUS_REPO` | No | Your repo name for [Giscus](https://giscus.app) comments |
| `NEXT_PUBLIC_GISCUS_REPO_ID` | No | Giscus repo ID |
| `NEXT_PUBLIC_GISCUS_CATEGORY` | No | Giscus category (use "Announcements") |
| `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | No | Giscus category ID |

---

## Tech Stack

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js_15-0B0B0F?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-0B0B0F?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-0B0B0F?style=for-the-badge&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0B0B0F?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![Resend](https://img.shields.io/badge/Resend-0B0B0F?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)
[![Vercel](https://img.shields.io/badge/Vercel-0B0B0F?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 3, CSS design tokens (`--term-*`) |
| Content | Local Markdown files with gray-matter frontmatter |
| Markdown | unified &rarr; remark-parse &rarr; remark-gfm &rarr; remark-rehype &rarr; rehype-slug &rarr; rehype-highlight &rarr; rehype-react |
| Email | Resend API (newsletter + new-post notifications) |
| Comments | Giscus (GitHub Discussions — no database needed) |
| Analytics | Vercel Analytics + Speed Insights |
| Fonts | IBM Plex Mono (UI), Source Serif 4 (reading), Noto Naskh Arabic (RTL) |

---

## Project Structure

```
content/
  site.ts               ← THE file. Your entire site config.
  posts/*.md            ← Your blog posts. That's your CMS.

app/
  page.tsx              Home (boot terminal, hero, recent posts)
  about/page.tsx        About/resume page
  blog/page.tsx         Journal (search, heatmap, tag filters)
  blog/[slug]/          Blog post (reading controls, ToC, comments)
  contact/page.tsx      Contact (Cal.com embed, newsletter)
  api/subscribe/        Newsletter subscription endpoint
  api/notify/           New-post notification endpoint

components/
  boot-terminal.tsx     Interactive terminal with 14+ commands
  markdown-render.tsx   Markdown-to-React renderer
  reading-controls.tsx  3 themes, font size, focus mode, progress
  writing-heatmap.tsx   GitHub-style contribution graph
  halftone-image.tsx    Canvas-based halftone image effect
  ...and 20+ more
```

## Dev Commands

```bash
npm run dev        # Development server
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
npm run check      # Lint + typecheck + build (run before pushing)
```

---

## Contributing

Contributions welcome. Here's how:

1. Fork the repo
2. Create your branch (`git checkout -b feat/cool-feature`)
3. Commit (`git commit -m 'feat: add cool feature'`)
4. Push (`git push origin feat/cool-feature`)
5. Open a Pull Request

[Report bugs or request features](https://github.com/wa1939/termfolio/issues)

---

## Star History

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=wa1939/termfolio&type=Date&theme=dark)](https://star-history.com/#wa1939/termfolio&Date)

</div>

## Attribution

Keeping the "developed by" footer link is appreciated but not required. Add your own name via `content/site.ts`:

```typescript
customizedBy: { name: "Your Name", url: "https://your-site.com" }
```

Footer renders as: `developed by waleed alhamed · customized by your name`

## License

[MIT](./LICENSE) — use it however you want.

---

<div align="center">

**If this helped you build something cool, give it a** :star:

Built by [Waleed Alhamed](https://waleedalghamdi.com)

</div>
