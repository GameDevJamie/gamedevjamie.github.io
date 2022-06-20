import styled from "styled-components";
import { H1 } from "components/common/globals/typography";
import { mediaMax } from "utils/functions";
import { theme } from "utils/theme";

const Wrapper = styled.div`
  padding: 10px;
  text-align: center;
`;

const TitleWrapper = styled.div`
  min-height: 135px;
  ${mediaMax(theme.device.breakPoints.mobileL)} {
    min-height: 80px;
  }
`;

const Title = styled(H1)`
  text-align: center;
  font-size: 3em;

  ${mediaMax(theme.device.breakPoints.mobileL)} {
    font-size: 2.25em;
  }
`;

export { Wrapper, TitleWrapper, Title };
