import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faItchIo,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import {
  faUser,
  faFileCode,
  faFileLines,
} from "@fortawesome/free-regular-svg-icons"
import DevIcon from "devicon-react-svg"
import { IconWrapper } from "./styles"

enum IconType {
  Twitter = "Twitter",
  Github = "Github",
  LinkedIn = "LinkedIn",
  ItchIo = "ItchIo",

  User = "User",
  UserGear = "UserGear",
  FileCode = "FileCode",
  FileLines = "FileLines",

  //DEVICONS
  CPlusPlus = "CPlusPlus",
  CSharp = "CSharp",
  Unity = "Unity",
  DirectX = "DirectX",
  OpenGL = "OpenGL",

  React = "React",
  Gatsby = "Gatsby",
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  WordPress = "WordPress",

  VisualStudio = "VisualStudio",
  VSCode = "VSCode",
  Git = "Git",
  SQL = "SQL",
}

type Props = {
  icon: IconType
  size: string
  color?: string
}

const Icon = ({ icon, size, color }: Props) => {
  function getIcon(icon: IconType) {
    let cName = "fa-icon"

    switch (icon) {
      case IconType.Twitter:
        return <FontAwesomeIcon icon={faTwitter} className={cName} />
      case IconType.Github:
        return <FontAwesomeIcon icon={faGithub} className={cName} />
      case IconType.LinkedIn:
        return <FontAwesomeIcon icon={faLinkedin} className={cName} />
      case IconType.ItchIo:
        return <FontAwesomeIcon icon={faItchIo} className={cName} />
      case IconType.User:
        return <FontAwesomeIcon icon={faUser} className={cName} />
      case IconType.UserGear:
        return <FontAwesomeIcon icon={faUser} className={cName} />
      case IconType.FileCode:
        return <FontAwesomeIcon icon={faFileCode} className={cName} />
      case IconType.FileLines:
        return <FontAwesomeIcon icon={faFileLines} className={cName} />

      case IconType.React:
        return (
          <DevIcon icon="html5" style={{ fill: "#E44D26", height: size }} />
        )
    }
  }

  return <IconWrapper color={color}>{getIcon(icon)}</IconWrapper>
}

Icon.defaultProps = {
  size: "35px",
}

export { Icon, IconType }
