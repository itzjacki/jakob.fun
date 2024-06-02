import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import vercel from "@astrojs/vercel/serverless"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
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
})
