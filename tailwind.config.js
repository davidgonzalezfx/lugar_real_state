module.exports = {
  purge: {
    enabled: true,
    content: ['src/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#cc5555",
        secondary: "#011627",
        tertiary: "#ff5722",
        quaternary: "#9856aa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
