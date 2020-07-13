import React from 'react';
import ReactSelect, { OptionTypeBase } from 'react-select';

import { Container } from './styles';

interface InputRef {
  error(): void;
  success(): void;
}

const Select: React.RefForwardingComponent<InputRef, OptionTypeBase> = (
  { name, label, selectError, ...rest },
  ref,
) => {
  return (
    <Container>
      {label && <label className="formLabel">{label}</label>}
      <ReactSelect
        {...rest}
        styles={{
          control: (base: any) => ({
            ...base,
            '&:hover': { borderColor: '#0075FF' },
            border: `${
              selectError ? '1px solid #FF4717;' : '1px solid #e0e0e0'
            }`,
            borderRadius: '2px',
          }),
        }}
      />
    </Container>
  );
};

export default Select;
