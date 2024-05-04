import { ReactNode, InputHTMLAttributes } from 'react';

export interface FeedbackProps {
  children: ReactNode;
  status?: null | 'success' | 'error';
  show?: boolean;
}

export interface TextareaProps {
  placeholder: string;
  status?: 'success' | 'error';
  onChange?: (e: any) => void;
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}
