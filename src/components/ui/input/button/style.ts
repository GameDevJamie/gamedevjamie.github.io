import styled, { css } from 'styled-components';
import { mediaMin } from 'utils/media';

type test = 'small' | 'medium' | 'large';
console.log(mediaMin('600px'));

type ScreenSize = {
  xs?: test;
  sm?: test;
  md?: test;
  lg?: test;
};

interface Props {
  size: test | ScreenSize;
}

function isTest(pet: test | ScreenSize): pet is test {
  switch (pet as test) {
    case 'small':
    case 'medium':
    case 'large':
      return true;

    default:
      return false;
  }
}

const Button = styled.button``;

const IconButton = styled(Button)<Props>`
  border-radius: 50%;
  background-color: black;
  border: 0;

  ${(p) => (isTest(p.size) ? foo : bar)}
`;

const foo = css<Props>`
  ${(p) => isTest(p.size) && getSize(p.size)}
`;

const bar = css<Props>`
  ${(p) =>
    !isTest(p.size) &&
    `
        ${
          p.size.xs &&
          `${mediaMin('600px')}{
            ${getSize(p.size.xs)}
        }`
        }

        ${
          p.size.sm &&
          `${mediaMin('900px')}{
              ${getSize(p.size.sm)}
          }`
        }

        ${
          p.size.md &&
          `${mediaMin('1200px')}{
            ${getSize(p.size.md)}
        }`
        }

        ${
          p.size.lg &&
          `${mediaMin('1500px')}{
              ${getSize(p.size.lg)}
          }`
        }
`}
`;

function getSize(size: test) {
  switch (size) {
    case 'small':
      return `width: 1em; height: 1em;`;

    case 'medium':
      return `width: 2em; height: 2em;`;

    case 'large':
      return `width: 3em; height: 3em;`;
  }
}

export { IconButton };
