/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/426807351_796774825614730_5062592844069276684_n.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'lalezar': ['Lalezar', 'cursive'],
        'gurajada': ['Gurajada', 'serif']
      }

    },
  },
  plugins: [],
}

