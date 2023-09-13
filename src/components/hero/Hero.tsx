import React from "react";
import Button from "components/ui/input/button/Button";
import Stack from "components/ui/layout/Stack";
import Icon, { IconType } from "components/ui/display/Icon";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full h-screen m-auto max-w-screen-xl">
      <div className="text-center max-w-xl selection:bg-primary-light/30">
        <div className="text-2xl font-bold">
          <h2>Hi, I'm Jamie</h2>
          <h2>A Software Developer</h2>
        </div>

        <p className="text-base text-muted">
          {/*Place in Footer
          Website developed with React, Gatsby, and Tailwind.*/}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-row justify-center items-center [&>*:not(:last-child)]:mr-8">
          <button className="rounded-md text-base px-5 py-2 text-contrast-primary bg-primary flex flex-row justify-center items-center shadow-2xl">
            <Icon icon={IconType.Code} />
            <span className="ml-1">Projects</span>
          </button>

          <button className="rounded-md text-base px-5 py-2 box-border min-w-[100px] border-primary border text-primary flex flex-row justify-center items-center shadow-md transition-all ease-in duration-100 hover:bg-primary hover:text-contrast-primary">
            <Icon icon={IconType.FileLines} />
            <span className="ml-1">CV</span>
          </button>
        </div>
      </div>
      <div>Video</div>
    </div>
  );
};

export default Hero;
