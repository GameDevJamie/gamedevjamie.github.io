import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "GlobalStyles";
import Head from "components/common/head";
import Navbar from "components/templates/navbar";
import SectionHandler from "components/templates/sections";
import About from "components/templates/about";
import { theme } from "utils/theme";
import { mediaMax, mediaMin } from "utils/functions";
import SkillsFooter from "components/templates/skillsFooter";

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
  const [section, setSection] = useState("about");

  const sectionChange = (id: string) => {
    setSection(id);
  };

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
          {/*<Navbar onChange={sectionChange} />
          /*<SectionHandler section={section} />*/}
          <About />
          <SkillsFooter />
        </ContentWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
}
