// Libraries
import React, { InputHTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

// Generic components
import { Label } from '../Label';
import { Divider } from '../Divider';
import { Icon } from '../Icon';
import { Loader, Check, Alert } from '../Icons';

// Styles
import { InputPrimitive, InputBox, InputIcon } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  status?: 'success' | 'error';
  autoFocus?: boolean;
  isLoading?: boolean;
  isChecked?: boolean;
  isError?: boolean;
  label?: string;
}

export function Input(props: InputProps) {
  const theme = useTheme();

  const {
    value,
    type = 'text',
    id = '',
    name = '',
    status,
    isLoading = false,
    isChecked = false,
    isError = false,
    disabled = false,
    label,
  } = props;

  return (
    <InputBox $withIcon={isLoading}>
      {label && (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Divider y={4} />
        </>
      )}
      <InputPrimitive
        $isSuccess={status && status === 'success'}
        $showValidate={!status}
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        value={value}
        {...props}
      />
      {(isLoading || isChecked || isError) && (
        <InputIcon>
          {isLoading && <Icon icon={<Loader />} />}
          {isChecked && (
            <Icon icon={<Check color={theme.colors.success[400]} />} />
          )}
          {isError && <Icon icon={<Alert color={theme.colors.error[400]} />} />}
        </InputIcon>
      )}
    </InputBox>
  );
}
