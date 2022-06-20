import React from "react";
import { IconWrapper } from "./styles";
import { Link } from "../link";
import { Icon, IconType } from "../icon/Icon";

type Props = {
  icon: IconType;
  color: string;
  hoverColor?: string;
  href?: string;
};
const IconButton = ({ icon, color, hoverColor, href }: Props) => {
  return (
    <Link href={href} animate={false}>
      <IconWrapper>
        <Icon icon={icon} color={"inherit"} />
      </IconWrapper>
    </Link>
  );
};

IconButton.defaultProps = {
  color: "#000",
};

export { IconButton };
