import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 200px;
`;

const SliderWrapper = styled.label`
  position: absolute;
  width: 100%;
  height: 100px;
  border-radius: 50px;
  background-color: black;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 13px;
    left: 16px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    box-shadow: inset 28px -4px 0px 0px white;
    background-color: black;
    transition: 0.3s;
  }

  ${Input}:checked + & {
    background-color: white;
  }
  ${Input}:checked + &:before {
    transform: translateX(95px);
    background-color: black;
    box-shadow: none;
  }
`;

export { Wrapper, SliderWrapper, Input, Slider };
