import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "utils/theme";

/*
background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 203, 50, 1) 0%,
    rgba(244, 56, 98, 1) 100.2%
  );
  
  background-image: linear-gradient(
      109.8deg,
      rgba(62, 5, 116, 1) -5.2%,
      rgba(41, 14, 151, 1) -5.2%,
      rgba(216, 68, 148, 1) 103.3%
    );
*/

interface ContainerStyles {
  onColor: string;
  offColor: string;
}
const Container = styled.div<ContainerStyles>`
  height: 2rem;
  width: 3.4rem;
  background: ${props => props.offColor};
  border-radius: 25px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px;
  cursor: pointer;
  transition: all 0.3s;

  .icon {
    color: ${props => props.offColor};
  }

  &[data-switchOn="true"] {
    background: ${props => props.onColor};

    .icon {
      color: ${props => props.onColor};
    }
  }
`;

const Handle = styled(motion.div)`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #fff;
  overflow: hidden;
`;

export { Container, Handle };
