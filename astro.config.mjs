// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  image: {
      domains: ['images.unsplash.com'],
	},

  integrations: [sitemap()],
});