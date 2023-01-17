import { ThemeOptions } from '@mui/material'
import { argbFromHex, hexFromArgb, Scheme, themeFromSourceColor } from '@material/material-color-utilities'

const { schemes, palettes } = themeFromSourceColor(argbFromHex('#C7F598'))
const getColorHex = (mode: 'light' | 'dark') => (color: keyof Scheme) => hexFromArgb(schemes[mode][color] as number)

export const paletteColor = (mode: 'light' | 'dark'): ThemeOptions['palette'] => ({
  mode,
  common: {
    black: hexFromArgb(palettes.primary.tone(10)),
    white: hexFromArgb(palettes.primary.tone(90))
  },
  primary: {
    light: getColorHex(mode)('primaryContainer'),
    main: getColorHex(mode)('primary'),
    dark: getColorHex(mode)('onPrimaryContainer')
  },
  secondary: {
    light: getColorHex(mode)('secondaryContainer'),
    main: getColorHex(mode)('secondary'),
    dark: getColorHex(mode)('onSecondaryContainer')
  },
  error: {
    light: getColorHex(mode)('errorContainer'),
    main: getColorHex(mode)('error'),
    dark: getColorHex(mode)('onErrorContainer')
  },
  info: {
    light: getColorHex(mode)('tertiaryContainer'),
    main: getColorHex(mode)('tertiary'),
    dark: getColorHex(mode)('onTertiaryContainer')
  },
  divider: getColorHex(mode)('outline'),
  background: {
    default: getColorHex(mode)('surface'),
    paper: getColorHex(mode)('surfaceVariant')
  }
})
