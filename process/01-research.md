# 01 RESEARCH — Web Research Process

## Purpose

Transform the raw impulse into documented, sourced research material across 5 dimensions. Research grounds the entire project in reality — without it, everything downstream is generic.

---

## Five Dimensions of Research

Every research plan must cover ALL five dimensions:

### 1. Human Core Conflicts
Value conflicts, dilemmas, ambivalence. Where do real people face impossible choices? What values collide in this world? Who is forced to choose between two goods — or two evils?

### 2. Character Raw Material
Real people, power structures, psychological patterns. Who inhabits this world? What are their daily routines, their hierarchies, their unspoken rules? What psychological patterns emerge from living under these conditions?

### 3. Structures and Rules
Places, power dynamics, boundaries, laws. What are the physical and institutional constraints? Who controls what? Where are the borders — geographic, social, legal — and what happens when someone crosses them?

### 4. Tone and References
Atmosphere, speech registers, genre feel. How do people in this world actually talk? What does this environment look, smell, sound like? What existing works have captured something adjacent?

### 5. Turning Points and Escalation
Events, escalation logic, consequences. What real events demonstrate how situations in this world escalate? What is the logic of consequences? How does a small transgression become catastrophic?

---

## Steps

### Step 1: Read Impulse, Create Research Plan

Read `wiki/projects/[PROJECT]/impulse.md`. Identify the core territory — the world, the people, the tensions the impulse suggests. Create a research plan that maps all 5 dimensions to this specific territory.

### Step 2: Define 5–7 Life Realities

Extract 5–7 distinct life realities from the impulse. These are NOT character concepts — they are perspectives on the world:

- **Protagonist perspectives** — People who act within this world, who have agency and make choices
- **Victim perspectives** — People who are affected, constrained, or destroyed by the forces at play
- **Gray zone perspectives** — People who are both — complicit and suffering, enabling and trapped

Each life reality = a lens through which to research the world.

**Example:** For a series about organ trafficking —
- Surgeon who performs illegal transplants (protagonist)
- Patient on the waiting list (victim)
- Donor family pressured into consent (gray zone)
- Hospital administrator who looks away (gray zone)
- Black market broker (protagonist)
- Recipient who doesn't ask questions (gray zone)

### Step 3: Research Each Life Reality via WebSearch

For each life reality, conduct targeted web research. Search for:
- Journalistic investigations, longform reporting
- Court documents, legal cases
- Academic studies, sociological research
- First-person accounts, interviews, documentaries
- Statistics that reveal scale and patterns

**Use WebSearch, not LLM knowledge.** The point is to find what you don't already know.

### Step 4: Document Findings

Per find, document:
- **URL** — Full source URL
- **Key Facts** — 3-5 concrete facts, details, or quotes
- **Dramatic Potential** — How could this become a scene, a character trait, a plot point?
- **Core Find marker** — If it meets Core Find criteria, mark with ⚡

### Step 5: Identify Core Finds

A finding qualifies as a **Core Find** (⚡) when it scores ≥3 of the following:

| Criterion | Question |
|-----------|----------|
| **Stakes** | Are real consequences at play — loss, destruction, transformation? |
| **Conflict** | Does this create genuine opposition between characters or values? |
| **Visibility** | Can this be shown — is it concrete, physical, observable? |
| **Escalation** | Does this have built-in escalation logic — can it get worse? |
| **Individual** | Does this attach to a specific person or situation, not just a system? |

---

## Quality Gate

Before completing research, verify:

- [ ] All 5 dimensions covered (core conflicts, character material, structures, tone, escalation)
- [ ] All life realities researched (5-7, covering protagonist + victim + gray zone)
- [ ] Sources from web research, NOT from LLM general knowledge
- [ ] URLs documented for every finding
- [ ] Core Finds marked with ⚡ (minimum 5 across all life realities)
- [ ] Findings are CONCRETE — names, places, numbers, details — not abstract summaries
- [ ] Each life reality has at least one Core Find

---

## Output

Directory: `wiki/projects/[PROJECT]/research/`

### `_index.md`
- Research plan overview
- List of life realities with one-line descriptions
- Summary of Core Finds with cross-references

### Individual files per life reality
- `[life-reality-slug].md` — All findings for that perspective
- Each finding: URL, key facts, dramatic potential, Core Find marker if applicable

---

## Anti-Patterns

- **Generic summaries** — "Organ trafficking is a global problem" is not research. A specific case in a specific hospital is.
- **LLM knowledge dressed as research** — If there's no URL, it's not research.
- **All protagonist, no victim** — If every life reality has agency, the power dynamics are invisible.
- **Abstract dimensions** — "The psychological toll" is not a finding. "Nurse X developed PTSD after witnessing Y" is.
