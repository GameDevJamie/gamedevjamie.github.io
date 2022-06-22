import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "components/common/card";

type Props = {
  img: string;
  title: string;
  //readmore: () => void;
};

const MiniCard = ({ title, img }: Props) => {
  return (
    <Card>
      <CardHeader>{img}</CardHeader>
      <CardContent>{title}</CardContent>
    </Card>
  );
};

export default MiniCard;
