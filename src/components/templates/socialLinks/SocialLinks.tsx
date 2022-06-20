import React from "react";
import { IconType } from "components/common/icon";
import { IconLink } from "components/common/iconLink";
import { List } from "components/common/list";
import { theme } from "utils/theme";

import { useSiteMetadata } from "utils/graphql/queries/getSiteMetaData";
import { IconButton } from "components/common/iconButton";

type Props = {
  hasBackground: boolean;
};

const SocialLinks = ({ hasBackground }: Props) => {
  const data = useSiteMetadata();

  const socialListItems = data.social.map(s => {
    return hasBackground ? (
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
    );
  });

  return <List items={socialListItems} />;
};

SocialLinks.defaultProps = {
  hasBackground: false,
};

export default SocialLinks;
