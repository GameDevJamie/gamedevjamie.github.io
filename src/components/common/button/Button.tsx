import React from "react";
import { StyledComponent } from "styled-components";
import { BasicButton } from "./styles";

type Props = {
  children: React.ReactNode;

  onClick?: () => void;
};

const handleLinkWrapping = (
  Component: StyledComponent<"button", any>,
  props: Props
) => {
  const button = (
    <Component onClick={props.onClick}>{props.children}</Component>
  );
  return button;
};

const Button = (props: Props) => handleLinkWrapping(BasicButton, props);

export { Button };
