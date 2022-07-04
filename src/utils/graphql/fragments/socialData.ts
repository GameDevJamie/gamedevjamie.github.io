import { graphql } from "gatsby";

export type SocialDataType = {
  name: string;
  href: string;
  icon: string;
};

export const socialData = graphql`
  fragment SocialData on SiteSiteMetadata {
    social {
      name
      href
      icon
    }
  }
`;
