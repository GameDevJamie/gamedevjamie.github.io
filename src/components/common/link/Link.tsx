import React from "react"
import { A } from "./styles"

type Props = {
  href?: string
  animate?: boolean
  flex: string //Direction to flex stack elements inside the link (col or row)

  children: React.ReactNode
}
const Link = ({ href, animate, flex, children }: Props) => {
  return (
    <A
      href={href && href}
      target="_blank"
      animate={animate}
      flex={flex == "col" ? "column" : flex}
    >
      {children}
    </A>
  )
}

Link.defaultProps = {
  animate: true,
  flex: "row",
}

export { Link }
