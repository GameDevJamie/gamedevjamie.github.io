import { graphql } from "gatsby";
import { SkillsDataType } from "./skillsData";
import { SocialDataType } from "./socialData";

export type SiteMetadataType = {
  title: string;
  social: SocialDataType[];
  skills: SkillsDataType[];
};

export const siteMetaData = graphql`
  fragment SiteMetadataInfo on Site {
    siteMetadata {
      title
      ...SocialData
      ...SkillsData
    }
  }
`;
