import React from "react";
import Button from "components/ui/input/button/Button";
import { IconType } from "components/ui/display/Icon";
import Video from "components/ui/display/Video";

{
  /*Place in Footer
          Website developed with React, Gatsby, and Tailwind.*/
}

type Props = {
  name: string;
  profession: string;
  subHeading: string;
  videoSrc: string;
  buttons: {
    text: string;
    icon: IconType;
    variant: variant;
    isRightIcon: boolean;
  }[];
};

const Hero = ({ name, profession, subHeading, videoSrc, buttons }: Props) => {
  const buttonMap = buttons.map((b) => {
    return (
      <Button
        variant={b.variant}
        color="primary"
        text={b.text}
        startIcon={!b.isRightIcon ? b.icon : undefined}
        endIcon={b.isRightIcon ? b.icon : undefined}
      />
    );
  });

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="text-center md:text-left max-w-xl selection:bg-primary/80 selection:text-white">
        <div className="text-heading font-bold">
          <h2>
            Hi, I'm <span className="text-primary-dark">{name}</span>
          </h2>
          <h2>
            A <span className="text-primary-dark">{profession}</span>
          </h2>
        </div>

        <p className="text-base text-muted">{subHeading}</p>
        <div className="flex flex-row justify-center md:justify-start items-center [&>*:not(:last-child)]:mr-8">
          {buttonMap}
          {/*
          <button className="rounded-full text-base px-6 py-3 text-contrast-primary bg-primary flex flex-row justify-center items-center shadow-2xl">
            <span className="mr-2">View Projects</span>
            <Icon icon={IconType.ArrowDown} />
          </button>

          <button className="rounded-full text-base px-6 py-3 box-border min-w-[100px] border-primary border text-primary flex flex-row justify-center items-center shadow-md transition-all ease-in duration-100 hover:bg-primary hover:text-contrast-primary">
            <Icon icon={IconType.FileLines} />
            <span className="ml-1">CV</span>
          </button>*/}
        </div>
      </div>
      <div className="w-full h-full">
        <Video videoSrcURL="Home-Page-Video.mp4" videoTitle="Test" />
      </div>
    </div>
  );
};

export default Hero;
