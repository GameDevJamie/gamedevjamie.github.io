import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type ProjectData = {
  html: string;
  frontmatter: {
    title: string;
    tags: string[];
    itchio: string;
    thumb: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};

export const query = graphql`
  fragment MarkdownRemarkFragment on MarkdownRemark {
    html
    frontmatter {
      title
      tags
      itchio
      thumb {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`;
