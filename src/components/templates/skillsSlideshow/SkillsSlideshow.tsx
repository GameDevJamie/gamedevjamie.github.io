import React, { useState } from "react";
import { Icon, IconType } from "components/common/icon";
import Carousel from "components/common/carousel";
import SkillBox from "../skillBox";
import { useSiteMetadata } from "utils/graphql/queries/getSiteMetaData";
import Modal from "components/common/modal/Modal";

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
    //<Slideshow items={skillsArr} loop={true} autoplay={true} delay={1500} />
    <>
      <Carousel
        items={skillsArr}
        loop={true}
        autoplay={true}
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
        <div>Test 1</div>
        <div> Test 2</div>
      </Modal>
    </>
  );
};

export default SkillsSlideshow;
