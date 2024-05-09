import {
  ReactNode,
  CSSProperties,
  ButtonHTMLAttributes,
  ReactElement,
} from 'react';

type Color = 'primary' | 'secondary' | 'error';
type Variant = 'filled' | 'bezeled' | 'bezeledGray' | 'borderless';
// Deprecated small and normal
type Size = 'small' | 'normal' | 'xs' | 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  variant?: Variant;
  // Deprecated small and normal
  size?: Size;
  loading?: boolean;
  componentName?: string;
  tabIndex?: number;
  style?: CSSProperties;
  explicitLoader?: ReactElement;
}

export interface BaseButtonProps {
  $background?: string;
  $color?: string;
  $size: Size;
}

export interface ButtonCustomProps {
  $background?: string;
  $color?: string;
  $isSmall?: boolean;
}
