import styled from "styled-components";
import { P } from "components/common/globals/typography";
import { mediaMax } from "utils/functions";
import { theme } from "utils/theme";

const Wrapper = styled.div`
  width: 95px;
  height: 95px;

  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 2px 0px #585858;
  color: black;
  transition: all 0.3s ease;

  font-size: 1.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  &:hover {
    width: 95px;
    height: 95px;
    box-shadow: 1px 1px 10px 0px #585858;
  }

  ${mediaMax(theme.device.breakPoints.tablet)} {
    width: 75px;
    height: 75px;
    &:hover {
      width: 75px;
      height: 75px;
    }
  }
`;

const Title = styled(P)`
  padding: 0;
  text-align: center;
`;

export { Wrapper, Title };
