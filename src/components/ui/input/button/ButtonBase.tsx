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
  className: string;
  children: React.ReactNode;
};

const buttonStyles = {
  solid: {
    inherit: "bg-inherit text-white",
    primary:
      "bg-gradient-to-b from-primary to-primary-dark from-80% text-contrast-primary border-solid border-b-2 border-primary hover:from-10%",
  },
  outline: {
    inherit: "border-inherit bg-transparent text-default",
    primary: "",
  },
  elevate: {
    inherit: "",
    primary: "",
  },
};

const ButtonBase = ({
  variant,
  color,
  onClick,
  href,
  className,
  children,
}: Props) => {
  const classes = classNames(
    "relative text-base block cursor-pointer transition-all ease-out shadow-md duration-200",
    buttonStyles[variant][color],
    className
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
