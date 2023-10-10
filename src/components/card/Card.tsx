import classNames from 'classnames';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Video from 'components/ui/display/Video';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const overlayVariant = {
  visible: {
    opacity: 0.6,
  },
  hidden: {
    opacity: 0,
  },
};

const Overlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      className="fixed w-full h-full bg-gray-900 z-[90] left-0 right-0 top-0 bottom-0"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={overlayVariant}
      onClick={onClick}
    />
  );
};

//Instead have a video replace the image that autoplays on open
type Props = {
  thumbnail: IGatsbyImageData;
  videoSrc: string;
  title: string;
  summary: string;
};

const Card = ({ thumbnail, videoSrc, title, summary }: Props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const classes = classNames(
    'bg-paper rounded-lg overflow-x-hidden overflow-y-auto shadow-md',
    {
      'fixed left-0 right-0 top-0 bottom-0 m-auto max-w-[90%]': active,
      'cursor-pointer': !active,
    }
  );

  return (
    <>
      <div className="w-[500px] h-[500px] flex justify-center items-center max-w-full">
        <motion.div
          className={classes}
          initial={false}
          animate={{
            width: active ? '600px' : '300px',
            height: active ? '95%' : '400px',
            zIndex: active ? '100' : '0',
          }}
          whileHover={{ scale: active ? 1 : 1.05 }}
          whileTap={{ scale: active ? 1 : 0.95 }}
          layout
          onClick={toggleActive}
        >
          <motion.div
            className="border"
            initial={false}
            animate={{ height: active ? '20rem' : '15rem' }}
            layout
          >
            {active ? (
              <Video videoSrcURL="" videoTitle="" />
            ) : (
              <GatsbyImage
                image={thumbnail}
                alt=""
                className="w-full h-full object-fill"
              />
            )}
          </motion.div>
          <div className="p-2 text-base">
            <h3 className="text-center font-semibold">{title}</h3>
            <p>{summary}</p>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {active && <Overlay onClick={toggleActive} />}
      </AnimatePresence>
    </>
  );
  //return <div className={classes} onClick={toggleActive}></div>;
};

export default Card;
