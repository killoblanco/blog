import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import { Stack, Typography } from '@mui/material'
import { Seo } from '../components/seo/seo'
import { PostCard } from '../components/post-card'

interface DataType {
  allMdx: {
    nodes: PostCardProps[]
  }
}

const IndexPage: React.FC<PageProps<DataType>> = ({ data }) => (
  <Stack component="main" spacing={2.5}>
    <Typography variant="h4">Artículos</Typography>
    {data.allMdx.nodes.map(({ id, ...props }) => (
      <PostCard key={id} id={id} {...props} />
    ))}
  </Stack>
)

export const query = graphql`
query {
  allMdx(
    filter: {frontmatter: {isDraft: {eq: false}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 280)
      frontmatter {
        date(locale: "es-CO", formatString: "MMM D, YYYY")
        title
      }
      fields {
        slug
        timeToRead {
          minutes
        }
      }
    }
  }
}
`

export default IndexPage

export const Head: HeadFC = () => <Seo />
