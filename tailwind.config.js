const colors = require('tailwindcss/colors')
const { createThemes } = require('tw-colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [
    createThemes(
      {
        light: {
          primary: colors.neutral['900'],
          body: colors.white,
          'button-bg': colors.neutral['100'],
        },
        dark: {
          primary: colors.gray['50'],
          body: colors.neutral['800'],
          'button-bg': colors.neutral['900'],
        },
      },
      {
        produceCssVariable: (colorName) => `--mp-${colorName}`,
        defaultTheme: {
          light: 'light',
          dark: 'dark',
        },
      },
    ),
  ],
}
