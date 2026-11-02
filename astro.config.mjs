import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// User site at https://mindclutch.github.io -> no "base" needed.
export default defineConfig({
  site: 'https://mindclutch.github.io',
  integrations: [tailwind()],
});
