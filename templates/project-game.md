# Game Project Template

Standard wiki structure for an interactive narrative game project. Copy this structure when creating a new game project under `wiki/projects/`.

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
│   ├── [character].md     # Per character — all dramatic units
│   └── player-character.md # Player character specifics (if applicable)
├── world.md               # Story world, sub-worlds, sensory design
├── tone.md                # Genre, tonal range, reference works, policies
├── narrative/
│   ├── _overview.md       # Narrative architecture overview
│   ├── critical-path.md   # Core story spine (mandatory beats)
│   ├── branches.md        # Major branching points and their consequences
│   ├── choices.md         # Choice design document
│   └── validation.md      # Structure validation against quality gates
├── pitch.md               # Logline, synopsis, character pages, USP
└── log/                   # Work log, evaluation reports
```

---

## File Templates

### _index.md

```markdown
# [PROJECT NAME]

**Medium:** Game (Interactive Narrative)
**Genre:** [Genre]
**Platform:** [Target platforms]
**Narrative Type:** [Linear with choices / Branching / Open world / Systemic]
**Status:** [Current phase]

## Logline
[One sentence — player role + central conflict + stakes]

## Characters

| Character | Type (Pri/Sec) | Facet | Player Relation | Status |
|---|---|---|---|---|
| [Name] | [Enneagram] | [Facet] | Protagonist/NPC/Companion/etc. | [status] |

## Entity Status

| Entity | Status | Last Updated | Notes |
|---|---|---|---|
| Impulse | | | |
| Research | | | |
| Theme | | | |
| Characters | | | |
| World | | | |
| Tone | | | |
| Narrative | | | |
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

## Ludonarrative Check
[Are mechanics and narrative aligned? Where do they diverge?]

## What Works
[Brief]

## Recommendations
1. [Recommendation]
```

### characters/player-character.md

```markdown
# Player Character: [NAME or ROLE]

**Enneagram:** [If fixed — or "Player-defined" if the player shapes personality]
**Agency Model:** [Fixed character / Blank slate / Defined character with player choices]

## Baseline Identity
[What is true about this character regardless of player choice]

## Player-Defined Axes
[What the player can shape through choices]

| Axis | Spectrum | How Expressed |
|---|---|---|
| [e.g., Method] | [Violent <-> Diplomatic] | [Dialogue, combat, world reaction] |
| [e.g., Loyalty] | [Faction A <-> Faction B] | [Missions, alliances, endings] |

## Ghost (if fixed)
[The wound that exists before the player takes control]

## Want (player-facing)
[The goal the game communicates to the player]

## Need (hidden)
[What the narrative reveals through play — the truth the game is about]

## Crucible
[How pursuing the Want through different play styles creates different costs]
```

### narrative/critical-path.md

```markdown
# Critical Path: [PROJECT NAME]

The mandatory story spine. Every player experiences these beats regardless of choices.

## Beats

| # | Beat | What Happens | What It Reveals | Player Agency |
|---|---|---|---|---|
| 1 | Opening | | | [None / Choice / Exploration] |
| 2 | Inciting Incident | | | |
| 3 | First Major Choice | | | [Choice with consequences] |
| ... | | | | |
| N | Climactic Choice | | | [Defines ending] |
| N+1 | Resolution | | | [Varies by path] |

## Bottleneck Points
[Where branches converge — and what state the player must be in]

| Bottleneck | After Branch | Required State | How Achieved |
|---|---|---|---|
| | | | |
```

### narrative/branches.md

```markdown
# Branching Architecture: [PROJECT NAME]

## Branch Map

```
[Critical Path Beat] ─── Choice A ─── [Consequences] ─── [Converge at...]
                    └── Choice B ─── [Consequences] ─── [Converge at...]
                    └── Choice C ─── [Consequences] ─── [Converge at...]
```

## Major Branches

### Branch: [Name]
**Trigger:** [What choice/event creates this branch]
**Duration:** [How long before convergence]
**Theme facet:** [Which facet of the value conflict this branch explores]
**Unique content:** [What the player sees ONLY on this branch]
**Convergence:** [How and where it rejoins the critical path]
**World state changes:** [What persists after convergence]
```

### narrative/choices.md

```markdown
# Choice Design: [PROJECT NAME]

## Design Principles
- Every major choice reflects the value conflict from the theme
- No obvious "right" answer — incompatible goods, not good vs. evil
- Consequences are visible within 1-2 play sessions
- At least one choice has delayed detonation (Dangling Cause pattern)

## Major Choices

### Choice: [Name]
**Location:** [Where in the critical path / which branch]
**Presentation:** [How the player encounters the choice — dialogue, action, environmental]
**Options:**

| Option | Facet Alignment | Immediate Consequence | Delayed Consequence |
|---|---|---|---|
| A | [Facet] | | |
| B | [Facet] | | |

**Why it's a dilemma:** [What makes this genuinely difficult — what the player loses either way]
**Ludonarrative integration:** [How mechanics reinforce the weight of this choice]
```

### Character files use the same core template as TV (see `templates/project-tv.md`), with the addition of player-interaction notes per character (how the player can affect this character's arc).
