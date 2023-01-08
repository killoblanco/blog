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
      }
    },
    palette: paletteColor(darkMode ? 'dark' : 'light'),
    typography: {
      fontFamily: 'Readex Pro, sans-serif',
      fontSize: 16,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 }
    }
  })
)
