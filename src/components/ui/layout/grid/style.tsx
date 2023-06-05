import styled, { css } from 'styled-components';
import { mediaMin } from 'utils/media';

const columns = 12;
const oneColumnWidth = 100 / columns;

interface Props {
  container: boolean;
  item: boolean;

  $direction: string;
  justifyContent: string;
  alignItems: string;

  $spacing: number;
  rowSpacing?: number;
  columnSpacing?: number;

  //Column breakpoints
  xs: number;
  sm: number;
}

interface Test {
  size: string;
}

const Layout = styled.div.attrs((props: Test) => ({
  type: 'text',
  size: props.size || '1em',
}))<Test>`
  margin: ${(props) => props.size};
`;

const Grid = styled.div.attrs((props: Props) => ({
  className: props.item ? 'grid-item' : '',

  container: props.container || false,
  item: props.item || false,
  $direction: props.$direction || 'row',
  justifyContent: props.justifyContent || 'center',
  alignItems: props.alignItems || 'center',

  $spacing: props.$spacing || 0,

  xs: props.xs || 4,
  sm: props.sm || 4,
}))<Props>`
  ${(p) => p.container && containerCSS}
  ${(p) => p.item && itemCSS}
`;

const containerCSS = css<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(p) => p.$direction};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};

  & > &.grid-item {
    padding-top: ${(p) => p.$spacing && p.$spacing * 8}px;
    padding-left: ${(p) => p.$spacing && p.$spacing * 8}px;
  }
`;

const itemCSS = css<Props>`
  flex-basis: ${(p) => oneColumnWidth * p.xs}%;
  flex-grow: 0;
  max-width: ${(p) => oneColumnWidth * p.xs}%;

  ${mediaMin('600px')} {
    flex-basis: ${(p) => oneColumnWidth * p.xs}%;
    max-width: ${(p) => oneColumnWidth * p.sm}%;
  }
`;

export { Grid, Layout };
