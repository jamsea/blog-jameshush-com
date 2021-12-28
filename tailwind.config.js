module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      red: "#ff441a",
      navy: "#2b3a63",
      sand: "#fcf5e6",
      gold: "#e5ae35",
    },
    extend: {
      fontFamily: {
        sans: ["dinosaur", "Arial", "sans-serif"],
        "sofia-pro": ["sofia-pro", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
