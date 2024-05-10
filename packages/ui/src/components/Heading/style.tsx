import { styled } from 'styled-components';

export const HeadingStyle = styled.div<{
  $align: 'left' | 'center' | 'right';
  $color?: string;
}>`
  color: ${(props) => props.$color};
  text-align: ${(props) => props.$align};
`;
