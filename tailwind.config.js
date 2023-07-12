/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'black-200': 'rgba(255, 255, 255, 0.08)',
      },
      '@layer utilities': {
        '.border-bg-black-200': {
          'border-color': 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  plugins: [],
}
