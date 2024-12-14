/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#111111',
        cardBg: '#191919',
        textGray: '#9CA3AF',
        primary: '#7F56D9',
        borderGray: '#333333'
      }
    },
  },
  plugins: [],
}
