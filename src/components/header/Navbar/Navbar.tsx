import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import Icon, { IconType } from 'components/ui/display/Icon';

type NavItemProps = {
  title: string;
  icon: IconType;
};

const NavItem = ({ title, icon }: NavItemProps) => {
  return (
    <li className="p-2 bg-gray-600 text-white rounded-full mx-2 cursor-pointer flex flex-row justify-center items-center min-w-max">
      <Icon icon={icon} />
      <span className="ml-2">{title}</span>
    </li>
  );
};

const NavList = () => {
  return (
    <ul className="py-1 px-2 list-none flex flex-row relative z-10">
      <NavItem title="Home" icon={IconType.House} />
      <NavItem title="Projects" icon={IconType.Code} />
      <NavItem title="CV" icon={IconType.FileLines} />
    </ul>
  );
};

const Navbar = () => {
  const classes = classNames(
    'rounded-full text-sm font-normal transition-all duration-100 ease-in bg-gray-200 flex flex-row justify-centre'
  );

  return (
    <nav>
      <NavList />
    </nav>
  );
};

export default Navbar;
