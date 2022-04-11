import { useStaticQuery, graphql } from "gatsby"
import type { SiteMetadataType } from "../fragments/siteMetadata"

export const useSiteMetadata = (): SiteMetadataType => {
  const { site } = useStaticQuery(
    graphql`
      query getSiteMetadata {
        site {
          ...SiteMetadataInfo
        }
      }
    `
  )
  return site.siteMetadata
}
