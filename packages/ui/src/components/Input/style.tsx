import { styled } from 'styled-components';

interface InputBoxProps {
  $withIcon: boolean;
}

export const InputBox = styled.div<InputBoxProps>`
  position: relative;

  width: 100%;
  max-width: 320px;

  border-radius: 8px;

  input {
    padding-right: ${(props) => (props.$withIcon ? '60px' : '8px')};
  }
`;

interface InputPrimitiveProps {
  $isSuccess?: boolean;
  $showValidate?: boolean;
}

export const InputPrimitive = styled.input<InputPrimitiveProps>`
  flex: 1;
  min-height: 50px;
  width: 100%;

  padding: 8px;
  padding-left: 12px;

  background-color: ${(props) => props.theme.colors.gray[800]};
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.$showValidate
        ? props.theme.colors.gray[700]
        : props.$isSuccess
          ? props.theme.colors.success[600]
          : props.theme.colors.error[600]};

  color: ${(props) => props.theme.colors.text};
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.font.secondary};

  outline: none;

  transition-duration: 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[300]};
  }

  &:not(:disabled) {
    &:hover {
      border-color: ${(props) => props.theme.colors.gray[400]};
    }

    &:active,
    &:focus-visible {
      border-color: ${(props) => props.theme.colors.primary[400]};
    }
  }

  &:disabled {
    opacity: 0.35;

    cursor: not-allowed;
  }
`;

export const InputButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  padding-right: 10px;
`;

export const InputGroupPrimitive = styled.div`
  position: relative;

  display: flex;
  align-items: end;
  max-width: 320px;

  input {
    border-radius: 8px 0 0 8px !important;
  }
`;

export const InputGroupRightPrimitive = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  border-left: 0;
  border-radius: 0 8px 8px 0;

  button {
    width: 100%;
    height: 100%;
    min-height: 50px;

    padding: 0 0.4rem;

    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.gray[700]};
    border-left-color: transparent;
    border-radius: 0 8px 8px 0;

    color: ${(props) => props.theme.colors.primary[400]};

    &:disabled {
      background-color: transparent;
      color: ${(props) => props.theme.colors.gray[600]};
      cursor: not-allowed;
    }

    &:not(:disabled) {
      &:hover {
        opacity: 0.85;
      }

      &:active {
        opacity: 0.65;
      }

      &:focus-visible {
        border-color: ${(props) => props.theme.colors.primary[400]};
        outline: none;
      }
    }
  }
`;

interface FeedbackPrimitiveProps {
  $isShow: boolean;
  $isSuccess: boolean;
}

export const FeedbackPrimitive = styled.div<FeedbackPrimitiveProps>`
  opacity: ${(props) => (props.$isShow ? 1 : 0)};

  display: block;

  margin-top: 4px;

  color: ${(props) =>
    props.$isSuccess ? props.theme.colors.success : props.theme.colors.error};

  /* font-size: 0.7em; */
`;

export const InputWithLabel = styled.div``;

export const InputIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;

  span,
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TextareaPrimitive = styled.textarea<InputPrimitiveProps>`
  width: 100%;
  min-height: 68px;

  padding: 8px;
  padding-left: 12px;

  background-color: ${(props) => props.theme.colors.gray[800]};
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.$showValidate
        ? props.theme.colors.gray[700]
        : props.$isSuccess
          ? props.theme.colors.success[600]
          : props.theme.colors.error[600]};

  color: ${(props) => props.theme.colors.text};
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.font.secondary};

  outline: none;
  resize: none;

  transition-duration: 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[300]};
  }

  &:not(:disabled) {
    &:hover {
      border-color: ${(props) => props.theme.colors.gray[400]};
    }

    &:active,
    &:focus-visible {
      border-color: ${(props) => props.theme.colors.primary[400]};
    }
  }

  &:disabled {
    opacity: 0.35;

    cursor: not-allowed;
  }
`;
export const Pin = styled.div`
  width: 100%;

  .vi__wrapper {
    width: 100%;
  }

  .vi__container {
    width: 100%;
  }

  .vi__character {
    width: 100%;
    flex: 1;

    background-color: ${(props) => props.theme.colors.gray15};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.gray20};

    font-size: initial;
    color: ${(props) => props.theme.colors.text};
    font-size: 0.8em;

    &.vi__character--inactive {
      opacity: 0.35;

      cursor: not-allowed;
    }
  }
`;

export const LabelPrimitive = styled.label`
  margin-bottom: 4px;
`;
