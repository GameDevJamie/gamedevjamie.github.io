import React from 'react';
import IconButton from 'components/ui/input/IconButton';
import Icon, { IconType } from 'components/ui/display/Icon';

type LinkDef = {
  name: string;
  color: color;
  icon: IconType;
  href: string;
};
const links: LinkDef[] = [
  {
    name: 'Twitter',
    color: 'twitter',
    icon: IconType.Twitter,
    href: '',
  },
  {
    name: 'Linkedin',
    color: 'linkedin',
    icon: IconType.LinkedIn,
    href: '',
  },
  {
    name: 'Github',
    color: 'github',
    icon: IconType.Github,
    href: '',
  },
  {
    name: 'ItchIo',
    color: 'itchio',
    icon: IconType.ItchIo,
    href: '',
  },
];

const SocialLinks = () => {
  const items = links.map((link) => (
    <IconButton
      variant="outline"
      color={link.color}
      icon={link.icon}
      href={link.href}
      key={link.name}
      size="md"
    />
  ));

  return (
    <div className="flex flex-row justify-center items-center [&>*:not(:last-child)]:mr-3">
      {items}
    </div>
  );
};

export default SocialLinks;

/*
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
    icon: IconType.LinkedIn,
    href: '',
  },
  {
    name: 'Github',
    icon: IconType.Github,
    href: '',
  },
  {
    name: 'ItchIo',
    icon: IconType.ItchIo,
    href: '',
  },
];

const SocialLinks = () => {
  const items = links.map((link) => (
    <IconButton
      icon={link.icon}
      href={link.href}
      key={link.name}
      size={{ mobile: 'small', tablet: 'medium' }}
    />
  ));

  return <Stack direction="row">{items}</Stack>;
};

export default SocialLinks;
*/
