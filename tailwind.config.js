const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./views/**/*.ejs",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Exo 2', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
