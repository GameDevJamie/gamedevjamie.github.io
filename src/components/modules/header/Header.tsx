import React from "react";
import { Wrapper, Brand, BrandName, PlaceHolder } from "./styles";
import Navbar from "./navbar";
import { FlexRow } from "components/common/globals/layout";
import Switch from "components/common/switch";
import { IconType } from "components/common/icon";

type Props = {
  onNavClick: (name: string) => void;
  onThemeToggle: (isDark: boolean) => void;
};

const Header = ({ onNavClick, onThemeToggle }: Props) => {
  return (
    <Wrapper>
      <Brand>
        <PlaceHolder />
        <BrandName>Jamie Tumalty</BrandName>
      </Brand>
      <FlexRow>
        <Navbar onChange={onNavClick} />
        <Switch
          onToggle={onThemeToggle}
          offIcon={IconType.Sun}
          onIcon={IconType.Moon}
        />
      </FlexRow>
    </Wrapper>
  );
};

export default Header;
