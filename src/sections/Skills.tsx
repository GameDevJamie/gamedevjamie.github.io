import React from "react";
import SkillBox from "components/skillBox";
import Icon, { IconType } from "components/ui/display/Icon";
import Container from "components/ui/layout/Container";

const Skills = () => {
  return (
    <section className="px-10 md:px-20 pb-20 pt-10 bg-gradient-to-b from-primary to-primary-dark from-50%">
      <Container>
        <div className="mb-10 relative flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-center text-contrast-primary">
            MY SKILLS
          </h3>
          <div className="w-20 h-1 bg-white"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
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
      </Container>
    </section>
  );
};

export default Skills;
