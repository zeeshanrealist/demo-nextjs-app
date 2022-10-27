const colors = require('tailwindcss/colors');

// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {
      screens: {
        'sm': '365px',
        'md': '768px'
      },
      fontFamily: {
        sans: 'Open Sans, sans-serif',
        poppins: 'Poppins, sans-serif',
      },
      colors: {
        white: colors.white,
        primaryButton: '#f257bc',
        primaryButtonText: '#fef4fc',
        heading: '#092730',
        greyText: '#99aab7'
      },
    },
  },
  plugins: [],
};
