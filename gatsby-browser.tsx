import React from 'react'
import { StylesProvider } from './src/theme/provider'
import { RecoilRoot } from 'recoil'

export const wrapPageElement = ({ element }: any) => {
  return (
    <RecoilRoot>
      <StylesProvider>
        {element}
      </StylesProvider>
    </RecoilRoot>
  )
}
