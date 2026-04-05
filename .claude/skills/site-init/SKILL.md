---
name: site-init
description: Scaffold Astro website project — creates site/ directory with pages, components, and config bound to a project wiki
disable-model-invocation: true
argument-hint: [project-name]
allowed-tools: Read Write Edit Grep Glob Bash Agent
---

# /site-init — Scaffold Website

Initialize the Astro static site for a project.

## Project

The project is `$ARGUMENTS`. If no argument, ask.

## What To Do

If `site/` already exists and is configured for this project, report that and stop.

If `site/` doesn't exist:
1. Spawn the `site-builder` agent with:
   - Task: Scaffold the Astro project
   - Project: `$ARGUMENTS`
   - Wiki path: `wiki/projects/$ARGUMENTS`
2. The agent will:
   - Run `npm create astro@latest site -- --template minimal --no-install --no-git --typescript strict`
   - Install dependencies (`gray-matter`, `marked`, `vitest`, `tsx`)
   - Create all source files (layouts, pages, components, lib, styles)
   - Create `site-config.json` bound to the project
   - Verify build: `cd site && npm run build`

If `site/` exists but is configured for a different project:
1. Update `site/site-config.json` to point to `$ARGUMENTS`
2. Rebuild: `cd site && npm run build`
