import { ThemeProps } from './types';

export const baseTheme: ThemeProps = {
  colors: {
    // Base
    black: '#000000',
    white: '#FFFFFF',
    // Brand
    primary: {
      100: '#EBFCCF',
      200: '#D7FA9E',
      300: '#C3F76E',
      400: '#AFF43E',
      500: '#9BF20D',
      600: '#7CC10B',
      700: '#5D9108',
      800: '#3E6105',
      900: '#1F3103',
    },
    secondary: {
      100: '#FCE4F3',
      200: '#F6B6DE',
      300: '#F188CA',
      400: '#EC5AB5',
      500: '#E72DA1',
      600: '#C91786',
      700: '#9C1268',
      800: '#6E0D49',
      900: '#40072B',
    },
    // Grays
    gray: {
      100: '#EBEBEB',
      200: '#D1D1D1',
      300: '#B8B8B8',
      400: '#9E9E9E',
      500: '#858585',
      600: '#6B6B6B',
      700: '#525252',
      800: '#2E2E2E',
      900: '#1C1C1C',
      1000: '#101010',
    },
    // Validations
    success: {
      100: '#E6F3FE',
      200: '#B5DAFD',
      300: '#84C2FB',
      400: '#52A9F9',
      500: '#2191F7',
      600: '#0877DE',
      700: '#065DAD',
      800: '#03284A',
      900: '#010D19',
    },
    warning: {
      100: '#fefae6',
      200: '#fdeca1',
      300: '#fbe271',
      400: '#fad842',
      500: '#f9cf13',
      600: '#d6b005',
      700: '#a78904',
      800: '#776203',
      900: '#483b02',
      1000: '#191401',
    },
    error: {
      100: '#FFE0E0',
      200: '#FFADAD',
      300: '#FF7A7A',
      400: '#FF4747',
      500: '#FF1414',
      600: '#E00000',
      700: '#AD0000',
      800: '#7A0000',
      900: '#470000',
    },
    // General
    background: '#101010',
    text: '#FFFFFF',
  },
  borders: {
    buttonRadius: '8px',
  },
  font: {
    primary: 'system-ui',
    secondary: 'sans-serif',
  },
};
