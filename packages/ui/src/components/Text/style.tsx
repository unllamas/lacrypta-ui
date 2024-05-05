import { styled } from 'styled-components';

export const TextStyle = styled.p<{
  $isBold?: boolean;
  $align?: string;
  $color?: string;
  $size: string;
  $height: string;
}>`
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$size};
  line-height: ${(props) => props.$height};
  text-align: ${(props) => props.$align};
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
`;
