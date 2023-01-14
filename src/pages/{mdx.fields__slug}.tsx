import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import {
  Breadcrumbs,
  Divider,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { readingTime } from '../components/utils/reading-time'

const mdxComponents = {
  a: (props: any) => (
    <Typography gutterBottom
                {...props}
                component="a"
                variant="body1"
                color="primary.dark"
                sx={{
                  textDecoration: 'none',
                  borderBottom: '1px dashed'
                }}
    />
  ),
  table: (props: any) => (
    <TableContainer component={Paper}>
      <Table variant="h6" {...props} />
    </TableContainer>
  ),
  th: (props: any) => <TableHead {...props} />,
  tr: (props: any) => <TableRow {...props} />,
  td: (props: any) => <TableCell {...props} />,
  hr: (props: any) => <Divider {...props} variant="fullWidth" flexItem />
}

const PostPage: React.FC<PageProps<PostPageProps, PostPageContext>> = ({
  children,
  data: { allMdx: { nodes: [post] } },
  pageContext
}) => (
  <main>
    <Typography component="h1" variant="h3" gutterBottom>
      {pageContext.frontmatter.title}
    </Typography>
    <Breadcrumbs separator="·" sx={{
      mb: 3,
      ol: {
        justifyContent: 'flex-end'
      }
    }}>
      <Typography variant="body2" textTransform="capitalize">{post.frontmatter.date}</Typography>
      <Typography variant="body2">{readingTime(post.fields.timeToRead.minutes)}</Typography>
    </Breadcrumbs>
    <Divider variant="fullWidth" flexItem>
      <Typography component="span" variant="h4">
        &nbsp;&nbsp;🦄&nbsp;&nbsp;
      </Typography>
    </Divider>
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  </main>
)

export const Head: HeadFC = () => <title />

export const query = graphql`
  query($id: String!) {
    allMdx(filter: {id: {eq: $id}}) {
      nodes {
        frontmatter {
          date(locale: "es-CO", formatString: "MMMM D, YYYY")
        }
        fields {
          timeToRead {
            minutes
            text
            time
            words
          }
        }
      }
    }
  }
`

export default PostPage
