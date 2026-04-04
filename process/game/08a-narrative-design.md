# 08a NARRATIVE DESIGN — Interactive Narrative Architecture (Game)

## Purpose

Design the narrative architecture for an interactive medium. Player agency introduces a fundamental shift: the Value Conflict is not just observed — it is EXPERIENCED through choices. Every branch is a different answer to the Value Conflict.

---

## Prerequisites

- `wiki/projects/[PROJECT]/characters/*.md` — All character files complete
- `wiki/projects/[PROJECT]/theme.md` — Value Conflict, facets, Message
- `wiki/projects/[PROJECT]/world.md` — Sub-worlds and Conflict World
- `wiki/projects/[PROJECT]/format.md` — Playtime, linearity degree, platform
- `shared/event-generators.md` — Event building block definitions

---

## Part 1: Narrative Architecture

### Architecture Type

Choose based on content, not convention:

| Type | Definition | Best For |
|------|-----------|----------|
| **Linear** | Single path, no branching. Player experiences a fixed story. | Character study, tightly plotted, atmospheric. |
| **Branching** | Major decision points create divergent paths. Multiple endings. | Value Conflict exploration, moral complexity. |
| **Hub-and-Spoke** | Central hub with radiating storylines. Player chooses order. | Ensemble-driven, world exploration, investigation. |
| **Open Narrative** | Emergent stories within a systemic world. Minimal scripted path. | Sandbox, simulation, player-driven drama. |

### Architecture Justification
- Why does THIS Value Conflict demand THIS architecture?
- How does the architecture serve player engagement with the theme?
- What is gained and lost compared to the alternatives?

### Structural Map
Define the high-level structure:
- **Chapter/Act count** (from format.md)
- **Critical path:** The minimum experience every player will have
- **Branch points:** Where the narrative diverges (if applicable)
- **Convergence points:** Where branches reconnect (if applicable)
- **Endings:** How many? What determines each? How do they relate to the Message?

---

## Part 2: Player Character Arc

### Defined vs. Player-Defined Protagonist

| Approach | Definition | Implications |
|----------|-----------|-------------|
| **Defined Protagonist** | Fixed character with Ghost, Lie, Want, Need. Player navigates WITHIN this psychology. | Stronger arc, less agency. Player shapes HOW, not WHO. |
| **Player-Defined Protagonist** | Blank or flexible character. Player CREATES the psychology through choices. | More agency, harder to control arc. Theme through consequences, not character. |
| **Hybrid** | Fixed Ghost and Lie. Player defines Want and behavioral style. | Balance of authored arc and player agency. |

### For Defined Protagonist:
- Map all 9+1 dramatic units to gameplay moments
- Ghost: revealed through environment, flashbacks, or NPC dialogue
- Lie: visible in dialogue options available to the player
- Want: drives the main quest objective
- Need: emerges through consequences of pursuing Want
- Crucible: the player FEELS the Want-Need opposition through gameplay friction
- Self-Revelation: a specific scene/moment (may be influenced by player choices)

### For Player-Defined Protagonist:
- Define the VALUE SPECTRUM available to the player (not good/evil — Value A/Value B)
- How do early choices establish the player's position in the Value Conflict?
- How do consequences reflect the player's position back to them?
- How does the ending respond to accumulated choices?

---

## Part 3: Branching and Consequences

### Maximum 3-5 Major Branches

More is not better. Each branch must be:
- **A genuinely different answer to the Value Conflict** (not a cosmetic variation)
- **Fully realized** (not a truncated version of the "main" path)
- **Consequential** (the world VISIBLY changes based on the choice)

### Per Major Branch Point:

| Element | Definition |
|---------|-----------|
| **The Choice** | What two (or three) options does the player face? |
| **Value Alignment** | Which value does each option serve? |
| **Immediate Consequence** | What happens right after the choice? |
| **Delayed Consequence** | What happens 2-3 chapters later because of this choice? |
| **Relationship Impact** | How does each option affect NPC relationships? |
| **World State Change** | How does the world visibly change? |
| **Irreversibility** | Why can't the player undo this? |

### Consequence Visibility
Players must SEE the impact of their choices:
- **Environmental changes:** The world looks different after major choices
- **NPC behavior shifts:** Characters remember and respond
- **Dialogue changes:** New options appear, old ones disappear
- **Narrative callbacks:** Later events explicitly reference earlier choices

### False Choice Prevention
A false choice looks like agency but changes nothing. Test every choice:
- Does the choice change at least one subsequent scene significantly?
- Does the choice affect at least one NPC relationship?
- Does the choice alter the world state in a visible way?
- If the answer to all three is NO → it's a false choice. Remove or redesign.

---

## Part 4: Ensemble in Interactive Narrative

### Companions (if applicable)
Companion characters as facet embodiments:
- Each companion represents a distinct facet of the Value Conflict
- Companion approval/disapproval reflects the player's position in the Value Conflict
- Companion arcs respond to player choices (not just companion-specific quests)
- Companion conflicts mirror the Value Conflict at personal scale

### Per Companion:
- Which facet do they embody?
- What triggers their approval? Disapproval?
- What is their personal arc?
- How does the player's main quest affect their arc?
- What happens if the relationship breaks?

### NPCs as Facet Embodiments
Non-companion NPCs also carry thematic weight:
- Major NPCs: embodied facets with their own wants and arcs
- Minor NPCs: ground the world in the Value Conflict through everyday behavior
- Opponents: the strongest antithesis facet, with genuine motivation

### Relationship System
How relationships work mechanically:
- What tracks relationship state? (Approval meter, narrative flags, behavioral memory)
- How do relationships affect available options?
- What are the relationship thresholds that trigger narrative changes?
- How do NPC-NPC relationships shift based on player actions?

---

## Part 5: Quest Structure

### Per Quest, Define:

| Element | Definition |
|---------|-----------|
| **Want** | What does the quest-giver (or player) want to achieve? |
| **Obstacle** | What stands in the way? |
| **Choice** | What decision does the player face within the quest? |
| **Consequence** | What happens based on the choice? |
| **Value Conflict Connection** | How does this quest connect to the main Value Conflict? |
| **Arc Connection** | How does completing this quest affect the protagonist's arc or a companion's arc? |

### Quest Types

| Type | Function | Example |
|------|----------|---------|
| **Main Quest** | Drives the protagonist's Want and the central Value Conflict | The primary mission/goal |
| **Companion Quest** | Develops a companion's arc and facet | Personal mission tied to companion's Ghost |
| **World Quest** | Grounds the Value Conflict in everyday life | Locals facing the same dilemma at smaller scale |
| **Discovery Quest** | Reveals lore that deepens understanding of the Value Conflict | Finding the history behind the current crisis |

### Environmental Storytelling
Not everything is quest-driven. The world itself tells the story:
- What do players find when exploring? (Letters, ruins, remnants, echoes)
- How does the environment reflect the Value Conflict?
- What stories exist only for players who look closely?

---

## Quality Gate

Before completing narrative design, verify:

- [ ] Architecture type chosen and justified from content
- [ ] Structural map with critical path, branch points, convergences, and endings
- [ ] Player character approach defined (defined/player-defined/hybrid) with full arc mapping
- [ ] Maximum 3-5 major branches, each a genuine answer to the Value Conflict
- [ ] Every branch point tested for false choice (changes scene + relationship + world state)
- [ ] Consequence visibility designed (environmental, NPC, dialogue, callbacks)
- [ ] Ensemble mapped as facet embodiments (companions + major NPCs)
- [ ] Relationship system defined with mechanical clarity
- [ ] Quest structure per quest (want, obstacle, choice, consequence, connections)
- [ ] Environmental storytelling designed
- [ ] Every ending reflects a position in the Value Conflict
- [ ] The Message is expressed through the CONSEQUENCE PATTERN, not through narration

---

## Output

File: `wiki/projects/[PROJECT]/narrative-design.md`

Sections:
1. Narrative Architecture (type, justification, structural map)
2. Player Character (approach, arc mapping, value spectrum)
3. Branching and Consequences (branch points, consequence design, false choice audit)
4. Ensemble (companions, NPCs, relationship system)
5. Quest Structure (main, companion, world, discovery quests)
6. Environmental Storytelling
7. Endings (how many, what determines each, Message expression)
