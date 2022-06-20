import React from "react";
import { Wrapper, TitleWrapper, Title } from "./styles";
import { TypeWriter } from "components/common/typewriter";
import SocialLinks from "components/templates/socialLinks";
import SkillsSlideshow from "../skillsSlideshow/SkillsSlideshow";
import Modal from "components/common/modal/Modal";

/*
const slideshowItems = [
  <div
    style={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Skills
  </div>,
  <div
    style={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Projects
  </div>,
  <div
    style={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    CV
  </div>,
];*/

const About = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <TypeWriter content="Hi, I'm Jamie" speed={75} delay={0} />
        </Title>
        <Title>
          <TypeWriter content="A Software Developer" speed={75} delay={1300} />
        </Title>
      </TitleWrapper>
      <p>
        I hold a Bachelor of Science First Class Honours Degree in Computer
        Games Development, and currently work as a Software Developer for LJT
        Systems Ltd.
        <br />
        This website was developed by myself using React and Gatsby.
      </p>
      <SocialLinks />
      <SkillsSlideshow />
      <SkillsSlideshow />
    </Wrapper>
  );
};

export default About;
