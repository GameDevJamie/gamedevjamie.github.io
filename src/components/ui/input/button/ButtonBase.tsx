import React from "react";
import classNames from "classnames";

/*New 

  variant: solid, outline
  color: just primary by default, add more later if needed
  size: all same for now
  hoverAnimation: fade, swipe
  
*/

type Props = {
  variant: variant;
  color: color;
  onClick?: () => void;
  href?: string;
  extraClassNames: string;
  children: React.ReactNode;
};

const buttonStyles = {
  solid: {
    inherit: "bg-inherit text-white",
    primary:
      "bg-primary text-contrast-primary border-primary hover:border-primary-light hover:bg-primary-light hover:shadow-elevate",
  },
  outline: {
    inherit: "border-inherit bg-transparent text-default",
    primary:
      "bg-transparent text-primary border-primary hover:bg-primary hover:text-contrast-primary",
  },
  elevate: {
    inherit: "",
    primary:
      "bg-transparent text-primary border-0 hover:bg-opacity-10 hover:bg-primary shadow-elevate",
  },
};

const ButtonBase = ({
  variant,
  color,
  onClick,
  href,
  extraClassNames,
  children,
}: Props) => {
  const classes = classNames(
    "relative text-base block cursor-pointer border border-solid transition-all ease-out duration-200",
    buttonStyles[variant][color],
    extraClassNames
  );

  if (href) {
    return (
      <a href={href} target="_blank" className={classes}>
        <button className="block" onClick={onClick}>
          {children}
        </button>
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
};

export default ButtonBase;
