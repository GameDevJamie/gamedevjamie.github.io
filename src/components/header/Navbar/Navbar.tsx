import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import Icon, { IconType } from "components/ui/display/Icon";

type NavItemProps = {
  name: string;
  icon: IconType;
};

const NavItem = ({ name, icon }: NavItemProps) => {
  const classes = classNames(
    "p-2 mx-2 rounded-full cursor-pointer transition-colors ease-in flex flex-row justify-center items-center text-default bg-red-200"
  );

  return (
    <li className={classes}>
      <Icon icon={icon} />
      <span className="ml-1">{name}</span>
    </li>
  );
};

const NavSwitch = ({ xPos }: { xPos: number }) => {
  return (
    <motion.div
      animate={{ x: xPos, bottom: "50%", translateY: "50%" }}
      //initial={false} Uncomment if don't want to animate on load
      className="absolute bg-primary w-20 h-10 rounded-full bottom-2/4 translate-y-1/2 -z-10"
    ></motion.div>
  );
};

const NavList = () => {
  /*
  const [activeXPos, setActiveXPos] = useState(0);
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const gap = 16;
  const width = 80;
  const xOffset = 96;

  const switchNavItem = (name: string, xPos: number) => {
    setActiveXPos(xPos);
    setActiveNavItem(name);
  };*/

  return (
    <ul className="py-1 px-2 marker:list-none flex flex-row relative z-10">
      <NavItem name="Home" icon={IconType.House} />
      <NavItem name="About" icon={IconType.User} />
      <NavItem name="Projects" icon={IconType.Code} />
      <NavItem name="CV" icon={IconType.FileLines} />
    </ul>
  );
};

const Navbar = () => {
  /*
  const [scroll, setScroll] = useState(false);

  const handleOnScroll = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);
*/
  const classes = classNames(
    "rounded-full text-sm font-normal transition-all duration-100 ease-in bg-gray-200 flex flex-row justify-centre"
  );

  return (
    <nav className={classes}>
      <NavList />
    </nav>
  );
};

export default Navbar;
