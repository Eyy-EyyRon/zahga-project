/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E2A',
          gold: '#B8860B',
          silver: '#C0C0C0',
          dark: '#0A0A0F',
          darker: '#060609',
          card: '#111118',
          border: '#1E1E2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
