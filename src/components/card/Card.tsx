import classNames from 'classnames';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const overlayVariant = {
  visible: {
    opacity: 0.5,
  },
  hidden: {
    opacity: 0,
  },
};

const Overlay = () => {
  return (
    <motion.div
      className="fixed w-full h-full bg-gray-800 z-10 left-0 right-0 top-0 bottom-0"
      initial="hidden"
      animate="visible"
      variants={overlayVariant}
    />
  );
};

//Instead have a video replace the image that autoplays on open
type Props = {
  videoSrc: string;
  title: string;
  summary: string;
};

const Card = ({ videoSrc, title, summary }: Props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const classes = classNames(
    'bg-paper rounded-lg overflow-x-hidden overflow-y-auto shadow-md',
    {
      'fixed left-0 right-0 top-0 bottom-0 m-auto': active,
      'cursor-pointer': !active,
    }
  );

  return (
    <>
      <motion.div
        className={classes}
        animate={{
          width: active ? '600px' : '300px',
          height: active ? '95%' : '400px',
          zIndex: '20',
        }}
        whileHover={{ scale: active ? 1 : 1.2 }}
        whileTap={{ scale: active ? 1 : 0.95 }}
        layout
        onClick={toggleActive}
      >
        <div className="h-72">
          <img src={videoSrc} className="w-full h-full object-fill" />
        </div>
        <div className="p-2">
          <h3 className="text-xl text-center font-semibold">{title}</h3>
          <p>{summary}</p>
        </div>
      </motion.div>
      {active && <Overlay />}
    </>
  );
  //return <div className={classes} onClick={toggleActive}></div>;
};

export default Card;
