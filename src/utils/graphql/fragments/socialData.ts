import { graphql } from "gatsby"

export type SocialDataType = {
  name: string
  href: string
  icon: string
}

export const siteMetaData = graphql`
  fragment SocialData on SiteSiteMetadata {
    social {
      name
      href
      icon
    }
  }
`
