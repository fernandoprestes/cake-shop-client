module.exports = {
  content: ['./src/**/*.{html,js,vue}', './src/**/*', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        overlay: 'rgba(0, 0, 0, 0.5)',
        primary: '#9387AB',
        secondary: '#F9F1F6',
        accent: '#E7C5DA',
      },
    },
  },
  plugins: [],
};
