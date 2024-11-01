import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-sidebar": "#0D92F4",
        "color-sidebar-secondary": "#7AB2D3",
        "color-bg-secondary": "#E9EED9",
        "color-bg-tertiary": "#615EFC",
        "hover-bg-tertiary": "#024CAA",
      },
    },
  },
  plugins: [],
};
export default config;
