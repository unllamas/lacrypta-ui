import { styled } from 'styled-components';

export const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 60px;

  background-color: ${(props) => props.theme.colors.background};
  border-top: 1px solid ${(props) => props.theme.colors.gray[800]};

  .clear-button {
    position: relative;

    span {
      position: absolute;
      top: -2px;
      right: -2px;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;

      background-color: ${(props) => props.theme.colors.error[500]};
      border-radius: 50%;

      font-size: 0.6rem;
      color: ${(props) => props.theme.colors.background};
    }
  }
`;
