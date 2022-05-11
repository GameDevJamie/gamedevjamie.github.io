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

const Skills = () => {
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
    to: { opacity: 1 },
    config: config.gentle,
  });

  //Trial.map(index => {<a.div>{skills[index]}</a.div>})

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

          {/*<SkillBox icon={IconType.CPlusPlus} title="C++" />
          <SkillBox icon={IconType.CSharp} title="C#" />
          <SkillBox icon={IconType.Unity} title="Unity" />
          <SkillBox icon={IconType.OpenGL} title="OpenGL" />

          <SkillBox icon={IconType.HTML} title="HTML" />
          <SkillBox icon={IconType.CSS} title="CSS" />
          <SkillBox icon={IconType.JavaScript} title="JavaScript" />
          <SkillBox icon={IconType.TypeScript} title="TypeScript" />
          <SkillBox icon={IconType.React} title="React" />
          <SkillBox icon={IconType.Git} title="Git" />

          <SkillBox icon={IconType.WordPress} title="WordPress" />
          <SkillBox icon={IconType.VisualStudio} title="Visual Studio" />
          <SkillBox icon={IconType.VSCode} title="VS Code" />
          <SkillBox icon={IconType.MSSQL} title="Microsoft SQL" />*/}
        </SkillsWrapper>
      </SectionContent>
    </SectionWrapper>
  );
};

export default Skills;
