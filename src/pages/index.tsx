import * as React from "react";
import Layout from "components/Layout";
import Home from "sections/home";
import Skills from "sections/Skills";

export default () => {
  return (
    <Layout>
      <Home />
      <Skills />
    </Layout>
  );
};
