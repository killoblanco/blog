import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql, Link } from 'gatsby'
import { Box, Stack, Typography } from '@mui/material'
import { Seo } from '../components/seo/seo'

interface DataType {
  allMdx: {
    nodes: Array<{
      id: string
      excerpt: string
      frontmatter: Frontmatter
    }>
  }
}

const IndexPage: React.FC<PageProps<DataType>> = ({ data }) => (
  <Stack component="main" spacing={2.5}>
    {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
      <Box key={id}>
        <Typography
          component={Link}
          to={frontmatter.slug}
          variant="h5"
        >{frontmatter.title}</Typography>
        <Typography>{excerpt}</Typography>
        <Typography variant="body2">{frontmatter.date}</Typography>
      </Box>
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
        date(fromNow: true, locale: "es-CO")
        title
        slug
      }
    }
  }
}
`

export default IndexPage

export const Head: HeadFC = () => <Seo />
