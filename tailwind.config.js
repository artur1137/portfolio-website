/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./templates/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        supermolot: ['"TT Supermolot Neue Exp DBold"']
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
