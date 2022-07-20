import styled from "styled-components";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";
import { FlexAlign } from "../globals/layout";
import { motion } from "framer-motion";

interface ListWrapperProps {
  align: FlexAlign;
  flexDir: string;
  mobileFlexDir?: string;
}

const ListWrapper = styled(motion.ul)<ListWrapperProps>`
  list-style: none;

  display: flex;
  ${props => getJustifyAlign(props.align)}
  align-items: center;
  flex-direction: ${props =>
    props.mobileFlexDir ? props.mobileFlexDir : props.flexDir};

  > li {
    ${props =>
      props.mobileFlexDir == "row"
        ? `
            margin-left: 10px; 
            margin-right: 10px;`
        : `
            margin-top: 10px;
          `}
  }

  ${mediaMin(theme.device.breakPoints.mobileL)} {
    flex-direction: ${props => props.flexDir};
    li {
      margin: 0;
      ${props =>
        props.flexDir == "row"
          ? `
              margin-left: 10px; 
              margin-right: 10px;`
          : `
              margin-top: 10px;
            `}
    }
  }
`;

const ListItem = styled(motion.li)``;

function getJustifyAlign(align: FlexAlign) {
  switch (align) {
    case FlexAlign.Left:
      return "justify-content: start;";
    case FlexAlign.Center:
      return "justify-content: center;";
    case FlexAlign.Right:
      return "justify-content: end;";
    default:
      return "justify-content: start;";
  }
}

export { ListWrapper, ListItem };
