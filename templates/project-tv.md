# TV Series Project Template

Standard wiki structure for a television series project. Copy this structure when creating a new TV project under `wiki/projects/`.

---

## Directory Structure

```
[PROJECT]/
├── _index.md              # Project overview, character table, entity status
├── _state.md              # Critic findings, backflow queue, recommendations
├── impulse.md             # Raw creative impulse — the seed material
├── research/
│   └── [life-reality].md  # One file per researched life reality
├── theme.md               # Value conflict, facets, Idea Battle
├── characters/
│   ├── _ensemble.md       # Ensemble overview, collision pairs, facet coverage
│   └── [character].md     # Per character — all dramatic units
├── world.md               # Story world, sub-worlds, sensory design
├── tone.md                # Genre, tonal range, reference works, policies
├── format.md              # Episode count, runtime, POV strategy, serialization
├── season/
│   ├── _overview.md       # Season synopsis, macro-movement
│   ├── arcs.md            # Character arcs across the season
│   ├── plot.md            # Episode-by-episode plot structure
│   └── validation.md      # Structure validation against quality gates
├── pitch.md               # Logline, synopsis, character pages, USP
├── media-manifest.json    # Asset generation plan (fal AI prompts + status)
├── media/                 # Generated multimedia assets
│   ├── characters/        # Portraits, voice samples, theme music, mood reels
│   ├── locations/         # Atmosphere images, ambient audio
│   └── atmosphere/        # Project-level assets (main theme, OG image)
└── log/                   # Work log, evaluation reports
```

---

## File Templates

### _index.md

```markdown
# [PROJECT NAME]

**Medium:** TV Series
**Genre:** [Genre]
**Status:** [Current phase]

## Logline
[One sentence — protagonist + conflict + stakes]

## Characters

| Character | Type (Pri/Sec) | Facet | Status |
|---|---|---|---|
| [Name] | [Enneagram] | [Facet] | [draft/reviewed/revised/stable] |

## Entity Status

| Entity | Status | Last Updated | Notes |
|---|---|---|---|
| Impulse | | | |
| Research | | | |
| Theme | | | |
| Characters | | | |
| World | | | |
| Tone | | | |
| Format | | | |
| Season | | | |
| Pitch | | | |
| Media | | | |
| Website | | | |
```

### _state.md

```markdown
# Project State: [PROJECT NAME]

**Last review:** [Date]
**Reviewer:** Critic Agent

## Critical Findings
[Ranked by severity — what is broken, what blocks progress]

1. [Finding]
2. [Finding]

## Backflow Queue
[Which entity must be revised because of another entity's development]

| Source Entity | Target Entity | Issue |
|---|---|---|
| | | |

## What Works
[Brief — what is solid and should not be touched without reason]

## Recommendations
[Prioritized — what to work on next and why]

1. [Recommendation]
2. [Recommendation]
```

### characters/[character].md

```markdown
# [CHARACTER NAME]

**Enneagram:** [Primary Type] / [Secondary Type]
**Facet:** [Theme facet this character embodies]
**Status:** [draft/reviewed/revised/stable]

## Ghost
[The formative wound or pattern — specific event or experience]

## Lie
[The false belief formed from the Ghost]

### Ghost->Lie Depth Test
[Why this jump is psychologically dense]

## Want
[Conscious goal driven by the Lie — concrete, visible, pursuable]

## Need
[What is truly missing — invisible to the character]

## Crucible
[How the Want actively prevents the Need]

## Fears
[From Enneagram — manifested in specific behaviors]

## Dark Side
[Escalation path — shown through actions, not described]

### Dark Side Escalation Ladder
| Stage | Pressure | Action | Cost |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Life Lessons
[What the arc could teach — not what the character explains]

## Paradox
[One sentence — the irreconcilable contradiction]

## Event Building Blocks
[GAP scenarios, CATCH, collision beats — concrete material for structure phase]

## Here and Now
[Current life situation, milieu, daily reality — concrete, sensory, specific]

## The Human Details
[Habits, ticks, quirks, contradictions — what makes this person irreplaceable]
```

### characters/_ensemble.md

```markdown
# Ensemble: [PROJECT NAME]

## Theme Facet Coverage

| Facet | Character | How They Embody It |
|---|---|---|
| | | |

## Collision Pairs

| Pair | Shared Element | Incompatible Methods |
|---|---|---|
| | | |

## Opponent Network

[Who opposes whom, and on what axis]

## Social Spectrum

[Which milieus, classes, professions are represented — and what is missing]
```

### theme.md

```markdown
# Theme: [PROJECT NAME]

## Value Conflict
**[Value A] vs. [Value B]**

[Why both are genuine values. Why they are irreconcilable in this world.]

## Facets

| Facet | Position in the Conflict | Embodied By |
|---|---|---|
| | | |

## Idea Battle
[How the facets collide — not in dialogue but in action and consequence]
```

### season/_overview.md

```markdown
# Season Overview: [PROJECT NAME]

## Season Thesis
[What this season is ABOUT — the specific question it asks through action]

## Macro-Movement
[Where the world/characters are at episode 1 vs. episode [N] — the transformation]

## Midpoint Shift
[The irreversible event at the season's center]

## Episodes

| # | Title | A-Plot | B-Plot | Key Turn |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
```
