import React from "react";
import { motion, spring } from "framer-motion";
import Icon, { IconType } from "components/ui/display/Icon";

type NavItemProps = {
  title: string;
  icon: IconType;
};

const NavItem = ({ title, icon }: NavItemProps) => {
  return (
    <li className="flex flew-row justify-center items-center py-2 px-4 my-1 mx-2 cursor-pointer">
      <Icon icon={icon} />
      <span className="ml-1">{title}</span>
    </li>
  );
};

const NavList = () => {
  return (
    <ul className="py-1 px-2 list-none flex flex-row overflow-hidden">
      <NavItem title="Home" icon={IconType.House} />
      <NavItem title="Skills" icon={IconType.VSCode} />
      <NavItem title="Projects" icon={IconType.Code} />
      <NavItem title="CV" icon={IconType.FileLines} />
    </ul>
  );
};

//Navbar animation: pops in circle
//When animation is finished this triggers the next animation for NavList (Add Padding)

const Navbar = () => {
  return (
    <motion.nav
      className="rounded-full text-md bg-indigo-400 relative overflow-hidden flex justify-center"
      animate={{ paddingRight: 100, paddingLeft: 100 }}
      transition={{
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      }}
    >
      <NavList />
    </motion.nav>
  );
};

export default Navbar;
