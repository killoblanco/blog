import { graphql, useStaticQuery } from 'gatsby'

interface SeoQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export const useSiteMeta = () => useStaticQuery<SeoQuery>(
  graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `
)
