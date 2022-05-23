import styled from "styled-components";
import { H1 } from "components/common/globals/typography";
import { mediaMax } from "utils/functions";
import { theme } from "utils/theme";

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 20px;
  text-align: center;
`;

const TitleWrapper = styled.div`
  min-height: 135px;
`;

const Title = styled(H1)`
  text-align: center;
  font-size: 3em;

  ${mediaMax(theme.device.breakPoints.mobileL)} {
    font-size: 2.25em;
  }
`;

const Placeholder = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: black;
`;

export { Wrapper, TitleWrapper, Title, Placeholder };
