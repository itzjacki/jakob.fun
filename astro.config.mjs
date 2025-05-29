import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jakob.fun",
  integrations: [mdx(), icon()],
  output: "server",
  adapter: vercel(),

  redirects: {
    "/modern-css": "/fun/modern-css",
    "/swiss-cheese": "/fun/swiss-cheese",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
