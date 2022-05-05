import styled, { css } from "styled-components"
import { theme } from "utils/theme"

interface Props {
  flex: string
  animate?: boolean
}
const A = styled.a<Props>`
  color: inherit;
  cursor: pointer;

  display: flex;
  flex-direction: ${props => props.flex};
  align-items: center;
  justify-content: center;

  ${props => props.animate && borderAnim}
`

const borderAnim = css`
  position: relative;
  transition: 0.3s all ease;

  :after {
    content: "";
    position: absolute;
    width: 0%;
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    border-bottom: 3px solid ${theme.colors.primary};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    :after {
      width: 100%;
      opacity: 1;
    }
  }
`

export { A }
