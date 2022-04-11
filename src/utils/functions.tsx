function mediaMin(breakPoint: string) {
  return `@media (min-width: ${breakPoint})`
}

function mediaMax(breakPoint: string) {
  return `@media (max-width: ${breakPoint})`
}

export { mediaMin, mediaMax }
