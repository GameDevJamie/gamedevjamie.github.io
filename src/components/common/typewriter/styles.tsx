import styled from "styled-components"
import { css, keyframes } from "styled-components"

const blinkAnimation = keyframes`
from,to {color: transparent;}
50% { color: black; }
`

const cursor = css`
  ::after {
    content: "|";
    color: black;
    animation: ${blinkAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
  }
`

interface StyleProps {
  typing: boolean
}
const Wrapper = styled.p<StyleProps>`
  ${props => props.typing && cursor}
`

export { Wrapper }
