import { ReactNode } from 'react'

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
}

export type WrapperProps = {
  isVisible: boolean;
}
