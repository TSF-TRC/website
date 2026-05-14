import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tsf-trc.github.io",
  base: "/website",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
  build: {
    format: "directory",
  },
});
