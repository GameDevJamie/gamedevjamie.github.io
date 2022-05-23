import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";

const Wrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  background: black;
  z-index: 10000;
`;

type Props = {
  active: boolean;
  onClick?: () => void;
};

const Overlay = ({ active, onClick }: Props) => {
  const transition = useTransition(active, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });

  return transition(
    (style, item) => item && <Wrapper style={style} onClick={onClick} />
  );
};

export default Overlay;
