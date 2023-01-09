import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import { Thumbnail } from './thumbnail'
import { Button, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { ThemeToggle } from '../theme-toggle'

export const TopBar = () => (
  <Grid2 container spacing={2} alignItems="center" justifyContent="space-evenly" sx={{ mb: 4 }}>
    <Grid2 xs="auto">
      <Thumbnail />
    </Grid2>
    <Grid2 xs={9} sm="auto">
      <Typography variant="h3">
        Kamilo Vasquez
      </Typography>
    </Grid2>
    <Grid2 xs={9} sm textAlign="right">
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
    <Grid2 xs={2} sm="auto">
      <ThemeToggle />
    </Grid2>
  </Grid2>
)
