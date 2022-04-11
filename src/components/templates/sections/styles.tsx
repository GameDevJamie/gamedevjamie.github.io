import styled from "styled-components"
import { H2 } from "components/common/globals/typography"

const SectionWrapper = styled.section`
  height: 100vh;
  padding-left: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SectionTitle = styled(H2)`
  border-bottom: 1px solid black;
  width: 75%;
`

const SectionContent = styled.div``

export { SectionWrapper, SectionTitle, SectionContent }
