/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: 'Poppins'
      },
      colors: {
        'body-color': '#fafafa',
        'btn-color': '#efefef'
      },
      lineHeight: {
        'extra-loose': '5.5'
      }
    },
  },
  plugins: [],
}

