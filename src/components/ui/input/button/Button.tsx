import React from "react";
import ButtonBase from "./ButtonBase";
import classNames from "classnames";
import Icon, { IconType } from "components/ui/display/Icon";

type Props = {
  variant: variant;
  color: color;
  onClick?: () => void;
  href?: string;
  text: string;

  startIcon?: IconType;
  endIcon?: IconType;
};

const Button = ({
  variant,
  color,
  onClick,
  href,
  text,
  startIcon,
  endIcon,
}: Props) => {
  const classes = classNames("px-4 py-2 md:px-8 md:py-2 rounded-md", {
    "flex flex-row justify-center items-center": startIcon || endIcon,
  });
  const textClasses = classNames({
    "ml-1 md:ml-2": startIcon,
    "mr-1 md:mr-2": endIcon,
  });

  return (
    <ButtonBase
      variant={variant}
      color={color}
      className={classes}
      onClick={onClick}
      href={href}
    >
      {startIcon && <Icon icon={startIcon} />}
      <span className={textClasses}>{text}</span>
      {endIcon && <Icon icon={endIcon} />}
    </ButtonBase>
  );
};

export default Button;
