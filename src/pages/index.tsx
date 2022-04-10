import { H1 } from "components/common/globals/typography"
import React from "react"
import styled from "styled-components"

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
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Content = styled.div`
  padding: 40px;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

export default function Home() {
  return (
    <MainWrapper>
      <VideoWrapper>
        <Video>
          <source src="Home Page Video.mp4" type="video/mp4" />
        </Video>
      </VideoWrapper>
      <ContentWrapper>
        <Content>
          <H1>About</H1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            pariatur provident, odio, ratione facere, mollitia necessitatibus
            ducimus praesentium velit excepturi nemo quasi voluptatibus. Nobis
            vero excepturi magnam rem similique? Distinctio!
          </p>
        </Content>
      </ContentWrapper>
    </MainWrapper>
  )
}
