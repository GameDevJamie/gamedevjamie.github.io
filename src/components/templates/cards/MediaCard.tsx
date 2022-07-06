import React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "components/common/card";

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
`;

type Props = {
  title: string;
  tags: string[];
  img: IGatsbyImageData;
  desc: string;
};

const MediaCard = ({ title, tags, img, desc }: Props) => {
  return (
    <Wrapper>
      <Card>
        <CardHeader>
          <GatsbyImage image={img} alt="image" />
          <div>{tags}</div>
        </CardHeader>
        <CardContent>
          <div>{title}</div>
          <div>{desc}</div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Wrapper>
  );
};

export default MediaCard;
