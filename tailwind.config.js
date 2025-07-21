/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'gold': {
          400: '#DAA520',
          500: '#B8860B',
          600: '#9A7209',
        }
      }
    },
  },
  plugins: [],
};
