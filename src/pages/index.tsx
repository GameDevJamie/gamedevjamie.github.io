import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "GlobalStyles";
import Head from "components/common/head";
import Navbar from "components/templates/navbar";
import SectionHandler from "components/templates/sections";
import { theme } from "utils/theme";
import { mediaMax } from "utils/functions";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100vh;
  overflow: hidden;

  ${mediaMax(theme.device.breakPoints.tablet)} {
    flex-direction: column;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

const ContentWrapper = styled.div`
  width: 100%;
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
          <Navbar onChange={sectionChange} />
          <SectionHandler section={section} />
        </ContentWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
}
