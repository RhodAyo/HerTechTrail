/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["Manrope", "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
