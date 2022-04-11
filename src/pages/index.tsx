import { H1 } from "components/common/globals/typography"
import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import About from "components/templates/sections/about"
import GlobalStyles from "GlobalStyles"
import Head from "components/common/head"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const VideoWrapper = styled.div`
  width: 50%;
`

const ContentWrapper = styled.div`
  width: 50%;
  overflow-y: auto;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

export default function Home() {
  return (
    <ThemeProvider theme={{ mode: "light", size: "normal" }}>
      <GlobalStyles />
      <MainWrapper>
        <VideoWrapper>
          <Video autoPlay={true} controls={false} loop={true} muted={true}>
            <source src="Home Page Video.mp4" type="video/mp4" />
          </Video>
        </VideoWrapper>
        <ContentWrapper>
          <About />
          <About />
          <About />
        </ContentWrapper>
      </MainWrapper>
    </ThemeProvider>
  )
}
