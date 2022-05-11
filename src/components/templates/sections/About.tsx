import React from "react"
import { SectionWrapper, SectionTitle, SectionContent } from "./styles"
import { H1, Tag } from "components/common/globals/typography"
import { FlexAlign } from "components/common/globals/flex"
import { List } from "components/common/list"
import { TypeWriter } from "components/common/typewriter"

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
          Corrupti ad labore placeat hic ullam numquam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Corrupti quidem voluptatibus ea
          doloremque magni quo, repellat obcaecati est fugiat accusantium, velit
          nostrum perferendis inventore odit corporis natus id, maxime
          quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolores, voluptate tenetur necessitatibus quia odit molestiae
          architecto reprehenderit similique. Vitae explicabo asperiores earum
          magnam suscipit quos non! Eius eveniet libero veniam!
        </p>
      </SectionContent>
    </SectionWrapper>
  )
}

export default About
