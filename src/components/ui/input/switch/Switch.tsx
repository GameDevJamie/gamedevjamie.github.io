import React, { useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import Icon, { IconType } from 'components/ui/display/Icon';

type Props = {
  onToggle?: (isOn: boolean) => void;
  //leftIcon: IconType;
  //rightIcon: IconType;
};

const Switch = ({ onToggle }: Props) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    onToggle && onToggle(!isOn);
    setIsOn(!isOn);
  };

  const handleClasses = classNames(
    'w-10 h-10 relative rounded-full transition duration-500 transform p-1 text-white',
    {
      'bg-yellow-500 -translate-x-2': !isOn,
      'bg-gray-700 translate-x-full': isOn,
    }
  );

  return (
    <button
      className="w-16 h-8 rounded-full bg-slate-300 flex items-center transition duration-300 focus:outline-none shadow"
      onClick={toggleSwitch}
    >
      <div className={handleClasses}></div>
    </button>
  );
};

/*
const Switch = ({ onToggle, leftIcon, rightIcon }: Props) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    onToggle && onToggle(!isOn);
    setIsOn(!isOn);
  };

  const classes = classNames('absolute w-full h-full flex items-center', {
    'justify-start': !isOn,
    'justify-end': isOn,
  });

  return (
    <div
      className="w-16 h-8 bg-slate-500 text-white flex items-center justify-between rounded-full cursor-pointer relative text-xs"
      onClick={toggleSwitch}
    >
      <span className="z-10 ml-1">
        <Icon icon={leftIcon} />
      </span>
      <span className="z-10 mr-1">
        <Icon icon={rightIcon} />
      </span>
      <div className={classes}>
        <motion.div
          className="w-8 h-8 bg-primary-dark rounded-full"
          layout
          transition={spring}
        />
      </div>
    </div>
  );
};
*/

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export default Switch;
