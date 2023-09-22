import React, { useEffect, useState, useRef, LegacyRef } from "react";
import { motion } from "framer-motion";
import Icon, { IconType } from "components/ui/display/Icon";
import classNames from "classnames";

type NavItemProps = {
  title: string;
  icon: IconType;
  active?: boolean;
  index: number;
  onClick: (index: number) => void;
};

const NavItem = React.forwardRef(
  (
    { title, icon, active, index, onClick }: NavItemProps,
    ref: LegacyRef<HTMLLIElement>
  ) => {
    const classes = classNames(
      "flex flew-row justify-center items-center py-2 px-[10px] md:px-4 my-1 mx-2 cursor-pointer z-10",
      { "text-primary": active }
    );

    return (
      <li
        className={classes}
        ref={ref}
        onClick={() => {
          onClick(index);
        }}
      >
        <Icon icon={icon} />
        <span className="ml-1">{title}</span>
      </li>
    );
  }
);

const NavSwitch = ({ width, xPos }: { width: number; xPos: number }) => {
  return (
    <motion.div
      className="bg-green-300 rounded-full shadow-md absolute h-10 top-0 bottom-0 my-auto"
      initial={false}
      animate={{ width: width, left: xPos }}
    />
  );
};

const items = [
  { title: "Home", icon: IconType.House },
  { title: "Skills", icon: IconType.VSCode },
  { title: "Projects", icon: IconType.Code },
  { title: "CV", icon: IconType.FileLines },
];
//Margins
//0 = 1
//1 = 3
//2 = 5
//3 = 7
//n = 2n + 1
const NavList = () => {
  const [xPos, setXPos] = useState(0);
  const [width, setWidth] = useState(0);

  const refList = useRef<Array<HTMLLIElement>>(new Array());
  useEffect(() => {
    setActive(0);
  }, []);

  //UL padding + (margin * ((2 * index) - 1)) + (each navItem width up to and not including selected navItem)

  const setActive = (index: number) => {
    let ulPadding = 8;
    var style = window.getComputedStyle(refList.current[0]);
    let margin = parseInt(
      style.marginLeft.substring(0, style.marginLeft.indexOf("px"))
    );
    console.log(margin);
    let t = ulPadding + margin * (index * 2 + 1);

    let count = 0;
    while (count < index) {
      t += refList.current[count]?.offsetWidth;
      count++;
    }

    setXPos(t);
    setWidth(refList.current[index]?.offsetWidth);
  };

  const navItemsMap = items.map((i, index) => {
    return (
      <NavItem
        key={i.title}
        title={i.title}
        icon={i.icon}
        index={index}
        onClick={setActive}
        ref={(el: HTMLLIElement) => (refList.current[index] = el)}
      />
    );
  });

  return (
    <ul className="py-1 px-2 list-none flex flex-row relative">
      <NavSwitch width={width} xPos={xPos} />

      {navItemsMap}
    </ul>
  );
};

const Navbar = () => {
  return (
    <motion.nav
      className="rounded-full text-base bg-white/100 shadow-lg relative flex justify-center overflow-hidden"
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
