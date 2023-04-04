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
        primary: {
          50: '#D2EEFE',
          100: '#A0DBFD',
          200: '#6EC8FC',
          300: '#3CB5FB',
          400: '#0AA2FA',
          500: '#0483CC',
          600: '#03649B',
          700: '#024369',
          800: '#012337',
        },
        neutral: {
          50: '#F0F0F0',
          100: '#D6D6D6',
          200: '#BDBDBD',
          300: '#A3A3A3',
          400: '#8A8A8A',
          500: '#707070',
          600: '#575757',
          700: '#3D3D3D',
          800: '#242424',
        },
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
        hero: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #FAFAFA',
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/illustrations/hero1.svg')",
        'about-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/illustrations/about1.svg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
