import styled from "styled-components";
import { animated } from "react-spring";

type Props = {
  size: string;
};
const Box = styled(animated.div)<Props>`
  height: ${p => p.size};
  width: ${p => p.size};
  border-radius: 10px;
  margin: 10px;
`;

const Container = styled(animated.div)`
  width: 90%;
  height: 90%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 10001;
  border-radius: 10px;
  background: white;
`;

export { Box, Container };
