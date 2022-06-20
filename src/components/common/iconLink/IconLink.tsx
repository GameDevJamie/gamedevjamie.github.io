import React from "react";
import styled from "styled-components";

import { theme } from "utils/theme";
import { Link } from "../link";
import { Icon, IconType } from "../icon/Icon";

interface StyleProps {
  color: string;
  hoverColor?: string;
}
const Wrapper = styled.div<StyleProps>`
  color: ${props => props.color};
  cursor: pointer;
  transition: color ${theme.transition.color + `s`} ease;

  &:hover {
    ${props => props.hoverColor && `color: ${props.hoverColor};`}
  }
`;

type Props = {
  icon: IconType;
  color: string;
  hoverColor?: string;
  href?: string;
};
const IconLink = ({ icon, color, hoverColor, href }: Props) => {
  return (
    <Wrapper color={color} hoverColor={hoverColor}>
      <Link href={href} animate={false}>
        <Icon icon={icon} color={"inherit"} />
      </Link>
    </Wrapper>
  );
};

IconLink.defaultProps = {
  color: "#000",
};

export { IconLink };
