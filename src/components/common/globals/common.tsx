import styled, { css } from "styled-components";
import { animated } from "react-spring";

const overlay = css`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: black;
  z-index: 10000;
`;

const Overlay = styled.div`
  ${overlay}
`;

const AnimatedOverlay = styled(animated.div)`
  ${overlay}
`;

export { Overlay, AnimatedOverlay };
