# 04 CHARACTER SYNTHESIS — Overview

## Purpose

Transform each facet + Enneagram type assignment into a fully realized dramatic character. Character synthesis uses a four-agent chain, each responsible for specific dramatic units.

---

## The 9+1 Dramatic Units

Every character in the ensemble requires these units:

| # | Unit | Definition | Agent |
|---|------|------------|-------|
| 1 | **Ghost** | The formative event that made the character who they are. Source of the Lie. Not backstory — the WOUND that still bleeds. | ghost-lie |
| 2 | **Lie** | The false belief / behavioral pattern. The character's coping strategy against the Core Fear. How they misread the world. | ghost-lie |
| 3 | **Want** | Conscious external goal. What the character actively pursues. Drives the A-Story. | want-need |
| 4 | **Need** | Unconscious inner deficit. What the character actually lacks. Drives the B-Story. | want-need |
| 5 | **Crucible** | The mechanism by which pursuing the Want actively prevents fulfilling the Need. Want ⇄ Need opposition. | want-need |
| 6 | **Fears** | Core Fear + Secret Shame. The deepest fear beneath the fear. The conviction about themselves that must be hidden. | abyss |
| 7 | **Dark Side** | Behavior under maximum pressure. Concrete actions when all strategies fail. The character's worst version. | abyss |
| 8 | **Paradox** | ONE trait that is simultaneously the character's greatest strength AND greatest weakness. | abyss |
| 9 | **Here and Now** | Visible, playable characterization. Appearance, habits, quirks, contradictions. Who they are when we meet them. | manifestation |
| 10 | **Event Building Blocks** | GAP, CATCH, Fatal Flaw, Self-Revelation, Dark Side Ladder. Structural hooks for plot integration. | manifestation |

---

## Recommended First-Pass Order

For a NEW character, the recommended sequence:

### Pass 1: Ghost + Lie → `ghost-lie` agent
**Inputs:** Facet position, Enneagram primary type, research material
**Creates:** Ghost (the formative event), Lie (the false belief)
**Key rule:** Ghost must be SPECIFIC — a scene, not a summary. Lie must be BEHAVIORAL — observable, not internal monologue.

### Pass 2: Want + Need + Crucible → `want-need` agent
**Inputs:** Ghost, Lie, facet position, research material
**Creates:** Want (external goal), Need (inner deficit), Crucible (Want blocks Need)
**Key rule:** Want must be ACTIVE — something the character does, not feels. Crucible must be MECHANICAL — pursuing Want makes Need worse, structurally.

### Pass 3: Fears + Dark Side + Paradox → `abyss` agent
**Inputs:** Ghost, Lie, Want, Need, Enneagram primary type
**Creates:** Fears (Core Fear + Secret Shame), Dark Side (behavior under pressure), Paradox (strength = weakness)
**Key rule:** Dark Side must be CONCRETE ACTIONS — not "becomes cruel" but what they specifically DO. Paradox must be ONE trait, not two traits in opposition.

### Pass 4: Here and Now + Ensemble → `manifestation` agent
**Inputs:** All previous units, ensemble context, world material
**Creates:** Here and Now (visible characterization), Event Building Blocks, ensemble positioning
**Key rule:** Here and Now must be PLAYABLE — an actor could perform it. Event Building Blocks must generate plot, not describe arc.

---

## After First Pass: Independent Revision

After the first pass, there is no required order. Any unit can be revised independently:

- Ghost feels generic → re-run ghost-lie agent with sharper research material
- Dark Side is too mild → re-run abyss agent with instruction to escalate
- Want doesn't create enough plot → re-run want-need agent
- Ensemble collision is missing → re-run manifestation agent for specific pair

**The character file is a living document.** Each section is independently editable.

---

## Shared Resources

| Resource | Location | Contains |
|----------|----------|----------|
| Character Rules | `shared/character-rules.md` | Rules that apply to ALL character agents |
| Event Generators | `shared/event-generators.md` | GAP, CATCH, Fatal Flaw, Self-Revelation, Dark Side Ladder definitions |
| Quality Gates | `shared/quality-gates.md` | Gate 2b — character quality criteria |

All character agents read these shared files before execution.

---

## Character File Structure

Each character gets: `wiki/projects/[PROJECT]/characters/[character-name].md`

```
# [Character Name]

## Meta
- Facet: [which facet they embody]
- Primary Type: [Enneagram number]
- Secondary Type: [Enneagram number]
- Arc Type: [to be assigned in season/structure phase]

## Ghost
[The formative event — a scene, not a summary]

## Lie
[The false belief — behavioral, observable]

## Want
[Conscious external goal — active, concrete]

## Need
[Unconscious inner deficit]

## Crucible
[How Want blocks Need — mechanical opposition]

## Fears
### Core Fear
[The deepest fear beneath the fear]
### Secret Shame
[The conviction about themselves they hide]

## Dark Side
[Concrete behaviors under maximum pressure]

## Paradox
[ONE trait: strength AND weakness]

## Here and Now
[Visible, playable characterization]

## Event Building Blocks
### GAP
### CATCH
### Fatal Flaw
### Self-Revelation
### Dark Side Ladder

## Ensemble
### Collision Pairs
### Relationship Map
```

---

## Quality Gate Reference

See `shared/quality-gates.md` — Gate 2b for full character quality criteria.

Key checks:
- [ ] Ghost is a specific scene, not a category of experience
- [ ] Lie is behavioral and observable
- [ ] Want is active and concrete (could be filmed)
- [ ] Need is unconscious (character doesn't know it)
- [ ] Crucible is mechanical (Want pursuit worsens Need deficit)
- [ ] Fears include BOTH Core Fear and Secret Shame
- [ ] Dark Side is concrete actions, not adjectives
- [ ] Paradox is ONE trait, not two
- [ ] Here and Now is playable (an actor could do it)
- [ ] All units trace back to facet position AND Enneagram type
- [ ] Concreteness Mandate: no sentence that could appear in an essay
