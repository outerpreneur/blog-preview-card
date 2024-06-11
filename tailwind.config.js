/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        "background-yellow": "#F4D04E",
      },
      boxShadow: {
        "box-shadow-desktop": "18px 13px 1px 7px rgba(0,0,0,1)",
        "box-shadow": "10px 6px 1px 4px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
