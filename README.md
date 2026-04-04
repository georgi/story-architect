# Story Architect

An agent team system for developing character-driven narratives across TV, film, and games.

## What This Is

Story Architect is a structured framework for narrative development powered by AI agent collaboration. It combines dramaturgical expertise from 35+ craft books into a wiki-based knowledge system where specialized agents develop, critique, and refine story material iteratively.

The system produces pitch-ready narrative concepts: characters with psychological depth, thematic coherence, concrete world-building, and structurally sound arcs.

## Supported Mediums

- **Television** — Series bible development with season arc planning, serialization strategy, and ensemble design
- **Film** — Feature screenplay development with sequence architecture and protagonist arc tracking
- **Games** — Interactive narrative design with branching architecture, choice design, and player agency

The system can also generate **immersive project websites** — character-driven portals with AI-generated images, audio, and video that let you explore a project's world through its characters.

## Core Methodology

**Theme-first.** The value conflict is established before characters. Characters embody positions in that conflict — they don't discuss it, they live it.

**Character-driven.** Every character is built from a derivation chain: Enneagram psychology produces a Ghost, which produces a Lie, which drives a Want, which conceals a Need, which creates a Crucible. Forward only. No backward derivation.

**Wiki-based.** All project knowledge lives in a structured wiki. Every entity (character, theme, world, arc) is a living document that can be revised when another entity demands it.

**Critic-driven iteration.** After every significant work block, a critic agent reviews the entire project, identifies inconsistencies and weaknesses, and writes findings into a state file that drives the next round of work. There are no phases after the first pass — only entities being refined.

## Architecture

### Derivation Chain

```
Impulse (raw creative material)
    -> Research (concrete life realities)
        -> Theme (value conflict + facets)
            -> Characters (Enneagram -> Ghost -> Lie -> Want -> Need -> Crucible)
                -> World (sub-worlds embodying character inner states)
                    -> Tone (genre, references, policies)
                        -> Format (medium-specific structure)
                            -> Structure (arcs, plot, sequences)
                                -> Pitch (final distillation)
                                    -> Media (AI-generated portraits, voice, music, video)
                                        -> Website (immersive static site)
```

After the first pass, all entities are open simultaneously. The critic identifies what needs revision. Any entity can change any other.

### Agent Team

| Area | Agents | Function |
|---|---|---|
| Lead | Showrunner | Coordinates work, dispatches agents, makes creative decisions |
| Research | Web Research | Gathers concrete life realities |
| Theme | Philosopher, Type Assignment | Value conflict, facets, Enneagram mapping |
| Character | Ghost-Lie, Want-Need, Abyss, Manifestation | Build character units in sequence |
| World | World Builder | Sub-worlds, sensory design, power structures |
| Tone & Format | Tonality, Format | Genre, atmosphere, episode structure |
| Structure | Arc, Plot, Validation | Season/act/sequence architecture |
| Pitch | Pitch Writer | Final distillation for market |
| Media | Media Director | Plans and generates visual/audio assets via fal AI |
| Website | Site Builder | Builds immersive Astro static site from wiki + media |
| Quality | Critic, Dramaturg, Evaluator | Review, substance check, mechanical evaluation |
| Analysis | Synthesis Engine | Pattern-matching against prestige references |

### Iterative Loop

```
Agents write -> Wiki -> Critic reviews -> _state.md -> Showrunner reads -> Next assignment
     ^                                                                          |
     +--------------------------------------------------------------------------+
```

## How to Use

1. Open this repository as a workspace in Claude Code
2. The showrunner agent reads the knowledge base and guides the process
3. Use `/start` to begin a new project
4. Use `/continue` to resume work (triggers critic review first)
5. Use `/status` to see where the project stands
6. Use `/lint` for a full consistency check
7. Use `/media-plan` to create a media manifest (reviewable before generation)
8. Use `/media-generate` to generate images, audio, and video via fal AI
9. Use `/site-init` to scaffold the Astro website project
10. Use `/site-build` to compile the static site from wiki + media
11. Use `/site-preview` for local preview

## Repository Structure

```
story-architect/
├── shared/                    # Binding rules and frameworks
│   ├── character-rules.md     # Rules for all character agents
│   ├── quality-gates.md       # Mechanical pass/fail checklists
│   ├── event-generators.md    # 7 dramatic mechanics for event generation
│   └── eval-framework.md      # Three-instrument evaluation methodology
├── wiki/                      # Knowledge base
│   ├── _index.md              # Master index
│   ├── dramaturgy/            # Compiled dramaturgical expertise
│   ├── tv/                    # TV-specific knowledge
│   ├── film/                  # Film-specific knowledge
│   ├── game/                  # Game-specific knowledge
│   └── projects/              # Per-project wikis
│       └── [PROJECT]/
│           ├── media-manifest.json  # Asset generation plan
│           └── media/               # Generated images, audio, video
├── templates/                 # Project templates per medium
│   ├── project-tv.md
│   ├── project-film.md
│   └── project-game.md
├── site/                      # Astro static site generator
│   ├── src/
│   │   ├── pages/             # Landing, character portals, location pages
│   │   ├── components/        # Audio/video players, cards, dark side ladder
│   │   └── lib/               # Wiki loader, media resolver
│   └── site-config.json       # Theme, visibility, project binding
└── log/                       # System-level logs
```

## Knowledge Base Status

The `wiki/dramaturgy/` articles are planned but not yet populated. Each article needs to be compiled from source craft books. See `wiki/dramaturgy/_index.md` for the full list with source references.

## Website Pipeline

The `site/` directory contains an Astro static site generator that transforms a project's wiki into an immersive, character-driven portal. Characters are the entry point — click a portrait to explore their world, voice, relationships, and dark side.

**Two-phase process:**
1. **Media planning** (`/media-plan`) — the `media-director` agent reads the wiki and writes a `media-manifest.json` with AI generation prompts for portraits, voice samples, theme music, mood reels, and location atmospheres. Review and edit prompts before spending on generation.
2. **Site build** (`/site-build`) — the Astro site reads wiki markdown + generated media and outputs a deployable static site. No AI calls — pure templating.

Assets are generated via [fal.ai](https://fal.ai) MCP (image: Flux Pro, audio: Stable Audio + PlayAI TTS, video: MiniMax). Any generated asset can be replaced with a hand-picked file.
