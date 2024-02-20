/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      virgil: ["virgil", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "355px",
      },
    },
  },
  plugins: [],
};
