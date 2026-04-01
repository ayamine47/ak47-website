// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
  },

  image: {
    responsiveStyles: true,
  },

  site: "https://www.ak47.work",
  adapter: cloudflare()
});