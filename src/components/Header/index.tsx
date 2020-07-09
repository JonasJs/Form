import React from 'react';

import { Container } from './styles';

interface IHeaderProps {
  children: String;
}

const Header: React.FC<IHeaderProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default Header;
