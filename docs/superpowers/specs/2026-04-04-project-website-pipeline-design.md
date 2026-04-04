# Project Website Pipeline — Design Spec

## Overview

Extend Story Architect with a two-phase pipeline that transforms a project's wiki into an immersive, character-driven static website with generated multimedia assets (image, audio, video).

**Audience model:** Hybrid — internal exploration tool during development, configurable for external pitch/presentation via public/private mode.

## Architecture

Two-phase pipeline with a reviewable checkpoint between phases.

```
Wiki (source of truth)
  → Phase 1: Media Director (asset planning + generation via fal MCP)
  → Phase 2: Site Builder (Astro static site generation)
  → dist/ (deployable)
```

### Phase 1 — Media Generation

The `media-director` agent reads the project wiki and produces a `media-manifest.json` — a complete plan of every asset to generate, with model choices, prompts, and output paths. The user reviews and optionally edits this manifest before generation begins.

On approval, the agent executes generation via the fal MCP server, tracking status per-asset. Generation is incremental: only pending/failed items are processed on re-run.

### Phase 2 — Static Site Build

An Astro-based static site generator in `site/` reads wiki markdown files and the `media/` directory. No AI calls — pure templating and build. Outputs a deployable static site to `dist/`.

A `site-config.json` controls theme, navigation structure, and public/private visibility mode.

## Site Experience

### Landing Page

Dark, atmospheric full-viewport page. Project title, logline, and character portraits arranged as circular entry points. Background ambient audio (main theme) plays on interaction. Minimal chrome — the site feels like entering the world, not reading a document.

### Character Portal (primary navigation)

Clicking a character opens their world:

- **Portrait + Hero** — generated image, name, defining quote, Want/Need extracted from wiki
- **Voice Sample** — TTS-generated dialogue in character voice, playable inline
- **Their World** — locations they inhabit as clickable tiles with atmosphere images and ambient audio
- **Relationships** — collision pairs, allies, rivals — clickable links to other character pages
- **Dark Side Ladder** — 5-stage escalation visualized
- **Mood Reel** — short generated video capturing the character's essence

### Navigation Model

The site is a graph traversed through people. From any character page, the user can reach:
- Locations (shared across characters — clicking a location shows who inhabits it)
- Other characters (via relationships)
- Back to the landing page

Audio persists across page navigations via Astro View Transitions (available since Astro 3.x). The `AmbientController` component lives in the `BaseLayout` and survives route changes using `transition:persist`. On navigation, audio crossfades between the current track and the target page's audio (main theme → character theme → location ambient).

### Location Pages

Clicking a location tile from a character page opens a location page showing:
- **Atmosphere image** — full-width hero
- **Ambient audio** — auto-plays on entry
- **Inhabitants** — which characters are connected to this location (clickable back to their pages)
- **Description** — extracted from `world.md` sub-world section

## Media Manifest

Located at `wiki/projects/[PROJECT]/media-manifest.json`.

### Structure

```json
{
  "project": "project-slug",
  "tone_directive": "Derived from tone.md — visual/audio direction in one sentence",
  "style_seed": "Appended to every image prompt for visual coherence",
  "assets": [
    {
      "entity": "characters/elena",
      "type": "portrait",
      "model": "fal-ai/flux-pro/v1.1",
      "prompt": "Full image generation prompt derived from character description + tone",
      "negative_prompt": "What to avoid",
      "output": "media/characters/elena/portrait.webp",
      "status": "pending"
    }
  ]
}
```

### Fields

- **`tone_directive`**: One sentence derived from `tone.md`. Governs the overall visual and audio direction.
- **`style_seed`**: Appended to every image generation prompt. Ensures visual coherence across all generated images.
- **`assets[]`**: Array of asset definitions, each with:
  - `entity`: Wiki entity path (e.g., `characters/elena`, `locations/the-harbor`)
  - `type`: Asset type — `portrait`, `voice`, `theme_music`, `mood_reel`, `atmosphere`, `ambient`, `og_image`
  - `model`: fal model identifier
  - `prompt`: Generation prompt, derived from wiki content
  - `negative_prompt`: (images only) What to avoid
  - `voice_params`: (voice only) Tone, accent, pacing directives
  - `output`: Relative path within the project directory
  - `status`: `pending` | `generating` | `done` | `failed` | `skipped` | `override`

### Status Flow

- `pending` → `generating` → `done` (successful generation)
- `pending` → `generating` → `failed` (generation error, retryable)
- `pending` → `skipped` (user marked skip before generation)
- `done` → `override` (user replaced generated file with hand-picked asset)

### Asset Types Per Entity

| Entity | Assets | fal Models |
|--------|--------|------------|
| Character | portrait, voice sample, theme music, mood reel | flux-pro (image), playai/tts (voice), stable-audio (music), minimax-video (video) |
| Location | atmosphere image, ambient audio | flux-pro (image), stable-audio (audio) |
| Project | main theme music, mood reel, og-image | stable-audio (music), minimax-video (video), flux-pro (image) |

### Override Mechanism

Any generated asset can be replaced by placing a file at the same output path and setting the manifest status to `override`. The site builder treats all assets identically regardless of origin.

## Media Directory Structure

```
wiki/projects/[PROJECT]/media/
├── characters/
│   ├── [name]/
│   │   ├── portrait.webp
│   │   ├── voice-sample.mp3
│   │   ├── theme-music.mp3
│   │   └── mood-reel.mp4
│   └── .../
├── locations/
│   ├── [name]/
│   │   ├── atmosphere.webp
│   │   └── ambient.mp3
│   └── .../
├── atmosphere/
│   ├── main-theme.mp3
│   ├── mood-reel.mp4
│   └── og-image.webp
└── media-manifest.json  ← NOT here, lives at project root (see above)
```

Note: `media-manifest.json` lives at `wiki/projects/[PROJECT]/media-manifest.json` (project root level), not inside the `media/` directory. It governs media but is not itself a media asset.

## New Agents

### media-director

Added to `.claude/agents/media-director.md`.

**Frontmatter:**
```yaml
---
name: Media Director
description: Reads project wiki, derives visual/audio prompts, writes media manifest, generates assets via fal MCP
tools: [fal MCP: search_models, get_model_schema, get_pricing, run_model, submit_job, check_job, upload_file]
model: sonnet
---
```

**Role:** Reads the project wiki, derives visual and audio prompts from narrative content, writes the media manifest, and executes generation via fal MCP.

**Inputs:** All entity files in `wiki/projects/[PROJECT]/`, especially `tone.md` for style direction and character files for descriptive material.

**Outputs:** `media-manifest.json` and generated assets in `media/`.

**Behavior:**
1. Read all wiki entities for the project
2. Read `tone.md` to derive `tone_directive` and `style_seed`
3. For each entity, determine required assets based on type
4. Derive prompts from character descriptions, location details, and tone
5. Select appropriate fal models per asset type
6. Write `media-manifest.json`
7. Present manifest to user for review
8. On approval, generate all pending assets
9. Update status per-asset as generation completes

### site-builder

Added to `.claude/agents/site-builder.md`.

**Role:** Maintains the Astro static site project. Reads wiki markdown and media directory. Generates/updates pages and components. Handles build and configuration.

**Inputs:** `wiki/projects/[PROJECT]/`, `media/`, `site-config.json`

**Outputs:** `site/` (Astro source), `dist/` (deployable static site)

**Tools:** File I/O, Bash (Astro CLI, npm)

## Site Configuration

Located at `site/site-config.json`.

```json
{
  "project": "project-slug",
  "wiki_path": "../wiki/projects/project-slug",
  "mode": "private",
  "title": "Project Title",
  "logline": "One-sentence logline",
  "theme": {
    "palette": "derived-from-tone",
    "font": "system"
  },
  "audio": {
    "autoplay": false,
    "ambient": true
  },
  "visibility": {
    "dark_side": true,
    "ghost_lie": true,
    "relationships": true,
    "mood_reels": true
  }
}
```

- **`mode`**: `private` (full wiki content visible) or `public` (filtered through `visibility` settings)
- **`visibility`**: Per-section toggles for what appears in public mode. Internal development fields (Ghost, Lie, Dark Side internals) can be hidden for pitch audiences.
- **`audio`**: Controls ambient audio behavior

## New Commands

| Command | Action |
|---------|--------|
| `/site-init` | Scaffolds the Astro project in `site/`, creates `site-config.json` with defaults, installs dependencies |
| `/media-plan` | Spawns `media-director` → reads wiki → writes `media-manifest.json` for review |
| `/media-generate` | Executes all pending items in the manifest via fal MCP |
| `/media-generate [entity]` | Generates assets for a single entity (e.g., `/media-generate characters/elena`) |
| `/site-build` | Runs Astro build → reads wiki + media → outputs to `dist/` |
| `/site-preview` | Runs Astro dev server for local preview |
| `/site-deploy` | Deploys `dist/` to configured target |

## Typical Workflow

1. Develop project normally using existing agents (characters, world, tone, etc.)
2. `/site-init` — one-time Astro scaffold
3. `/media-plan` — review the manifest, tweak prompts if needed
4. `/media-generate` — generate all assets via fal
5. Review assets, swap any with hand-picked files (set status to `override`)
6. `/site-build` — compile static site
7. `/site-preview` — check locally
8. `/site-deploy` — push live

Wiki changes → re-run `/media-plan` (updates manifest for changed entities) then steps 4-7.

## Astro Site Structure

```
site/
├── astro.config.mjs
├── package.json
├── site-config.json
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro        # Dark immersive shell, audio controller
│   ├── pages/
│   │   ├── index.astro             # Landing page — title + character grid
│   │   ├── characters/
│   │   │   └── [slug].astro        # Character portal — dynamic route
│   │   └── locations/
│   │       └── [slug].astro        # Location page — atmosphere, inhabitants
│   ├── components/
│   │   ├── CharacterCard.astro     # Portrait circle on landing
│   │   ├── AudioPlayer.astro       # Inline audio player (voice, music)
│   │   ├── VideoPlayer.astro       # Mood reel player
│   │   ├── LocationTile.astro      # Clickable location with atmosphere
│   │   ├── RelationshipMap.astro   # Character connections
│   │   ├── DarkSideLadder.astro    # 5-stage escalation visualization
│   │   └── AmbientController.astro # Background audio with crossfade
│   ├── styles/
│   │   └── global.css              # Immersive dark theme, typography
│   └── lib/
│       ├── wiki-loader.ts          # Reads + parses wiki markdown at build time
│       └── media-resolver.ts       # Resolves entity → media paths
├── public/
│   └── media/                      # Copied from wiki media/ during build
└── dist/                           # Build output
```

## Technology Choices

- **Astro** — static site generator with content collections, markdown support, zero JS by default, islands for interactive components
- **fal MCP** — unified API for image (flux-pro), audio (stable-audio, playai/tts), and video (minimax-video) generation
- **No database** — wiki markdown is the CMS
- **No framework runtime** — vanilla JS islands only where needed (audio player, video player)
- **Astro View Transitions** — for persistent audio across page navigations

## wiki-loader.ts Contract

The wiki loader reads markdown files from the project wiki at Astro build time and returns structured data.

**Character files** (`wiki/projects/[P]/characters/[name].md`): Parsed by heading sections. Expected sections: `## Ghost`, `## Lie`, `## Want`, `## Need`, `## Crucible`, `## Fears`, `## Dark Side`, `## Life Lessons`, `## Paradox`, `## Here and Now`. Each section's content is extracted as markdown text. The character's name is derived from the filename (slug).

**Location data** (`wiki/projects/[P]/world.md`): Parsed by `## Sub-Worlds` section, then by `### [Location Name]` subsections. Each location gets a slug derived from its heading.

**Relationships**: Extracted from `wiki/projects/[P]/_ensemble.md` — collision pairs and relationship descriptions parsed from the ensemble table/list.

**Missing/incomplete entities**: The loader handles draft-status files gracefully. If a section heading exists but has no content, the field is `null`. If an entire file is missing, the entity is excluded from the build (no build failure). The site displays only what exists.

**Frontmatter**: Character and entity files may optionally include YAML frontmatter with metadata (e.g., `quote`, `facet`, `enneagram_type`). If present, it's merged into the entity data.

## media-resolver.ts Contract

Reads `media-manifest.json` and provides a lookup function: `resolve(entity: string, type: string) → string | null`.

- Maps entity + asset type to the output path from the manifest
- Returns `null` for missing assets, failed generation, or skipped items
- The site builder uses this to conditionally render media components (no portrait → no portrait section, no mood reel → no video player)

## Incremental Generation

Incremental means **manifest-status-driven only**. The system does not automatically detect wiki content changes.

- Re-running `/media-generate` processes only `pending` and `failed` items
- If wiki content changes (e.g., a character description is reworked), the user re-runs `/media-plan` which produces a new manifest. The media-director compares against existing assets and marks changed entities as `pending` while preserving `done`/`override` status for unchanged entities.
- Manual override: set any item's status back to `pending` to force regeneration

## Deployment

`/site-deploy` is out of scope for the initial implementation. The build outputs to `dist/` which can be manually deployed to any static hosting provider (Vercel, Netlify, Cloudflare Pages, S3, rsync). A future iteration may add deploy target configuration.

## Integration with Existing System

The website pipeline is additive. No changes to existing agents or processes.

- The `media-director` agent is listed in the agent table under a new "Media" area
- The `site-builder` agent is listed under a new "Website" area
- New commands are documented in CLAUDE.md alongside existing commands
- The critic agent's scope does not extend to media/site — these are presentation concerns, not narrative ones
