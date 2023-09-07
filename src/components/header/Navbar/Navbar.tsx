import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import Icon, { IconType } from "components/ui/display/Icon";

type NavItemProps = {
  name: string;
  xPos: number;
  active: boolean;
  onClick: (name: string, x: number) => void;
};

const NavItem = ({ name, xPos, active, onClick }: NavItemProps) => {
  const classes = classNames(
    "w-20 h-10 rounded-full cursor-pointer transition-colors ease-in flex flex-row justify-center items-center",
    {
      "text-contrast-primary": active,
      "text-default hover:bg-primary-light/50": !active,
    }
  );

  return (
    <li
      className={classes}
      onClick={() => {
        onClick(name, xPos);
      }}
    >
      <Icon icon={IconType.Code} />
      <span className="ml-2">{name}</span>
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
  const [activeXPos, setActiveXPos] = useState(0);
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const gap = 16;
  const width = 80;
  const xOffset = 96;

  const switchNavItem = (name: string, xPos: number) => {
    setActiveXPos(xPos);
    setActiveNavItem(name);
  };

  return (
    <ul className="py-1 px-2 marker:list-none flex flex-row gap-4 relative z-10">
      <NavSwitch xPos={activeXPos} />
      <NavItem
        name="Home"
        xPos={0}
        active={activeNavItem == "Home"}
        onClick={switchNavItem}
      />
      <NavItem
        name="Skills"
        xPos={xOffset}
        onClick={switchNavItem}
        active={activeNavItem == "Skills"}
      />
      <NavItem
        name="Projects"
        xPos={xOffset * 2}
        onClick={switchNavItem}
        active={activeNavItem == "Projects"}
      />
      <NavItem
        name="CV"
        xPos={xOffset * 3}
        onClick={switchNavItem}
        active={activeNavItem == "CV"}
      />
    </ul>
  );
};

const Navbar = () => {
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

  const classes = classNames(
    "rounded-full text-base font-normal transition-all duration-100 ease-in",
    {
      "bg-gray-400 shadow-md": scroll,
    }
  );

  return (
    <nav className={classes}>
      <NavList />
    </nav>
  );
};

export default Navbar;
