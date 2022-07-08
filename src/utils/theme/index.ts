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
    background: "#eeeeee",
    primary: "#C52AF5",
    secondary: "#000",
    text: "#232320",
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

/*
const main = {
  color: {
    primary: styled_theme("mode", {
      light: "#C52AF5",
      dark: "000",
    }),
    secondary: styled_theme("mode", {
      light: "",
      dark: "",
    }),
    background: styled_theme("mode", {
      light: "#fefaf6",
      dark: "#fefaf6",
    }),
    text: styled_theme("mode", {
      light: "#232320",
      dark: "#FFF",
    }),
    basic: {
      red: "#FF0000",
      blue: "#0000FF",
      green: "#00FF00",
      black: "#000",
      white: "#FFF",
    },
  },
  typography: {
    baseSize: 18,
    fontFamily: css`
      font-family: "Fredoka", sans-serif;
    `,
  },
}

const social = {
  color: {
    facebook: "",
    twitter: "#07c3ed",
    github: "#9614c9",
    itchio: "#f71652",
    linkedin: "#145dc9",
  },
  getColor(type: string) {
    switch (type.toUpperCase()) {
      case "TWITTER":
        return social.color.twitter
      case "GITHUB":
        return social.color.github
      case "ITCHIO":
        return social.color.itchio
      case "LINKEDIN":
        return social.color.linkedin
      default:
        return "#000"
    }
  },
}

const buttons = {
  color: {
    background: styled_theme.variants("mode", "type", {
      primary: {
        light: "",
        dark: "",
      },
      secondary: {
        light: "",
        dark: "",
      },
      success: {
        light: "",
        dark: "",
      },
      error: {
        light: "",
        dark: "",
      },
    }),

    text: "",
  },
  radius: "10px",
}

const device = {
  breakPoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "728px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
}

const theme = {
  main: main,
  social: social,
  buttons: buttons,
  device: device,
}
*/
/*
const oldtheme = {
  colors: {
    primary: styled_theme("mode", {
      light: "#c52af5",
      dark: "#c52af5",
    }),
    secondary: styled_theme("mode", {
      light: "",
      dark: "",
    }),
    text: {
      main: "#232320",
      inverse: "#dcdcdf",
    },
    background: styled_theme("mode", {
      light: "#fefaf6",
      dark: "#fefaf6",
    }),
    surface: {
      main: "",
      variant: "",
    },
    error: "#E52727",
    button: styled_theme.variants("mode", "kind", {
      default: {
        light: "#FFF",
        dark: "#000",
      },
      primary: {
        light: "red",
        dark: "green",
      },
      secondary: {
        light: "",
        dark: "",
      },
      success: {
        light: "",
        dark: "",
      },
    }),

    social: {
      facebook: "",
      twitter: "#07c3ed",
      github: "#9614c9",
      itchio: "#f71652",
      linkedin: "#145dc9",

      getColor(type: string) {
        switch (type.toUpperCase()) {
          case "TWITTER":
            return theme.colors.social.twitter
          case "GITHUB":
            return theme.colors.social.github
          case "ITCHIO":
            return theme.colors.social.itchio
          case "LINKEDIN":
            return theme.colors.social.linkedin
          default:
            return "#000"
        }
      },
    },

    basic: {
      red: "#FF0000",
      blue: "#0000FF",
      green: "#00FF00",
      black: "#000",
      white: "#FFF",
    },
  },
  typography: {
    baseSize: 18,
    fontFamily: css`
      font-family: "Fredoka", sans-serif;
    `,
  },

  device: device,
}
*/
export { theme };
