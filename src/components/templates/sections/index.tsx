import React from "react"
import About from "./About"
import Skills from "./Skills"

type Props = {
  section: string //Section to display
}
const SectionHandler = ({ section }: Props) => {
  function renderSection(section: string) {
    switch (section) {
      case "about":
        return <About />
        break
      case "skills":
        return <Skills />
        break
      case "projects":
        return <About />
        break
      default:
        return <About />
        break
    }
  }

  return <>{renderSection(section)}</>
}

export default SectionHandler
