import React, { ReactElement } from "react";
import Button from "components/ui/input/button/Button";
import Stack from "components/ui/layout/Stack";
import Icon, { IconType } from "components/ui/display/Icon";
import classNames from "classnames";

{
  /*Place in Footer
          Website developed with React, Gatsby, and Tailwind.*/
}

type Props = {
  heading1: string;
  heading2: string;
  subHeading: string;
  videoSrc: string;
  buttons: {
    text: string;
    icon: IconType;
    variant: variant;
    isRightIcon: boolean;
  }[];
};

const Hero = ({ heading1, heading2, subHeading, videoSrc, buttons }: Props) => {
  /*const buttonMap = buttons.map((b) => {
    const classes = classNames(
      "rounded-full text-base px-6 py-3 flex flex-row justify-center items-center shadow-2xl",
      {
        "border-primary border text-primary transition-all ease-in duration-100 hover:bg-primary hover:text-contrast-primary":
          b.variant == "outline",

        "text-contrast-primary bg-primary": b.variant == "solid",
      }
    );
    return (
      <button className={classes}>
        {!b.isRightIcon && <Icon icon={b.icon} />}
        <span className={b.isRightIcon ? "mr-1 md:mr-2" : "ml-1 md:ml-2"}>
          {b.text}
        </span>
        {b.isRightIcon && <Icon icon={b.icon} />}
      </button>
    );
  });*/

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
      <div className="text-center max-w-xl selection:bg-primary-light/30 selection:text-white">
        <div className="text-2xl font-bold">
          <h2>{heading1}</h2>
          <h2>{heading2}</h2>
        </div>

        <p className="text-base text-muted">{subHeading}</p>
        <div className="flex flex-row justify-center items-center [&>*:not(:last-child)]:mr-8">
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
      <div>Video</div>
    </div>
  );
};

export default Hero;
