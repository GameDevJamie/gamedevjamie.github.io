import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionTitle, SectionContent } from "./styles";
import SkillBox from "../skillBox";
import { IconType } from "components/common/icon";
import { mediaMax } from "utils/functions";
import { theme } from "utils/theme";
import { animated, useTrail, config } from "react-spring";
import { useSiteMetadata } from "utils/graphql/queries/getSiteMetaData";

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 30px;

  ${mediaMax(theme.device.breakPoints.tablet)} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

type Props = {
  show: boolean; //True = Start animation to show skills.
};

const Skills = ({ show }: Props) => {
  //Fetch Skills
  const skillsData = useSiteMetadata().skills;

  //create UseTrial with length of skills array
  const trail = useTrail(skillsData.length, {
    from: {
      opacity: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    to: { opacity: show ? 1 : 0 },
    config: config.gentle,
  });

  return (
    <SectionWrapper>
      <SectionTitle>SKILLS</SectionTitle>
      <SectionContent>
        <SkillsWrapper>
          {trail.map((style, index) => (
            <animated.div key={index} style={style}>
              <SkillBox
                icon={skillsData[index].icon as IconType}
                title={skillsData[index].title}
              />
            </animated.div>
          ))}
        </SkillsWrapper>
      </SectionContent>
    </SectionWrapper>
  );
};

export default Skills;
