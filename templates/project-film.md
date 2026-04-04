# Film Project Template

Standard wiki structure for a feature film project. Copy this structure when creating a new film project under `wiki/projects/`.

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
├── structure/
│   ├── sequences.md       # 8-sequence breakdown
│   ├── arc.md             # Protagonist arc across the film
│   └── validation.md      # Structure validation against quality gates
├── pitch.md               # Logline, synopsis, character pages, USP
└── log/                   # Work log, evaluation reports
```

---

## File Templates

### _index.md

```markdown
# [PROJECT NAME]

**Medium:** Feature Film
**Genre:** [Genre]
**Target Runtime:** [Minutes]
**Status:** [Current phase]

## Logline
[One sentence — protagonist + conflict + stakes]

## Characters

| Character | Type (Pri/Sec) | Facet | Role | Status |
|---|---|---|---|---|
| [Name] | [Enneagram] | [Facet] | Protagonist/Opponent/etc. | [status] |

## Entity Status

| Entity | Status | Last Updated | Notes |
|---|---|---|---|
| Impulse | | | |
| Research | | | |
| Theme | | | |
| Characters | | | |
| World | | | |
| Tone | | | |
| Structure | | | |
| Pitch | | | |
```

### _state.md

```markdown
# Project State: [PROJECT NAME]

**Last review:** [Date]
**Reviewer:** Critic Agent

## Critical Findings
1. [Finding]

## Backflow Queue
| Source Entity | Target Entity | Issue |
|---|---|---|
| | | |

## What Works
[Brief]

## Recommendations
1. [Recommendation]
```

### structure/sequences.md

```markdown
# Sequence Structure: [PROJECT NAME]

## Act I — Setup

### Sequence 1: [Title] (pp. 1-15)
**Purpose:** Establish protagonist's ordinary world and Want.
**Opening image:** [Visual that captures the pre-transformation state]
**Inciting incident:** [The event that disrupts the equilibrium]
**End of sequence:** [What has changed]

### Sequence 2: [Title] (pp. 15-30)
**Purpose:** Protagonist commits (or is forced into) the journey.
**First act turning point:** [The decision/event that ends Act I]
**End of sequence:** [Point of no return]

## Act II-A — Confrontation (Rising)

### Sequence 3: [Title] (pp. 30-45)
**Purpose:** New world, new rules, first attempts.
**End of sequence:** [First major setback or false victory]

### Sequence 4: [Title] (pp. 45-60)
**Purpose:** Stakes rise, allies and opponents clarify.
**Midpoint:** [Irreversible shift — false victory/defeat]
**End of sequence:** [Everything changes]

## Act II-B — Confrontation (Falling)

### Sequence 5: [Title] (pp. 60-75)
**Purpose:** Consequences of midpoint, pressure increases.
**End of sequence:** [Situation worsens]

### Sequence 6: [Title] (pp. 75-90)
**Purpose:** All is lost moment, protagonist faces the Lie.
**Second act turning point:** [The crisis that forces the climactic choice]
**End of sequence:** [Protagonist must choose]

## Act III — Resolution

### Sequence 7: [Title] (pp. 90-105)
**Purpose:** Climactic confrontation.
**Climactic choice:** [Want vs. Need — what does the protagonist choose?]
**Self-revelation:** [If applicable — psychological + moral recognition]
**End of sequence:** [The choice is made, consequences begin]

### Sequence 8: [Title] (pp. 105-120)
**Purpose:** New equilibrium.
**Closing image:** [Visual that captures the post-transformation state]
**End of sequence:** [Resolution]
```

### structure/arc.md

```markdown
# Protagonist Arc: [CHARACTER NAME]

## Arc Type
[Change / Growth / Fall / Flat — and why this type serves the story]

## Arc Stations

| Station | Sequence | Internal State | External Situation |
|---|---|---|---|
| Equilibrium | 1 | Lie intact, Want active | Ordinary world |
| Disruption | 2 | Lie challenged | Inciting incident |
| Testing | 3-4 | Lie reinforced or questioned | Rising action |
| Midpoint shift | 4 | Need becomes dimly visible | Irreversible change |
| Pressure | 5-6 | Lie cracking | Stakes at maximum |
| Crisis | 6 | Lie vs. truth | Must choose |
| Climax | 7 | Choice made | Action under pressure |
| Resolution | 8 | New state | Consequences |

## Key Turning Points
[Specific scenes/moments where the arc turns]

## Relationship to Theme
[How the protagonist's arc embodies the value conflict]
```

### Character files use the same template as TV (see `templates/project-tv.md`), minus the season-specific elements.
