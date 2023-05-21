/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#DACD57',
        teal: '#335C67',
      },
    },
  },
  plugins: [],
};
