import { styled } from 'styled-components';

export const ContainerPrimitive = styled.div<{
  $width: string;
}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.$width};

  margin: 0 auto;
  padding: 0 0.8em;
`;
