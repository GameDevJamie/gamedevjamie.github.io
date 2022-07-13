import styled from "styled-components";
import { theme } from "utils/theme";

export enum FlexDirection {
  Row,
  Col,
}

export enum FlexAlign {
  Left,
  Center,
  Right,
}

export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${theme.spacing.maxPageWidth};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
