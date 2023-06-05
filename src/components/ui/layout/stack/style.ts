import styled, { css } from 'styled-components';

const initialSpacing: number = 8;

interface Props {
  direction?: string;
  spacing?: number;
}

const Stack = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) => (p.direction == 'row' ? rowStyling : columnStyling)}
`;

const rowStyling = css<Props>`
  flex-direction: row;

  > *:not(:first-child) {
    margin-left: ${(p) =>
      p.spacing ? initialSpacing * p.spacing : initialSpacing}px;
  }
`;
const columnStyling = css<Props>`
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: ${(p) =>
      p.spacing ? initialSpacing * p.spacing : initialSpacing}px;
  }
`;

Stack.defaultProps = {
  direction: 'row',
  spacing: 2,
};

export { Stack };
