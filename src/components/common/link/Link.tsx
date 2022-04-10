import React from "react"
import { A } from "./styles"

type Props = {
  href?: string
  to?: string
  animate?: boolean

  children: React.ReactNode
}
const Link = ({ href, animate, children }: Props) => {
  return (
    <A href={href && href} target="_blank" animate={animate}>
      {children}
    </A>
  )
}

Link.defaultProps = {
  animate: true,
}

export { Link }
