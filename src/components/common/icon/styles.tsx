import styled from "styled-components"

interface StyleProps {
  color?: string
}
const IconWrapper = styled.span<StyleProps>`
  color: ${p => (p.color ? p.color : "inherit")};
  transition: color 0.3s ease;

  .fa-icon {
    color: ${p => (p.color ? p.color : "inherit")};

    path {
      color: ${p => (p.color ? p.color : "inherit")};
    }
  }
`
export { IconWrapper }
