import Icon, { IconType } from 'components/ui/display/Icon';
import React from 'react';

/*
    Navbar is the main side header (without the brand name)
    Navbar will contain Navlinks and Social Links (Stuff that needs to appear in mobile and desktop mode)
*/

const navItems = [
  {
    title: 'Home',
    icon: IconType.Twitter,
  },
  {
    title: 'About',
    icon: IconType.Twitter,
  },
  {
    title: 'Projects',
    icon: IconType.Twitter,
  },
];

const NavLinks = () => {
  const list = navItems.map((item) => (
    <li className="mb-2">
      <a
        className="block pt-2 pb-2 cursor-pointer bg-slate-300 rounded-md "
        href="#"
      >
        <i className="pl-2 pr-2">
          <Icon icon={item.icon} />
        </i>
        <span>{item.title}</span>
      </a>
    </li>
  ));

  return <ul className="list-none px-2">{list}</ul>;
};

const Navbar = () => {
  return (
    <nav>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
