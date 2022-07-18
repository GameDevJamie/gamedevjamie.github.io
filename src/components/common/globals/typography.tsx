import styled from "styled-components";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";

export const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    font-size: 4.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  padding: 0;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    font-size: 2.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const H4 = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const H5 = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const H6 = styled.h6`
  font-size: 0.85rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 10px 0 0 0;
`;
export const Tag = styled(P)`
  font-style: Italic;
  color: gray;
  margin: 0;
  padding: 0;
`;
