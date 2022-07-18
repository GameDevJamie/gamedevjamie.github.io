import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, config } from "react-spring";
import { Icon, IconType } from "components/common/icon";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 0px;
  background-color: grey;
  color: black;
  font-size: 20px;

  cursor: pointer;
`;

type Props = {
  onThemeToggle: (theme: string) => void;
};

const ThemeSwitcher = ({ onThemeToggle }: Props) => {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeToggle(newTheme);
  };

  return (
    <Wrapper onClick={handleThemeToggle}>
      {theme == "light" ? (
        <Icon icon={IconType.Sun} color="inherit" />
      ) : (
        <Icon icon={IconType.Moon} color="inherit" />
      )}
    </Wrapper>
  );
};

export default ThemeSwitcher;
