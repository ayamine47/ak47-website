// @ts-check
import { defineConfig } from 'astro/config';
import imgAttr from "remark-imgattr";

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
  markdown: {
    remarkPlugins: [imgAttr],
  },
  site: "https://www.ak47.work"
});
