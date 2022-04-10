import styled from "styled-components"

export enum FlexDirection {
  Row,
  Col,
}

export enum FlexAlign {
  Left,
  Center,
  Right,
}

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
