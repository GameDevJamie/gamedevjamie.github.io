import React from 'react';
import { StyledIconButton } from './style';
import { Icon, IconType } from 'components/ui/display';

const Button = () => {
  return <div>Button</div>;
};

type Props = {
  icon: IconType;
  size: sizes | ScreenSize;
  href: string;
};

const IconButton = ({ icon, size, href }: Props) => {
  return (
    <StyledIconButton size={size}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
};

export { IconButton };
