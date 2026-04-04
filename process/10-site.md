# 10 SITE — Website Generation

## When

After media generation (or with placeholder assets). The site builds from whatever wiki + media content exists.

## Prerequisites

- Characters at draft+ (minimum for character pages)
- World at draft+ (minimum for location pages)
- Media generated or placeholder files in place

## Agent

`site-builder` — maintains the Astro project, handles scaffold/build/preview.

## Process

### Step 1: Scaffold (`/site-init`)

One-time setup. Creates the `site/` directory with:
- Astro project (static site generator)
- `site-config.json` (project binding, theme, visibility)
- All pages, components, and build scripts

### Step 2: Configure

Edit `site/site-config.json`:
- `project` / `wiki_path`: which wiki project to build from
- `mode`: `private` (full content) or `public` (filtered)
- `title` / `logline`: displayed on landing page
- `visibility`: per-section toggles for public mode (dark_side, ghost_lie, relationships, mood_reels)

### Step 3: Build (`/site-build`)

1. Copies media from wiki to `site/public/media/`
2. Reads wiki markdown via `wiki-loader.ts`
3. Resolves media paths via `media-resolver.ts`
4. Generates static HTML pages
5. Output: `site/dist/` (deployable anywhere)

### Step 4: Preview (`/site-preview`)

Runs Astro dev server for local preview.

## Site Architecture

### Pages

| Page | Route | Content |
|---|---|---|
| Landing | `/` | Project title, logline, character portrait grid |
| Character portal | `/characters/[slug]` | Hero, voice, music, locations, relationships, dark side, mood reel |
| Location | `/locations/[slug]` | Atmosphere image, ambient audio, inhabitants, description |

### Navigation Model

Characters are the entry point. Click a portrait → their world opens. From any character:
- Locations they inhabit (clickable tiles)
- Relationships with other characters (clickable links)
- Back to landing

Audio persists across page navigations via View Transitions.

### Visibility Modes

| Mode | Behavior |
|---|---|
| `private` | All wiki content visible — for internal development |
| `public` | Filtered by `visibility` settings — for pitch/presentation |

In public mode, sections like Ghost/Lie, Dark Side, and mood reels can be hidden.

## Deployment

Build output is a static site at `site/dist/`. Deploy to any static host: Vercel, Netlify, Cloudflare Pages, S3.
