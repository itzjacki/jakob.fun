import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jakob.fun",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    icon(),
  ],
  output: "server",
  adapter: vercel(),
  redirects: {
    "/modern-css": "/fun/modern-css",
    "/swiss-cheese": "/fun/swiss-cheese",
  },
});
