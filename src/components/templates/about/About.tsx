import React from "react";
import { Wrapper, TitleWrapper, Title, Placeholder } from "./styles";
import { Tag } from "components/common/globals/typography";
import { FlexAlign } from "components/common/globals/flex";
import { List } from "components/common/list";
import { TypeWriter } from "components/common/typewriter";
import { ModalBox } from "components/common/modalBox";

const About = () => {
  const tagListItems = [
    <Tag>C++</Tag>,
    <Tag>Unity</Tag>,
    <Tag>Gameplay</Tag>,
    <Tag>AI</Tag>,
  ];

  const placeholderItems = [
    <Placeholder />,
    <Placeholder />,
    <Placeholder />,
    <Placeholder />,
  ];

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <TypeWriter content="Hi, I'm Jamie" speed={75} delay={0} />
        </Title>
        <Title>
          <TypeWriter content="A Software Developer" speed={75} delay={1300} />
        </Title>
      </TitleWrapper>
      <List items={tagListItems} align={FlexAlign.Center} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
        voluptatibus delectus architecto quibusdam nesciunt distinctio deleniti
        nostrum totam, fuga perferendis accusamus magnam aspernatur! Corrupti ad
        labore placeat hic ullam numquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti quidem voluptatibus ea doloremque magni quo,
        repellat obcaecati est fugiat accusantium, velit nostrum perferendis
        inventore odit corporis natus id, maxime quibusdam. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Dolores, voluptate tenetur
        necessitatibus quia odit molestiae architecto reprehenderit similique.
        Vitae explicabo asperiores earum magnam suscipit quos non! Eius eveniet
        libero veniam!
      </p>
      <List items={placeholderItems} align={FlexAlign.Center} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ModalBox sizePx={100} />
        <ModalBox sizePx={100} />
      </div>
    </Wrapper>
  );
};

export default About;
