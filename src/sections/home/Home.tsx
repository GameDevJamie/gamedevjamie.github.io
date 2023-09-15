import React, { useState } from "react";
import Container from "components/ui/layout/Container";
import Icon, { IconType } from "components/ui/display/Icon";
import Hero from "components/hero";
import SkillBox from "components/skillBox";
import ParticleSystemCanvas from "components/ParticleSystemCanvas";
import WebMatrixParticleSystem from "shared/classes/particleSystems/WebMatrixParticleSystem";

const Home = () => {
  const [particleSystem] = useState(new WebMatrixParticleSystem(100));

  return (
    <Container
      as="section"
      className="h-screen flex flex-col justify-center items-center"
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

      <div className="flex flex-col md:flex-row justify-center items-start gap-5 w-full mt-10">
        <SkillBox
          icons={[
            //IconType.CPlusPlus,
            //IconType.CSharp,
            //IconType.Unity,
            //IconType.OpenGL,
            IconType.HTML,
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
            //IconType.CSS,
            //IconType.JavaScript,
            //IconType.TypeScript,
            //IconType.React,
            //IconType.Gatsby,
            //IconType.Tailwind,
            //IconType.Wordpress,
          ]}
          title="Web Development"
          description="HTML, CSS, Javascript, TypeScript, react, gatsby, tailwind"
        />
        <SkillBox
          icons={[IconType.HTML]} //IconType.VSCode, IconType.VisualStudio, IconType.Git]}
          title="Software/Tools"
          description="Git, vs code, visual studio"
        />
      </div>
    </Container>
  );
};

/*
const Home = () => {
  const [particleSystem] = useState(new WebMatrixParticleSystem(100));

  return (
    <div className="flex justify-center items-center h-screen relative">
      <ParticleSystemCanvas
        particleSystem={particleSystem}
        className="h-full w-full absolute top-0 left-0 -z-50"
      />
      <div className="flex flex-col justify-center items-center p-3 text-center">
        <h1 className="text-5xl text-default">Hi, I'm Jamie</h1>
        <h2 className="text-3xl text-default">A Software Developer</h2>
        <p className="text-base">
          This website was developed by myself using React{' '}
          <span>
            <Icon icon={IconType.React} defaultColor />
          </span>
          , Gatsby{' '}
          <span>
            <Icon icon={IconType.Gatsby} defaultColor />
          </span>
          , and TailwindCSS{' '}
          <span>
            <Icon icon={IconType.Tailwind} defaultColor />
          </span>
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};
*/

export default Home;
