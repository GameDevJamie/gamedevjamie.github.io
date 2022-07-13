import React, { useState } from "react";
import { Wrapper, SliderWrapper, Input, Slider } from "./styles";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Switch = ({ checked, onChange }: Props) => {
  return (
    <Wrapper>
      <SliderWrapper>
        <Input
          type="checkbox"
          checked={checked}
          //onChange={e => onChange(e.target.checked)}
        />
        <Slider />
      </SliderWrapper>
    </Wrapper>
  );
};

export default Switch;
