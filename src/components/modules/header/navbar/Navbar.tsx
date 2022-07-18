import React, { useState } from "react";
import { Nav, NavList, NavItem, NavLink, NavTitle } from "./styles";
import { Icon, IconType } from "components/common/icon";

type Props = {
  onChange: (id: string) => void;
};

const Navbar = ({ onChange }: Props) => {
  const [activeId, setActiveId] = useState("home");
  const handleNavClick = (id: string) => {
    setActiveId(id);
    onChange(id);
  };

  const navItems = [
    {
      id: "home",
      name: "home",
      icon: IconType.Home,
    },
    {
      id: "about",
      name: "about",
      icon: IconType.User,
    },
    {
      id: "skills",
      name: "skills",
      icon: IconType.Skills,
    },
    {
      id: "projects",
      name: "projects",
      icon: IconType.Projects,
    },
  ];

  return (
    <Nav>
      <NavList>
        {navItems.map(l => (
          <NavItem
            className={
              l.id.toUpperCase() == activeId.toUpperCase() ? "active" : ""
            }
          >
            <NavLink
              onClick={() => {
                handleNavClick(l.id);
              }}
            >
              <Icon icon={l.icon} color="inherit" />
              <NavTitle>{l.name}</NavTitle>
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navbar;
