import styled from 'styled-components';
import { getSizes } from 'utils/test';

interface Props {
  size: sizes | ScreenSize;
}

const Button = styled.button``;

const StyledIconButton = styled(Button)<Props>`
  border-radius: 50%;
  background-color: white;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${(p) => getSizes(p.size, iconSizes)}
`;

function iconSizes(size: sizes) {
  switch (size) {
    case 'small':
      return `padding: 5px; font-size: 1.25rem;`;

    case 'medium':
      return `padding: 8px; font-size: 1.5rem;`;

    case 'large':
      return `padding: 12px; font-size: 1.75rem;`;
  }
}

//PLACE IN OWN FILE TO BE USED ANYWHERE
//--------------------
/*
function isSizes(pet: sizes | ScreenSize): pet is sizes {
  switch (pet as sizes) {
    case 'small':
    case 'medium':
    case 'large':
      return true;

    default:
      return false;
  }
}

//Calls the given function based on the sizes type and for each breakpoint
function getSizes(sizes: sizes | ScreenSize, testFoo: (s: sizes) => string) {
  if (isSizes(sizes)) return testFoo(sizes);
  if (!isSizes(sizes)) {
    return (
      getMediaSize(testFoo, '600px', sizes.xs) +
      getMediaSize(testFoo, '900px', sizes.sm) +
      getMediaSize(testFoo, '1200px', sizes.md) +
      getMediaSize(testFoo, '1500px', sizes.lg)
    );
  }
}

function getMediaSize(
  testFoo: (s: sizes) => string,
  breakPoint: string,
  s?: sizes
) {
  if (!s) return ``;
  return `${mediaMin(breakPoint)}{${testFoo(s)}}`;
}
//--------------------
*/
export { StyledIconButton };
