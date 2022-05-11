import React from "react";
import { Wrapper, Title } from "./styles";
import { Icon, IconType } from "components/common/icon";

type Props = {
  icon: IconType;
  title: string;
};

const SkillBox = ({ icon, title }: Props) => {
  return (
    <Wrapper>
      <Icon icon={icon} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default SkillBox;
