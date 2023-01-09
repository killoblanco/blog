import { Box, styled } from '@mui/material'
import React from 'react'
import starMask from '../../images/star.svg'
import { Link } from 'gatsby'

const Img = styled('img')(({ theme }) => ({
  width: 'inherit',
  aspectRatio: '1 / 1',
  maskImage: `url(${starMask})`,
  maskSize: 'contain',
  maskRepeat: 'no-repeat',
  maskPosition: 'center'
}))

export const Thumbnail = () => (
  <Box
    component={Link}
    to="/"
    sx={t => ({
      width: t.spacing(10),
      height: t.spacing(10),
      filter: `
          drop-shadow(3px 3px 0 ${t.palette.primary.light})
          drop-shadow(-3px -3px 0 ${t.palette.primary.light})
        `,
      margin: '0 auto',
      transition: 'filter 0.2s ease-in-out',
      [t.breakpoints.down('sm')]: {
        width: t.spacing(8),
        height: t.spacing(8)
      }
    })}
  >
    <Img
      src="https://avatars.githubusercontent.com/u/4205975"
      alt="Thumbnail"
    />
  </Box>
)
