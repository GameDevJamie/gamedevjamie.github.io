/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "clamp(0.8rem, 40%, 1.5rem)",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },

      gridTemplateColumns: {
        //For header only
        header: "1fr auto 1fr",
      },

      colors: {
        primary: {
          DEFAULT: "#ff4d5a", //"#7611a6", //'#8b5cf6',
          light: "#fa707a", //"#a12bd9", //"#C4B6FD",
          dark: "#bd222d", //"#4c076e", //"#4C1D95",
        },
        social: {
          twitter: "#1DA1F2",
          linkedin: "#0E76A8",
          github: "#6e5494",
          itchio: "#FF2449",
        },
      },

      backgroundColor: {
        DEFAULT: "#FFF",
        paper: "#FFF",
      },
      textColor: {
        default: "#000",
        muted: "#000",
        contrast: {
          primary: "#FFF",
          twitter: "#FFF",
          linkedin: "#FFF",
          github: "#FFF",
          itchio: "#FFF",
          paper: "#000",
        },
      },
    },
  },
  plugins: [],
};
