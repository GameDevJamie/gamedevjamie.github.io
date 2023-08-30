import React from 'react';
import Icon, { IconType } from 'components/ui/display/Icon';
import Switch from 'components/ui/input/switch';

const Brand = () => {
  return (
    <div className="flex justify-center items-center text-sm md:text-lg">
      <span className="mr-2">
        <Icon icon={IconType.Code} />
      </span>
      <h3>Jamie Tumalty</h3>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-auto max-w-screen-lg pt-3 pb-3">
      <Brand />
      <Navbar />
      <Switch />
    </header>
  );
};

export default Header;
