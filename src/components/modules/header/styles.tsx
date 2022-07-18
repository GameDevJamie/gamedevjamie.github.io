import styled from "styled-components";
import { H3 } from "components/common/globals/typography";
import { Container } from "components/common/globals/layout";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";

const Wrapper = styled(Container)`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    padding: 40px 0px;
  }
`;

const Brand = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const BrandName = styled(H3)`
  display: none;
  color: inherit;
  margin-left: 10px;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    display: block;
  }
`;

const PlaceHolder = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #2e2e2e;
`;

export { Wrapper, Brand, BrandName, PlaceHolder };
