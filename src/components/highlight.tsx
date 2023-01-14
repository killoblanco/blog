import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import okadia from 'prism-react-renderer/themes/okaidia'
import { Box, Paper } from '@mui/material'

export const HighlightCode = ({ code, lang }: { code: string, lang?: Language }) => (
  <Highlight {...defaultProps} theme={okadia} code={code} language={lang ?? 'bash'}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Paper
        component="pre"
        className={className}
        style={style}
        sx={t => ({
          p: 2,
          boxShadow: t.shadows[2]
        })}
      >
        {tokens.map((line, i) => (
          <Box key={`line-${i}`} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <Box component="span" key={`lineData-${i}`} {...getTokenProps({ token, key })} />
            ))}
          </Box>
        ))}
      </Paper>
    )}
  </Highlight>
)
