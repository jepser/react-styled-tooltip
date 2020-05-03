import { ReactNode } from 'react'

export type WrapperProps = {
  isVisible: boolean;
  duration?: number;
  delay?: number;
}

export type TooltipProps = {
  children: ReactNode;
  content: any;
  duration?: number;
  delay?: number;
}
