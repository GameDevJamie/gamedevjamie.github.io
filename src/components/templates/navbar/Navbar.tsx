import React, { useState } from "react";
import { Nav, Wrapper, NavList, NavLink } from "./styles";
import { Icon, IconType } from "components/common/icon";

type Props = {
  onChange: (id: string) => void;
};

const Navbar = ({ onChange }: Props) => {
  const navLinkArray = [
    {
      id: "about",
      name: "ABOUT",
      icon: IconType.User,
      active: true,
    },
    {
      id: "skills",
      name: "SKILLS",
      icon: IconType.Skills,
      active: false,
    },
    {
      id: "projects",
      name: "PROJECTS",
      icon: IconType.Projects,
      active: false,
    },
  ];

  const [navLinks, setNavLinks] = useState(navLinkArray);

  const handleActiveNavLink = (id: string) => {
    console.log(id);
    setNavLinks(
      navLinks.map(link =>
        link.id === id ? { ...link, active: true } : { ...link, active: false }
      )
    );
  };

  return (
    <Nav>
      <Wrapper>
        <NavList>
          {navLinks.map(l => (
            <NavLink
              active={l.active}
              onClick={() => {
                onChange(l.id);
                handleActiveNavLink(l.id);
              }}
            >
              <Icon icon={l.icon} color="inherit" />
              {l.name}
            </NavLink>
          ))}

          {/*CV Link seperate as will just open pdf tab*/}
          <NavLink active={false}>
            <Icon icon={IconType.File} color="inherit" />
            CV
          </NavLink>
        </NavList>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
