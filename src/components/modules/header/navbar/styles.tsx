import styled from "styled-components";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  text-transform: capitalize;
  cursor: pointer;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    padding: 10px 15px;
  }

  &:after {
    content: "";
    display: block;
    transform: scaleX(0);
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0.75rem;
    right: 0.75rem;
    background-color: grey;
    transition: 0.3s all ease-in;
  }

  ${NavItem}.active & {
    &:after {
      transform: scaleX(1);
      background-color: ${theme.colors.primary};
    }
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;

const NavTitle = styled.span`
  margin-left: 5px;
`;

export { Nav, NavList, NavItem, NavLink, NavTitle };
