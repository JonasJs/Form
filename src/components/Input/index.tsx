import React, {
  InputHTMLAttributes,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  maxLength?: number;
  type?: string;
  label?: string;
}
interface InputRef {
  focus(): void;
  error(): void;
  success(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { label, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputElementRef.current.focus();
    },
    error: () => {
      inputElementRef.current.style.border = '1px solid #FF4717';
    },
    success: () => {
      inputElementRef.current.style.border = '1px solid #4CAF50';
    },
  }));

  return (
    <Container>
      {label && <label className="formLabel">{label}</label>}
      <input {...rest} ref={inputElementRef} />
    </Container>
  );
};

export default forwardRef(Input);
