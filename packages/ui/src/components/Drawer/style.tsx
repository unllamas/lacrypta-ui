import { styled } from 'styled-components';

interface SheetPrimitiveProps {
  $isOpen?: boolean;
}

export const SheetPrimitive = styled.div<SheetPrimitiveProps>`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  z-index: ${(props) => (props.$isOpen ? 21 : -1)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};

  display: flex;
  align-items: end;
  width: 100%;
  height: 100%;

  background-color: ${(props) =>
    props.$isOpen ? 'rgba(0,0,0,.68)' : 'transparent'};

  transition-duration: 0.2s;

  > div {
    z-index: ${(props) => (props.$isOpen ? 21 : -1)};
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};

    transform: ${(props) =>
      props.$isOpen ? 'translateY(0)' : 'translateY(100%)'};

    transition-duration: 0.4s;
  }
`;

interface SheetContentProps {
  $isOpen?: boolean;
}

export const SheetContent = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: calc(100dvh - 60px);

  margin-top: 60px;
  padding: 24px 0 48px 0;

  background-color: ${(props) => props.theme.colors.background};
  border-radius: 24px 24px 0 0;
`;
export const SheetBody = styled.div`
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);

  padding: 12px 0;
`;
