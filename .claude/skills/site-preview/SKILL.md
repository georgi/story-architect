---
name: site-preview
description: Start local dev server to preview the project website at localhost:4321
disable-model-invocation: true
allowed-tools: Bash Read
---

# /site-preview — Preview Website

Start the Astro dev server for local preview.

## What To Do

```bash
cd site && npm run dev
```

This automatically copies media (predev hook) and starts at `http://localhost:4321`.

Tell the user to open the URL. The dev server hot-reloads on file changes.

To stop: Ctrl+C or the user will tell you.
