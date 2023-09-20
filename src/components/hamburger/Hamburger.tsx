import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  onToggle?: (active: boolean) => void;
};

const Hamburger = ({ onToggle }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-7 h-5 mx-2"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <motion.span
        className="absolute w-full h-[.20rem] bg-primary rounded-lg"
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { top: [0, 8, 8], rotateZ: [null, 0, 45] },
          closed: { top: [8, 8, 0], rotateZ: [45, 0, 0] },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute w-full h-[.20rem] top-[8px] bg-primary rounded-lg"
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute w-full h-[.20rem] bg-primary rounded-lg"
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { top: [16, 8, 8], rotateZ: [null, 0, -45] },
          closed: { top: [8, 8, 16], rotateZ: [-45, 0, 0] },
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default Hamburger;
