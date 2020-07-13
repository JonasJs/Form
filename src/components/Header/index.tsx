import React from 'react';

import { Container, Title, Wrapper } from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  </Container>
);

export default Header;
