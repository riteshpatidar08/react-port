/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        dynalight : 'Dynalight'
      },
      colors: {
        primary:  '#792DC3 ',
        secondary: '#0c0c0d',
        tertiary : 'rgb(26,26,26)'
      }
    },
  },
  plugins: [],
}

