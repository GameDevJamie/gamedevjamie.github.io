import React, { useState } from "react";
import { useSiteMetadata } from "utils/graphql/queries/getSiteMetaData";
import { Icon, IconType } from "components/common/icon";
import { Wrapper, SkillWrapper, SkillTitle, SkillsGrid } from "./styles";
import Carousel from "components/common/carousel";
import { BasicModal } from "../modals";
import SkillBox from "components/templates/skillBox";

const SkillsFooter = () => {
  const [open, setOpen] = useState(false);

  //Fetch Skills
  const skillsData = useSiteMetadata().skills;

  const skillsArr1 = skillsData.map((skill, i) => (
    <SkillWrapper key={"skill-" + i}>
      <Icon icon={skill.icon as IconType} />
      <SkillTitle>{skill.title}</SkillTitle>
    </SkillWrapper>
  ));
  const skillsArr2 = skillsData.map((skill, i) => (
    <SkillBox
      icon={skill.icon as IconType}
      title={skill.title}
      key={"skillGrid-" + i}
    />
  ));

  return (
    <>
      <Wrapper onClick={() => setOpen(true)}>
        <Carousel
          items={skillsArr1}
          loop={true}
          autoplay={true}
          delay={0}
          itemsPerSlide={5}
        />
      </Wrapper>

      <BasicModal
        open={open}
        title={"Skills"}
        closeModal={() => {
          setOpen(false);
        }}
      >
        <SkillsGrid>{skillsArr2}</SkillsGrid>
      </BasicModal>
    </>
  );
};

export default SkillsFooter;
