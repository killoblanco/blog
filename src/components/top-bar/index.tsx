import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import { Thumbnail } from './thumbnail'
import { Button } from '@mui/material'
import { Icon } from '@iconify/react'
import { ThemeToggle } from '../theme-toggle'

export const TopBar = () => (
  <Grid2 container spacing={2} alignItems="center" sx={{ mb: 4 }}>
    <Grid2 xs="auto">
      <Thumbnail />
    </Grid2>
    <Grid2 xs textAlign="right">
      <Button
        component="a"
        href="//kamilo.dev"
        target="_about"
        variant="contained"
        endIcon={<Icon icon="tabler:external-link" width={16} height={16} />}
      >
        Acerca de mi
      </Button>
    </Grid2>
    <Grid2 xs="auto">
      <ThemeToggle />
    </Grid2>
  </Grid2>
)
