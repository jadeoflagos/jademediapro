module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '12': '5.5rem',
        '13': '7rem',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
