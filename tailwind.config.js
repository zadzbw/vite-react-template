/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /** light */
        // text start
        primary: '#1C1F24',
        secondary: '#656E78',
        third: '#88929B',
        /** dark */
        dark: {},
      },
    },
  },
  plugins: [],
}
