import React, { useState, ReactNode, ReactElement } from 'react'

import { Root, Wrapper } from './styled-components'
import { TooltipProps } from '../../types'
import { isFunction } from '../../lib/helpers'

const Tooltip = ({ content, children, delay = 0, duration = 0.1 }: TooltipProps): ReactElement => {
  const [isVisible, setVisibility] = useState(false)

  const handleMouseEnter = (): void => {
    setVisibility(true)
  }

  const handleMouseLeave = (): void => {
    setVisibility(false)
  }

  const renderContent = (): ReactNode => {
    return isFunction(content) ? content({ isVisible }) : content
  }

  return (
    <Root onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <Wrapper delay={delay} duration={duration} isVisible={isVisible}>{renderContent()}</Wrapper>
    </Root>
  )
}

export default Tooltip
