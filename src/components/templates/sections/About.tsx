import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionContent } from "./styles";
import { H1, Tag } from "components/common/globals/typography";
import { FlexAlign } from "components/common/globals/flex";
import { List } from "components/common/list";
import { TypeWriter } from "components/common/typewriter";
import { mediaMax } from "utils/functions";
import { theme } from "utils/theme";

const Title = styled(H1)`
  font-size: 3em;

  ${mediaMax(theme.device.breakPoints.mobileL)} {
    font-size: 2.25em;
  }
`;

const About = () => {
  const tagListItems = [
    <Tag>C++</Tag>,
    <Tag>Unity</Tag>,
    <Tag>Gameplay</Tag>,
    <Tag>AI</Tag>,
  ];

  return (
    <SectionWrapper>
      {/*<SectionTitle>ABOUT</SectionTitle>*/}
      <SectionContent>
        <Title>
          <TypeWriter content="Hi, I'm Jamie" speed={75} delay={0} />
        </Title>
        <Title>
          <TypeWriter content="A Software Developer" speed={75} delay={1300} />
        </Title>

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
  );
};

export default About;
