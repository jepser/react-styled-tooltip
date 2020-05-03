import React, { useState, ReactNode, ReactElement } from 'react'

import { Root, Wrapper } from './styled-components'

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
}

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
      {isVisible && (
        <Wrapper isVisible>{renderContent()}</Wrapper>
      )}
    </Root>
  )
}

export default Tooltip
