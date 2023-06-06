import React from 'react';
import { Stack } from 'components/ui/layout';
import { IconButton } from 'components/ui/input';
import { IconType } from 'components/ui/display';

const links = [
  {
    name: 'Twitter',
    icon: IconType.Twitter,
    href: '',
  },
  {
    name: 'Linkedin',
    icon: IconType.Twitter,
    href: '',
  },
  {
    name: 'Github',
    icon: IconType.Twitter,
    href: '',
  },
  {
    name: 'ItchIo',
    icon: IconType.Twitter,
    href: '',
  },
];

const SocialLinks = () => {
  const items = links.map((link) => (
    <IconButton
      icon={link.icon}
      href={link.href}
      key={link.name}
      size={{ md: 'large', lg: 'small' }}
    />
  ));

  return <Stack direction="row">{items}</Stack>;
};

export default SocialLinks;
