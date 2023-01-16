import { Fab, useScrollTrigger, Zoom } from '@mui/material'
import { Icon } from '@iconify/react'
import React from 'react'

interface ScrollTopProps {
  window?: () => Window
}

export const ScrollTop = ({ window }: ScrollTopProps) => {
  const trigger = useScrollTrigger({
    target: (window != null) ? window() : undefined,
    disableHysteresis: true,
    threshold: 30 * 8
  })

  const doScrollTop = () => {
    if (window !== undefined) {
      window().scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Zoom in={trigger}>
      <Fab
        size="small"
        color="secondary"
        onClick={doScrollTop}
        sx={{ position: 'fixed', bottom: 84, right: 32 }}
      >
        <Icon
          icon="tabler:square-rounded-chevrons-up"
          width={28}
          height={28}
        />
      </Fab>
    </Zoom>
  )
}
