import { graphql, useStaticQuery } from 'gatsby';
import { ProjectData } from '../fragments/projectData';

type ProjectList = {
  projects: ProjectData[];
};

export const getProjectData = (): ProjectList => {
  const { result } = useStaticQuery(
    graphql`
      query GetProjectDataQuery {
        result: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          projects: nodes {
            ...MarkdownRemarkFragment
          }
        }
      }
    `
  );

  return result;
};
