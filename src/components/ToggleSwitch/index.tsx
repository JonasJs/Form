import React, { InputHTMLAttributes } from 'react';

import { Container, Label } from './styles';

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, ...rest }) => {
  return (
    <Container>
      {label && <label className="formLabel">{label}</label>}
      <Label>
        <input type="checkbox" {...rest} />
        <span></span>
      </Label>
    </Container>
  );
};

export default ToggleSwitch;
