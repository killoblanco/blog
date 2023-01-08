import React, { PropsWithChildren, useEffect } from 'react'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { theme } from './theme'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './globals.css'

export const darkModeAtom = atom({
  key: 'darkModeAtom',
  default: localStorage.getItem('darkMode') === 'true'
})

export const useDarkModeToggle = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  }

  return [darkMode, toggleDarkMode]
}
export const StylesProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const darkMode = useRecoilValue(darkModeAtom)
  const setDarkMode = useSetRecoilState(darkModeAtom)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setDarkMode(prefersDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(prefersDarkMode))
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
