import styled from "styled-components"
import { theme } from "utils/theme"

const Nav = styled.nav`
  max-width: 100%;
  width: 100%;
  box-shadow: 0px 4px 10px 0px ${theme.colors.primary};
`

const Wrapper = styled.div`
  min-height: 80px;
  width: 95%;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: ${theme.colors.background};
`

const NavList = styled.div`
  display: flex;
  flex-direction: row;
`

type NavLinkProps = {
  active: boolean
}
const NavLink = styled.div<NavLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin-left: 10px;
  margin-right: 10px;
  transition: 0.3s all ease;

  ${props => props.active && `color: ${theme.colors.primary};`}

  &:hover {
    color: ${theme.colors.primary};
  }
`

export { Nav, Wrapper, NavList, NavLink }
