import React, { ReactElement, ReactNode } from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './'
import { WrapperProps } from '../../types'

const Wrapper = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '48px' }}>
      { children }
    </div>
  )
}

const DefaultBehaviour = (): ReactElement => {
  return (
    <Wrapper>
      This is a text <Tooltip content='I am the tooltip'>and this the tooltip</Tooltip>
    </Wrapper>
  )
}

const CustomToolTip = ({ isVisible }: WrapperProps): ReactElement => {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <h4 style={{ margin: 0 }}>I am custom content</h4>
      <p style={{ margin: 0 }}>With a lot of content</p>
    </div>
  )
}

const CustomContent = (): ReactElement => {
  return (
    <Wrapper>
      This is a text <Tooltip content={CustomToolTip}>and this the tooltip</Tooltip>
    </Wrapper>
  )
}

storiesOf('Tooltip', module)
  .add('default', DefaultBehaviour)
  .add('with custom content', CustomContent)
