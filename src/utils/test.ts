import { mediaMin } from './media';

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

function getMediaSize(
  testFoo: (s: sizes) => string,
  breakPoint: string,
  s?: sizes
) {
  if (!s) return ``;
  return `${mediaMin(breakPoint)}{${testFoo(s)}}`;
}

//Calls the given function based on the sizes type and for each breakpoint
export function getSizes(
  sizes: sizes | ScreenSize,
  testFoo: (s: sizes) => string
) {
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
