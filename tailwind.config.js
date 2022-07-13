/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "480px",
      sl: "1279px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          50: "#e8d6d0",
          200: "#c89f94",
          400: "#a25f4b",
          600: "#744838",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": 'url("./img/slider-bg.jpg")',
        "featured-mugs-1-bg": 'url("./img/featured-mugs-1.jpg")',
        "featured-mugs-2-bg": 'url("./img/featured-mugs-2.jpg")',
        "more-proudcts-1-bg": 'url("./img/more-proudcts-1.jpg")',
        "more-proudcts-2-bg": 'url("./img/more-proudcts-2.jpg")',
        "more-proudcts-3-bg": 'url("./img/more-proudcts-3.jpg")',
        "more-proudcts-4-bg": 'url("./img/more-proudcts-4.jpg")',
        "more-proudcts-5-bg": 'url("./img/more-proudcts-5.jpg")',
        "more-proudcts-6-bg": 'url("./img/more-proudcts-6.jpg")',
        "more-proudcts-7-bg": 'url("./img/more-proudcts-7.jpg")',
        "more-proudcts-8-bg": 'url("./img/more-proudcts-8.jpg")',
        "more-proudcts-9-bg": 'url("./img/more-proudcts-9.jpg")',
        "magazine-image-1-bg": 'url("./img/magazine-image-1.jpg")',
        "magazine-image-2-bg": 'url("./img/magazine-image-2.jpg")',
        "magazine-image-3-bg": 'url("./img/magazine-image-3.jpg")',
        parallax_bg: 'url("./img/parallax_bg.jpg")',
      },
    },
  },
  plugins: [],
};
