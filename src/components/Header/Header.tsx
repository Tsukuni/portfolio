import * as React from 'react';
import styled from 'styled-components';
import icon from '../../../public/images/header.png';

const Header: React.FC<{}> = () => (
  <Container>
    <Image src={icon} />
  </Container>
);

const Container = styled.div`
  width: 100vw;
  position: fixed;
  padding: 8px;
  top: 0;
`;

const Image = styled.img`
  width: 240px;
`;

export default Header;
