'use client';

// Libraries
import React, { FC } from 'react';
import { useTheme } from 'styled-components';

// Types
import { ButtonProps } from './types';

// Styles
import { ButtonStyle } from './style';

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'filled',
  size = 'normal',
  loading = false,
  disabled = false,
  // explicitLoader = <BtnLoader />,
  ...props
}): JSX.Element => {
  const theme = useTheme();
  let backgroundColor: string = 'transparent';
  let textColor: string = theme.colors.text;

  switch (variant) {
    case 'filled':
      backgroundColor = theme.colors[color][400];
      textColor = theme.colors[color][900];
      break;
    case 'bezeled':
      backgroundColor = theme.colors[color][900];
      textColor = theme.colors[color][400];
      break;
    case 'bezeledGray':
      backgroundColor = theme.colors.gray[900];
      textColor = theme.colors[color][400];
      break;
    case 'borderless':
      backgroundColor = 'transparent';
      textColor = theme.colors[color][400];
      break;
  }

  return (
    <ButtonStyle
      $background={backgroundColor}
      $color={textColor}
      $size={size}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Cargando...' : children}
    </ButtonStyle>
  );
};
