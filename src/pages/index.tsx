import * as React from "react";
import Layout from "components/Layout";
import Home from "sections/home";
import Skills from "sections/Skills";
import Projects from "sections/projects";

export default () => {
  return (
    <Layout>
      <Home />
      <Projects />
    </Layout>
  );
};
