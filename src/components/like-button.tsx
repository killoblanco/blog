import { Fab, Theme, Typography, useScrollTrigger, Zoom } from '@mui/material'
import React from 'react'
import confetti from 'canvas-confetti'

interface ScrollTopProps {
  window?: () => Window
}

const styles = (t: Theme) => ({
  position: 'fixed',
  bottom: 80,
  [t.breakpoints.up('sm')]: {
    right: '50%',
    transform: 'translateX(-50%)'
  },
  [t.breakpoints.down('sm')]: {
    left: 32
  }
})

export const LikeBtn = ({ window }: ScrollTopProps) => {
  const trigger = useScrollTrigger({
    target: (window != null) ? window() : undefined,
    disableHysteresis: true,
    threshold: 20 * 8
  })

  const doLike = () => {
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.94, x: 0.45 }
    })
  }

  return (
    <Zoom in={trigger}>
      <Fab
        color="info"
        variant="extended"
        onClick={doLike}
        sx={styles}
      >
        <Typography component="span" variant="h5">🎉</Typography>
        &nbsp;Celebrate
      </Fab>
    </Zoom>
  )
}
