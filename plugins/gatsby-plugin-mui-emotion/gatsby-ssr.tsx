import * as React from 'react'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import { renderToString } from 'react-dom/server'
import getEmotionCache from './getEmotionCache'

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }: any) => {
  const headComponents = getHeadComponents()
  headComponents.sort((x: any, y: any) => {
    if (x.key === 'emotion-css-global' || x.key === 'emotion-css') {
      return -1
    }
    if (y.key === 'style') {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}

export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }: any) => {
  const cache = getEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  const emotionStyles = extractCriticalToChunks(
    renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>)
  )

  setHeadComponents(
    emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={`emotion-${style.key}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))
  )

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html)
}
