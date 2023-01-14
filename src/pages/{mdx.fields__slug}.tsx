import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Divider, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const mdxComponents = {
  p: (props: any) => <Typography variant="body1" sx={{ my: 3 }} {...props} />,
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
  li: (props: any) => <Typography gutterBottom variant="body1" {...props} />,
  h1: (props: any) => <Typography gutterBottom variant="h1" {...props} />,
  h2: (props: any) => <Typography gutterBottom variant="h2" {...props} />,
  h3: (props: any) => <Typography gutterBottom variant="h3" {...props} />,
  h4: (props: any) => <Typography gutterBottom variant="h4" {...props} />,
  h5: (props: any) => <Typography gutterBottom variant="h5" {...props} />,
  h6: (props: any) => <Typography gutterBottom variant="h6" {...props} />,
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

const PostPage: React.FC<PageProps> = ({ children, ...props }) => {
  console.log({ props })
  return (
    <main>
      <MDXProvider components={mdxComponents}>
        {children}
      </MDXProvider>
    </main>
  )
}

export const Head: HeadFC = () => <title />

export default PostPage
