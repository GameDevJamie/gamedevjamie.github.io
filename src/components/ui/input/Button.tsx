import React from 'react';
import ButtonBase from './ButtonBase';
import classNames from 'classnames';

type Props = {
  variant: variant;
  color: color;
  size: size;
  onClick?: () => void;
  href?: string;
  text: string;
};

const sizeStyles = {
  sm: 'px-2 py-1',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
};

const Button = ({ variant, color, size, onClick, href, text }: Props) => {
  const classes = classNames(sizeStyles[size], 'rounded-md');

  return (
    <ButtonBase
      variant={variant}
      color={color}
      extraClassNames={classes}
      onClick={onClick}
      href={href}
    >
      {text}
    </ButtonBase>
  );
};

export default Button;
