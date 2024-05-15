import { styled } from 'styled-components';

const slot = 4;

export const CardStyle = styled.div<{
  $padding: string;
  $background: string;
  $border: string;
}>`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  width: 100%;

  padding: ${(props) => props.$padding};

  background-color: ${(props) => props.$background};
  border: 1px solid ${(props) => props.$border};
  border-radius: 12px;
`;
