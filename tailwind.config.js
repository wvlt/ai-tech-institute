module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color1': 'rgb(204, 51, 51)', // Updated to CMYK: 20 100 100 14 converted to RGB
        'theme-color2': '#FFFFFF', // Pure white
        'theme-color3': '#000000', // Black
      },
    },
  },
  plugins: [],
}
