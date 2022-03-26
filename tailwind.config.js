const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        silver: '#C0C0C0',
        'navy-blue': '#000075',
        'french-blue': '#0E77C2',
      },
    },
  },
  plugins: [],
};
