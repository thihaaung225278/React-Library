/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dbg: '#05061B',
        dcard: '#070E27'
      }
    },
  },
  plugins: [],
} 