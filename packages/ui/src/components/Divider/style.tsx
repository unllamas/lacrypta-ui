import { styled } from 'styled-components';

interface DividerPrimitiveProps {
  $y: string;
}

export const DividerPrimitive = styled.div<DividerPrimitiveProps>`
  width: 100%;

  min-height: ${(props) => props.$y};
`;
