import React, { useState } from "react";
import Container from "components/ui/layout/Container";
import Icon, { IconType } from "components/ui/display/Icon";
import Hero from "components/hero";
import ParticleSystemCanvas from "components/ParticleSystemCanvas";
import WebMatrixParticleSystem from "shared/classes/particleSystems/WebMatrixParticleSystem";

const Home = () => {
  const [particleSystem] = useState(new WebMatrixParticleSystem(100));

  return (
    <>
      <Container
        as="section"
        className="h-screen flex flex-col justify-center items-center min-h-[500px]"
      >
        <ParticleSystemCanvas
          particleSystem={particleSystem}
          className="h-full w-full absolute top-0 left-0 -z-50"
        />

        <Hero
          name="Jamie"
          profession="Software Developer"
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
      </Container>
    </>
  );
};

export default Home;
