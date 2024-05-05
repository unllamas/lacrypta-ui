import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  spacing?: number;
  variant?: 'unstyled' | 'filled' | 'outline';
}
