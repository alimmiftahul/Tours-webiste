module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    extend: {
      colors: {
        primary: '#101828',
        blumine: {
          50: '#eff8ff',
          100: '#dceffd',
          200: '#c0e4fd',
          300: '#95d4fb',
          400: '#63bbf7',
          500: '#3f9ef2',
          600: '#2981e7',
          700: '#216bd4',
          800: '#2157ac',
          900: '#204a87',
          1000: '#182f53',
        },
        secondary: '#7F56D9',
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
