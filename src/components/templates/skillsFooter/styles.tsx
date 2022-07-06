import styled from "styled-components";
import { P } from "components/common/globals/typography";
import { mediaMin, mediaMax } from "utils/functions";
import { theme } from "utils/theme";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  cursor: pointer;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    height: 65px;
    width: 50%;
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillTitle = styled(P)`
  text-align: center;
  padding: 0;
`;

const SkillsGrid = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 30px;

  ${mediaMax(theme.device.breakPoints.tablet)} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export { Wrapper, SkillWrapper, SkillTitle, SkillsGrid };
