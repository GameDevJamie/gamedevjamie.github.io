import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardContent } from "components/common/card";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const MiniCardWrapper = styled.div`
  width: 95px;
  height: 95px;
  display: flex;
  align-items: center;
`;

type Props = {
  img: IGatsbyImageData;
  title: string;
  //readmore: () => void;
};

const MiniCard = ({ title, img }: Props) => {
  return (
    <MiniCardWrapper>
      <Card>
        <CardHeader>
          <GatsbyImage image={img} alt="test" />
        </CardHeader>
        <CardContent>{title}</CardContent>
      </Card>
    </MiniCardWrapper>
  );
};

export default MiniCard;
