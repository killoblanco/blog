import { Link, styled, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'

const Wrapper = styled(Grid2)(({ theme }) => ({
  backgroundColor: theme.palette.info.light,
  alignItems: 'flex-end',
  justifyContent: 'space-evenly',
  padding: theme.spacing(5, 4),
  color: theme.palette.getContrastText(theme.palette.info.light),
  outline: `solid ${theme.spacing(0.75)} ${theme.palette.divider}`,
  borderRadius: theme.spacing(1.25, 1.25, 0, 0),
  boxShadow: `${theme.spacing(2)} ${theme.spacing(2)} 0 0 ${theme.palette.primary.dark}`,
  [theme.breakpoints.down('xl')]: {
    boxShadow: `${theme.spacing(1.75)} ${theme.spacing(1.75)} 0 0 ${theme.palette.primary.dark}`
  }
}))

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecorationStyle: 'dotted',
  textDecorationColor: 'inherit',
  textUnderlineOffset: theme.spacing(0.75),
  '&:hover': {
    textDecorationStyle: 'dashed'
  }
}))

export const Footer = () => (
  <Grid2 component="footer" container spacing={0} justifyContent="center">
    <Wrapper xs={12} sm={6}>
      <Typography variant="subtitle2" align="center">
        Hecho con ❤️ & ☕ por&nbsp;
        <StyledLink
          href="https://www.linkedin.com/in/killoblanco/"
          target="_about"
        >
          Kamilo Vasquez
        </StyledLink>
      </Typography>
    </Wrapper>
  </Grid2>
)
