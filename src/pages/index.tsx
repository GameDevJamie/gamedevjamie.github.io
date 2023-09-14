import * as React from "react";
import Layout from "components/Layout";
import Hero from "components/hero";
import Button from "components/ui/input/button/Button";
import { IconType } from "components/ui/display/Icon";

export default () => {
  return (
    <Layout>
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
    </Layout>
  );
};
