import { Breadcrumbs, Paper, Stack, Theme, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import { readingTime } from './utils/reading-time'

const cardStyles = (t: Theme) => ({
  textDecoration: 'none',
  p: 2,
  '&:hover': {
    boxShadow: t.shadows[4]
  },
  '& .MuiBreadcrumbs-root .MuiBreadcrumbs-ol': {
    justifyContent: 'flex-end'
  }
})

export const PostCard = ({ excerpt, frontmatter, body }: PostCardProps) => (
  <Paper
    elevation={0}
    component={Link}
    to={frontmatter.slug}
    sx={cardStyles}
  >
    <Stack spacing={2}>
      <Typography variant="h5">{frontmatter.title}</Typography>
      <Typography>{excerpt}</Typography>
      <Breadcrumbs separator="·">
        <Typography variant="body2">{frontmatter.date}</Typography>
        <Typography variant="body2">{readingTime(body)}</Typography>
      </Breadcrumbs>
    </Stack>
  </Paper>
)
