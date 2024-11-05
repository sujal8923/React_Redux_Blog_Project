/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        pressstart: ['"Press Start 2P"', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        russo: ['Russo One', 'sans-serif'],
        vt323: ['VT323', 'monospace'],
      }
    },
  },
  plugins: [],
}
