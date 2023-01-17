import { Stack, Typography } from '@mui/material'
import React from 'react'
import { CategoryList } from './category-list'

export const PostsCategories = () => (
  <Stack spacing={2}>
    <Typography variant="h5">
      Artículos por temas
    </Typography>
    <CategoryList />
  </Stack>
)
