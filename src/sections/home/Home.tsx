import React, { useState } from "react";
import Container from "components/ui/layout/Container";
import SocialLinks from "components/socialLinks";
import Icon, { IconType } from "components/ui/display/Icon";
import ParticleSystemCanvas from "components/ParticleSystemCanvas";
import WebMatrixParticleSystem from "shared/classes/particleSystems/WebMatrixParticleSystem";

const Home = () => {
  return (
    <Container as="section" className="h-screen">
      <div className="flex flex-col md:flex-row h-full">
        <div>About</div>
        <div>Video</div>
      </div>
      <div>Skills</div>
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
