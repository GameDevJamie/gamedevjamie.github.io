import React from 'react';

const Brand = () => {
  return (
    <div className="bg-slate-500 flex flex-col justify-center items-center min-h-[150px]">
      <h1 className="text-xl">Jamie Tumalty</h1>
      <span>Software Developer</span>
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed left-0 top-0 h-full w-48 bg-green-200">
      <Brand />
    </header>
  );
};

export default Header;
