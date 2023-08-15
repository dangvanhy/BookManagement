module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: {
    enable: true,
    option: {
      keyframes: true,
      FontFace: true
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primary': '#523B29',
      'secondary': '#BDB5AE',
      'background': '#F9F3EE'
    },
    colors: {
      'background': '#F9F3EE',
      'white': '#FFFFFF',
      'black': '#000000',
      'primary': '#523B29',
      'secondary': '#BDB5AE',
      'background': '#F9F3EE'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
