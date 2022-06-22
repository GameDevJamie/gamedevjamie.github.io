import styled from "styled-components";
import { animated } from "react-spring";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";

const Container = styled(animated.div)`
  border-radius: 10px;
  background: white;
  overflow: hidden;
  height: auto;
  max-height: 90%;
`;

const Wrapper = styled.div`
  width: 98%;
  height: 98%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    width: 50%;
    height: 90%;
  }
`;

const Content = styled(animated.div)`
  opacity: 0;
  padding: 20px;
`;

export { Container, Wrapper, Content };
