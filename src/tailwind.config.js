module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    smoke: "rgba(0, 0, 0, 0.5)",  
    extend: {
      colors: {
        'custom-gray':'#181818',
        'custom-white':'#F7F7F7', 
        'back-white':'#fff',
      }
    },
},
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}