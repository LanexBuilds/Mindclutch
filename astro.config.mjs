import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Project site: https://lanexbuilds.github.io/Mindclutch/
// (repo name is case-sensitive: it must be exactly "Mindclutch")
// Later, for the clean URL https://mindclutch.github.io, set site to that and delete the base line.
export default defineConfig({
  site: 'https://lanexbuilds.github.io',
  base: '/Mindclutch',
  integrations: [tailwind()],
});
