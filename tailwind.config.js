const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        /** light */
        primary: colors.neutral['900'],
        body: colors.white,
        'button-bg': colors.neutral['100'],
        /** dark */
        dark: {
          primary: colors.gray['50'],
          body: colors.neutral['800'],
          'button-bg': colors.neutral['900'],
        },
      },
    },
  },
  plugins: [],
}
