---
name: media-plan
description: Create media manifest for a project — reads wiki, derives image/audio/video prompts, writes media-manifest.json for review before generation
disable-model-invocation: true
argument-hint: [project-name]
allowed-tools: Read Write Edit Grep Glob Bash Agent
---

# /media-plan — Create Media Manifest

Spawn the `media-director` agent to plan media assets for a project.

## Project

The project is `$ARGUMENTS`. If no argument given, check `site/site-config.json` for the current project, or ask.

## What To Do

1. Read `wiki/projects/$ARGUMENTS/tone.md` — derive `tone_directive` and `style_seed`
2. Read all character files in `wiki/projects/$ARGUMENTS/characters/`
3. Read `wiki/projects/$ARGUMENTS/world.md` for locations
4. Spawn the `media-director` agent with this context:
   - Project name: `$ARGUMENTS`
   - Task: Write `wiki/projects/$ARGUMENTS/media-manifest.json`
   - Include all entity assets (portraits, voice, music, mood reels for characters; atmosphere, ambient for locations; main theme + og-image for project)
5. Present the manifest to the user for review before any generation

## Output

`wiki/projects/$ARGUMENTS/media-manifest.json` — reviewable before spending on generation.
