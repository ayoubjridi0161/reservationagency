/** @type {import('tailwindcss-textshadow')}*/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow :{
        xl : '3px 5px 4px rgba(38, 38, 38, 0.58)'

      },
      shadow: {
        xl5: '13px 9px 58px #525151'
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/426244962_1448528972364125_962454034354804131_n.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'lalezar': ['Lalezar', 'cursive'],
        'gurajada': ['Gurajada', 'serif'],
        'halant': ['Halant', 'serif'],
        'hurricane': ['Hurricane', 'serif'],
        'kota': ['Kota One', 'cursive'],
        'lato' : ['Lato', 'sans-serif'],
      },

    },
  },
  plugins: [
    
      // other plugins...
      function({ addUtilities }) {
        const newUtilities = {
          '.hide-scrollbar': {
            'scrollbar-width': 'none', // For Firefox
            '-ms-overflow-style': 'none', // For Internet Explorer and Edge
            '&::-webkit-scrollbar': { // For Google Chrome, Safari and Opera
              display: 'none'
            }
          }
        }
        addUtilities(newUtilities)
      }
    

  ],
}

