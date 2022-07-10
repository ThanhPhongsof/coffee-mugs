/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
      colors:{
        lightCoffee:"#c89f94"
      }
    },
  },
  plugins: [],
};
