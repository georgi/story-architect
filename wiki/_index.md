# Knowledge Base

Master index for the story-architect knowledge base. This wiki is a living document — nothing is ever finished. Every article can be revised when new understanding requires it.

---

## Dramaturgy (`dramaturgy/`)

Compiled dramaturgical expertise from 35+ craft books. These articles are the shared reference for all agents.

See: [dramaturgy/_index.md](dramaturgy/_index.md)

| Article | Status | Content |
|---|---|---|
| character-psychology.md | planned | 11 dramatic units, Emotional Toolbox, Nutshell Technique |
| enneagram-types.md | planned | 9 types with Ghost/Lie/Dark Side, Values Matrix, value redirect |
| story-structure.md | planned | McKee, Truby, Field, Calvisi, Miller compared |
| world-building.md | planned | Story World, sub-worlds, mise-en-scene |
| scene-craft.md | planned | 8-sequence structure, beat types, status dynamics |
| dialogue-voice.md | planned | Telecinematic discourse, speech profiles, linguistic fingerprinting |
| evaluation.md | planned | Quality gates, anti-sanitization, linting checklists |
| ensemble-design.md | planned | Theme embodiment, opponent network, collision pairs, POV management |

## TV (`tv/`)

Television-specific knowledge. See: [tv/_index.md](tv/_index.md)

| Article | Status | Content |
|---|---|---|
| serialization.md | planned | Serialization degrees, A/B/C plot hierarchy, season arc types |
| industry.md | planned | Market knowledge, pitch culture, co-production |

## Film (`film/`)

Feature film-specific knowledge. See: [film/_index.md](film/_index.md)

| Article | Status | Content |
|---|---|---|
| structure.md | planned | Three-act, sequence approach (Gulino), midpoint mechanics |
| industry.md | planned | Development, pitch culture, packaging |

## Game (`game/`)

Game narrative-specific knowledge. See: [game/_index.md](game/_index.md)

| Article | Status | Content |
|---|---|---|
| narrative-design.md | planned | Interactive storytelling, branching narrative, environmental storytelling |
| player-agency.md | planned | Choice design, consequence systems, ludonarrative harmony |

## Projects (`projects/`)

Per-project wikis. Each project has its own directory with standardized structure.

See templates:
- [TV project template](../templates/project-tv.md)
- [Film project template](../templates/project-film.md)
- [Game project template](../templates/project-game.md)

## Author Voice

| File | Status | Content |
|---|---|---|
| author-voice.md | template | Author's compiled voice profile — rhythm, vocabulary, imagery, worldview |

## Media & Website

Projects can generate immersive websites with AI-created multimedia assets.

| Component | Location | Purpose |
|---|---|---|
| media-manifest.json | `projects/[P]/media-manifest.json` | Asset generation plan — models, prompts, status per asset |
| media/ | `projects/[P]/media/` | Generated images, audio, video |
| site/ | Repository root `site/` | Astro static site generator |
| site-config.json | `site/site-config.json` | Theme, visibility mode, project binding |

**Pipeline:** Wiki entities → `media-director` agent → media-manifest.json → fal AI generation → media/ directory → Astro build → deployable static site

**Asset types:**

| Entity | Assets |
|---|---|
| Character | Portrait, voice sample, theme music, mood reel |
| Location | Atmosphere image, ambient audio |
| Project | Main theme, mood reel, OG image |

See: `process/09-media.md`, `process/10-site.md`

---

## Shared Framework (`shared/`)

Binding rules and tools used by all agents:

| File | Purpose |
|---|---|
| character-rules.md | Binding rules for all character agents |
| quality-gates.md | Mechanical pass/fail checklists per phase |
| event-generators.md | 7 dramatic mechanics for generating concrete events |
| eval-framework.md | Three-instrument evaluation methodology |
