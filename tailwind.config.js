const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#b8dfff',
        'blue': '#80e5ff',
        'green-light': '#cdfff0',
        'green': '#a1ffe4',
        'pink-light': '#ffc7e5',
        'pink': '#ff7dbd',
        'purple-light': '#dfb9f1',
        'purple': '#8946ab',
        'orange-light': '#fef0e5',
        'yellow-light': '#fffeca',
        'discord': '#2c2f33',
      },
      spacing: {
        38: '9.5rem'
      }
    },
    fontFamily: {
      sans: [ 'Roboto Mono', ...defaultTheme.fontFamily.sans ],
      mono: [ 'Inconsolata', ...defaultTheme.fontFamily.mono ]
    }
  },
  plugins: [],
}
