import { graphql } from "gatsby"
import { SocialDataType } from "./socialData"

export type SiteMetadataType = {
  title: string
  social: SocialDataType[]
}

export const siteMetaData = graphql`
  fragment SiteMetadataInfo on Site {
    siteMetadata {
      title
      ...SocialData
    }
  }
`
