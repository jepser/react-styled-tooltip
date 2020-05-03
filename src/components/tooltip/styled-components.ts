import styled, { css } from 'styled-components'

const defaultTooltipStyles = css`
  position: absolute;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 440px;
  left: 50%;
  bottom: 100%;
  text-align: center;
  padding: 8px;
  transition: opacity .2s ease;
`

export const Root = styled.span`
  position: relative;
`

export const Wrapper = styled.div`
  ${defaultTooltipStyles}
`
