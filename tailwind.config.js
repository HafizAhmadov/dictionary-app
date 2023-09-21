/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark1: "#1F1F1F",
        dark2: "#2D2D2D",
        dark3: "#3A3A3A",
        gray1: "#757575",
        gray2: "#E9E9E9",
        gray3: "#F4F4F4",
        purple: "#A445ED",
        red: "#FF5252",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        lora: ["Lora", "serif"],
        inter: ["Inter", "sans"],
      },
    },
  },
};
