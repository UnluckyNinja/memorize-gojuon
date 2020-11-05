const { theme } = require('tailwindcss/defaultConfig')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['odd', 'even']),
  },
  plugins: [],
}
