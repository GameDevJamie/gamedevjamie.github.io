import React from "react"
import { SectionWrapper, SectionTitle, SectionContent } from "../styles"
import { H1, Tag } from "components/common/globals/typography"
import { FlexAlign } from "components/common/globals/flex"
import { List } from "components/common/list"

const About = () => {
  const tagListItems = [
    <Tag>C++</Tag>,
    <Tag>Unity</Tag>,
    <Tag>Gameplay</Tag>,
    <Tag>AI</Tag>,
  ]

  return (
    <SectionWrapper>
      {/*<SectionTitle>ABOUT</SectionTitle>*/}
      <SectionContent>
        <H1>Hi, I'm Jamie</H1>
        <H1>A Software Developer</H1>
        <List items={tagListItems} align={FlexAlign.Left} />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          voluptatibus delectus architecto quibusdam nesciunt distinctio
          deleniti nostrum totam, fuga perferendis accusamus magnam aspernatur!
          Corrupti ad labore placeat hic ullam numquam.
        </p>
      </SectionContent>
    </SectionWrapper>
  )
}

export default About
