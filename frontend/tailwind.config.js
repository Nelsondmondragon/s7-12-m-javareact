/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      inset: {
        17: '68px',
        26: '104px',
      },
      colors: {
        yellow: {
          300: '#FFDC5C',
          500: '#FFD22C',
          700: '#CCA000',
        },
        myBlue: {
          100: '#78c0e0',
          300: '#449dd1',
          500: '#192bc2',
          700: '#150578',
          900: '#0e0e52',
        },
        purple: '#6f42c1',
        primary: '#ffc800',
        secondary: '#6c757d',
        success: '#198754',
        info: '#0dcaf0',
        warning: '#ffc800',
        danger: '#dc3545',
        light: {
          100: '#f7fbff',
          300: '#d6d6d6',
        },
        dark: '#212529',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/illustrations/hero1.svg')",
        'about-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/illustrations/about1.svg')",
      },
    },
  },
  plugins: [],
};
