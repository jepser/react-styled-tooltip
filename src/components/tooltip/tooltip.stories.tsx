import React, { ReactElement, ReactNode } from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './'

const Wrapper = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      { children }
    </div>
  )
}

const defaultBehaviour = (): ReactElement => {
  return (
    <Wrapper>
      This is a text <Tooltip content='I am the tooltip'>and this the tooltip</Tooltip>
    </Wrapper>
  )
}

storiesOf('Tooltip', module)
  .add('default', defaultBehaviour)
