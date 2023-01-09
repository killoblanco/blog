import React from 'react'
import { Stack } from '@mui/material'
import { SocialNetwork } from './social-network'
import { PostsCategories } from './posts-cat'

export const SideBar = () => (
  <Stack spacing={2}>
    <SocialNetwork />
    <PostsCategories />
  </Stack>
)
