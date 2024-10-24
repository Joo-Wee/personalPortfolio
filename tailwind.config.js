/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    minHeight: {
      '0': '0',
      '1/8': '80px',
      '7/10': '700px',
    },
    extend: {
      fontFamily: {
        body: 'Poppins'
      },
      colors: {
        'body-color': '#fafafa',
        'btn-color': '#efefef',
        'feat-box-color': '#c0a631',
        'feat-text-col': '#444444',
      },
      lineHeight: {
        'extra-loose': '5.5'
      },
      translate: {
        'neg-1/2': '-50%',
      },
      keyframes: {
        imgFloat: {
          '50%': { transform: 'translateY(10px)' }
        }
      }
    },
  },
  plugins: [],
}

