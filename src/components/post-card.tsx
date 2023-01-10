import { Paper, Stack, Theme, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'

const cardStyles = (t: Theme) => ({
  textDecoration: 'none',
  p: 2,
  '&:hover': {
    boxShadow: t.shadows[4]
  }
})

export const PostCard = ({ excerpt, frontmatter }: PostCardProps) => (
  <Paper
    elevation={0}
    component={Link}
    to={frontmatter.slug}
    sx={cardStyles}
  >
    <Stack spacing={2}>
      <Typography variant="h5">{frontmatter.title}</Typography>
      <Typography>{excerpt}</Typography>
      <Stack direction="row" justifyContent="flex-end">
        <Typography variant="body2">{frontmatter.date}</Typography>
      </Stack>
    </Stack>
  </Paper>
)
