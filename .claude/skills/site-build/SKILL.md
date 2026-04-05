---
name: site-build
description: Build static site from wiki + media — copies media, runs Astro build, outputs to dist/
disable-model-invocation: true
allowed-tools: Bash Read
---

# /site-build — Build Static Site

Build the Astro site from current wiki and media state.

## What To Do

```bash
cd site && npm run build
```

This automatically:
1. Copies media from wiki to `site/public/media/` (prebuild hook)
2. Reads wiki markdown via `wiki-loader.ts`
3. Resolves media paths via `media-resolver.ts`
4. Generates static HTML to `site/dist/`

## After Build

Report:
- Number of pages generated
- Any build errors or warnings
- Missing media assets (pages that rendered without images/audio)

## Output

`site/dist/` — deployable static site.
