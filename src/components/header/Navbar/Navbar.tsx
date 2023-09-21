import React, { useEffect, useRef, useState } from "react";
import { motion, spring } from "framer-motion";
import Icon, { IconType } from "components/ui/display/Icon";
import classNames from "classnames";

type NavItemProps = {
  title: string;
  icon: IconType;
  active?: boolean;
};

const NavItem = ({ title, icon, active }: NavItemProps) => {
  const classes = classNames("flex flew-row justify-center items-center py-2 px-4 my-1 mx-2 cursor-pointer z-10", {"text-primary": active});

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if(active && ref.current){
      console.log(ref.current.offsetWidth); //How to get width of element
    }
  }, []);

  return (
    <li className={classes} ref={ref}>
      <Icon icon={icon} />
      <span className="ml-1">{title}</span>
    </li>
  );
};

const NavSwitch = ({width, xPos} : {width: number, xPos: number}) => {
  return <div className="bg-green-300 rounded-full shadow-md absolute h-10 top-0 bottom-0 my-auto" style={{width: width, left: xPos}} />
}


//Margins
//1 = 1
//2 = 3
//3 = 5
//4 = 7
const NavList = () => {
  const homeWidth = 102;
  const skillsWidth = 90;
  const projectsWidth = 119;
  const cvWidth = 71;

  const paddingX = 8;
  
  //Offsets for each item (Only works when switch is centered by translateX)
  const margin = 8;
  const offset = paddingX + margin + (homeWidth / 2);
  const offset2 = paddingX + margin + margin + margin + homeWidth + (skillsWidth / 2);  //Skills
  const offset3 = paddingX + margin + margin + margin + margin + margin + homeWidth + skillsWidth + (projectsWidth / 2); //Projects

  const [xPos, setXPos] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if(ulRef.current) {
      let numItems = 4;
      let t = (ulRef.current.offsetWidth) / numItems;

      let index = 1;
      let result = paddingX + margin;// paddingX + margin + (t * (index - 1));
      setXPos(result);
    }
  }, [])

  return (
    <ul className="py-1 px-2 list-none flex flex-row relative" ref={ulRef}>
      <NavSwitch width={1} xPos={xPos} />

      <NavItem title="Home" icon={IconType.House} />
      <NavItem title="Skills" icon={IconType.VSCode} />
      <NavItem title="Projects" icon={IconType.Code} />
      <NavItem title="CV" icon={IconType.FileLines} active/>
    </ul>
  );
};

const Navbar = () => {
  return (
    <motion.nav
      className="rounded-full text-md bg-white/80 shadow-lg relative flex justify-center overflow-hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
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
