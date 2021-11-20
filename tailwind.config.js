module.exports = {
  purge: {
    enabled: true,
    content: ['src/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gray: "#BDBDBD",
        primary: "#AFD4E2",
        secondary: "#1E3240",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
