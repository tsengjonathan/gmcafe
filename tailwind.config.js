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
        'discord': '#5865F2',
      },
      spacing: {
        38: '9.5rem'
      },
      keyframes: {
        rerender: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        rerender: 'rerender 500ms ease-in-out'
      }
    },
    fontFamily: {
      sans: [ 'Roboto Mono', ...defaultTheme.fontFamily.sans ],
      mono: [ 'Inconsolata', ...defaultTheme.fontFamily.mono ]
    }
  },
  plugins: [],
}
