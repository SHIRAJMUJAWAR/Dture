/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      spacing: {
        // pixel-based helpers used in the codebase
        '13': '13px',
        '15': '15px',
        '19': '19px',
        '50': '50px',
        '60': '60px',
        '85': '85px',
        '100': '100px',
        '152': '152px',
        '250': '250px',
        '30.5': '30.5px',
      },
      width: {
        '250': '250px',
        '85': '85px',
        '100': '100px',
        '30.5': '30.5px',
      },
      height: {
        '15': '15px',
        '60': '60px',
        '30.5': '30.5px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5': '0.625rem'
      }
    },
  },
  plugins: [],
}
