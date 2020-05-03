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
  transition: opacity ${(props: WrapperProps): number => props.duration || 0}s ease;
  transition-delay: ${(props: WrapperProps): number => props.delay || 0}s;
  opacity: ${(props: WrapperProps): number => props.isVisible ? 1 : 0};
`
