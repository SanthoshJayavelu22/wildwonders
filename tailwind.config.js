/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blueP:'#2a317d',
      },
      fontFamily: {
        barlow: ["'Barlow Condensed'", "sans-serif"], 
      },
    },
  },
  plugins: [],
}