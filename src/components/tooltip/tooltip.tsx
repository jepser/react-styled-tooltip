import React, { useState, ReactNode, ReactElement } from 'react'

import { Root, Wrapper } from './styled-components'
import { TooltipProps } from '../../types'

const Tooltip = ({ content, children }: TooltipProps): ReactElement => {
  const [isVisible, setVisibility] = useState(false)

  const handleMouseEnter = (): void => {
    setVisibility(true)
  }

  const handleMouseLeave = (): void => {
    setVisibility(false)
  }

  const renderContent = (): ReactNode => {
    return content
  }

  return (
    <Root onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <Wrapper isVisible={isVisible}>{renderContent()}</Wrapper>
    </Root>
  )
}

export default Tooltip
