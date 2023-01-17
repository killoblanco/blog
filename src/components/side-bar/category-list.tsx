import { usePostsCategories } from './hooks/categories'
import { Chip, Stack, Theme } from '@mui/material'
import React from 'react'

const chipStyle = (t: Theme) => ({
  backgroundColor: t.palette.info.light,
  border: `2px solid ${t.palette.divider}`
})

export const CategoryList = () => {
  const categories = usePostsCategories()

  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          sx={chipStyle}
        />
      ))}
    </Stack>
  )
}
