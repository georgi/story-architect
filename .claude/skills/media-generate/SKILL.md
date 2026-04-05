---
name: media-generate
description: Generate pending media assets via fal AI — processes all pending/failed items in the media manifest
disable-model-invocation: true
argument-hint: [project-name or entity]
allowed-tools: Read Write Edit Grep Glob Bash Agent
---

# /media-generate — Generate Media Assets

Generate assets from the media manifest via fal MCP.

## Arguments

- `/media-generate demo` — generate all pending assets for project "demo"
- `/media-generate demo characters/elena` — generate only Elena's assets

If no argument, check `site/site-config.json` for current project.

## What To Do

1. Read `wiki/projects/[PROJECT]/media-manifest.json`
2. If an entity filter was provided (second argument), only process assets matching that entity
3. Spawn the `media-director` agent with:
   - Task: Generate all assets with status `pending` or `failed`
   - Use fal MCP tools: `run_model` for images/audio, `submit_job` + `check_job` for video
   - Update manifest status to `generating` → `done` or `failed` per asset
   - Save each generated file to the `output` path
4. Report results: how many generated, how many failed, total cost if available

## Prerequisites

- `media-manifest.json` must exist (run `/media-plan` first)
- fal MCP must be configured with API key
