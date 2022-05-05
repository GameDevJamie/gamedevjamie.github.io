import styled from "styled-components"

interface StyleProps {
  color?: string
}
const IconWrapper = styled.span<StyleProps>`
  color: ${p => (p.color ? p.color : "inherit")};
  font-size: 2em;

  .fa-icon {
    color: ${p => (p.color ? p.color : "inherit")};

    path {
      color: ${p => (p.color ? p.color : "inherit")};
    }
  }
`
export { IconWrapper }
