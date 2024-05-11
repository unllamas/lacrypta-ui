import { styled } from 'styled-components';

interface QRCodeProps {
  size: number;
}

export const QRCode = styled.div<QRCodeProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size ?? 200}px;
  height: ${(props) => props.size ?? 200}px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 12px;

  cursor: pointer;
`;
