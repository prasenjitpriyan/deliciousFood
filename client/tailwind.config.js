/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "RomanCoffee": "#7D5A50",
        "LightTaupe": "#B4846C",
        "Rose": "#E5B299",
        "DesertSand": "#E3CAA5"
      },
      fontFamily: {
        "primary": ('Roboto', 'sans-serif')
      }
    },
  },
  plugins: [require("daisyui")],
}