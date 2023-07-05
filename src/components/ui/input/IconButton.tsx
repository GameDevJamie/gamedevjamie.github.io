import React from 'react';
import ButtonBase from './ButtonBase';
import Icon, { IconType } from 'components/ui/display/Icon';
import classNames from 'classnames';

type Props = {
  variant: variant;
  color: color;
  size: size;
  onClick?: () => void;
  href?: string;
  icon: IconType;
};

const sizeStyles = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
};

const IconButton = ({ variant, color, size, onClick, href, icon }: Props) => {
  const classes = classNames(sizeStyles[size], 'rounded-full');

  return (
    <ButtonBase
      variant={variant}
      color={color}
      onClick={onClick}
      href={href}
      extraClassNames={classes}
    >
      <Icon icon={icon} />
    </ButtonBase>
  );
};

export default IconButton;
