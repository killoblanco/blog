import React, { PropsWithChildren } from 'react'
import { Container, Theme } from '@mui/material'
import { TopBar } from '../top-bar'
import Grid2 from '@mui/material/Unstable_Grid2'
import { SideBar } from '../side-bar'

const flexOrder = (order: number) => (t: Theme) => ({
  [t.breakpoints.down('sm')]: { order }
})

export const BaseLayout = ({ children }: PropsWithChildren) => (
  <Container maxWidth="lg" sx={{ my: 4 }}>
    <TopBar />
    <Grid2 container spacing={2}>
      <Grid2 xs={12} md={9} sx={flexOrder(2)}>
        {children}
      </Grid2>
      <Grid2 xs={12} md={3} sx={flexOrder(1)}>
        <SideBar />
      </Grid2>
    </Grid2>
  </Container>
)
