import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://georgi.github.io',
  base: '/story-architect',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
