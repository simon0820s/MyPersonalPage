/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': '"Rubik Wet Paint"'
      },
      colors: {
        e9d5ff: '#e9d5ff',
        fe7272: '#fe7272',
        ale0f7: '#a1e0f7'
      }
    },
  },
  plugins: [],
}