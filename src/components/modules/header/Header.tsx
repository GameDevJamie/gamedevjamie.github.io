import React from "react";
import { Wrapper, Brand, BrandName, PlaceHolder } from "./styles";
import Navbar from "./navbar";
import ThemeSwitcher from "./themeSwitcher";
import { FlexRow } from "components/common/globals/layout";

type Props = {
  onNavClick: (name: string) => void;
  onThemeToggle: (mode: string) => void;
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
        <ThemeSwitcher onThemeToggle={onThemeToggle} />
      </FlexRow>
    </Wrapper>
  );
};

export default Header;
