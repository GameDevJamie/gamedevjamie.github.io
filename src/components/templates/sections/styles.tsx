import styled from "styled-components";
import { H2 } from "components/common/globals/typography";
import { mediaMax } from "utils/functions";
import { theme } from "utils/theme";

const SectionWrapper = styled.section`
  height: calc(100vh - 90px);
  padding-left: 50px;

  ${mediaMax(theme.device.breakPoints.tablet)} {
    padding-left: 20px;
  }
`;

const SectionTitle = styled(H2)`
  margin-top: 10px;
  width: 75%;
  border-bottom: 1px solid black;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
`;

export { SectionWrapper, SectionTitle, SectionContent };
