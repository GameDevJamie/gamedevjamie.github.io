import React from 'react';
import { Nav, NavList, NavItem, NavLink, NavIcon, NavTitle } from './styles';
import { Icon, IconType } from 'components/icon';

const navItems = [
  {
    id: 1,
    title: 'Home',
    icon: IconType.Home,
  },
  {
    id: 2,
    title: 'About',
    icon: IconType.About,
  },
  {
    id: 3,
    title: 'Projects',
    icon: IconType.Projects,
  },
  {
    id: 4,
    title: 'CV',
    icon: IconType.File,
  },
];

const Navbar = () => {
  const items = navItems.map((item) => (
    <NavItem>
      <NavLink>
        <NavIcon>
          <Icon icon={item.icon} color="inherit" />
        </NavIcon>
        <NavTitle>{item.title}</NavTitle>
      </NavLink>
    </NavItem>
  ));

  return (
    <Nav>
      <NavList>{items}</NavList>
    </Nav>
  );
};

export default Navbar;
