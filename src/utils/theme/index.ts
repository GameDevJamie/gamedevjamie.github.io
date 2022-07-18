//import { device } from "./device"
import styled_theme from "styled-theming";
import { css } from "styled-components";

/*
  theme
    colors
      background
      primary
      text
      social
        twitter
        facebook
        getColor(string)
    typography
      baseSize
      fontFamily
    spacing
      sectionPadding
    device
      breakpoints
*/

/*
  Background Colors:
  #fefaf6
  #f7f7f7
*/

const theme = {
  colors: {
    background: styled_theme("mode", {
      light: "#FFF",
      dark: "#16161a",
    }),
    primary: styled_theme("mode", {
      light: "#9c40e3",
      dark: "#9c40e3",
    }),
    secondary: styled_theme("mode", {
      light: "#d1d1e9",
      dark: "#72757e",
    }),
    text: styled_theme("mode", {
      light: "#2b2c34",
      dark: "#fffffe",
    }),
    social: {
      facebook: "",
      twitter: "#07c3ed",
      github: "#9614c9",
      itchio: "#f71652",
      linkedin: "#145dc9",
    },
    getColor(color: string) {
      switch (color.toLowerCase()) {
        case "primary":
          return theme.colors.primary;
        case "secondary":
          return theme.colors.secondary;
        case "facebook":
          return theme.colors.social.facebook;
        case "linkedin":
          return theme.colors.social.linkedin;
        case "github":
          return theme.colors.social.github;
        case "twitter":
          return theme.colors.social.twitter;
        case "itchio":
          return theme.colors.social.itchio;
      }
    },
  },

  typography: {
    baseSize: 18,
    fontSize: (sizeInPx: number) =>
      `${sizeInPx / theme.typography.baseSize}rem`,
    fontFamily: css`
      font-family: "Fredoka", sans-serif;
    `,
  },

  spacing: {
    sectionPadding: "20px",
    maxPageWidth: "1200px",
  },

  transition: {
    color: 0.25,
  },

  device: {
    breakPoints: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "728px",
      laptop: "950px",
      laptopL: "1440px",
      desktop: "2560px",
    },
  },
};

export { theme };
