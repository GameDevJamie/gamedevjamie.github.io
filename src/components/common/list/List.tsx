import React from "react"
import { FlexAlign } from "../globals/flex"
import { ListWrapper, ListItem } from "./styles"

type Props = {
  items: Array<React.ReactNode>
  align: FlexAlign
  direction: string
  mobileDirection?: string
}

const List = ({ items, align, direction, mobileDirection }: Props) => {
  const listItems = items.map(item => <ListItem>{item}</ListItem>)

  return (
    <ListWrapper
      align={align}
      flexDir={direction}
      mobileFlexDir={mobileDirection}
    >
      {listItems}
    </ListWrapper>
  )
}

List.defaultProps = {
  align: FlexAlign.Center,
  direction: "row",
}

export { List }
