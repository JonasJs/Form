import React, { InputHTMLAttributes } from 'react';

import { Container, Content } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  options: {
    name: string;
    label: string;
  }[];
}
const RadioButton: React.FC<CheckboxProps> = ({
  label,
  options,
  onChange,
  ...rest
}) => {
  return (
    <Container>
      {label && <label className="formLabel">{label}</label>}
      <Content>
        {options.map((option, key) => (
          <div className="InputGroup" key={key}>
            <input
              {...rest}
              type="radio"
              value={option.label}
              id={option.name}
              defaultChecked={key === 0}
              onChange={onChange}
            />
            <label htmlFor={option.name}>{option.label}</label>
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default RadioButton;
