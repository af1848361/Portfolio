/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}