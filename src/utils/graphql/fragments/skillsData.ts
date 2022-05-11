import { graphql } from "gatsby";

export type SkillsDataType = {
  icon: string;
  title: string;
};

export const siteMetaData = graphql`
  fragment SkillsData on SiteSiteMetadata {
    skills {
      icon
      title
    }
  }
`;
