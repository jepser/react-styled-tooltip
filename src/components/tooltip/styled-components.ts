import styled, { css } from 'styled-components'
import { WrapperProps } from '../../types'

const defaultTooltipStyles = css`
  min-width: 200px;
  max-width: 440px;
  text-align: center;
  padding: 8px;
`

export const Root = styled.span`
  position: relative;
`

export const Wrapper = styled.div`
  ${defaultTooltipStyles};
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 100%;
  transition: opacity .1s ease;
  opacity: ${(props: WrapperProps): number => props.isVisible ? 1 : 0};
`
