/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0059DF',
        lemon: '#00C600',
        darkblue: '#000E24',
        lightblue: '#EBFFEB',
      }
    },
  },
  plugins: [],
}