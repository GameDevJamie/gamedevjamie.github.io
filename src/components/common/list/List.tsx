import React from "react";
import { FlexAlign } from "../globals/layout";
import { ListWrapper, ListItem } from "./styles";
import { motion } from "framer-motion";

type Props = {
  items: Array<React.ReactNode>;
  align: FlexAlign;
  direction: string;
  mobileDirection?: string;
};

const List = ({ items, align, direction, mobileDirection }: Props) => {
  const listVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const itemVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const listItems = items.map((item, i) => (
    <ListItem key={"listItem-" + i} variants={itemVariant}>
      {item}
    </ListItem>
  ));

  return (
    <ListWrapper
      align={align}
      flexDir={direction}
      mobileFlexDir={mobileDirection}
      initial="hidden"
      animate="visible"
      variants={listVariant}
    >
      {listItems}
    </ListWrapper>
  );
};

List.defaultProps = {
  align: FlexAlign.Left,
  direction: "row",
  mobileDirection: "row",
};

export { List };
