/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'black-200': 'rgba(255, 255, 255, 0.08)',
        'type': '#666666',
        'bug': '#A7B723',
        'dark': '#75574C',
        'dragon': '#7037FF',
        'electric': '#F9CF30',
        'fairy': '#E69EAC',
        'fighting': '#C12239',
        'fire': '#F57D31',
        'flying': '#A891EC',
        'ghost': '#70559B',
        'normal': '#AAA67F',
        'grass': '#74CB48',
        'ground': '#DEC16B',
        'ice': '#9AD6DF',
        'poison': '#A43E9E',
        'psychic': '#FB5584',
        'rock': '#B69E31',
        'steel': '#B7B9D0',
        'water': '#6493EB',
        'grayscale-dark': '#212121',
        'grayscale-medium': '#666666',
        'grayscale-light': '#E0E0E0',
        'grayscale-background': '#EFEFEF',
        'grayscale-white': '#fffff',
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
