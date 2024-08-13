module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color1': 'rgb(177, 4, 14)', // Updated to CMYK: 20 100 100 14 converted to RGB
        'theme-color2': 'rgb(255, 255, 255)', // Pure white
        'theme-color3': 'rgb(0, 0, 0)', // Black
      },
      scale: {
        '102': '1.02', // Add custom scale value
      },
    },
  },
  plugins: [],
}
