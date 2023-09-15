import * as React from "react";
import Layout from "components/Layout";
import Home from "sections/home";
import Container from "components/ui/layout/Container";
import SkillBox from "components/skillBox";
import { IconType } from "components/ui/display/Icon";

/*FOR SKILLS
  THREE BOXES BELOW EACH SHOWING A CATEGORY OF SKILLS:

  GAME DEVELOPMENT: C++, C#, UNITY, OpenGL, DirectX
  WEB DEVELOPMENT: REACT, GATSBY, HTML, CSS, WORDPRESS
  SOFTWARE/TOOLS: VS Code, Visual Studio, SQL
*/

export default () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
