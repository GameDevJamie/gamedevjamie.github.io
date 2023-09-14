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
      "bg-primary text-contrast-primary border-primary hover:bg-primary-dark hover:border-primary-dark",
  },
  outline: {
    inherit: "border-inherit bg-transparent text-default",
    primary:
      "bg-transparent text-default border-primary hover:text-contrast-primary shadow-innerOff hover:shadow-innerOn",
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
