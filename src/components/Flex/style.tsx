import { styled } from 'styled-components';

interface FlexPrimitiveProps {
  $customGap?: string;
  $customDirection: 'row' | 'column';
  $customFlex?: 0 | 1 | 'initial';
  $customJustify?: 'start' | 'end' | 'space-between' | 'center';
  $customAlign?: 'start' | 'center' | 'end';
}

export const FlexPrimitive = styled.div<FlexPrimitiveProps>`
  position: relative;

  display: flex;
  flex-direction: ${(props) => props.$customDirection};
  gap: ${(props) => props.$customGap};
  flex: ${(props) => props.$customFlex};
  justify-content: ${(props) => props.$customJustify};
  align-items: ${(props) => props.$customAlign};
  width: 100%;
`;
