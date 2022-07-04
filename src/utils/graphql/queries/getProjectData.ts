import { graphql, useStaticQuery } from "gatsby";
import { ProjectData } from "../fragments/project/projectData";

type ProjectList = {
  projects: ProjectData[];
};

export const getProjectData = (): ProjectList => {
  const { result } = useStaticQuery(
    graphql`
      query GetProjectDataQuery {
        result: allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          projects: nodes {
            ...MarkdownRemarkFragment
          }
        }
      }
    `
  );

  return result;
};
