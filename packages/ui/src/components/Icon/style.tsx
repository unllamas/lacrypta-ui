import { styled } from 'styled-components';

const slot = 4;

export interface IconStyleProps {
  $size: number;
}

export const IconStyle = styled.div<IconStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.$size * slot}px;
  height: ${(props) => props.$size * slot}px;

  svg,
  img {
    width: 100%;
    height: 100%;
  }
`;
