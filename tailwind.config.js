/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Jose: ["Josefin Sans", "sans-serif"],
      Cursive: ["Cedarville Cursive"],
      Alegreya: ["Alegreya Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
