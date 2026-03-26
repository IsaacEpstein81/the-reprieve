import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eff7f4",
          100: "#d7ebe2",
          200: "#add8c6",
          300: "#7cc1a8",
          400: "#4ca987",
          500: "#2d8f6d",
          600: "#1f7156",
          700: "#175947",
          800: "#124538",
          900: "#0f352c"
        },
        sand: "#f6f2ea",
        ink: "#12211d",
        mist: "#dbe7e1"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(18, 33, 29, 0.12)",
        panel: "0 18px 45px rgba(18, 33, 29, 0.08)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(18,33,29,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(18,33,29,0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
