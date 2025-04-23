/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "blockquote *::before": {
              content: "none",
            },
            "blockquote *::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
