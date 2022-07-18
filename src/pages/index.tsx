import React from "react";
import styled from "styled-components";
import Layout from "components/modules/layout";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";
import { H1, H2, P } from "components/common/globals/typography";
import { TypeWriter } from "components/common/typewriter";
import { Icon, IconType } from "components/common/icon";
import SocialLinks from "components/templates/socialLinks";
import { Button } from "components/common/button";
import { List } from "components/common/list";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaMin(theme.device.breakPoints.laptop)} {
    flex-direction: row;
    height: 500px;
  }
`;

const Flex = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

const ContentWrapper = styled(Flex)`
  padding-bottom: 50px;
  ${mediaMin(theme.device.breakPoints.laptop)} {
    padding: 0px;
  }
`;
const VideoWrapper = styled(Flex)`
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <div style={{ minHeight: "9rem" }}>
            <H1>
              <TypeWriter content="Hi, I'm Jamie!" speed={75} delay={0} />
            </H1>
            <H2>
              <TypeWriter
                content="A Software Developer"
                speed={75}
                delay={1250}
              />
            </H2>
          </div>
          <P>
            I hold a Bachelor of Science First Class Honours Degree in Computer
            Games Development, and currently work as a Software Developer for
            LJT Systems Ltd.
            <br />
            This website was developed by myself using React&nbsp;
            <Icon icon={IconType.React} /> and Gatsby&nbsp;
            <Icon icon={IconType.Gatsby} />.
          </P>
          <div style={{ marginTop: "10px" }}>
            <List
              items={[<Button variant="contained">CV</Button>, <SocialLinks />]}
              mobileDirection="column"
            />
          </div>
        </ContentWrapper>
        <VideoWrapper>
          <Video autoPlay={true} controls={false} loop={true} muted={true}>
            <source src="Home Page Video.mp4" type="video/mp4" />
          </Video>
        </VideoWrapper>
      </Wrapper>
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
