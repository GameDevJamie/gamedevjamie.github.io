import React from "react";
import { Wrapper, Brand, BrandName, PlaceHolder } from "./styles";
import Navbar from "./navbar";

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
      <div>
        <Navbar onChange={onNavClick} />
        {/*<ThemeSwitcher onThemeToggle={onThemeToggle} />*/}
      </div>
    </Wrapper>
  );
};

export default Header;
