/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'cyan':colors.cyan,
        'teal':colors.teal
      }
    },
  },
  plugins: [],
}

