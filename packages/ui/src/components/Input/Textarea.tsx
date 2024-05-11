import { InputBox, TextareaPrimitive } from './style';

interface TextareaProps {
  placeholder: string;
  status?: 'success' | 'error';
  onChange?: (e: any) => void;
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}

export function Textarea(props: TextareaProps) {
  const {
    placeholder,
    status,
    onChange,
    id = '',
    name = '',
    value,
    disabled = false,
  } = props;

  return (
    <InputBox $withIcon={false}>
      <TextareaPrimitive
        $isSuccess={status && status === 'success'}
        $showValidate={!status}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputBox>
  );
}
