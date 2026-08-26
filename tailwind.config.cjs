/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        charcoal: '#2C2C2C',
        cream: '#FAF5EE',
        clay: '#C4704A',
        sage: '#4A6741',
        gold: '#C9A84C',
        teal: '#5B9EA0',
      },
    },
  },
  plugins: [],
};
