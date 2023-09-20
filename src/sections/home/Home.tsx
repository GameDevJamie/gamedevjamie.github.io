import React, { useState } from "react";
import Container from "components/ui/layout/Container";
import Icon, { IconType } from "components/ui/display/Icon";
import Hero from "components/hero";
import SkillBox from "components/skillBox";
import ParticleSystemCanvas from "components/ParticleSystemCanvas";
import WebMatrixParticleSystem from "shared/classes/particleSystems/WebMatrixParticleSystem";

const Skills = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-start gap-5 w-full mt-3" /*mt-auto mb-3 */
    >
      <SkillBox
        icons={[
          IconType.CPlusPlus,
          IconType.CSharp,
          IconType.Unity,
          IconType.OpenGL,
        ]}
        title="Game Development"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat."
      />
      <SkillBox
        icons={[
          IconType.HTML,
          IconType.CSS,
          IconType.JavaScript,
          IconType.TypeScript,
          IconType.React,
          IconType.Gatsby,
          IconType.Tailwind,
          IconType.Wordpress,
        ]}
        title="Web Development"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat."
      />
      <SkillBox
        icons={[IconType.VSCode, IconType.VisualStudio, IconType.Git]}
        title="Software/Tools"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat."
      />
    </div>
  );
};

const Home = () => {
  const [particleSystem] = useState(new WebMatrixParticleSystem(100));

  return (
    <>
      <Container
        as="section"
        className="md:h-screen flex flex-col justify-center items-center min-h-[500px]"
      >
        <ParticleSystemCanvas
          particleSystem={particleSystem}
          className="h-full w-full absolute top-0 left-0 -z-50"
        />

        <Hero
          heading1="Hi, I'm Jamie"
          heading2="A Software Developer"
          subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          videoSrc=""
          buttons={[
            {
              text: "View Projects",
              variant: "solid",
              icon: IconType.ArrowDown,
              isRightIcon: true,
            },
            {
              text: "CV",
              icon: IconType.FileLines,
              variant: "outline",
              isRightIcon: false,
            },
          ]}
        />
        <Skills />
      </Container>
    </>
  );
};

export default Home;
