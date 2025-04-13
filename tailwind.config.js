/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Anton: ['Anton', 'sans-serif'], // You can name it anything
      },
    },
  },
  plugins: [],
}

