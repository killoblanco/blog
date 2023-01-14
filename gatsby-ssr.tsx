import React from 'react'
import { BaseLayout } from './src/components/layouts/base'
import { RecoilRoot } from 'recoil'
import { StylesProvider } from './src/theme/provider'
import 'prismjs/themes/prism-okaidia.min.css'
import 'prismjs/plugins/command-line/prism-command-line.min.css'

export const wrapPageElement = ({ element }: any) => (
  <RecoilRoot>
    <StylesProvider>
      <BaseLayout>
        {element}
      </BaseLayout>
    </StylesProvider>
  </RecoilRoot>
)
