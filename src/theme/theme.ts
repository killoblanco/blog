import '@fontsource/readex-pro/300.css'
import '@fontsource/readex-pro/400.css'
import '@fontsource/readex-pro/500.css'
import '@fontsource/readex-pro/600.css'
import '@fontsource/readex-pro/700.css'
import { createTheme, responsiveFontSizes, Theme } from '@mui/material'
import { paletteColor } from './palette'

export const theme = (darkMode: boolean): Theme => responsiveFontSizes(
  createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize'
          }
        }
      },
      MuiFab: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize'
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderColor: paletteColor(darkMode ? 'dark' : 'light').primary?.dark
            }
          }
        }
      }
    },
    palette: paletteColor(darkMode ? 'dark' : 'light'),
    typography: {
      fontFamily: 'Readex Pro, sans-serif',
      fontWeightRegular: 300,
      fontSize: 16,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 500 },
      h5: { fontWeight: 500 }
    }
  })
)
