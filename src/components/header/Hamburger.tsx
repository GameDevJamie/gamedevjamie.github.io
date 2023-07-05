import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

type Props = {
  isActive: boolean;
  onToggle?: (active: boolean) => void;
};

const Hamburger = ({ isActive, onToggle }: Props) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  useEffect(() => {
    active != isActive && setActive(isActive);
  }, [isActive]);

  useEffect(() => {
    onToggle && onToggle(active);
  }, [active]);

  const main = classNames(
    'w-10 bg-black rounded-full transition-all duration:150',
    {
      'h-0': active,
      'h-1': !active,
    }
  );

  const before = classNames(
    "before:content-[''] before:absolute before:w-10 before:h-1 before:bg-black before:rounded-full before:transition-all before:duration-150",
    {
      'before:translate-y-0 before:-rotate-45': active,
      'before:-translate-y-3': !active,
    }
  );

  const after = classNames(
    "after:content-[''] after:absolute after:w-10 after:h-1 after:bg-black after:rounded-full after:transition-all after:duration-150",
    {
      'after:translate-y-0 after:rotate-45': active,
      'after:translate-y-3': !active,
    }
  );

  var full = classNames(main, before, after);

  return (
    <div className="grid place-content-center w-10 h-10" onClick={toggle}>
      <div className={full}></div>
    </div>
  );
};

Hamburger.defaultProps = {
  isActive: false,
};

export default Hamburger;
