// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://d1m3k.github.io/rutemedan/
// build.format 'file' -> pages emit as <slug>.html, which GitHub Pages
// serves extensionless — the same clean URLs as the previous native build.
export default defineConfig({
  site: 'https://d1m3k.github.io',
  base: '/rutemedan',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
