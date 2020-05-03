import { ReactNode } from 'react'

export type WrapperProps = {
  isVisible: boolean;
}

export type TooltipProps = {
  children: ReactNode;
  content: any;
}
