module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color1': 'rgb(177, 4, 14)', // Default main color
        'theme-color2': 'rgb(255, 255, 255)', // White
        'theme-color3': 'rgb(0, 0, 0)', // Black
        // Add the kids-specific colors
        'kids-header': 'rgb(0, 101, 179)', // CMYK: 50, 100, 0, 0 converted to RGB
        'kids-accent': 'rgb(255, 221, 0)', // CMYK: 0, 15, 100, 0 converted to RGB
      },
      scale: {
        '102': '1.02', // Add custom scale value
      },
    },
  },
  plugins: [],
}
