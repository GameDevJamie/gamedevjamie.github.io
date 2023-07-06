import React from 'react';
import SocialLinks from 'components/socialLinks';
import Icon, { IconType } from 'components/ui/display/Icon';

const Home = () => {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
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

export default Home;
