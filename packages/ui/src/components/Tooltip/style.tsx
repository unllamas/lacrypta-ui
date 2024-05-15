import { styled } from 'styled-components';

const slot = 4;

export const TooltipStyle = styled.div<{ $show: boolean }>`
  position: relative;

  width: fit-content;
  height: 100%;

  > div:first-child {
    position: absolute;
    opacity: ${(props) => (props.$show ? 1 : 0)};

    display: flex;
    justify-content: center;
    bottom: 100%;

    width: 100%;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    p {
      width: auto;

      padding: 4px 8px;

      background-color: ${(props) => props.theme.colors.gray[800]};
      border: 1px solid ${(props) => props.theme.colors.gray[700]};
      border-radius: 8px;

      color: ${(props) => props.theme.colors.text};

      transform: translateY(${(props) => (props.$show ? '-8px' : '-4px')});
      transition-duration: 600ms;

      /* &:before {
        content: '';

        position: absolute;
        top: 100%;
        right: 45%;

        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;

        border-top: 4px solid ${(props) => props.theme.colors.gray[700]};
      } */
    }
  }
`;
