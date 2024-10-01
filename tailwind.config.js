/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
