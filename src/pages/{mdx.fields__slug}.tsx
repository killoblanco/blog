import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import {
  Box,
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
import { Seo } from '../components/seo/seo'
import { ScrollTop } from '../components/scroll-top'
import { LikeBtn } from '../components/like-button'

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
  <Box component="main" sx={{ mb: 4 }}>
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
    <ScrollTop window={() => window} />
    <LikeBtn window={() => window} />
  </Box>
)

export const Head: HeadFC<PostPageProps, PostPageContext> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { frontmatter } = props.pageContext
  return (<Seo {...frontmatter} />)
}

export const query = graphql`
  query($id: String!) {
    allMdx(filter: {id: {eq: $id}}) {
      nodes {
        frontmatter {
          date(locale: "es-CO", formatString: "MMMM D, YYYY")
          title
          tags
          isDraft
          description
          categories
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
