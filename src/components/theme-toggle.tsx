import React from 'react'
import { Icon } from '@iconify/react'
import { IconButton } from '@mui/material'
import { useDarkModeToggle } from '../theme/provider'

export const ThemeToggle = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkModeToggle()

  return (
    <IconButton onClick={toggleDarkMode}>
      <Icon icon={`tabler:bulb${!darkMode ? '-off' : ''}`} />
    </IconButton>
  )
}
