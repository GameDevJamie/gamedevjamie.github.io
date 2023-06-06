export function mediaMin(breakPoint: string) {
  return `@media only screen and (min-width: ${breakPoint})`;
}

export function mediaMax(breakPoint: string) {
  return `@media only screen and (max-width: ${breakPoint})`;
}
