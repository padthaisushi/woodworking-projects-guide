// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://padthaisushi.github.io',
  base: '/woodworking-projects-guide/',
  integrations: [sitemap()]
});