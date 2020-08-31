import React from 'react'
import 'modern-css-reset/dist/reset.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { LangProvider } from './src/context/language-context'
import { AgeProvider } from './src/context/age-context'

export const wrapRootElement = ({ element }) => (
  <AgeProvider>
    <LangProvider>
      {element}
    </LangProvider>
  </AgeProvider>
)