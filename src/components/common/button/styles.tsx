import styled, { css } from "styled-components";
import { theme } from "utils/theme";

interface Props {
  variant?: string;
  size?: string;
  color?: string;

  //Changes how the button transitions when hovered
  /*default: standard effect (see material ui button hover effects)
    color: from black to color given (color changing depends on variant)
          -contained: background is black, text/icon is white, background changes to color given
          -outlined: outline is color given, text/icon is black, icon changes to color given
          -transparent: icon is black, icon changes to color given.
  */
  hoverEffect?: string;
}
const Button = styled.a<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100px;
  min-height: 2rem;
  line-height: 1.75;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  ${props => {
    switch (props.size) {
      case "small":
        return `
          font-size: ${theme.typography.fontSize(18)}; 
          padding: 4px 10px;
        `;
      case "medium":
        return `
          font-size: ${theme.typography.fontSize(22)}; 
          padding: 6px 16px;
        `;
      case "large":
        return `
          font-size: ${theme.typography.fontSize(26)}; 
          padding: 8px 22px;
        `;
    }
  }}

  border-radius: 10px;
  ${props => {
    switch (props.variant) {
      case "contained":
        return containedStyle;
      case "outlined":
        return outlinedStyle;
      case "transparent":
        return transparentStyle;
      default:
        return containedStyle;
    }
  }}

  color: ${props => {
    if (props.variant === "contained") return "white";
    switch (props.color) {
      case "primary":
        return theme.colors.primary;
      //case 'secondary': return theme.colors.secondary;
      //case 'success': return theme.colors.secondary;
      //case 'error': return theme.colors.secondary;
    }
  }};
`;

const IconButton = styled(Button)`
  border-radius: 50%;
  padding: 0px;
  min-width: 0px;
  ${props => {
    switch (props.size) {
      case "small":
        return `
          width: 30px;
          height: 30px;
        `;
      case "medium":
        return `
          width: 40px;
          height: 40px;
        `;
      case "large":
        return `
          width: 50px;
          height: 50px;
        `;
    }
  }}
`;

const transparentStyle = css<Props>`
  border: 0;
  background: transparent;

  color: ${props => {
    switch (props.hoverEffect) {
      case "default":
        return props.color
          ? theme.colors.getColor(props.color)
          : theme.colors.getColor("primary");
      case "color":
        return `black`;
      default:
        return props.color
          ? theme.colors.getColor(props.color)
          : theme.colors.getColor("primary");
    }
  }};

  &:hover {
    ${props => {
      switch (props.hoverEffect) {
        case "default":
          return ``;
        case "color":
          return `
          color: ${
            props.color
              ? theme.colors.getColor(props.color)
              : theme.colors.getColor("primary")
          };
        `;
        default:
          return ``;
      }
    }}
  }
`;
const containedStyle = css<Props>`
  border: 0;

  color: white;
  background: ${props => {
    switch (props.hoverEffect) {
      case "default":
        return props.color
          ? theme.colors.getColor(props.color)
          : theme.colors.getColor("primary");
      case "color":
        return `black`;
      default:
        return props.color
          ? theme.colors.getColor(props.color)
          : theme.colors.getColor("primary");
    }
  }};

  &:hover {
    ${props => {
      switch (props.hoverEffect) {
        case "default":
          return ``;
        case "color":
          return `
          color: white;
          background: ${
            props.color
              ? theme.colors.getColor(props.color)
              : theme.colors.getColor("primary")
          };
        `;
        default:
          return ``;
      }
    }}
  }
`;
const outlinedStyle = css<Props>`
  border: 1px solid;
  background: transparent;

  border-color: ${props =>
    props.color
      ? theme.colors.getColor(props.color)
      : theme.colors.getColor("primary")};

  color: ${props =>
    props.color
      ? theme.colors.getColor(props.color)
      : theme.colors.getColor("primary")};

  &:hover {
    ${props => {
      switch (props.hoverEffect) {
        case "default":
          return ``;
        case "color":
          return `
            background: ${
              props.color
                ? theme.colors.getColor(props.color)
                : theme.colors.getColor("primary")
            };
            color: white;
          `;
        default:
          return ``;
      }
    }}
    }};
  }
`;

export { Button, IconButton };
