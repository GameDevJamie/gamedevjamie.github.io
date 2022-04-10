import React from "react"
import { Link } from "../link"
import { Icon, IconType } from "../icon/Icon"

import styled from "styled-components"

interface StyleProps {
  color: string
  hoverColor?: string
}
const Wrapper = styled.div<StyleProps>`
  color: ${props => props.color};
  cursor: pointer;

  &:hover {
    ${props => props.hoverColor && `color: ${props.hoverColor};`}
  }
`

type Props = {
  icon: IconType
  color: string
  hoverColor?: string
  href?: string
}
const IconLink = ({ icon, color, hoverColor, href }: Props) => {
  return (
    <Wrapper color={color} hoverColor={hoverColor}>
      <Link href={href} animate={false}>
        <Icon icon={icon} />
      </Link>
    </Wrapper>
  )
}

IconLink.defaultProps = {
  color: "#000",
}

export { IconLink }
