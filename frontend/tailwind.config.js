/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0px 15px rgba(0, 0, 0, 0.35)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      colors: {
        'primary-1': '#eed8ca',
        'primary-2': '#efc1b8',
        'primary-3': '#D0777B',
        'primary-4': '#725c56',
        'primary-5': '#768b67',
        'primary-6': '#c3ca8a',
      },
    },
  },
  plugins: [],
};
