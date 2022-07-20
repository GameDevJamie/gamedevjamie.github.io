import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";

interface ListProps {
  type: string;
}
const List = styled(motion.ul)<ListProps>`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: ${props => {
    switch (props.type) {
      case "row":
      case "flexCol":
      default:
        return "row";

      case "col":
      case "flexRow":
        return "column";
    }
  }};

  ${mediaMin(theme.device.breakPoints.tablet)} {
    flex-direction: ${props => {
      switch (props.type) {
        case "row":
        case "flexRow":
        default:
          return "row";

        case "col":
        case "flexCol":
          return "column";
      }
    }};
  }
`;

const ListItem = styled(motion.li)`
  ${List}[type='row'] > &,
  ${List}[type='flexCol'] > & {
    margin-left: 10px;
    margin-right: 10px;
  }

  ${List}[type='col'] > &,
  ${List}[type='flexRow'] > & {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  ${mediaMin(theme.device.breakPoints.tablet)} {
    ${List}[type='row'] > &,
    ${List}[type='flexRow'] > & {
      margin-left: 10px;
      margin-right: 10px;
    }

    ${List}[type='col'] > &,
    ${List}[type='flexCol'] > & {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export { List, ListItem };
