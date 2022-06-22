import React, { useState } from "react";
import styled from "styled-components";
import { IconType } from "components/common/icon";
import Carousel from "components/common/carousel";
import SkillBox from "../skillBox";
import { useSiteMetadata } from "utils/graphql/queries/getSiteMetaData";
import Modal from "components/common/modal/Modal";
import { theme } from "utils/theme";
import { mediaMax } from "utils/functions";

const SkillsWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 30px;

  ${mediaMax(theme.device.breakPoints.tablet)} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SkillsSlideshow = () => {
  const [open, setOpen] = useState(false);

  //Fetch Skills
  const skillsData = useSiteMetadata().skills;

  const skillsArr = skillsData.map((skill, i) => (
    <SkillBox
      icon={skill.icon as IconType}
      title={skill.title}
      key={"skill-" + i}
    />
  ));

  return (
    <>
      <Carousel
        items={skillsArr}
        loop={true}
        autoplay={true}
        delay={2000}
        itemsPerSlide={4}
        title="Skills"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Modal
        open={open}
        closeModal={() => {
          setOpen(false);
        }}
      >
        <SkillsWrapper>{skillsArr}</SkillsWrapper>
      </Modal>
    </>
  );
};

export default SkillsSlideshow;
