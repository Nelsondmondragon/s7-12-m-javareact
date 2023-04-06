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
        error: {
          50: '#FFF3F2',
          100: '#FFCECB',
          200: '#FF9D98',
          300: '#FF7871',
          400: '#FF544A',
          500: '#FF3B30',
          600: '#FF170A',
          700: '#BD0A00',
          800: '#720600',
          900: '#260200',
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
        success: {
          50: '#F2FCF5',
          100: '#CCF2D5',
          200: '#98E4AB',
          300: '#72DA8C',
          400: '#4BD06D',
          500: '#34C759',
          600: '#2EAE4E',
          700: '#217C38',
          800: '#144B21',
          900: '#07190B',
        },
        black: '#1f1f1f',
        white: '#fafafa',
        info: '#0dcaf0',
        warning: '#ffc800',
        danger: '#dc3545',
        form: 'rgba(255, 255, 255, 0.8)',
        light: {
          100: '#f7fbff',
          300: '#d6d6d6',
        },
        dark: '#212529',
      },

      backgroundImage: {
        'global-pattern': "url('/assets/images/route.svg')",
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
      backdropFilter: {
        blur: 'blur(8px)',
      },
    },
  },
  plugins: [],
};
