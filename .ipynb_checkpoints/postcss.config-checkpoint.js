module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
};
