/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      beige: "#fff7de" /*color beige*/,
      green: "#097d4c" /*color verdone*/,
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubbleGum: "#ff77e9",
      bermuda: "#78dcca",
    },
    screens: {
      smartphone: "@media (min-width: 480px)",
      laptop: "@media (min-width: 481px) and (max-width: 960px)",
      desktop: "@media (min-width: 961px)",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
  },
  plugins: [],
};
