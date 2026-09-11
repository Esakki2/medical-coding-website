import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f4c81",
        "primary-light": "#2c6b9e",
        accent: "#31a9a9",
        "accent-soft": "#e5f4f4",
        "soft-bg": "#f6fafd",
        "dark-text": "#0c1e2e",
        "light-text": "#4b5e6e",
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      borderRadius: { "4xl": "2rem", "5xl": "3rem" },
      boxShadow: {
        "premium-sm": "0 10px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
        "premium-md": "0 20px 35px -8px rgba(0, 0, 0, 0.08), 0 10px 10px -6px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};
export default config;
