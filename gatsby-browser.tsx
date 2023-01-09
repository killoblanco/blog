import React from 'react'
import { BaseLayout } from './src/components/layouts/base'
import { RecoilRoot } from 'recoil'
import { StylesProvider } from './src/theme/provider'

export const wrapPageElement = ({ element }: any) => (
  <RecoilRoot>
    <StylesProvider>
      <BaseLayout>
        {element}
      </BaseLayout>
    </StylesProvider>
  </RecoilRoot>
)
