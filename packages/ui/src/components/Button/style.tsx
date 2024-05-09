import { styled } from 'styled-components';

import { BaseButtonProps, ButtonCustomProps } from './types';

const handleChangeSize = (size: string) => {
  switch (size) {
    case 'xs':
      return `height: 30px; padding: .6rem .2rem; font-size: .7rem;`;
    case 'sm':
      return `height: 40px; padding: .6rem .5rem; font-size: .8rem;`;
    case 'md':
      return `height: 50px; padding: 0 .8rem; font-size: .8rem;`;
    // Deprecated small and normal
    case 'small':
      return `height: 40px; padding: .6rem .5rem; font-size: .8rem;`;
    case 'normal':
      return `height: 50px; padding: 0 .8rem; font-size: .8rem;`;
  }
};

export const ButtonStyle = styled.button<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 320px;

  border: none;
  border-radius: ${(props) => props.theme.borders.buttonRadius};
  background-color: ${(props) => props.$background};

  color: ${(props) => props.$color};
  font-weight: 700;
  text-align: center;

  cursor: pointer;

  ${(props) => handleChangeSize(props.$size)};

  svg {
    width: 18px;

    color: ${(props) => props.$color};
  }

  &:disabled {
    background-color: transparent;
    color: ${(props) => props.theme.colors.gray50};
    cursor: not-allowed;
  }

  &:not(:disabled) {
    &:hover {
      opacity: 0.85;
    }

    &:active {
      opacity: 0.65;
    }
  }
`;

export const ButtonCustom = styled.button<ButtonCustomProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: ${(props) => (props.$isSmall ? 'inherit' : 1)};
  min-width: ${(props) => (props.$isSmall ? '40px' : '50px')};
  min-height: ${(props) => (props.$isSmall ? '40px' : '50px')};

  padding: ${(props) => (props.$isSmall ? '4px 8px' : '12px 8px')};

  border: none;
  border-radius: ${(props) => props.theme.borders.buttonRadius};
  background-color: ${(props) => props.$background};

  color: ${(props) => props.$color};
  font-size: ${(props) => (props.$isSmall ? '.7em' : '.8em')};
  font-weight: 700;
  text-align: center;

  cursor: pointer;

  svg {
    width: 18px;

    color: ${(props) => props.$color};
  }

  &:not(:disabled) {
    &:hover {
      opacity: 0.85;
    }

    &:active {
      opacity: 0.65;
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray40};
    cursor: not-allowed;
  }
`;

export const ButtonGroupStyle = styled.div`
  display: flex;
  gap: 8px;

  padding: 4px;

  background-color: ${(props) => props.theme.colors.gray15};
  border-radius: 24px;
`;
