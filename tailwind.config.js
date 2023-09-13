/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "clamp(0.5rem, 0.3929rem + 0.4762vw, 0.75rem)",
      sm: "clamp(0.6rem, 0.4929rem + 0.4762vw, 0.85rem)",
      base: "clamp(0.75rem, 0.6429rem + 0.4762vw, 1rem)",
      lg: "clamp(1rem, 0.7857rem + 0.9524vw, 1.5rem)",
      xl: "clamp(1.25rem, 0.9024rem + 1.4634vw, 2rem)",
      "2xl": "clamp(1.5rem, 0.9429rem + 2.4762vw, 2.8rem)",
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
          DEFAULT: "#7611a6", //"#ff4d5a", //"#7611a6", //'#8b5cf6',
          light: "#a12bd9", //"#fa707a", //"#a12bd9", //"#C4B6FD",
          dark: "#4c076e", //"#bd222d", //"#4c076e", //"#4C1D95",
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
        muted: "#57534e", //Stone-600
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
