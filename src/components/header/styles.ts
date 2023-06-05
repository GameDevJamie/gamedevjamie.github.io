import styled from 'styled-components';
import { mediaMin } from '../../utils/media';

const breakpoint = '1200px';

/*
    Two Menu styles for Mobile and Desktop
    Mobile style simple, opens up Desktop style when burger menu clicked
 */

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;

  background-color: grey;
  ${mediaMin(breakpoint)} {
    width: 150px;
    height: 100%;
  }
`;

const Brand = styled.div``;

export { Wrapper };
