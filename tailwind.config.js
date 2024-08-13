/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: 'Poppins'
      },
      colors: {
        'body-color': '#fafafa'
      },
      lineHeight: {
        'extra-loose': '4.5'
      }
    },
  },
  plugins: [],
}

