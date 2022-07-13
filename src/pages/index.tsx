import React from "react";
import Layout from "components/modules/layout";

export default function Home() {
  return (
    <Layout>
      <div></div>
    </Layout>
  );
}

/*import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "GlobalStyles";
import Head from "components/common/head";
import About from "components/templates/about";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";
import SkillsFooter from "components/templates/skillsFooter";
import ProjectsCarousel from "components/templates/projectsCarousel";
import Switch from "components/common/switch";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    width: 50%;
    position: relative;
  }
`;

const VideoWrapper = styled(ContentWrapper)`
  z-index: 9999;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export default function Home() {
  return (
    <ThemeProvider theme={{ mode: "light", size: "normal" }}>
      <Head />
      <GlobalStyles />

      <MainWrapper>
        <VideoWrapper>
          <Video autoPlay={true} controls={false} loop={true} muted={true}>
            <source src="Home Page Video.mp4" type="video/mp4" />
          </Video>
        </VideoWrapper>

        <ContentWrapper>
          <Switch />
          <About />
          <ProjectsCarousel />
          <SkillsFooter />
        </ContentWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
}
*/
