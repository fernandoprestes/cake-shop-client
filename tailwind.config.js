module.exports = {
  content: ['./src/**/*.{html,js,vue}', './src/**/*', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        homeImg: 'url(/src/assets/img/home-background.png)',
      },
      colors: {
        overlay: 'rgba(0, 0, 0, 0.5)',
        primary: '#58375B',
        secondary: '#F4E0F6',
        accent: '#EE96F7',
      },
      screens: {
        sx: '440px',
      },
    },
  },
  plugins: [],
};
