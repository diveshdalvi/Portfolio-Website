/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        VT323: ["VT323", "monospace"], // Add fallback font family
        jetbrains: ["JetBrains Mono", "monospace"], // Add fallback font family
      },
      animation: {
        typing: "typing 2s  infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
    },
  },
  plugins: [],
};
