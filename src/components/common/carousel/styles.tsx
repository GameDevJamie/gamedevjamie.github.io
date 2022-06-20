import styled from "styled-components";
import { mediaMin } from "utils/functions";
import { theme } from "utils/theme";

const Wrapper = styled.div`
  background-color: #fff;
  min-width: 200px;
  min-height: 100px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    min-height: 150px;
  }
`;

export { Wrapper };
