import React, { InputHTMLAttributes } from 'react';

import { Container, Content, InputGroup } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
}
const Checkbox: React.FC<CheckboxProps> = ({ label, options, ...rest }) => {
  return (
    <Container>
      {label && <label className="formLabel">{label}</label>}
      <Content>
        {options.map((option, key) => (
          <InputGroup key={key}>
            <input {...option} {...rest} type="checkbox" />
            <p>{option.label}</p>
          </InputGroup>
        ))}
      </Content>
    </Container>
  );
};

export default Checkbox;
