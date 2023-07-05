/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b5cf6',
          light: '#C4B6FD',
          dark: '#4C1D95',
        },
        social: {
          twitter: '#1DA1F2',
          linkedin: '#0E76A8',
          github: '#6e5494',
          itchio: '#FF2449',
        },
      },

      backgroundColor: {
        DEFAULT: '#FFF',
        paper: '#FFF',
      },
      textColor: {
        primary: '#000',
        muted: '#000',
        contrast: {
          primary: '#FFF',
          twitter: '#FFF',
          paper: '#000',
        },
      },
    },
  },
  plugins: [],
};
