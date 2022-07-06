import React from "react";
import { MediaCard } from "../cards";
import { getProjectData } from "utils/graphql/queries/getProjectData";

const ProjectsCarousel = () => {
  const projects = getProjectData().projects;

  const projectCards = projects.map((p, i) => (
    <MediaCard
      title={p.frontmatter.title}
      tags={p.frontmatter.tags}
      img={p.frontmatter.thumb.childImageSharp.gatsbyImageData}
      desc={""}
      key={"skill-" + i}
    />
  ));

  return <div>{projectCards}</div>;
};

export default ProjectsCarousel;
