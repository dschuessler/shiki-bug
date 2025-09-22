// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import svelte from "@astrojs/svelte";

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    expressiveCode({
      // removeUnusedThemes: false,
    }),
    svelte(),
  ],
  output: "server",
});
