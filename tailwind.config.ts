import type { Config } from "tailwindcss";

const config: Config = {
  /* 
  NOTE - Remove the default content and replace with the below content 
  
  This is necessary because if not doing so, when going to Production with npm run build, some critical DaisyUI styles may not work such as md:drawer-open may not work at all.

  The reason is because Tailwind CSS works by scanning all of your HTML, JavaScript components, and any other template files for class names, then generating all of the corresponding CSS for those styles. And in order for Tailwind to generate all of the CSS you need, it needs to know about every single file in your project that contains any Tailwind class names. >> https://tailwindcss.com/docs/content-configuration

  This new content below will cover all source files in /src folder instead of the default content specifying only a few folders such as /src/app or /src/pages which may not be sufficient since we write many tailwindCSS / DaisyUI in various /src folders, not just in /app or /pages.

  URL - https://stackoverflow.com/questions/66484296/some-tailwind-styles-not-working-in-production-with-next-js

  */

  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        min: { max: "320px" },
        xs: { max: "639px" },
      },
    },
  },
  daisyui: {
    themes: [
      // https://daisyui.com/docs/colors/

      // NOTE - the first theme is the default theme
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#2f65cb", // primary background
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#233044",
        },

        cyberpunk: {
          ...require("daisyui/src/theming/themes")["[data-theme=cyberpunk]"],
        },

        valentine: {
          ...require("daisyui/src/theming/themes")["[data-theme=valentine]"],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
