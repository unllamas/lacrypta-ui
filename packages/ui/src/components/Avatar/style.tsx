import { styled } from 'styled-components';

const slot = 4;

interface AvatarStyleProps {
  $size: number;
}

export const AvatarStyle = styled.div<AvatarStyleProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size * slot}px;
  height: ${(props) => props.$size * slot}px;

  background-color: ${(props) => props.theme.colors.gray[800]};
  border: 1px solid ${(props) => props.theme.colors.gray[700]};
  border-radius: 50%;

  font-size: 0.6rem;
  color: ${(porps) => porps.theme.colors.text};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
