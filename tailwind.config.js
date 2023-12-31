const { defaultTheme } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkBlue: '#1f203D',
        lightBlue: '#B4D6FC',
        finRed: '#521A25',
        finGrey: '#e8e8e8',
      },
      // fontFamily: {
      //   sans: ['Russo One', ...defaultTheme.fontFamily.sans],
      //   fancy: ['Cinzel']
      // },
    },
  },
  plugins: [],
}
