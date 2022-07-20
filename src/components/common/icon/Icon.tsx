import React from "react";
import { IconWrapper } from "./styles";
import {
  faTwitter,
  faItchIo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faFilePdf,
  faHeart,
  faSun,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "utils/theme";

enum IconType {
  Twitter = "Twitter",
  Github = "Github",
  LinkedIn = "LinkedIn",
  ItchIo = "ItchIo",

  Home = "Home",
  User = "User",
  Skills = "Skills",
  Projects = "Projects",
  File = "File",

  Sun = "Sun",
  Moon = "Moon",

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
  Python = "Python",

  VisualStudio = "VisualStudio",
  VSCode = "VSCode",
  Git = "Git",
  MSSQL = "MSSQL",
}

type Props = {
  icon: IconType;

  /*
    default = Use default color for the icon
    inherit = Use inherit color
   */
  color: string;
};

function getIcon(icon: IconType, defaultColor: boolean) {
  //Devicon Icon
  let deviconClassName: string = getDeviconClass(icon);
  let isDevicon: boolean = deviconClassName != "";

  if (isDevicon) {
    let colored: string = defaultColor ? " colored" : "";
    return <i className={deviconClassName + colored}></i>;
  }

  switch (icon) {
    case IconType.Twitter:
      return <FontAwesomeIcon icon={faTwitter} />;
    case IconType.Github:
      return <FontAwesomeIcon icon={faGithub} />;
    case IconType.LinkedIn:
      return <FontAwesomeIcon icon={faLinkedin} />;
    case IconType.ItchIo:
      return <FontAwesomeIcon icon={faItchIo} />;

    case IconType.Home:
      return <FontAwesomeIcon icon={faHouse} />;
    case IconType.User:
      return <FontAwesomeIcon icon={faUser} />;
    case IconType.Skills:
      return <FontAwesomeIcon icon={faLaptopCode} />;
    case IconType.Projects:
      return <FontAwesomeIcon icon={faHeart} />;
    case IconType.File:
      return <FontAwesomeIcon icon={faFilePdf} />;

    case IconType.Sun:
      return <FontAwesomeIcon icon={faSun} />;
    case IconType.Moon:
      return <FontAwesomeIcon icon={faMoon} />;

    default:
      return <i></i>;
  }
}

function getDeviconClass(icon: IconType): string {
  switch (icon) {
    case IconType.CPlusPlus:
      return "devicon-cplusplus-plain";
    case IconType.CSharp:
      return "devicon-csharp-plain";
    case IconType.Unity:
      return "devicon-unity-original";
    case IconType.DirectX:
      return "";
    case IconType.OpenGL:
      return "devicon-opengl-plain";

    case IconType.React:
      return "devicon-react-original";
    case IconType.Gatsby:
      return "devicon-gatsby-plain";
    case IconType.HTML:
      return "devicon-html5-plain";
    case IconType.CSS:
      return "devicon-css3-plain";
    case IconType.JavaScript:
      return "devicon-javascript-plain";
    case IconType.TypeScript:
      return "devicon-typescript-plain";
    case IconType.WordPress:
      return "devicon-wordpress-plain";
    case IconType.Python:
      return "devicon-python-plain";
    case IconType.VisualStudio:
      return "devicon-visualstudio-plain";
    case IconType.VSCode:
      return "devicon-vscode-plain";
    case IconType.Git:
      return "devicon-git-plain";
    case IconType.MSSQL:
      return "devicon-microsoftsqlserver-plain";

    default:
      return "";
  }
}
function getFontAwesomeHexColor(icon: IconType): string {
  switch (icon) {
    case IconType.Twitter:
      return theme.colors.social.twitter;
    case IconType.Github:
      return theme.colors.social.github;
    case IconType.LinkedIn:
      return theme.colors.social.linkedin;
    case IconType.ItchIo:
      return theme.colors.social.itchio;

    case IconType.User:
      return "#000";
    case IconType.Skills:
      return "#000";
    case IconType.Projects:
      return "#000";
    case IconType.File:
      return "#c92e40";

    default:
      return "";
  }
}

const Icon = ({ icon, color }: Props) => {
  let defaultColor: boolean = color == "default";

  return (
    <IconWrapper
      className="icon"
      style={{ color: defaultColor ? getFontAwesomeHexColor(icon) : color }}
    >
      {getIcon(icon, defaultColor)}
    </IconWrapper>
  );
};

Icon.defaultProps = {
  color: "default",
};

export { Icon, IconType };
