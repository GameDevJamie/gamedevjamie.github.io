import React from "react";
import { Icon, IconType } from "components/common/icon";
import { IconLink } from "components/common/iconLink";
import { List } from "components/common/list";
import { theme } from "utils/theme";

import { useSiteMetadata } from "utils/graphql/queries/getSiteMetaData";
import { IconButton } from "components/common/button";

type Props = {
  hasBackground: boolean;
};

const SocialLinks = ({ hasBackground }: Props) => {
  const data = useSiteMetadata();

  const socialListItems = data.social.map(s => {
    /*return hasBackground ? (
      <IconButton
        href={s.href}
        icon={s.icon as IconType}
        hoverColor={theme.colors.social.getColor(s.icon)}
      />
    ) : (
      <IconLink
        href={s.href}
        icon={s.icon as IconType}
        hoverColor={theme.colors.social.getColor(s.icon)}
      />
    );*/

    return (
      <IconButton
        variant="outlined"
        size="small"
        color={s.icon}
        hoverEffect="color"
      >
        <Icon icon={s.icon as IconType} color="inherit" />
      </IconButton>
    );
  });

  return <List items={socialListItems} />;
};

SocialLinks.defaultProps = {
  hasBackground: false,
};

export default SocialLinks;
